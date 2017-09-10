var o = require("ospec")
var onclick = require("../onclick")

o.spec("onclick", function() {

  o("must set given callback in onclick attribute", function() {
  	var callback = function () {}
    var attrs = onclick( callback )
    o( attrs ).deepEquals( { onclick: callback} )
  })
})