var arr = ["abcd","1234"];
var arrNew = [];

for (var i = 0; i < arr.length; i++) {
    var ii = arr[i].split("");

    bubbleSort(ii);

    var iiOff = ii.join('');
    arrNew.push(iiOff);
}
console.log(arrNew);

function bubbleSort(arr) {
    var temp;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}    
