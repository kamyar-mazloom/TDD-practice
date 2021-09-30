function capitalize(string) {
    let capitalizedString = string[0].toUpperCase() + string.substring(1)
    return capitalizedString
}

export{capitalize}