module.exports = function transform(arr) {
    if(!Array.isArray(arr)) {
        throw 'Error';
    }
    if(arr == []) {
        return []
    }

    var newArr = [];
    var actions = [
        '--discard-next',
        '--discard-prev', 
        '--double-next',
        '--double-prev'
    ];
    var skipNext = false;
    for ( var i =0; i<arr.length; i++) {
        if(skipNext) {
            skipNext = false;
            continue;
        }
        if(arr[i] == actions[0]) {
            if(i+1 == arr.length) {continue};
            if(actions.includes(arr[i+1])) {
                continue
            } 
            skipNext = true;
        } 
        if (arr[i] == actions[1]) {
            if(i == 0) { continue};
            if(actions.includes(arr[i-1])) {
                continue;
            } 
            newArr.pop();
        }
        if (arr[i] == actions[2]) {
            if(i+1 == arr.length) {continue};
            if(actions.includes(arr[i+1])) {
                continue;
            } 
            newArr.push(arr[i+1])
        }
        if (arr[i] == actions[3]) {
            if(i == 0) { continue};
            if(actions.includes(arr[i-1])) {
                continue;
            } 
            newArr.push(arr[i-1])
        }
        if(!actions.includes(arr[i])) {newArr.push(arr[i])};
    }
    return newArr;
};
