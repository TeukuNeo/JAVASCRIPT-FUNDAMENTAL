const token = ~~[Math.random() * 123456]

const pictures = ["1.jpg", "2.jpg", "3.jpg"]

function login(username, callback) {
    console.log('Memvalidasi token user sekarang...')
    setTimeout(() => {
        callback({ token, username })
    }, 200)
}

function getUser(token, callback) {
    console.log('proses token user...')
    if (token)
        setTimeout(() => {
            callback({ apiKey: "xkey123" })
    }, 500)
}

function getPictures(apiKey) {
    if (apiKey) return pictures
}

login('teuku_neo', function (response) {
    const { token } = response
    getUser(token, function(response) {
        console.log(response)
    })
})

