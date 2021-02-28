
function validateEmail(email) {
    const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regExp.test(String(email).toLowerCase());
}

export const validation = (value = "", rules = {}, name) => {
    if (Object.keys(rules).length === 0) {
        return 'Validation rules is empty!'
    }

    if ("minLength" in rules && value.length < rules.minLength) {
        return `Поле ${name} должно быть длинной не менее ${rules.minLength} символов!`
    }

    if ("maxLength" in rules && value.length > rules.maxLength) {
        return `Поле ${name} должно быть длинной не более ${rules.maxLength} символов!`
    }

    if ("isRequired" in rules && rules.isRequired && value.length === 0) {
        return `Поле ${name} обязательно к заполнению!`
    }

    if ("isEmail" in rules && rules.isEmail && !validateEmail(value)) {
        return 'Некорректный адресс почты!'
    }

    return false
}