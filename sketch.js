var player;
var advisor;
var canvas ;
let score ;
var back = "black";
let gamestate = 0;
var form ;
function setup(){
    canvas = createCanvas(600,600);
    player = createSprite(50,350,50,50);
    advisor = createSprite(350,50,50,50);
    form = new Form();
}

function draw(){
    background("green");
    textSize(12);
    fill(rgb(255,100,150));
    if(gamestate === 0 /*&& mousePressedOver !== sbutton */){
	    text("Hey , I am your advisor throught the game . ",advisor.x-279,advisor.y);
	    text("Please enter your name below and click submit",advisor.x-279,advisor.y+15);
   		form.display();
   		form.hidef();
    }
    
    //console.log(gamestate);



    drawSprites();
}
