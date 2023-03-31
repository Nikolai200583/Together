function renderScreenStepUser() {
    const app = document.querySelector('.app');
    app.textContent = '';
    const title = document.createElement('h1');
    title.classList.add('title')
    title.textContent = 'Твой ход!';
    const enemy = document.createElement('h2');
    enemy.classList.add('enemy');
    enemy.textContent ='Твой противник ' + window.application.enemy[0]; 
    const buttonBox = document.createElement('div');
    buttonBox.classList.add('button__box');
    app.appendChild(title);
    app.appendChild(enemy);
    app.appendChild(buttonBox);
    window.application.renderBlock('buttonBox', buttonBox);

}

function renderBlockStepUser(buttonBox) {
    const buttonsName = ['rock', 'scissors', 'paper'];
    buttonsName.forEach(elements => {
        const buttonsGame = document.createElement('button');
        buttonsGame.textContent = elements;
        buttonsGame.classList.add('buttons', elements);
        buttonBox.appendChild(buttonsGame);      
    });
    buttonBox.addEventListener('click', function (event) {
        event.preventDefault();
        const target = event.target;
        const buttons = document.querySelectorAll('.buttons');           
        let handlers = target.textContent;
        request({
            url: `${backURL}/play`,
            params: {
                token: window.application.token,
                id: window.application.id,
                move: `${handlers}`
            },
            onSuccess: (data) => {
                console.log(data);
                if (data.message === 'no game id') {
                    window.application.renderScreen('screenLobby');
                } else if (data['game-status'].status === 'waiting-for-enemy-move') {     
                    window.application.renderScreen('waitingEnemyScreen');
                } else {                    
                    return;
                }
            }
        });
           
    });
}