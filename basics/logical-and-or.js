// logical 'and' operator
// both sides must be true for the block to run.
// logical 'or' operator
// one side must be true for the block to run.

let temp = 70

// if (temp >= 60 && temp <= 90) {
//   console.log('Its nice outside.')
// }else if (temp <= 0 || temp >= 120) {
//   console.log('Do not go outside.')
// }else {
//   console.log('Be careful')
// }


// challenge

let isGuestOneVegan = false
let isGuestTwoVegan = true

// Are both vegan? Offer Vegan Dishes.
// At least one vegan? Offer some vegan options.
// Else, offer up the whole menu.

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log('Vegan only menu')
}else if(isGuestOneVegan || isGuestTwoVegan){
  console.log('Some vegan options')
}else{
  console.log('The whole menu')
}
