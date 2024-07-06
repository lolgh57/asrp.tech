var teamScienceButton = document.querySelector('.wrapper-team__science');
var scienceBrainLeft = document.querySelector('.wrapper-team__science-brain-left');
var scienceBrainRight = document.querySelector('.wrapper-team__science-brain-right');
var scienceNumberFifteen = document.querySelector('.wrapper-team__science-number-fifteen');



teamScienceButton.addEventListener('mouseover', function() {
            scienceBrainLeft.classList.add('wrapper-team__science-brain-left_colored');
            scienceNumberFifteen.classList.add('wrapper-team__science-number-fifteen_colored');
            setTimeout(teamScienceButtonRemoveColored, 15000);
            function teamScienceButtonRemoveColored() {
                    scienceBrainLeft.classList.remove('wrapper-team__science-brain-left_colored');
                    scienceNumberFifteen.classList.remove('wrapper-team__science-number-fifteen_colored');
                    
            };
                
            
    });

teamScienceButton.addEventListener('click', function() {
            scienceBrainLeft.classList.add('wrapper-team__science-brain-left_colored');
            setTimeout(NumberFifteenPush, 1000);
            function NumberFifteenPush () {
                scienceBrainRight.classList.add('wrapper-team__science-brain-right_blured');
                scienceNumberFifteen.classList.add('wrapper-team__science-number-fifteen_pushed');
                setTimeout(teamScienceButtonRestore, 5000);
                    function teamScienceButtonRestore () {
                        scienceBrainLeft.classList.remove('wrapper-team__science-brain-left_colored');
                        scienceBrainRight.classList.remove('wrapper-team__science-brain-right_blured');
                        scienceNumberFifteen.classList.remove('wrapper-team__science-number-fifteen_pushed');
                    }
            
            }
    });