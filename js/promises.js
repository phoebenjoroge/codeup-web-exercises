const url = 'https://api.github.com/users/'
const events = '/events'

const getLastCommitDate = (username) => {
    let token = `token ${git_APPID}`;
    // console.log(token);
    return fetch(url + username + events, {headers: {'Authorization': token}})
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            return data.filter(event=>event.type === "PushEvent")
        })
        .then(pushEvents => {
            // console.log(pushEvents[0].created_at);
            return pushEvents[0].created_at;
        })
}


const wait = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, time)
    });
}
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));