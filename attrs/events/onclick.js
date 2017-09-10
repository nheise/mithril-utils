module.exports = function (fn, attrs = {}) {
    attrs.onclick = fn
    return attrs
}