var workContainer = document.querySelector(".block-content")
function BtnConstructor(number){
    this.btn = document.querySelector(".menu").appendChild(document.createElement("button"))
    this.btn.id = number
    this.btn.className = "btn"
    this.btn.innerText = `Home Work ${number}`
    function changeScript(event){
        event.stopPropagation()
        workContainer.innerHTML = ""
        function findLastScript(){
          var collScript = document.querySelectorAll("script")
          if (collScript.langth === 1) return
          for ( var elem of collScript){
              if ( elem.src !== "js/index.js"){
                  elem.parentNode.removeChild( elem )
              }
          }
        }
        findLastScript()
        var script = document.body.appendChild(document.createElement("script"))
        script.src = `js/${event.target.id}.js`
    }
    this.btn.addEventListener( "click", changeScript)
}
var homeWorkBtn_1 = new BtnConstructor("01")
var homeWorkBtn_2 = new BtnConstructor("02")
var homeWorkBtn_3 = new BtnConstructor("03")
var homeWorkBtn_4 = new BtnConstructor("04")
var homeWorkBtn_5 = new BtnConstructor("05")
