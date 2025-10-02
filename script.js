// Exemplos de dados de jogos
const games = [
  { title: "Call of Duty Black Ops 6", price: "R$ 99,90", img: "images/Call_of_Duty_Black_Ops_6.png"  },
  { title: "Need of Speed Heat", price: "R$ 59,99", img: "images/need-for-speed-heat-logo.avif" },
  { title: "Grand Thelf Auto V", price: "R$ 89,99", img: "images/Grand_Theft_Auto_V_capa.png" },
  { title: "God Of War Ragnorok", price: "R$ 109,45", img: "images/GODRagnarokCover1.webp" },
  { title: "Elden Ring", price: "R$ 99,90", img: "images/MV5BZGQxMjYyOTUtNjYyMC00NzdmLWI4YmYtMDhiODU3Njc5ZDJkXkEyXkFqcGc@._V1_QL75_UX190_CR0,2,190,281_.jpg" },
  { title: "Watch Dogs 2", price: "R$ 55,90", img: "images/images.jpg" }
];

// Inserir os cartões de jogos
const gamesGrid = document.getElementById("gamesGrid");
games.forEach(game => {
  const card = document.createElement("div");
  card.classList.add("game-card");

  card.innerHTML = `
    <img src="${game.img}" alt="${game.title}">
    <div class="info">
      <h3>${game.title}</h3>
      <p>${game.price}</p>
    </div>
  `;

  gamesGrid.appendChild(card);
});

// Banner slider
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

function showSlide(index) {
  const slidesContainer = document.querySelector(".slides");
  if (index >= totalSlides) index = 0;
  if (index < 0) index = totalSlides - 1;
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;
  currentSlide = index;
}

nextBtn.addEventListener("click", () => {
  showSlide(currentSlide + 1);
});
prevBtn.addEventListener("click", () => {
  showSlide(currentSlide - 1);
});

// Rotacionar automaticamente
setInterval(() => {
  showSlide(currentSlide + 1);
}, 5000);