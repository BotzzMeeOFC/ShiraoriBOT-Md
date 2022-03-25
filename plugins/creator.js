const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;Bara;;;'
                    + 'FN:Bara\n' // full name
                    + 'ORG:Bara;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=6283174508962:+62 831-7450-8962\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: '𝘽𝙖𝙧𝙖', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler