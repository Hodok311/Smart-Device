(() => {
  const showMoreBlocks = document.querySelectorAll('.about__show-more');

  if (!showMoreBlocks.length) {
    return;
  }

  const toggleText = (button, textBlock, initialHeight, maxHeight) => {
    const isOpened = textBlock.classList.contains('active');

    if (isOpened) {
      textBlock.classList.remove('active');
      textBlock.style.maxHeight = `${initialHeight}px`;
      button.textContent = 'Подробнее';
    } else {
      textBlock.classList.add('active');
      textBlock.style.maxHeight = `${maxHeight}px`;
      button.textContent = 'Свернуть';
    }
  };

  const initShowMore = (parent) => {
    const button = parent.querySelector('.about__button');
    const textBlock = parent.querySelector('.about__textblock');

    let initialHeight = textBlock.getBoundingClientRect().height;
    let maxHeight = textBlock.scrollHeight;
    // let isOpened = textBlock.classList.contains('active');

    button.addEventListener('click', () => {
      toggleText(button, textBlock, initialHeight, maxHeight);
    });
  };

  showMoreBlocks.forEach((block) => initShowMore(block));
})();
