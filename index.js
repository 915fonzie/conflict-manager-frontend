
window.localStorage;

/* --------This function is used to clear the DOM in order to render different pages ----*/
function clearElements(domElement)
{
    while (domElement.firstChild) {
    domElement.removeChild(domElement.firstChild);
    }
}
/* ---------------------------------------------------------------------------------------*/

/*---------- Renders the Home page------------------------------------------------------- */
class HomePage{
    static renderPage(bodyElement){
        clearElements(bodyElement);
        let rootTop = document.createElement('div');
        rootTop.className = "root-top";
        let rootMid = document.createElement('div');
        rootMid.className = "root-mid";
        let rootBottom = document.createElement('div');
        rootBottom.className = "root-bot";
        this.renderTop(rootTop);
        bodyElement.appendChild(rootTop);
        this.renderMid(rootMid);
        bodyElement.appendChild(rootMid);
        this.renderBottom(rootBottom);
        bodyElement.appendChild(rootBottom)
    }

    static renderTop(rootTop){
        let titleText = document.createElement('p');
        titleText.textContent = "CONFLICT MANAGER"
        rootTop.appendChild(titleText);
    }

    static renderMid(rootMid){
        let signUpContainer = document.createElement('div');
        signUpContainer.id = "sign-up";

        let signUpForm = document.createElement("form");
        signUpForm.setAttribute('method',"post");
        signUpForm.className = "submit-form"

        let input = document.createElement("input"); //input element, text
        input.setAttribute('type',"text");
        input.setAttribute('name',"username");
        input.placeholder = "Create Username"

        let submitSignUp = document.createElement("input"); //input element, Submit button
        submitSignUp.setAttribute('type',"submit");
        submitSignUp.setAttribute('value',"Submit");
        signUpForm.textContent = "SIGN UP:";

        let breakSpace = document.createElement('br');
        signUpForm.appendChild(breakSpace);
        signUpForm.appendChild(input);
        signUpForm.appendChild(submitSignUp);
        signUpContainer.appendChild(signUpForm)
        rootMid.appendChild(signUpContainer);

        let orContainer = document.createElement('div');
        orContainer.id= "or";
        orContainer.textContent = "OR";
        rootMid.appendChild(orContainer);

        let loginContainer = document.createElement('div');
        loginContainer.id = "login";

        let loginForm = document.createElement("form");
        loginForm.textContent = 'LOGIN:';
        loginForm.className = "submit-form";

        let loginBreak = document.createElement("br");
        loginForm.appendChild(loginBreak);
        loginForm.setAttribute('method',"post");

        let submitLogin = document.createElement("input"); //input element, Submit button
        submitLogin.setAttribute('type',"submit");
        submitLogin.setAttribute('value',"Submit");
        // submitLogin.id = 'submit-button';

        let dropDown = document.createElement('select');
        fetch('http://localhost:3000/users')
        .then(resp => resp.json())
        .then(json => {
            for (let i = 0; i < json.length; i++)
            {
                let option = document.createElement("option"); //input element, text
                option.setAttribute('value', json[i].id);
                option.setAttribute('name', "username");
                option.textContent = json[i].username;
                dropDown.appendChild(option);
            }
        })

        loginForm.appendChild(dropDown);
        loginForm.appendChild(submitLogin);
        loginContainer.appendChild(loginForm);
        rootMid.appendChild(loginContainer);

        signUpForm.addEventListener("submit", function(e){
            e.preventDefault();
            // console.log(e.target.username.value)
            fetch("http://localhost:3000/users", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    username: e.target.username.value
                })
            })
            .then(resp => resp.json())
            .then(json => {
                localStorage.setItem("userId", json["id"]);
                localStorage.setItem("userWins", json["wins"])
                CharacterSelection.renderPage(bodyElement);
            })
            .catch()

        })
        loginForm.addEventListener("submit", function(e){
            e.preventDefault();
            fetch(`http://localhost:3000/users/${e.target[0].value}`)
            .then(resp => resp.json())
            .then(json => {
                localStorage.setItem("userId", json["id"]);
                localStorage.setItem("userWins", json["wins"])
                CharacterSelection.renderPage(bodyElement);
            })
        })
    }

    static renderBottom(rootBottom){
        let aboutButton = document.createElement('button');
        aboutButton.textContent = 'About';
        aboutButton.id = 'about';
        let howPlayButton = document.createElement('button');
        howPlayButton.textContent = 'How to Play';
        howPlayButton.id = 'how-to-play';
        rootBottom.appendChild(aboutButton)
        rootBottom.appendChild(howPlayButton)

        aboutButton.addEventListener('click', function(){
            About.renderPage(bodyElement);
        })
        howPlayButton.addEventListener('click', function(){
            HowToPlay.renderPage(bodyElement);
        })
    }
}
/*-----------------------------------------------------------------------------*/

