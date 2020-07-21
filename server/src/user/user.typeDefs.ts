import { gql } from 'apollo-server';

export const typeDefs = gql`
  # SCALAR
  scalar EmailAddress
  scalar Date
  # ENUMS
  enum HearFromSource {
    WEBSITE
    FRIENDS
    OTHER
  }

  # INPUT
  input CreateUserInput {
    firstName: String!
    lastName: String!
    email: EmailAddress!
    hearFromSource: HearFromSource
    password: String!
    isAgreeWithTerm: Boolean!
  }

  # TYPE
  type User {
    firstName: String!
    lastName: String!
    email: EmailAddress!
    hearFromSource: HearFromSource
    createdAt: Date!
  }
  
  # QUERY
  extend type Query {
    user(id:String!): User!
  }

  # MUTATION
  extend type Mutation {
    createUser(userInput:CreateUserInput!): User!
  }
`;

