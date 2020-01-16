const Discord = require('discord.js');
const client = new Discord.Client();
const ascii = require('ascii-art');
client.on('ready', () => console.log(`Logged in as ${client.user.tag}!`));
const pre = 'k!';

// JFF Texts
client.on('message', msg => {
	if (msg.author.bot) return;
	if (msg.content === 'hello bot') {
		msg.channel.send(`Hello ${msg.author.username}!`);
	}
	else if (msg.content === 'king') {
		msg.channel.send('kong');
	}
	else if (msg.content === 'ok bot') {
		msg.channel.send(`ok ${msg.author.username}`);
		setTimeout(() => {
			msg.react('🇴')
				.then(() => msg.react('🇰'))
				.then(() => msg.react('🇲'))
				.then(() => msg.react('🇦'))
				.then(() => msg.react('🇹'))
				.then(() => msg.react('🇪'));
		}, 1000);
	}
	else if (msg.content === 'kong') {
		msg.channel.send('king');
	}
	else if (msg.content === 'KING') {
		msg.channel.send('**KONG**');
	}
	else if (msg.content === 'KONG') {
		msg.channel.send('**KING**');
	}
	else if (msg.content === 'KUNG') {
		msg.channel.send('**🦍🦍KUUUUUNG🦍🦍🦍KUUUUNG🦍🦍**');
	}
	else if (msg.content === 'kung') {
		msg.channel.send('🦍🦍KUUUUUNGKUUUUNG🦍🦍');
	}
	else if (msg.content === 'gorilla') {
		msg.channel.send('🦍🦍HUUUUUUUUUUUUUU🦍🦍HUUUUUUUUUUUU🦍🦍🦍');
	}
	else if (msg.content === 'GORILLA') {
		msg.channel.send('**🦍🦍HUUUUUUUUUUUUUU🦍🦍HUUUUUUUUUUUU🦍🦍🦍**');
	}
	else if (msg.content === 'ben') {
		msg.channel.send('ben');
	}
	else if (msg.content === 'BEN') {
		msg.channel.send('BEN');
	}
	else if (msg.content === `${pre}id`) {
		msg.channel.send(`Your id is **${msg.author.id}**, ${msg.author.username}`);
	}
	else if (msg.content === ('whos joe')) {
		msg.channel.send('joe mama :flushed::joy:');
	}
});

// k!help
client.on('message', msg => {
	if (msg.content === `${pre}help`) {
		msg.channel.send('```Commands by Gigantic Gorilla (use k! prefix)```\n> **General**\n`help` `pinfo` `id` `avatar` `join` `disc`\n \n> **Miscellaneous Fun ;)**\n `ascii` `calc` `rng` `quotes` `facts` `tex`\n ```And many more "secret" commands 🤔🤔🤔```');
	}
	else if (msg.content === `${pre}help secret`) {
		msg.channel.send('```Secret Commands 😂😳😂😳 (no k! prefix needed for this)```\n> Texts \n `hello bot` `king` `ok bot` `kong` `KING` `KONG` `KUNG` `kung` `gorilla` `GORILLA` `ben` `BEN` `whos joe` \n > Images \n `kevin` `KEVIN` `le monke` \n > VCs \n `speaking kong` `verbalase` `tm moment` `sammc` `hormat gerak` `water level` `shut up` `bruh sound effect #2`\n\n```Don\'t tell this to the IB 😉```');
	}
});

// ASCII
client.on('message', msg => {
	if (msg.content === (`${pre}ascii`)) {
		msg.channel.send('**Incorrect syntax!	** Correct Syntax:\n`k!ascii (text here)`\nExample: `k!ascii bananas`\nNote: text\'s length number cannot be more than 20');
	}
	else if (msg.content.startsWith(`${pre}ascii `)) {
		ascii.font(msg.content.substring(8, msg.content.legth), 'Doom', rendered => {
			rendered = rendered.trimRight();
			if (msg.content.substring(8, msg.content.legth).length > 20) {
				return msg.channel.send(`Sorry, ${msg.content.substring(8, msg.content.legth)} is too long!`);
			}
			else {
				msg.channel.send(rendered, {
					code: 'md',
				});
			}
		});
	}
});

