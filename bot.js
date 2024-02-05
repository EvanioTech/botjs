
const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});
client.on('message', async (message) => {
	if (message.body !== '1' && message.body !== '2' && message.body !== '3' || message.body == '0') {
		await client.sendMessage(message.from, 'Ola Eu sou seu assistente virtual, seja bem vindo(a)! ');
		await client.sendMessage(message.from, 'Digite o numero da opção desejada: ');
		await client.sendMessage(message.from, '1. Formatar Pc/Notebook');
		await client.sendMessage(message.from, '2. Consultoria sobre hardware ');
		await client.sendMessage(message.from, '3. Montagem de PC ');
		await client.sendMessage(message.from, 'Digite 0 si quiser voltar ao menu principal ');
	}
	if (message.body === '1'){
		await client.sendMessage(message.from, 'Valor 100,00 em domicilio ou 80,00 na minha residência');
		await client.sendMessage(message.from, 'Informe por gentileza o Sitema operacional desejado windows/linux e sua respectiva versão');
		await client.sendMessage(message.from, 'Digite 0 si quiser voltar ao menu principal ');
	}
	if (message.body === '2') {
		await client.sendMessage(message.from, 'Consultoria custa 70,00');
		await client.sendMessage(message.from, 'Digite 0 si quiser voltar ao menu principal ');
		
	}
	if (message.body === '3') {
		await client.sendMessage(message.from, ' Montagem de PC apartir de 100,00');
		await client.sendMessage(message.from, 'Digite 0 si quiser voltar ao menu principal ');
		
	
	}
	

});
client.on('message', async (message) => {
	
	
	

});
client.on('message', async (message) => {
	

});
client.on('message', async (message) => {
	
	
});


client.initialize();
