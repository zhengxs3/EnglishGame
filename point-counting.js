document.getElementById('btnAdd1').addEventListener('click', function() {
    var score = document.getElementById('score1');
    score.textContent = parseInt(score.textContent) + 1;

    validateBtn.disabled = false;
    container.querySelectorAll('.card').forEach(card => {
        card.classList.remove('disabled', 'selected');
    });

    selectedCard = null;
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

    validateBtn.disabled = false;
    container.querySelectorAll('.card').forEach(card => {
        card.classList.remove('disabled', 'selected');
    });

    selectedCard = null;
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
    var winElement = document.getElementById('win');

    if (parseInt(score1.textContent) > parseInt(score2.textContent)) {
        winElement.innerHTML = `Congratulations to <span style="color: #BF1818; font-weight: bold;">${name1.value}</span> on winning the victory!`;   
    } else if (parseInt(score1.textContent) < parseInt(score2.textContent)) {
        winElement.innerHTML = `Congratulations to <span style="color: #BF1818; font-weight: bold;">${name2.value}</span> on winning the victory!`;
    } else {
        winElement.textContent = "It's a tie!";
    }

    score1.textContent = 0;
    score2.textContent = 0;

    name1.value = "";
    name2.value = "";

    validateBtn.disabled = false;
    container.querySelectorAll('.card').forEach(card => {
        card.classList.remove('disabled', 'selected');
    });

    selectedCard = null;

    const modal = document.getElementById("finModal");
    modal.style.display = "block";

    document.getElementById("btn_fin").addEventListener('click', () => {
        modal.style.display = "none"; // Hide modal
    });
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


// Validate button event listener
validateBtn.addEventListener('click', () => {
    if (selectedCard) {
        const modal = document.getElementById("validModal");
        const yes = document.getElementById("btn_yes");
        const no = document.getElementById("btn_no");

        // Show modal
        modal.style.display = "block";

        // Clear any previous event listeners to avoid duplication
        yes.replaceWith(yes.cloneNode(true));
        no.replaceWith(no.cloneNode(true));

        // Add event listener to "Yes" button
        document.getElementById("btn_yes").addEventListener('click', () => {
            container.querySelectorAll('.card').forEach(card => {
                card.classList.add('disabled'); // Disable all cards
            });
            validateBtn.disabled = true; // Disable validate button
            modal.style.display = "none"; // Hide modal
        });

        // Add event listener to "No" button
        document.getElementById("btn_no").addEventListener('click', () => {
            modal.style.display = "none"; // Hide modal
        });

    } else {
        const modal = document.getElementById("noSelectCard");
        modal.style.display = "block";

        document.getElementById("btn_ok").addEventListener('click', () => {
            modal.style.display = "none"; // Hide modal
        });
    }
});
