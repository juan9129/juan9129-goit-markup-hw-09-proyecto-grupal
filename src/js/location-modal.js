(() => {
    const refs = {
      openModal: document.querySelector('[data-modal-location-open]'),
      closeModal: document.querySelector('[data-modal-location-close]'),
      modallocation: document.querySelector('[data-modal-location]'),
    };
  
    refs.openModal.addEventListener('click', toggleModal);
    refs.closeModal.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modallocation.classList.toggle('is-hidden');
    }
  })();