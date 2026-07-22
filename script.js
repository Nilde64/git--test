/* =========================
   SCRIPT.JS
   Portfolio - Nilde Djalo
========================= */


/* =========================
   EFFET MACHINE A ECRIRE
========================= */

const text = "Étudiante en Développement Informatique";
const typingElement = document.querySelector(".home-text h2");

let index = 0;


function typeWriter() {

    if (index < text.length) {

        typingElement.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter, 80);

    }

}


window.addEventListener("load", () => {

    typingElement.innerHTML = "";

    typeWriter();

});



/* =========================
   NAVBAR AU SCROLL
========================= */


const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", () => {


    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(11,16,32,0.95)";

    }

    else {

        navbar.style.background =
            "rgba(11,16,32,0.75)";

    }


});



/* =========================
   MENU MOBILE
========================= */


const menuButton = document.createElement("div");


menuButton.classList.add("menu-btn");

menuButton.innerHTML = `
<i class="fa-solid fa-bars"></i>
`;


document.querySelector(".navbar")
    .appendChild(menuButton);



const menu = document.querySelector(".navbar ul");


menuButton.addEventListener("click", () => {


    menu.classList.toggle("active");


    if (menu.classList.contains("active")) {

        menuButton.innerHTML =
            `<i class="fa-solid fa-xmark"></i>`;

    }

    else {

        menuButton.innerHTML =
            `<i class="fa-solid fa-bars"></i>`;

    }


});



/* =========================
   FERMER MENU APRES CLICK
========================= */


document.querySelectorAll(".navbar ul a")
    .forEach(link => {


        link.addEventListener("click", () => {

            menu.classList.remove("active");

            menuButton.innerHTML =
                `<i class="fa-solid fa-bars"></i>`;

        });


    });



/* =========================
   ANIMATION AU SCROLL
========================= */


const sections =
    document.querySelectorAll("section");


const reveal = () => {


    sections.forEach(section => {


        let position =
            section.getBoundingClientRect()
                .top;


        let screen =
            window.innerHeight / 1.3;


        if (position < screen) {

            section.style.opacity = "1";

            section.style.transform =
                "translateY(0)";

        }


    });


};



sections.forEach(section => {


    section.style.opacity = "0";

    section.style.transform =
        "translateY(50px)";

    section.style.transition =
        "0.8s ease";


});


window.addEventListener(
    "scroll",
    reveal
);



/* =========================
   BARRES DE COMPETENCES
========================= */


const progressBars =
    document.querySelectorAll(".progress");


window.addEventListener("scroll", () => {


    progressBars.forEach(bar => {


        const position =
            bar.getBoundingClientRect().top;


        const screen =
            window.innerHeight;


        if (position < screen) {


            bar.style.animation =
                "progressAnimation 2s forwards";


        }


    });


});



/* =========================
   BOUTON RETOUR EN HAUT
========================= */


const topButton =
    document.createElement("button");


topButton.innerHTML =
    "↑";


topButton.classList.add(
    "top-button"
);


document.body.appendChild(topButton);



window.addEventListener("scroll", () => {


    if (window.scrollY > 500) {

        topButton.style.display = "block";

    }

    else {

        topButton.style.display = "none";

    }


});



topButton.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });


    });



/* =========================
   FORMULAIRE CONTACT
========================= */


const form =
    document.querySelector("form");


form.addEventListener(
    "submit",
    (e) => {


        e.preventDefault();


        alert(
            "Merci pour votre message 😊 Je vous répondrai rapidement."
        );


        form.reset();


    });



/* =========================
   ANNEE AUTOMATIQUE FOOTER
========================= */


const footerYear =
    document.querySelector("footer p:last-child");


if (footerYear) {


    footerYear.innerHTML =
        `
© ${new Date().getFullYear()} 
Tous droits réservés.
`;


}



/* =========================
   CURSEUR PERSONNALISE
========================= */


const cursor =
    document.createElement("div");


cursor.classList.add("cursor");


document.body.appendChild(cursor);



document.addEventListener(
    "mousemove",
    (e) => {


        cursor.style.left =
            e.clientX + "px";


        cursor.style.top =
            e.clientY + "px";


    });



/* =========================
   MESSAGE CONSOLE
========================= */


console.log(
    "🚀 Portfolio chargé avec succès - Nilde Djalo"
);