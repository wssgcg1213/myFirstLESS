function $(id){return document.getElementById(id)}
	if(!document.getElementsByClassName){ 									//IE6
		document.getElementsByClassName = function(c){
        	var tags = document.getElementsByTagName("*"),
        	    result = new Array(),
        	    pattern = new RegExp("\\b"+c+"\\b","i");                    //pattern = new RegExp("\\b"+c+"(?!\\w)","i");
         	       for(var i=0; i<tags.length; i++)
        	                if(pattern.test(tags[i].className))result.push(tags[i]);
        	        return result;
        }
	}
var cells = document.getElementsByClassName("cell"),
	over = $("over"),
	prevButton = $("left"),
	nextButton = $("right");
	handle = {
	pos : 0,
	intPx : 140,
	liNum : cells.length,
	next : function(){
		 	if(!(this.pos<0&&this.pos>=4-cells.length))return;
			this.pos++;
			over.style.left = this.pos*this.intPx +"px";

		},
	prev : function(){
			if(!(this.pos<=0&&this.pos>4-cells.length)) return;
			this.pos--;
			over.style.left = this.pos*this.intPx +"px";
		}
	}

	function next(){handle.next()}
	function prev(){handle.prev()}

	if(prevButton.addEventListener){
		prevButton.addEventListener('click',prev,false);
		nextButton.addEventListener('click',next,false);
	}else{																	//IE
		prevButton.attachEvent('onclick',prev);
		nextButton.attachEvent('onclick',next);
	}

