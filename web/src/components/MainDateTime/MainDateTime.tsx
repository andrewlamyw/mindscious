import { formatDate } from 'src/utils'

const MainDateTime = ({ datetime }) => {
  return <time dateTime={datetime}>{formatDate(datetime)}</time>
}

export default MainDateTime
