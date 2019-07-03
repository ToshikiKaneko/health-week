// var config = {
//   apiKey: "AIzaSyBD87cD_JfufmRe_g3Tp7rIz5VqJBLfL24",
//   authDomain: "healthweek-ca6c2.firebaseapp.com",
//   databaseURL: "https://healthweek-ca6c2.firebaseio.com"
// };

// firebase.initializeApp(config);

// firebase.database().ref('test').once('value', function(snapshot, error) {
//   var test = snapshot.val();
//   console.log(test);
// });

namespace module1{
  export class foo{}
}

var foo = new module1.foo();
console.log(foo);
