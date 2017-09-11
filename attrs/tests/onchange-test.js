var o = require("ospec")
var onchange = require("../onchange")

o.spec("onchange", function() {

  o("must set given callback in onchange attribute", function() {
  	var callback = function () { return "test"}
    var attrs = onchange( callback )
    o( typeof attrs.onchange == "function" ).equals( true )
  })
  o("must set function value in value attribute", function() {
  	var callback = function () { return "test"}
    var attrs = onchange( callback )
    o( attrs.value ).equals( "test" )
  })
})