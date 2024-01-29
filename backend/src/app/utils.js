export const generateAppId = (name) => {
    const formattedText = name.replace(/\s/g, '').toUpperCase();
    const randomNumber = Math.floor(Math.random() * 9000) + 1000;
    const code = formattedText.slice(0, 3) + randomNumber;

    return code;
}