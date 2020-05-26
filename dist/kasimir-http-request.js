/**
 * Infracamp's Kasimir Http Request
 *
 * Ajax Request library
 *
 * Repository: https://github.com/kasimirjs/kasmimir-http-request
 *
 * @see https://infracamp.org/project/kasimir
 * @author Matthias Leuffen <m@tth.es>
 */
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
/**
 * Decode a query string (abc=val&var2=val2) into an object
 *
 * <example>
 * </example>
 *
 * @param {String} query
 * @return {Object}
 */
function ka_parse_query_str(query) {
    let vars = query.split("&");
    let ret = {};
    for (let comp of vars) {
        if (comp === "")
            continue;
        let pair = comp.split("=");
        ret[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }
    return ret;
}


function ka_interval(name, fn, interval) {

}


class KaInterval {

    setActive(active) {

    }

    isActive() {

    }
}


class KaRoute {

    constructor() {
        this.__options = {};
    }



    /**
     *
     * @return {{}}
     */
    static get options () {
        if (typeof this.prototype.__options === "undefined")
            this.prototype.__options = ka_parse_query_str(location.hash.slice(1));

        let timeout = null;
        let handler = {
            set: (target, property, value, receiver) => {
                target[property] = value;

                // Debounce updates (allow multiple updates before route change)
                if (timeout !== null) {
                    window.clearTimeout(timeout);
                    timeout = null;
                }

                timeout = window.setTimeout(e => {
                    location.hash = ka_build_query_str(this.prototype.__options);
                }, 10);

                return true;
            },
            get: (target, key) => {
                if (typeof target[key] === "object" && target[key] !== null)
                    return new Proxy(target[key], handler);
                return target[key];
            }

        };
        return new Proxy(this.prototype.__options, handler);
    }

    static set options (value) {
        this.prototype.__options = value;
        location.hash = ka_build_query_str(this.prototype.__options);
    }


    /**
     * Register callback on hash options change
     *
     * @param name
     * @param callback
     */
    static onOptionChange(name, callback) {
        if (typeof this.prototype.callbacks === "undefined") {
            this.prototype.callbacks = {};
            window.addEventListener("hashchange", e => {
                this.prototype.__options = ka_parse_query_str(location.hash.slice(1));
                for (let curName in this.prototype.callbacks) {
                    if ( ! this.prototype.callbacks.hasOwnProperty(curName))
                        continue;
                    this.prototype.callbacks[curName](this.options);
                }
            })
        }
        this.prototype.callbacks[name] = callback;
    }

}





/**
 * Select a element
 *
 * @param selector
 * @return {HTMLElement}
 */
function ka(selector) {
    return document.getElementById(selector);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUva2FfYnVpbGRfcXVlcnlfc3RyLmpzIiwiY29yZS9rYV9wYXJzZV9xdWVyeV9zdHIuanMiLCJrYS1pbnRlcnZhbC5qcyIsImthLXJvdXRlLmpzIiwia2EuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Imthc2ltaXItaHR0cC1yZXF1ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBCdWlsZCBhIHF1ZXJ5IHN0cmluZyBmcm9tIGFuIG9iamVjdFxuICpcbiAqIDxleGFtcGxlPlxuICogICAgIGthX2J1aWxkX3F1ZXJ5X3N0cih7dmFyMTogXCJ2YWwxXCIsIHZhcjI6IFwidmFsMlwifSk7XG4gKlxuICogICAgIFdpbGwgcmV0dXJuOiBcInZhcjE9dmFsMSZ2YXIyPXZhbDJcIlxuICogPC9leGFtcGxlPlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBpbnB1dFxuICogQHJldHVybiBTdHJpbmdcbiAqL1xuZnVuY3Rpb24ga2FfYnVpbGRfcXVlcnlfc3RyKGlucHV0KSB7XG4gICAgbGV0IGVzYyA9IGVuY29kZVVSSUNvbXBvbmVudDtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoaW5wdXQpXG4gICAgICAgIC5tYXAoa2V5ID0+IGVzYyhrZXkpICsgXCI9XCIgKyBlc2MoaW5wdXRba2V5XSkpXG4gICAgICAgIC5qb2luKFwiJlwiKTtcbn0iLCIvKipcbiAqIERlY29kZSBhIHF1ZXJ5IHN0cmluZyAoYWJjPXZhbCZ2YXIyPXZhbDIpIGludG8gYW4gb2JqZWN0XG4gKlxuICogPGV4YW1wbGU+XG4gKiA8L2V4YW1wbGU+XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHF1ZXJ5XG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGthX3BhcnNlX3F1ZXJ5X3N0cihxdWVyeSkge1xuICAgIGxldCB2YXJzID0gcXVlcnkuc3BsaXQoXCImXCIpO1xuICAgIGxldCByZXQgPSB7fTtcbiAgICBmb3IgKGxldCBjb21wIG9mIHZhcnMpIHtcbiAgICAgICAgaWYgKGNvbXAgPT09IFwiXCIpXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgbGV0IHBhaXIgPSBjb21wLnNwbGl0KFwiPVwiKTtcbiAgICAgICAgcmV0W2RlY29kZVVSSUNvbXBvbmVudChwYWlyWzBdKV0gPSBkZWNvZGVVUklDb21wb25lbnQocGFpclsxXSk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59IiwiXG5cbmZ1bmN0aW9uIGthX2ludGVydmFsKG5hbWUsIGZuLCBpbnRlcnZhbCkge1xuXG59XG5cblxuY2xhc3MgS2FJbnRlcnZhbCB7XG5cbiAgICBzZXRBY3RpdmUoYWN0aXZlKSB7XG5cbiAgICB9XG5cbiAgICBpc0FjdGl2ZSgpIHtcblxuICAgIH1cbn0iLCJcblxuY2xhc3MgS2FSb3V0ZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fX29wdGlvbnMgPSB7fTtcbiAgICB9XG5cblxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt7fX1cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IG9wdGlvbnMgKCkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvdG90eXBlLl9fb3B0aW9ucyA9PT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgICAgIHRoaXMucHJvdG90eXBlLl9fb3B0aW9ucyA9IGthX3BhcnNlX3F1ZXJ5X3N0cihsb2NhdGlvbi5oYXNoLnNsaWNlKDEpKTtcblxuICAgICAgICBsZXQgdGltZW91dCA9IG51bGw7XG4gICAgICAgIGxldCBoYW5kbGVyID0ge1xuICAgICAgICAgICAgc2V0OiAodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W3Byb3BlcnR5XSA9IHZhbHVlO1xuXG4gICAgICAgICAgICAgICAgLy8gRGVib3VuY2UgdXBkYXRlcyAoYWxsb3cgbXVsdGlwbGUgdXBkYXRlcyBiZWZvcmUgcm91dGUgY2hhbmdlKVxuICAgICAgICAgICAgICAgIGlmICh0aW1lb3V0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24uaGFzaCA9IGthX2J1aWxkX3F1ZXJ5X3N0cih0aGlzLnByb3RvdHlwZS5fX29wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH0sIDEwKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldDogKHRhcmdldCwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXRba2V5XSA9PT0gXCJvYmplY3RcIiAmJiB0YXJnZXRba2V5XSAhPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm94eSh0YXJnZXRba2V5XSwgaGFuZGxlcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgUHJveHkodGhpcy5wcm90b3R5cGUuX19vcHRpb25zLCBoYW5kbGVyKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0IG9wdGlvbnMgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMucHJvdG90eXBlLl9fb3B0aW9ucyA9IHZhbHVlO1xuICAgICAgICBsb2NhdGlvbi5oYXNoID0ga2FfYnVpbGRfcXVlcnlfc3RyKHRoaXMucHJvdG90eXBlLl9fb3B0aW9ucyk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBjYWxsYmFjayBvbiBoYXNoIG9wdGlvbnMgY2hhbmdlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqL1xuICAgIHN0YXRpYyBvbk9wdGlvbkNoYW5nZShuYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvdG90eXBlLmNhbGxiYWNrcyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdGhpcy5wcm90b3R5cGUuY2FsbGJhY2tzID0ge307XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImhhc2hjaGFuZ2VcIiwgZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm90b3R5cGUuX19vcHRpb25zID0ga2FfcGFyc2VfcXVlcnlfc3RyKGxvY2F0aW9uLmhhc2guc2xpY2UoMSkpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGN1ck5hbWUgaW4gdGhpcy5wcm90b3R5cGUuY2FsbGJhY2tzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggISB0aGlzLnByb3RvdHlwZS5jYWxsYmFja3MuaGFzT3duUHJvcGVydHkoY3VyTmFtZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm90b3R5cGUuY2FsbGJhY2tzW2N1ck5hbWVdKHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3RvdHlwZS5jYWxsYmFja3NbbmFtZV0gPSBjYWxsYmFjaztcbiAgICB9XG5cbn1cblxuXG5cblxuIiwiLyoqXG4gKiBTZWxlY3QgYSBlbGVtZW50XG4gKlxuICogQHBhcmFtIHNlbGVjdG9yXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAqL1xuZnVuY3Rpb24ga2Eoc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3IpO1xufSJdfQ==
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUva2FfYnVpbGRfcXVlcnlfc3RyLmpzIiwiY29yZS9rYV9wYXJzZV9xdWVyeV9zdHIuanMiLCJrYS1pbnRlcnZhbC5qcyIsImthLXJvdXRlLmpzIiwia2EuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Imthc2ltaXItaHR0cC1yZXF1ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBCdWlsZCBhIHF1ZXJ5IHN0cmluZyBmcm9tIGFuIG9iamVjdFxuICpcbiAqIDxleGFtcGxlPlxuICogICAgIGthX2J1aWxkX3F1ZXJ5X3N0cih7dmFyMTogXCJ2YWwxXCIsIHZhcjI6IFwidmFsMlwifSk7XG4gKlxuICogICAgIFdpbGwgcmV0dXJuOiBcInZhcjE9dmFsMSZ2YXIyPXZhbDJcIlxuICogPC9leGFtcGxlPlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBpbnB1dFxuICogQHJldHVybiBTdHJpbmdcbiAqL1xuZnVuY3Rpb24ga2FfYnVpbGRfcXVlcnlfc3RyKGlucHV0KSB7XG4gICAgbGV0IGVzYyA9IGVuY29kZVVSSUNvbXBvbmVudDtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoaW5wdXQpXG4gICAgICAgIC5tYXAoa2V5ID0+IGVzYyhrZXkpICsgXCI9XCIgKyBlc2MoaW5wdXRba2V5XSkpXG4gICAgICAgIC5qb2luKFwiJlwiKTtcbn0iLCIvKipcbiAqIERlY29kZSBhIHF1ZXJ5IHN0cmluZyAoYWJjPXZhbCZ2YXIyPXZhbDIpIGludG8gYW4gb2JqZWN0XG4gKlxuICogPGV4YW1wbGU+XG4gKiA8L2V4YW1wbGU+XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHF1ZXJ5XG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGthX3BhcnNlX3F1ZXJ5X3N0cihxdWVyeSkge1xuICAgIGxldCB2YXJzID0gcXVlcnkuc3BsaXQoXCImXCIpO1xuICAgIGxldCByZXQgPSB7fTtcbiAgICBmb3IgKGxldCBjb21wIG9mIHZhcnMpIHtcbiAgICAgICAgaWYgKGNvbXAgPT09IFwiXCIpXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgbGV0IHBhaXIgPSBjb21wLnNwbGl0KFwiPVwiKTtcbiAgICAgICAgcmV0W2RlY29kZVVSSUNvbXBvbmVudChwYWlyWzBdKV0gPSBkZWNvZGVVUklDb21wb25lbnQocGFpclsxXSk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59IiwiXG5cbmZ1bmN0aW9uIGthX2ludGVydmFsKG5hbWUsIGZuLCBpbnRlcnZhbCkge1xuXG59XG5cblxuY2xhc3MgS2FJbnRlcnZhbCB7XG5cbiAgICBzZXRBY3RpdmUoYWN0aXZlKSB7XG5cbiAgICB9XG5cbiAgICBpc0FjdGl2ZSgpIHtcblxuICAgIH1cbn0iLCJcblxuY2xhc3MgS2FSb3V0ZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fX29wdGlvbnMgPSB7fTtcbiAgICB9XG5cblxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt7fX1cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IG9wdGlvbnMgKCkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvdG90eXBlLl9fb3B0aW9ucyA9PT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgICAgIHRoaXMucHJvdG90eXBlLl9fb3B0aW9ucyA9IGthX3BhcnNlX3F1ZXJ5X3N0cihsb2NhdGlvbi5oYXNoLnNsaWNlKDEpKTtcblxuICAgICAgICBsZXQgdGltZW91dCA9IG51bGw7XG4gICAgICAgIGxldCBoYW5kbGVyID0ge1xuICAgICAgICAgICAgc2V0OiAodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W3Byb3BlcnR5XSA9IHZhbHVlO1xuXG4gICAgICAgICAgICAgICAgLy8gRGVib3VuY2UgdXBkYXRlcyAoYWxsb3cgbXVsdGlwbGUgdXBkYXRlcyBiZWZvcmUgcm91dGUgY2hhbmdlKVxuICAgICAgICAgICAgICAgIGlmICh0aW1lb3V0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24uaGFzaCA9IGthX2J1aWxkX3F1ZXJ5X3N0cih0aGlzLnByb3RvdHlwZS5fX29wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH0sIDEwKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldDogKHRhcmdldCwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXRba2V5XSA9PT0gXCJvYmplY3RcIiAmJiB0YXJnZXRba2V5XSAhPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm94eSh0YXJnZXRba2V5XSwgaGFuZGxlcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgUHJveHkodGhpcy5wcm90b3R5cGUuX19vcHRpb25zLCBoYW5kbGVyKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0IG9wdGlvbnMgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMucHJvdG90eXBlLl9fb3B0aW9ucyA9IHZhbHVlO1xuICAgICAgICBsb2NhdGlvbi5oYXNoID0ga2FfYnVpbGRfcXVlcnlfc3RyKHRoaXMucHJvdG90eXBlLl9fb3B0aW9ucyk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBjYWxsYmFjayBvbiBoYXNoIG9wdGlvbnMgY2hhbmdlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqL1xuICAgIHN0YXRpYyBvbk9wdGlvbkNoYW5nZShuYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvdG90eXBlLmNhbGxiYWNrcyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdGhpcy5wcm90b3R5cGUuY2FsbGJhY2tzID0ge307XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImhhc2hjaGFuZ2VcIiwgZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm90b3R5cGUuX19vcHRpb25zID0ga2FfcGFyc2VfcXVlcnlfc3RyKGxvY2F0aW9uLmhhc2guc2xpY2UoMSkpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGN1ck5hbWUgaW4gdGhpcy5wcm90b3R5cGUuY2FsbGJhY2tzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggISB0aGlzLnByb3RvdHlwZS5jYWxsYmFja3MuaGFzT3duUHJvcGVydHkoY3VyTmFtZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm90b3R5cGUuY2FsbGJhY2tzW2N1ck5hbWVdKHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3RvdHlwZS5jYWxsYmFja3NbbmFtZV0gPSBjYWxsYmFjaztcbiAgICB9XG5cbn1cblxuXG5cblxuIiwiLyoqXG4gKiBTZWxlY3QgYSBlbGVtZW50XG4gKlxuICogQHBhcmFtIHNlbGVjdG9yXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAqL1xuZnVuY3Rpb24ga2Eoc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3IpO1xufSJdfQ==