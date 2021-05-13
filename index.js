const Discord = require('discord.js');
const client = new Discord.Client();

const token = 'ODQwOTcxMTE1MzM3MjIwMTA2.YJf9Yg.-VPF6b2verFDX5khEFgQJWsYhqc';
usedCommandRecently4 = new Set();

client.on('ready', () =>{
    console.log('gen bot is now online')
});

client.on("ready", () => {
    client.user.setPresence({
        game: { 
            name: '!help',
            type: 'WATCHING'
        },
        status: 'online'
    })
})

client.on('message', message =>{
    if (message.content === '!hello'){
        message.author.send('hi');
    };
});

client.on('message', message =>{
    if(message.content === '!help'){
    const exampleEmbed = new Discord.MessageEmbed()
	    .setColor('#0099ff')
	    .setTitle('Help')
	    .setURL('https://discord.gg/Swk78heZmQ')
	    .setAuthor('Slidan87#3959', 'https://cdn.discordapp.com/attachments/840985785275777035/841322533022335057/offer-you-cheap-discord-nitro-3-month-sub.jpg', 'https://discord.gg/Swk78heZmQ')
	    .setDescription('Commands')
	    .setThumbnail('https://cdn.discordapp.com/attachments/840985785275777035/841322533022335057/offer-you-cheap-discord-nitro-3-month-sub.jpg')
	    .addFields(
	    	{ name: 'Generator Commands', value: '!nitro, !disney, !steam' },
	    	{ name: '\u200B', value: '\u200B' },
	    	{ name: 'Bot System', value: '!ping', inline: true },
	    	{ name: 'Fun', value: '!hello', inline: true },
	    )
	    .setImage('https://cdn.discordapp.com/attachments/840985785275777035/841322533022335057/offer-you-cheap-discord-nitro-3-month-sub.jpg')
	    .setTimestamp()
	    .setFooter('Made by Slidan87#3959', 'https://cdn.discordapp.com/attachments/840985785275777035/841322533022335057/offer-you-cheap-discord-nitro-3-month-sub.jpg');

    message.channel.send(exampleEmbed);
    };
});

