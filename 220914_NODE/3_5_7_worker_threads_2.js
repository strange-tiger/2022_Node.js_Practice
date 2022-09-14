const {
    Worker, isMainThread, parentPort, 
} = require('worker_threads');

let count = 0

if(isMainThread) {      // 부모일 때
    const worker = new Worker(__filename);
    worker.on('message', message => console.log('from worker', message));
    worker.on('exit', () => {
        console.log('worker exit');
        clearInterval(interval);
    });
    const interval = setInterval(() => worker.postMessage(count++), 10);
} else {                // 워커일 때
    parentPort.on('message', (value) => {
        console.log('from parent', value);
        parentPort.postMessage(count++);
        if (count > 3)
        {
            parentPort.close();
        }
    });
}