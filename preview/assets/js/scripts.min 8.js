var new_scroll_position=0;var last_scroll_position;var header=document.getElementById("js-header");var stickyMenu=document.getElementById("js-navbar-menu");window.addEventListener("scroll",function(a){last_scroll_position=window.scrollY;if(new_scroll_position<last_scroll_position&&last_scroll_position>40){header.classList.remove("is-visible");header.classList.add("is-hidden")}else{if(new_scroll_position>last_scroll_position){header.classList.remove("is-hidden");header.classList.add("is-visible");if(stickyMenu){stickyMenu.classList.add("is-sticky")}}}if(last_scroll_position<1){header.classList.remove("is-visible");if(stickyMenu){stickyMenu.classList.remove("is-sticky")}}new_scroll_position=last_scroll_position});(function(e){var d={mobileMenuMode:"overlay",animationSpeed:300,submenuWidth:300,doubleClickTime:500,mobileMenuExpandableSubmenus:false,isHoverMenu:true,wrapperSelector:".navbar",buttonSelector:".navbar__toggle",menuSelector:".navbar__menu",submenuSelector:".navbar__submenu",mobileMenuSidebarLogoSelector:null,mobileMenuSidebarLogoUrl:null,relatedContainerForOverlayMenuSelector:null,ariaButtonAttribute:"aria-haspopup",separatorItemClass:"is-separator",parentItemClass:"has-submenu",submenuLeftPositionClass:"is-left-submenu",submenuRightPositionClass:"is-right-submenu",mobileMenuOverlayClass:"navbar_mobile_overlay",mobileMenuSubmenuWrapperClass:"navbar__submenu_wrapper",mobileMenuSidebarClass:"navbar_mobile_sidebar",mobileMenuSidebarOverlayClass:"navbar_mobile_sidebar__overlay",hiddenElementClass:"is-hidden",openedMenuClass:"is-active",noScrollClass:"no-scroll",relatedContainerForOverlayMenuClass:"is-visible"};var b={};Object.keys(d).forEach(function(m){b[m]=d[m]});if(typeof e==="object"){Object.keys(e).forEach(function(m){b[m]=e[m]})}function l(){if(!document.querySelectorAll(b.wrapperSelector).length){return}c();if(b.mobileMenuMode==="overlay"){j()}else{if(b.mobileMenuMode==="sidebar"){i()}}k();if(!b.isHoverMenu){f()}}function c(){var m=document.querySelectorAll(b.wrapperSelector+" ."+b.parentItemClass);for(var o=0;o<m.length;o++){var n=b.isHoverMenu?"mouseenter":"click";m[o].addEventListener(n,function(){var r=this.querySelector(b.submenuSelector);var q=this.getBoundingClientRect().left;var p=2;if(this.parentNode===document.querySelector(b.menuSelector)){p=1}if(b.submenuWidth!=="auto"){var t=q+(b.submenuWidth*p);if(window.innerWidth<t){r.classList.add(b.submenuRightPositionClass)}else{r.classList.add(b.submenuLeftPositionClass)}}else{var t=0;var s=0;if(p===1){t=q+r.clientWidth}else{t=q+this.clientWidth+r.clientWidth}if(window.innerWidth<t){r.classList.add(b.submenuRightPositionClass);s=-1*r.clientWidth;if(p===1){s=0}r.style.left=s+"px";r.style.right=this.clientWidth+"px"}else{r.classList.add(b.submenuLeftPositionClass);s=this.clientWidth;if(p===1){s=0}r.style.left=s+"px"}}r.setAttribute("aria-hidden",false)});if(b.isHoverMenu){m[o].addEventListener("mouseleave",function(){var p=this.querySelector(b.submenuSelector);p.removeAttribute("style");p.setAttribute("aria-hidden",true)})}}}function j(){var o=document.createElement("div");o.classList.add(b.mobileMenuOverlayClass);o.classList.add(b.hiddenElementClass);var m=document.querySelector(b.menuSelector).outerHTML;o.innerHTML=m;document.body.appendChild(o);if(b.mobileMenuExpandableSubmenus){h(o);a(o)}var n=document.querySelector(b.buttonSelector);n.addEventListener("click",function(){var p=document.querySelector(b.relatedContainerForOverlayMenuSelector);o.classList.toggle(b.hiddenElementClass);n.classList.toggle(b.openedMenuClass);n.setAttribute(b.ariaButtonAttribute,n.classList.contains(b.openedMenuClass));if(n.classList.contains(b.openedMenuClass)){document.documentElement.classList.add(b.noScrollClass);if(p){p.classList.add(b.relatedContainerForOverlayMenuClass)}}else{document.documentElement.classList.remove(b.noScrollClass);if(p){p.classList.remove(b.relatedContainerForOverlayMenuClass)}}})}function i(){var o=document.createElement("div");o.classList.add(b.mobileMenuSidebarClass);o.classList.add(b.hiddenElementClass);var m="";if(b.mobileMenuSidebarLogoSelector!==null){m=document.querySelector(b.mobileMenuSidebarLogoSelector).outerHTML}else{if(b.mobileMenuSidebarLogoUrl!==null){m='<img src="'+b.mobileMenuSidebarLogoUrl+'" alt="" />'}}m+=document.querySelector(b.menuSelector).outerHTML;o.innerHTML=m;var p=document.createElement("div");p.classList.add(b.mobileMenuSidebarOverlayClass);p.classList.add(b.hiddenElementClass);document.body.appendChild(p);document.body.appendChild(o);if(b.mobileMenuExpandableSubmenus){h(o);a(o)}o.addEventListener("click",function(q){q.stopPropagation()});p.addEventListener("click",function(){o.classList.add(b.hiddenElementClass);p.classList.add(b.hiddenElementClass);n.classList.remove(b.openedMenuClass);n.setAttribute(b.ariaButtonAttribute,false);document.documentElement.classList.remove(b.noScrollClass)});var n=document.querySelector(b.buttonSelector);n.addEventListener("click",function(){o.classList.toggle(b.hiddenElementClass);p.classList.toggle(b.hiddenElementClass);n.classList.toggle(b.openedMenuClass);n.setAttribute(b.ariaButtonAttribute,n.classList.contains(b.openedMenuClass));document.documentElement.classList.toggle(b.noScrollClass)})}function h(o){var m=o.querySelectorAll(b.submenuSelector);for(var n=0;n<m.length;n++){var p=document.createElement("div");p.classList.add(b.mobileMenuSubmenuWrapperClass);m[n].parentNode.insertBefore(p,m[n]);p.appendChild(m[n])}}function a(p){var n=p.querySelectorAll("."+b.parentItemClass);for(var o=0;o<n.length;o++){n[o].addEventListener("click",function(u){u.stopPropagation();var s=this.querySelector("."+b.mobileMenuSubmenuWrapperClass);var t=s.firstElementChild;if(s.classList.contains(b.openedMenuClass)){var r=t.clientHeight;s.style.height=r+"px";setTimeout(function(){s.style.height="0px"},0);setTimeout(function(){s.removeAttribute("style");s.classList.remove(b.openedMenuClass)},b.animationSpeed);t.setAttribute("aria-hidden",true);t.parentNode.firstElementChild.setAttribute("aria-expanded",false)}else{var r=t.clientHeight;s.classList.add(b.openedMenuClass);s.style.height="0px";setTimeout(function(){s.style.height=r+"px"},0);setTimeout(function(){s.removeAttribute("style")},b.animationSpeed);t.setAttribute("aria-hidden",false);t.parentNode.firstElementChild.setAttribute("aria-expanded",true)}});var q=n[o].children;for(var m=0;m<q.length;m++){if(q[m].tagName==="A"){q[m].addEventListener("click",function(t){var r=parseInt(this.getAttribute("data-last-click"),10);var s=+new Date();if(isNaN(r)){t.preventDefault();this.setAttribute("data-last-click",s)}else{if(r+b.doubleClickTime<=s){t.preventDefault();this.setAttribute("data-last-click",s)}else{if(r+b.doubleClickTime>s){t.stopPropagation();g(this,true)}}}})}}}}function f(){var n=document.querySelectorAll(b.wrapperSelector+" *[aria-hidden]");for(var o=0;o<n.length;o++){var m=n[o];if(m.parentNode.classList.contains("active")||m.parentNode.classList.contains("active-parent")){m.setAttribute("aria-hidden","false");m.parentNode.firstElementChild.setAttribute("aria-expanded",true)}else{m.setAttribute("aria-hidden","true");m.parentNode.firstElementChild.setAttribute("aria-expanded",false)}}}function k(){var m=document.querySelectorAll(b.menuSelector+" a");for(var n=0;n<m.length;n++){if(m[n].parentNode.classList.contains(b.parentItemClass)){continue}m[n].addEventListener("click",function(o){g(this,false)})}}function g(n,q){if(q===false){if(n.parentNode.classList.contains(b.parentItemClass)){return}}var m=document.querySelector(b.relatedContainerForOverlayMenuSelector);var p=document.querySelector(b.buttonSelector);var o=document.querySelector("."+b.mobileMenuOverlayClass);if(!o){o=document.querySelector("."+b.mobileMenuSidebarClass)}o.classList.add(b.hiddenElementClass);p.classList.remove(b.openedMenuClass);p.setAttribute(b.ariaButtonAttribute,false);document.documentElement.classList.remove(b.noScrollClass);if(m){m.classList.remove(b.relatedContainerForOverlayMenuClass)}var r=document.querySelector("."+b.mobileMenuSidebarOverlayClass);if(r){r.classList.add(b.hiddenElementClass)}}l()})(window.publiiThemeMenuConfig);var comments=document.getElementById("js-comments");if(comments){comments.addEventListener("click",function(){comments.classList.toggle("is-hidden");var a=document.getElementById("js-comments__inner");a.classList.toggle("is-visible")})}var comments=document.getElementById("js-comments");if(comments){comments.addEventListener("click",function(){comments.classList.toggle("is-hidden");var a=document.getElementById("js-comments__inner");a.classList.toggle("is-visible")})}var searchButton=document.querySelector(".js-search-btn");searchOverlay=document.querySelector(".js-search-overlay");searchClose=document.querySelector(".js-search-close");searchInput=document.querySelector(".js-search-input");if(searchButton){searchButton.addEventListener("click",function(){searchOverlay.classList.add("expanded");setTimeout(function(){searchInput.focus()},60)});searchClose.addEventListener("click",function(){searchOverlay.classList.remove("expanded")})}(function(){let shareButton=document.querySelector(".js-post__share-button");let sharePopup=document.querySelector(".js-post__share-popup");if(shareButton){sharePopup.addEventListener("click",function(a){a.stopPropagation()});shareButton.addEventListener("click",function(a){a.preventDefault();a.stopPropagation();sharePopup.classList.toggle("is-visible")});document.body.addEventListener("click",function(){sharePopup.classList.remove("is-visible")})}var c={Link:".js-share",Width:500,Height:500};var e=document.querySelectorAll(c.Link);for(var d=0;d<e.length;d++){e[d].onclick=b}function b(j){j=(j?j:window.event);var h=(j.target?j.target:j.srcElement);if(sharePopup){sharePopup.classList.remove("is-visible")}var g=Math.floor(((screen.availWidth||1024)-c.Width)/2),f=Math.floor(((screen.availHeight||700)-c.Height)/2);var i=h.href?h.href:h.parentNode.href;var a=window.open(i,"social","width="+c.Width+",height="+c.Height+",left="+g+",top="+f+",location=0,menubar=0,toolbar=0,status=0,scrollbars=1,resizable=1");if(a){a.focus();if(j.preventDefault){j.preventDefault()}j.returnValue=false}return !!a}})();(function(){var b=document.getElementsByClassName("js-footer__bttop")[0],e=600,a=1200,i=50,g=false;if(b){window.addEventListener("scroll",function(k){if(!g){g=true;(!window.requestAnimationFrame)?setTimeout(c,250):window.requestAnimationFrame(c)}});b.addEventListener("click",function(k){k.preventDefault();(!window.requestAnimationFrame)?window.scrollTo(0,0):d(i)})}function c(){var k=window.scrollY||document.documentElement.scrollTop;(k>e)?h(b,"footer__bttop--show"):j(b,"footer__bttop--show","footer__bttop--fade-out");(k>a)&&h(b,"footer__bttop--fade-out");g=false}function d(m){var n=window.scrollY||document.documentElement.scrollTop,l=null;var k=function(p){if(!l){l=p}var o=p-l;var q=Math.max(Math.easeInOutQuad(o,n,-n,m),0);window.scrollTo(0,q);if(o<m){window.requestAnimationFrame(k)}};window.requestAnimationFrame(k)}Math.easeInOutQuad=function(l,k,n,m){l/=m/2;if(l<1){return n/2*l*l+k}l--;return -n/2*(l*(l-2)-1)+k};function f(l,k){if(l.classList){return l.classList.contains(k)}else{return !!l.className.match(new RegExp("(\\s|^)"+k+"(\\s|$)"))}}function h(l,k){var m=k.split(" ");if(l.classList){l.classList.add(m[0])}else{if(!f(l,m[0])){l.className+=" "+m[0]}}if(m.length>1){h(l,m.slice(1).join(" "))}}function j(m,l){var n=l.split(" ");if(m.classList){m.classList.remove(n[0])}else{if(f(m,n[0])){var k=new RegExp("(\\s|^)"+n[0]+"(\\s|$)");m.className=m.className.replace(k," ")}}if(n.length>1){j(m,n.slice(1).join(" "))}}})();