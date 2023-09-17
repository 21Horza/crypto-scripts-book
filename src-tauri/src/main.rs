// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use cyphers::caesar::*;

pub mod cyphers;
pub mod utils;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            encrypt_caesar, print_caesar,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
