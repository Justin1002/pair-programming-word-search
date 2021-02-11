var array = ["ABC","DEF","GHI"];

var Ylength = array.length;
var Xlength = array[0].length;
var maxLength = Math.max(Xlength, Ylength);
var temp;
var newArr = []
for (var k = 0; k <= 2 * (maxLength - 1); ++k) {  
  temp = [];
    for (var y = Ylength - 1; y >= 0; --y) {
        var x = k - y;
        if (x >= 0 && x < Xlength) {
            temp.push(array[x][y]);
        }
      }
  if (temp.length > 0) {
  newArr.push(temp)
  }
}
let newNewArr = newArr.map(ls => ls.join(''))


console.log(newNewArr)
