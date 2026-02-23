
fetch('./tudtad.json')
  .then(response => response.json())
  .then(data => {
    const facts = data.facts
    let randomFact1 = facts[Math.floor(Math.random() * facts.length)]
    let randomFact2, randomFact3
    document.querySelector(".fact1").innerHTML = randomFact1
    do {
        randomFact2 =facts[Math.floor(Math.random() * facts.length)]
        randomFact3 =facts[Math.floor(Math.random() * facts.length)]
    } while (randomFact1 === randomFact2 || randomFact1 === randomFact3 || randomFact2 === randomFact3)
    document.querySelector(".fact2").innerHTML = randomFact2
    document.querySelector(".fact3").innerHTML = randomFact3
    
  })
  .catch(err => console.error(err));



function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

document.addEventListener('DOMContentLoaded', function () {
  new bootstrap.Carousel('#carouselExample', {
    interval: 5000,
    ride: 'carousel',
    pause: false,
    wrap: true
  });
});

const facts = [
    "Madrid Spanyolország fővárosa és legnagyobb városa.",
"Barcelona híres a modernista építészetéről és tengerpartjáról.",
"A Sagrada Família építését 1882-ben kezdték el.",
"Antoni Gaudí tervezte a Sagrada Famíliát.",
"A La Tomatina minden évben augusztusban kerül megrendezésre.",
"Buñol ad otthont a La Tomatina fesztiválnak.",
"A San Fermín híres a bikafuttatásról.",
"Pamplona városában rendezik meg a San Fermín ünnepet.",
"Az Alhambra Granada egyik legismertebb műemléke.",
"Granada az Alhambra otthona.",
"A Mezquita Córdoba ikonikus épülete.",
"Córdoba a római és mór örökségéről ismert.",
"A Prado Múzeum a világ egyik legjelentősebb képtára.",
"A Real Madrid a világ egyik legsikeresebb futballklubja.",
"Az FC Barcelona a Real Madrid legnagyobb riválisa.",
"A La Liga Spanyolország legfelsőbb labdarúgó-bajnoksága.",
"A Vicky Cristina Barcelona Barcelonában játszódik.",
"Pablo Picasso Málagában született.",
"Málaga a Costa del Sol központja.",
"Salvador Dalí a szürrealizmus egyik legismertebb alakja.",
"A Santiago de Compostela-katedrális a híres zarándokút végállomása.",
"A Camino de Santiago Európa egyik legismertebb zarándokútja.",
"Valencia a paella szülőhazája.",
"A paella Spanyolország egyik legismertebb nemzeti étele.",
"Sevilla híres a flamenco kultúráról.",
"A flamenco zene és tánc Andalúziából származik.",
"Miguel de Cervantes írta a Don Quijotét.",
"A Don Quijote az egyik legtöbbet fordított regény a világon.",
"Bilbao ad otthont a Guggenheim Múzeumnak.",
"A Guggenheim Múzeum Bilbao modern építészetéről ismert.",
"A Kanári-szigetek az Atlanti-óceánban találhatók.",
"Toledo középkori városfalairól híres.",
"Zaragoza az Ebro folyó partján fekszik.",
"A Basílica del Pilar Zaragoza legismertebb temploma.",
"Ibiza világhírű éjszakai életéről ismert.",
"A Baleár-szigetek a Földközi-tengerben találhatók.",
"Palma de Mallorca Mallorca fővárosa.",
"Az El Escorial királyi kolostor és palota.",
"Francisco Goya a romantika egyik jelentős festője volt.",
"A spanyol alkotmányt 1978-ban fogadták el.",
"Salamanca híres egyeteméről.",
"A Salamancai Egyetemet 1218-ban alapították.",
"Alicante népszerű tengerparti üdülőhely.",
"San Sebastián gasztronómiájáról híres.",
"A Las Fallas hatalmas szoborégetéssel zárul.",
"Valladolid történelmi jelentőségű város.",
"Ronda híres szurdokáról és hídjáról.",
"A Puente Nuevo Ronda jelképének számít.",
"Tarragona római kori emlékekkel büszkélkedhet.",
"Spanyolország hivatalos pénzneme az euró."
    
];


function getRandomFacts(array, number) {
    let shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, number);
}

function displayRandomFacts() {
    const factsList = document.getElementById("factsList");
    const randomFacts = getRandomFacts(facts, 5);

    randomFacts.forEach(fact => {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = fact;
        factsList.appendChild(li);
    });
}

document.addEventListener("DOMContentLoaded", displayRandomFacts);



