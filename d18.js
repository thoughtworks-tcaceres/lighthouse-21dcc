const countTickets = (tickets) => {
  let ticketCount = { red: 0, green: 0, blue: 0 };
  for (const ticket of tickets) {
    ticketCount[ticket]++;
  }
  return ticketCount;
};

const bestOdds = (tickets, raffleEntries) => {
  const counts = countTickets(tickets);
  let percentage = null;
  let color = "";

  for (const currColor in raffleEntries) {
    let tempPercentage = counts[currColor] / raffleEntries[currColor];
    if (!percentage || tempPercentage > percentage) {
      color = currColor;
      percentage = tempPercentage;
    }
  }

  return `You have the best odds of winning the ${color} raffle.`;
};
