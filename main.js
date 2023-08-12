var Name = document.getElementById("name")
var url = document.getElementById("site")
var pname = document.getElementById("pname")
var visit = document.getElementById("visit")
var delet = document.getElementById("Delete")
var arr = []
if (localStorage.getItem("sites") !== null) {
    var arr = JSON.parse(localStorage.getItem("sites")) 
    loop()
}


function submit() {

    if (Name.value === ""|| url.value === "") {
        var danger = document.createElement("p")
        danger.innerHTML = "You have to write somthing"
        danger.classList.add("bg-danger")
        danger.classList.add("text-white")
        Name.after(danger)
        var dan = danger.cloneNode(true)
        url.after(dan)
    }

    var obj = {
        Name: Name.value,
        Site:url.value
    }

    arr.push(obj)
    localStorage.setItem("sites", JSON.stringify(arr))
    loop()
}

function loop() {
    var cartona = ``
    for (var i = 0; i < arr.length; i++){
        cartona += `
        <div class="websites  row fff my-5 p-5">
                    <p class="col-8" id="pname">${arr[i].Name}</p>
                    <a target="_blank" class="col-2" href="${arr[i].Site}" id="visit">Visit</a>
                    <button id="delet" onclick="deleting(${i})"  class="col-2 btn btn-danger text-white ">Delet</button>
                </div>
        `
    }
    document.getElementById("box").innerHTML = cartona

    Name.value = ''
    url.value = ""
}

function deleting(index) {
    arr.splice(index, 1)
    localStorage.setItem("sites", JSON.stringify(arr))
    loop()
}