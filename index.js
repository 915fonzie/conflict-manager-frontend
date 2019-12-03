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
        //renderMid(rootMid);
        this.renderBottom(rootBottom);
        bodyElement.appendChild(rootBottom)
    }

    static renderTop(rootTop){
        let titleText = document.createElement('p');
        titleText.textContent = "Conflict Management"
        rootTop.appendChild(titleText);
    }

    static renderMid(rootMid){

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

document.addEventListener("DOMContentLoaded", function(e){
    bodyElement = document.querySelector('body');
    HomePage.renderPage(bodyElement);
})
