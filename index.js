function superbowlWin(arrayOfGames) {
    const winningGame = arrayOfGames.find(game => game.result === "W");
    return winningGame ? winningGame.year : undefined;
  }
