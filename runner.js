var childProcess = require('child_process')
	, async = require('async')
	, ex1,ex2;

exprots.run = function(){
    ex1 = childProcess.exec('pwd',
        function (error, stdout, stderr) {
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
