console.log('Before');

/* promise approach
  getUser(1)
  // return a user
  .then(user => getRepos(user.name))
  .then(repos => console.log('repos:', repos))
  .catch(e => console.log('e.message')) */

// await approach
// when call a promised function - await it
// await nedd to be decorated with async function

async function displayPromises(){
  try{
    const user = await getUser(1)
    const repos = await getRepos(user.name)
    console.log('repos:', repos);
  }
  catch(e){
    console.log('error', e.message)
  }
}
displayPromises()


console.log('After');

function getUserName(user){
  console.log('User:', user);
  getRepos(user.name, getUserRepos)
}

function getUserRepos(repos){
  console.log('User Repos:', repos);
}


/* function getUser(id, callback){
  setTimeout(() => {
    console.log('reading db for user...');
    callback({ id, name:"Connor" })
  }, 1000)

} */
function getUser(id){
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log('reading db for user...');
      res({ id, name: "Connor" })
    }, 2000)
  })
}

/* function getRepos(user, callback){
  setTimeout(() => {
    console.log('getting repos');
    callback(['repo1', 'repo2', 'repo3'])
  }, 1000);
} */
function getRepos(user){
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log('getting repos');
      // res(['repo1', 'repo2', 'repo3'])
      rej(new Error('cant get the repos'))
    }, 3000);
  })
}