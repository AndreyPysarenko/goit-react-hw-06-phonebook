const { nanoid } = require('@reduxjs/toolkit');

export const createNewContacts = (contactName, contactNumber) => {
  return {
    payload: {
      userName: contactName,
      number: contactNumber,
      id: nanoid(),
    },
  };
};
