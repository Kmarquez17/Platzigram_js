var yo = require('yo-yo');
var layout = require('../layout')
 
module.exports = function(){
	var el = yo`<div class="chip">
    <img src="https://scontent.fmga2-1.fna.fbcdn.net/v/t1.0-9/13177645_986721941405827_6565890482379551510_n.jpg?oh=2acd8aa4358072dddfe79b05e8c95c68&oe=5AC35F0C" alt="Contact Person">
    Kevin Marquez
  </div>`

	return layout(el); 
}
