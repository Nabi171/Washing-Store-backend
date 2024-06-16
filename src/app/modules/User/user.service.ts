import { IUser } from "./user.interface";
import { User } from "./user.model";

const createUser = async (payload: IUser): Promise<IUser> => {
  try {
    const result = await User.create(payload);
    return result;
  } catch (error:any) {
    throw new Error(`Error creating user: ${error.message}`);
  }
};



export const UserService = {
  createUser,

};
