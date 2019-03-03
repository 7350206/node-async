console.log('Before');
const user = getUser(1)
console.log(user); //undefined for now
console.log('After');

// callbacks
// promises-async/await

function getUser(id){
  setTimeout(() => {
    console.log('reading db for user...');
    return { id, user:"Connor" }
  }, 1000) //doesnt block, pass itself through
}