/*------------------- Renders the About page-----------------------------------*/
class About{
    static renderPage(bodyElement){
        clearElements(bodyElement);
        let aboutTop = document.createElement('div');
        aboutTop.className = "about-top";
        let aboutMid = document.createElement('div');
        aboutMid.className = "about-mid";
        this.renderTop(aboutTop);
        bodyElement.appendChild(aboutTop);
        this.renderMid(aboutMid);
        bodyElement.appendChild(aboutMid);
    }

    static renderTop(aboutTop){
        let titleText = document.createElement('p');
        titleText.textContent = "About"
        aboutTop.appendChild(titleText);
        let backButton = document.createElement('button');
        backButton.textContent = 'Back';
        aboutTop.appendChild(backButton);
        backButton.addEventListener('click', function(){
            HomePage.renderPage(bodyElement);
        })
    }

    static renderMid(aboutMid){
        let bodyText = document.createElement('p')
        bodyText.textContent ="This is only temporary";
        aboutMid.appendChild(bodyText);
    }
}
/*-----------------------------------------------------------------------------*/

/*------------------- Renders the About page-----------------------------------*/
class HowToPlay{
    static renderPage(bodyElement){
        clearElements(bodyElement);
        let howTop = document.createElement('div');
        howTop.className = "about-top";
        let howMid = document.createElement('div');
        howMid.className = "about-mid";
        this.renderTop(howTop);
        bodyElement.appendChild(howTop);
        this.renderMid(howMid);
        bodyElement.appendChild(howMid);
    }

    static renderTop(howTop){
        let titleText = document.createElement('p');
        titleText.textContent = "How to Play"
        howTop.appendChild(titleText);
        let backButton = document.createElement('button');
        backButton.textContent = 'Back';
        howTop.appendChild(backButton);
        backButton.addEventListener('click', function(){
            HomePage.renderPage(bodyElement);
        })
    }

    static renderMid(howMid){
        let bodyText = document.createElement('p')
        bodyText.textContent ="This is only temporary for the how page";
        howMid.appendChild(bodyText);
    }
}
/*-----------------------------------------------------------------------------*/

/*---------------------- Renders the Character selection page ---------------- */
class CharacterSelection{
    static renderPage(bodyElement){
        clearElements(bodyElement)
        let chooseTop = document.createElement('div');
        chooseTop.className = "choose-top";
        let chooseMid = document.createElement('div');
        chooseMid.className = "choose-mid";
        let chooseBottom = document.createElement('div');
        chooseBottom.className = "choose-bottom";
        this.renderTop(chooseTop);
        bodyElement.appendChild(chooseTop);
        this.renderMid(chooseMid);
        bodyElement.appendChild(chooseMid);
        this.renderBottom(chooseBottom);
        bodyElement.appendChild(chooseBottom)
    }

    static renderTop(chooseTop)
    {
        let titleText = document.createElement('p');
        titleText.textContent = "CHOOSE YOUR CHARACTER"
        chooseTop.appendChild(titleText);
    }

    static renderMid(chooseMid)
    {
        let iconContainer = document.createElement('div');
        let dynamicDescription = document.createElement('p')
        iconContainer.id = "images";
        dynamicDescription.id = "description";

        chooseMid.appendChild(iconContainer);
        chooseMid.appendChild(dynamicDescription);

        fetch(`http://localhost:3000/characters`)
            .then(resp => resp.json())
            .then(json => {
                for (let i = 0; i < json.length; i++)
                {
                    let icon = document.createElement("img"); //input element, text
                    icon.setAttribute('class',`fighter-icon`);
                    icon.setAttribute('id',json[i].id);

                    if(localStorage.getItem("userWins") >= json[i].wins_required)
                    {
                        icon.src = json[i].icon_img
                        icon.addEventListener('click', function(e){
                            localStorage.setItem("fighterId", e.target.id)
                            dynamicDescription.textContent = json[e.target.id].description;
                        });
                    }
                    else
                    {
                        icon.src = 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                    }

                    iconContainer.appendChild(icon);
                }
        })
     
    }

