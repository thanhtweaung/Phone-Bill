

let screen =document.getElementById("screen")
let phone = document.getElementById("phone")
let lastDel = document.getElementById("lastDel")
let textBox = document.getElementById("text-box")
let num =09456165824
let bill = 00
let info =["1. voice\n2. Data\n3. အထူးလက်ဆောင်\n4. Htaw B\n5. စာရင်း\n6. Bal"]
let one =["1. 619 min =3900Ks\n2. 234 min = 1500ks\n3. 132 min =850Ks\n4. 50 min = 399Ks\n5. More"]

function showScreen(x){
    textBox.classList.remove("none")
    screen.innerHTML += x
    if(lastDel.classList=="none"){
        lastDel.classList="feather-delete"
    }
}

phone.addEventListener("click",function(){
    let current =screen.innerHTML
    if(current=="*124#"){
        alert (`${num} Your main balance is ${bill}Ks, vaild until 12/04/2023. You can check detail,dial *224#. To buy 1 GB Data Carry Plus Pack with 99ks only dial *777*3#.`)
     
    }else if(current=="*106#"){
        let result = prompt(info);
        if(result==1){
           let resultOne=prompt(one)
            if(resultOne==1){
                if(bill<3900){
                  alert("လက်ကျန်ငွေမလုံလောက်ပါ")
                }else{
                    alert("You can received SMS")
                }
            }
        }
    }else{
        alert("Conection Problem or MiMi accunt")
    }
    textBox.classList.add("none")
    screen.innerHTML=""
    lastDel.classList="none"
})

lastDel.addEventListener("click",function(){
    let a = screen.innerHTML;
    let b = a.length-1
    let d = a.substring(0,b)
    screen.innerHTML = d
    if(screen.innerHTML==""){
        textBox.classList.add("none")
        // lastDel.classList="none"
    }
})

let app = document.getElementById("app")
let zoom = document.getElementById("zoom")
function minimize(){
    app.classList.add("none")
    zoom.classList.toggle("none")
    zoom.classList.add("zoom")
}
function show(){
    app.classList.remove("none")
    zoom.classList.add("none")
    zoom.classList.toggle("zoom")
}
