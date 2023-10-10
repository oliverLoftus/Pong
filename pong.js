//calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
    var width = 700;
    var height = 50;
    var objWidth = 10;
    var batMargin = 50;
    var batHeight = 60;
    var bat1Y = 200;
    var bat2Y = 200;
    var batSpeed = 0.1;
    
    
    var ballX = parseInt(width/2);
    var ballY = parseInt(height/2);
    var vectorX = 2;
    var vectorY = 1;
    var ball = document.getElementById('ball');
    var bat1 = document.getElementById('bat1');
    var bat2 = document.getElementById('bat2');
    var t = setInterval(move, 10);
    
    bat1.style.left = batMargin+'px';
    bat2.style.left = (width-batMargin-objWidth)+'px';

    function move(){
        moveBall();
        moveBat1();
        moveBat2();
    }
  
    function moveBall(){
        ballX += vectorX;
        ballY += vectorY;
        ball.style.left = ballX+'px';
        ball.style.top = ballY+'px';

        if(ballX>630 || ballX<60) {
            bounceX();
        }
        if(ballY>490 || ballY<0) {
            bounceY();
        }
    }

    function moveBat1(){
        bat1.style.top = bat1Y-30+'px';
        if(ballY < 470 && ballY > 30 && vectorX < 0)
        {   
            if(bat1Y > ballY){
                bat1Y-=(bat1Y-ballY)*batSpeed;
            }
            if(bat1Y < ballY){
                bat1Y+=(ballY-bat1Y)*batSpeed;
            }
        }
    }

    function moveBat2(){
        bat2.style.top = bat2Y-30+'px';
        if(ballY < 470 && ballY > 30 && vectorX > 0)
        {   
            if(bat2Y > ballY){
                bat2Y-=(bat2Y-ballY)*batSpeed;
            }
            if(bat2Y < ballY){
                bat2Y+=(ballY-bat2Y)*batSpeed;
            }
        }
    }


    function bounceX(){
        vectorX = -vectorX;
    }
    function bounceY(){
        vectorY = -vectorY;
    }
};