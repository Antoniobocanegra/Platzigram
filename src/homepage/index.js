var page = require('page');
var empty = require('empty-element');
var template = require ('./template');
var title = require('title');



page('/', function (ctx, next) {
	title('Platzigram');
	var main = document.getElementById('main-container');

	var pictures = [
		{
			user: {
				username: 'slifszyc',
				avatar: 'https://pbs.twimg.com/profile_images/948403774380527621/qahQC5cM_400x400.jpg'
			},
			url: 'office.jpg',
			likes: 0,
			liked: false,
			createdAt: new Date() 

		},

		{
			user: {
				username: 'slifszyc',
				avatar: 'https://pbs.twimg.com/profile_images/948403774380527621/qahQC5cM_400x400.jpg'
			},
			url: 'office.jpg',
			likes: 1,
			liked: true,
			createdAt: new Date().setDate(new Date().getDate() - 10)

		},
	];

	empty(main).appendChild(template(pictures));
})