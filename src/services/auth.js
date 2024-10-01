import bcrypt from 'bcrypt';
import { UsersCollection } from '../db/models/user.js';
import createHttpError from 'http-errors';

export const registerUser = async (userData) => {
  const user = await UsersCollection.findOne({ email: userData.email });
  if (user) throw createHttpError(409, 'Email in use');

  const encryptedPassword = await bcrypt.hash(userData.password, 10);

  return await UsersCollection.create({
    ...userData,
    password: encryptedPassword,
  });
};

export const loginUser = async (userData) => {
  const user = await UsersCollection.findOne({ email: userData.email });
  if (!user) {
    throw createHttpError(404, 'User not found');
  }

  const isEqual = await bcrypt.compare(userData.password, user.password);

  if (!isEqual) {
    throw createHttpError(401, 'Unauthorized');
  }
};
