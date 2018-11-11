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
                "text": 'HW_4.1: Дамская сумочка',
                "url": "https://codepen.io/oxana-dubashewa/pen/rQBVrJ"
             },
             {
               "text": 'HW_4.2: LibraryBook',
               "url": "https://codepen.io/oxana-dubashewa/pen/gQbpgB?editors=0010"
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
