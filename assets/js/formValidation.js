import { saveToLocalStorage } from "./saveToLocalStorage.js"

const name = document.querySelector('.form__name')
const surname = document.querySelector('.form__surname')
const email = document.querySelector('.form__email')
const alert = document.querySelector('.form__alert')

const textValidation = text => {
    if (!text) return "Enter some value!"
    if (/\d|\s/.test(text)) return "Cannot contain numbers or spaces."
    if (!/[a-zA-Z]*/.test(text)) return "Only latin letters required."
    if (!/^[A-Z]/.test(text)) return "First letter must be capitalized."
    return "ok"
}

const emailValidation = email => {
    if (!email) return "Enter some value!"
    const domain = email.split('@')[1];
    if (
        domain.indexOf('.') === -1 || 
        domain.indexOf('.') === 0 || 
        domain.indexOf('.') === domain.length - 1
        ) return "Invalid domain name."
    return "ok"    
}

export const formValidation = () => {
    const nameValue = name.value
    const surnameValue = surname.value
    const emailValue = email.value
    const isNameValid = `Name field. ${textValidation(nameValue)}`
    const isSurnameValid = `Surname field. ${textValidation(surnameValue)}`
    const isEmailValid = `Email field. ${emailValidation(emailValue)}`

    const allIsValid = isNameValid === `Name field. ok` && isSurnameValid === `Surname field. ok` && isEmailValid === `Email field. ok`
    if (allIsValid) {
        saveToLocalStorage(nameValue, surnameValue, emailValue)
        name.value = '';
        surname.value = '';
        email.value = '';
        alert.classList.remove('form__alert--none');
        alert.classList.remove('form__alert--false');
        alert.classList.add('form__alert--true');
        alert.innerHTML = `<p class="form__true">Your subscription was successful</p>`;
    

    
    } else {
        alert.classList.remove('form__alert--none');
        alert.classList.remove('form__alert--true');
        alert.classList.add('form__alert--false');
        alert.innerHTML = ''
        if (isNameValid !== `Name field. ok`) {
            const pn = document.createElement('p')
            pn.classList.add('form__false')
            pn.innerText = isNameValid
            alert.append(pn)
        }
        if (isSurnameValid !== `Surname field. ok`) {
            const ps = document.createElement('p')
            ps.classList.add('form__false')
            ps.innerText = isSurnameValid
            alert.append(ps)
        }
        if (isEmailValid !== `Email field. ok`) {
            const pe = document.createElement('p')
            pe.classList.add('form__false')
            pe.innerText = isEmailValid
            alert.append(pe)
        }
    }
}   