var teamGeneticsButton = document.querySelector('.wrapper-team__genetics');
var dnaLeft = document.querySelector('.wrapper-team__dna-left');
var dnaRight = document.querySelector('.wrapper-team__dna-right');
var dnaStringFirst = document.querySelector('.wrapper-team__dna-string-first');
var dnaStringSecond = document.querySelector('.wrapper-team__dna-string-second');
var dnaStringThirt = document.querySelector('.wrapper-team__dna-string-thirt');
var dnaStringFour = document.querySelector('.wrapper-team__dna-string-four');
var dnaStringFive = document.querySelector('.wrapper-team__dna-string-five');
var dnaStringSix = document.querySelector('.wrapper-team__dna-string-six');


teamGeneticsButton.addEventListener('click', function() {
        dnaLeft.classList.add('wrapper-team__dna-left_pushed');
        dnaRight.classList.add('wrapper-team__dna-right_pushed');
        dnaStringFirst.classList.add('wrapper-team__dna-string-first_pushed');
        dnaStringSecond.classList.add('wrapper-team__dna-string-second_pushed');
        dnaStringThirt.classList.add('wrapper-team__dna-string-thirt_pushed');
        dnaStringFour.classList.add('wrapper-team__dna-string-four_pushed');
        dnaStringFive.classList.add('wrapper-team__dna-string-five_pushed');
        dnaStringSix.classList.add('wrapper-team__dna-string-six_pushed');
        
        setTimeout(dnaColored, 1500);
        function dnaColored() {
            dnaLeft.classList.add('wrapper-team__dna-left_colored');
            dnaRight.classList.add('wrapper-team__dna-right_colored');
            dnaStringFirst.classList.add('wrapper-team__dna-string-first_colored');
            dnaStringSecond.classList.add('wrapper-team__dna-string-second_colored');
            dnaStringThirt.classList.add('wrapper-team__dna-string-thirt_colored');
            dnaStringFour.classList.add('wrapper-team__dna-string-four_colored');
            dnaStringFive.classList.add('wrapper-team__dna-string-five_colored');
            dnaStringSix.classList.add('wrapper-team__dna-string-six_colored');
            
            setTimeout(dnaRemovePushed, 1500);
                function dnaRemovePushed() {
                    dnaLeft.classList.remove('wrapper-team__dna-left_pushed');
                    dnaRight.classList.remove('wrapper-team__dna-right_pushed');
                    dnaStringFirst.classList.remove('wrapper-team__dna-string-first_pushed');
                    dnaStringSecond.classList.remove('wrapper-team__dna-string-second_pushed');
                    dnaStringThirt.classList.remove('wrapper-team__dna-string-thirt_pushed');
                    dnaStringFour.classList.remove('wrapper-team__dna-string-four_pushed');
                    dnaStringFive.classList.remove('wrapper-team__dna-string-five_pushed');
                    dnaStringSix.classList.remove('wrapper-team__dna-string-six_pushed');
                };
            setTimeout(dnaRemoveColored, 15000);
                function dnaRemoveColored() {
                    dnaLeft.classList.remove('wrapper-team__dna-left_colored');
                    dnaRight.classList.remove('wrapper-team__dna-right_colored');
                    dnaStringFirst.classList.remove('wrapper-team__dna-string-first_colored');
                    dnaStringSecond.classList.remove('wrapper-team__dna-string-second_colored');
                    dnaStringThirt.classList.remove('wrapper-team__dna-string-thirt_colored');
                    dnaStringFour.classList.remove('wrapper-team__dna-string-four_colored');
                    dnaStringFive.classList.remove('wrapper-team__dna-string-five_colored');
                    dnaStringSix.classList.remove('wrapper-team__dna-string-six_colored');
                };
        };
    
        
    });


teamGeneticsButton.addEventListener('mouseover', function() {
            dnaLeft.classList.add('wrapper-team__dna-left_colored');
            dnaRight.classList.add('wrapper-team__dna-right_colored');
            dnaStringFirst.classList.add('wrapper-team__dna-string-first_colored');
            dnaStringSecond.classList.add('wrapper-team__dna-string-second_colored');
            dnaStringThirt.classList.add('wrapper-team__dna-string-thirt_colored');
            dnaStringFour.classList.add('wrapper-team__dna-string-four_colored');
            dnaStringFive.classList.add('wrapper-team__dna-string-five_colored');
            dnaStringSix.classList.add('wrapper-team__dna-string-six_colored');
            
            setTimeout(dnaRemoveColored, 15000);
                function dnaRemoveColored() {
                    dnaLeft.classList.remove('wrapper-team__dna-left_colored');
                    dnaRight.classList.remove('wrapper-team__dna-right_colored');
                    dnaStringFirst.classList.remove('wrapper-team__dna-string-first_colored');
                    dnaStringSecond.classList.remove('wrapper-team__dna-string-second_colored');
                    dnaStringThirt.classList.remove('wrapper-team__dna-string-thirt_colored');
                    dnaStringFour.classList.remove('wrapper-team__dna-string-four_colored');
                    dnaStringFive.classList.remove('wrapper-team__dna-string-five_colored');
                    dnaStringSix.classList.remove('wrapper-team__dna-string-six_colored');
                };
      
    
        
    });