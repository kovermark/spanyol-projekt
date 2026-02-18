
fetch('./tudtad.json')
  .then(response => response.json())
  .then(data => {
    const facts = data.facts
    let randomFact1 = facts[Math.floor(Math.random() * facts.length)]
    let randomFact2, randomFact3
    document.querySelector(".kerdes1").innerHTML = randomFact1
    do {
        randomFact2 =facts[Math.floor(Math.random() * facts.length)]
        randomFact3 =facts[Math.floor(Math.random() * facts.length)]
    } while (randomFact1 === randomFact2 || randomFact1 === randomFact3 || randomFact2 === randomFact3)
    document.querySelector(".kerdes2").innerHTML = randomFact2
    document.querySelector(".kerdes3").innerHTML = randomFact3
    
  })
  .catch(err => console.error(err));



function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}


