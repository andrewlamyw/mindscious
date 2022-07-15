import {
  happinessRatings,
  happinessRating,
  createHappinessRating,
  updateHappinessRating,
  deleteHappinessRating,
} from './happinessRatings'
import type { StandardScenario } from './happinessRatings.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('happinessRatings', () => {
  scenario(
    'returns all happinessRatings',
    async (scenario: StandardScenario) => {
      const result = await happinessRatings()

      expect(result.length).toEqual(
        Object.keys(scenario.happinessRating).length
      )
    }
  )

  scenario(
    'returns a single happinessRating',
    async (scenario: StandardScenario) => {
      const result = await happinessRating({
        id: scenario.happinessRating.one.id,
      })

      expect(result).toEqual(scenario.happinessRating.one)
    }
  )

  scenario('creates a happinessRating', async () => {
    const result = await createHappinessRating({
      input: { rating: 7009347, createdBy: 'String' },
    })

    expect(result.rating).toEqual(7009347)
    expect(result.createdBy).toEqual('String')
  })

  scenario('updates a happinessRating', async (scenario: StandardScenario) => {
    const original = await happinessRating({
      id: scenario.happinessRating.one.id,
    })
    const result = await updateHappinessRating({
      id: original.id,
      input: { rating: 7037316 },
    })

    expect(result.rating).toEqual(7037316)
  })

  scenario('deletes a happinessRating', async (scenario: StandardScenario) => {
    const original = await deleteHappinessRating({
      id: scenario.happinessRating.one.id,
    })
    const result = await happinessRating({ id: original.id })

    expect(result).toEqual(null)
  })
})