    static renderBottom(chooseBottom)
    {
        let continueButton = document.createElement('button')
        continueButton.textContent = "Continue";
        continueButton.id = "choose-continue";
        chooseBottom.appendChild(continueButton);

        continueButton.addEventListener('click', function(e){
            ChooseBackground.renderPage(bodyElement);
            showDivs(slideIndex);
        })
    }
}
/*----------------------------------------------------------------------------------------*/

/*--------------------- Renders the Background page ------------------------------------- */
class ChooseBackground{
    static renderPage(bodyElement){
        clearElements(bodyElement)
        let backgroundTop = document.createElement('div');
        backgroundTop.className = "background-top";
        let backgroundMid = document.createElement('div');
        backgroundMid.className = "background-mid";
        let backgroundBottom = document.createElement('div');
        backgroundBottom.className = "background-bottom";
        this.renderTop(backgroundTop);
        bodyElement.appendChild(backgroundTop);
        this.renderMid(backgroundMid);
        bodyElement.appendChild(backgroundMid);
        this.renderBottom(backgroundBottom);
        bodyElement.appendChild(backgroundBottom);
    }

    static renderTop(backgroundTop){
        let titleText = document.createElement('p');
        titleText.textContent = "CHOOSE BACKGROUND"
        backgroundTop.appendChild(titleText);
    }

    static renderMid(backgroundMid){
        let backgroundContainer = document.createElement('div');
        backgroundContainer.id = "backgrounds"
        for (let i = 1; i <= 8; i++)
        {
            let background = document.createElement("img"); //input element, text
            background.className = "background";
            if(i % 2 === 0){
            background.src = 'https://i.imgur.com/SzVPn2I.png';
            backgroundContainer.appendChild(background);
            }
            else{
                background.src = 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500';
                backgroundContainer.appendChild(background);
            }
        }
        let leftClick = document.createElement('button');
        leftClick.id = 'left-click';
        backgroundContainer.appendChild(leftClick);
        let rightClick = document.createElement('button');
        rightClick.id = 'right-click';
        backgroundContainer.appendChild(rightClick);
        backgroundMid.appendChild(backgroundContainer);
        leftClick.addEventListener('click', function(){
            plusDivs(-1)
        });
        rightClick.addEventListener('click', function(){
            plusDivs(1)
        });
    }
    static renderBottom(backgroundBottom){
        let continueButton = document.createElement('button')
        continueButton.textContent = "Continue";
        backgroundBottom.appendChild(continueButton);
        continueButton.addEventListener('click', function(){
            clearElements(bodyElement);
            FightPage.renderPage(bodyElement);
        })
    }
}
/*---------------------------------------------------------------------------*/

