// Seleciona os elementos
const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');

// Alterna o menu e o ícone ao clicar no menu-btn
menuBtn.addEventListener('click', () => {
  const isActive = navbar.classList.toggle('active');
  menuBtn.textContent = isActive ? '✖' : '☰'; // Alterna entre "X" e "☰"
  menuBtn.setAttribute('aria-expanded', isActive); // Acessibilidade
});

// Fecha o menu ao clicar em um link de navegação e redefine o ícone
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    menuBtn.textContent = '☰'; // Volta para o ícone de menu
    menuBtn.setAttribute('aria-expanded', 'false'); // Acessibilidade
  });
});

// Fecha o menu ao clicar fora dele
document.addEventListener('click', (event) => {
  if (!navbar.contains(event.target) && !menuBtn.contains(event.target)) {
    navbar.classList.remove('active');
    menuBtn.textContent = '☰'; // Volta para o ícone de menu
    menuBtn.setAttribute('aria-expanded', 'false'); // Acessibilidade
  }
});

// Fecha o menu ao pressionar a tecla "Esc" 
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navbar.classList.contains('active')) {
    navbar.classList.remove('active');
    menuBtn.textContent = '☰'; // Volta para o ícone de menu
    menuBtn.setAttribute('aria-expanded', 'false'); // Acessibilidade
  }
});

// Form Handling
const form = document.querySelector(".formulario-fale-conosco");
const background = document.querySelector(".mascara-formulario");

function showForm() {
  form.style.left = "50%";
  form.style.transform = "translateX(-50%)";
  background.style.visibility = "visible";
}

function hideForm() {
  form.style.left = "-300px";
  form.style.transform = "translateX(0)";
  background.style.visibility = "hidden";
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const duvida = document.getElementById("duvida").value;

  const mensagem = `Olá, venho através do seu site. Meu nome é ${nome}. Meu telefone é ${telefone}. Gostaria de saber sobre ${duvida}.`;
  const mensagemCodificada = encodeURIComponent(mensagem);
  const whatsappLink = `https://wa.me/5551998393149?text=${mensagemCodificada}`;

  document.getElementById("whatsappLink").href = whatsappLink;
  window.open(whatsappLink, "_blank");
});