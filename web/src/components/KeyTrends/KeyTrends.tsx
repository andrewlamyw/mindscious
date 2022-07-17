import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import {
  deviation,
  summarize,
  tidy,
  max,
  min,
  mean,
  first,
  last,
} from '@tidyjs/tidy'

const RATING = 'rating'

const KeyTrends = ({ data }: { data: [] }) => {
  const { average, high, low, stdev, firstRating, lastRating } = tidy(
    data,
    summarize({
      average: mean(RATING),
      high: max(RATING),
      low: min(RATING),
      stdev: deviation(RATING),
      firstRating: first(RATING),
      lastRating: last(RATING),
    })
  )[0]

  let overallTrend = ''
  const differences = lastRating - firstRating
  const totalCheckIns = data.length

  if (differences > 0)
    overallTrend = `The overall trend is positive, with an increase of ${differences} points seen across the ${totalCheckIns} check-ins.`
  else if (differences < 0)
    overallTrend = `The overall trend is negative, with a decline of ${Math.abs(
      differences
    )} points seen across the ${totalCheckIns} check-ins.`
  else
    overallTrend = `The overall trend is the same, at the rating points of ${firstRating} across the ${totalCheckIns} check-ins.`

  return (
    <Box sx={{ my: 5 }}>
      <Typography variant="h6" gutterBottom component="div">
        Key Trends
      </Typography>

      <ul>
        <li>{`Across ${totalCheckIns} check-ins the overall feeling score is ${average.toFixed(
          1
        )}, with a low of ${low}, high of ${high}, and standard deviation of ${stdev.toFixed(
          1
        )}`}</li>
        <li>{overallTrend}</li>
      </ul>
    </Box>
  )
}

export default KeyTrends
