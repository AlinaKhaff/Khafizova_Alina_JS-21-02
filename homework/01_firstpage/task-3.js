const initTaskthree1 = function getNumFibonachi(index) {
    
    const fibonachiRecursion = (index) => {
        if (index === 0) {
            return [0, 1];
        }

        let [prevVal, nextVal] = fibonachiRecursion(index - 1);
        return [nextVal, prevVal + nextVal];
    };

    return fibonachiRecursion(index)[0];
}

const initTaskthree2 = function getNumFibonachiCache() {
    const cacheObj = {};

    function fibonachiCacheRecursion (index) {
        if(cacheObj[index] !== undefined) {
            console.log("Возврат из кэша");
            return cacheObj[index];
        } else {
            console.log("Запись в кэш");
            return cacheObj[index] = index > 1 ?
                fibonachiCacheRecursion(index - 1) + fibonachiCacheRecursion(index - 2) : index;
        }
    }

    return fibonachiCacheRecursion;
}();