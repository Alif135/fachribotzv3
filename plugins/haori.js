let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
  Status : Online 
Oke Sekarang Bisa（ ・∀・）
`.trim()
conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'Fachri Di Sini')).buffer(), ext, '𝙷𝚊𝚘𝚛𝚒 𝚂𝚒𝚊𝚙 𝙼𝚎𝚖𝚋𝚊𝚗𝚝𝚞 𝙺𝚊𝚖𝚞 (*´ω｀*)', 'Siap Fachri', 'Iya', 'Hallo Fachri', 'Hallo Fachri', m)

}
handler.customPrefix = /^(tes|tess|test)$/i
handler.command = new RegExp

module.exports = handler
let wm = global.botwm
