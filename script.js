var posx = screen.width
var posy = screen.height

$(function() {
  var movementStrength = 25
  var height = movementStrength / $(window).height()
  var width = movementStrength / $(window).width()
  console.log("loaded")

  $("#starback").mousemove(function(e) {
    posx += ((e.pageX + screen.width) - posx)/100
    posy += ((e.pageY + screen.height) - posy)/100
    $('#starback').css("background-position", posx+"px "+posy+"px")
  })
})

//this.pos.x += (this._requestedPosition.x - this.pos.x)/(1/this.speed) * timeScaler()