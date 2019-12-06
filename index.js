
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
        bodyElement.appendChild(rootBottom);


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
                localStorage.setItem("userWins", json["wins"]);
                playBackground();
                buttonClickAudio.play();
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
                localStorage.setItem("userWins", json["wins"]);
                playBackground();
                buttonClickAudio.play();
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
            buttonClickAudio.play()
            About.renderPage(bodyElement);
        })
        howPlayButton.addEventListener('click', function(){
            buttonClickAudio.play()
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
            buttonClickAudio.play()
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
            buttonClickAudio.play();
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
                    if(parseInt(localStorage.getItem("userWins")) >= json[i].wins_required)
                    {
                        console.log("it hits", json[i].win_required)
                        icon.src = json[i].icon_img
                        icon.addEventListener('click', function(e){
                            localStorage.setItem("fighterId", json[i].id)
                            dynamicDescription.textContent = json[i].description;
                        });
                    }
                    else
                    {
                        icon.src = 'https://i.imgur.com/VNYNDVn.png'
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
            buttonClickAudio.play();
            ChooseBackground.renderPage(bodyElement);
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
        let leftClick = document.createElement('button');
        leftClick.id = 'left-click';
        leftClick.textContent = '<'
        backgroundContainer.appendChild(leftClick);
        let background = document.createElement("img"); //input element, text
        background.className = "background";
        background.src = backgroundArray[slideIndex]
        backgroundContainer.appendChild(background);
        let rightClick = document.createElement('button');
        rightClick.id = 'right-click';
        rightClick.textContent = ">"
        backgroundContainer.appendChild(rightClick);
        backgroundMid.appendChild(backgroundContainer);
        leftClick.addEventListener('click', function(){
            slideIndex = incrementBackgroundIndex(false, slideIndex, backgroundArray);
            background.src = backgroundArray[slideIndex]
            buttonClickAudio.play();
        });
        rightClick.addEventListener('click', function(){
            slideIndex = incrementBackgroundIndex(true, slideIndex, backgroundArray);
            background.src = backgroundArray[slideIndex]
            buttonClickAudio.play();
        });
    }

    static renderBottom(backgroundBottom){
        let continueButton = document.createElement('button')
        continueButton.textContent = "Continue";
        backgroundBottom.appendChild(continueButton);
        continueButton.addEventListener('click', function(){
            buttonClickAudio.play();
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
        fightMid.style.backgroundImage = `url(${backgroundArray[slideIndex]})`;
        fightMid.style.backgroundSize = "100% auto"
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

        fetch(`http://localhost:3000/characters/${randomEnemyId}`) 
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
            buttonClickAudio.play();
            HomePage.renderPage(bodyElement);
        })

        localStorage.setItem('defenderHealth', 100);
        async function combatRound(attackerId, defenderId, defenderDodge = false)
        {
            console.log(attackerId, defenderId);
            let response = await fetch('http://localhost:3000/characters',{
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
            let defender = await response.json();
            localStorage.setItem('defenderHealth', defender["defender_health"])
            if (defender["defender_health"] <= 0)
            {
                if (defender["defender_id"] == localStorage.getItem("fighterId"))
                {
                    document.querySelector(".fighter-1-health").textContent = 0;
                    FightPage.playerLosePage();
                }
                else
                {
                    document.querySelector(".fighter-2-health").textContent = 0;
                    FightPage.playerWinPage();
                    // update wins
                }
            }  
            else // if the fight is not over
            {
                if (defender["defender_id"] == localStorage.getItem("fighterId")) // if the player is the defender
                {
                    document.querySelector(".fighter-1-health").textContent = defender["defender_health"];
                }
                else // if the enemy is the defender
                {
                    document.querySelector(".fighter-2-health").textContent = defender["defender_health"]; 
                }
            }
        }
        attackButton.addEventListener('click', async function(e){         
            await combatRound(localStorage.getItem("fighterId"), localStorage.getItem("enemyId"))
            if(localStorage.getItem('defenderHealth') > 0){
                combatRound(localStorage.getItem("enemyId"), localStorage.getItem("fighterId"))
            }   
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
        fighterContainer.appendChild(fighterLabel);
        fighterLabel.appendChild(fighterHealth);
        fighterContainer.appendChild(fighterAnimation);
        
    }

    static createMidSection(middleRegionContainer)
    {
        let middleRegionText = document.createElement('p');
        middleRegionContainer.className = "middle-region";
        middleRegionText.className = "middle-text";
        middleRegionContainer.appendChild(middleRegionText);
    }

    static playerWinPage()
    {
        this.resultUpdate("You win you Winner");
        localStorage.setItem('userWins', parseInt(localStorage.getItem('userWins')) + 1)
        fetch(`http://localhost:3000/users/${localStorage.getItem('userId')}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify({
                wins: localStorage.getItem('userWins')
            })
        })
        .then(resp => resp.json())
        .then(json => {
            console.log(json)
            console.log(localStorage.getItem('userWins'))
        })
        .catch()
    }

    static playerLosePage()
    {
        this.resultUpdate("You lose you Loser");
    }

    static resultUpdate(message){
        let middleText = document.querySelector('.middle-text');
        middleText.textContent = message;
        console.log(middleText.textContent)
        let buttonContainer = document.querySelector('.fight-bottom');
        clearElements(buttonContainer);
        let playAgain = document.createElement('button');
        playAgain.id = "play-again";
        playAgain.textContent = 'Play Again?';
        let exitGame = document.createElement('button');
        exitGame.id = 'exit-game';
        exitGame.textContent = 'Exit';
        buttonContainer.appendChild(playAgain);
        buttonContainer.appendChild(exitGame);
        playAgain.addEventListener('click', function(e){
            CharacterSelection.renderPage(bodyElement);
            buttonClickAudio.play()
        })
        exitGame.addEventListener('click', function(e){
            HomePage.renderPage(bodyElement);
            buttonClickAudio.play()
        })
    }
}
/*-------------------------------------------------------------------------*/

/*-------------------- This section is for creating the slides for the background -----*/
let slideIndex = 0;
let backgroundArray = ["https://i.imgur.com/Lg2omfl.gif","https://i.imgur.com/8FoYKgc.gif", "https://i.imgur.com/avuyoaD.gif", "https://i.imgur.com/wp3leDc.gif", "https://i.imgur.com/K7fu07T.gif", "https://i.imgur.com/YWCqjwV.gif", "https://i.imgur.com/Sx7PROj.gif"]
let buttonClickAudio = new Audio('https://freesound.org/data/previews/322/322228_5048136-lq.mp3');
buttonClickAudio.type = 'audio/mp3'
function incrementBackgroundIndex(increment, currentIndex, sourceArray)
{
    if (increment === true)
    {
        if (currentIndex + 1 >= sourceArray.length)
        {
            return 0
        }
        else
        {
            return ++currentIndex        
        }
    }
    else
    {
        if (currentIndex - 1 < 0)
        {
            return sourceArray.length-1
        }
        else
        {
            return --currentIndex        
        }
    }

}
/*-------------------------------------------------------------------------------------*/
function playBackground(){
    if (!document.getElementById("background-music")){
        let audioTest = document.createElement('audio');
        audioTest.id = "background-music"
        audioTest.src = 'https://mod3-project.s3-us-west-2.amazonaws.com/Premium+retro+swing+music+for+Cooking+Shows+and+Videos+-+Food+Show+Kochshow+Music.mp3'
        document.head.appendChild(audioTest)
        audioTest.loop = true;
        audioTest.play()
    }
}

document.addEventListener("DOMContentLoaded", function(e){

    bodyElement = document.querySelector('body');
    HomePage.renderPage(bodyElement);


});
