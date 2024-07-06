var wrapperTeamEducation = document.querySelector('.wrapper-team__education');
var teamEducationCircleFirst = document.querySelector('.wrapper-team__education-circle-first');
var teamEducationCircleSecond = document.querySelector('.wrapper-team__education-circle-second');
var teamEducationCircleThirt = document.querySelector('.wrapper-team__education-circle-thirt');
var teamEducationFace = document.querySelector('.wrapper-team__education-face');
var teamEducationFaceLeftSide = document.querySelector('.wrapper-team__education-face-left-side');
var teamEducationEye = document.querySelector('.wrapper-team__education-eye');
var teamEducationNumberTwentyTwo = document.querySelector('.wrapper-team__education-number-twentytwo');


wrapperTeamEducation.addEventListener('mouseover', function() {
        teamEducationCircleFirst.classList.add('wrapper-team__education-circle-first_colored');
        teamEducationCircleSecond.classList.add('wrapper-team__education-circle-second_colored');
        teamEducationCircleThirt.classList.add('wrapper-team__education-circle-thirt_colored');
        teamEducationFace.classList.add('wrapper-team__education-face_colored');
        teamEducationNumberTwentyTwo.classList.add('wrapper-team__education-number-twentytwo_colored');
        setTimeout(wrapperTeamEducationColoredRemove, 15000);
        function wrapperTeamEducationColoredRemove () {
            teamEducationCircleFirst.classList.remove('wrapper-team__education-circle-first_colored');
            teamEducationCircleSecond.classList.remove('wrapper-team__education-circle-second_colored');
            teamEducationCircleThirt.classList.remove('wrapper-team__education-circle-thirt_colored');
            teamEducationFace.classList.remove('wrapper-team__education-face_colored');
            teamEducationNumberTwentyTwo.classList.remove('wrapper-team__education-number-twentytwo_colored');
        }
    });

wrapperTeamEducation.addEventListener('click', function() {
        teamEducationCircleFirst.classList.add('wrapper-team__education-circle-first_shaked');
        teamEducationCircleSecond.classList.add('wrapper-team__education-circle-second_shaked');
        teamEducationCircleThirt.classList.add('wrapper-team__education-circle-thirt_shaked');
        teamEducationFace.classList.add('wrapper-team__education-face_shaked');
        teamEducationFaceLeftSide.classList.add('wrapper-team__education-face-left-side_shaked');
        teamEducationEye.classList.add('wrapper-team__education-eye_shaked');
        setTimeout(wrapperTeamEducationAnimationRemove, 1200);
        function wrapperTeamEducationAnimationRemove() {
            teamEducationCircleFirst.classList.remove('wrapper-team__education-circle-first_shaked');
            teamEducationCircleSecond.classList.remove('wrapper-team__education-circle-second_shaked');
            teamEducationCircleThirt.classList.remove('wrapper-team__education-circle-thirt_shaked');
            teamEducationFace.classList.remove('wrapper-team__education-face_shaked');
            teamEducationFaceLeftSide.classList.remove('wrapper-team__education-face-left-side_shaked');
            teamEducationEye.classList.remove('wrapper-team__education-eye_shaked');
        }
    });