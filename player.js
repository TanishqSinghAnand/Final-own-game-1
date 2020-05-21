class Form{
	constructor(){
		this.input = createInput("Username");
		this.submit = createButton("Submit");
	}

	display(){
		this.input.position(70,2410);
		this.submit.position(185,2440);
	}

	hidef(){
		if(gamestate === 0){
			this.submit.mousePressed(()=>{
					this.input.hide() ;
					this.submit.hide() ;
					gamestate = 1 ;
			});
		
				if(keyCode === 13){
					this.input.hide() ;
					this.submit.hide() ;
					gamestate = 1 ;
				}
			}
		if(gamestate === 1){
			text("Hello , "+this.input + ". Do u Know why is this lockdown because of ??",advisor.x-279,advisor.y);
			console.log(this.input.val());
		}
	}
}