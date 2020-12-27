const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(cek)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}

// ini adalah program untuk menjalankan fungsi cekHariKerja
// inputan day akan menyesuaikan dengan elemen dalam array dataDay
// jika sesuai akan menjalankan program then dan menghasilkan pesan hari senin adalah hari kerja
// jika tidak sesuai akan menjalankan program catch dan throw error
cekHariKerja('senin').then(hasil =>{
    console.log(`hari ${hasil} adalah hari kerja`)
})
.catch((error)=>{
    console.log(error)
})

// ini adalah program untuk menjalankan fungsi trycatch
// inputan day akan menyesuaikan dengan elemen dalam array dataDay
// jika sesuai akan menjalankan program try dan menghasilkan hari
// jika tidak sesuai akan menjalankan program catch dan throw error
async function cekHariKerjaTryCatch(day) {
    try{
     const result = await cekHariKerja(day)
     console.log(result)
    } catch (error) {
     throw error
    }
   }
   cekHariKerjaTryCatch('senin')