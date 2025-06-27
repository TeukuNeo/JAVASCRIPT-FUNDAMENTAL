
let sentence = "The quick brown fox jumped over the lazy dog";
let words  = sentence.split(" ")
for(let i = 0; i < words.length; ++i){
    console.log("word " + i + ": " + words[i])
}

// the output of code is
// word 0: The
// word 1: quick
// word 2: brown
// word 3: fox
// word 4: jumped
// word 5: over
// word 6: the
// word 7: lazy
// word 8: dog

