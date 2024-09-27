document.addEventListener('DOMContentLoaded', function () {
  // Подписка на рассылку
  document.getElementById('subscribeButton').addEventListener('click', function() {
    const emailInput = document.getElementById('emailInput').value;
    const subscriptionMessage = document.getElementById('subscriptionMessage');

    if (emailInput) {
      subscriptionMessage.innerHTML = 'Вы подписались на рассылку, будете узнавать новости первым!';
      subscriptionMessage.style.color = '#00b894';
      subscriptionMessage.style.fontSize = '18px';
      subscriptionMessage.style.marginTop = '10px';
    } else {
      subscriptionMessage.innerHTML = 'Пожалуйста, введите корректный email.';
      subscriptionMessage.style.color = 'red';
      subscriptionMessage.style.fontSize = '18px';
      subscriptionMessage.style.marginTop = '10px';
    }
  });

  // Открытие модального окна при нажатии на "Попробовать бесплатно"
  const modal = document.getElementById('modal');
  const tryFreeButton = document.getElementById('tryFreeButton');
  const closeModal = document.getElementById('closeModal');
  const submitModal = document.getElementById('submitModal');
  const modalMessage = document.getElementById('modalMessage');

  tryFreeButton.onclick = function() {
    modal.style.display = "flex";
  };

  closeModal.onclick = function() {
    modal.style.display = "none";
  };

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  // Обработка отправки данных в модальном окне
  submitModal.addEventListener('click', function() {
    const modalEmailInput = document.getElementById('modalEmailInput').value;
    const osSelect = document.getElementById('osSelect').value;

    if (modalEmailInput) {
      modalMessage.innerHTML = `Спасибо, что выбираете нас! Вам выслана пробная версия программы сроком на 30 дней! Ваша ОС: ${osSelect}`;
      modalMessage.style.color = '#00b894';
    } else {
      modalMessage.innerHTML = 'Пожалуйста, введите email.';
      modalMessage.style.color = 'red';
    }
  });
});