client.on('message', message => {
    if (message.content === '!ping'){   
      message.channel.send(`🏓ping is ${Date.now() - message.createdTimestamp}ms. API ping is ${Math.round(client.ws.ping)}ms`);
    }
});
client.on('message', message =>{
    if (!message.guild) return;
if (message.content === '!nitro'){
    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('There is a 5 Minute Colldown pls wait') 
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() => {
            usedCommandRecently4.delete(message.author.id);
        }, 300000)
    var string = `
    https://discord.gift/NVzRqDAQhsneIaFd
    https://discord.gift/Os7VkOf9AyVbJ5Rg
    https://discord.gift/9rtmYRi9f6ExJzEc
    https://discord.gift/ZmEIENDMMB9f0kiL
    https://discord.gift/BCijEt4xAv1S4kP6
    https://discord.gift/PfLngKkbhyzGnG0k
    https://discord.gift/0zUbeEfVQUwxA5Tl
    https://discord.gift/bmyUTQ7fcnE4hG2l
    https://discord.gift/ohAO6GqlJwyQUeVG
    https://discord.gift/pp1lf1c65Y0nMSRm
    https://discord.gift/7B3SjBPK8O8R1bJc
    https://discord.gift/w7d5y7kM8HPxYvio
    https://discord.gift/Z9RC8eg6adYNHrUz
    https://discord.gift/0HzZb9JlVUyoCnZo
    https://discord.gift/Vr6d2MPsft1dvNl9
    https://discord.gift/QbNnZiwIyr5G2RYf
    https://discord.gift/IeN4pHEWl46kZ0uU
    https://discord.gift/5LODHRTGvkAow42Q
    https://discord.gift/bbzBt1lHwK1znnS7
    https://discord.gift/mgzssFVh6zgG9Hm8
    https://discord.gift/2uTfwp2FGw4kuArN
    https://discord.gift/VG2jCaj3yeyydC8W
    https://discord.gift/4W7RPDqnpaTnMRj7
    https://discord.gift/w8D4qJ2ZObiSvb4S
    https://discord.gift/8z1k5j85F8WdAf3v
    https://discord.gift/7EXqPz1pNdtVO75J
    https://discord.gift/3EbUa1fMigVDScBN
    https://discord.gift/2ySgQJbXukor9neJ
    https://discord.gift/2uLRwXLy9jDNiRQn
    https://discord.gift/mzckZ592SmC89WBH
    https://discord.gift/LDwuA7PDu8vJ66ky
    https://discord.gift/9m0InFmJbWVmIy2P
    https://discord.gift/7i9IzI829IkGCmmK
    https://discord.gift/UBIKTSFdMj65PpvT
    https://discord.gift/uYqPHubvTPcvIvHL
    https://discord.gift/9adZR046EfNkEblt
    https://discord.gift/WMxv0h7RJmxM30Yr
    https://discord.gift/h8FtphNf3ifUKCHG
    https://discord.gift/YgrIHHiEdpVvivUS
    https://discord.gift/eUuY9jQkcFxclZKA
    https://discord.gift/k2qFe24tRfZPjNqq
    https://discord.gift/m7K1Gpm8S5ms5bp9
    https://discord.gift/n7NzoTvb3i53mdQH
    https://discord.gift/ZiI09qRENqx9qSRj
    https://discord.gift/kuDyUr9kFj4PeaWg
    https://discord.gift/xHVz9PQX6syXGAT3
    https://discord.gift/yGq3YJa82CcvSqXm
    https://discord.gift/Fg4ArbupHFudBXnU
    https://discord.gift/j34kMHmHBQqTBsVn
    https://discord.gift/gvlEeuG2fK5KDBv0
    https://discord.gift/1KdwNh2w56vX1R7x
    https://discord.gift/OzrcGDKNKdk0Wsh7
    https://discord.gift/vACscurzYXUrjGII
    https://discord.gift/kpCcHUS2YQ5dlv7G
    https://discord.gift/NvQwI3Nu25icGBuo
    https://discord.gift/pH1QNPpD8znBlVYo
    https://discord.gift/vgtUuRd65AP3IOWK
    https://discord.gift/AnZsiGDwnSqsLDUH
    https://discord.gift/G7uD5ckWEkiKCnkX
    https://discord.gift/Seu7TJ6AYxN5ZR8N
    https://discord.gift/aBZ1NaGoBCrkQyig
    https://discord.gift/bcFq2Qz0fwMD5jPw
    https://discord.gift/k7rCOzyL3PINQq8x
    https://discord.gift/09gkSKzIHIipCgUZ
    https://discord.gift/SEj8ePVbidrV8Ioi
    https://discord.gift/NAfRBymmlEVMDYQM
    https://discord.gift/BoY2UlRzmvtdhjUA
    https://discord.gift/iNJcp7MCoZyHGZnQ
    https://discord.gift/0PBAxVaV89r0GJtU
    https://discord.gift/5t7mFumvI9n6IpMr
    https://discord.gift/QXP4oLBint3p1Ixq
    https://discord.gift/WL6wegod4Fk7mnn7
    https://discord.gift/ZtmIiNfeqSaqUsDd
    https://discord.gift/VY2tGjvLkFSbWH5W
    https://discord.gift/7ZCEEKuEdGVSbHiC
    https://discord.gift/PCa1WcedfJJPpt3T
    https://discord.gift/hulB4cOfd0HOhJqp
    https://discord.gift/Au71gF0lxVYteSz8
    https://discord.gift/hYneF3LVUL9lNvvJ
    https://discord.gift/opa5rVBgAzFcCsW2
    https://discord.gift/GF3vLacjSzTKSVwy
    https://discord.gift/RFFo94Xx15n2JZAj
    https://discord.gift/PeMR6VKyi4oJN3fN
    https://discord.gift/aHR0lFwFgDUJj4Vr
    https://discord.gift/8LEmIX4QoW7x0jwU
    https://discord.gift/6MPscVRddHmkLySK
    https://discord.gift/YGYbpzYkkyjIUSvo
    https://discord.gift/9nstlL0cfvGMVfDM
    https://discord.gift/n8a8aHUkXTTEgi1d
    https://discord.gift/PsVd5dP0JunOYSRm
    https://discord.gift/OxAC3Tiw7gh4R1uB
    https://discord.gift/JATiGk1Ju82QaCa2
    https://discord.gift/r6aLWp3FxTQUdAz3
    https://discord.gift/S1VKeOZvvkgmL1lB
    https://discord.gift/oJs2WJgIaHJqun2r
    https://discord.gift/kwGpfw4OwCvJjLBb
    https://discord.gift/1jBub6rN1tmEd0u6
    https://discord.gift/UxpoqK8PRakhfOId
    https://discord.gift/wgi8baUJF01JGzMn
    https://discord.gift/Qur2s5rlAL1RWtnq
    https://discord.gift/wMehg51kjNFimNkJ
    https://discord.gift/rNEzc8xIb4Rmjf2S
    https://discord.gift/KbgBBGSMnC34YkRt
    https://discord.gift/RvIMTYiKElLQHsv6
    https://discord.gift/NF1dDjRYf7UY7rXH
    https://discord.gift/PbuSxchBHPvdrJRp
    https://discord.gift/FTviWnpacWiQPMiy
    https://discord.gift/TFdKUINsjic5mqIe
    https://discord.gift/2hrUskGLQX9SMj2o
    https://discord.gift/KBaL3RgOvvEXBtaI
    https://discord.gift/jof4lvTElFEqzcpk
    https://discord.gift/Yklemr25EnTBhBuJ
    https://discord.gift/NXSdhYrMZawJ3J2C
    https://discord.gift/Phi2CA4HWTcJOEuP
    https://discord.gift/xp8Keb2OM9nqqnmd
    https://discord.gift/yyAIK5TZc1OVD2yR
    https://discord.gift/Xg7YS3MNZ8Me9mL8
    https://discord.gift/LoNLCxXU5ixAs5Al
    https://discord.gift/0ume8dAHrfaX61gK
    https://discord.gift/UAEnd4Rsf7o6SJeq
    https://discord.gift/n6igis2a23Rag9FD
    https://discord.gift/ZZXTQf7sOg5Zr1zc
    https://discord.gift/H5ddeMECD7tbo9nA
    https://discord.gift/aeW7uWthsOp3x2Jf
    https://discord.gift/uPfkgpSGupESFGg0
    https://discord.gift/NFecszh7lqiclQZn
    https://discord.gift/pyxIkZNzphR2KI2K
    https://discord.gift/2Z1BGDw0GCm3ubyX
    https://discord.gift/WgpkwMVpsee3jdOs
    https://discord.gift/0WLwnOldsyWwdwxq
    https://discord.gift/g79NS103SydEOFs8
    https://discord.gift/n3gVs1mIgxqKveW5
    https://discord.gift/51mCJ6fPQgb7xbUH
    https://discord.gift/dvhDGYFgNGdULoIs
    https://discord.gift/jZz4GclsV0t8muAl
    https://discord.gift/PqU2pSAurToRBRB7
    https://discord.gift/OPKXXhA3KTu8lrKP
    https://discord.gift/aUcXqWvqpG7eA0qz
    https://discord.gift/jLP9ZogPddmCDCpx
    https://discord.gift/phs0geszcbEctatK
    https://discord.gift/c3lRHA9vSbMnG0eK
    https://discord.gift/GOOpYNJxMRkZPaus
    https://discord.gift/FMPzyJ3YIw9yZrdw
    https://discord.gift/Ccu4JyqPYTz8XY4E
    https://discord.gift/F5JRTYnaFC1Ekk0P
    https://discord.gift/CO1B2ZHAzjkk5qeA
    https://discord.gift/wNsezEaaSSUFb5es
    https://discord.gift/jNYO5HJ6tUKvoTWc
    https://discord.gift/6dRXtvY9gOD6HnBy
    https://discord.gift/T5kZlNqLKoZhFLXh
    https://discord.gift/szQAg1MXeYO8GvBb
    https://discord.gift/lnKQ5m5Io1zdE8TN
    https://discord.gift/1V0yA4ODAyOf87h5
    https://discord.gift/zhpgVESmatxaa4bs
    https://discord.gift/ffc8yIFYBLsJ6wPd
    https://discord.gift/gyEHd8quhDKAHfIE
    https://discord.gift/E5EpcCjjwFC16tJM
    https://discord.gift/wHKXPpaEBVeTORON
    https://discord.gift/kR4jSwP0EAklQ2vG
    https://discord.gift/lDrfneq65azpwG3v
    https://discord.gift/2SmPczo5WUlj2RoS
    https://discord.gift/CyCtglTIk0ChjZNf
    https://discord.gift/0JsewC8yqlLI08xK
    https://discord.gift/jo5UAFxAqEC4NccP
    https://discord.gift/hDTpwntlsypeO6t7
    https://discord.gift/XMWhNbsnWbom7vvp
    https://discord.gift/oS08UPzHfH1UhPor
    https://discord.gift/m21xi8HAw0pCQbgl
    https://discord.gift/52wNvQdJku0WZLOu
    https://discord.gift/P6XDVSEwHkVxSfyA
    https://discord.gift/sWrYqdwnRKnSYrao
    https://discord.gift/7lQT5WNvP5fGtuxw
    https://discord.gift/kWz2rDxa0IpPLlkx
    https://discord.gift/Kj3XpfZ5TXc2wYru
    https://discord.gift/GJRLgpsrhsPEK2qN
    https://discord.gift/xaPeH2dnypARJMFj
    https://discord.gift/z4vn3GbUhYKu2KPy
    https://discord.gift/gWKinIzRf6alvrme
    https://discord.gift/kmSUlFRJ5vhGTv45
    https://discord.gift/WRUnMkRqbPOPcAsY
    https://discord.gift/ieVG28YXy2TcAk88
    https://discord.gift/ETts9lzr4SXK12OQ
    https://discord.gift/ai0Ha1agcr3byM2d
    https://discord.gift/8uPnpJ8Bft0whyxb
    https://discord.gift/qf7csekRuXLzTQAy
    https://discord.gift/a6Kp8UjbKJCHxLBK
    https://discord.gift/vl5xRtaPR6it53pv
    https://discord.gift/WKXZbAHY9advfBuq
    https://discord.gift/N7UghnFlXPHSqfQk
    https://discord.gift/MIfhvXkE6drXb4LT
    https://discord.gift/5ADZBNFc0VzHLPPg
    https://discord.gift/xFjFgmyarfWd0Kzt
    https://discord.gift/yM1pUhNzQ57ksw0o
    https://discord.gift/UTYvDjE7jfRggSmb
    https://discord.gift/do2W3lPBlUjCO9Kw
    https://discord.gift/pM9Y9OKOoHCcqus4
    https://discord.gift/GDqUnAkafJ1JPguN
    https://discord.gift/mmlY55UkI1QmjYSK
    https://discord.gift/1FenXkJvKdz8KOmw
    https://discord.gift/dP6Bwu8zL6fRaPd3
    https://discord.gift/BEy71pOdgX2Dt8Sn
    https://discord.gift/kAdKba9MHeIHaSr5
    https://discord.gift/FCVnJcXOLD9xOmn3
    https://discord.gift/zu464GXi062Enb9c
    https://discord.gift/OyUcYVlbvnZlkrqF
    https://discord.gift/4qmqfaIgykAqxHwZ
    https://discord.gift/Nh1103psMdx0aYeT
    https://discord.gift/yubp64UmIsICQbVm
    https://discord.gift/pw5ljdpfdtlzylrn
    https://discord.gift/T4WBS79oRvhrhfwx
    https://discord.gift/0iuMnLjSPGuj4D3N
    https://discord.gift/KeivIcg9fCcbOXWI
    https://discord.gift/jdRYXAiwdQQ3ACDw
    https://discord.gift/t1mjouHosnm2OHfO
    https://discord.gift/q5qtcagR6xYK43ma
    https://discord.gift/hMvcfGXYDnZblYqC
    https://discord.gift/gXoroVbjVSaMuVll
    https://discord.gift/orc1o9YNokdfm0a2
    https://discord.gift/44PphjJq5rjHOaQa
    https://discord.gift/hWMzC69guWYsbQIO
    https://discord.gift/HkDv6rdxSnN70aLi
    https://discord.gift/UNmRD7FKp1XfuUGZ
    https://discord.gift/4Kk9mjffJjY355Wb
    https://discord.gift/a9NDIDP4CEeiuDt7
    https://discord.gift/ok5j9gyQKz8gSbCP
    https://discord.gift/eG4cCd0bkgn783Zj
    https://discord.gift/y0ieZ1YVP1usuQpu
    https://discord.gift/mthzmbCOdnBr9g99
    https://discord.gift/njRRxr0Nke5YvBH3
    https://discord.gift/1sQz8MLRMml9j6Fp
    https://discord.gift/1btBTTwmFYrDG3UT
    https://discord.gift/XjipZevQXB6CNjhU
    https://discord.gift/umPFBoX9pQeKSmwi
    https://discord.gift/qSbAVFYaKJjwpiZ4
    https://discord.gift/vxhWNJPDrUehydWV
    https://discord.gift/aJI2IeOUk0Rf4xJr
    https://discord.gift/YjwDAfl0suKcFaX5
    https://discord.gift/psltF4QlKxtD36KY
    https://discord.gift/R6jmd6XgB1obGESV
    https://discord.gift/DcR8ZieTyvzQxkJG
    https://discord.gift/xNH58K36pvWfsW7z
    https://discord.gift/biNGOyA9xdanpL2k
    https://discord.gift/s5DAXGxDZ31d2OG0
    https://discord.gift/yobEa3WyjEQw2glb
    https://discord.gift/VPUpCxw1DQY3vKqV
    https://discord.gift/WMxRgt0VPbeHsW6d
    https://discord.gift/HZPcatlJfTiEF1Wm
    https://discord.gift/40NXkLJJ4fYF7Sph
    https://discord.gift/uhTL6u1YSdWnbiMB
    https://discord.gift/a7JM5V4eCnwr612W
    https://discord.gift/O5TRTFQps3wLi5Re
    https://discord.gift/9vEaxbQvn5B5kNAh
    https://discord.gift/aI6CSzKJenoNIgJu
    https://discord.gift/Dir75wVFmLYglsSF
    https://discord.gift/RH614b2DwUcrJ0Uc
    https://discord.gift/G9v6OtzZGK6BIa6e
    https://discord.gift/vxbC8onchWK7OjQS
    https://discord.gift/UrJDAzn4q32X2KJA
    https://discord.gift/F0Qa27lHIDDfvczP
    https://discord.gift/9HAWs1GSj6HhE0BO
    https://discord.gift/V3cQNK8jcdBBI9Hz
    https://discord.gift/xqntE4KBBFLHyHJY
    https://discord.gift/6KXL8XSh6YPbBYq8
    https://discord.gift/80c1QHSy5ig5KE23
    https://discord.gift/YtLcUkQM70E4hZ8G
    https://discord.gift/ArSP9DOpoibUQsY6
    https://discord.gift/ZgkMpCfrEborsO6z
    https://discord.gift/BQ5a0fHMsvnemVPr
    https://discord.gift/aGV0wH6C1apw8k0O
    https://discord.gift/NNeXNQBFrpus0bAZ
    https://discord.gift/7ST5YUZFOtFwSotl
    https://discord.gift/fteZQ1zYLR8dj8t6
    https://discord.gift/xNhnznd9kL1mby1r
    https://discord.gift/P6Dgrzj6KQTBjIhg
    https://discord.gift/AtHU4O3lmQhPqcRQ
    https://discord.gift/eth8LfuM8WmzqZcN
    https://discord.gift/nDVdd3zpSx0FndpV
    https://discord.gift/Ze5ydsFSQphZK8LH
    https://discord.gift/Ocv3gGA1HyuwGyrC
    https://discord.gift/moYkenMqf5dbIOKd
    https://discord.gift/CBJrKEK3dSIvHAIh
    https://discord.gift/SBNF9lWCGDqGa5XK
    https://discord.gift/bv1ZzexBlF5gB7hW
    https://discord.gift/tEo5HxzvmH91e1t4
    https://discord.gift/lzWvlMOjEfYLmzKk
    https://discord.gift/yrqJJWYBnOFMblcG
    https://discord.gift/LRJMbziAaXarYOyH
    https://discord.gift/6gkligOHb333Mm4C
    https://discord.gift/xQkrmPf7EmSt2Q7f
    https://discord.gift/LgmnNZDO5LiXfdBX
    https://discord.gift/5HT1hMWc5bTadodW
    https://discord.gift/tGHUviWtGrmAZOzr
    https://discord.gift/IzcvfJSfMDtOdhiw
    https://discord.gift/wWaRXHIc2IqQFViB
    https://discord.gift/BtLpC91JKZjskx7v
    https://discord.gift/R2FxTeyxCaCC8xJ6
    https://discord.gift/ebbHbULohIrgD1Ji
    https://discord.gift/67rll96knIZDBmBE
    https://discord.gift/H7vzIPnAhuPeMHSk
    https://discord.gift/KuJatR4GydpKpRO7`
    var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
    message.author.send(`${random}`);
    message.channel.send('You have Recived a Code in your Dms!');
};
};
});
client.on('message', message =>{
    if (!message.guild) return;
if (message.content === '!disney'){
    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('There is a 5 Minute Colldown pls wait') 
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() => {
            usedCommandRecently4.delete(message.author.id);
        }, 300000)
    var string = `inflames99@gmail.com	987654321
    goodperson14@gmail.com	persian25
    fearlessfighter52@gmail.com	elizabethlove2255
    massivestroke44@gmail.com	massive44
    gravity245@gmail.com	9115425412
    slayer2451@gmail.com	francis47511
    legendarrow9@gmail.com	britmakos9
    nightm4re@gmail.com	johnnydeep4
    tit4niumjack@gmail.com	jackbestman4
    sepuLtura21@gmail.com	123456789
    crocodile5724@gmail.com	nusretsalt57
    forest3gump@gmail.com	gump35425
    revengelive5@gmail.com	live542154
    nicki2minaj2@gmail.com	ilov3you3nicki
    sirsilent@gmail.com	666666666
    etern4lgod@gmail.com	57god446523
    simplegame123@gmail.com	simple123
    hardgirl68@gmail.com	hard6868
    conqueror2020@gmail.com	imcorona
    r3surrection@gmail.com	123456789
    y0ungwolf@gmail.com	veronica0
    wrath958@gmail.com	isabell958
    silentdeath464@gmail.com	686432153542
    eaglepaw84@gmail.com	84eagle84
    fearless4@gmail.com	jackbrown77
    magician685@gmail.com	123456789
    inflames531@gmail.com	531531531
    ruling2020@gmail.com	20202020
    deathwarriror31@gmail.com	31313131
    soulfly1@gmail.com	sadsoul1
    thecrucial@gmail.com	8641286512ab
    unexpected546@gmail.com	123456789
    nameless2@gmail.com	bradd2254
    pronoble34@gmail.com	pro1234
    road65warriror@gmail.com	3584121341
    crescent745@gmail.com	05354412536
    madsad38@gmail.com	4651384234
    chasmface65@gmail.com	johnnyking5
    brooke342@gmail.com	64851325454
    alia1battle21@gmail.com	123456789
    allisonangel34@gmail.com	134angel
    amberjack67@gmail.com	123456789
    kratos241@gmail.com	kra24152
    annastefen9@gmail.com	anna99999
    badbunny911@gmail.com	6843546816
    bazookaman2@gmail.com	jack952145
    bestblade4@gmail.com	blade123
    captainp3roxide@gmail.com	123456789
    gameking99@gmail.com	99999999a
    commando2021@gmail.com	123456789
    crazyeights4@gmail.com	5641324165
    darksideorbit1@gmail.com	dark123321
    mbuziak@vols.utk.edu:melbaby1 | Disney+, Hulu, and ESPN+
    yesenia7gutierrez@gmail.com:Yesenia7 | Disney Plus Non-Recurring - US - Verizon
    mansfield.anissa@yahoo.com:06281995Am | Disney Plus Monthly with 7 Day Free Trial
    kaorihernandez99@gmail.com:bottlecap67 | Disney Plus Monthly - US - LG
    ritafiny@gmail.com:Maryjane21 | Disney Plus Monthly - US - Web 2021 updated
    ruby238s@gmail.com:lash2308 | Disney Plus Monthly with 7 Day Free Trial
    marie842002@yahoo.com:206209*Mv | Disney Plus Yearly Pre-Sales - US - Web
    lanytrag@gmail.com:Princess5 | Disney Plus Monthly with 7 day Free Trial
    noakley@earthlink.net:Oakley97 | Disney Plus Monthly With 7 Day FT
    egrisko@gmail.com:#2Lacrosse | Disney Plus Monthly with 7 Day Free Trial without human verification
    atoriato@yahoo.com:tyiasanaa05 | Disney Plus Monthly With 7 Day FT no surveys
    mkyrodriguez@gmail.com:6070718Mky305 | Disney Plus Monthly Pre-Sales - US - Web
    eneu@nnu.edu:mochaHorse#1 | Disney Plus Monthly with 7 Day Free Trial NO Survey
    sarah.helen91@gmail.com:Pura.vida1 | Disney Plus Non-Recurring - US - Verizon
    `
    var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
    message.author.send(`${random}`);
    message.channel.send('You have Recived a Account in your Dms!');
};
};
});
client.on('message', message =>{
    if (!message.guild) return;
if (message.content === '!steam'){
if (usedCommandRecently4.has(message.author.id)){
    message.channel.send('There is a 5 Minute Colldown pls wait') 
} else{
    usedCommandRecently4.add(message.author.id);
    setTimeout(() => {
        usedCommandRecently4.delete(message.author.id);
    }, 300000)
    var string = `
    inflames99@gmail.com	987654321
    goodperson14@gmail.com	persian25
    fearlessfighter52@gmail.com	elizabethlove2255
    massivestroke44@gmail.com	massive44
    gravity245@gmail.com	9115425412
    slayer2451@gmail.com	francis47511
    legendarrow9@gmail.com	britmakos9
    nightm4re@gmail.com	johnnydeep4
    tit4niumjack@gmail.com	jackbestman4
    sepuLtura21@gmail.com	123456789
    crocodile5724@gmail.com	nusretsalt57
    forest3gump@gmail.com	gump35425
    revengelive5@gmail.com	live542154
    nicki2minaj2@gmail.com	ilov3you3nicki
    sirsilent@gmail.com	666666666
    etern4lgod@gmail.com	57god446523
    simplegame123@gmail.com	simple123
    hardgirl68@gmail.com	hard6868
    conqueror2020@gmail.com	imcorona
    r3surrection@gmail.com	123456789
    y0ungwolf@gmail.com	veronica0
    wrath958@gmail.com	isabell958
    silentdeath464@gmail.com	686432153542
    eaglepaw84@gmail.com	84eagle84
    fearless4@gmail.com	jackbrown77
    magician685@gmail.com	123456789
    inflames531@gmail.com	531531531
    ruling2020@gmail.com	20202020
    deathwarriror31@gmail.com	31313131
    soulfly1@gmail.com	sadsoul1
    thecrucial@gmail.com	8641286512ab
    unexpected546@gmail.com	123456789
    nameless2@gmail.com	bradd2254
    pronoble34@gmail.com	pro1234
    road65warriror@gmail.com	3584121341
    crescent745@gmail.com	05354412536
    madsad38@gmail.com	4651384234
    chasmface65@gmail.com	johnnyking5
    brooke342@gmail.com	64851325454
    alia1battle21@gmail.com	123456789
    allisonangel34@gmail.com	134angel
    amberjack67@gmail.com	123456789
    kratos241@gmail.com	kra24152
    annastefen9@gmail.com	anna99999
    badbunny911@gmail.com	6843546816
    bazookaman2@gmail.com	jack952145
    bestblade4@gmail.com	blade123
    captainp3roxide@gmail.com	123456789
    gameking99@gmail.com	99999999a
    commando2021@gmail.com	123456789
    crazyeights4@gmail.com	5641324165
    darksideorbit1@gmail.com	dark123321
    mbuziak@vols.utk.edu:melbaby1 | Disney+, Hulu, and ESPN+
    yesenia7gutierrez@gmail.com:Yesenia7 | Disney Plus Non-Recurring - US - Verizon
    mansfield.anissa@yahoo.com:06281995Am | Disney Plus Monthly with 7 Day Free Trial
    kaorihernandez99@gmail.com:bottlecap67 | Disney Plus Monthly - US - LG
    ritafiny@gmail.com:Maryjane21 | Disney Plus Monthly - US - Web 2021 updated
    ruby238s@gmail.com:lash2308 | Disney Plus Monthly with 7 Day Free Trial
    marie842002@yahoo.com:206209*Mv | Disney Plus Yearly Pre-Sales - US - Web
    lanytrag@gmail.com:Princess5 | Disney Plus Monthly with 7 day Free Trial
    noakley@earthlink.net:Oakley97 | Disney Plus Monthly With 7 Day FT
    egrisko@gmail.com:#2Lacrosse | Disney Plus Monthly with 7 Day Free Trial without human verification
    atoriato@yahoo.com:tyiasanaa05 | Disney Plus Monthly With 7 Day FT no surveys
    mkyrodriguez@gmail.com:6070718Mky305 | Disney Plus Monthly Pre-Sales - US - Web
    eneu@nnu.edu:mochaHorse#1 | Disney Plus Monthly with 7 Day Free Trial NO Survey
    sarah.helen91@gmail.com:Pura.vida1 | Disney Plus Non-Recurring - US - Verizon
    `
    var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
    message.author.send(`${random}`);
    message.channel.send('You have Recived a Account in your Dms!');
};
};
});
client.login(token)