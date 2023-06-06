import { readTextFile, splitLines } from "../utils/files.js";

// Win - 6 Points, Loss - 0 Points, Draw - 3 Points
// A Rock - 1 Point, B Paper - 2 Points, C Scissors - 3 Points
// X - Loss, Y - Draw, Z - Win
const file = readTextFile("days/day02-input.txt");
const splitFile = splitLines(file).map((a) => a.split(" "));

// Now begins a complete refactor !!

/*
First var is the opp play.
Second var is if I should lose, draw or win.
*/

// I know the play of my opponent.
// I know if I should lose, draw, or win.
// I need to know what I should play.
// I need to know the score of the game.
// I need to know the score of all games.

// 4880 is to low
// 14666 is to high

const ROCK_SCORE = 1;
const PAPER_SCORE = 2;
const SCISSORS_SCORE = 3;

const WIN_SCORE = 6;
const LOSS_SCORE = 0;
const DRAW_SCORE = 3;

/**
 *
 * @param {string[]} round
 * @returns {number} Numeric code indicating ROCK_SCORE, PAPER_SCORE, or SCISSORS_SCORE
 */
const getOpponentsMove = (round) => {
  if (round[0] === "A") {
    return ROCK_SCORE;
  } else if (round[0] === "B") {
    return PAPER_SCORE;
  } else {
    return SCISSORS_SCORE;
  }
};

/**
 *
 * @param {string[]} round
 * @returns {number} Numeric code indicating WIN_SCORE, LOSS_SCORE, or DRAW_SCORE
 */
const getOutcome = (round) => {
  if (round[1] === "X") {
    return LOSS_SCORE;
  } else if (round[1] === "Y") {
    return DRAW_SCORE;
  } else {
    return WIN_SCORE;
  }
};

/**
 *
 * @param {number} opponentsMove Numeric code indicating ROCK_SCORE, PAPER_SCORE, or SCISSORS_SCORE
 * @param {number} intendedOutcome Numeric code indicating WIN_SCORE, LOSS_SCORE, or DRAW_SCORE
 * @returns {number} Numeric code indicating ROCK_SCORE, PAPER_SCORE, or SCISSORS_SCORE
 */

const getOwnMove = (opponentsMove, intendedOutcome) => {
  if (opponentsMove === ROCK_SCORE) {
    if (intendedOutcome === LOSS_SCORE) {
      return SCISSORS_SCORE;
    } else if (intendedOutcome === DRAW_SCORE) {
      return ROCK_SCORE;
    } else {
      return PAPER_SCORE;
    }
  } else if (opponentsMove === PAPER_SCORE) {
    if (intendedOutcome === LOSS_SCORE) {
      return ROCK_SCORE;
    } else if (intendedOutcome === DRAW_SCORE) {
      return PAPER_SCORE;
    } else {
      return SCISSORS_SCORE;
    }
  } else {
    if (intendedOutcome === LOSS_SCORE) {
      return PAPER_SCORE;
    } else if (intendedOutcome === DRAW_SCORE) {
      return SCISSORS_SCORE;
    } else {
      return ROCK_SCORE;
    }
  }
};

const gameScores = splitFile.map((round) => {
  return (
    getOwnMove(getOpponentsMove(round), getOutcome(round)) + getOutcome(round)
  );
});

const sumOfAllGameScores = gameScores.reduce((a, b) => a + b, 0);

console.log(sumOfAllGameScores);

// const replacedValues = splitFile.map((a) =>
//   a.map((b) => {
//     let replaceX = b.replace("X", "A");
//     let replaceY = replaceX.replace("Y", "B");
//     let replaceZ = replaceY.replace("Z", "C");
//     return replaceZ;
//   })
// );

// const win = 6;
// const loss = 0;
// const draw = 3;

// const rock = 1;
// const paper = 2;
// const scissors = 3;

// /**
//  *
//  * @param {number} self
//  * @param {number} opp
//  * @returns {number}
//  */
// const oppPlayedRock = (opp, self) => {
//   const calc = opp - self;
//   if (calc === -2) {
//     return self + loss;
//   } else if (calc === -1) {
//     return self + win;
//   } else {
//     return self + draw;
//   }
// };
// /**
//  *
//  * @param {number} self
//  * @param {number} opp
//  * @returns {number}
//  */
// const oppPlayedPaper = (opp, self) => {
//   const calc = opp - self;
//   if (calc === 1) {
//     return self + loss;
//   } else if (calc === -1) {
//     return self + win;
//   } else {
//     return self + draw;
//   }
// };

// /**
//  *
//  * @param {number} self
//  * @param {number} opp
//  * @returns {number}
//  */
// const oppPlayedScissors = (opp, self) => {
//   const calc = opp - self;
//   if (calc === 1) {
//     return self + loss;
//   } else if (calc === 2) {
//     return self + win;
//   } else {
//     return self + draw;
//   }
// };

// /**
//  *
//  * @param {string[]} game
//  * @returns
//  */

// This function determines what I need to play to win.

// const whatDidIPlay = (game) => {
//   if (game[1] === "A") {
//     return rock;
//   } else if (game[1] === "B") {
//     return paper;
//   } else {
//     return scissors;
//   }
// };

// //I should refactor this to check what the opp played vs what I played/should play.
// // No score should be calculated as a part of the oppPlayed function.
// // There should be a second function that calcs the points.
// // X - Loss
// // Y - Draw
// // Z - Win

// // const whatShouldIPlay = (game) => {};

// const gameCalc = replacedValues.map((game) => {
//   if (game[0] === "A") {
//     return oppPlayedRock(rock, whatDidIPlay(game));
//   } else if (game[0] === "B") {
//     return oppPlayedPaper(paper, whatDidIPlay(game));
//   } else {
//     return oppPlayedScissors(scissors, whatDidIPlay(game));
//   }
// });

// const sumOfAllGames = gameCalc.reduce((a, b) => a + b, 0);

// console.log(sumOfAllGames);
