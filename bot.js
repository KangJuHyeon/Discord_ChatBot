const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES ] });
const token = require('./config.js');

// 봇과 서버를 연결해주는 부분
client.login(token.token);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', msg => { // message 이벤트시 msg (Discord.Message) 매개변수를 받고 실행할 함수
  if (msg.content === '!help') {
    // msg.reply('명령어!!! \n /안녕\n /너는 누구야? \n /언제 만들어졌어?'); // reply 는 멘션 + , msg 로 출력됩니다.
    const embed = new MessageEmbed()
      .setTitle("명령어 모음입니다.") // 1 - embed의 제목을 담당합니다.
      .setColor('0f4c81') // 2 - embed 사이드 바의 색을 정합니다.
      .setDescription('안녕하세요! 고정된 메세지에 명령어가 적혀있습니다.') // 3 - 실제로 설명을 담당하는 곳입니다.
      
      msg.channel.send({ embeds : [embed] });
  }
  if (msg.content === 'ping') { // Discord.Message 객체의 content 프로퍼티가 'ping' 일 때
    msg.reply('Pong!'); // reply 는 멘션 + , msg 로 출력됩니다.
  }
  if (msg.content.startsWith('!안녕')){
    msg.reply('안니용!👋👋👋');
  }
  if (msg.content.startsWith('!너는 누구야?')){
    msg.reply('연습용 봇이야😃😏');
  }
  if (msg.content.startsWith('!언제 만들어졌어?')){
    msg.reply('주인님이 챗봇을 만드려다가 시간이 걸려서 나를 간단하게 만들어봤다고 들었어😭');
  } 
    console.log(msg.content);
  });