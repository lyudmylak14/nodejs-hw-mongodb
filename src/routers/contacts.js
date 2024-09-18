import { Router } from 'express';
import {
  getContactsByIdController,
  getContactsController,
  createContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const contactsRouter = Router();

contactsRouter.get('/contacts', ctrlWrapper(getContactsController));
contactsRouter.get(
  '/contacts/:contactsId',
  ctrlWrapper(getContactsByIdController),
);
contactsRouter.post('/contacts', ctrlWrapper(createContactController));

export default contactsRouter;
