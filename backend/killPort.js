const { exec } = require('child_process');
exec('netstat -ano | findstr :5000', (err, stdout, stderr) => {
    if (err) {
        console.error('No process on 5000 found or error.');
        process.exit(0);
    }
    console.log(stdout);
    const lines = stdout.trim().split('\n');
    lines.forEach(line => {
        const parts = line.trim().split(/\s+/);
        const pid = parts[parts.length - 1];
        if (pid && pid !== '0') {
            console.log(`Killing PID: ${pid}`);
            exec(`taskkill /F /PID ${pid}`);
        }
    });
});
