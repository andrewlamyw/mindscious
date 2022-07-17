import { formatDate } from 'src/utils/dateUtils'

const MainDateTime = ({ datetime }) => {
  return <time dateTime={datetime}>{formatDate(datetime)}</time>
}

export default MainDateTime
