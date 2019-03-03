console.log('Before');

getUser(1, function(user){
  console.log('user:', user);

  // and get the user repos
  getRepos(user.name, (repos) => {
    console.log('User repos:', repos);
  })
})

console.log('After');

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