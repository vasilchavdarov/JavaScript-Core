(function(arr) {
    let str = "";
    for (let item of arr) {

        let args = item.split(' ');
        switch (args[0]){
            case 'append':
                str += args[1];
                break;
            case 'removeStart':
                str = str.substring(args[1]);
                break;
            case 'removeEnd':
                str = str.substring(0, str.length - args[1]);
                break;
            case 'print':
                console.log(str);
                break;


        }
    }
})(['append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print']);


