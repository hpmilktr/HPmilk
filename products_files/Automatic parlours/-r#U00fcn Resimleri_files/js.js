nereidFadeObjects = new Object();
nereidFadeTimers = new Object();

function nereidFade(object, destOp, rate, delta){
if (!document.all)
return
    if (object != "[object]"){  //do this so I can take a string too
        setTimeout("nereidFade("+object+","+destOp+","+rate+","+delta+")",0);
        return;
    }
        
    clearTimeout(nereidFadeTimers[object.sourceIndex]);
    
    diff = destOp-object.filters.alpha.opacity;
    direction = 1;
    if (object.filters.alpha.opacity > destOp){
        direction = -1;
    }
    delta=Math.min(direction*diff,delta);
    object.filters.alpha.opacity+=direction*delta;

    if (object.filters.alpha.opacity != destOp){
        nereidFadeObjects[object.sourceIndex]=object;
        nereidFadeTimers[object.sourceIndex]=setTimeout("nereidFade(nereidFadeObjects["+object.sourceIndex+"],"+destOp+","+rate+","+delta+")",rate);
    }
}

function jumpTo(zipla_list)
{
var name = zipla_list.options[zipla_list.selectedIndex].value;
if (name != "")
	window.location=name;
}

function stopError() {
return true;
}
window.onerror = stopError;

function makevisible(cur,which){
if (which==0)
cur.filters.alpha.opacity=100
else
cur.filters.alpha.opacity=20
}

function clickIE() {
if (document.all) {
return false;
}

function stopError() {
return true;
}
window.onerror = stopError;

function NoError() {
return(true);
}
onerror=NoError;