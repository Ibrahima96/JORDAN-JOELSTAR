const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="Joelstar1@gmail.com" // no need
global.location="Lagos,Nigeria." // no need


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://starmd:xcelsama@excel.xmckecq.mongodb.net
  "
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/jamesxtreme/JORDAN-JOELSTAR";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaCamn3BKfi29OjdbG2P";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaCamn3BKfi29OjdbG2P" ; 
global.THUMB_IMAGE = process.env.IMAGE || "https://telegra.ph/file/5a06979ab4afb8ab7dccb.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "2349054039891" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349054039891,2347061138624";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "221760263631";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '2'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/f81015230c96d1f53ab60.mp4" // set images here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "2349054039891";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2349054039891";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://miles-qr.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0tCQTlaOGVHUzI0SjRaOVVMMnZUc0VrZUN6T1JhOXBubjdYeVNibEczTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRGhqd0xtcTZUejBMZzVtT3lDU2dVSERUWHRZbGRJZGgyN2tUMDF5ZkhrUT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhRk9hL0dMZi9SZlpLMUl4K3FmbDNncDlQbHRrcy9PZ056aDBkVklSVjNVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmTFBqQVFIcFVOYmlnUXViRlJISmhVNXBIdzQrMlRHSzVGQUR3YzQrbUJzPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9JQnFEUE1Ba2laUEhNM3QwSmU1QW1OVUY1dnJsOUpoQnVLYS9wTW9oMEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitMVW1udkNJV0FWakhUeDUyb3pBbE4wbUQ0U05LM1h2OWEvalhJUmtXdzQ9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLVENMVWZwejY1OHh1Z2crdHlkaDZQblY5STUxOTFhdTQyNmxvZ2V2SjBGb04rT3A3eGdkSlkzQ0tzRHNJUDBiWnhZZEltdGVUc3NHaVhnNm45QldBZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjEyNywiYWR2U2VjcmV0S2V5IjoiTERZWVZ3aHR0d2pjRzkzR1ZiYlIycUh0RklJTDhseUlYalJ1Z2RqbWJyOD0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiMHZwSVo3SHVSNUtuNjlVVlNlWGFwUSIsInBob25lSWQiOiI3Mzg0NDE4NC0zNjZmLTRjNTUtYTY0My00ZDA1YmQ4Yzk3MmIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRFNyNVJuS0hGYUYwcFFyc1g1VnNzK1I5N0h3PSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHR0JaOWQvL3doNmczaDVhUDhGS3hYbzdoeDA9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNMNkV2OXNIRU5DVWtMUUdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJnZmRUMFFud1oxTThpOFZTcnlQc1l4QjRMWVgrV042UGJhaFB0U2xKNkVVPSIsImFjY291bnRTaWduYXR1cmUiOiJrY1Y5ZFpGaGpxSnM1b1JUY0p3aDRPN2dRY3FLckFJbDBoeGJTeFViYUdzNjRUU0JLcWdtOXE4OWFyQ1NMWHBaTkxPV002cGdWaFZ0ZlJ1ODA5bWdDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiK3c1cTI3T3V6eWk5cG5WWVJrdW5nQmg0aHBtR0wvVlJnWmw3UlIxcjJtZVJtNnA5MnhFbXlUdDZ3K0FhVGhBeE95RVBNc3JMTm1kQWpmcUFkdDFsQWc9PSJ9LCJtZSI6eyJpZCI6IjIyMTc2MDI2MzYzMToxNUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLjgqTjg5Djg6njg5Ljg54u8J2QgfCdkKLwnZCc8J2QqPCdkKbwnZCa8J2Qq/CdkK4g8J2QkvCdkKHwnZCo8J2QoPCdkK7wnZCn8J2QmsSrIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIyMTc2MDI2MzYzMToxNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZSDNVOUVKOEdkVFBJdkZVcThqN0dNUWVDMkYvbGplajIyb1Q3VXBTZWhGIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5OTI5NDI3fQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "2", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "★",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "🅹🄾🆁🅳🄰🄽-🅹🄾🅴🄻🅂🅃🄰🆁" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "bicom lab",
  packname: process.env.PACK_NAME || "🤔🙂‍↔️.",
  botname : process.env.BOT_NAME  || "🅼︎🅸🄻🅴🅂",
  ownername:process.env.OWNER_NAME|| "bicomaru Shogunaī",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "34wcCGPoe3yaGtpiBZgx4SN7",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "chat.whatsapp.com,https://whatsapp.com/channel,https://t.me,https://slnkz.com,https://azcoiner.com,https://mobile.over.network,https://shibaai.club/signup,https://link.kelp.finance,https://emerson,https://tr.ee/Child-Support-Fund-Portal",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "MILES"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "sk_fc684773c50c51d94ce06651d6274392a83108cb44449628";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
