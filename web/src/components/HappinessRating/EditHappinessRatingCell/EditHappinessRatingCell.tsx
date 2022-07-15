import type { EditHappinessRatingById } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import HappinessRatingForm from 'src/components/HappinessRating/HappinessRatingForm'

export const QUERY = gql`
  query EditHappinessRatingById($id: Int!) {
    happinessRating: happinessRating(id: $id) {
      id
      rating
      description
      createdBy
      createdAt
    }
  }
`
const UPDATE_HAPPINESS_RATING_MUTATION = gql`
  mutation UpdateHappinessRatingMutation($id: Int!, $input: UpdateHappinessRatingInput!) {
    updateHappinessRating(id: $id, input: $input) {
      id
      rating
      description
      createdBy
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ happinessRating }: CellSuccessProps<EditHappinessRatingById>) => {
  const [updateHappinessRating, { loading, error }] = useMutation(UPDATE_HAPPINESS_RATING_MUTATION, {
    onCompleted: () => {
      toast.success('HappinessRating updated')
      navigate(routes.happinessRatings())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateHappinessRating({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit HappinessRating {happinessRating.id}</h2>
      </header>
      <div className="rw-segment-main">
        <HappinessRatingForm happinessRating={happinessRating} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
