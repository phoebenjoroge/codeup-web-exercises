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

//Two -Filter
let languageFilter = users.filter(user => user.languages.length >= 3);
console.table(languageFilter);

//Three -Map
var userEmail = users.map(user => user.email);
console.log(userEmail);

//Four -Reduce
let averageYears = users.reduce((total, user) => total + user.yearsOfExperience, 0);
averageYears= averageYears/users.length;
console.log(averageYears);

//Five Reduce
let longestEmail = users.reduce((current, user) => user.email.length > current.email.length ? user : current, users[0]);
console.log(longestEmail.email);

//Six Reduce
let userNames = users.reduce(function(a, user) {
    return [...a, user.name];
}, []);
let userNameString = 'Your instructors are: ' + userNames.join(', ') + '.';
console.log(userNameString);