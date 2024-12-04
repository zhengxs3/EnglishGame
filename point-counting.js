document.getElementById('btnAdd1').addEventListener('click', function() {
    var score = document.getElementById('score1');
    score.textContent = parseInt(score.textContent) + 1;
});

document.getElementById('btnSubtract1').addEventListener('click', function() {
    var score = document.getElementById('score1');
    if (parseInt(score.textContent) > 0) { // Check to prevent negative values
        score.textContent = parseInt(score.textContent) - 1;
    }
});

document.getElementById('btnAdd2').addEventListener('click', function() {
    var score = document.getElementById('score2');
    score.textContent = parseInt(score.textContent) + 1;
});

document.getElementById('btnSubtract2').addEventListener('click', function() {
    var score = document.getElementById('score2');
    if (parseInt(score.textContent) > 0) { // Check to prevent negative values
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
});
