function scrinHW (){
  var mass = ["HW3_snippet.png", "scrinHW3_practice.png", "scrinHW3.png"]
  for ( var elem of mass){
    var img = workContainer.appendChild(document.createElement("img"))
    img.src = `img/${elem}`
    img.style = `
      width: 100%;
      max-width: 100%;
    `
  }
}
scrinHW ()
