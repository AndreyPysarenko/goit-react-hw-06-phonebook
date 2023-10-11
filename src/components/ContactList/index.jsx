import ContactListItem from 'components/ContactListItem';
import { ListStyled } from './contactList.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'store/selector';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ userName }) =>
      userName.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <>
      <ListStyled>
        {visibleContacts.map(contact => {
          return <ContactListItem key={contact.id} contact={contact} />;
        })}
      </ListStyled>
    </>
  );
};

export default ContactList;
