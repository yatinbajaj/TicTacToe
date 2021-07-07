$(document).ready(function () {
    
    var move = 1;
    var play = true;
    $('table tr td').click(function () {
        if ($(this).text() == "" && play) {
            if (move % 2 == 1) {
                $(this).append("X");
                $(this).css('color', '#61892f')
            } else {
                $(this).append('O');
                $(this).css('color', '#e85a4f')
            }
        
            //calling functionn to find winner.......
            if (findwinner() != -1 && findwinner() != "") {
                if (findwinner() == "X") {
                    $("div").text("Winner is X");
                    $('body').append('<button onclick="location.reload()">Play Again</button>');
                    $('.winner').css('background-color', '#61892f')
                    $('button').css('color', '#61892f')
                
                } else {
                    $("div").text("Winner is 0");
                    $('body').append('<button onclick="location.reload()">Play Again</button>');
                    $('.winner').css('background-color', '#e85a4f')
                    $('button').css('color', '#e85a4f')
                }

                play = false;
            }
            //to pint draw match
            else if (move == 9) {
                $('body').append('<button onclick="location.reload()">Play Again</button>');
            }
            move++;
        }
    })
})
function findwinner() {
    var sp1 = $('table tr:nth-child(1) td:nth-child(1)').text(); 
    var sp2 = $('table tr:nth-child(1) td:nth-child(2)').text(); 
    var sp3 = $('table tr:nth-child(1) td:nth-child(3)').text(); 
    var sp4 = $('table tr:nth-child(2) td:nth-child(1)').text(); 
    var sp5 = $('table tr:nth-child(2) td:nth-child(2)').text(); 
    var sp6 = $('table tr:nth-child(2) td:nth-child(3)').text(); 
    var sp7 = $('table tr:nth-child(3) td:nth-child(1)').text(); 
    var sp8 = $('table tr:nth-child(3) td:nth-child(2)').text(); 
    var sp9 = $('table tr:nth-child(3) td:nth-child(3)').text();
    //check rows
    if ((sp1 == sp2) && (sp1 == sp3))
        return sp3;
    else if ((sp4 == sp5) && (sp4 == sp6))
        return sp6;
    else if ((sp7 == sp8) && (sp7 == sp9))
        return sp9;
     //check columns
    else if ((sp1 == sp4) && (sp1 == sp7))
        return sp7;
    else if ((sp2 == sp5) && (sp2 == sp8))
        return sp8;
    else if ((sp3 == sp6) && (sp3 == sp9))
        return sp9;
     //check diagonals   
    else if ((sp1 == sp5) && (sp1 == sp9))
        return sp9;
    else if ((sp3 == sp5) && (sp3 == sp7))
        return sp7;
    
    //no winner
    return -1;
        
}