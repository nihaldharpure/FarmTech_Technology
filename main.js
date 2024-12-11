let menu = document.querySelector("#menu-btn")
let navbar = document.querySelector(".navbar")


menu.onclick = () =>{
    menu.classList.toggle("fa-times")
    navbar.classList.toggle("active")
}


window.onscroll = () =>{
    menu.classList.remove("fa-times")
    navbar.classList.remove("active")
}


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}




// English translations
const englishTranslations = {
  'head': 'FarmTech Technologies',
  'Homee': 'Home',
  'servicess':'Services',
  'contactt':'Contact',
  'log':'Log In'
};

// marathi translations
const marathiTranslations = {
  'head': 'फार्मटेक तंत्रज्ञान',
  "Homee": 'होम',
  'servicess':'सर्व्हिसेस ',
  'contactt':'कॉन्टॅक्ट',
  'log':'लॉग इन'
};

// Function to change language to English
document.getElementById('englishBtn').addEventListener('click', function() {
  changeLanguage(englishTranslations);
});

// Function to change language to marathi
document.getElementById('marathiBtn').addEventListener('click', function() {
  changeLanguage(marathiTranslations);
});

// Function to update text content with translations
function changeLanguage(translations) {
  for (let key in translations) {
      if (translations.hasOwnProperty(key)) {
          document.getElementById(key).textContent = translations[key];
      }
  }
}


function changeLanguage() {
  var selectElement = document.getElementById("language-select");
  var selectedLanguage = selectElement.value;

  // Example translation for demonstration purposes
  var greetings = {
    "en": "Home!",
    "mr": " होम",
    // "es": "¡Hola!"
  };
  var services={
    "en": "Services",
    "mr": "सर्व्हिसेस "
    // "es": "¡Hola!"
  };
  var contact={
    "en": "Contact",
    "mr": "कॉन्टॅक्ट "
    // "es": "¡Hola!"
  };


  var greetingElement = document.getElementById("Homee");
  greetingElement.textContent = greetings[selectedLanguage];

  var servicesElement = document.getElementById("servicess");
  servicesElement.textContent = services[selectedLanguage];

  var contactElement = document.getElementById("contactt");
  contactElement.textContent = contact[selectedLanguage];
}
