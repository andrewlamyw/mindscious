import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const happinessRatings: QueryResolvers['happinessRatings'] = () => {
  return db.happinessRating.findMany()
}

export const happinessRating: QueryResolvers['happinessRating'] = ({ id }) => {
  return db.happinessRating.findUnique({
    where: { id },
  })
}

export const createHappinessRating: MutationResolvers['createHappinessRating'] =
  ({ input }) => {
    return db.happinessRating.create({
      data: input,
    })
  }

export const updateHappinessRating: MutationResolvers['updateHappinessRating'] =
  ({ id, input }) => {
    return db.happinessRating.update({
      data: input,
      where: { id },
    })
  }

export const deleteHappinessRating: MutationResolvers['deleteHappinessRating'] =
  ({ id }) => {
    return db.happinessRating.delete({
      where: { id },
    })
  }
