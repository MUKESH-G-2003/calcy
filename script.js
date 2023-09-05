function Addition(){
    var a = document.getElementById("number1").value;
    var b = document.getElementById("number2").value;
    var c = parseInt(a) + parseInt(b);
    document.getElementById("out").innerHTML=c;
    
}

function Division(){
    var a = document.getElementById("number1").value;
    var b = document.getElementById("number2").value;
    var c = parseInt(a) / parseInt(b);
    document.getElementById("out").innerHTML=c;
    
}

function Multiple(){
    var a = document.getElementById("number1").value;
    var b = document.getElementById("number2").value;
    var c = parseInt(a) * parseInt(b);
    document.getElementById("out").innerHTML=c;
    
}

function Subtract(){
    var a = document.getElementById("number1").value;
    var b = document.getElementById("number2").value;
    var c = parseInt(a) - parseInt(b);
    document.getElementById("out").innerHTML=c;
    
}