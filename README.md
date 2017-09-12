# mithril-utils

[Usage](#usage) | [API](#api)

Utilities for Mithril

## Usage

### Simple Usage

For simple useage, import the hole utilities bundle via require import.

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
m( "input", mu.attrs.onchange( model.description ) )
```

---

## API

### Attrs module bundle

The attrs module bundles functionality to create the attributes object for the mithril m function

#### Object attrs.toClass( Object css [Object prevGenAttr] )

The toClass function will create from a give object like this:

var css = {
  "highlight": isHighlighted(),
  "bold": isBold(),
  "italic":  isItalic()
}

When the evaluation of the values are like this:

isHighlighted() == true
isBold() == false
isItalic() == true

It returnd an object that can be used to stile that div as shown:

m( "div", { 'class': 'highlight italic' } )

---

#### Object attrs.onclick( Function fn [,Object prevGenAttr] )

Creates an object: { "onclick": fn }

That can be used to create a button like this:

m( "button", attrs.onclick( fn ) )

---

#### Object attrs.onchange( Function fn [, Object prevGenAttr] )

Creates an object:
{ 
  "onchange": m.withAttr( "value", fn ),
  "value": fn()
}

That can be used to create a two way bound input like this:

m( "input", attrs.onchange( fn ) )
