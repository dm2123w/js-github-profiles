const APIURL = "https://api.github.com/users/";

getUser("abc");

async function getUser(username) {
    try {
        const { data } = await axios(APIURL + username);
        console.group(data);
    } catch (err) {
        console.log(err);
    }
}
