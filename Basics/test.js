console.log("om")
// we have 3 types of variables in javascript let,const,var
// but we use only const and let   (var have has function scope, not block scope, which can lead to unexpected behavior, such as variable hoisting and overwriting.)

let email = "absc@gmail.com"
const age = 22
accountcity = "prayagraj"
console.table([email,age,accountcity])

// output
// │ (index) │ Values           │
// ├─────────┼──────────────────┤
// │ 0       │ 'absc@gmail.com' │
// │ 1       │ 22               │
// │ 2       │ 'prayagraj'      │