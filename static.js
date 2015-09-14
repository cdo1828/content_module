var fs = require('fs');
var path = require('path');

module.exports = function(request, response){
	if(request.url === '/'){
		fs.readFile('./views/index.html','utf8',function(errors,contents){
			response.write(contents);
			response.end();
		})
	} else if(request.url === '/favicon.ico'){
		response.writeHead(200, {'Content-type': 'image/x-icon'});
		response.end();
		return;
	}
		else {
		fs.readFile('.'+path.dirname(request.url)+'/'+path.basename(request.url), function(errors,contents){
			response.write(contents);
			response.end();
		})
	}	
};