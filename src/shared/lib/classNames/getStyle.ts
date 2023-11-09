
export const getReviewsStyle = (reviewType: string) => {
  if (reviewType === 'positive') {
    return 'bg-success-50 text-success-700'
  }
  if (reviewType === 'neutral') {
    return 'bg-indigo-50 text-indigo-700'
  }
  if (reviewType === 'negative') {
    return 'bg-error-50 !text-error-700'
  }
  return ''
}


