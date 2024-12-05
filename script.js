/* header */
document.getElementById('index').addEventListener('click', function() {
    window.location.href = 'index.html';
});
document.getElementById('rules').addEventListener('click', function() {
    window.location.href = 'rules.html';
});
document.getElementById('point-counting').addEventListener('click', function() {
    window.location.href = 'point-counting.html';
});



const menuOpen = document.getElementById("menu-open");
const menuClose = document.getElementById("menu-close");
const menuContent = document.getElementById("menu-content");


menuOpen.addEventListener("click", () => {
    menuOpen.style.display = "none";
    menuClose.style.display = "block";

    menuContent.style.display = "block"; 
});


menuClose.addEventListener("click", () => {
    menuOpen.style.display = "block";
    menuClose.style.display = "none";
    
    menuContent.style.display = "none";
});
