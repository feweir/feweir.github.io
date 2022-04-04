let turn = 0;

let turnImg = document.querySelector('turnImg');
turnImg.style.filter = 'drop-shadow(1px 1px 20px rgb(127, 34, 189)';

turnImg.onclick = function(){
    eggC = prompt('ENTER CODE');
    eggD = new Date;
    if(eggC == eggD.getHours()+"feweir-winX"){
        winX();
    }
    if(eggC == eggD.getHours()+"feweir-winO"){
        winO();
    }
}


document.onclick = function(e) {
    if(e.target.classList.contains("space")){
        if(turn<=9 && e.target.id == "noChose"){
            if(turn%2==0){
                e.target.id = 'choseX';
                turnImg.style.backgroundImage = 'url(o.png)';
                turnImg.style.filter = 'drop-shadow(1px 1px 20px rgb(34, 189, 155))';

            }else{
                e.target.id = 'choseO';
                turnImg.style.backgroundImage = 'url(x.png)';
                turnImg.style.filter = 'drop-shadow(1px 1px 20px rgb(127, 34, 189)';
            }
        }
        turn++
    }
}

let repeatGameBtn = document.querySelector('repeatGameBtn');

let blur1 = document.querySelector('blur1');
let winIMG = document.querySelector('winIMG');
function winX(){
    blur1.style.display = 'flex';
    winIMG.style.backgroundImage = 'url(x.png)';
    winIMG.style.filter = 'drop-shadow(1px 1px 20px rgb(127, 34, 189)';
}

function winO(){
    blur1.style.display = 'flex';
    winIMG.style.backgroundImage = 'url(o.png)';
    winIMG.style.filter = 'drop-shadow(1px 1px 20px rgb(34, 189, 155))';
}

space1 = document.querySelector('space1');
space2 = document.querySelector('space2');
space3 = document.querySelector('space3');
space4 = document.querySelector('space4');
space5 = document.querySelector('space5');
space6 = document.querySelector('space6');
space7 = document.querySelector('space7');
space8 = document.querySelector('space8');
space9 = document.querySelector('space9');

repeatGameBtn.onclick = ()=>{
    for(i=1;i<10;i++){
        document.querySelector(`space${i}`).id = "noChose";
        blur1.style.display = 'none';
        turn=0;
    }
}


function checkWin(){
    if(space1.id == 'choseX' && space2.id == 'choseX' && space3.id == 'choseX'){
        winX();
    }else if(space1.id == 'choseO' && space2.id == 'choseO' && space3.id == 'choseO'){
        winO();
    };
    if(space4.id == 'choseX' && space5.id == 'choseX' && space6.id == 'choseX'){
        winX();
    }else if(space4.id == 'choseO' && space5.id == 'choseO' && space6.id == 'choseO'){
        winO();
    };
    if(space7.id == 'choseX' && space8.id == 'choseX' && space9.id == 'choseX'){
        winX();
    }else if(space7.id == 'choseO' && space8.id == 'choseO' && space9.id == 'choseO'){
        winO();
    };



    if(space1.id == 'choseX' && space4.id == 'choseX' && space7.id == 'choseX'){
        winX();
    }else if(space1.id == 'choseO' && space4.id == 'choseO' && space7.id == 'choseO'){
        winO();
    };
    if(space2.id == 'choseX' && space5.id == 'choseX' && space8.id == 'choseX'){
        winX();
    }else if(space2.id == 'choseO' && space5.id == 'choseO' && space8.id == 'choseO'){
        winO();
    };
    if(space3.id == 'choseX' && space6.id == 'choseX' && space9.id == 'choseX'){
        winX();
    }else if(space3.id == 'choseO' && space6.id == 'choseO' && space9.id == 'choseO'){
        winO();
    };



    if(space1.id == 'choseX' && space5.id == 'choseX' && space9.id == 'choseX'){
        winX();
    }else if(space1.id == 'choseO' && space5.id == 'choseO' && space9.id == 'choseO'){
        winO();
    };
    if(space3.id == 'choseX' && space5.id == 'choseX' && space7.id == 'choseX'){
        winX();
    }else if(space3.id == 'choseO' && space5.id == 'choseO' && space7.id == 'choseO'){
        winO();
    };

}




setInterval(()=>{
    checkWin()
})


/*             PAYPAL              */

let paypal = document.querySelector('#paypal');
paypal.onclick = () => {window.open('https://www.paypal.com/paypalme/feweir','_new');}