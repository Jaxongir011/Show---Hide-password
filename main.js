let button = document.querySelector("button");
let input = document.querySelector("input");

button.addEventListener("click", () => {
   if (input.type == "text") {
    input.type = "password";
    button.children[0].classList.add("bi-eye");
    button.children[0].classList.remove("bi-eye-slash");    
   } else {
     input.type = "text";
     button.children[0].classList.remove("bi-eye");
     button.children[0].classList.add("bi-eye-slash");
   }
});