// k!facts
client.on('message', msg => {
	if (msg.content === `${pre}facts`) {
		const facts = [
			'Netflix is responsible for 15% of the world\'s internet traffic',
			'In 4 of 5 of the biggest cities in America, it is cheaper to rely on Uber than to own a car',
			'People who think their opinions are superior to others are prone to underestimate relevant knowledge and ignoring changes to learn more',
			'There\'s a baby called *Netflix de Jesús* in Colombia',
			'Lightning hasn\'t brought down any plane since 1963',
			'As global temperatures rises, flowers are emitting less scent and smell',
			'One of Stephen Hawking\'s most widely accepted theory is that black holes aren\'t black',
			'770,000 people living in England cannot speak English well',
			'One human DNA is the equivalent to 50 novels',
			'Dynamite was originally going to be named as "Nobel\'s Safety Powder"',
			'Along with 1.4 million tons of debris removed, 19,435 body parts were recovered from the WTC after 9/11.',
			'Al-Qaeda initially considered targeting nuclear power plants on 9/11 but decided against it, fearing things could "get out of control."',
			'Jackie Chan was scheduled to be on top of the WTC on the morning of 9/11 for a movie, but the screenwriter failed to deliver the script on time.',
			'The eruption of the Krakatoa volcano in Indonesia is believed to be the reason why the sky is red in Edvard Munch\'s painting "The Scream", set in Norway.',
			'Indonesians are the world\'s shortest people.',
			'Indonesia banned kissing in public in 2004.',
			'You don\'t like the original version of a song because it\'s better. You like it because it\'s the one you heard first.',
			'None of The Beatles could read music.',
			'Your heartbeat changes and mimics the music you listen to.',
			'Flowers can grow faster by listening to music.',
			'Elvis Presley didn\'t write any of his songs.',
			'The type of music you listen to affects the way you perceive the world.',
			'Musicians have the same life expectancy as Zimbabweans: the lowest on earth.',
			'The world\'s longest concert goes so slow, it will last 639 years.',
			'In 1989, the U.S. military blared AC/DC music at General Noriega\'s compound in Panama for 2 continuous days. The dictator surrendered.',
			'Music triggers activity in the same brain structure that releases the "pleasure chemical" dopamine during sex and eating.',
			'For every US$1000 of music sold, the average musician makes just US$23.40.',
			'The British Navy uses Britney Spears\' songs to scare off Somali pirates.',
			'White people consume 60-80% of all rap music in the U.S.',
			'Queen, Bob Marley, Jimi Hendrix and Tupac never won a Grammy, while Milli Vanilli and Justin Bieber did.',
			'The word "music" comes from the Muses, goddesses of the arts in Greek mythology.',
			'Music, painting, poetry, literature and architecture, all used to be part of the modern Olympic Games from 1912 to 1948.',
			'19.3% of deaths for metal musicians are suicide.',
			'51.5% of deaths for hip-hop musicians are homicide.',
			'The lifespan of a rock star is 25 years shorter than average.',
			'Mozart sold more CDs in 2016 than Beyonce did.',
			'The earliest surviving written music is a Hurrian hymn which date to approximately 1400 BC.',
			'Mozart wrote numerous letters, and even an entire song, focused solely on poop.',
		];
		const getDSix = (min, max) => {
			max = facts.length - 1;
			min = 0;
			return Math.random() * (max - min) + min;
		};
		const rng = Math.round(Number(getDSix()));
		msg.channel.send(':thinking: | **Interesting Facts**\n' + `> ${facts[rng]}`);
	}
});

