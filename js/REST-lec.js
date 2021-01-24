// ~~ ** REST requests / responses ** ~~
// good reference material: https://medium.com/@9cv9official/what-are-get-post-put-patch-delete-a-walkthrough-with-javascripts-fetch-api-17be31755d28
//
// const blogPost = {title: 'Ajax Requests', body: 'Are a fun way to use JS!'};
// const url = '/posts';
// const options = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(blogPost),
// };
// // fetch(url, options)
// //     .then(/* post was created successfully */)
// //     .catch(/* handle errors */);
//
// console.log(blogPost);
// console.log(options);


// https://watery-hammerhead-bay.glitch.me/ :: our base URL for our API
// /dreams = our route

const dreamApiURL = "https://watery-hammerhead-bay.glitch.me/dreams";
    // const route = "/dreams";



// fetch all of the dreams

// fetch(dreamApiURL).then(function (response) {
//    response.json().then(function(dreams){
//     console.log(dreams);
//
// })
//     })

//Let's start manipulating some data!

// const dreamObj = {
//     "dream": "My dream is to lay around and do nada"
// };

// Add a new dream [dreamObj] up to our page that is brand spanking new

// const options = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(dreamObj),
// };
//


// Target a specific url and update that resource found at that url with an entirely new resource (an {entire: object})

// const dreamObj = {
//     "dream": "My dream is to lay around and do nothing and plan out my next game session"
// };
//
// const options = {
//     method: 'PUT',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(dreamObj),
// };
//



// Target a specific url and update a specific property within ({property: changes})
//     let dreamString = "My dream is to have a big plate of mexican food with a tall glass of iced tea";
// const patchMethod = {
//     method: 'PATCH',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({dream: "Put our string in here"})
// };

// fetch(dreamApiURL + "/2", options).then(function (response){
//     console.log(response);
// })

//Target a specific url and delete (permanently - no take backs) that target

// const deleteMethod = {
//     method: 'DELETE'
//     }

// //
// fetch(dreamApiURL + "/5", {method: 'DELETE'}).then(function (response){
//     console.log(response);
// })