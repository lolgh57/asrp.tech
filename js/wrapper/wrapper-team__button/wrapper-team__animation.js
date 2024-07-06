var wrapperTeamAnimation = document.querySelector('.wrapper-team__animation');
var animationBrainLeft = document.querySelector('.wrapper-team__animation-brain-left');
var animationBrainRight = document.querySelector('.wrapper-team__animation-brain-right');
var animationNumberFirstF = document.querySelector('.wrapper-team__animation-number-firstF');
var animationNumberFirstS = document.querySelector('.wrapper-team__animation-number-firstS');
var animationNumberFirstT = document.querySelector('.wrapper-team__animation-number-firstT');


wrapperTeamAnimation.addEventListener('click', function() {
            animationNumberFirstF.classList.add('wrapper-team__animation-number-firstF_colored');
            animationNumberFirstS.classList.add('wrapper-team__animation-number-firstS_colored');
            animationNumberFirstT.classList.add('wrapper-team__animation-number-firstT_colored');
            setTimeout(NumberFirstFstPush, 1000);
            function NumberFirstFstPush () {
                animationBrainLeft.classList.add('wrapper-team__animation-brain-left_blured');
                animationNumberFirstF.classList.add('wrapper-team__animation-number-firstF_pushed');
                animationNumberFirstS.classList.add('wrapper-team__animation-number-firstS_pushed');
                animationNumberFirstT.classList.add('wrapper-team__animation-number-firstT_pushed');
                setTimeout(animationBrainRightColored, 500);
                function animationBrainRightColored () {
                    animationBrainRight.classList.add('wrapper-team__animation-brain-right_colored');
                    setTimeout(wrapperTeamAnimationRestore, 5000);
                    function wrapperTeamAnimationRestore () {
                        animationBrainLeft.classList.remove('wrapper-team__animation-brain-left_blured');
                        animationNumberFirstF.classList.remove('wrapper-team__animation-number-firstF_pushed');
                        animationNumberFirstS.classList.remove('wrapper-team__animation-number-firstS_pushed');
                        animationNumberFirstT.classList.remove('wrapper-team__animation-number-firstT_pushed');
                    }
                }
            }
    });

wrapperTeamAnimation.addEventListener('mouseover', function() {
            animationNumberFirstF.classList.add('wrapper-team__animation-number-firstF_colored');
            animationNumberFirstS.classList.add('wrapper-team__animation-number-firstS_colored');
            animationNumberFirstT.classList.add('wrapper-team__animation-number-firstT_colored');
            animationBrainRight.classList.add('wrapper-team__animation-brain-right_colored');
            setTimeout(wrapperTeamAnimationColoredRemove, 15000);
                    function wrapperTeamAnimationColoredRemove () {
                        animationNumberFirstF.classList.remove('wrapper-team__animation-number-firstF_colored');
                        animationNumberFirstS.classList.remove('wrapper-team__animation-number-firstS_colored');
                        animationNumberFirstT.classList.remove('wrapper-team__animation-number-firstT_colored');
                        animationBrainRight.classList.remove('wrapper-team__animation-brain-right_colored');
                    }
    });