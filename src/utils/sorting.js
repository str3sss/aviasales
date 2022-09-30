export const sortByOptimal = (tickets) => {
  return tickets.sort((a, b) => {
    const a_optimal = a.segments[0].duration + a.segments[1].duration + a.price
    const b_optimal = b.segments[0].duration + b.segments[1].duration + b.price
    return a_optimal > b_optimal ? 1 : -1
  })
}

export const sortByFlyDuration = (tickets) => {
  return tickets.sort(function (a, b) {
    const a_duration = a.segments[0].duration + a.segments[1].duration
    const b_duration = b.segments[0].duration + b.segments[1].duration
    return a_duration - b_duration
  })
}

export const sortByPrice = (tickets) => {
  return tickets.sort((a, b) => a.price - b.price)
}

export const sortByTicketsTransfer = (tickets, transfers = []) => {
  return tickets.filter((item) => {
    return transfers.includes(item.segments[0].stops.length) || transfers.includes(item.segments[1].stops.length)
  })
}
