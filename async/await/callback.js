const token = ~~[Math.random() * 104243];

const pictures = [
    {id: 1, url: 'https://example.com/pic1.jpg'},
    {id: 2, url: 'https://example.com/pic2.jpg'},
    {id: 3, url: 'https://example.com/pic3.jpg'}
];

function login(username, password, callback) {
    console.log("Logging in with username:", username, "and password:", password);

    setTimeout(() => {
        if (username && password) {
            callback(null, { token, username });
        } else {
            callback("Login failed");
        }
    }, 2000);
}

function getUserData(token, callback) {
    setTimeout(() => {
        if (token) {
            callback(null, { apiKey: 'xKey123123' });
        } else {
            callback("Invalid token");
        }
    }, 1000);
}

function getProfile(apiKey, callback) {
    setTimeout(() => {
        if (apiKey === 'xKey123123') {
            callback(null, pictures[0]['url']);
        } else {
            callback("Invalid API Key");
        }
    }, 1000);
}

// Chaining callbacks
login("user", "password", function(err, loginRes) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Login successful:", loginRes.username, "with token:", loginRes.token);

    getUserData(loginRes.token, function(err, userData) {
        if (err) {
            console.log(err);
            return;
        }
        console.log("User data:", userData);

        getProfile(userData.apiKey, function(err, profileUrl) {
            if (err) {
                console.log(err);
                return;
            }
            console.log("Profile picture URL:", profileUrl);
        });
    });
});
