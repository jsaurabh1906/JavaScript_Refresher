// VAR → Function scoped
var name = 'saurabh'
function varScopeExample() {
  if (true) {
    var num = 100;
  }
  console.log("var scope:", num); //Accessible
}
varScopeExample();

// LET & CONST → Block scoped
function letConstScopeExample() {
  if (true) {
    let num1 = 200;
    const num2 = 300;
  }
    console.log(name); //Accessible //var ignores block {}
  // console.log(num1); ReferenceError
  // console.log(num2); ReferenceError
}
letConstScopeExample();
