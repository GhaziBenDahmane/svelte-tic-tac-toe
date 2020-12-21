const indexToCords = (moveIndex, numCol) => {
  const x = moveIndex % numCol;
  const y = Math.ceil((moveIndex + 1) / numCol) - 1;
  return [x, y];
};

const cordsToIndex = ([x, y], numCol) => {
  return y * numCol + x;
};
const isInBoard = ([x, y], numCol) => {
  return x >= 0 && x <= numCol - 1 && y >= 0 && y <= numCol - 1;
};
const getValueAt = ([x, y], board) => {
  const numCol = Math.sqrt(board.length);
  if (!isInBoard([x, y], numCol)) {
    return 0;
  }
  return board[cordsToIndex([x, y], numCol)];
};

const callNTimes = (fn, n, params) => {
  let res = params;
  while (n > 0) {
    res = fn(res);
    n--;
  }
  return res;
};
const boardMoves = {
  top: ([x, y]) => [x, y - 1],
  bot: ([x, y]) => [x, y + 1],

  left: ([x, y]) => [x - 1, y],
  right: ([x, y]) => [x + 1, y],

  topleft: ([x, y]) => [x - 1, y - 1],
  topright: ([x, y]) => [x + 1, y - 1],

  botleft: ([x, y]) => [x - 1, y + 1],
  botright: ([x, y]) => [x + 1, y + 1],
};

export const isWon = ({ board, moveIndex, winCondition }) => {
  const otherToWin = winCondition - 1;
  const moveValue = board[moveIndex];
  const numCol = Math.sqrt(board.length);
  const [x, y] = indexToCords(moveIndex, numCol);
  const a = Object.keys(boardMoves).map((key) => {
    const operation = boardMoves[key];
    const arr = [...new Array(otherToWin).keys()].map((x) => x + 1);
    let n = 0;
    for (let curr of arr) {
      let [currentX, currentY] = callNTimes(operation, curr, [x, y]);
      if (getValueAt([currentX, currentY], board) === moveValue) n++;
      else break;
    }
    return {
      direction: key,
      n,
    };
  });

  const result = {};

  a.forEach((x) => {
    result[x.direction] = x.n;
  });

  const winningCombs = [
    ["top", "bot"],
    ["right", "left"],
    ["botleft", "topright"],
    ["botright", "topleft"],
  ].map(([x1, x2]) => result[x1] + result[x2]);
  return winningCombs.some((x) => x >= otherToWin);
};

export const isEnded = (board) => {
  return !board.some((x) => x === 0);
};
