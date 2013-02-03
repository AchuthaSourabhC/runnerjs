var childProcess = require('child_process')
	, ex1, ex2, exefile = '', compilecmd = ''
	, runcmd = '';

function Runner(code, input, output){
	this.code = code;
	this.input = input;
	this.output = output;
}

Runner.prototype.run = function(){
	exefile = this.code.split('.')[0];
	compilecmd = 'g++ -o ' + exefile + ' ' + this.code;
	runcmd = exefile + '.exe' + ' < ' + this.input + ' > ' + this.output;
	cmd =runcmd + ' , ' + compilecmd;
	ex1 = childProcess.exec(cmd,
			function (error, stdout, stderr, runcmd) {
				if (error) {
				  console.log(error.stack);
				  console.log('Error code: '+error.code);
				  console.log('Signal received: '+error.signal);
				}
				console.log('Child Process STDOUT: '+stdout);
				console.log('Child Process STDERR: '+stderr);
			});
    ex1.on('exit',function(error){
        console.log('Process exited with error status: '+error);
    });
}
module.exports = Runner;
