function createHW2 () {
  var a = workContainer.appendChild(document.createElement("a"))
  a.innerText = "Урок№2-самостоятельная работа"
  a.style.fontSize = "32px"
  a.href = "https://codepen.io/oxana-dubashewa/pen/pxZjrY?editors=0012"
  var img = workContainer.appendChild(document.createElement("img"))
  img.src="img/scrinHW2.png"
  img.style = `
    width: 100%;
    max-width: 100%;
  `
}
createHW2 ()
