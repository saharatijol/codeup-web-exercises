/*
 * Complete the TODO items below
 */
const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
];

// TODO: fill in your name and email and add some programming languages you know
//to the languages array
/*----OLD WAY-----*/
// let newUser = {
//   name: 'sahara',
//   email: 'saharatijol@codeup.com',
//   languages: ['html', 'css', 'javascript']
// }
//
// users.push(newUser)
//
// for (let user of users) {
//   console.log(user);
// }




// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
const name = 'sahara';
const email = 'saharatijol@gmail.com';
const languages = ['html', 'css', 'javascript'];

// TODO: rewrite the object literal using object property shorthand
// users.push({
//   name: name,
//   email: email,
//   languages: languages
// });

// My answer:
users.push({name, email, languages})

for (let user of users) {
  console.log(user);
}


// TODO: replace `var` with `let` in the following variable declarations
let emails = [];
let names = [];

// TODO: rewrite the following using arrow functions
// users.forEach(function(user) {
//   return emails.push(user.email);
// });
// users.forEach(function(user) {
//   return names.push(user.name);
// });

//My answer:
// let newEmail = user => {
//   for (let user of users) {
//     return emails.push(user.email)
//   }
// }
//
// let newName = user => {
//   for (let user of users) {
//     return names.push(user.name)
//   }
// }

/*------------ Walkthrough answer-------------*/
users.forEach(user => emails.push(user.email));
users.forEach(user => names.push(user.name));


// TODO: replace `var` with `let` in the following declaration
let developers = [];
// users.forEach(function(user) {
  //*-------- Answer from Walkthrough --------*/
  users.forEach(function({name, email, languages}) {
  // TODO: rewrite the code below to use object destructuring assignment
  //       note that you can also use destructuring assignment in the function
  //       parameter definition
  // const name = user.name;
  // const email = user.email;
  // const languages = user.languages;

  //My answer:
  // let {name, email, languages} = user

  /*---- Console Check ------*/
  // console.log(name)
  // console.log(email)
  // console.log(languages)

  // TODO: rewrite the assignment below to use template strings
  // developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));
//});

developers.push(`${name}'s email is ${email} ${name} knows ${languages.join(', ')}`)
  });
//console.log(developers.push(`${name}'s email is ${email} ${name} knows ${languages.join(', ')}`));

// TODO: Use `let` for the following variable
// let list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop
//developers.forEach(function (developer) {
// for (let developer of developers) {
  // TODO: rewrite the assignment below to use template strings
//   list += '<li>' + developer + '</li>';
// });
// list += '</ul>';
//   list += `<li>${developer}</li>`
// }
// list += `</ul>`

/*---------- Cleaned-up Version --------*/
let list = '<ul>';
for (let developer of developers) {
  list += `<li>${developer}</li>`
}
list += `</ul>`
console.log(developers)
document.write(list);

