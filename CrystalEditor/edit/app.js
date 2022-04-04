
let t = document.querySelector('textarea');
let c = document.querySelector('code');

setInterval(() => {
    c.textContent = t.value;
    hljs.highlightAll();
}, 0);




let title = document.querySelector('title');
title.textContent = localStorage.getItem('selected_project_title')+' id: '+localStorage.getItem('selected_project');

let selected_project = localStorage.getItem('selected_project');






let code = document.querySelector('code');
let htmlsheet = document.querySelector('#htmlsheet');
let csssheet = document.querySelector('#csssheet');
let jssheet = document.querySelector('#jssheet');

t.value = localStorage.getItem(`html${selected_project}`);

let lenguage = 'html';

htmlsheet.onclick = function(){
    lenguage = 'html';
    code.classList = 'html';
    t.value = localStorage.getItem(`html${selected_project}`);
}
csssheet.onclick = function(){
    lenguage = 'css';
    code.classList = 'css';
    t.value = localStorage.getItem(`css${selected_project}`);
}
jssheet.onclick = function(){
    lenguage = 'js';
    code.classList = 'javascript';
    t.value = localStorage.getItem(`js${selected_project}`);
}



setInterval(() => {
    if(lenguage == 'html'){
        htmlsheet.style.backgroundColor = 'rgb(22, 22, 22)';
        csssheet.style.backgroundColor = 'rgb(75, 75, 75)';
        jssheet.style.backgroundColor = 'rgb(75, 75, 75)';

        htmlsheet.style.opacity = 1
        csssheet.style.opacity = 0.2
        jssheet.style.opacity = 0.2

        localStorage.setItem(`html${selected_project}`,t.value);
    }
    if(lenguage == 'css'){
        htmlsheet.style.backgroundColor = 'rgb(75, 75, 75)';
        csssheet.style.backgroundColor = 'rgb(22, 22, 22)';
        jssheet.style.backgroundColor = 'rgb(75, 75, 75)';

        htmlsheet.style.opacity = 0.2
        csssheet.style.opacity = 1
        jssheet.style.opacity = 0.2
        
        localStorage.setItem(`css${selected_project}`,t.value);
    }
    if(lenguage == 'js'){
        htmlsheet.style.backgroundColor = 'rgb(75, 75, 75)';
        csssheet.style.backgroundColor = 'rgb(75, 75, 75)';
        jssheet.style.backgroundColor = 'rgb(22, 22, 22)';

        htmlsheet.style.opacity = 0.2
        csssheet.style.opacity = 0.2
        jssheet.style.opacity = 1
        
        localStorage.setItem(`js${selected_project}`,t.value);
    }
}, 0);


let countspace = document.querySelector('countspace');
t.style.fontSize = window.innerWidth/110+'px';
code.style.fontSize = window.innerWidth/140+'px';

for(i=0;i<42;i++){
    count = document.createElement('count');
    count.textContent = i;
    count.id = `c${i}`;
    t.style.fontSize = window.innerWidth/140+'px';
    code.style.fontSize = window.innerWidth/140+'px';
    //count.style.border = `solid 2px rgb(234, 0, 255)`;

    countspace.appendChild(count)
}

window.onresize = ()=>{
    for(i=0;i<42;i++){
        document.getElementById(`c${i}`).style.fontSize = window.innerWidth/140+'px';
    }
    t.style.fontSize = window.innerWidth/140+'px';
    code.style.fontSize = window.innerWidth/140+'px';
}


let ci1 = document.getElementById('ci1')
let ci2 = document.getElementById('ci2')
let ci3 = document.getElementById('ci3')
let ci4 = document.getElementById('ci4')
let ci5 = document.getElementById('ci5')
let ci6 = document.getElementById('ci6')
let ci7 = document.getElementById('ci7')
let ci8 = document.getElementById('ci8')
let ci9 = document.getElementById('ci9')
let ci10 = document.getElementById('ci10')

let hightlightStyle = document.getElementById('hightlightStyle');
let restoreH = document.getElementById('restoreH');

