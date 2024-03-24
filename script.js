const planetInfo = {
  mercury: {
    info: "Merkurius adalah planet terkecil di tata surya kita.",
    image: "merkurius.png" 
  },
  venus: {
    info: "Venus adalah planet terpanas di tata surya kita.",
    image: "venus.png" 
  },
  earth: {
    info: "Bumi salah satu planet yang bisa dihuni manusia.",
    image: "bumi.png" 
  },
  mars: {
    info: "Mars sering disebut 'Planet Merah' karena warna atau penampakannya yang kemerahan.",
    image: "mars.png" 
  },
  jupiter: {
    info: "Jupiter adalah planet terbesar di tata surya kita.",
    image: "jupiter.png" 
  },
  saturn: {
    info: "Saturnus dikenal dengan sistem cincinnya yang menonjol.",
    image: "saturnus.png"
  },
  uranus: {
    info: "Uranus adalah planet terdingin di tata surya kita.",
    image: "uranus.png" 
  },
  neptune: {
    info: "Neptunus adalah planet terjauh dari matahari di tata surya kita.",
    image: "neptune.png" 
  }
};

const planetElements = document.querySelectorAll('.planet');
const planetInfoDisplay = document.getElementById('planet-info');
const planetImageDisplay = document.getElementById('planet-image');

planetElements.forEach(planet => {
  planet.addEventListener('click', () => {
    const planetId = planet.getAttribute('id');
    const info = planetInfo[planetId].info;
    const image = planetInfo[planetId].image;
    planetInfoDisplay.textContent = info;
    planetImageDisplay.src = image;
    planetImageDisplay.alt = planetId.charAt(0).toUpperCase() + planetId.slice(1); // Mengatur teks alternatif untuk gambar
  });
});
