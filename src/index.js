const backURL = "https://skypro-rock-scissors-paper.herokuapp.com";

window.application = {
  blocks: {},
  screens: {},
  renderScreen: function (screenName) {
    this.screens[screenName]();
  },
  renderBlock: function (blockName, container) {
    this.blocks[blockName](container);
  },
  token: [],
  timers: [],
  id: [],
  enemy: [],
};

window.application.blocks["formRegistration"] = renderFormRegistration;
window.application.screens["screenRegistration"] = renderScreenRegistration;
window.application.screens["screenLobby"] = renderScreenLobby;
window.application.blocks["userList"] = renderBlockLobby;
window.application.screens["buttonScreenStart"] = renderButtonScreen;
window.application.blocks["buttonStart"] = renderButtonStart;
window.application.screens["screenWait"] = renderScreenWait;
window.application.blocks["blockWait"] = renderBlockWait;
window.application.screens["stepScreen"] = renderScreenStepUser;
window.application.blocks["buttonBox"] = renderBlockStepUser;
window.application.screens["waitingEnemyScreen"] = renderWaitingEnemyScreen;
window.application.blocks["waitingEnemyBlock"] = renderWaitingEnemyBlock;
window.application.screens["winScreen"] = renderWinScreen;
window.application.blocks["winBlock"] = renderWinBlock;
window.application.screens["loseScreen"] = renderLoseScreen;
window.application.blocks["loseBlock"] = renderLoseBlock;
window.application.blocks["buttonLobby"] = renderButtonLobby;

window.application.renderScreen("screenRegistration");
