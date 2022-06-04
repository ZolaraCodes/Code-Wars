function DNAStrand(dna){
    let sequence = {
       "A": "T",
       "T": "A",
       "G": "C",
       "C": "G"
     }
     return dna.replace(/A|T|G|C/g, function(matched){
       return sequence[matched];
     });
   }
   