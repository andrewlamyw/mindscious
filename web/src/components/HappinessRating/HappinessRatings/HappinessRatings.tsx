import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { HappinessRating } from 'types/graphql'

import { Link, navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/HappinessRating/HappinessRatingsCell'
import KeyTrends from 'src/components/KeyTrends'
import MainDateTime from 'src/components/MainDateTime'
import { formatDate, getRatingEmoji } from 'src/utils'

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

const truncate = (text: string | null | undefined) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output?.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const HappinessRatingsList = ({
  happinessRatings,
}: {
  happinessRatings: [HappinessRating]
}) => {
  const theme = useTheme()
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'))

  const labels = happinessRatings.map(() => '')

  const lineChartData = {
    labels,
    datasets: [
      {
        data: happinessRatings.map((rating) => rating.rating),
        label: 'Ratings',
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

  const onDeleteClick = (id: number, happinessRating: HappinessRating) => {
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

      <KeyTrends data={happinessRatings} />

      {isLargeScreen ? (
        <Box sx={{ mb: 6 }}>
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
                  <td>
                    <Box
                      sx={{ display: 'flex', justifyContent: 'space-around' }}
                    >
                      <Box sx={{ minWidth: '20px', display: 'inline-block' }}>
                        {getRatingEmoji(happinessRating.rating)}
                      </Box>

                      <Box>{happinessRating.rating}</Box>
                    </Box>
                  </td>
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
                        to={routes.editHappinessRating({
                          id: happinessRating.id,
                        })}
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
        </Box>
      ) : (
        <Box>
          <Typography variant="h6" gutterBottom component="div">
            Past Ratings
          </Typography>

          <Typography variant="subtitle1" gutterBottom component="div">
            Select to edit or delete a rating 👇
          </Typography>

          <List>
            {happinessRatings?.map((rating) => (
              <>
                <ListItem
                  key={rating.id}
                  disableGutters
                  onClick={() =>
                    navigate(routes.happinessRating({ id: rating.id }))
                  }
                >
                  <ListItemAvatar>
                    <Avatar sx={{ backgroundColor: 'rgb(0,0,0,.1)' }}>
                      {getRatingEmoji(rating.rating)}
                    </Avatar>
                  </ListItemAvatar>

                  <ListItemText
                    primary={formatDate(rating.createdAt)}
                    secondary={
                      rating.rating +
                      (rating.description ? ` - ${rating.description}` : '')
                    }
                  />
                </ListItem>

                <Divider variant="inset" component="li" />
              </>
            ))}
          </List>
        </Box>
      )}
    </div>
  )
}

export default HappinessRatingsList
