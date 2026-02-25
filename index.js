
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
    
    if (document.body.classList=="dark-mode")
    {
      document.getElementById("hatter").innerHTML ="🌙";
    }
    else
    {
      document.getElementById("hatter").innerHTML ="☀️";
    }

}



document.addEventListener('DOMContentLoaded', function () {
  new bootstrap.Carousel('#carouselExample', {
    interval: 5000,
    ride: 'carousel',
    pause: false,
    wrap: true
  });
});




