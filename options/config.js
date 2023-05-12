/*
JNGN DIHPS CREATORNYA!
CREATOR : AULIA RAHMAN
JNGN DIHPS CREATORNYA!
DONASI LAH BIAR ADMIN UP LAGI!
DANA : 081528965381
OVO : 085821676621
PULSA : 081528965381
SELAIN NO DIBAWAH INI CLONE YA!
NOMOR WA OWNER : 085821676621
SELAIN NO ITU CLONE YA!
*/

const fs = require('fs')
const chalk = require('chalk')

//━━━━━━━━━━━━━━━[ WEBSITE APIKEY ]━━━━━━━━━━━━━━━━━//

global.APIs = {
liaacans: 'https://zenzapis.xyz',
}

//━━━━━━━━━━━━━━━[ APIKEY ]━━━━━━━━━━━━━━━━━//

global.APIKeys = {
'https://zenzapis.xyz': '9d30efca66',
}

//━━━━━━━━━━━━━━━[ SETTING ]━━━━━━━━━━━━━━━━━//
global.domain = "-" // Isi Domain Lu
global.apikey = '-' // Isi Apikey Plta Lu
global.capikey = '-' // Isi Apikey Pltc Lu
global.thumb = fs.readFileSync('./image/thumbnail.jpg') // JGN DI UBAH!
global.jumlah = '1000000000'
global.name = 'Abdul Masuk Surga (Owner)', // GNTI NAMA LU!
global.nomorsc = '6285869074622'
global.creatorr = '© Created By Yuna' // GANTI NAMA BOT LU BANH!
global.owner = ['6285869074622'] // GNTI NOMOR LU!
//global.premium = ['6285869074622', '6285821310166']
 // ADD PREM YG LU MAU BANH!!
global.quotes = 'Kesempatan Anda Untuk Sukses Di Setiap Kondisi Selalu Dapat Diukur Oleh Seberapa Besar Kepercayaan Anda Pada Diri Sendiri' // Ganti Quotes, Tapi Trsrh Klian
global.pulsa = '085869074622' // UBAH NOMOR YG AKTIF!
global.dana = '085869074622' // UBAH NOMOR DANA YG AKTIF!
global.ovo = '085869074622' // UBAH NOMOR OVO YG AKTIF!
global.gopay = '085869074622' // UBAH NOMOR GOPAY YG AKTIF!
global.titlestic = 'Punya Abdul :3' // GNTI NAMA BOT LU!
global.packname = 'Chat Wa : 6285869074622' // TRSERAH MO GANTI AP!
global.fake = 'YUNA BOT VERIFIED' // GNTI NMA BOT LU BANH!
global.prefa = ['','!','.','/','#','$']
global.sp = '⭔' // JGN DI UBAH²! NTR EROR
global.mess = {
success: '*[SUCCESS]* SUKSES PERMINTAAN ANDA TERKIRIM!',
admin: 'Fitur Ini Khusus Untuk Admin Group!',
botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
prem: 'Fitur Ini Khusus Untuk Premium',
owner: 'Fitur Ini Khusus Untuk Owner Bot',
group: 'Fitur Ini Digunakan Hanya Untuk Group!',
private: 'Fitur Ini Digunakan Hanya Untuk Private Chat!',
bot: 'Fitur Ini Khusus Pengguna Nomor Bot',
errorApi: 'Maaf Api Sedang Error!',
wait: '*[WAIT]* SEDANG DIPROSES, HARAP TUNGGU SEBENTAR!',
endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
premium: "Unlimited",
free: 10
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
