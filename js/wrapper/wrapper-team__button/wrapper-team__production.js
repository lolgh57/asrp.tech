var wrapperTeamProduction = document.querySelector('.wrapper-team__production');
var productionBrainLeft = document.querySelector('.wrapper-team__production-brain-left');
var productionBrainRight = document.querySelector('.wrapper-team__production-brain-right');
var productionNumberOne = document.querySelector('.wrapper-team__production-number-one');
var nolivePrincipleFirst = document.querySelector('.wrapper-team__production-nolive-principle-first');
var nolivePrincipleSecond = document.querySelector('.wrapper-team__production-nolive-principle-second');


wrapperTeamProduction.addEventListener('click', function() {
            productionBrainLeft.classList.add('wrapper-team__production-brain-left_colored');
            productionBrainRight.classList.add('wrapper-team__production-brain-left_colored');
            productionNumberOne.classList.add('wrapper-team__production-number-one_colored');
            setTimeout(numberOnePush, 1000);
            function numberOnePush() {
                productionNumberOne.classList.add('wrapper-team__production-number-one_pushed');
                setTimeout(nolivePrinciplePush, 1000);
                function nolivePrinciplePush() {
                    productionNumberOne.classList.remove('wrapper-team__production-number-one_pushed');
                    nolivePrincipleFirst.classList.add('wrapper-team__production-nolive-principle-first_up');
                    nolivePrincipleSecond.classList.add('wrapper-team__production-nolive-principle-second_up');
                    nolivePrincipleSecond.classList.add('wrapper-team__production-nolive-principle-second_spined');
                    setTimeout(nolivePrinciplePull, 6000);
                    function nolivePrinciplePull() {
                        productionNumberOne.classList.add('wrapper-team__production-number-one_pushed');
                        nolivePrincipleFirst.classList.remove('wrapper-team__production-nolive-principle-first_up');
                        nolivePrincipleSecond.classList.remove('wrapper-team__production-nolive-principle-second_up');
                        nolivePrincipleSecond.classList.remove('wrapper-team__production-nolive-principle-second_spined');
                        setTimeout (numberOnePull, 500);
                        function numberOnePull() {
                            productionNumberOne.classList.remove('wrapper-team__production-number-one_pushed');
                            productionBrainLeft.classList.remove('wrapper-team__production-brain-left_colored');
                            productionBrainRight.classList.remove('wrapper-team__production-brain-left_colored');
                            productionNumberOne.classList.remove('wrapper-team__production-number-one_colored');
                        };
                    };
                };
            };
    });

wrapperTeamProduction.addEventListener('mouseover', function() {
            productionBrainLeft.classList.add('wrapper-team__production-brain-left_colored');
            productionBrainRight.classList.add('wrapper-team__production-brain-left_colored');
            productionNumberOne.classList.add('wrapper-team__production-number-one_colored');
            setTimeout(removeProductColored, 15000);
            function removeProductColored() {     
                productionBrainLeft.classList.remove('wrapper-team__production-brain-left_colored');
                productionBrainRight.classList.remove('wrapper-team__production-brain-left_colored');
                productionNumberOne.classList.remove('wrapper-team__production-number-one_colored');
                };
    });