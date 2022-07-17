import { DateTime } from 'luxon'

const dateFormat = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
}

export const formatDate = (date) =>
  DateTime.fromISO(date).toLocaleString(dateFormat)

export const getRatingIcon = (rating: number) => {
  if (rating >= 10) {
    return '🤩'
  } else if (rating >= 8) {
    return '👍'
  } else if (rating >= 5) {
    return '👌'
  } else if (rating >= 3) {
    return '🙅‍♀️'
  } else {
    return '💆‍♂️'
  }
}
