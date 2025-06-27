const token = ~~[Math.random() * 123456]

const pictures = ["1.jpg", "2.jpg", "3.jpg"]

function login(username, callback) {
    console.log('Memvalidasi data...')
    setTimeout(() => {
        callback({token, username})
    }, 200)
}

function getUser(token) {
    if (token) return {apiKey: "xkey123"}
}

function getPictures (apiKey) {
    if (apiKey) return pictures
}

login('teuku_neo', function(response) {
    console.log('getting data...', response)
})
