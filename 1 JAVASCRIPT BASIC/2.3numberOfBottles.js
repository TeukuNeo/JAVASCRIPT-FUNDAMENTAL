
// Program looping while
// melakukan Loop dari nilai 99 sampai 0
function beer(){
    let numberOfBottles = 99
    while (numberOfBottles >= 0) {

    let bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");

}
}beer()
