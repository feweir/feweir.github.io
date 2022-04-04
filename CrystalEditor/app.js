let project = "";
let n_project = 0;

if(localStorage.getItem('ifgurwyhiuchdsifhduf')=='true'){

}else{
    for(i=0;i<=45;i++){
        project = document.createElement('textarea');
        project.setAttribute('type', 'project');
    
        project.classList.add('p'+i);
        project.value = 'Name of project';
    
        document.querySelector('projectMenu').appendChild(project);
        n_project++
    
        localStorage.setItem('p'+i,project.value);
    
        localStorage.setItem('n_project',n_project);
    }   
}





localStorage.setItem('ifgurwyhiuchdsifhduf',true);



let body = document.querySelector('body');
let menuWrapper = document.querySelector('menuWrapper');
let menuList = document.querySelector('menuList');


document.oncontextmenu = function(e) {
    menuWrapper.style.display = 'block';
    menuWrapper.style.top = e.clientY-menuWrapper.style.height + 'px';
    menuWrapper.style.left = e.clientX-menuWrapper.style.width + 'px';

    localStorage.setItem('selected_project',e.target.classList);
    localStorage.setItem('selected_project_title',e.target.value);



    return false;
}


/*             MENUUUUUUUUUUU                */



let menu = document.querySelector('menu');
let projectMenu = document.querySelector('projectMenu');





let projectsBtn = document.querySelector('#projectsBtn');
let newProjectsBtn = document.querySelector('#newProjectsBtn');




if(localStorage.getItem('n_project')){n_project = localStorage.getItem('n_project');}

document.onclick = function(e) {
    if(e.target == projectsBtn){
        projectMenu.style.display = 'flex';
        document.querySelector('settingsmenu').style.display = 'none';
    }
    if(e.target == body || e.target == menu){
        projectMenu.style.display = 'none';
    }
    if(e.target != menuWrapper && e.target != menuList ){
        menuWrapper.style.display = 'none';
    }
}

let autoSave = setInterval(() => {
    for(i=0; i<=n_project; i++){
        selected_p = document.querySelector(`.p${i}`);
        localStorage.setItem('p'+i,selected_p.value);
    }
}, 0);

window.onload = function(e) {
    for(i=0; i<=n_project; i++){
        project = document.createElement('textarea');
        project.setAttribute('type', 'project');

        project.classList.add('p'+i);
        project.value = localStorage.getItem(`p${i}`);

        projectMenu.appendChild(project);
    }
}


document.onkeydown = function(e) {
    if(e.which == 27){
        projectMenu.style.display = 'none';
        document.querySelector('settingsmenu').style.display = 'none';
    }
}



/*         dark theme           */

let themeButton = document.querySelector('themeButton');

themeButton.onclick = function(){alert('our team that then this site does not have a team but I only designed it Feweir, has decided that the white theme blinds you so for your safety and of the people who look at your screen, no white theme.')}

/*             highilight color               */

setInterval(() => {hljs.highlightAll();})