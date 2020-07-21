import { IUser } from './user.type';
import userRepository from './user.repository';
import { AppError } from '../common/appError';
import { ERROR_CODE } from '../common/errors';
import passwordUtil from '../common/passwordUtil'
const doesEmailExisted = async (email: string):
  Promise<boolean> => {
  const user = await userRepository.getByEmail(email);
  return user ? true : false;
}

const createUser = async (user: IUser): Promise<IUser> => {
  const { email, password } = user;
  if (await doesEmailExisted(email)) {
    throw new AppError(ERROR_CODE.EMAIL_ALREADY_EXISTED);
  }
  user.password = passwordUtil.encrypt(password);
  return await userRepository.createUser(user);;
}

const getById = async (id: string): Promise<IUser> => {
  const user = await userRepository.getById(id);
  if (!user) {
    throw new AppError(ERROR_CODE.RESOURCE_NOT_FOUND);
  }
  return user;
}

const userService = {
  createUser,
  getById
};

export default userService;