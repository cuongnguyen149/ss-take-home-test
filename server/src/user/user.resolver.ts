import userService from './user.service'
import { EmailAddressResolver, DateResolver } from 'graphql-scalars'

export const resolvers = {
  EmailAddress: EmailAddressResolver,
  Date: DateResolver,
  Query: {
    async user(_parent: any, { id }: any) {
      return await userService.getById(id);
    }
  },
  Mutation: {
    async createUser(_parent: any, { userInput }: any) {
      return await userService.createUser(userInput);
    }
  }
}