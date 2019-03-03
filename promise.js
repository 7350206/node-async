// PROMISE - object that holds EVENTUAL result of async operation
// when complete -> result || err

const p = new Promise((res, rej) => {
  // res and rej are functions
  setTimeout(() => {
    //res(1) // when complete - send result to consumer of this promise
    rej(new Error('error message'))
  }, 1000);
})

// consume promise result
p
  .then(id => console.log('id', id))
  .catch(e => console.log('error:', e.message))

