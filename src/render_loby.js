function renderScreenLobby() {
    const app = document.querySelector('.app');
    app.textContent = '';
    const title = document.createElement('h1');
    title.classList.add('title')
    title.textContent = 'Лобби';
    const formContentLobby = document.createElement('div');
    formContentLobby.classList.add('form__content_lobby');   
    app.appendChild(title);
    app.appendChild(formContentLobby);
    window.application.renderBlock('userList', formContentLobby);

}
function renderBlockLobby(formContentLobby) {
    const timerInterval = setInterval(() => {
        request({
            url: `${backURL}/player-list`,
            params: {
                token: window.application.token,
            },
            onSuccess: (data) => {               
                formContentLobby.textContent = '';
                data.list.forEach(elements => {
                    const userLogin = document.createElement('div');
                    userLogin.textContent = elements.login;
                    userLogin.classList.add('user__login');
                    formContentLobby.appendChild(userLogin);
                });
            }
        });
    }, 1000);
    window.application.timers.push(timerInterval);
    window.application.renderScreen('buttonScreenStart');
}