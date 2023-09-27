const L = 4;
const H = 5; 
const T = "E";
const ROW= [];
ROW[0] =" #  ##   ## ##  ### ###  ## # # ###  ## # # #   # # ###  #  ##   #  ##   ## ### # # # # # # # # # # ### ### "
ROW[1] ="# # # # #   # # #   #   #   # #  #    # # # #   ### # # # # # # # # # # #    #  # # # # # # # # # #   #   # "
ROW[2] ="### ##  #   # # ##  ##  # # ###  #    # ##  #   ### # # # # ##  # # ##   #   #  # # # # ###  #   #   #   ## "
ROW[3] ="# # # # #   # # #   #   # # # #  #  # # # # #   # # # # # # #    ## # #   #  #  # # # # ### # #  #  #       "
ROW[4] ="# # ##   ## ##  ### #    ## # # ###  #  # # ### # # # #  #  #     # # # ##   #  ###  #  # # # #  #  ###  #  "

//console.log(ROW);

function getPositionInAlphabet(letter) {
    const uppercaseLetter = letter.toUpperCase(); // Assurez-vous que la lettre est en majuscules
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const position = alphabet.indexOf(uppercaseLetter) + 1; // Ajoutez 1 pour obtenir la position réelle (1-indexed)
    
    return position;
}
  

const position = getPositionInAlphabet(T);
//console.log(position);
  


for (i = 0; i<H; i++){
    const debutIndex = L*position; // Index de départ (inclus)
    const finIndex = debutIndex + 4;  // Index de fin (exclus)
    const chaine = ROW[i];
    //console.log(chaine);
    const extrait = chaine.slice(debutIndex, finIndex);
    console.log(`${extrait}`);
}