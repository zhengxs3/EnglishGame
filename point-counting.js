document.getElementById('btnAdd1').addEventListener('click', function() {
    var score = document.getElementById('score1');
    score.textContent = parseInt(score.textContent) + 1;
});
    
document.getElementById('btnSubtract1').addEventListener('click', function() {
    var score = document.getElementById('score1');
    if (parseInt(score.textContent) > 0) { 
        score.textContent = parseInt(score.textContent) - 1;
    }
});

document.getElementById('btnAdd2').addEventListener('click', function() {
    var score = document.getElementById('score2');
    score.textContent = parseInt(score.textContent) + 1;
});

document.getElementById('btnSubtract2').addEventListener('click', function() {
    var score = document.getElementById('score2');
    if (parseInt(score.textContent) > 0) {
        score.textContent = parseInt(score.textContent) - 1;
    }
});

document.getElementById('btnfin').addEventListener('click', function() {
    var score1 = document.getElementById('score1');
    var score2 = document.getElementById('score2');
    var name1 = document.getElementById('name1'); 
    var name2 = document.getElementById('name2');

    score1.textContent = 0;
    score2.textContent = 0;

    name1.value = "";
    name2.value = "";

    validateBtn.disabled = false;
    container.querySelectorAll('.card').forEach(card => {
        card.classList.remove('disabled', 'selected');
    });

    selectedCard = null;
    alert('Game reset! You can now select a new card.');
});



/*--card-------*/
const container = document.getElementById('cardContainer');
const validateBtn = document.getElementById('validateBtn');
let selectedCard = null;

for (let i = 1; i <= 16; i++) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    
    const img = document.createElement('img');
    img.className = 'img-auto-auto_card';
    img.src = `svg/card/Fichier ${i}.svg`;

    cardDiv.appendChild(img);

    cardDiv.addEventListener('click', () => {
        if (selectedCard) {
            selectedCard.classList.remove('selected');
        }
        cardDiv.classList.add('selected');
        selectedCard = cardDiv;
    });

    container.appendChild(cardDiv);
}

validateBtn.addEventListener('click', () => {
    if (selectedCard) {
        container.querySelectorAll('.card').forEach(card => {
            card.classList.add('disabled');
        });
        validateBtn.disabled = true;
        alert('Selection confirmed!');
    } else {
        alert('Please select a card before confirming.');
    }
});