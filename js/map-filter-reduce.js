'use strict';

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// TODO: Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
// const moreLang = users.filter(user => user.languages.length >= 3);
// console.log(moreLang)


// TODO: Use .map to create an array of strings where each element is a user's email address
//const justEmail = users.map(user => user.email);
// console.log(justEmail);


// TODO: Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
// const totalExp = users.reduce((total, user) => {
//     return total + user.yearsOfExperience;
// }, 0);
//
// console.log(totalExp)


// TODO: Use .reduce to get the longest email from the list of users.
// const justEmail = users.map(user => user.email.split(""))
// console.log(justEmail)

// const longEmail = users.reduce((accum, curr) => {
//     if (curr.length > accum.length) {
//         return curr;
//     } else {
//         return accum;
//     }
//
// }, '');
// console.log(longEmail);

// const longEmail = users.reduce((accum, {email}) => {
//     if (email.length > accum.length) {
//         return email;
//     }else {
//         return accum;
//     }
// }, '');
//
// console.log(longEmail);


// TODO: Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

const longUserName = users.reduce((accum, {name}) => {
    return accum + name + ', '
}, '')

console.log(`Your instructors are: ${longUserName}`);

// TODO: BONUS! Use .reduce to get the unique list of languages from the list of users

const languageList = users.reduce((accum, {languages}) => {
    return accum + languages + ',';
}, [])
console.log(languageList);

let splitLangList = languageList.split(",");
//const uniqueLanguages = splitLangList.filter((language, index, array) => array.indexOf(language) === index)

console.log(splitLangList);
//console.log(uniqueLanguages.slice(0, -1));

function uniqueLanguages(list) {
    let filteredArr = [];
    for (let i = 0; i < list.length - 1; i++) {
        if (list.indexOf(list[i]) === i) {
        filteredArr.push(list[i])
        }
    }
    console.log(filteredArr);
}
uniqueLanguages(splitLangList);







