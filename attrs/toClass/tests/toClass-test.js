var o = require("ospec")

var toClass = require('../toClass.js')

o.spec("toClass", function() {
  
  o("when attribute is evaluate to true, use it as css class", function() {
    var attrs = toClass( {'my-class': true} )
    o( attrs["class"] ).equals( "my-class" )
  })
  o("when attribute is evaluate to false, don't use it as css class", function() {
    var attrs = toClass( {'my-class': false} )
    o( attrs["class"] ).equals( undefined )
  })
  o("when two or more attribute are evaluate to true, connect them as css class", function() {
    var attrs = toClass( {'my-class': true, 'my-class2': false, 'my-class3': true} )
    o( attrs["class"] ).equals( "my-class my-class3" )
  })
  o("when css are given, concat new classes", function() {
    var given = { 'class': "myClass" }
    var attrs = toClass( {'my-class': true, 'my-class2': false, 'my-class3': true} )
    o( attrs["class"] ).equals( "myClass my-class my-class3" )
  })  
})