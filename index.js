class HomePage{
    static renderPage(bodyElement){
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

        let input = document.createElement("input"); //input element, text
        input.setAttribute('type',"text");
        input.setAttribute('name',"username");

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

        let loginBreak = document.createElement("br");
        loginForm.appendChild(loginBreak);
        loginForm.setAttribute('method',"post");

        let submitLogin = document.createElement("input"); //input element, Submit button
        submitLogin.setAttribute('type',"submit");
        submitLogin.setAttribute('value',"Submit");

        let dropDown = document.createElement('select');
        // ------------------------------------------- REPLACE THIS WITH A FETCH TO GET ALL USERS
        for (let i = 1; i < 4; i++)
        {
            let option = document.createElement("option"); //input element, text
            option.setAttribute('value',`User ${i}`);
            option.textContent = `User ${i}`;
            dropDown.appendChild(option);
        }
        // --------------------------------------------- REPLACE THIS WITH A FETCH TO GET ALL USERS
        loginForm.appendChild(dropDown);
        loginForm.appendChild(submitLogin);
        loginContainer.appendChild(loginForm);
        rootMid.appendChild(loginContainer);
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

class CharacterSelection{
    static renderPage(bodyElement){
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
            icon.setAttribute('id',`FIGHTER ${i}`);
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
        chooseBottom.appendChild(continueButton);
    }
}

document.addEventListener("DOMContentLoaded", function(e){
    bodyElement = document.querySelector('body');
    //HomePage.renderPage(bodyElement);
    CharacterSelection.renderPage(bodyElement);
})
