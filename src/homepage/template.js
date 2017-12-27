
//Diseño que tendra cada pagina y en esta que se quiere requerir,
// como otros arhivos que invoque una funcion la cual recibe un 
//parametro y este sea llamada en otra paginación.
var yo = require('yo-yo');
var layout = require('../layout')

var template = yo`<div class="container timeline">
	<div class="row">
		<div class="col s12 m10 offset-m1 l6 offset-l3">
			 <p>content</p>
		</div>
	</div>
</div>`
module.exports = layout(template);