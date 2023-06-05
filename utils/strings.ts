import { format, isDate, parseISO } from 'date-fns'

// @ts-expect-error date-fns is not esm
import { es } from 'date-fns/locale/index.js'

const DateFormats = {
  Short: 'MMMM d, yyyy',
  Long: 'cccc, LLLL do, yyyy h:mm aa',
}

export type DateFormatsNames = keyof typeof DateFormats

export function formatDate(date?: any, pattern: DateFormatsNames = 'Short') {
  if (!date)
    return ''
  if (isDate(date))
    return format(date, DateFormats[pattern])
  return format(parseISO(date), DateFormats[pattern], { locale: es })
}
