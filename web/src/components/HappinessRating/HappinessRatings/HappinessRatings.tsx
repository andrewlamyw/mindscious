import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { HappinessRating } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/HappinessRating/HappinessRatingsCell'
import MainDateTime from 'src/components/MainDateTime'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const DELETE_HAPPINESS_RATING_MUTATION = gql`
  mutation DeleteHappinessRatingMutation($id: Int!) {
    deleteHappinessRating(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const HappinessRatingsList = ({
  happinessRatings,
}: {
  happinessRatings: [HappinessRating]
}) => {
  const labels = happinessRatings.map(() => '')

  const lineChartData = {
    labels,
    datasets: [
      {
        data: happinessRatings.map((rating) => rating.rating),
        label: 'Happiness Ratings',
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }

  const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Summary',
      },
    },
  }

  const [deleteHappinessRating] = useMutation(
    DELETE_HAPPINESS_RATING_MUTATION,
    {
      onCompleted: () => {
        toast.success('Rating deleted')
      },
      onError: (error) => {
        toast.error(error.message)
      },
      // This refetches the query on the list page. Read more about other ways to
      // update the cache over here:
      // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
    }
  )

  const onDeleteClick = (id, happinessRating) => {
    if (
      confirm(
        `Are you sure you want to delete the rating ${happinessRating.rating}?`
      )
    ) {
      deleteHappinessRating({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <Line data={lineChartData} options={lineChartOptions} />

      <table className="rw-table">
        <thead>
          <tr>
            <th>Rating</th>
            <th>Created at</th>
            <th>Description</th>
            <th>&nbsp;</th>
          </tr>
        </thead>

        <tbody>
          {happinessRatings.map((happinessRating) => (
            <tr key={happinessRating.id}>
              <td>{happinessRating.rating}</td>
              <td>
                <MainDateTime datetime={happinessRating.createdAt} />
              </td>
              <td>{truncate(happinessRating.description)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.happinessRating({ id: happinessRating.id })}
                    title={'Show Rating #' + happinessRating.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>

                  <Link
                    to={routes.editHappinessRating({ id: happinessRating.id })}
                    title={'Edit Rating #' + happinessRating.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>

                  <button
                    type="button"
                    title={'Delete Rating # ' + happinessRating.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() =>
                      onDeleteClick(happinessRating.id, happinessRating)
                    }
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
