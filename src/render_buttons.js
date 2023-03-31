
function renderButtonScreen() {
    const app = document.querySelector('.app');
    const buttonStart = document.createElement('button');
    buttonStart.classList.add('form__button_lobby')
    buttonStart.textContent = 'Играть';
    app.appendChild(buttonStart);
    window.application.renderBlock('buttonStart', app);
}

function renderButtonStart() {
    const buttonStart = document.querySelector('.form__button_lobby')
    buttonStart.addEventListener('click', () => {
        window.application.timers.forEach(timerInterval => {
            clearInterval(timerInterval);
            window.application.timers = [];
        });
        request({
            url: `${backURL}/start`,
            params: {
                token: window.application.token,
            },
            onSuccess: (data) => {
                console.log(data);
                if(data.message === 'player is already in game') {
                    window.application.renderScreen('stepScreen');
                } else {
                window.application.id = data['player-status'].game.id;
                window.application.renderScreen('screenWait');
                }
            }
        });
    });
}


function renderButtonLobby() {
    const app = document.querySelector('.app');
    const buttonLobby = document.createElement('button');
    buttonLobby.classList.add('form__button_lobby')
    buttonLobby.textContent = 'В лобби';
    app.appendChild(buttonLobby);
    buttonLobby.addEventListener('click', () => {
        window.application.renderScreen('screenLobby');       
        
    });
}

