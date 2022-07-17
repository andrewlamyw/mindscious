import { useAuth } from '@redwoodjs/auth'
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
  const { currentUser, isAuthenticated, loading: authLoading } = useAuth()

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

  const onSave = (input: { rating: string; description?: string }) => {
    createHappinessRating({
      variables: {
        input: {
          rating: parseInt(input.rating),
          description: input.description?.trim(),
        },
      },
    })
  }

  const title = `🙏 Hi ${
    isAuthenticated ? currentUser?.firstName : 'there'
  }, how are
  you?`

  return (
    <HappinessRatingForm
      onSave={onSave}
      loading={loading || authLoading}
      error={error}
      title={title}
    />
  )
}

export default NewHappinessRating
