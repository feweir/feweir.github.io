let title = document.querySelector('title');
title.textContent = "preview: "+localStorage.getItem('selected_project_title')+' id: '+localStorage.getItem('selected_project');


let selected_project = localStorage.getItem('selected_project');

document.getElementById('htmlpreview').innerHTML = localStorage.getItem(`html${selected_project}`);
document.getElementById('stylepreview').innerHTML = localStorage.getItem(`css${selected_project}`);
document.getElementById('jspreview').innerHTML = localStorage.getItem(`js${selected_project}`);