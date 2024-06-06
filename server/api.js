const calculateWinnings = (x, response) => {
  response.takeaway = x * response.bet;
  response.score = response.score + response.takeaway;
  
  return response;
}

const calculateLosings = (response) => {
  response.score = response.score - response.bet;

  return response;
}

const playGame = (req, res) => {
  let { score, bet, number } = req.body;

  let die1 = Math.floor(Math.random() * 7) + 1;

  let die2 = Math.floor(Math.random() * 7) + 1;

  let result = die1 + die2;

  let response = {
    score: score,
    bet: bet,
    number: number,
    die1: die1,
    die2: die2,
    result: result,
    takeaway: 0

  }

  if(result == 7) {
    if(number == '7') {
      response = calculateWinnings(5, response);
    } else {
      response = calculateLosings(response);
    }
  } 
  else if(result < 7) {
    if(number == '1-6') {
      response = calculateWinnings(2, response);
    } else {
      response = calculateLosings(response); 
    }
  } 
  else {
    if(number == '8-14') {
      response = calculateWinnings(2, response);
    } else {
      response = calculateLosings(response);
    }
  }

  console.log(response);
  res.status(200).json(response);
}

export { playGame };