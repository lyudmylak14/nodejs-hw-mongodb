import { contactsCollection } from '../db/models/contacts.js';

export const getAllContacts = async () => {
  const contacts = await contactsCollection.find();
  return contacts;
};

export const getContactByID = async (contactID) => {
  const contact = await contactsCollection.findById(contactID);
  return contact;
};

export const createContact = async (payload) => {
  const contact = await contactsCollection.create(payload);
  return contact;
};

export const deleteContact= async(contactId) => {
  const contact = await contactsCollection.findOneAndDelete({_id: contactId,});
  return contact;
};
