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
			likes: 10,
			liked: false

		},

		{
			user: {
				username: 'slifszyc',
				avatar: 'https://pbs.twimg.com/profile_images/948403774380527621/qahQC5cM_400x400.jpg'
			},
			url: 'office.jpg',
			likes: 25,
			liked: true

		},
	];

	empty(main).appendChild(template(pictures));
})