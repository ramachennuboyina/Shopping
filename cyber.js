 var ie4=document.all    // Microsoft Internet Explorer
 var ns4=document.layers // Netscape Navigator
 var ns_gecko=document.getElementById&&!document.all //Netscape Gecko,Mozilla..
 document.onselectstart=new Function("return false");
 function lieffect() {
 var ipt=document.getElementsByTagName('INPUT'); 
 for(ip=0;ip<ipt.length;ip++) {
 ipt[ip].style.cssText="font-weight:bold;height:18px;background:whitesmoke;color:gray;border:1px solid gray";
 ipt[ip].onfocus=function() { this.style["backgroundColor"]='papayawhip';}
 ipt[ip].onblur=function() { this.style["backgroundColor"]='whitesmoke';}
 } 
 var bt=document.getElementsByTagName('BUTTON'); 
 for(btn=0;btn<bt.length;btn++) {
 bt[btn].style.cssText="cursor:pointer;font-weight:bold;height:18px;background:lightslategray;color:aliceblue;width:120px;border:1px solid orange";
 bt[btn].onmouseover=function() { this.style["backgroundColor"]='steelblue';this.blur()}
 bt[btn].onmouseout=function() { this.style["backgroundColor"]='lightslategray';}
 } 
 var tlist=document.getElementById('homing').getElementsByTagName('A'); 
 for(i=0;i<tlist.length;i++) {
 tlist[i].style.cssText="cursor:pointer;font-weight:bold;text-align:center;text-decoration:none;color:aliceblue;"
 tlist[i].onmouseover=function() { this.style["textDecoration"]="underline";this.style.color='lightcyan'}
 tlist[i].onmouseout=function() { this.style["textDecoration"]='none';this.style.color='aliceblue'}
 } }
 function getNavigate(urlnvg) {if(urlnvg.indexOf("javascript:")==-1) location=urlnvg;}
 it_park=new Array();
 it_park[0]=["Home","cyber.htm"];
 it_park[1]=["About Us","aboutus.htm"]; 
 it_park[2]=["Signup New User","signup.htm"]
 it_park[3]=["Login","cyber.htm"] 
 it_park[4]=["Entertainment","entertainment.jsp"] 
 document.write("<div id=homing><table width=780 cellspacing=0 cellpadding=4 id=mozz><tr><Td align=center>");
 for(i=0;i<it_park.length;i++) 
 document.write("<a href='"+it_park[i][1]+"' onfocus=this.blur(); oonclick=getNavigate('"+it_park[i][1]+"');>"+it_park[i][0]+"</a>&nbsp;&nbsp;<font color=aliceblue>|</font>&nbsp;&nbsp;");
 document.write("<a href='logout.jsp'>Logout</a></td></tr></form></table></div>");
 var BLUE="lightsalmon";
 document.getElementById('mozz').style.cssText="font-family:tahoma;font-size:12px;background:"+BLUE+";color:aliceblue;filter:progid:DXImageTransform.Microsoft.Gradients(startcolorstr='#6699cc',endcolorstr='aliceblue',gradienttype='0');-moz-border-radius:20px;font-weight:bold"
 var ieop=0;
 var op_id=0;
 var message="";
 function clickNS(e) {
 if(ns4 ||ns_gecko) {
 if (e.which==2 || e.which==3) {
 (message);return false;} } }
 if (ns4) {
 document.captureEvents(Event.MOUSEDOWN);
 document.onmousedown=clickNS; }
 else {
 document.onmouseup=clickNS;
 document.oncontextmenu=new Function("return false");
 }
lieffect();
shophelp="<li>Shopping Bag is designed to make your shopping and browsing experience easy."
shophelp+="<li> Use the links below to guide yourself."
shophelp+="<li> You can navigate to any point in the warehouse, adding or removing things from your shopping bag."
shophelp+="<li>You can view your and change bag contents whenever you like. "
shophelp+="<li>Here is a description of each Shopping Bag function:"
nOpac = 50
nPlus = 2
nMin = 1
speed = 30
timer = null; 
timer2 = null;
var apl = new Array();
categories=["Appliances","Electronics","Clothing","Electronics","Food","Hardware","Books","Entertainment"];
for(ap=0;ap<categories.length;ap++) apl[ap] = new Array(45,"");
var ie5=(document.all && document.getElementById);
var ns6=(!document.all && document.getElementById);
function fadeImg2(teller) { apl[teller][1] = "Up"; changes();}
function fadeImgend2(teller) { apl[teller][1] = "Down"; setTimeout("changes()",50);}
function changes() {
next_loop = true;
for (i=0;i<apl.length;i++)  {
  obj = document.getElementById('category').rows[i].cells[0];
  opacity = apl[i][0];
  if (apl[i][1] == "Up")  {
                          opacity += nPlus;
                          apl[i][0] = opacity;
                          if (apl[i][0] > 105) apl[i][1] = ""; else next_loop = false;
                          nOpac = opacity; }  else {
  if (apl[i][1] == "Down")  {
                          opacity -= nMin;
                          apl[i][0] = opacity;
                        if (apl[i][0] < 45) apl[i][1] = "";   else next_loop = false;
                    	 nOpac = opacity; }
  }
  if(ie5) obj.style.filter="alpha(opacity="+opacity+")";
  if(ns6)    	obj.style.MozOpacity = opacity/100; }  //for loop
 if (next_loop == false)   timer = setTimeout("changes()",speed);
else  clearTimeout(timer);
 }
