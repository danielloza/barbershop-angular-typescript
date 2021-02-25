
function toggle(elemento) {
  if(elemento.value=="b") {
      document.getElementById("data").style.display = "none";
  }else{
      if(elemento.value=="d"){
          document.getElementById("data").style.display = "block";
      }
  }
}