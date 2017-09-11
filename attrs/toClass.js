const WHITESPACE = ' '

function hasText(str) {
    return str.trim().length > 0
}

function toClass(classes, attrs = {}) {
	var classes = Object.keys( classes ).filter( key => !!classes[key] )
	if (attrs["class"]) {
      classes.push(attrs["class"])
    }
	var classStr = classes.join( WHITESPACE )
    if( hasText( classStr ) ) { 
      attrs["class"] = classStr
    }
    return attrs
}

module.exports = toClass;