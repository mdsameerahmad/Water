const { spawn } = require('child_process');
const fs = require('fs');

const logStream = fs.createWriteStream('debug_log.txt');

const build = spawn('npm.cmd', ['run', 'build'], {
    stdio: ['ignore', 'pipe', 'pipe'],
    shell: true
});

build.stdout.pipe(logStream);
build.stderr.pipe(logStream);

build.on('close', (code) => {
    console.log(`Build process exited with code ${code}`);
    logStream.end();
});
