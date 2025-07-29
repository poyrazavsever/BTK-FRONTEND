import * as Yup from "yup";

export const stepSchemas = [
    // 1. Adım: İsim Soyisim, E-posta
    Yup.object({
        name: Yup.string().required("Ad Soyad zorunlu"),
        email: Yup.string()
            .email("Geçerli bir e-posta girin")
            .required("E-posta zorunlu"),
    }),
    // 2. Adım: Şifre, Yeniden Şifre
    Yup.object({
        password: Yup.string()
            .min(8, "En az 8 karakter olmalı")
            .required("Şifre zorunlu"),
        passwordConfirm: Yup.string()
            .oneOf([Yup.ref("password")], "Şifreler eşleşmiyor")
            .required("Şifre tekrarı zorunlu"),
    }),
    // 3. Adım: Telefon (opsiyonel)
    Yup.object({
        phone: Yup.string()
            .matches(
                /^$|^(\+90|0)?[1-9][0-9]{9}$/g,
                "Geçerli bir telefon numarası girin"
            )
            .nullable(),
    }),
    // 4. Adım: Kod
    Yup.object({
        code: Yup.string().length(5, "5 haneli kod girin").required("Kod zorunlu"),
    }),
];

export const initialValues = {
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    phone: "",
    code: "",
};
