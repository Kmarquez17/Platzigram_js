var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/', function (ctx, next) {
  title('Platzigram');
  var main = document.getElementById('main-container');

  var pictures = [
  	{
  		user:{
  			username: 'Kevin',
  			avatar: 'https://scontent.fmga2-1.fna.fbcdn.net/v/t1.0-9/13178985_986721878072500_655539480996127349_n.jpg?oh=93bc18796f85886646ec6290811737ac&oe=5AB080CB'
  		},
  		url: 'https://scontent.fmga2-1.fna.fbcdn.net/v/t1.0-9/13178985_986721878072500_655539480996127349_n.jpg?oh=93bc18796f85886646ec6290811737ac&oe=5AB080CB',
  		likes: 2,
  		liked:true
  	},
  	{
  		user:{
  			username: 'Alberto',
  			avatar: 'https://scontent.fmga2-1.fna.fbcdn.net/v/t1.0-9/13177645_986721941405827_6565890482379551510_n.jpg?oh=2acd8aa4358072dddfe79b05e8c95c68&oe=5AC35F0C'
  		},
  		url: 'https://scontent.fmga2-1.fna.fbcdn.net/v/t1.0-9/13177645_986721941405827_6565890482379551510_n.jpg?oh=2acd8aa4358072dddfe79b05e8c95c68&oe=5AC35F0C',
  		likes: 10,
  		liked:true
  	}
  ];

  empty(main).appendChild(template(pictures));
})
