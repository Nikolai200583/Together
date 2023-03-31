function renderFormRegistration(formContent) {
    const formButton = document.createElement('button');
    formButton.classList.add('formButton');
    formButton.textContent = 'Вход';
    const formInput = document.createElement('input');
    formInput.classList.add('formInput');
    formInput.setAttribute('placeholder', "пожалуйста введите свой Nikname");
    

    formButton.addEventListener('click', () => {
        request({
            url: `${backURL}/login`,
            params: {
                login: formInput.value
            },
            onSuccess: (data) => {
                
                window.application.token = data.token;               
                window.application.renderScreen('screenLobby');
                
            }
        });
    });
    formContent.appendChild(formInput);
    formContent.appendChild(formButton);
}

function renderScreenRegistration() {
    const app = document.querySelector('.app');
    app.textContent = '';
    const title = document.createElement('h1');
    title.classList.add('title')
    title.textContent = 'Камень, ножницы, бумага';
    const formContent = document.createElement('div');
    formContent.classList.add('form__content')
    window.application.renderBlock('formRegistration', formContent);
    app.appendChild(title);
    app.appendChild(formContent);
}