// k!quotes
client.on('message', msg => {
	if (msg.content === `${pre}quotes`) {
		const quotes = [
			'"Keep your face to the sunshine and you cannot see a shadow"  - Hellen Keller',
			'"People shouldn\'t be afraid of their government; governments should be afraid of their people"  - V for Vendetta',
			'"Do not compare yourself to others. If you do so, you are insulting yourself"  - Adolf Hitler',
			'"Anyone can deal with victory; only the mighty can bear defeat"  - Adolf Hitler',
			'"Imagination is more important than knowledge"  - Albert Einstein',
			'"If you can\'t explain it simply, you don\'t understand it well enough"  - Albert Einstein',
			'"Life is like riding a bicycle. To keep your balance you must keep moving"  - Albert Einstein',
			'"Anyone who has never made a mistake never tried something new"  - Albert Einstein',
			'"If a teacher can\'t teach all subjects, don\'t expect the students to learn all subjects"',
			'"The more there is, the less you see"',
			'"It is not about what\'s fair, it is about what\'s right"',
			'"Those who are happy are not without pain, they just know how not to be controlled by it"  - Love and Other Drugs',
			'"Allow your enemies their space to hate; they will destroy themselves in the process"',
			'"The best revenge is happiness beacause nothing drives people more crazy than seeing someone actually having a good life without them"',
			'"Weak people revenge. Intelligent people ignore. Strong people forgive."',
			'"Intelligence is the ability to adapat to change"  - Stephen Hawking',
			'"People won\'t have time for you if you are always angry or complaining"  - Stephen Hawking',
			'"Quiet people have the loudest minds"  - Stephen Hawking',
			'"Where there is life, there is hope"  - Anne Frank',
			'"In spite of everything, I still believe that people are really good at heart."  - Anne Frank',
			'"What a wonderful thought it is that some of our best days of our lives hasn\'t even happened"  - Anne Frank',
			'"Stop trying to calm the storm. Calm yourself, the storm will pass"  - Buddha',
			'"You only lose what you cling to"  - Buddha',
			'"Mind is a beautiful servant but a dangerous master"  - Buddha',
			'"The trouble is, you think you have time"  - Buddha',
			'"The supreme art of war is to subdue the enemy without fighting"  - The Art of War',
			'"In the midst of war, there is also opportunity"  - The Art of War',
			'"Sometimes we need to lose the small battles in order to win the greater wars"  - The Art of War',
			'"The less there is, the greater the value"',
			'"Life is not meant to be rich but to be wealthy"',
			'"It takes nothing to join the crowd, it takes everything to be alone"',
			'"If you\'re good at everything, you\'re not really good at anything"',
		];
		const getDSix = (min, max) => {
			max = quotes.length - 1;
			min = 0;
			return Math.random() * (max - min) + min;
		};
		const rng = Math.round(Number(getDSix()));
		msg.channel.send(':face_with_monocle: | **Interesting Quotes**\n' + `> ${quotes[rng]}`);
	}
});


// k!rng
client.on('message', msg => {
	if (msg.author.bot) return;
	if (msg.content === `${pre}rng`) {
		msg.channel.send('**Incorrect syntax!	** Correct Syntax:\n`k!rng d(number range) x(how many times)`\nExample: `k!rng d20 x8`\nNote: x\'s number cannot be more than 10');
	}
	else if (msg.content.startsWith(`${pre}rng d`)) {
		let x = msg.content.substring(7, msg.content.length);
		let y = msg.content.substring(9 + x.length, msg.content.length);
		x = msg.content.substring(7, msg.content.length - y.length - 3);
		y = msg.content.substring(8 + x.length, msg.content.length);
		if (x.includes(' ')) {
			x = x.replace(' ', '');
		}
		else if (y.includes('x')) {
			y = y.replace('x', '');
		}
		else if (typeof x !== 'number') {
			x = Number(x);
		}
		if (y > 10) {
			msg.channel.send('Too many generations :triumph::triumph:');
		}
		else if (x.includes('-')) {
			msg.channel.send('That\'s not a positive number smarty');
		}
		else {
			const getDSix = (min, max) => {
				max = Number(x);
				min = 1;
				return Math.random() * (max - min) + min;
			};
			if (y > 0 && y < 2) {
				msg.channel.send(`:1234: **| Rolling the ${x}-sided dice...**`);
			}
			else if (y < 11 && y > 1) {
				msg.channel.send(`:1234: **| Rolling the ${x}-sided dice ${y} times...**`);
			}
			else if (x.includes('-')) {
				x = x.replace('-', '');
			}
			setTimeout(() => {
				let i;
				for (i = 0; i < Number(y); i++) {
					msg.channel.send('> ' + Math.round(getDSix()));
				}
			}, 1500);
		}
	}
});

// Annoying DadBot-like replies
client.on('message', msg => {
	if (msg.author.bot) return;
	if (msg.content.includes('im ')) {
		const x = msg.content.substring(msg.content.indexOf('im ') + 3, msg.content.length);
		msg.channel.send(`hi ${x}, im king kong`);
	}
});

