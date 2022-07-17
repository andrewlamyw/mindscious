import { DateTimeFormatOptions, DateTime } from 'luxon'

const dateFormat: DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
}

export const formatDate = (date: string): string =>
  DateTime.fromISO(date).toLocaleString(dateFormat)

export const getRatingEmoji = (rating: number): string => {
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
