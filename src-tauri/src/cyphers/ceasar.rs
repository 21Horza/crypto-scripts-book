#![allow(dead_code)]

#[tauri::command]
pub fn ceasar(msg: &str, shift: u8) -> String {
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

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn caesar_rot_13() {
        assert_eq!(ceasar("hello world", 3), "khoor zruog");
    }
}