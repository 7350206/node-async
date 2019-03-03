// both async operation started at same time

const p1 = new Promise((res, rej) => {
  setTimeout(() => {
    console.log('async operation 1');
    res(1)
    // rej(new Error('something failed'))
  }, 3000)
})

const p2 = new Promise((res, rej) => {
  setTimeout(() => {
    console.log('async operation 2');
    res(2)
  }, 2000);
})

// then BOTH are done
/* Promise.all([p1, p2])
  .then(result => {
    console.log('all done:', result);
  })
  .catch(e => console.log(e.message)) */

  // when first is complete
  Promise.race([p1, p2])
    .then(result => console.log(result)) //value of the 1st done promise
    .catch(e => console.log(e.message))