/**
 * Check if parameter 1 is undefined, null, empty string or empty array
 *
 * @param val
 * @return {boolean}
 */
function ka_empty (val) {
    return typeof val === "undefined" || val === null || val === "" || (Array.isArray(val) && val.length === 0);
}
