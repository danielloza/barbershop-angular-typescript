
function toggle(elemento) {
  if(elemento.value=="b") {
      document.getElementById("data").style.display = "none";
  }else{
      if(elemento.value=="d"){
          document.getElementById("data").style.display = "block";
      }
  }
}

//revisar porque no funciona
function adminHeader(val) {
  if(val.value=="home") {
      document.getElementById("data").style.display = "none";
  }else{
      if(val.value=="admin"){
          document.getElementById("data").style.display = "block";
      }
  }
}
