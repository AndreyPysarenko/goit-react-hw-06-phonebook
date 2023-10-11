import { Button } from 'components/App.styled';
import {
  ContactFromStyled,
  InputContactFromStyled,
} from './contactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'store/selector';
import { createContactsAction } from 'store/contactsSlice';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const addContact = userName => {
    const normalizedNewContactName = userName.toLowerCase();
    return contacts.some(
      contact => contact.userName.toLowerCase() === normalizedNewContactName
    );
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const newUserName = form.elements.userName.value;
    const newUserNumber = form.elements.number.value;
    addContact(newUserName)
      ? alert('This contact is already in contacts')
      : dispatch(createContactsAction(newUserName, newUserNumber));
    form.reset();
  };

  return (
    <ContactFromStyled onSubmit={handleFormSubmit}>
      <label>Name</label>
      <InputContactFromStyled
        type="text"
        name="userName"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <label>Number</label>
      <InputContactFromStyled
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button type="submit">Add contact</Button>
    </ContactFromStyled>
  );
};

export default ContactForm;
