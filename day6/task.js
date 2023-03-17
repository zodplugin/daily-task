const readline = require('readline');
const { subtraction } = require('./pengurangan')
const { multiple } = require('./perkalian')
const { sum } = require('./penjumlahan')
const { divide } = require('./pembagian')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question('What is your name? ', (name) => {
//     console.log(`Hello, ${name}!`);
//     rl.close();
// });

// 1 hasil tambah inputan user (done)
rl.question('angka pertama yang mau ditambahin?', (angka1) => {
        rl.question('angka kedua yang mau ditambahin?', (angka2) => {
            const hasil = sum(parseInt(angka1), parseInt(angka2))
            console.log(`Hasil dari penambahan ${angka1} +  ${angka2} adalah ${hasil}`)
            rl.close()
        })
    })
    // 2 hasil kurang inputan user
rl.question('angka pertama yang mau dikurangi?', (angka1) => {
    rl.question('angka kedua yang mau dikurangi?', (angka2) => {
        const hasil = subtraction(parseInt(angka1), parseInt(angka2))
        console.log(`Hasil dari pengurangan ${angka1} -  ${angka2} adalah ${hasil}`)
        rl.close()
    })
})


// 3 hasil kali inputan user

rl.question('angka pertama yang mau dikali?', (angka1) => {
    rl.question('angka kedua yang mau dikali?', (angka2) => {
        const hasil = multiple(parseInt(angka1), parseInt(angka2))
        console.log(`Hasil dari perkalian ${angka1} *  ${angka2} adalah ${hasil}`)
        rl.close()
    })
})

// 4 hasil bagi inputan user

rl.question('angka pertama yang mau dibagi?', (angka1) => {
    rl.question('angka kedua yang mau dibagi?', (angka2) => {
        const hasil = divide(parseInt(angka1), parseInt(angka2))
        console.log(`Hasil dari pembagian ${angka1} /  ${angka2} adalah ${hasil}`)
        rl.close()
    })
})


// 5 hasil total harga kali quantitas barang

rl.question('Masukkan harga barang ?', (hargaBarang) => {
    rl.question('Masukkan quantitas barang?', (quantitasBarang) => {
        const hasil = multiple(parseInt(hargaBarang), parseInt(quantitasBarang))
        console.log(`Total Harga =  ${hasil}`)
        rl.close()
    })
})