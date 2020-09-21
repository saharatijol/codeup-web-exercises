'use strict';
// Asynchronous code allows the call stack to continue while JS processes requests

// const myPromise = fetch(`https://api.github.com/users/saharatijol/events`, {headers: {'Authorization': 'token 80afa1fa2ec77d7f77dbac29a24b8fe6582074f8'}})
//     .then(result => result.json())
//     //.then(data => console.log(data))
//     .then(data => console.log(data[0].created_at))
// //console.log(myPromise)

function gitHubUserName(userName) {
    return fetch(`https://api.github.com/users/${userName}/events`, {headers: {'Authorization': 'token 80afa1fa2ec77d7f77dbac29a24b8fe6582074f8'}})
        .then(result => result.json())
        //.then(data => console.log(data))
        .then(data => console.log(data[0].created_at))
}
gitHubUserName('saharatijol');

//After Walkthrough
// let getDateLastCommit = (username) => {
//     let url = `https://api.github.com/users/${username}/events/public`;
//     return fetch(url, {headers: {'Authorization' : 'token 80afa1fa2ec77d7f77dbac29a24b8fe6582074f8'}})
//         .then(response => response.json())
//         //.then(data => console.log(data))
//         .then(events => events.filter(event => event.type === "PushEvent"))
//         .then(pushEvents => pushEvents[0].created_at);
//         //.catch(err => console.error('Something went wrong'));
}
//
// getDateLastCommit('saharatijol')

//Add this to DOM
// document.getElementById("lookitup")
//     .addEventListener(() => {
//         ev.preventDefault();
//     let username = document.getElementById('username').value;
//     getDateLastCommit(username)
//         .then(date => {
//             document.getElementById('output').innerText = date;
//         })
//     })


function wait(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isNaN(num)) {
                reject('error')
            } else {
                resolve(num)
            }
        }, num)
    })
}
console.log(wait)


wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
wait('stringHere').then(() => console.log('This should fail'));

//After Walkthrough
// const wait = (ms) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('Hello World')
//         }, ms);
//     })
// }
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds' + data));
