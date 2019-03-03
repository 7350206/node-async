// promises that already resolve || rejected
// useful for unit test
const p = Promise.resolve({ id:1 })
p.then(result => console.log(result))

const e = Promise.reject(new Error('reason to reject'))
e.catch(err => console.log('error:', err.message))