function warn(e) {
var el=document.all?event.srcElement:e.target;
alert("You Selected  \""+el.innerHTML+"\"  Which is only for product existing Indication\n\nNo Action is Provide Here");
}
document.write("<table style='color:black;font-family:tahoma;font-size:12px' cellspacing=1 cellpadding=5 id=category align=left width=150><tr><TH><font face=webdings>4</font>&nbsp;Products List&nbsp;<font face=webdings>3</font></th></tr>");
for(cg=0;cg<categories.length;cg++) document.write("<tr><td  style='cursor:pointer;border:1px solid gray;color:gray' width=10% bgcolor=#e2e0d2 onclick=warn(event); onmouseover=fadeImg2("+cg+") onmouseout=fadeImgend2("+cg+")>"+categories[cg]+"</td></tr>");
document.write("</table>");
document.writeln("<style>");
document.writeln(".skin0 {color:gray;position:absolute;width:165px;border-style:solid;border-color:steelblue;border-width:1px;background:navajowhite;font-family:Verdana;line-height:20px;cursor:default;font-size:11px;z-index:100;visibility:hidden;font-weight:bold;filter:revealTrans(duration=1,transition=12);-moz-border-radius:20px;}");
document.writeln(".menuitems{padding-left:15px;padding-right:2px;padding-top:2px;padding-bottom:2px;}");
document.writeln("</style>");
document.writeln('<div id="ie5menu" class="skin0" onMouseover="highlightie5(event)" onMouseout="lowlightie5(event)" onClick="jumptoie5(event)" display:none>');
document.writeln('<div class="menuitems" url="index.htm">Cyber Shopping Home</div>');
document.writeln('<div class="menuitems" url="aboutus.htm">About  Shopping</div>');
document.writeln('<div class="menuitems" url="signup.htm">Login New User</div><HR size=1 color=gray>');
document.writeln('<div class="menuitems" url="http://harisearch.tripod.com/compose.htm?ghkishore@hotmail.com">Send Feed Back</div>');
document.write("</div>");
var display_url=0
var ie5=document.all&&document.getElementById
var ns6=document.getElementById&&!document.all
if (ie5||ns6)
var menuobj=document.getElementById("ie5menu")
function viewSource() { location='view-source:'+document.frames[0].document.location;}
function showmenuie5(e){
var rightedge=ie5? document.body.clientWidth-event.clientX : window.innerWidth-e.clientX
var bottomedge=ie5? document.body.clientHeight-event.clientY : window.innerHeight-e.clientY
if (rightedge<menuobj.offsetWidth)
menuobj.style.left=ie5? document.body.scrollLeft+event.clientX-menuobj.offsetWidth : window.pageXOffset+e.clientX-menuobj.offsetWidth
else menuobj.style.left=ie5? document.body.scrollLeft+event.clientX : window.pageXOffset+e.clientX
if (bottomedge<menuobj.offsetHeight)
menuobj.style.top=ie5? document.body.scrollTop+event.clientY-menuobj.offsetHeight : window.pageYOffset+e.clientY-menuobj.offsetHeight
else menuobj.style.top=ie5? document.body.scrollTop+event.clientY : window.pageYOffset+e.clientY
menuobj.style.visibility="visible"
if(ie5) menuobj.setCapture();
return false
}
function hidemenuie5(e){
menuobj.style.visibility="hidden"
if(ie5) menuobj.releaseCapture();
}

function highlightie5(e){
var firingobj=ie5? event.srcElement : e.target
if (firingobj.className=="menuitems"||ns6&&firingobj.parentNode.className=="menuitems"){
if (ns6&&firingobj.parentNode.className=="menuitems") firingobj=firingobj.parentNode //up one node
firingobj.style.backgroundColor="salmon"
firingobj.style.color="white"
if (display_url==1)
window.status=event.srcElement.url
}
}
function lowlightie5(e){
var firingobj=ie5? event.srcElement : e.target
if (firingobj.className=="menuitems"||ns6&&firingobj.parentNode.className=="menuitems"){
if (ns6&&firingobj.parentNode.className=="menuitems") firingobj=firingobj.parentNode //up one node
firingobj.style.backgroundColor=""
firingobj.style.color="gray"
window.status=''
}
}
function jumptoie5(e){
var firingobj=ie5? event.srcElement : e.target
if (firingobj.className=="menuitems"||ns6&&firingobj.parentNode.className=="menuitems"){
if (ns6&&firingobj.parentNode.className=="menuitems") firingobj=firingobj.parentNode
if (firingobj.getAttribute("target"))
window.open(firingobj.getAttribute("url"),firingobj.getAttribute("target"))
else
parent.location=firingobj.getAttribute("url")
}
}
if (ie5||ns6){
menuobj.style.display=''
document.oncontextmenu=showmenuie5;
document.onclick=hidemenuie5
document.onkeypress=function() {if(ie5 && event.keyCode==27) hidemenuie5();}
}
