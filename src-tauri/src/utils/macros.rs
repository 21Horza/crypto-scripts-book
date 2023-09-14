#[macro_export]
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

pub use func;