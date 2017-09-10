var o = require("ospec")
var mu = require("../mutil")

o.spec("mu", function() {

  o("attrs works", function() {
  	var callback = function () {}
    var attrs = mu.attrs.onclick( callback )
    o( attrs ).deepEquals( { onclick: callback} )
  })
})