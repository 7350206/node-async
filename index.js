console.log('Before');

// process anon callback functions to named functions

getUser(1, getUserName)

console.log('After');

function getUserName(user){
  console.log('User:', user);
  getRepos(user.name, getUserRepos)
}

function getUserRepos(repos){
  console.log('User Repos:', repos);
}


function getUser(id, callback){
  setTimeout(() => {
    console.log('reading db for user...');
    callback({ id, name:"Connor" })
  }, 1000)

}

function getRepos(user, callback){
  setTimeout(() => {
    console.log('getting repos');
    callback(['repo1', 'repo2', 'repo3'])
  }, 1000);
}