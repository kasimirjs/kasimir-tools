/**
 * Build a query string from an object
 *
 * <example>
 *     ka_build_query_str({var1: "val1", var2: "val2"});
 *
 *     Will return: "var1=val1&var2=val2"
 * </example>
 *
 * @param {object} input
 * @return String
 */
function ka_build_query_str(input) {
    let esc = encodeURIComponent;
    return Object.keys(input)
        .map(key => esc(key) + "=" + esc(input[key]))
        .join("&");
}