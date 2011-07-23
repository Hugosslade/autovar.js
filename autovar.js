!function(window,autoVar,index,element,name){ //Anon function to not override or use incorrect variable values
	autoVar=document.getElementsByTagName("*"); //Get all elements
	for(index=0;element=autoVar[index++];){ //Go through them one by one
		name=element.id; //Store the id of the element
		if(!!name){ //if the element has an id then
			name=name.replace(/-([a-z])/gi, function(string, group) { //find all the hyphens in it
	   			return group.toUpperCase(); //strip them out and camel case the id
			})
			window[name]=$(element); //then wrap the element and store it under its new name (edit this line for other results)
			/*
				eg: window["$"+name]=$(element) //for the $ notation people
					window[name]=document.getElementById(element.id)
						- for this variation you can do a lot to minify the code
						- pass document in with window, add a variable before autoVar to store the document (d)
						- replace each occurence of 'document' with your variable (d)
						- change "name=element.id" to "element=element.id" (minify to e)
						- name=e.replace...
						- window[name]=document.getElementById(element.id)=>e=w[n]=d.getElementById(e);
						- pushing e back to itself allows the canvas hook to work
			*/
			if(element.nodeName=="CANVAS") //if the element is a canvas, get its 2d context (other options available, store contexts in loop, iterate and concat varname)
				window[name+"Context"]=element.getContext("2d");
		}	
	}
}(window) //pass in the window, less bytes than setting window inside (saves 2 bytes!)