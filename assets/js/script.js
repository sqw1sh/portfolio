const headAccordeon = document.querySelector('.head-accordeon');
const accordeon = document.querySelector('.accordeon');

headAccordeon.addEventListener('click', () => {
    accordeon.classList.toggle('active');
});
