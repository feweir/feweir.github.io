if(window.innerHeight>window.innerWidth){
  document.querySelector('#stylesheet').href = 'MOstyle.css';
  setTimeout(function() {
    document.querySelector('body').innerHTML = `
    <img src="logoCrystal.png" id="logo"></img>

    <button id="removeCookies" title="Remove cookies"></button>
    <button id="credits" title="Credits"></button>
    <div id="paypal" title="GIVE ME SOMETHING TO SUPPORT ME"></div>
    
    <a href="MO-game1/game1.html" id="MOgame1"></a>
    <a href="" id="calendary" style="color: white; font-size:35px; position: absolute; top: 40%;"></a>

    
    <blurSelection>
      <popup>
        <div id="cookieImage"></div>
        <h1 id="cookieTxt">Our site (Crystal Space) use cookies<br> for encrement users experience,<br> some data is storage only on you computer,<br> no in our or other storage-space <br>and with one click you <br>can remove everything by clicking,<br> on the button at the bottom<br> right of the page with the cookie symbol.</h1>
        <button id="acceptCookie_btn">ACCEPT</button>
        <button id="declineCookie_btn" title="DECLINE COOKIES"></button>
      </popup>
    </blurSelection>
  
    <blurSelection2 id="blur2">
      <creditsPoput>
        <button id="closeCredits"></button>
    
        <p>Copyright of site (code: html css javascript) is of Feweir. Image and more is of: </p></br>
        <a href='https://www.freepik.com/vectors/diamond-icon'>Diamond icon vector created by upklyak - www.freepik.com</a></br>
        <a href="https://www.freepik.com/r3dmax">Boreal mountain by r3dmax - www.freepik.com</a></br>
        <a href="https://www.flaticon.com/free-icons/cookie" title="cookie icons">Cookie icons created by Freepik - Flaticon</a></br>
        <a href="https://www.flaticon.com/free-icons/close" title="close icons">Close icons created by Ilham Fitrotul Hayat - Flaticon</a></br>
        <a href="https://www.flaticon.com/free-icons/cookies" title="cookies icons">Cookies icons created by Smashicons - Flaticon</a></br>
        <a href="https://www.flaticon.com/free-icons/files-and-folders" title="files and folders icons">Files and folders icons created by Freepik - Flaticon</a></br>
        <a href="https://www.flaticon.com/free-icons/server" title="server icons">Server icons created by vectorsmarket15 - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/cross" title="cross icons">Cross icons created by Freepik - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/paypal" title="paypal icons">Paypal icons created by Pixel perfect - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/tic-tac-toe" title="tic tac toe icons">Tic tac toe icons created by Freepik - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/x" title="x icons">X icons created by Stockio - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/o" title="o icons">O icons created by Freepik - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/refresh" title="refresh icons">Refresh icons created by Freepik - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/trash" title="trash icons">Trash icons created by Freepik - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/save" title="save icons">Save icons created by Yuan Design - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/calendar" title="calendar icons">Calendar icons created by Freepik - Flaticon</a>
      </creditsPoput>
    </blurSelection2>

    <loaderWrapper>
      <loadCircle></loadCircle>
      <loadCircle2></loadCircle2>
      <loadingNumber>0%</loadingNumber>
	  </loaderWrapper>

    <a id="cc" href="https://github.com/Feweir">&copy Copyright by &#127791Feweir 2022-2030 feweirebbasta404@gmail.com</a>

  
    `;
    document.querySelector('#appScript').src = 'MOapp.js';
  },700);

}else if(window.innerHeight<window.innerWidth || window.innerHeight==window.innerWidth){
  document.querySelector('#stylesheet').href = 'PCstyle.css';
  document.querySelector('body').innerHTML = `
    <div></div>	
  
    <body>
    <header>
    
      <img src="logoCrystal.png" alt="logo" id="logo" href="/index.html"></img>
    
    </header>
    
    <content id="content">
    
    <cardBackground></cardBackground>
    <card>
      <a id="cc" href="https://github.com/Feweir">&copy Copyright by &#127791Feweir 2022-2030 feweirebbasta404@gmail.com</a>
    
      <a href="" id="calendary" title="CALENDAR WEB VERSION"></a>

      <a href="CrystalEditor/index.html" title="web code editor" style="color:white; position:absolute; top:20%;">WEB CODE EDITOR</a>

    
    
    
    
    </card>
    
    <button id="removeCookies" title="Remove cookies"></button>
    <button id="credits" title="Credits"></button>
    <div id="paypal" title="GIVE ME SOMETHING TO SUPPORT ME"></div>
    
    
    </content>
    
    
    
    <blurSelection>
      <popup>
        <div id="cookieImage"></div>
        <h1 id="cookieTxt">Our site (Crystal Space) use cookies for encrement users experience,<br> some data is storage only on you computer,<br> no in our or other storage-space and with one click you can remove everything by clicking,<br> on the button at the bottom right of the page with the cookie symbol.</h1>
        <button id="acceptCookie_btn">ACCEPT</button>
        <button id="declineCookie_btn" title="DECLINE COOKIES"></button>
      </popup>
    </blurSelection>
    
    
    <div id="" class="popupRemoveCookiePopup_class">
      <h3>ALL COOKIES ARE REMOVED</h3>
    </div>
    
    <blurSelection2 id="blur2">
      <creditsPoput>
        <button id="closeCredits"></button>
        <p>Copyright of site (code: html css javascript) is of Feweir. Image and more is of: </p></br>
        <a href='https://www.freepik.com/vectors/diamond-icon'>Diamond icon vector created by upklyak - www.freepik.com</a></br>
        <a href="https://www.freepik.com/r3dmax">Boreal mountain by r3dmax - www.freepik.com</a></br>
        <a href="https://www.flaticon.com/free-icons/cookie" title="cookie icons">Cookie icons created by Freepik - Flaticon</a></br>
        <a href="https://www.flaticon.com/free-icons/close" title="close icons">Close icons created by Ilham Fitrotul Hayat - Flaticon</a></br>
        <a href="https://www.flaticon.com/free-icons/cookies" title="cookies icons">Cookies icons created by Smashicons - Flaticon</a></br>
        <a href="https://www.flaticon.com/free-icons/files-and-folders" title="files and folders icons">Files and folders icons created by Freepik - Flaticon</a></br>
        <a href="https://www.flaticon.com/free-icons/server" title="server icons">Server icons created by vectorsmarket15 - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/cross" title="cross icons">Cross icons created by Freepik - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/paypal" title="paypal icons">Paypal icons created by Pixel perfect - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/tic-tac-toe" title="tic tac toe icons">Tic tac toe icons created by Freepik - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/x" title="x icons">X icons created by Stockio - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/o" title="o icons">O icons created by Freepik - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/refresh" title="refresh icons">Refresh icons created by Freepik - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/trash" title="trash icons">Trash icons created by Freepik - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/save" title="save icons">Save icons created by Yuan Design - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/calendar" title="calendar icons">Calendar icons created by Freepik - Flaticon</a>
      </creditsPoput>
    </blurSelection2>
    
    
    <loaderWrapper>
      <img src="logoCrystal.png" alt="logo" id="logo2" href="/index.html"></img>
      <loadingBar></loadingBar>
      <loadingNumber>0%</loadingNumber>
    </loaderWrapper>`;
  
    document.querySelector('#appScript').src = 'PCapp.js';
}