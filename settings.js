const fs = require('fs')
const chalk = require('chalk')

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['5532988715609'] //ur owner number
global.ownername = "Café" //ur owner name
global.ytname = "Bot Trollagens" //ur yt chanel name
global.socialm = "GitHub: nimaofficial" //ur github or insta name
global.location = "Brasil" //ur location

//bot bomdy 
global.ownernomer = "5532988715709" //ur number
global.premium = ['_____'] //ur premium number
global.botname = 'Bot Trollagens' //ur bot name
global.linkz = "https://chat.whatsapp.com/HYj9wu5Jrv6CROxyeQbHoS" //your theme url which will be displayed on whatsapp
global.websitex = "." //ur website to be displayed
global.botscript = 'https://github.com/dionesankh/trollagens11' //script link
global.themeemoji = "//" //ur theme emoji
global.packname = "Sticker By Grupo Trollagens //ur sticker watermark packname
global.author = Grupo Trollagens //ur sticker watermark author
global.wm = "Grupo Trollagens" //ur watermark

// Other
global.sessionName = 'session'
global.prefa = ['','!','.','#','&']
global.sp = ''

//messages
global.mess = {
    success: 'Parabéns!',
    admin: 'Recurso usado por admins!',
    botAdmin: 'Recurso usado por admins!',
    premime: 'Recurso premium',
    owner: 'Este recurso só pode ser usado pelo dono do grupo',
    group: 'Recursos somente para o grupo!',
    private: 'Este recurso só poder ser usado em chat privado!',
    bot: 'Este recurso só pode ser utilizado pelo BOT',
    wait: 'Aguarde...',
    linkm: 'Cadê o link?',
    endLimit: 'Seu limite diário expirou, aguarde 12 horas.',
    nsfw: 'Este recurso não foi ativado, entre em contato com o dono.',
}

//media target
global.thum = fs.readFileSync("./DragonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./DragonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./DragonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./DragonMedia/theme/cheemspic.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//adventure1
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}

global.limitAwal = {
 prem: 'Unlimited',
 free: 70
}

//adventure2
global.emot = {
role: '🏆',
level: '🎚️',
limit: '📊',
health: '❤️',
exp: '💫',
money: '💵',
potion: '🥤',
diamond: '💎',
common: '📦',
uncommon: '🎁',
mythic: '🗳️',
legendary: '🗃️',
pet: '🎁',
trash: '🗑',
armor: '👕',
sword: '⚔️',
wood: '🪵',
batu: '🪨',
string: '🕸️',
horse: '🐎',
cat: '🐈',
dog: '🐕',
fox: '🦊',
petFood: '🍖',
iron: '⛓️',
gold: '👑',
emerald: '💚',
budak: '🏃',
busur: '🏹',
panah: '💘',
kapak: '🪓'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
