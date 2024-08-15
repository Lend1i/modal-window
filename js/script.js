import modal from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 500000);
          
    
    modal('[data-modal]', '.modal', modalTimerId);
});   

