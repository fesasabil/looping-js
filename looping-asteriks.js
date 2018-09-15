//Menyusun bintang
var rows1;
var counterRows1;

rows1 = 5;
counterRows1 = 0;
while (counterRows1<rows1) {
    console.log('*');
    counterRows1++;
}


//Menyusun bintang dengan nested
var rows2 = 5;

var a=0;
while (a<rows2) {
    var asteriks = '*';
    var j =1;
    while (j<rows2) {
    asteriks = asteriks + '*';
    j++;
}
console.log(asteriks);
a++;
}


// menyusun bintang tangga tiga
var rows3 = 5;
var initial = 1;
var i = 0;

while (i<rows3) {
    var pyramid = '*';
    var b=0;
while (b<i) {
    pyramid = pyramid + '*';
    b++;
}
    console.log(pyramid);
    i++;
}