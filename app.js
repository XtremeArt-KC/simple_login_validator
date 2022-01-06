// JavaScript Document

function animatedForm() {
    const check = document.querySelectorAll(".fas-fa-check");
    
    check.forEach(check => {
           check.addEventListener("click", () => {
               const input = check.previousElementSibling;
               const parent = check.parentElement;
               const next = parent.nextElementSibling;
               
               //checkpoint
                if(input.type === "text" && validateUser(input)) {
                    nextSlide(parent, next);
                }else if(input.type === "email" && validateEmail(input)) {
                    nextSlide(parent, next);
                }else if(input.type === "password" && validateUser(input)) {
                    nextSlide(parent, next);
                }else{
                    parent.style.animation = "shake 0.5s ease";
                }
                
                parent.addEventListener("animationend", () => {
                    parent.style.animation = "";
                });
       });
   });
}

function validateUser(user)  {
    if(user.value.length < 6) {
         
         error('rgb(189, 87, 87)');
    }else{
         error('rgb(87, 189, 30)');
         return true;
    }
}

function validateEmail(email) {
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(validation.test(email.value)) {
         error('rgb(87, 189, 30)');
         return true;
    }else{
         error('rgb(189, 87, 87)');
    }
}

function nextSlide(parent, next) {
    parent.classList.add('innactive');
    parent.classList.remove('active');
    next.classList.add('active');
}

function error (color) {
    document.body.style.backgroundColor = color;
}

animatedForm();