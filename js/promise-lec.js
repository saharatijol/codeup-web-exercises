'use strict';

// let starFetch = fetch('https://swapi.dev/api/people/9/')
//     .then(result => {
//         console.log(result);
//         return result.json();
//     })
//     .then(data => {
//         console.log(data)
//         return 'Star Wars Finished'
//     });
//
// let gitHubFetch = fetch('https://api.github.com/users')
//     .then(response => response.json())
//     // .then(response => console.log(response))
//     .then(result => {
//         result.forEach(user => console.log(user));
//         return 'GitHub Finished'
//     })
//     .catch(error => console.error(error));
//
// Promise.all([starFetch, gitHubFetch])
//     .then(data => {
//         console.log('Both are complete!!!');
//         console.log(data);
//     })

//*========== Example for using .race =============*//
// let redTurtle = Math.floor(Math.random()*10000);
// let purpleTurtle = Math.floor(Math.random()*10000);
// let blueTurtle = Math.floor(Math.random()*10000);
// let orangeTurtle = Math.floor(Math.random()*10000);
//
// let goRedTurtle = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('Red Turtle Finished!')
//     }, redTurtle)
// })
//
//
// let goPurpleTurtle = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('Purple Turtle Finished!')
//     }, purpleTurtle)
// })
//
// let goBlueTurtle = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('Blue Turtle Finished!')
//     }, blueTurtle)
// })
//
// let goOrangeTurtle = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('Orange Turtle Finished!')
//     }, orangeTurtle)
// });
//
// console.log("And they're off!!!")
// Promise.race([goRedTurtle, goPurpleTurtle, goBlueTurtle, goOrangeTurtle])
//     .then(data => console.log(data));



//*========= Example for .then chaining=========*//
// let redTurtle = Math.floor(Math.random()*10000);
// let purpleTurtle = Math.floor(Math.random()*10000);
// let blueTurtle = Math.floor(Math.random()*10000);
// let orangeTurtle = Math.floor(Math.random()*10000);
// console.log("And they're off!!");
//
// let goRedTurtle = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve(`Red Turtle Finished in ${redTurtle}ms!`)
//     }, redTurtle)
// }).then(data => {
//     console.log(data);
//
//
//     let goPurpleTurtle = new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(`Purple Turtle Finished in ${purpleTurtle}ms!`)
//         }, purpleTurtle)
//     }).then(data => {
//         console.log(data);
//
//         let goBlueTurtle = new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve(`Blue Turtle Finished in ${blueTurtle},s!`)
//             }, blueTurtle)
//         }).then(data => {
//             console.log(data);
//
//
//             let goOrangeTurtle = new Promise((resolve) => {
//                 setTimeout(() => {
//                     resolve(`Orange Turtle Finished in ${orangeTurtle}ms!`)
//                 }, orangeTurtle)
//             }).then(data => {
//                 console.log(data)
//                 console.log('When will this output be seen?');
//             });
//
//         })
//     })
//     })

const makeRequest = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) {
                resolve('Here is your data: ...');
            } else {
                reject('Network Connection Error!');
            }
        }, 2000);
    });
}

const request = makeRequest();
console.log(request); // pending promise
request.then(message => console.log('Promise resolved!', message));
// if resolved, will log "Promise resolved!" and "Here is your data: ..."
request.catch(message => console.log('Promise rejected!', message));
// if rejected, will log "Promise rejected!" and "Network Connection Error!"
