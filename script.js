const funFacts = [
    "Cats sleep for 70% of their lives!",
    "The oldest known pet cat existed 9,500 years ago.",
    "Cats have over 20 muscles that control their ears.",
    "A group of cats is called a clowder!",
    "The world's largest cat measured 48.5 inches long."
];

const factButton = document.getElementById('factButton');
const catFact = document.getElementById('catFact');

factButton.addEventListener('click', () => {
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    catFact.textContent = randomFact;
});
