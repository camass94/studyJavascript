;(function(){
    var gnb = document.getElementById("gnb");
    var gnbDepth1 = gnb.children;

    for(var i=0,len=gnbDepth1.length;i<len;i++) {
    	if(gnbDepth1[i].getElementsByTagName("ul").length!== 0) {
    		addClass(gnbDepth1[i],'hasChild');
    	}

        
        listenEvent(gnbDepth1[i].children[0],["mouseover","focus"],function( ) {
            for(var j=0,len2=gnbDepth1.length;j<len;j++) {
                removeClass(gnbDepth1[j],'hover');
            }
            
            addClass(event.target.parentElement,'hover');
        });

       
    }

    
    function listenEvent(eventTarget, eventType, eventHandler) {
        if(Array.isArray(eventType)) {
            for(var i=0, len= eventType.length;i<len;i++) {
                eventTarget.addEventListener(eventType[i],eventHandler);
            }
        }
    }
    function addClass(element, className) { element.className += " " + className; };
    function removeClass(element, className) { var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');element.className=element.className.replace(reg,''); };
 
 
}());
