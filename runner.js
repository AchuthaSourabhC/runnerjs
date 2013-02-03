var childProcess = require('child_process')
	, async = require('async')
	, ex1,ex2;

exports.run = function(){
    ex1 = childProcess.exec('g++ -o test test.cpp',
        function (error, stdout, stderr) {
            if (error) {
              console.log(error.stack);
              console.log('Error code: '+error.code);
              console.log('Signal received: '+error.signal);
            }
            console.log('Child Process STDOUT: '+stdout);
            console.log('Child Process STDERR: '+stderr);
            ex2 = childProcess.exec('test.exe < input.txt > output.txt',
                function (error, stdout, stderr) {
                    if (error) {
                      console.log(error.stack);
                      console.log('Error code: '+error.code);
                      console.log('Signal received: '+error.signal);
                    }
                    console.log('Child Process STDOUT: '+stdout);
                    console.log('Child Process STDERR: '+stderr);
                    });
            ex2.on('exit',function(error){
                console.log('Process exited with error status: '+error);
            });
        });
    ex1.on('exit',function(error){
        console.log('Process exited with error status: '+error);
    });
}
