// 1
let resultChecker = new Promise((resolve, reject) => {
    let result = 80
    if (result >= 80) {
        resolve('nilai anda melebihi kriteria ketuntasan minimal')
    }
    else {
        reject(new Error('Mohon maaf, silahkan coba lagi tahun depan'))
    }
})

resultChecker.then((message) => {
    console.log(`Selamat, ${message}`)
})
    .catch((message) => {
        console.log(message)
    })

// 2
let sexChecker = new Promise((resolve, reject) => {
    let me = 'female'
    if (me === 'male') {
        resolve('Anda laki-laki')
    } else if (me === 'female') {
        resolve('Anda perempuan')
    } else {
        reject(new Error('Mohon masukkan jenis kelamin anda'))
    }
})

sexChecker.then((message) => {
    console.log(message)
})
    .catch((message) => {
        console.log(message)
    })