restoreH.onclick = ()=>{
    hightlightStyle.innerHTML = `.hljs-comment,
    .hljs-quote {
        color: #888888
    }
    .hljs-property{
    color: rgb(218, 83, 83);
    }
    .hljs-deletion,
    .hljs-name,
    .hljs-regexp,
    .hljs-selector-class,
    .hljs-selector-id,
    .hljs-tag,
    .hljs-template-variable,
    .hljs-variable {
        color: #cc4ac6
    }

    .hljs-built_in,
    .hljs-link,
    .hljs-literal,
    .hljs-meta,
    .hljs-number,
    .hljs-params,
    .hljs-type {
        color: #b181ff
    }

    .hljs-attribute {
        color: rgb(255, 217, 0)
    }

    .hljs-addition,
    .hljs-bullet,
    .hljs-string,
    .hljs-symbol {
        color: #aaff00
    }

    .hljs-section,
    .hljs-title {
        color: #00e0af
    }

    .hljs-keyword,
    .hljs-selector-tag {
        color: #ff812d
    }

    .hljs-emphasis {
        font-style: italic;
    color: red;
    }

    .hljs-strong {
        font-weight: 700;
    color: red;
    }`;

    ci1.value = '#888888'
    ci2.value = '#DA5353'
    ci3.value = '#cc4ac6'
    ci4.value = '#b181ff'
    ci5.value = '#FFD900'
    ci6.value = '#aaff00'
    ci7.value = '#00e0af'
    ci8.value = '#ff812d'
    ci9.value = '#ff0000'
    ci10.value = '#ff0000'

    localStorage.setItem('ci1','#888888')
    localStorage.setItem('ci2','#DA5353')
    localStorage.setItem('ci3','#cc4ac6')
    localStorage.setItem('ci4','#b181ff')
    localStorage.setItem('ci5','#FFD900')
    localStorage.setItem('ci6','#aaff00')
    localStorage.setItem('ci7','#00e0af')
    localStorage.setItem('ci8','#ff812d')
    localStorage.setItem('ci9','#ff0000')
    localStorage.setItem('ci10','#ff0000')
}





ci1.value = localStorage.getItem('ci1')
ci2.value = localStorage.getItem('ci2')
ci3.value = localStorage.getItem('ci3')
ci4.value = localStorage.getItem('ci4')
ci5.value = localStorage.getItem('ci5')
ci6.value = localStorage.getItem('ci6')
ci7.value = localStorage.getItem('ci7')
ci8.value = localStorage.getItem('ci8')
ci9.value = localStorage.getItem('ci9')
ci10.value = localStorage.getItem('ci10')


setInterval(() => {
    hightlightStyle.innerHTML = `
.hljs-comment,.hljs-comment,
.hljs-quote {
    color: ${ci1.value}
}
.hljs-property{
color: ${ci2.value};
}
.hljs-deletion,
.hljs-name,
.hljs-regexp,
.hljs-selector-class,
.hljs-selector-id,
.hljs-tag,
.hljs-template-variable,
.hljs-variable {
    color: ${ci3.value}
}

.hljs-built_in,
.hljs-link,
.hljs-literal,
.hljs-meta,
.hljs-number,
.hljs-params,
.hljs-type {
    color: ${ci4.value}
}

.hljs-attribute {
    color: ${ci5.value}
}

.hljs-addition,
.hljs-bullet,
.hljs-string,
.hljs-symbol {
    color: ${ci6.value}
}

.hljs-section,
.hljs-title {
    color: ${ci7.value}
}

.hljs-keyword,
.hljs-selector-tag {
    color: ${ci8.value}
}

.hljs-emphasis {
    font-style: italic;
color: ${ci9.value};
}

.hljs-strong {
    font-weight: 700;
color: ${ci10.value};
}
`
localStorage.setItem('hightlightColor',hightlightStyle.innerHTML);
},1000);

setInterval(() => {
    localStorage.setItem('ci1',ci1.value)
    localStorage.setItem('ci2',ci2.value)
    localStorage.setItem('ci3',ci3.value)
    localStorage.setItem('ci4',ci4.value)
    localStorage.setItem('ci5',ci5.value)
    localStorage.setItem('ci6',ci6.value)
    localStorage.setItem('ci7',ci7.value)
    localStorage.setItem('ci8',ci8.value)
    localStorage.setItem('ci9',ci9.value)
    localStorage.setItem('ci10',ci10.value)
},1000);

if(localStorage.getItem('hightlightColor')){
    hightlightStyle.innerHTML = localStorage.getItem('hightlightColor');
}

let settingsBtn = document.getElementById('settingsBtn');
let settingsmenu = document.querySelector('settingsmenu');

settingsBtn.onclick = function(){
    settingsmenu.style.display = 'flex';
}
document.onclick = function(e){
    k = e.target;
    if(k != settingsBtn && k != settingsmenu && k != ci1 && k != ci2 && k != ci3 && k != ci4 && k != ci5 && k != ci6 && k != ci7 && k != ci8 && k != ci9 && k != ci10 && k != restoreH){
        settingsmenu.style.display = 'none';
    }
}