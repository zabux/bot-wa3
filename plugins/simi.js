let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let res = await fetch(global.API('https://api.simsimi.net', '/v2/', { text: encodeURIComponent(text), lc: "id" }, ''))
  let json = await res.json()
  if (json.success) m.reply(json.success)
  else throw json
}
handler.help = ['simi', 'simsimi', 'miaw'].map(v => v + ' <teks>')
handler.tags = ['fun']
handler.command = /^((sim)?simi|miaw)$/i

module.exports = handler