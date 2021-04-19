const chalk = require('chalk')
const moment = require('moment')
const kanal = 'kanal id'
const log = message => {
  
    console.log(`${chalk.magenta(moment().format('YYYY-MM h:mm:ss'))} ${message}`)
}

module.exports = async client => {
    client.user.setPresence({activity:{name:`-yardım`},status: 'online'})
    log(chalk.green(`kOMUTLAR BAŞARI İLE YÜKLENDİ DOSTUM`))
  }