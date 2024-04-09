function outerElementClassInjector(html, element_class_dictionary) {
    if (!html || !element_class_dictionary) {
        return html;
    }
    let modifiedHtml = html;
    for (let element in element_class_dictionary) {
        const classToAdd = element_class_dictionary[element];
        const regex = new RegExp(`<${element}>`);
        modifiedHtml = modifiedHtml.replace(regex, `<${element} class="${classToAdd}">`);
    }
    return modifiedHtml;
}

module.exports = outerElementClassInjector;