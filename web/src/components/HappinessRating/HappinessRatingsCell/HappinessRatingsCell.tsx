import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
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

export const Loading = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      height: 'calc(100vh - 64px)',
      alignItems: 'center',
      flexDirection: 'column',
    }}
  >
    <CircularProgress />
    <Box sx={{ mt: 4 }}>Row, row, row your boat...</Box>
  </Box>
)

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No ratings yet. '}
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
