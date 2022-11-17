// Orthius - 2 heads 1 tail. Hydrus - 5 heads 1 tail
// Given the number of heads and the number of tails, work out the number of each mythical beast!

// The data is given as two parameters. Your answer should be returned as an array:

//  VALID ->      [24 , 15]           INVALID ->  "No solutions"
//             [Orthus, Hydra]
// If there aren't any cases for the given amount of heads and tails - return "No solutions" or null (C#).


function beasts(heads, tails){
    for (let i = 0; i <=tails; i++){
      if (i * 5 + (tails - i) * 2 === heads){
        return [tails - i, i]
      }
    }
    return "No solutions"
  }

console.log(beasts(123, 39)) // [24, 15]