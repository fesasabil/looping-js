for(var tahun = 1980; tahun <= 2018; tahun +=4) {
    console.log(tahun + " - Tahun kabisat");
}


function tahunkabisat(angka) {
    if (angka % 4 === 0) {
        console.log(angka + " ini tahun kabisat");
    }
    else {
        console.log(angka + " ini bukan tahun kabisat");
    }
}
console.log(tahunkabisat(2010));
