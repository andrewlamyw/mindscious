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
