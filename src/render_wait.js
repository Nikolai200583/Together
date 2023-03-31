function renderScreenWait() {
    const app = document.querySelector('.app');
    app.textContent = '';
    const title = document.createElement('h1');
    title.classList.add('title')
    title.textContent = 'Ждем подключения соперника';       
    const waitLoader = document.createElement('div');
    waitLoader.classList.add('loader');    
    app.appendChild(title);    
    app.appendChild(waitLoader);

    for (let i = 0; i < 3; i++) {       
        const loaderItem = document.createElement('div');
        loaderItem.classList.add('loader-item'); 
        waitLoader.appendChild(loaderItem);       
    }  

    window.application.renderBlock('blockWait', waitLoader);

}

function renderBlockWait() {
    const timerInterval = setInterval(() => {
        request({
            url: `${backURL}/game-status`,
            params: {
                token: window.application.token,
                id: window.application.id
            },
            onSuccess: (data) => {
               console.log(data)
                if (data['game-status'].status !== 'waiting-for-start') {
                    window.application.enemy[0] = data['game-status'].enemy.login;
                    window.application.timers.forEach(timerInterval => {
                        clearInterval(timerInterval);
                        window.application.timers = [];
                    });
                    window.application.renderScreen('stepScreen');
                }
            }
        });
    }, 500);
    window.application.timers.push(timerInterval);
}
