let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
  global.dfail('admin', m, conn)
  throw false
  }
  let pesan = args.join` `
  let oi = `━━━━━━━━━━━━━━━━━━━━ ${pesan}`
  let teks = `━━━━━━━━━━━━━━━━━━━━
          *𝐔𝐧𝐊𝐧 - 𝐁𝐎𝐓*

*🎭  Venta de bots,recarga de diamantes, cuentas ff, Regedit , etc.*
 *https://chat.whatsapp.com/C31FNyuskxB7eiiCGaswWF*\n\n ${oi}\n\n`
  for (let mem of participants) {
  teks += `🕷️ ･ @${mem.id.split('@')[0]}\n`}
  teks += `ㅤㅤㅤㅤ𝑨𝒍𝒆𝒙𝒏𝑽𝒆𝒏𝒕𝒂𝒔 🥷🏼`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  }
  handler.help = ['tagall <mesaje>','invocar <mesaje>']
  handler.tags = ['group']
  handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
  handler.admin = true
  handler.group = true
  export default handler