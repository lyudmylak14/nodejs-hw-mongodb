import { ContactsCollection } from '../db/models/contacts.js';

export const getAllContacts = () => ContactsCollection.find();

export const getContactByID = (contactID) =>
  ContactsCollection.findById(contactID);

export const createContact = (contactData) =>
  ContactsCollection.create(contactData);

export const updateContact = (contactId, contactData) =>
  ContactsCollection.findByIdAndUpdate(contactId, contactData, {
    new: true,
  });

export const deleteContact = (contactId) =>
  ContactsCollection.findOneAndDelete({ _id: contactId });
