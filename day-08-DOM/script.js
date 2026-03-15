const showBtn = document.getElementById("showContact");
const darkBtn = document.getElementById("darkMode");
const scrollBtn = document.getElementById("scrollContact");

const contact = document.getElementById("contactSection");


// SHOW CONTACT

showBtn.addEventListener("click", () => {

  if(contact.style.display === "none"){
    contact.style.display = "block";
  }else{
    contact.style.display = "none";
  }

});


// DARK MODE

darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});


// SCROLL TO CONTACT

scrollBtn.addEventListener("click", () => {
  contact.scrollIntoView({
    behavior:"smooth"
  });
});
