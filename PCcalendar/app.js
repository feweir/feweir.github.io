
if(localStorage.getItem('downloadVersionSee')){
}else{
    alert('SEE TOP OF THE PAGE FOR DOWNLOAD DESKTOP VERSION');
    localStorage.setItem('downloadVersionSee',true);
}



let monthClass = "";
let calendarSpace = document.querySelector('calendarSpace');
let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'];

let body = document.querySelector('body');
let calBox = "";
let h1 = "";

let lastMonth = 0;
for(i=0;i<13;i++){
    h1 = document.createElement('h1');
    h1.id = 'monthH1';
    h1.textContent = months[i];

    calendarSpace.appendChild(h1)
        
    

    

    lastMonth++;
    if(i==12){
        monthClass = document.createElement('month');
        monthClass.id = `lastmonth`;
    
        calendarSpace.appendChild(monthClass);
    }else{
        monthClass = document.createElement('month');
        monthClass.classList.add = 'monthClass';
        monthClass.id += `${months[i]}`;

        monthClass.classList = 'monthClass';

        calendarSpace.appendChild(monthClass);
    }
    if(lastMonth == 2){
        for(n=1;n<=29;n++){
            calBox = document.createElement('calBox');
            calBox.textContent=n;
            calBox.id = months[i]+n;
                    
            monthClass.appendChild(calBox);
        }
    }
    if(lastMonth==4 || lastMonth==6 || lastMonth==9 || lastMonth==11){
        for(n=1;n<=30;n++){
            calBox = document.createElement('calBox');
            calBox.textContent=n;
            calBox.id = months[i]+n;
            
        
            monthClass.appendChild(calBox);
        }
    }
    if(lastMonth==1 || lastMonth==3 || lastMonth==5 || lastMonth==7 || lastMonth==8 || lastMonth==10 || lastMonth==12){
        for(n=1;n<=31;n++){
            calBox = document.createElement('calBox');
            calBox.textContent=n;
            calBox.id = months[i]+n;
            

            monthClass.appendChild(calBox);
        }
    }
}



let Pspace = document.querySelector('Pspace');
let poppup = document.querySelector('#poppup');

let scroollY = 0;
window.onscroll = function(e) {scroollY = this.scrollY};



let calBoxPrev = document.querySelector('#calBoxPrev');

let hour_input = document.querySelector('#hour_input');
let minuts_input = document.querySelector('#minuts_input');

setInterval(() => {
    if(parseInt(hour_input.value) > 24 ){
        hour_input.value = 24;
    }
    if(hour_input.value[0]==0){
        hour_input.value = hour_input.value[1];
    }

    if(parseInt(minuts_input.value) > 59 ){
        minuts_input.value = 59;
    }
    if(minuts_input.value[0]==0){
        minuts_input.value = minuts_input.value[1];
    }
})




let dayPop = document.querySelector('#dayPop');
let monthPop = document.querySelector('#monthPop');

let description = document.querySelector('#description');


let selectedElem = "";
let num = 0;
document.onclick = function(e){
    if(e.target.tagName == 'CALBOX'){
        num = e.target.classList[1];
        selectedElem = e.target;

        poppup.style.display = 'flex';
        poppup.style.bottom = `${((scroollY*-1)-22.5)}px`;



        calBoxPrev.textContent = e.target.textContent;

        dayPop.textContent = e.target.textContent;

        monthPop.textContent = (e.target.id).replace(/[0-9]/g, '');

        if(num>0){
            description.value = localStorage.getItem(`re_descr${num}`);
            hour_input.value = localStorage.getItem(`re_hour${num}`);
            minuts_input.value = localStorage.getItem(`re_minuts${num}`);
        }else{
            description.value = '';
            hour_input.value = '';
            minuts_input.value = '';
        }

    }
    if(e.target.classList.contains("monthClass") || e.target.id == 'monthH1' || e.target == calendarSpace){
        num = (e.target.classList)[2];

        poppup.style.display = 'none';
    }
}







let remimber_number = 0;

let re_day = '';

let re_month = '';

let re_hour = '';

let re_minuts = '';

let re_descr = '';



if(localStorage.getItem('remimber_number')){
    remimber_number = localStorage.getItem('remimber_number');
}








let save =  document.querySelector('#save');
save.onclick = function(){
    if(hour_input.value != '' && minuts_input.value != '' && dayPop.textContent != 'Day' && monthPop.textContent != 'Month' && description.value != '') {
        if(num>0){
            poppup.style.display = 'flex';
            poppup.style.bottom = `${((scroollY*-1)-22.5)}px`;



            re_day = localStorage.setItem(`re_day${num}`,dayPop.textContent);

            re_month = localStorage.setItem(`re_month${num}`,monthPop.textContent);
        
            re_hour = localStorage.setItem(`re_hour${num}`,hour_input.value);

            re_minuts = localStorage.setItem(`re_minuts${num}`,minuts_input.value);
            
            re_descr = localStorage.setItem(`re_descr${num}`,description.value);


            location.reload();





        }else{
            remimber_number ++
            localStorage.setItem('remimber_number',remimber_number);


            re_day = localStorage.setItem(`re_day${remimber_number}`,dayPop.textContent);

            re_month = localStorage.setItem(`re_month${remimber_number}`,monthPop.textContent);
        
            re_hour = localStorage.setItem(`re_hour${remimber_number}`,hour_input.value);

            re_minuts = localStorage.setItem(`re_minuts${remimber_number}`,minuts_input.value);
            
            re_descr = localStorage.setItem(`re_descr${remimber_number}`,description.value);

        
        location.reload();
        }
        


    }if(hour_input.value == '' || minuts_input.value == '' || dayPop.textContent == 'Day' || monthPop.textContent == 'Month' || description.value == ''){
        description.value = 'Fill every forms';
    }
}

setInterval(()=>{
    if(remimber_number>0){
        for(i=1;i<=remimber_number;i++){
            if(document.querySelector(`#${localStorage.getItem('re_month'+i)}${localStorage.getItem('re_day'+i)}`)){
                document.querySelector(`#${localStorage.getItem('re_month'+i)}${localStorage.getItem('re_day'+i)}`).classList.add('re');
                document.querySelector(`#${localStorage.getItem('re_month'+i)}${localStorage.getItem('re_day'+i)}`).classList.add(i);
            }
        }
    }
})



let trash = document.getElementById('trash');

trash.onclick = function(){
    hour_input.value = '';
    minuts_input.value = '';


    description.value = '';

    

    if(selectedElem.classList.contains('re')){
        selectedElem.className = ""

        re_day = localStorage.removeItem(`re_day${num}`);

        re_month = localStorage.removeItem(`re_month${num}`);
            
        re_hour = localStorage.removeItem(`re_hour${num}`);

        re_minuts = localStorage.removeItem(`re_minuts${num}`);
                
        re_descr = localStorage.removeItem(`re_descr${num}`);
    }

    remimber_number--
}
















//                 CREDITS                    //

let credits = document.querySelector('#credits');

credits.onclick = () => {
    window.open('credit-copyright.html','_new');
}


setInterval(() => {
    d = new Date();
    document.querySelector('title').textContent = d;
}, 1);


//          download           //

let download = document.querySelector('#download');

download.onclick = () => {
    alert('NATIVE APP BY NATIVEFIER || downloading...')
}


setInterval(() => {
    d = new Date();
    document.querySelector('title').textContent = d;
}, 1);