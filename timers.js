var waitTime = 7540,
    currentTime = 0,
    waitInterval = 750,
    percentWaited = 0;
    
    var wait = () => {
        process.stdout.clearLine();
        process.stdout.cursorTo(0);
        percentWaited = Math.floor((currentTime/waitTime) * 100);
        process.stdout.write(`Waiting ${(currentTime += waitInterval)/1000} seconds,`);
        //process.stdout.clearLine();
         process.stdout.write(`\n This is ${percentWaited}% of your total wait.`);
    };
    var ending = () => {
        clearInterval(intervalHandle);
         process.stdout.clearLine();
        process.stdout.cursorTo(0);
        process.stdout.write('   All Done');
        process.exit();
    };
    var intervalHandle = setInterval(wait, waitInterval);
    setTimeout(ending, waitTime);