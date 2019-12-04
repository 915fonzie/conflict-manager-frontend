
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
        // ------------------------------------------- REPLACE THIS WITH A FETCH TO GET ALL USERS
        for (let i = 1; i < 5; i++)
        {
            let option = document.createElement("option"); //input element, text
            option.setAttribute('value',`User ${i}`);
            option.setAttribute('name', "username");
            option.textContent = `User ${i}`;
            dropDown.appendChild(option);
        }
        // --------------------------------------------- REPLACE THIS WITH A FETCH TO GET ALL USERS
        loginForm.appendChild(dropDown);
        loginForm.appendChild(submitLogin);
        loginContainer.appendChild(loginForm);
        rootMid.appendChild(loginContainer);

        signUpForm.addEventListener("submit", function(e){
            e.preventDefault();
            console.log(e.target.username.value)
            CharacterSelection.renderPage(bodyElement);
        })
        loginForm.addEventListener("submit", function(e){
            e.preventDefault();
            console.log(e.target[0].value)
            CharacterSelection.renderPage(bodyElement);
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

        // ------------------------------- REPLACE THIS WITH A FETCH TO GET ALL CHARACTER ICONS

        for (let i = 1; i <= 8; i++)
        {
            let icon = document.createElement("img"); //input element, text
            icon.setAttribute('class',`fighter-icon`);
            icon.setAttribute('id',`fighter${i}`);
            icon.src = 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500';
            iconContainer.appendChild(icon);
        }

        // -------------------------------- REPLACE THIS WITH A FETCH TO GET ALL CHARACTER ICONS

        dynamicDescription.textContent = "If they ain't civil, then they ain't here!";

        chooseMid.appendChild(iconContainer);
        chooseMid.appendChild(dynamicDescription);
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
        let fighterContainerLeft = this.createFighterDOM(false); // ---------- WILL USE A JSON OBJECT FOR FUTURE - REPLACE NIL
        let midSectionContainer = this.createMidSection();
        let fighterContainerRight = this.createFighterDOM(true); // ---------------- WILL USE A JSON OBJECT FOR FUTURE - REPLACE NIL
        chooseMid.appendChild(fighterContainerLeft);
        chooseMid.appendChild(midSectionContainer);
        chooseMid.appendChild(fighterContainerRight);
    }
    static renderBottom(fightBottom)
    {
        let quickAttackButton = document.createElement('button');
        let strongAttackButton = document.createElement('button');
        let dodgeButton = document.createElement('button');
        let forfeitButton = document.createElement('button');
        quickAttackButton.className = "quick-attack";
        strongAttackButton.className = "strong-attack";
        dodgeButton.className = "dodge-attack";
        forfeitButton.className = "forfeit";
        quickAttackButton.textContent = "Quick Attack";
        strongAttackButton.textContent = "Strong Attack";
        dodgeButton.textContent = "Dodge";
        forfeitButton.textContent = "Forfeit";
        fightBottom.appendChild(quickAttackButton);
        fightBottom.appendChild(strongAttackButton);
        fightBottom.appendChild(dodgeButton);
        fightBottom.appendChild(forfeitButton);
    }
    static createFighterDOM(onRightSide, fighterJSON = null)
    {
        let fighterContainer = document.createElement('div');
        let fighterHealth = document.createElement('p');
        let fighterAnimation = document.createElement('img');
        let fighterLabel = document.createElement('p');
        fighterContainer.className = `fighter-${onRightSide + 1}`;
        fighterHealth.className = `fighter-${onRightSide + 1}-health`;
        fighterHealth.textContent = `##100##`;
        fighterAnimation.className = `fighter-${onRightSide + 1}-animation`;
        fighterAnimation.src = "https://media.giphy.com/media/f4HpCDvF84oh2/giphy.gif";
        fighterLabel.className = `fighter-${onRightSide + 1}-label`;
        fighterLabel.textContent = `##FIGHTER NAME##`
        fighterContainer.appendChild(fighterHealth);
        fighterContainer.appendChild(fighterAnimation);
        fighterContainer.appendChild(fighterLabel);
        return fighterContainer;
    }
    static createMidSection()
    {
        let middleRegionContainer = document.createElement('div');
        let middleRegionText = document.createElement('p');
        middleRegionContainer.className = "middle-region";
        middleRegionText.className = "middle-text";
        middleRegionText.textContent = "##HERE WE GO##";
        middleRegionContainer.appendChild(middleRegionText);
        return middleRegionContainer;
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
