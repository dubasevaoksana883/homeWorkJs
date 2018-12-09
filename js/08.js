function hrefHW (){
  var div = workContainer.appendChild(document.createElement("div"))
  div.style = `
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `
  var arr = [{
                "text": 'HW_8',
                "url": "https://repl.it/@OksanaDubashiev/HW8"
             }
  ]
  for ( var elem of arr ){
    var a = div.appendChild(document.createElement("a"))
    for ( var prop in elem){
      if ( prop === "text"){
        a.innerText = elem[prop]
      } else{
        a.href = elem[prop]
      }
    }
    a.style.fontSize = "32px"
  }
}
hrefHW ()
