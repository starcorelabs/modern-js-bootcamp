let add = function(a, b, c){
  return a + b + c
}

let result = add(10, 1, 5)
//console.log(result)

let getScoreText = function(name = 'Anon', score = 0){
    return 'Name: ' + name + ' - Score: ' + score
}

let scoreText = getScoreText('Rath', 99)
//console.log(scoreText)

// challenge
.2 * 100

let getTip = function(total, tipPercent = .2){
  return total * tipPercent
}

let tip = getTip(13.50, .30)
console.log(tip)
