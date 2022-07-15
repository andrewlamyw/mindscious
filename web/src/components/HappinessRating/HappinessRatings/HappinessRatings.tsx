import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/HappinessRating/HappinessRatingsCell'

const DELETE_HAPPINESS_RATING_MUTATION = gql`
  mutation DeleteHappinessRatingMutation($id: Int!) {
    deleteHappinessRating(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

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

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const HappinessRatingsList = ({ happinessRatings }) => {
  const [deleteHappinessRating] = useMutation(DELETE_HAPPINESS_RATING_MUTATION, {
    onCompleted: () => {
      toast.success('HappinessRating deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete happinessRating ' + id + '?')) {
      deleteHappinessRating({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Rating</th>
            <th>Description</th>
            <th>Created by</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {happinessRatings.map((happinessRating) => (
            <tr key={happinessRating.id}>
              <td>{truncate(happinessRating.id)}</td>
              <td>{truncate(happinessRating.rating)}</td>
              <td>{truncate(happinessRating.description)}</td>
              <td>{truncate(happinessRating.createdBy)}</td>
              <td>{timeTag(happinessRating.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.happinessRating({ id: happinessRating.id })}
                    title={'Show happinessRating ' + happinessRating.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editHappinessRating({ id: happinessRating.id })}
                    title={'Edit happinessRating ' + happinessRating.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete happinessRating ' + happinessRating.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(happinessRating.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default HappinessRatingsList
