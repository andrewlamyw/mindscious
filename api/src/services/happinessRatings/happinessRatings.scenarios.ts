import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.HappinessRatingCreateArgs>({
  happinessRating: {
    one: { data: { rating: 3465155, createdBy: 'String' } },
    two: { data: { rating: 9000504, createdBy: 'String' } },
  },
})

export type StandardScenario = typeof standard
