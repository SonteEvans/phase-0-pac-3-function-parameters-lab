

function introduction(name) {
    return (`Hi, my name is ${name}.`)
}

function introductionWithLanguage(bloom, language) {
    return (`Hi, my name is ${bloom} and I am learning to program in ${language}.`)
}

function introductionWithLanguageOptional(summer, language = "JavaScript") {
    return (`Hi, my name is ${summer} and I am learning to program in ${language}.`)
}