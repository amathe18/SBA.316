
let form = document.querySelector("theForm");
let isShowing = true;

function showHideForm(){
    if(isShowing) {
        form.style.display = "none";
        isShowing = false;
    }else{
    form.style.display = "block";
    isShowing = true;

    }
    
} 

    form.addEventListener("click", () => {
    formWindow.classList.remove("hidden");
  });
    document.getElementById(theForm)
    const name = form.elements[name]
    const email =form.elements[email]


//const formButton = document.getElementById("formButton");
//const formWindow = document.//getElementById("formWindow");

formButton.addEventListener("click", (e) => {
    (e).preventDefault();
  formWindow.classList.remove("hidden");
});


//const radioButton = document.getElementById("Yes");

//radioButton.addEventListener('change',function() {
//if(this.checked) {
   //console.log(alert('Join the Flying Parliament Clowder'));
//    alert('Join the Flying Parliament Clowder')
//}
//});

const radioButtons = document.querySelectorAll('input[type="radio"]');

radioButtons.forEach(radioButton => {
  radioButton.addEventListener('change', () => cd {
    if (radioButton.checked) {
      alert('Join the Flying Parliament Clowder');
    }
  });
});


