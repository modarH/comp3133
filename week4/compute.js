const longComp = () => {
    let sem = 0;
    for (let i = 0; i < 1e9; i++){
        sum += i;
    };
    return sum;
};

process.on('message', message => {
    const result = longComp();
    process.send(result);
});