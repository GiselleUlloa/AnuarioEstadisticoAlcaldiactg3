 const menuToggle = document.getElementById("menuToggle");
const menuItems = document.getElementById("menuItems");
const menuClose = document.getElementById("menuClose");

// Abrir menú
menuToggle.addEventListener("click", () => {
  menuItems.classList.add("open");
});

// Cerrar menú
menuClose.addEventListener("click", () => {
  menuItems.classList.remove("open");
});

// Scroll suave y resaltar sección
const links = document.querySelectorAll('.tabs a');
const sections = [...links].map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);

links.forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if(id.startsWith('#')){
      e.preventDefault();
      document.querySelector(id).scrollIntoView({behavior:'smooth', block:'start'});
      // cerrar menú en móviles al seleccionar
      menuItems.classList.remove("open");
    }
  });
});

// Intersection Observer para resaltar secciones
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry => {
    if(entry.isIntersecting){
      const id = '#' + entry.target.id;
      links.forEach(a => a.classList.toggle('active', a.getAttribute('href')===id));
      entry.target.classList.add('is-visible');
    }
  })
},{rootMargin:'-45% 0px -50% 0px', threshold:0});

sections.forEach(s => { io.observe(s); s.classList.add('reveal'); });

// Sticky tabs
const tabs = document.getElementById('tabs');
let lastY = 0;
window.addEventListener('scroll', () => {
  const y = window.scrollY || window.pageYOffset;
  if(y > 30 && lastY <= 30){ tabs.classList.add('is-sticky'); }
  else if(y <= 30 && lastY > 30){ tabs.classList.remove('is-sticky'); }
  lastY = y;
});

 

// ====== Botón subir arriba ======
const btnTop = document.getElementById("btnTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btnTop.style.display = "flex";
  } else {
    btnTop.style.display = "none";
  }
});
btnTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ====== Glosario ======
function toggleGlossary() {
  const glossary = document.getElementById("glossaryContent");
  glossary.style.display = (glossary.style.display === "block") ? "none" : "block";
}

// ====== Scroll reveal adicional ======
const reveals = document.querySelectorAll(".reveal");
const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 80) {
      el.classList.add("is-visible");
    }
  });
};
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);



// ==== Animación al hacer scroll (fade-in) ====
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));

// ==== Interacción extra con botón Ver más ====
document.querySelectorAll(".btn-link").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.target.classList.add("clicked");
    setTimeout(() => {
      e.target.classList.remove("clicked");
    }, 400);
  });
});


// Abrir y cerrar sidebar con el mismo botón
const sidebar = document.getElementById("sidebarInnovador");
const btnToggle = document.getElementById("floatingIndex");

btnToggle.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

var divElement = document.getElementById('viz1755629461778');
var vizElement = divElement.getElementsByTagName('object')[0];

function resizeViz() {
  let width = divElement.offsetWidth;
  vizElement.style.width = '100%';
  if(width > 800){
    vizElement.style.height = (width * 0.5) + 'px';
  } else if(width > 500){
    vizElement.style.height = (width * 0.65) + 'px';
  } else {
    vizElement.style.height = '400px';
  }
}

window.addEventListener('resize', resizeViz);
resizeViz();

var scriptElement = document.createElement('script');
scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
vizElement.parentNode.insertBefore(scriptElement, vizElement);


var divEtnia = document.getElementById('viz1755629714176');
var vizEtnia = divEtnia.getElementsByTagName('object')[0];

function resizeVizEtnia() {
  let width = divEtnia.offsetWidth;
  vizEtnia.style.width = '100%';
  if(width > 800){
    vizEtnia.style.height = (width * 0.75) + 'px';
  } else if(width > 500){
    vizEtnia.style.height = (width * 0.75) + 'px';
  } else {
    vizEtnia.style.height = '500px'; // reducido para móviles
  }
}

window.addEventListener('resize', resizeVizEtnia);
resizeVizEtnia();

var scriptEtnia = document.createElement('script');
scriptEtnia.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
vizEtnia.parentNode.insertBefore(scriptEtnia, vizEtnia);


var divPiramide = document.getElementById('viz1755630104068');
var vizPiramide = divPiramide.getElementsByTagName('object')[0];

function resizeVizPiramide() {
  let width = divPiramide.offsetWidth;
  vizPiramide.style.width = '100%';
  if(width > 800){
    vizPiramide.style.height = (width * 0.75) + 'px';
  } else if(width > 500){
    vizPiramide.style.height = (width * 0.75) + 'px';
  } else {
    vizPiramide.style.height = '500px'; // reducido para móviles
  }
}

window.addEventListener('resize', resizeVizPiramide);
resizeVizPiramide();

var scriptPiramide = document.createElement('script');
scriptPiramide.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
vizPiramide.parentNode.insertBefore(scriptPiramide, vizPiramide);


// Selecciona el contenedor de la pirámide reciente
var divElement = document.getElementById('viz1755630395306');
var vizElement = divElement.getElementsByTagName('object')[0];

// Función para ajustar tamaño del gráfico según el ancho del contenedor
function ajustarTableau() {
  var width = divElement.offsetWidth;
  vizElement.style.width = '100%';
  
  if (width > 800) {
    vizElement.style.height = (width * 0.75) + 'px';
  } else if (width > 500) {
    vizElement.style.height = (width * 0.75) + 'px';
  } else {
    vizElement.style.height = '900px'; // altura mínima para móviles pequeños
  }
}

// Ejecutar ajuste al cargar la página y al redimensionar la ventana
window.addEventListener('load', ajustarTableau);
window.addEventListener('resize', ajustarTableau);

// Cargar el script de Tableau
var scriptElement = document.createElement('script');
scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
vizElement.parentNode.insertBefore(scriptElement, vizElement);





