module.exports = function calculateHanoi(diskNumber, turnsSpeed) {
    var x = {};
    x['turns'] = Math.pow(2, diskNumber)-1;
    x['seconds'] = (x['turns'] / (turnsSpeed/3600));
    return x;
}
