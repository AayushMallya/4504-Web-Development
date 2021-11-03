window.addEventListener("load", removeHideButton);

window.onload = function(){
document.getElementById("highlight").addEventListener("click", function(){highlightNodesButtonEvent(document.body)});
document.getElementById("hide").addEventListener("click", hideHighlightButtonEvent);
}

/**
 * Hides the 'Hide Highlight' button
 * */
function removeHideButton(){
	document.getElementById("hide").style.display = "none";
}

/**
 * Hides the 'Highlight Nodes' button
 * */
function removeHighlightButton(){
	document.getElementById("highlight").style.display = "none";
}

/**
 * Shows the 'Hide Highlight' button
 * */
function showHideButton(){
	document.getElementById("hide").style.display = "block";
}

/**
 * Shows the 'Highlight Nodes' button
 * */
function showHighlightButton(){
	document.getElementById("highlight").style.display = "block";
}

/**
 * Creates and appends new child node as a 'span'
 * Creates event listener for new child
 * */
function createSpan(element){
	var spanChild = document.createElement("span");
	spanChild.className = "hoverNode";
	element.appendChild(spanChild);
	spanChild.innerText = spanChild.parentNode.tagName;
	spanChild.addEventListener("click", function(){spanAlert(element)});
}

/**
 * Alert for when user clicks on new span
 * */
function spanAlert(element){
	alert("Tag Name: " + element.tagName + "\nClass: " + element.className + "\nID: " + element.id +  "\nInnerHTML: " + element.innerHTML);
}



/**
 * Handler for Highlight Nodes
 * Recursively navigates DOM when 'Highlight Nodes' Event is triggered
 * */
function highlightNodesButtonEvent(nodes){

	removeHighlightButton();
	showHideButton();
	let nodeArray = nodes.childNodes;
	for(var i = 0; i < nodeArray.length; i++){
		if(nodeArray[i].nodeType == 1){	
			highlightNodesButtonEvent(nodeArray[i]);	
			createSpan(nodeArray[i]);
			
		}
	}
		
}

/**
 * Event for when 'Hide Highlight' button is pressed
 * Removes all span elements with class 'hoverNode'
 * */
function hideHighlightButtonEvent(){
	document.querySelectorAll(".hoverNode").forEach(element => element.remove());
	removeHideButton();
	showHighlightButton();	

}