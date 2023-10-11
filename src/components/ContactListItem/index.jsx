import { Button } from 'components/App.styled';
import { ListItemStyled, ListItemTextStyled } from './contactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'store/contactsSlice';

const ContactListItem = ({ contact }) => {
  const { id, userName, number } = contact;
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContacts(id));
  };

  return (
    <>
      <ListItemStyled>
        <ListItemTextStyled>
          {userName}: {number}
        </ListItemTextStyled>

        <Button type="button" onClick={() => handleDelete(id)}>
          Delete
        </Button>
      </ListItemStyled>
    </>
  );
};

export default ContactListItem;
