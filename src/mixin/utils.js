
function isClass(o) {
    if (o == null) {
        return 'Null'
    }
    if (o == undefined) {
        return 'Undefined'
    }
    return Object.prototype.toString.call(o).slice(8, -1)
}



export function deepClone(obj) {
    let result, oClass = isClass(obj), key;
    if (oClass === "Object") {
        result = {}
    } else if (oClass === "Array") {
        result = []
    } else {
        return obj
    }
    for (key in obj) {
        let copy = obj[key]
        if (isClass(copy) === "Object") {
            result[key] = this.deepClone(copy)
        } else if (isClass(copy) === "Array") {
            result[key] = this.deepClone(copy)
        } else {
            result[key] = copy
        }
    }
    return result;
}