// LaTeX
client.on('message', msg => {
	if (msg.author.bot) return;
	if (msg.content === 'k!tex') {
		msg.channel.send('**Incorrect syntax!** Correct Syntax:\n`k!tex (LaTeX Syntax)`\nExample: `k!tex \\int_2^5 x^x~dx`\nNote: Try not to leave too much spaces as it can cause an error ;)');
	}
	else if (msg.content.startsWith(`${pre}tex `)) {
		let x = msg.content.substring(6, msg.content.length);
		msg.channel.send(`:100: **| LaTeX Equation of** \`${x}\``);
		if (x.includes(' ')) {
			let counter0;
			for (counter0 = 0; counter0 < x.split(' ').length; counter0++) {
				x = x.replace(' ', '&space;');
			}
		}
		msg.channel.send(`https://latex.codecogs.com/png.latex?\\dpi{200}&space;\\bg_white&space;\\huge&space;${x}`);
	}
});

// Calculator
client.on('message', msg => {
	if (msg.content.startsWith(`${pre}calc `)) {
		let x = msg.content.substring(7, msg.content.length);
		msg.channel.send(`:moyai: | What's ${x}?`);
		if (x.includes(' ')) {
			let counter0;
			for (counter0 = 0; counter0 < x.split(' ').length; counter0++) {
				x = x.replace(' ', '');
			}
		}
		if (x.includes('+')) {
			x = x.split('+');
			const a = +x[0];
			const b = +x[1];
			if (isNaN(a)) {
				msg.channel.send(`> Syntax Error! ${a} is not a number!`);
			}
			else if (isNaN(b)) {
				msg.channel.send(`> Syntax Error! ${b} is not a number!`);
			}
			else {
				const c = a + b;
				msg.channel.send(`> ${c}`);
			}
		}
		if (x.includes('-')) {
			x = x.split('-');
			const a = +x[0];
			const b = +x[1];
			if (isNaN(a)) {
				msg.channel.send(`> Syntax Error! ${a} is not a number!`);
			}
			else if (isNaN(b)) {
				msg.channel.send(`> Syntax Error! ${b} is not a number!`);
			}
			else {
				const c = a - b;
				msg.channel.send(`> ${c}`);
			}
		}
		if (x.includes('*')) {
			x = x.split('*');
			const a = +x[0];
			const b = +x[1];
			if (isNaN(a)) {
				msg.channel.send(`> Syntax Error! ${a} is not a number!`);
			}
			else if (isNaN(b)) {
				msg.channel.send(`> Syntax Error! ${b} is not a number!`);
			}
			else {
				const c = a * b;
				msg.channel.send(`> ${c}`);
			}
		}
		if (x.includes('/')) {
			x = x.split('/');
			const a = +x[0];
			const b = +x[1];
			if (isNaN(a)) {
				msg.channel.send(`> Syntax Error! ${a} is not a number!`);
			}
			else if (isNaN(b)) {
				msg.channel.send(`> Syntax Error! ${b} is not a number!`);
			}
			else {
				const c = a / b;
				msg.channel.send(`> ${c}`);
			}
		}
	}
	else if (msg.content === `${pre}calc`) {
		msg.channel.send('**Incorrect syntax!** Correct Syntax:\n`k!calc (number)(order of operation)(number)`\nExample: `k!calc 2+5` or `k!calc 60/77`\nNote: You can only use a single order of operation or else it won\'t work');
	}
});

// JFF Images
client.on('message', msg => {
	if (msg.content === 'kevin') {
		const attachment = new Discord.Attachment('./images/god.png');
		msg.channel.send(attachment);
	}
	else if (msg.content === 'KEVIN') {
		const attachment0 = new Discord.Attachment('./images/god2.png');
		msg.channel.send(attachment0);
	}
	else if (msg.content === 'le monke') {
		const attachment1 = new Discord.Attachment('./images/lem.png');
		msg.channel.send(attachment1);
	}
});

// Manual Message
client.on('ready', () => {
	const generalChannel = client.channels.get('605026238805049354');
	generalChannel.send('***oh no i am turning to a king ko-HUHUHUHUHUHU***');
});

// Playing status
client.on('ready', () => {
	client.user.setActivity('k!help', { type: 'PLAYING' });
	const quotes = ['online', 'idle', 'dnd'];
	const getDSix = (min, max) => {
		max = quotes.length - 1;
		min = 0;
		return Math.round(Number(Math.random() * (max - min) + min));
	};
	client.user.setStatus(quotes[getDSix()]);
});

