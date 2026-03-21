export default function passwordGenerator(length, isNumber, isChar) {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (isNumber) {
        chars += "0123456789";
    }

    if (isChar) {
        chars += "!@#$%^&*()_+[]{}|;:,.<>?";
    }

    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    return password;
}
