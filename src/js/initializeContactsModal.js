import openModal from '@/defaultModal/defaultModal'

function initializeContactsModal() {
  const btnContacts = document.querySelector('.footer__contacts-btn')
  
  const contactsModal = document.querySelector('.contacts-modal')
  btnContacts.addEventListener('click', () => {
    openModal(contactsModal)
  })

}

export {initializeContactsModal}


