const blocksAway = function(directions) {
  // object to return
  const output = { east: 0, north: 0 };
  // create array of moves
  const movesArray = [];
  for (let i = 0; i < directions.length; i += 2) {
    const moveArray = [];
    moveArray.push(directions[i], directions[i + 1]);
    movesArray.push(moveArray);
  }
  // defines axis to work on;
  let direction;
  // define initial direction:
  if (movesArray[0][0] === 'right') {
    output.east += movesArray[0][1];
    direction = 'east';
  } else if (
    movesArray[0][0] === 'left') {
    output.north += movesArray[0][1];
    direction = 'north';
  }
  // following moves
  for (let i = 1; i < movesArray.length; i++) {
    let turn = movesArray[i][0];
    let distance = movesArray[i][1];
    if (direction === 'east') {
      if (turn === 'left') {
        output.north += distance;
        direction = 'north';
      } else {
        output.north -= distance;
        direction = 'south';
      }
    } else if (direction === 'north') {
      if (turn === 'left') {
        output.east -= distance;
        direction = 'west';
      } else {
        output.east += distance;
        direction = 'east';
      }
    } else if (direction === 'south') {
      if (turn === 'left') {
        output.east += distance;
        direction = 'east';
      } else {
        output.east -= distance;
        direction = 'west';
      }
    } else if (direction === 'west') {
      if (turn === 'left') {
        output.north -= distance;
        direction = 'south';
      } else {
        output.north += distance;
        direction = 'north';
      }
    }
  }
  return output;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));

// expected output
// {east: 1, north: 3}
// {east: 3, north: 3}
// {east: 0, north: 0}