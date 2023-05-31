let showMoreButton = document.querySelector('.button__show-more');
let showMoreCards = document.querySelector('.cards');
let announcementsTitle = document.querySelector('.popup');
let popup = document.querySelector('.popup__wrapper');
let body = document.querySelector('.body');
let popupCopy = document.querySelector('.popup__copy');

showMoreButton.addEventListener('click', (e) => {
  if (e.target.matches('.button__show-more')) {
    showMoreButton.classList.add('hide');
    showMoreCards.classList.toggle('hide');
  }
});

const timeOutAlertHide = () => {
  setTimeout(() => {
    document.querySelector('.popup__copy').classList.toggle('hide');
  }, 3000);
};

const copyText = () => {
  const text = document.querySelector('.popup__body-head');

  navigator.clipboard
    .writeText(text.innerText)
    .then(() => {
      popupCopy.classList.toggle('hide');

      timeOutAlertHide();
    })
    .catch((error) => {
      popupCopy.classList.toggle('hide');
      popupCopy.innerText =
        'Code is not copied to clipboard, please try again.';

      timeOutAlertHide();

      console.error('Error copying text to clipboard:', error);
    });
};

body.addEventListener('click', (e) => {
  if (
    e.target.matches('.popup-title') ||
    e.target.matches('.popup__header-close') ||
    e.target.matches('.active-modal')
  ) {
    popup.classList.toggle('hide');
    body.classList.toggle('active-modal');
  }

  if (e.target.matches('.popup__body-head')) {
    copyText();
  }
});
