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
/**
 * Check if parameter 1 is undefined, null, empty string or empty array
 *
 * @param val
 * @return {boolean}
 */
function ka_empty (val) {
    return typeof val === "undefined" || val === null || val === "" || (Array.isArray(val) && val.length === 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUva2FfYnVpbGRfcXVlcnlfc3RyLmpzIiwiY29yZS9rYV9wYXJzZV9xdWVyeV9zdHIuanMiLCJrYS1lbXB0eS5qcyIsImthLWludGVydmFsLmpzIiwia2Etcm91dGUuanMiLCJrYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJrYXNpbWlyLXRvb2xzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBCdWlsZCBhIHF1ZXJ5IHN0cmluZyBmcm9tIGFuIG9iamVjdFxuICpcbiAqIDxleGFtcGxlPlxuICogICAgIGthX2J1aWxkX3F1ZXJ5X3N0cih7dmFyMTogXCJ2YWwxXCIsIHZhcjI6IFwidmFsMlwifSk7XG4gKlxuICogICAgIFdpbGwgcmV0dXJuOiBcInZhcjE9dmFsMSZ2YXIyPXZhbDJcIlxuICogPC9leGFtcGxlPlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBpbnB1dFxuICogQHJldHVybiBTdHJpbmdcbiAqL1xuZnVuY3Rpb24ga2FfYnVpbGRfcXVlcnlfc3RyKGlucHV0KSB7XG4gICAgbGV0IGVzYyA9IGVuY29kZVVSSUNvbXBvbmVudDtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoaW5wdXQpXG4gICAgICAgIC5tYXAoa2V5ID0+IGVzYyhrZXkpICsgXCI9XCIgKyBlc2MoaW5wdXRba2V5XSkpXG4gICAgICAgIC5qb2luKFwiJlwiKTtcbn0iLCIvKipcbiAqIERlY29kZSBhIHF1ZXJ5IHN0cmluZyAoYWJjPXZhbCZ2YXIyPXZhbDIpIGludG8gYW4gb2JqZWN0XG4gKlxuICogPGV4YW1wbGU+XG4gKiA8L2V4YW1wbGU+XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHF1ZXJ5XG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGthX3BhcnNlX3F1ZXJ5X3N0cihxdWVyeSkge1xuICAgIGxldCB2YXJzID0gcXVlcnkuc3BsaXQoXCImXCIpO1xuICAgIGxldCByZXQgPSB7fTtcbiAgICBmb3IgKGxldCBjb21wIG9mIHZhcnMpIHtcbiAgICAgICAgaWYgKGNvbXAgPT09IFwiXCIpXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgbGV0IHBhaXIgPSBjb21wLnNwbGl0KFwiPVwiKTtcbiAgICAgICAgcmV0W2RlY29kZVVSSUNvbXBvbmVudChwYWlyWzBdKV0gPSBkZWNvZGVVUklDb21wb25lbnQocGFpclsxXSk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59IiwiLyoqXG4gKiBDaGVjayBpZiBwYXJhbWV0ZXIgMSBpcyB1bmRlZmluZWQsIG51bGwsIGVtcHR5IHN0cmluZyBvciBlbXB0eSBhcnJheVxuICpcbiAqIEBwYXJhbSB2YWxcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGthX2VtcHR5ICh2YWwpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCB2YWwgPT09IG51bGwgfHwgdmFsID09PSBcIlwiIHx8IChBcnJheS5pc0FycmF5KHZhbCkgJiYgdmFsLmxlbmd0aCA9PT0gMCk7XG59XG4iLCJcblxuZnVuY3Rpb24ga2FfaW50ZXJ2YWwobmFtZSwgZm4sIGludGVydmFsKSB7XG5cbn1cblxuXG5jbGFzcyBLYUludGVydmFsIHtcblxuICAgIHNldEFjdGl2ZShhY3RpdmUpIHtcblxuICAgIH1cblxuICAgIGlzQWN0aXZlKCkge1xuXG4gICAgfVxufSIsIlxuXG5jbGFzcyBLYVJvdXRlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9fb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuXG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3t9fVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgb3B0aW9ucyAoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm90b3R5cGUuX19vcHRpb25zID09PSBcInVuZGVmaW5lZFwiKVxuICAgICAgICAgICAgdGhpcy5wcm90b3R5cGUuX19vcHRpb25zID0ga2FfcGFyc2VfcXVlcnlfc3RyKGxvY2F0aW9uLmhhc2guc2xpY2UoMSkpO1xuXG4gICAgICAgIGxldCB0aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgbGV0IGhhbmRsZXIgPSB7XG4gICAgICAgICAgICBzZXQ6ICh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIpID0+IHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbcHJvcGVydHldID0gdmFsdWU7XG5cbiAgICAgICAgICAgICAgICAvLyBEZWJvdW5jZSB1cGRhdGVzIChhbGxvdyBtdWx0aXBsZSB1cGRhdGVzIGJlZm9yZSByb3V0ZSBjaGFuZ2UpXG4gICAgICAgICAgICAgICAgaWYgKHRpbWVvdXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5oYXNoID0ga2FfYnVpbGRfcXVlcnlfc3RyKHRoaXMucHJvdG90eXBlLl9fb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfSwgMTApO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0OiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldFtrZXldID09PSBcIm9iamVjdFwiICYmIHRhcmdldFtrZXldICE9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb3h5KHRhcmdldFtrZXldLCBoYW5kbGVyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eSh0aGlzLnByb3RvdHlwZS5fX29wdGlvbnMsIGhhbmRsZXIpO1xuICAgIH1cblxuICAgIHN0YXRpYyBzZXQgb3B0aW9ucyAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5wcm90b3R5cGUuX19vcHRpb25zID0gdmFsdWU7XG4gICAgICAgIGxvY2F0aW9uLmhhc2ggPSBrYV9idWlsZF9xdWVyeV9zdHIodGhpcy5wcm90b3R5cGUuX19vcHRpb25zKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIGNhbGxiYWNrIG9uIGhhc2ggb3B0aW9ucyBjaGFuZ2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBuYW1lXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICovXG4gICAgc3RhdGljIG9uT3B0aW9uQ2hhbmdlKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm90b3R5cGUuY2FsbGJhY2tzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICB0aGlzLnByb3RvdHlwZS5jYWxsYmFja3MgPSB7fTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLCBlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3RvdHlwZS5fX29wdGlvbnMgPSBrYV9wYXJzZV9xdWVyeV9zdHIobG9jYXRpb24uaGFzaC5zbGljZSgxKSk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgY3VyTmFtZSBpbiB0aGlzLnByb3RvdHlwZS5jYWxsYmFja3MpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhIHRoaXMucHJvdG90eXBlLmNhbGxiYWNrcy5oYXNPd25Qcm9wZXJ0eShjdXJOYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3RvdHlwZS5jYWxsYmFja3NbY3VyTmFtZV0odGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvdG90eXBlLmNhbGxiYWNrc1tuYW1lXSA9IGNhbGxiYWNrO1xuICAgIH1cblxufVxuXG5cblxuXG4iLCIvKipcbiAqIFNlbGVjdCBhIGVsZW1lbnRcbiAqXG4gKiBAcGFyYW0gc2VsZWN0b3JcbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICovXG5mdW5jdGlvbiBrYShzZWxlY3Rvcikge1xuICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3Rvcik7XG59Il19