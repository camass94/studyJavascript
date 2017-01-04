;(function(){
    var gnb = document.getElementById("gnb");
    var gnbDepth1 = gnb.children;

    for(i=0;i<gnbDepth1.length;i++) {
    	if(gnbDepth1[i].getElementsByTagName("ul").length!== 0) {
    		addClass(gnbDepth1[i],'hasChild');
    	}
    	gnbDepth1[i].children[0].onmouseover = function() {
    		addClass(event.target.parentElement,'hover')

    	}
    	gnbDepth1[i].onmouseleave = function() {
    		removeClass(event.target,'hover')

    	}
    }

    

    function addClass(element, className) { element.className += " " + className; };
    function removeClass(element, className) { var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');element.className=element.className.replace(reg,' '); };
 
 
}());
