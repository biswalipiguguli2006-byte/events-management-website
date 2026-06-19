// DARK / LIGHT THEME

const themeBtn = document.getElementById("theme-btn");

if(themeBtn){

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){
themeBtn.innerHTML="☀️";
}
else{
themeBtn.innerHTML="🌙";
}

});

}

// EVENT DETAILS MODAL

const modal = document.getElementById("modal");

const title = document.getElementById("eventTitle");

const services = document.getElementById("eventServices");

const price = document.getElementById("eventPrice");

const closeBtn = document.querySelector(".close");

function showEvent(eventName,eventServices,eventPrice){

modal.style.display="flex";

title.innerHTML=eventName;

services.innerHTML=
"<strong>Services Included:</strong><br><br>"+eventServices;

price.innerHTML=
"Package Price: "+eventPrice;

}

if(closeBtn){

closeBtn.onclick=function(){

modal.style.display="none";

}

}

window.onclick=function(e){

if(e.target==modal){

modal.style.display="none";

}

}

// REGISTRATION FORM

const registrationForm =
document.getElementById("registrationForm");

if(registrationForm){

registrationForm.addEventListener("submit",function(e){

e.preventDefault();

alert(
"🎉 Registration Successful!\n\nThank you for registering your event.\nOur team will contact you shortly."
);

registrationForm.reset();

});

}

// CONTACT FORM

const contactForm =
document.querySelector("#contact form");

if(contactForm){

contactForm.addEventListener("submit",function(e){

e.preventDefault();

alert(
"✅ Message Sent Successfully!"
);

contactForm.reset();

});

}

// SIMPLE ANIMATION ON SCROLL

const cards =
document.querySelectorAll(
".event-card,.package-card,.testimonial"
);

window.addEventListener("scroll",()=>{

cards.forEach(card=>{

const position =
card.getBoundingClientRect().top;

const screen =
window.innerHeight;

if(position < screen - 100){

card.style.opacity="1";
card.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(40px)";
card.style.transition=".8s";

});

/* BACKGROUND IMAGE SLIDER */

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function changeSlide(){

slides[currentSlide].classList.remove("active");

currentSlide++;

if(currentSlide >= slides.length){
currentSlide = 0;
}

slides[currentSlide].classList.add("active");

}

setInterval(changeSlide, 4000);