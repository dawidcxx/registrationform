window.addEventListener("load",function(){function n(a){var b=document.createElement("style");b.type="text/css";b.styleSheet?b.styleSheet.cssText=a:b.appendChild(document.createTextNode(a));document.head.insertBefore(b,document.head.firstChild)}function g(a,b){var e=b.target,g=e.classList;if(!g.contains("rippleJS"))return!1;var f=e.getAttribute("data-event");if(f&&f!=a)return!1;e.setAttribute("data-event",a);var c=e.getBoundingClientRect(),f=b.offsetX,h;void 0!==f?h=b.offsetY:(f=b.clientX-c.left,
h=b.clientY-c.top);var d=document.createElement("div"),c=c.width==c.height?1.412*c.width:Math.sqrt(c.width*c.width+c.height*c.height),k=2*c+"px";d.style.width=k;d.style.height=k;d.style.marginLeft=-c+f+"px";d.style.marginTop=-c+h+"px";d.className="ripple";e.appendChild(d);window.setTimeout(function(){d.classList.add("held")},0);var l="mousedown"==a?"mouseup":"touchend",m=function(a){document.removeEventListener(l,m);d.classList.add("done");window.setTimeout(function(){e.removeChild(d);e.children.length||
(g.remove("active"),e.removeAttribute("data-event"))},650)};document.addEventListener(l,m)}(function(){var a=document.createElement("div");a.className="rippleJS";document.body.appendChild(a);var b="absolute"==window.getComputedStyle(a).position;document.body.removeChild(a);return b})()||n('/*rippleJS*/.rippleJS,.rippleJS.fill::after{position:absolute;top:0;left:0;right:0;bottom:0}.rippleJS{display:block;overflow:hidden;border-radius:inherit;-webkit-mask-image:-webkit-radial-gradient(circle,#fff,#000)}.rippleJS.fill::after{content:""}.rippleJS.fill{border-radius:1000000px}.rippleJS .ripple{position:absolute;border-radius:100%;background:currentColor;opacity:.2;width:0;height:0;-webkit-transition:-webkit-transform .4s ease-out,opacity .4s ease-out;transition:transform .4s ease-out,opacity .4s ease-out;-webkit-transform:scale(0);transform:scale(0);pointer-events:none;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.rippleJS .ripple.held{opacity:.4;-webkit-transform:scale(1);transform:scale(1)}.rippleJS .ripple.done{opacity:0}');
document.addEventListener("mousedown",function(a){0==a.button&&g(a.type,a)});document.addEventListener("touchstart",function(a){for(var b=0;b<a.changedTouches.length;++b)g(a.type,a.changedTouches[b])})});