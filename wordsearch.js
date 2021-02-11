const reverseArrayElements = function(array) {
    for (i = 0; i < array.length; i++) {
        array[i].reverse()
    }
    return array
}

const diagonalArrayLR = function(array) {
    let Ylen = array.length;
    let Xlen = array[0].length;
    let maxLength = Math.max(Ylen, Xlen)
    let newArr = []
    for (let i = 0 ; i <= 2 * (maxLength - 1); i++) {
        let temp = [];
        for (let j = Ylen - 1; j >= 0; j--) {
            let k = i - j
            if (k >= 0 && k < Xlen) {
                temp.push(array[j][k])
            }
        }
        if (temp.length > 0) {
            newArr.push(temp)
        }
    }
    let flattenArr = newArr.map(x => x.join(''))
    return flattenArr
}

const diagonalArrayRL = function(array) {
    let Ylen = array.length;
    let Xlen = array[0].length;
    let maxLength = Math.max(Ylen, Xlen)
    let newArr = []
    for (let i = 0 ; i <= 2 * (maxLength - 1); i++) {
        let temp = [];
        for (let j = Ylen - 1; j >= 0; j--) {
            let k = i - j
            if (k >= 0 && k < Xlen) {
                temp.push(array[k][j])
            }
        }
        if (temp.length > 0) {
            newArr.push(temp)
        }
    }
    let flattenArr = newArr.map(x => x.join(''))
    return flattenArr
}


const transpose = function(array) {
 return array[0].map((_, index) => array.map(row => row[index]))
  
}

const wordSearch = (letters, word) => {

    if (letters.length === 0 && word.length === 0) {
        return true
    }

    if (letters.length === 0) {
        return false
    }

    const horizontalJoin = letters.map(ls => ls.join(''))

    for (let l of horizontalJoin) {
        if (l.includes(word)) return true
    }

    let transposed = transpose(letters)
  
    const verticalJoin = transposed.map(ls => ls.join(''))
    for (lett of verticalJoin) {
        if (lett.includes(word)) return true
    }

    const horizontalJoinRev = reverseArrayElements(letters).map(ls => ls.join(''))
    for (let l of horizontalJoinRev) {
        if (l.includes(word)) return true
    }

    const verticalJoinRev = reverseArrayElements(transposed).map(ls => ls.join(''))
    for (let l of verticalJoinRev) {
        if (l.includes(word)) return true
    }

    let diagKeyLR = diagonalArrayLR(horizontalJoin)
    for (l of diagKeyLR) {
        if (l.includes(word)) return true
    }
    let diagKeyRL = diagonalArrayRL(horizontalJoin)
    for (l of diagKeyRL) {
        if (l.includes(word)) return true
    }

    return false
}

module.exports = wordSearch
