import { ContactsCollection } from '../db/models/Contact.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';
import { SORT_ORDER } from '../constants/index.js';

export const getAllContacts = async ({
  page = 1,
  perPage = 10,
  sortOrder = SORT_ORDER.ASC,
  sortBy = '_id',
  filter = {},
  userId,
}) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const contactsQuery = ContactsCollection.find({ userId });

  if (filter.contactType) {
    contactsQuery.where('contactType').equals(filter.contactType);
  }
  if (typeof filter.isFavorite !== 'undefined') {
    contactsQuery.where('isFavorite').equals(filter.isFavorite);
  }

  const [contactsCount, contacts] = await Promise.all([
    ContactsCollection.find().merge(contactsQuery).countDocuments(),
    contactsQuery
      .skip(skip)
      .limit(limit)
      .sort({ [sortBy]: sortOrder })
      .exec(),
  ]);

  const paginationData = calculatePaginationData(contactsCount, perPage, page);

  return {
    data: contacts,
    ...paginationData,
  };
};

export const getContactByID = (contactId, userId) =>
  ContactsCollection.findOne({ _id: contactId, userId });

export const createContact = (contactData) =>
  ContactsCollection.create(contactData);

export const updateContact = (contactId, contactData, userId) =>
  ContactsCollection.findOneAndUpdate({ _id: contactId, userId }, contactData, {
    new: true,
  });

export const deleteContact = (contactId, userId) =>
  ContactsCollection.findOneAndDelete({ _id: contactId, userId });
