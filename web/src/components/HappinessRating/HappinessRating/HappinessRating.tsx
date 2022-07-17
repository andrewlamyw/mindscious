import { Link, navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import MainDateTime from 'src/components/MainDateTime'

const DELETE_HAPPINESS_RATING_MUTATION = gql`
  mutation DeleteHappinessRatingMutation($id: Int!) {
    deleteHappinessRating(id: $id) {
      id
    }
  }
`

const HappinessRating = ({ happinessRating }) => {
  const [deleteHappinessRating] = useMutation(
    DELETE_HAPPINESS_RATING_MUTATION,
    {
      onCompleted: () => {
        toast.success('Rating deleted')
        navigate(routes.happinessRatings())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete?')) {
      deleteHappinessRating({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Rating</th>
              <td>{happinessRating.rating}</td>
            </tr>

            <tr>
              <th>Description</th>
              <td>{happinessRating.description}</td>
            </tr>

            <tr>
              <th>Created at</th>
              <td>
                <MainDateTime datetime={happinessRating.createdAt} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <nav className="rw-button-group">
        <Link
          to={routes.editHappinessRating({ id: happinessRating.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>

        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(happinessRating.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default HappinessRating
