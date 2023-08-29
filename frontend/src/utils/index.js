export const beautifyDate = (date) => {
  return new Date(date).toLocaleDateString('ru-RU', {
    month: 'short',
    day: 'numeric',
  })
}
