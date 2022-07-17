import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import HappinessRatingForm from 'src/components/HappinessRating/HappinessRatingForm'

const CREATE_HAPPINESS_RATING_MUTATION = gql`
  mutation CreateHappinessRatingMutation($input: CreateHappinessRatingInput!) {
    createHappinessRating(input: $input) {
      id
    }
  }
`

const NewHappinessRating = () => {
  const [createHappinessRating, { loading, error }] = useMutation(
    CREATE_HAPPINESS_RATING_MUTATION,
    {
      onCompleted: () => {
        toast.success('HappinessRating created')
        navigate(routes.happinessRatings())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createHappinessRating({
      variables: { input: { rating: parseInt(input.rating) } },
    })
  }

  return <HappinessRatingForm onSave={onSave} loading={loading} error={error} />
}

export default NewHappinessRating
