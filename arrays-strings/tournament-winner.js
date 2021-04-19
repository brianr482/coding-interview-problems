/**
 * AlgoExpert
 * 
 * Given an array of pairs representing the teams that have competed against each
 * other and an array containing the results of each competition, write a
 * function that returns the winner of the tournament. The input arrays are named
 * competitions and results, respectively. The competitions array has elements in
 * the form of [homeTeam, awayTeam], where each team is a string of at most 30
 * characters representing the name of the team. The results array contains information
 * about the winner of each corresponding competition in the competitions array. Specifically,
 * results[i] denotes the winner of competitions[i], where a 1 in the results array means
 * that the home team in the corresponding competition won and a 0 means that the
 * away team won.
 */

/**
 * @param {string[][]} competitions 
 * @param {string[]} results 
 * @returns {string}
 */
function tournamentWinner(competitions, results) {
  const pointsTable = new Map();
	const winnerTable = {
		teamName: '',
		totalPoints: -Infinity
	};
	
	// O(n) Extract the total points for every team
	competitions.forEach((competition, idx) => {
		const winnerTeam = competition[1 - results[idx]];
		
		let newPoints = pointsTable.get(winnerTeam) || 0; 
		newPoints += 3;
		pointsTable.set(winnerTeam, newPoints);
		
		if (newPoints > winnerTable.totalPoints) {
			winnerTable.teamName = winnerTeam;
			winnerTable.totalPoints = newPoints;
		}
	});

  return winnerTable.teamName;
}