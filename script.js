document.querySelectorAll('.lang-button').forEach((button) => {
  button.addEventListener('click', () => {
    if (button.classList.contains('is-active')) return;
    window.alert('English pages are planned next. The current website is being rewritten in Chinese first.');
  });
});

document.querySelectorAll('.faq-item').forEach((item) => {
  const trigger = item.querySelector('.faq-question');
  if (!trigger) return;
  trigger.addEventListener('click', () => {
    item.classList.toggle('is-open');
  });
});
