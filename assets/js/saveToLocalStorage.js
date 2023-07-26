import { greetingsToSigmaUser } from "./greetingsToSigmaUser.js";

export const saveToLocalStorage = (name, surname, email) => {
    const user = `${name}_${surname}`.toLowerCase()
    let savedData = JSON.parse(localStorage.getItem('users')) || {};
    savedData[user] = email;
    localStorage.setItem('users', JSON.stringify(savedData));
    if (name.toLowerCase() === 'sigma') greetingsToSigmaUser()
}