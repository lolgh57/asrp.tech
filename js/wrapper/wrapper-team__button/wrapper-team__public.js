var wrapperTeamPublic = document.querySelector('.wrapper-team__public');
var publicChainTop = document.querySelector('.wrapper-team__public-chain-top');
var publicChainLineFirst = document.querySelector('.wrapper-team__public-chain-line-first');
var publicChainDoubleFirst = document.querySelector('.wrapper-team__public-chain-double-first');
var publicChainLineSecond = document.querySelector('.wrapper-team__public-chain-line-second');
var publicChainDoubleSecond = document.querySelector('.wrapper-team__public-chain-double-second');
var publicChainLineThirt = document.querySelector('.wrapper-team__public-chain-line-thirt');
var publicChainDoubleThirt = document.querySelector('.wrapper-team__public-chain-double-thirt');
var publicChainLineFive = document.querySelector('.wrapper-team__public-chain-line-five');
var publicChainBottom = document.querySelector('.wrapper-team__public-chain-bottom');
var publicNumberFifteen = document.querySelector('.wrapper-team__public-number-fifteen');



wrapperTeamPublic.addEventListener('mouseover', function() {
        publicNumberFifteen.classList.add('wrapper-team__public-number-fifteen_colored');
        setTimeout(chainColored, 1000);
        function chainColored () {
            publicChainTop.classList.add('wrapper-team__public-chain-top_colored');
            publicChainLineSecond.classList.add('wrapper-team__public-chain-line-second_colored');
            publicChainDoubleSecond.classList.add('wrapper-team__public-chain-double-second_colored');
            publicChainLineThirt.classList.add('wrapper-team__public-chain-line-thirt_colored');
            publicChainBottom.classList.add('wrapper-team__public-chain-bottom_colored');
            
            publicChainLineFirst.classList.add('wrapper-team__public-chain-line-first_colored');
            publicChainDoubleFirst.classList.add('wrapper-team__public-chain-double-first_colored');
            publicChainDoubleThirt.classList.add('wrapper-team__public-chain-double-thirt_colored');
            publicChainLineFive.classList.add('wrapper-team__public-chain-line-five_colored');
            
            setTimeout(chainColoredRemove, 15000);
            function chainColoredRemove () {
                publicChainTop.classList.remove('wrapper-team__public-chain-top_colored');
                publicChainLineSecond.classList.remove('wrapper-team__public-chain-line-second_colored');
                publicChainDoubleSecond.classList.remove('wrapper-team__public-chain-double-second_colored');
                publicChainLineThirt.classList.remove('wrapper-team__public-chain-line-thirt_colored');
                publicChainBottom.classList.remove('wrapper-team__public-chain-bottom_colored');

                publicChainLineFirst.classList.remove('wrapper-team__public-chain-line-first_colored');
                publicChainDoubleFirst.classList.remove('wrapper-team__public-chain-double-first_colored');
                publicChainDoubleThirt.classList.remove('wrapper-team__public-chain-double-thirt_colored');
                publicChainLineFive.classList.remove('wrapper-team__public-chain-line-five_colored');
                
                publicNumberFifteen.classList.remove('wrapper-team__public-number-fifteen_colored');
            }
        }
        
    });

wrapperTeamPublic.addEventListener('click', function() {
                publicChainTop.classList.add('wrapper-team__public-chain-top_pushed');
                publicChainLineSecond.classList.add('wrapper-team__public-chain-line-second_pushed');
                publicChainDoubleSecond.classList.add('wrapper-team__public-chain-double-second_pushed');
                publicChainLineThirt.classList.add('wrapper-team__public-chain-line-thirt_pushed');
                publicChainBottom.classList.add('wrapper-team__public-chain-bottom_pushed');

                publicChainLineFirst.classList.add('wrapper-team__public-chain-line-first_pushed');
                publicChainDoubleFirst.classList.add('wrapper-team__public-chain-double-first_pushed');
                publicChainDoubleThirt.classList.add('wrapper-team__public-chain-double-thirt_pushed');
                publicChainLineFive.classList.add('wrapper-team__public-chain-line-five_pushed');
                
                setTimeout(chainPushedRemove, 5000);
                function chainPushedRemove () {
                    publicChainTop.classList.remove('wrapper-team__public-chain-top_pushed');
                    publicChainLineSecond.classList.remove('wrapper-team__public-chain-line-second_pushed');
                    publicChainDoubleSecond.classList.remove('wrapper-team__public-chain-double-second_pushed');
                    publicChainLineThirt.classList.remove('wrapper-team__public-chain-line-thirt_pushed');
                    publicChainBottom.classList.remove('wrapper-team__public-chain-bottom_pushed');

                    publicChainLineFirst.classList.remove('wrapper-team__public-chain-line-first_pushed');
                    publicChainDoubleFirst.classList.remove('wrapper-team__public-chain-double-first_pushed');
                    publicChainDoubleThirt.classList.remove('wrapper-team__public-chain-double-thirt_pushed');
                    publicChainLineFive.classList.remove('wrapper-team__public-chain-line-five_pushed');
                }
    });