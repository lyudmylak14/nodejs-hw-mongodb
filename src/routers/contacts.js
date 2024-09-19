import { Router } from 'express';
import {
  getContactsByIdController,
  getContactsController,
  createContactController,
  deleteContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const contactsRouter = Router();

contactsRouter.get('/contacts', ctrlWrapper(getContactsController));

contactsRouter.get(
  '/contacts/:contactId',
  ctrlWrapper(getContactsByIdController),
);

contactsRouter.post('/contacts', ctrlWrapper(createContactController));

contactsRouter.delete(
  '/contacts/:contactId',
  ctrlWrapper(deleteContactController),
);

export default contactsRouter;
