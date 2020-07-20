import { IUser } from './user.type';
import { UserModel } from './user.model';

const createUser = async (user: IUser): Promise<any> => {
  return UserModel.create(user);
}

const getById = async (id: string): Promise<IUser | null> => {
  return UserModel.findById(id);
}

const getByEmail = async (email: string): Promise<IUser | null> => {
  return UserModel.findOne({ email });
}

const userRepository = {
  createUser,
  getById,
  getByEmail
};

export default userRepository;