const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.querySelector('.answer').classList.toggle("active");
    });
});

document.querySelector(".ok").addEventListener("click", function() {
    const emailInput = document.querySelector(".email");
    const email = emailInput.value;

    if (isValidEmail(email)) {
        document.getElementById("validPopup").style.display = "block";
    } else {
        document.getElementById("invalidPopup").style.display = "block";
    }
});

document.getElementById("closeValidPopup").addEventListener("click", function() {
    document.getElementById("validPopup").style.display = "none";
});

document.getElementById("closeInvalidPopup").addEventListener("click", function() {
    document.getElementById("invalidPopup").style.display = "none";
});

function isValidEmail(email) {
    const regex = /^[^\s@]+@gmail+\.com$/;
    return regex.test(email);
}
 
 var select = document.getElementById("locationSelect");
 var moroccoFlag = document.querySelector('img[alt="morocco"]');
 var australiaFlag = document.querySelector('img[alt="australianflag"]');
 var canadaFlag = document.querySelector('img[alt="canadianflag"]');

 select.addEventListener("change", function () {
     var selectedValue = select.value;

     if (selectedValue === "shoose") {
        moroccoFlag.style.display = "none"; 
        australiaFlag.style.display = "none";  
        canadaFlag.style.display = "none";       
     }
    else if (selectedValue === "MOROCCO") {
         moroccoFlag.style.display = "inline"; 
         australiaFlag.style.display = "none";  
         canadaFlag.style.display = "none";       
     } else if (selectedValue === "AUSTRALIA") {
         moroccoFlag.style.display = "none";      
         australiaFlag.style.display = "inline";   
         canadaFlag.style.display = "none";      
     } else if (selectedValue === "CANADA") {
         moroccoFlag.style.display = "none";      
         australiaFlag.style.display = "none";     
         canadaFlag.style.display = "inline";     
     } else {
     }
 });
 
    const burgerMenu = document.getElementById('burger-menu');
    const navLinks = document.querySelector('ul');

    burgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
