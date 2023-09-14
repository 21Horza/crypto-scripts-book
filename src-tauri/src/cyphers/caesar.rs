use macro_rules_attribute::apply;
use crate::utils::macros::func;

#[tauri::command]
#[apply(func)]
pub fn caesar(msg: &str, shift: u8) -> String {
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

#[tokio::main]
#[tauri::command]
pub async fn print_caesar() -> String {
    return caesar_source().to_string();
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn caesar_rot_13() {
        assert_eq!(caesar("hello world", 3), "khoor zruog");
    }
}