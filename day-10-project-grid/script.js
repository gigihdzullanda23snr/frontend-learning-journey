const buttons = document.querySelectorAll("button");
const cards = document.querySelectorAll(".project-card");

buttons.forEach(button => {

button.addEventListener("click", () => {

button.forEach(btn => btn.classList.remove("active"));

button.classList.add("active");
});
});


const filter = button.getAttribute("data-filter");

cards.forEach(card => {

if(filter === "all"){
card.style.display = "block";
}
else if(card.classList.contains(filter)){
card.style.display = "block";
}
else{
card.style.display = "none";
}

});

});

});
