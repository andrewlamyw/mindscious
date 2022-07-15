import type { FindHappinessRatingById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import HappinessRating from 'src/components/HappinessRating/HappinessRating'

export const QUERY = gql`
  query FindHappinessRatingById($id: Int!) {
    happinessRating: happinessRating(id: $id) {
      id
      rating
      description
      createdBy
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>HappinessRating not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ happinessRating }: CellSuccessProps<FindHappinessRatingById>) => {
  return <HappinessRating happinessRating={happinessRating} />
}
