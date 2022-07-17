import { DateTime } from 'luxon'

const dateFormat = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
}

const MainDateTime = ({ datetime }) => {
  return (
    <time dateTime={datetime}>
      {DateTime.fromISO(datetime).toLocaleString(dateFormat)}
    </time>
  )
}

export default MainDateTime
