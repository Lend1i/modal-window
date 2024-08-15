import modal from './modules/modal.js';
import {openModal} from './modules/modal.js';

window.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 500000);
          

    modal('[data-modal]', '.modal', modalTimerId);
});   