/*-------------------------- Renders the Fight page -------------------------*/
class FightPage{
    static renderPage(bodyElement){
        clearElements(bodyElement)
        let fightTop = document.createElement('div');
        fightTop.className = "fight-top";
        let fightMid = document.createElement('div');
        fightMid.className = "fight-mid";
        let fightBottom = document.createElement('div');
        fightBottom.className = "fight-bottom";
        this.renderTop(fightTop);
        bodyElement.appendChild(fightTop);
        this.renderMid(fightMid);
        bodyElement.appendChild(fightMid);
        this.renderBottom(fightBottom);
        bodyElement.appendChild(fightBottom)
    }
    static renderTop(fightTop)
    {
        let titleText = document.createElement('p');
        titleText.textContent = "FIGHT BEGIN!"
        fightTop.appendChild(titleText);
    }
    static renderMid(chooseMid)
    {
        let fighterContainerLeft = document.createElement('div');
        let midSectionContainer = document.createElement('div');
        let fighterContainerRight = document.createElement('div');

        chooseMid.appendChild(fighterContainerLeft);
        chooseMid.appendChild(midSectionContainer);
        chooseMid.appendChild(fighterContainerRight);

        fetch(`http://localhost:3000/characters/${localStorage.getItem("fighterId")}`)
        .then(resp => resp.json())
        .then(json => {
            this.createFighterDOM(fighterContainerLeft, false, json);
            this.createMidSection(midSectionContainer); 
        })

        let randomEnemyId = parseInt(Math.random()*Math.floor(7) + 1);

        while (randomEnemyId == localStorage.getItem("fighterId"))
        {
            randomEnemyId = parseInt(Math.random()*Math.floor(7) + 1);
        }

        localStorage.setItem("enemyId", randomEnemyId)

        fetch(`http://localhost:3000/characters/${randomEnemyId}`) /* MAGIC NUMBER GROSSSSSSSSS */
        .then(resp => resp.json())
        .then(json => {
            fighterContainerRight = this.createFighterDOM(fighterContainerRight, true, json);
        });

    }
    static renderBottom(fightBottom)
    {
        let attackButton = document.createElement('button');
        let dodgeButton = document.createElement('button');
        let forfeitButton = document.createElement('button');
        
        attackButton.className = "attack";
        dodgeButton.className = "dodge-attack";
        forfeitButton.className = "forfeit";
        attackButton.textContent = "Attack";
        dodgeButton.textContent = "Dodge";
        forfeitButton.textContent = "Forfeit";

        fightBottom.appendChild(attackButton);
        fightBottom.appendChild(dodgeButton);
        fightBottom.appendChild(forfeitButton);

        forfeitButton.addEventListener('click', function(){
            clearElements(bodyElement);
            HomePage.renderPage(bodyElement);
        })

        function combatRound(attackerId, defenderId, defenderDodge = false)
        {
            console.log(attackerId, defenderId);
            fetch('http://localhost:3000/characters',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accepts': 'application/json'    
                },
                body: JSON.stringify({
                    attacker_id: attackerId,
                    defender_id: defenderId,
                    defender_dodge: defenderDodge
                })
            })
            .then(resp => resp.json())
            .then(json =>{
                console.log(json)
                if (json["defender_health"] < 0)
                {
                    if (json["defender_id"] == localStorage.getItem("fighterId"))
                    {
                        document.querySelector(".fighter-1-health").textContent = 0;
                        console.log("player has died")
                    }
                    else
                    {
                        document.querySelector(".fighter-2-health").textContent = 0;
                        console.log("enemy has died")

                    }
                }  
                else // if the fight is not over
                {
                    if (json["defender_id"] == localStorage.getItem("fighterId"))
                    {
                        document.querySelector(".fighter-1-health").textContent = json["defender_health"];
                        console.log("player has taken damage")

                    }
                    else
                    {
                        document.querySelector(".fighter-2-health").textContent = json["defender_health"];
                        console.log("enemy has taken damage")
                    }

                    // run animations stuff
                    // wait a couple seconds
                    // if this was the player's round
                        // create and run combatRound for enemy
                    // if this was the enemy's round
                        // do nothing
                }

            })
            .catch()
        }
        
        attackButton.addEventListener('click', function(e){
            combatRound(localStorage.getItem("fighterId"), localStorage.getItem("enemyId"));
            setTimeout(combatRound(localStorage.getItem("enemyId"), localStorage.getItem("fighterId")), 10000);
           
        })

        dodgeButton.addEventListener('click', function(e){
            combatRound(localStorage.getItem("enemyId"), localStorage.getItem("fighterId"), true)
        })


    }
    static createFighterDOM(fighterContainer, onRightSide, fighterJSON = null)
    {
        let fighterHealth = document.createElement('p');
        let fighterAnimation = document.createElement('img');
        let fighterLabel = document.createElement('p');
        fighterContainer.className = `fighter-${onRightSide + 1}`;
        fighterHealth.className = `fighter-${onRightSide + 1}-health`;
        fighterHealth.textContent = fighterJSON["health"];
        fighterAnimation.className = `fighter-${onRightSide + 1}-animation`;
        fighterAnimation.src = fighterJSON["idle_gif"];
        fighterLabel.className = `fighter-${onRightSide + 1}-label`;
        fighterLabel.textContent = fighterJSON["name"]
        fighterContainer.appendChild(fighterHealth);
        fighterContainer.appendChild(fighterAnimation);
        fighterContainer.appendChild(fighterLabel);
    }
    static createMidSection(middleRegionContainer)
    {
        let middleRegionText = document.createElement('p');
        middleRegionContainer.className = "middle-region";
        middleRegionText.className = "middle-text";
        middleRegionText.textContent = "##HERE WE GO##";
        middleRegionContainer.appendChild(middleRegionText);
    }
}
/*-------------------------------------------------------------------------*/

/*-------------------- This section is for creating the slides for the background -----*/
let slideIndex = 1;
function plusDivs(n) {
    showDivs(slideIndex += n);
}
function showDivs(n) {
    let i;
    let x = document.getElementsByClassName("background");

    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";  
}
/*-------------------------------------------------------------------------------------*/

document.addEventListener("DOMContentLoaded", function(e){


    bodyElement = document.querySelector('body');
    HomePage.renderPage(bodyElement);


});
