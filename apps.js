var col = 3;
var row = 3;

// draw
function render(){
    // how to create an element in jquery :
    // 1. create 3 rows and append them to #tic tac toe.
for(var i = 0; i < row; i++){
   var r = $('<div>', {
        class : 'row',
        title : 'Tic Box'
    })
    r.appendTo('#tic-tac-toe')

    for(var j = 0; j < col; j++){
        // code that runs 3*3 times
        $('<div>', {
            class: 'col box', 
            click: tic,
            id: i + '' +  j,   
          }).appendTo(r);
    }
    }
}
render();

// storing in the memory
var current_turn = 'X'; // could also be O

// play the current turn
function tic(){
    if(check_for_win() == true){
        alert("Restart the game to continue.");
        return;
    }

    var content = $(this).html();
    //alert(content);
    // or X or O
    //console.log(current_turn)
    if(! content){
    // play the move 
    $(this).html(current_turn);
   //alert(current_turn);
   // select the clicked element 
   
   check_for_win();

   change_turn();

} else{
    alert("An invalid move !");
}
    is_legal_move();
}

tic();

function is_legal_move(){
    return (content == '')
}

function check_for_win(){
// how to set test for win in the first row :
    var b00 = $('#00').html(); // get the text of the 00 element
    var b01 = $('#01').html(); // get the text of the 00 element
    var b02 = $('#02').html(); // get the text of the 00 element
    var b10 = $('#10').html(); // get the text of the 00 element
    var b11 = $('#11').html(); // get the text of the 00 element
    var b12 = $('#12').html(); // get the text of the 00 element
    var b20 = $('#20').html(); // get the text of the 00 element       // (like arr[0][1])
    var b21 = $('#21').html(); // get the text of the 00 element 
    var b22 = $('#22').html(); // get the text of the 00 element
    
    if(b00 == b01 && b00 == b02 && b00 != ''){
        alert("You Won !");
        return true;
    }

    else if(b10 == b11 && b10 == b12 && b10 != ''){
        alert("You Won !");
        return true;
    }

    else if(b20 == b21 && b20 == b22 && b20 != ''){
        alert("You Won !");
        return true;
    }

    else if(b00 == b10 && b00 == b20 && b00 != ''){
        alert("You Won !");
        return true;
    }

    else if(b01 == b11 && b01 == b21 && b01 != ''){
        alert("You Won !");
        return true;
    }

    else if(b02 == b12 && b02 == b22 && b02 != ''){
    alert("You Won !");
        return true;
}

else if(b00 == b11 && b00 == b22 && b00 != ''){
    alert("You Won !");
        return true;
}

else if( b20 == b11 && b20 == b02 && b20 != ''){
    alert("You Won !");
        return true;
}else{
    return false;
}
}

function change_turn(){

    // change the memory
    if(current_turn == 'X'){
        current_turn = 'O';
    } else if(current_turn == 'O'){
        current_turn = 'X';
    }
}

function resize(){
    // get the height :
   // $('.box').height();

    // get the width :
    //$('.box').width();

    // set the height :
    //$('.box').height(300);

    // all together now :
    var width = $('.box').width() // 198
    $('.box').height(width);

    // and the cool kids who know it all, would say : one liner :
    //$('.box').width($('.box').height());
}
resize();

// that's how you make your grid (site etc...) responsive
$(window).resize(resize);

function reset(){
    $('.box').html('');
}

/*for(var a = 0; a < row; a++){
    for(var b = 0; b < col; b++){
       $('<img>', { src: 'movies/1.jpg', width: 100}).appendTo('body');
    }
     $('<br>').appendTo('body');
}*/
