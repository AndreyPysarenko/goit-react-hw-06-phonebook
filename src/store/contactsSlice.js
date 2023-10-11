import { createSlice, nanoid } from '@reduxjs/toolkit';
import { createNewContacts } from './helpers';

const defaultContacts = [
  { id: nanoid(), userName: 'Rosie Simpson', number: '459-12-56' },
  { id: nanoid(), userName: 'Hermione Kline', number: '443-89-12' },
  { id: nanoid(), userName: 'Eden Clements', number: '645-17-79' },
  { id: nanoid(), userName: 'Annie Copeland', number: '227-91-26' },
];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [...defaultContacts] },
  reducers: {
    createContactsAction: {
      reducer(state, { payload }) {
        state.contacts
          ? state.contacts.push(payload)
          : (state.contacts = [payload]);
      },
      prepare: createNewContacts,
    },
    deleteContacts: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { createContactsAction, deleteContacts } = contactsSlice.actions;
