window.onload = function(){
    menu();
    watchMenu();
    allProjects();
}


function menu(){
    var btn = document.getElementById("menuBtn");
    btn.addEventListener("click", function(){
        var menuOptions = document.getElementById("menuOpt");
        menuOptions.classList.toggle("open");
        animationMenu();
    });
}

function watchMenu(){
    var elementos = document.getElementsByClassName("menu-item");
    for (var i = 0; i< elementos.length; i++){
        elementos[i].addEventListener("click",function(){
            var menu = document.getElementById("menuOpt");
            menu.classList.remove("open");
            animationMenu();
        });
    }
}

function animationMenu(){
    var elementos = document.getElementsByClassName("hamburguer");
    for (var i = 0; i< elementos.length; i++){
        elementos[i].classList.toggle("open");
    }
}

function allProjects(){
    var over = document.querySelector(".allProjects .overlay");
    
    var btnProjects = document.getElementById("btnProjects");
    btnProjects.addEventListener("click", function(){
        over.classList.toggle("open");    
    });
    var closeProjects = document.getElementById("closeProjects");
    closeProjects.addEventListener("click", function(){
        over.classList.toggle("open");
    });
}
