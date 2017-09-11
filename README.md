# mithril-utils

[Usage](#usage) | [API](#api)

Utilities for Mithril

## Usage

### Basic Usage

For basic useage, import the hole utilities bundle via require import.

```javascript
var m = require('mithril')
var mu = require('mithril-utils')

var div = m( "div", mu.attrs.onclick( executeMeWhenDivClicked ) )
```

To reduce dependencies, you can import modules the direct way.

```javascript
var m = require('mithril')
var onclick = require('mithril-utils/attrs/onclick')

var div = m( "div", onclick( executeMeWhenDivClicked ) )
```

### Create CSS Class Attribute

```javascript
var toClass = require("mithril-utils/attrs/toClass")
var div = m( "div", toClass( {
  "highlight": ctrl.isHighlighted(),
  "bold": ctrl.isBold(),
  "italic":  ctrl.isItalic()
  } ) )

// when ctrl.isHighlighted() == true
// when ctrl.isBold() == false
// when ctrl.isItalic() == true
// will create { 'class': 'highlight italic' }
```

### Create Event bi-directional binding

```javascript
m( "input", ma().name( "description" ).value( "initialValue" ).oninput( ctrl.setDescription ).get() )
```

---

## API

### Create the Builder

#### Builder ma( [Object givenAttributes] )

Creates a new instance of the builder. If you have attributes already, you can them handover via optional parameter.

### Builder

#### Builder builder.new( [Object givenAttributes] )

Creates a new instance of the builder. If you have attributes already, you can them handover via optional parameter.

---
#### Object builder.get()

Creates the attribute object.

---
#### Builder builder.css( String cssClassName, Boolean useit [,String cssClassName, Boolean useIt ] )

Can be invoked as often you like.
The last class of two or more identical class strings will win.

---
#### Builder builder.id( String id )

---
#### Builder builder.key( String key )

---
#### Builder builder.onclick( Function callback )

---
#### Builder builder.value( String value )

---
#### Builder builder.oninput( Function callback [, Boolean useMithrilWithAttrFunction [, Object thisArg ]] )

---
#### Builder builder.onchange( Function callback [, Boolean useMithrilWithAttrFunction [, Object thisArg ]] )

---
#### Builder builder.withAttr( String attrName, String event, Object initialValue, Function callback [, Object thisArg ] )

This will invoke internally:
```javascript
attrs[attrName] = initialValue
attrs[event] = m.withAttr( attrName, callback, thisArg )
```

---

#### Builder builder.set( String key, Any value )

Set any attribute you like.
