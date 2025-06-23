const token = ~~[Math.random() * 104243];

const pictures = [
    {id: 1, url: 'https://example.com/pic1.jpg'},
    {id: 2, url: 'https://example.com/pic2.jpg'},
    {id: 3, url: 'https://example.com/pic3.jpg'}
];

function login(username, password) {
    console.log("Logging in with username:", username, "and password:", password);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === "user" && password === "password") {
                resolve({ token, username });
            } else {
                reject("Login failed");
            }
        }, 2000);
    });
}

function getUserData(token) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (token) {
                resolve({ apiKey: 'xKey123123' });
            } else {
                reject("Invalid token");
            }
        }, 1000);
    });
}

function getProfile(apiKey) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (apiKey === 'xKey123123') {
                resolve(pictures[0]['url']);
            } else {
                reject("Invalid API Key");
            }
        }, 1000);
    });
}

// Menggunakan async/await
async function main() {
    try {
        const loginRes = await login("user", "password");
        console.log("Login successful:", loginRes.username, "with token:", loginRes.token);

        const userData = await getUserData(loginRes.token);
        console.log("User data:", userData);

        const profileUrl = await getProfile(userData.apiKey);
        console.log("Profile picture URL:", profileUrl);
    } catch (err) {
        console.log(err);
    }
}

main();
