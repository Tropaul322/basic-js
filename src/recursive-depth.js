module.exports = class DepthCalculator {
    
    calculateDepth(arr){ 
        var tmp=1 ;           
        for (var i=0; i<arr.length; i++){
            var v = 1;
            if (Array.isArray(arr[i])){
                v += this.calculateDepth(arr[i]);
                    if (tmp < v){
                        tmp = v;
                    }
                }
            }
            return tmp;
        }
};
