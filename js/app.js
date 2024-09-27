document.addEventListener('DOMContentLoaded', function () {
  // Элементы модального окна
  const subscribeModal = document.getElementById('subscribeModal');
  const subscribeOptionsButton = document.getElementById('subscribeOptionsButton');
  const closeSubscribeModal = document.getElementById('closeSubscribeModal');
  const subscribeNewButton = document.getElementById('subscribeNewButton');
  const renewSubscriptionButton = document.getElementById('renewSubscriptionButton');

  const step1 = document.getElementById('step1');
  const step2Subscribe = document.getElementById('step2-subscribe');
  const step2Renew = document.getElementById('step2-renew');
  const step3Summary = document.getElementById('step3-summary');

  const nextToSummaryFromSubscribe = document.getElementById('nextToSummaryFromSubscribe');
  const nextToSummaryFromRenew = document.getElementById('nextToSummaryFromRenew');

  const monthDisplay = document.getElementById('monthDisplay');
  const subscriptionMonths = document.getElementById('subscriptionMonths');
  const modalResultMessage = document.getElementById('modalResultMessage');

  const summaryText = document.getElementById('summaryText');
  const confirmSubscription = document.getElementById('confirmSubscription');

  // Открытие модального окна подписки
  subscribeOptionsButton.onclick = function() {
    subscribeModal.style.display = "flex";
    step1.style.display = "block"; // Показать первый шаг
    step2Subscribe.style.display = "none";
    step2Renew.style.display = "none";
    step3Summary.style.display = "none";
    modalResultMessage.innerHTML = ''; // Очищаем сообщение
  };

  // Закрытие модального окна
  closeSubscribeModal.onclick = function() {
    subscribeModal.style.display = "none";
  };

  // Переход на форму оформления подписки
  subscribeNewButton.onclick = function() {
    step1.style.display = "none";
    step2Subscribe.style.display = "block";
  };

  // Переход на форму продления подписки
  renewSubscriptionButton.onclick = function() {
    step1.style.display = "none";
    step2Renew.style.display = "block";
  };

  // Обновление отображения выбранных месяцев
  subscriptionMonths.oninput = function() {
    monthDisplay.textContent = subscriptionMonths.value;
  };

  // Переход к подтверждению для оформления подписки
  nextToSummaryFromSubscribe.onclick = function() {
    const phoneInput = document.getElementById('phoneInput').value;
    const months = subscriptionMonths.value;

    if (phoneInput) {
      summaryText.innerHTML = `Оформление подписки на ${months} месяцев.<br> Телефон: ${phoneInput}`;
      step2Subscribe.style.display = "none";
      step3Summary.style.display = "block";
    } else {
      modalResultMessage.innerHTML = 'Пожалуйста, введите номер телефона.';
      modalResultMessage.style.color = 'red';
    }
  };

  // Переход к подтверждению для продления подписки
  nextToSummaryFromRenew.onclick = function() {
    const phoneRenewInput = document.getElementById('phoneRenewInput').value;

    if (phoneRenewInput) {
      summaryText.innerHTML = `Продление подписки.<br> Телефон: ${phoneRenewInput}`;
      step2Renew.style.display = "none";
      step3Summary.style.display = "block";
    } else {
      modalResultMessage.innerHTML = 'Пожалуйста, введите номер телефона.';
      modalResultMessage.style.color = 'red';
    }
  };

  // Показ уведомления после подтверждения подписки
  confirmSubscription.onclick = function() {
    modalResultMessage.innerHTML = `Подписка успешно оформлена!`;
    modalResultMessage.style.color = '#00b894';
    subscribeModal.style.display = "none"; // Закрытие модального окна

    // Показываем уведомление
    showNotification("SMS с данными придет на телефон. Спасибо!");
  };

  // Закрыть модальное окно при клике вне окна
  window.onclick = function(event) {
    if (event.target == subscribeModal) {
      subscribeModal.style.display = "none";
    }
  };

  // Функция для показа уведомления
  function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.innerHTML = message; // Устанавливаем текст уведомления
    notification.classList.add('show'); // Показываем уведомление

    // Скрываем уведомление через 3 секунды
    setTimeout(() => {
      notification.classList.remove('show');
    }, 3000);
  }
});
