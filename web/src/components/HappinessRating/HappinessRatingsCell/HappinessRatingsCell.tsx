import type { FindHappinessRatings } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import HappinessRatings from 'src/components/HappinessRating/HappinessRatings'

export const QUERY = gql`
  query FindHappinessRatings {
    happinessRatings {
      id
      rating
      description
      createdBy
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No happinessRatings yet. '}
      <Link to={routes.newHappinessRating()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({
  happinessRatings,
}: CellSuccessProps<FindHappinessRatings>) => {
  return <HappinessRatings happinessRatings={happinessRatings} />
}
