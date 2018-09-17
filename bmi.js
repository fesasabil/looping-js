function berat(bb,tb) {
    var bmi = bb / (tb/100 * tb/100)
    console.log(bmi);
    
    if (bmi < 17) {
        return "Kurus";
    } else if (bmi < 23) {
        return "Normal";
    } else if (bmi < 27) {
        return "Kegemukan";
    } else if (bmi > 27) {
        return "Obesitas";
    } else {
        return "Data tidak valid";
    }
}
console.log(berat(53,164));
