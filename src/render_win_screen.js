function renderWinScreen() {
    const app = document.querySelector('.app');
    app.textContent = '';
    const title = document.createElement('h1');
    title.classList.add('title')
    title.textContent = 'Ты выиграл';
    const winContent = document.createElement('div');
    winContent.classList.add('winContent');
    app.appendChild(title);
    app.appendChild(winContent);

    window.application.renderBlock('winBlock', winContent);
}
function renderWinBlock() {
    const app = document.querySelector('.app');    
    window.application.renderScreen('buttonScreenStart');
    window.application.renderBlock('buttonLobby', app);  

}