const currency = (prefix, num = 0) => {
  const res = num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  return `${prefix} ${res}`
}

export default currency
