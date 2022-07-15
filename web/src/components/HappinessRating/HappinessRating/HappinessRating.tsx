import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_HAPPINESS_RATING_MUTATION = gql`
  mutation DeleteHappinessRatingMutation($id: Int!) {
    deleteHappinessRating(id: $id) {
      id
    }
  }
`

const formatEnum = (values: string | string[] | null | undefined) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values as string)
    }
  }
}

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const HappinessRating = ({ happinessRating }) => {
  const [deleteHappinessRating] = useMutation(DELETE_HAPPINESS_RATING_MUTATION, {
    onCompleted: () => {
      toast.success('HappinessRating deleted')
      navigate(routes.happinessRatings())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete happinessRating ' + id + '?')) {
      deleteHappinessRating({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">HappinessRating {happinessRating.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{happinessRating.id}</td>
            </tr><tr>
              <th>Rating</th>
              <td>{happinessRating.rating}</td>
            </tr><tr>
              <th>Description</th>
              <td>{happinessRating.description}</td>
            </tr><tr>
              <th>Created by</th>
              <td>{happinessRating.createdBy}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(happinessRating.createdAt)}</td>
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
