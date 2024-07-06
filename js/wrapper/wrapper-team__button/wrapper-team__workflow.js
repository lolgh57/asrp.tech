var wrapperTeamWorkflow = document.querySelector('.wrapper-team__workflow');
var workflowScrollLeft = document.querySelector('.wrapper-team__workflow-scroll-left');
var workflowScrollRight = document.querySelector('.wrapper-team__workflow-scroll-right');
var workflowScrollPaper = document.querySelector('.wrapper-team__workflow-scroll-paper');
var workflowSpiral = document.querySelector('.wrapper-team__workflow-spiral');
var workflowNumber = document.querySelector('.wrapper-team__workflow-number');

wrapperTeamWorkflow.addEventListener('mouseover', function() {
        workflowNumber.classList.add('wrapper-team__workflow-number_colored');
        setTimeout(workflowScrollColored, 750);
        function workflowScrollColored() {
            workflowScrollLeft.classList.add('wrapper-team__workflow-scroll-left_colored');
            workflowScrollRight.classList.add('wrapper-team__workflow-scroll-right_colored');
            workflowScrollPaper.classList.add('wrapper-team__workflow-scroll-paper_colored');
            setTimeout(workflowScrollColoredRemove, 15000);
            function workflowScrollColoredRemove () {    
                workflowNumber.classList.remove('wrapper-team__workflow-number_colored');
                workflowScrollLeft.classList.remove('wrapper-team__workflow-scroll-left_colored');
                workflowScrollRight.classList.remove('wrapper-team__workflow-scroll-right_colored');
                workflowScrollPaper.classList.remove('wrapper-team__workflow-scroll-paper_colored');
            }
        }
    });

wrapperTeamWorkflow.addEventListener('click', function() {
        workflowScrollLeft.classList.add('wrapper-team__workflow-scroll-left_pushed');
        setTimeout(workflowScrollPaperShow, 300);
        function workflowScrollPaperShow () {
            workflowScrollPaper.classList.add('wrapper-team__workflow-scroll-paper_pushed');
            setTimeout(workflowSpiralShow, 300);
            function workflowSpiralShow () {
                workflowSpiral.classList.add('wrapper-team__workflow-spiral_pushed');
                setTimeout(workflowSpiralColored,200);
                function workflowSpiralColored () {
                    workflowSpiral.classList.add('wrapper-team__workflow-spiral_colored');
                }
            }
        }
        setTimeout(wrapperTeamWorkflowAnimationRemove, 5500);
        function wrapperTeamWorkflowAnimationRemove () {
            workflowScrollPaper.classList.remove('wrapper-team__workflow-scroll-paper_pushed');
            workflowSpiral.classList.remove('wrapper-team__workflow-spiral_pushed');
            setTimeout(wrapperTeamWorkflowAnimationRemoveS, 500);
            function wrapperTeamWorkflowAnimationRemoveS () {    
                workflowScrollLeft.classList.remove('wrapper-team__workflow-scroll-left_pushed');
                workflowSpiral.classList.remove('wrapper-team__workflow-spiral_colored');
            }
        }
    });