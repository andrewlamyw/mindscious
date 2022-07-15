export const schema = gql`
  type HappinessRating {
    id: Int!
    rating: Int!
    description: String
    createdBy: String!
    createdAt: DateTime!
  }

  type Query {
    happinessRatings: [HappinessRating!]! @requireAuth
    happinessRating(id: Int!): HappinessRating @requireAuth
  }

  input CreateHappinessRatingInput {
    rating: Int!
    description: String
    createdBy: String!
  }

  input UpdateHappinessRatingInput {
    rating: Int
    description: String
    createdBy: String
  }

  type Mutation {
    createHappinessRating(input: CreateHappinessRatingInput!): HappinessRating!
      @requireAuth
    updateHappinessRating(
      id: Int!
      input: UpdateHappinessRatingInput!
    ): HappinessRating! @requireAuth
    deleteHappinessRating(id: Int!): HappinessRating! @requireAuth
  }
`