// VC
client.on('message', message => {
	if (!message.guild) return;
	if (message.content === 'speaking kong') {
		if (message.member.voiceChannel) {
			message.member.voiceChannel.join()
				.then(connection => {
					const dispatcher = connection.playFile('C:/something/my-bot/audio/kk.mp3');
					dispatcher.on('end', () => {
						message.guild.me.voiceChannel.leave();
					});
				})
				.catch(console.log);
		}
	}
	else if (message.content === 'verbalase') {
		if (message.member.voiceChannel) {
			message.member.voiceChannel.join()
				.then(connection => {
					const dispatcher = connection.playFile('C:/something/my-bot/audio/yea.mp3');
					dispatcher.on('end', () => {
						message.guild.me.voiceChannel.leave();
					});
				})
				.catch(console.log);
		}
	}
	else if (message.content === 'water level') {
		if (message.member.voiceChannel) {
			message.member.voiceChannel.join()
				.then(connection => {
					const dispatcher = connection.playFile('C:/something/my-bot/audio/under.mp3');
					dispatcher.on('end', () => {
						message.guild.me.voiceChannel.leave();
					});
				})
				.catch(console.log);
		}
	}
	else if (message.content === 'bruh sound effect #2') {
		if (message.member.voiceChannel) {
			message.member.voiceChannel.join()
				.then(connection => {
					const dispatcher = connection.playFile('C:/something/my-bot/audio/bruh.mp3');
					dispatcher.on('end', () => {
						message.guild.me.voiceChannel.leave();
					});
				}).catch(console.log);
		}
	}
});

// (Dis)connection
client.on('message', message => {
	if (message.content === `${pre}join`) {
		message.member.voiceChannel.join();
	}
});
client.on('message', message => {
	if (message.content === `${pre}disc`) {
		message.guild.me.voiceChannel.leave();
	}
});

// Avatar
client.on('message', message => {
	if (message.content === `${pre}avatar`) {
		message.channel.send(`:frame_photo: | **${message.author}'s Profile Picture:**\n${message.author.avatarURL}`);
	}
});

// Welcoming
client.on('guildMemberAdd', member => {
	member.guild.channels.get('436529831233191956').send(`Welcome ${member}! Your awesome Jungle Adventure starts now! 🦍`);
});

// Embed Stuff
client.on('message', message => {
	if (message.content === `${pre}pinfo`) {
		const colors = [0xfa1c0c, 0xfa970c, 0xf6fa0c, 0x67fa0c, 0x0cfac6, 0x0cdefa, 0x0c83fa, 0x200cfa, 0x6b0cfa, 0xde0cfa, 0xfa0c67];
		const getDSix = (min, max) => {
			max = colors.length - 1;
			min = 0;
			return Math.random() * (max - min) + min;
		};
		const rng = Math.round(Number(getDSix()));
		const embed = new Discord.RichEmbed()
			.setTitle(`${message.author.username}'s Profile`)
			.setAuthor(`${message.author.username}`, `${message.author.avatarURL}`)
			// Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
			.setColor(colors[rng])
			// .setDescription('This is the main body of text, it can hold 2048 characters.')
			.setFooter('All information has been gathered from the official Discord API', 'https://dl1.cbsistatic.com/i/2019/01/22/8afbc04b-5543-49de-acf5-0b15f4c18236/7da246efbb1d9ec0be6f08c1026aafe5/imgingest-3295306694453319429.png')
			.setThumbnail(`${message.author.avatarURL}`)
			// .setImage('URL here')
			// .setTimestamp()
			// .setURL('https://discord.js.org/#/docs/main/indev/class/RichEmbed')
			.addField('User ID', `${message.author.id}`)
			.addField('Account Date', `Created at ${message.author.createdAt}`, true)
			// .addBlankField()
			.addField('Latest Message', `${message.author.lastMessage}`, true)
			// .addBlankField()
			.addField('Presence', `Playing ${message.author.presence.game}, ${message.author.presence.status}`, true)
			.addField('User Tag', `${message.author.tag}`)
			.addField('Verified?', `${message.author.verified}`);

		message.channel.send(embed);
	}
});
