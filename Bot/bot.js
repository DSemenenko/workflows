const {Telegraf, Markup} = require('telegraf');

const bot = new Telegraf('5460764354:AAFJq8j0DDivRJABpBGBjYq2BJqcyg7gInc');

const startDesc = `
|
|
*Please if you have any questions fill free to contact with our IT team 👨‍💻*
`

const seackLeave =`
You will be eligible for annual leave of twenty four (24) working days per annum. All leave requests must be documented in the CRM without fail. \n
You must indicate the type of leave as annual for the dates to calculate accordingly and indicate the balance. \n
Leave requests are to be planned in advance and submitted two weeks before the scheduled leave date.\n
Annual leave is not to extend beyond a two week period unless it is discussed in advance with your line manager for approval from CEO/Head of Department.
`
const addchat = `
Please find the app below to add the SALES to specific chat.
`


bot.telegram.setMyCommands([
    {command: "/addtochats", description: "Add to Chats ➕💬"},
    {command: "/leaverequest", description: "Leave Request❓"}
])


bot.command('start', async (ctx) =>{
    await ctx.replyWithMarkdown('*👋Grettings from AX Capital Workflows Bot*')
    await ctx.replyWithMarkdown(`${ctx.message.chat.first_name}, * In the lower left corner you will find your standard commands🤔* ` + startDesc)
    console.log(ctx.message.chat.first_name)
})

// bot.start((ctx) => {
//     ctx.replyWithMarkdown('*👋Grettings from AX Capital Workflows Bot*')
//     ctx.replyWithMarkdown("*🤔In the lower left corner you will find your standard commands* " + commandslist)
// })

bot.command('addtochats', async (ctx) => {
    await ctx.reply(addchat, Markup.inlineKeyboard([
        [Markup.button.webApp('Open CRM', 'https://benevolent-biscuit-aa5e51.netlify.app/')],
    ]))
})

bot.command('leaverequest', async (ctx) => {
    await ctx.reply(seackLeave, Markup.inlineKeyboard([
        [Markup.button.webApp('Open CRM', 'https://benevolent-biscuit-aa5e51.netlify.app/')],
    ]))
})

bot.help((ctx) => {
    ctx.reply('I will send you your Workflows, Activity Stream and Updates about your requests \n\nWorkflows - The place where you can requests different thins(Sick Leave, Vacation, Book a car and etc) \n\nWeb version https://crm.axcap.ae/stream/')
})



bot.launch();