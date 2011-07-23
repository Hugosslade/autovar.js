!function(){
	var a=document.getElementsByTagName("*"), i,e,n,w=window;
	for(i=0;i<a.length;i++){
		e=a[i];
		if(!!e.id){
			n=e.id.replace(/-([a-z])/gi, function(s, g) {
	   			return g.toUpperCase();
			})
			w[n]=$(e);
			if(e.nodeName=="CANVAS")
				w[n+"Context"]=e.getContext("2d");
		}	
	}
}()