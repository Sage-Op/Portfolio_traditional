let menu = document.getElementById('menu');
let nav = document.querySelector('nav');
let xicon = document.getElementById('xicon');
let projectcontainer = document.querySelector('.projects');

menu.addEventListener("click", function(){
    
    nav.classList.toggle('show');
    menu.classList.toggle('hide');
});

xicon.addEventListener('click', function(){
    nav.classList.toggle('show');
    menu.classList.toggle('hide');
    // menu.classList.toggle('pop');
});


document.getElementById("scrollButton").addEventListener("click", function() {
    // Scroll down to a certain position smoothly
    window.scrollTo({
    top: window.scrollY + 700,
    behavior: "smooth"
    });
});


document.getElementById("dl-cv").addEventListener("click", function(){
    window.open("src/cv2023.pdf", "_blank");
});

let darkmode = document.querySelector('.darkmode')
let moon = document.getElementById('moon');
let sun = document.getElementById('sun');
let menulist = document.querySelectorAll('.menulist a');
let body = document.querySelector('body')
let projectcontent = document.querySelector('.project-content')

darkmode.addEventListener('click', function(){
    moon.classList.toggle('hide');
    sun.classList.toggle('show');
    darkmode.classList.toggle('dark');
    nav.classList.toggle('dark')
    body.classList.toggle('dark')
    xicon.classList.toggle('dark')
    menu.classList.toggle('dark')
    menulist.forEach(anchorTag => {
        anchorTag.classList.toggle('dark');
    });
    projectcontainer.classList.toggle('dark');
    projectcontent.classList.toggle('dark');
});