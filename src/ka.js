/**
 * Select a element by id
 *
 * @param selector
 * @return {HTMLElement}
 */
function ka(selector) {
    let el = document.getElementById(selector);
    if (el === null)
        throw `Element id '${selector}' not found`;
    return el;
}
