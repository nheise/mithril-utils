const WHITESPACE = ' '

function toClass(classes, attrs = {}) {
	var classStr = Object.keys( classes ).filter( key => !!classes[key] ).join( WHITESPACE )
    if( classStr.length > 0 ) { 
      attrs["class"] = classStr
    }
    return attrs
}

module.exports = toClass;