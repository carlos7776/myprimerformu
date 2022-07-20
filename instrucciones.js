function captura(){
    var nombreest=document.getElementById("nomest").value;
    var celest=document.getElementById("celest").value;
    var estedad=document.getElementById("estedad").value;
    var ciuest=document.getElementById("ciuest").value;
    if(nombreest==""){
        alert("el nombre es obligatorio");
        document.getElementById("nomest").focus();
    }
    if(estedad==""){
        alert("la edad es obligatorio")
        document.getElementById("celest").focus();
    }
    if(ciuest==""){
        alert("la ciudad es obligatorio");
        document.getElementById("ciuest").focus();
    }
    else{
        if(celest==""){
            alert("el numero es obligatorio")
            document.getElementById("celest").focus();
        }
        
    else{
        console.log(nombreest +" "+estedad +""+ciuest+""+celest );
        document.getElementById("nomest").value="";
        document.getElementById("celest").value="";
        document.getElementById("estedad").value="";
        document.getElementById("ciuest").value="";
        document.getElementById("nomest").focus();
    }    
    }
    console.log(`${nombreest} ${celest} ${estedad} ${ciuest}`);
}