document.querySelectorAll('.accordion-item-trigger').forEach((item) =>
  item.addEventListener('click', () => {
    const parent = item.parentNode;

    if(parent.classList.contains('accordion-item-active')) {
      parent.classList.remove('accordion-item-active');
    } else {
      document.querySelectorAll('.accordion-item').forEach((child) =>
        child.classList.remove('accordion-item-active'));

      parent.classList.add('accordion-item-active');
    }
  })
 )
