var withAttr = require( "mithril/util/withAttr" )

module.exports = function (fn, attrs = {}) {
    attrs.onchange = withAttr( "value", fn )
    attrs.value = fn()
    return attrs
}