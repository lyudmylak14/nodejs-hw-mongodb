import { Router } from 'express';
import {
  getContactsByIdController,
  getContactsController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const contactsRouter = Router();

contactsRouter.get('/contacts', ctrlWrapper(getContactsController));
contactsRouter.get(
  '/contacts/:contactsId',
  ctrlWrapper(getContactsByIdController),
);

export default contactsRouter;
