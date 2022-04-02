window.onload = function(){
    document.querySelector("#sair").addEventListener("click", function(){
        navigator.vibrate(3000);
        navigator.app.exitApp();
    });
}

val = document.getElementById("valor").value;
function chamar (){
    alert("Saudações, " + valor);
}

