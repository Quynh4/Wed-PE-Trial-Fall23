document.getElementById("myform").style.display = "none";

// function Show(){
//     document.getElementById("mytext").innerText=" Hide Register Form "
//     document.getElementById("myform").style.display= "block";
//     document.getElementById("mytext").setAttribute("onClick", "Hide()");
// }

// function Hide(){
//     document.getElementById("mytext").innerText="Show Register Form"
//     document.getElementById("myform").style.display= "none";
//     document.getElementById("mytext").setAttribute("onClick", "Show()");
// }


function Show() {
    var text = document.getElementById("mytext");
    var form = document.getElementById("myform");
    if (text.innerHTML == "HIDE REGISTER FORM ") {
        text.innerHTML = "Show Register Form";
        form.style.display = "none";
    }
    else 
    {
        text.innerHTML = "HIDE REGISTER FORM ";
        form.style.display = "block";
    }
}


function checkForm(){
    var t1 = document.getElementById("t1");
    var t2 = document.getElementById("t2");
    
    if(t1.value.trim() == "" || t2.value.trim()=="") alert("error")
}