export const formatBytes = (bytes: number, decimals = 2) => {
  if (!+bytes) return '0 Bytes'

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Байт', 'КБ', 'МБ', 'ГБ']

  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}

export const removeSpaces = (value: string) => {
  return value.trim() === value
}

export const isNumber = (value: string) => {
  return !isNaN(+value)
}

export const isValidPhoneNumber = (value: string) => {
  return /^\+77\d{9}$/.test(value)
}

export function translateMonthToRussian(month: string): string {

  const monthsMap: Record<string, string> = {
    'January': 'Январь',
    'February': 'Февраль',
    'March': 'Март',
    'April': 'Апрель',
    'May': 'Май',
    'June': 'Июнь',
    'July': 'Июль',
    'August': 'Август',
    'September': 'Сентябрь',
    'October': 'Октябрь',
    'November': 'Ноябрь',
    'December': 'Декабрь'
  }

  return monthsMap[month] || month
}

export function translateDayToRussian(day: string, secondSymbolSmaller?: boolean): string {

  const daysMap: Record<string, string> = {
    'Monday': 'ПН',
    'Tuesday': 'ВТ',
    'Wednesday': 'СР',
    'Thursday': 'ЧТ',
    'Friday': 'ПТ',
    'Saturday': 'СБ',
    'Sunday': 'ВС'
  }

  if (secondSymbolSmaller) {
    return daysMap[day].charAt(0) + daysMap[day].charAt(1).toLowerCase()
  }

  return daysMap[day] || day
}
