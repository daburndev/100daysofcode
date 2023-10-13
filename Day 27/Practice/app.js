// const fakeRequestCallback = (url, success, failure) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//         if (delay > 4000) {
//             failure('Connection Timeout :(')
//         } else {
//             success(`Here is your fake data from ${url}`)
//         }
//     }, delay)
// }

// // THE PROMISE VERSION 
// const fakeRequestPromise = (url) => {
//     return new Promise((resolve, reject) => {
//         const delay = Math.floor(Math.random() * (4500)) + 500;
//         setTimeout(() => {
//             if (delay > 4000) {
//                 reject('Connection Timeout :(')
//             } else {
//                 resolve(`Here is your fake data from ${url}`)
//             }
//         }, delay)
//     })
// }


// fakeRequestCallback('books.com/page1',
// function(response){
//     console.log("IT WORKED !!!!")
//     console.log(response)
//     fakeRequestCallback('book.com/page2',
//     function(response){
//         console.log("IT WORKED AGAIN !!!!")
//         console.log(response)
//         fakeRequestCallback('book.com/page3',
//         function(response){
//             console.log("IT WORKED AGAIN (3rd req) !!!!")
//             console.log(response)
//         },
//         function(err){
//             console.log("ERROR (3rd req)!!!", err)
//         }
//         )
//     },
//     function(err){
//         console.log("ERROR (2nd req)!!!", err)
//     })
// }, function(err){
//     console.log("ERROR!!!!", err)
// })


// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then(()=>{
//         console.log('IT WORKED(page1)!!!!')
//         fakeRequestPromise('yelp.com/api/coffee/page2')
//         .then(()=>{
//         console.log('IT WORKED(page2)!!!!')
//         fakeRequestPromise('yelp.com/api/coffee/page3')
//         .then(()=>{
//             console.log('IT WORKED(page3)!!!!')
//         })
//         .catch(()=>{
//             console.log('OH NO, ERROR!!!! (page3)')
//         })
//         })
//         .catch(()=>{
//         console.log('OH NO, ERROR!!!! (page2)')
//         })
//     })
//     .catch(()=>{
//         console.log('OH NO, ERROR!!!! (page1)')
//     })


// fakeRequestPromise('yelp.com/api/coffee/page1')
// .then((data)=>{
//     console.log("IT WORKED !!!! (page1)")
//     console.log(data)
//     return fakeRequestPromise('yelp.com/api/coffee/page2')
// })
// .then((data)=>{
//     console.log("IT WORKED!!!!! (page2)")
//     console.log(data)
//     return fakeRequestPromise('yelp.com/api/coffee/page3')
// })
// .then((data)=>{
//     console.log("IT WORKED!!!!! (page3)")
//     console.log(data)
// })
// .catch((err)=>{
//     console.log("OH NO, A REQUEST FAILED!!!!")
//     console.log(err)
// })




// const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         const rand = Math.random();
//         setTimeout(()=>{
//             if( rand < 0.7){
//             resolve('YOUR FAKE DATA HERE');
//         }
//         reject('Request Error!');
//         }, 1000)
//     })
// }

// fakeRequest('/dogs/1')
// .then((data)=>{
//     console.log("DONE WITH REQUEST!")
//     console.log("data is:", data)
// })
// .catch((err) => {
//     console.log("OH NO!", err)
// })


// async function hello(){

// }

// const sing = async () => {
//     throw "OH NO, PROBLEM"
//     return 'LA LA LA LA '
// }

// sing().then((data)=>{
//     console.log("PROMISE RESOLVED WITH", data)
// })
// .catch(err =>{
//     console.log("PROMISE REJECTED!")
//     console.log(err)
// })


const login = async (username, password) => {
   if(!username || !password) throw 'Missing Credentials'
   if(password === 'corgifeetarecute') return 'WELCOME!'
   throw 'Invalid Password'
}

login('asdfs','corgifeetarecute')
.then(msg=> {
    console.log("LOGGED IN!")
    console.log(msg)
})
.catch(err => {
    console.log("ERROR!")
    console.log(err)
})


const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('yellow', 1000))
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('indigo', 1000))
//     .then(() => delayedColorChange('violet', 1000))


async function rainbow() {
    await delayedColorChange('red', 1000)
    await delayedColorChange('orange', 1000)
    await delayedColorChange('yellow', 1000)
    await delayedColorChange('green', 1000)
    await delayedColorChange('blue', 1000)
    await delayedColorChange('indigo', 1000)
    await delayedColorChange('violet', 1000)
    return "ALL DONE!"
}

// rainbow().then(()=> console.log('END OF RAINBOW'))

async function printRainbow() {
    await rainbow();
    console.log("END OF RAINBOW!")
}