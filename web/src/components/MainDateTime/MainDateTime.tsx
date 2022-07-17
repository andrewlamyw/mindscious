import { FunctionComponentElement } from 'react'

import { formatDate } from 'src/utils'

type MainDateTimeProps = {
  datetime: string
}

const MainDateTime = ({
  datetime,
}: MainDateTimeProps): FunctionComponentElement<MainDateTimeProps> => {
  return <time dateTime={datetime}>{formatDate(datetime)}</time>
}

export default MainDateTime
