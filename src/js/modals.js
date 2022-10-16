const asideMenuButtonOpen = document.querySelector('.burger-menu-open');
const asideMenu = document.querySelector('.aside__container--menu');

asideMenuButtonOpen.addEventListener('click', () => {
    openModal(asideMenu);
    blurBlock.addEventListener('click', () => closeModal(asideMenu));
});

asideMenu.addEventListener('click', event => {
    if (event.target.classList.contains('burger-menu-close'&&'menu-close')) {
        closeModal(asideMenu);
    };

    if (event.target.classList.contains('aside__link')) {
        closeModal(asideMenu);
    };

    if ((event.target.classList.contains('call-button')) || 
         event.target.classList.contains('chat-button')) {
            closeModal(asideMenu, 'false');
    };
});

function closeModal (block, hideBlur = 'true') {
    block.classList.remove('show');
    if (hideBlur === 'true') {
        blurBlock.classList.remove('show');
        document.body.classList.remove('no-scroll');
    }
}

function openModal (block) {
    block.classList.add('show');
    blurBlock.classList.add('show');
    document.body.classList.add('no-scroll');
    console.log(document.body.classList);
}


const buttonFeedbackOpen = document.querySelectorAll('.chat-button');
const asideFeedback = document.querySelector('.aside__container--modal.feedback');
const buttonFeedbackClose = document.querySelector('.feedback-close');
const buttonCallbackOpen = document.querySelectorAll('.call-button');
const asideCallback = document.querySelector('.aside__container--modal.callback');
const buttonCallbackClose = document.querySelector('.callback-close');
const blurBlock = document.querySelector('.blur-wrapper');

buttonCallbackOpen.forEach(function(button) {
    button.addEventListener('click', function() {
        openModal(asideCallback);
        blurBlock.addEventListener('click', () => closeModal(asideCallback));
        buttonCallbackClose.addEventListener('click', () => closeModal(asideCallback));
    })
});

buttonFeedbackOpen.forEach(function(button) {
    button.addEventListener('click', function() {
        openModal(asideFeedback);
        blurBlock.addEventListener('click', () => closeModal(asideFeedback));
        buttonFeedbackClose.addEventListener('click', () => closeModal(asideFeedback));
    })
});