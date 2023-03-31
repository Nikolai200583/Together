function renderWaitingEnemyScreen() {
    const app = document.querySelector('.app');
    app.textContent = '';
    const title = document.createElement('h1');
    title.classList.add('title')
    title.textContent = 'Ждем ход соперника';
    const waitLoader = document.createElement('div');
    waitLoader.classList.add('loader');
    app.appendChild(title);
    app.appendChild(waitLoader);
    for (let i = 0; i < 3; i++) {       
        const loaderItem = document.createElement('div');
        loaderItem.classList.add('loader-item'); 
        waitLoader.appendChild(loaderItem);       
    }

    window.application.renderBlock('waitingEnemyBlock', waitLoader);
}

function renderWaitingEnemyBlock() {
    const timerInterval = setInterval(() => {
        request({
            url: `${backURL}/game-status`,
            params: {
                token: window.application.token,
                id: window.application.id
            },
            onSuccess: (data) => {
                
                let gameStatus = data['game-status'].status;
                if (gameStatus !== 'waiting-for-enemy-move') {
                    window.application.timers.forEach(timerInterval => {
                        clearInterval(timerInterval);
                        window.application.timers = [];
                    });
                }

                switch (gameStatus) {                                   
                        case 'waiting-for-your-move': window.application.renderScreen('stepScreen');
                        break;        
                        case 'win': window.application.renderScreen('winScreen');
                        break; 
                        case 'lose': window.application.renderScreen('loseScreen');
                        break;           
                        case 'error': {alert('Ошибка'), window.application.renderScreen('screenLobby')};
                        break;     
                        default: return ;
                    }                
            }
        });
    }, 500);
    window.application.timers.push(timerInterval);
}
