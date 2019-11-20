'use strict';
const alfy = require('alfy');
const alfredNotifier = require('alfred-notifier');

alfredNotifier();

alfy.output([
	{
		title: 'Google',
		subtitle: `https://zh.lmgtfy.me/?q=${encodeURI(alfy.input)}&pp=1`,
		arg: `https://zh.lmgtfy.me/?q=${encodeURI(alfy.input)}&pp=1`,
		quicklookurl: `https://zh.lmgtfy.me/?q=${encodeURI(alfy.input)}&pp=1`,
		icon: {
			type: "png",
			path: "google.png",
		},
	},
	{
		title: 'lmgtfy',
		subtitle: `https://zh.lmgtfy.me/?q=${encodeURI(alfy.input)}&pp=1&s=l`,
		arg: `https://zh.lmgtfy.me/?q=${encodeURI(alfy.input)}&pp=1&s=l`,
		quicklookurl: `https://zh.lmgtfy.me/?q=${encodeURI(alfy.input)}&pp=1&s=l`,
		icon: {
			type: "png",
			path: "lmgtfy.png",
		},
	},
	{
		title: 'Yahoo',
		subtitle: `https://zh.lmgtfy.me/?q=${encodeURI(alfy.input)}&pp=1&s=y`,
		arg: `https://zh.lmgtfy.me/?q=${encodeURI(alfy.input)}&pp=1&s=y`,
		quicklookurl: `https://zh.lmgtfy.me/?q=${encodeURI(alfy.input)}&pp=1&s=y`,
		icon: {
			type: "png",
			path: "yahoo.png",
		},
	},
	{
		title: 'Bing',
		subtitle: `https://zh.lmgtfy.me/?q=${encodeURI(alfy.input)}&pp=1&s=b`,
		arg: `https://zh.lmgtfy.me/?q=${encodeURI(alfy.input)}&pp=1&s=b`,
		quicklookurl: `https://zh.lmgtfy.me/?q=${encodeURI(alfy.input)}&pp=1&s=b`,
		icon: {
			type: "png",
			path: "bing.png",
		},
	},
	{
		title: 'Startpage',
		subtitle: `https://zh.lmgtfy.me/?q=${encodeURI(alfy.input)}&pp=1&s=t`,
		arg: `https://zh.lmgtfy.me/?q=${encodeURI(alfy.input)}&pp=1&s=t`,
		quicklookurl: `https://zh.lmgtfy.me/?q=${encodeURI(alfy.input)}&pp=1&s=t`,
		icon: {
			type: "png",
			path: "startpage.png",
		},
	},
	{
		title: 'Ask',
		subtitle: `https://zh.lmgtfy.me/?q=${encodeURI(alfy.input)}&pp=1&&s=k`,
		arg: `https://zh.lmgtfy.me/?q=${encodeURI(alfy.input)}&pp=1&&s=k`,
		quicklookurl: `https://zh.lmgtfy.me/?q=${encodeURI(alfy.input)}&pp=1&&s=k`,
		icon: {
			type: "png",
			path: "ask.png",
		},
	},
	{
		title: 'Aol',
		subtitle: `https://zh.lmgtfy.me/?q=${encodeURI(alfy.input)}&pp=1&s=a`,
		arg: `https://zh.lmgtfy.me/?q=${encodeURI(alfy.input)}&pp=1&s=a`,
		quicklookurl: `https://zh.lmgtfy.me/?q=${encodeURI(alfy.input)}&pp=1&s=a`,
		icon: {
			type: "png",
			path: "aol.png",
		},
	},
	{
		title: 'Duckduckgo',
		subtitle: `https://zh.lmgtfy.me/?q=${encodeURI(alfy.input)}&pp=1&s=d`,
		arg: `https://zh.lmgtfy.me/?q=${encodeURI(alfy.input)}&pp=1&s=d`,
		quicklookurl: `https://zh.lmgtfy.me/?q=${encodeURI(alfy.input)}&pp=1&s=d`,
		icon: {
			type: "png",
			path: "duckduckgo.png",
		},
	}
]);
