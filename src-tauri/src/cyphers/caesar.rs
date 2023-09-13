#![allow(dead_code)]

use macro_rules_attribute::apply;

macro_rules! func {
    ($(#[$attr:meta])* $vis:vis fn $name:ident $($tt:tt)+) => {
        $(#[$attr])* $vis fn $name $($tt)+

        ::paste::paste! {
            pub fn [< $name _source >]() -> String {
                let syntax_tree = ::syn::parse_file(stringify!(fn $name $($tt)+)).unwrap();
                ::prettyplease::unparse(&syntax_tree)
            }
        }
    }
}

#[tokio::main]
#[tauri::command]
#[apply(func)]
pub async fn caesar(msg: &str, shift: u8) -> String {
    msg.chars()
        .map(|c| {
            if c.is_ascii_alphabetic() {
                let first = if c.is_ascii_lowercase() {b'a'} else {b'A'};
                (first + (c as u8 + shift - first) % 26) as char
            } else {
                c
            }
        })
        .collect::<String>()
}

#[tauri::command]
pub fn print_caesar() {
    println!("{}", caesar_source());
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn caesar_rot_13() {
        assert_eq!(caesar("hello world", 3), "khoor zruog");
    }
}