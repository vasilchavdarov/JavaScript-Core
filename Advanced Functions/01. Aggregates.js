function aggregate(arr) {
    console.log('Sum = ' + arr.reduce((a,b) => a + b));
    console.log('Min = ' + arr.reduce((a,b) => Math.min(a,b)));
    console.log('Min = ' + arr.reduce((a,b) => Math.max(a,b)));
    console.log('Sum = ' + arr.reduce((a,b) => a * b));
    console.log('Sum = ' + arr.reduce((a,b) =>  '' + a + b));

}

aggregate([1,2,3,45]);