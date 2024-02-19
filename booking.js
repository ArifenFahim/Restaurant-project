function form_valid() {

    var fname= document.getElementById("fname").value;
    if(fname==""){
        document.getElementById("fname").style.border="1px solid red";
        document.getElementById("nlname").innerHTML="*required";
        document.getElementById("nlname").style.color="red";
        event.preventDefault();
    }

    var lname= document.getElementById("lname").value;
    if(lname==""){
        document.getElementById("lname").style.border="1px solid red";
        document.getElementById("nlname").innerHTML="*required";
        document.getElementById("nlname").style.color="red";
        event.preventDefault();
    }

    var email = document.getElementById("email").value;
    if(email==""){
        document.getElementById("email").style.border="1px solid red";
        document.getElementById("nemail").innerHTML="*required";
        document.getElementById("nemail").style.color="red";
        event.preventDefault();
    }

    var phn = document.getElementById("phn").value;
    if(phn==""){
        document.getElementById("numcode").style.border="1px solid red";
        document.getElementById("phn").style.border="1px solid red";
        document.getElementById("nphn").innerHTML="*required";
        document.getElementById("nphn").style.color="red";
        event.preventDefault();
    }

    var date = document.getElementById("date").value;
    if(date==""){
        document.getElementById("date").style.border="1px solid red";
        document.getElementById("ndate").innerHTML="*required";
        document.getElementById("ndate").style.color="red";
        event.preventDefault();
    }

    var time = document.getElementById("time").value;
    if(time==""){
        document.getElementById("time").style.border="1px solid red";
        document.getElementById("ntime").innerHTML="*required";
        document.getElementById("ntime").style.color="red";
        event.preventDefault();
    }

    var noofperson = document.getElementById("noofperson").value;
    if(noofperson ==""){
        document.getElementById("noofperson").style.border="1px solid red";
        document.getElementById("nnoofperson").innerHTML="*required";
        document.getElementById("nnoofperson").style.color="red";
        event.preventDefault();
    }
    else{
        var number = parseInt(noofperson);
        if(isNaN(number)){
        document.getElementById("noofperson").style.border="1px solid red";
        document.getElementById("nnoofperson").innerHTML="*enter a number";
        document.getElementById("nnoofperson").style.color="red";
        event.preventDefault();
        }
    }
}