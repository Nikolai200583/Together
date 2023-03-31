function renderLoseScreen() {
    const app = document.querySelector('.app');
    app.textContent = '';
    const title = document.createElement('h1');
    title.classList.add('title')
    title.textContent = 'Ты проиграл';
    const loseContent = document.createElement('div');
    loseContent.classList.add('loseContent');
    app.appendChild(title);
    app.appendChild(loseContent);

    window.application.renderBlock('loseBlock', loseContent);
}
function renderLoseBlock() {
    const app = document.querySelector('.app');    
    window.application.renderScreen('buttonScreenStart');
    window.application.renderBlock('buttonLobby', app);
   
}