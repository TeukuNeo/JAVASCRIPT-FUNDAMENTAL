const token = ~~[Math.random() * 123456]

const pictures = ["1.jpg", "2.jpg", "3.jpg"]

function login(username) {
    console.log('Memvalidasi token user sekarang...')
    return new Promise((success, failed) => {
        setTimeout(() => {
           if (username != "teuku_neo") failed('sorry wrong data')
            success(token)
        }, 200)
    })
}

function getUser(token) {
    console.log('proses token user...')
    if (token)
        setTimeout(() => {
            return ({ apiKey: "xkey123" })
        }, 500)
}

function getPictures(apiKey) {
    if (apiKey) return pictures
}

const user = login('teuku_neo')
user.then(function (response) {
    console.log(response)
})

