
var acc = document.getElementsByClassName("accordion");

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
      panel.style.borderBottom = "1px solid #000";
    }
    hideAll();
  });

  const hideAll = (notThis) => {
  
    acc.forEach((btn) => {
      if(btn !== notThis) {
          btn.style.display = "none";
          let content = btn.nextElementSibling;
          content.style.height = "";
      }
    })
    }
}





/*

for(j = 0; j <= acc.lenght; j++){
  if(acc[j] !== notThis){
    
    acc[j].style.display = "none";
  }
}

*/ 