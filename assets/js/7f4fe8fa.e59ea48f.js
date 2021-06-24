(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{80:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(8),o=(t(0),t(97)),i={title:"Internal CLI Arguments"},l={unversionedId:"developer-environment/internal-cli-arguments",id:"developer-environment/internal-cli-arguments",isDocsHomePage:!1,title:"Internal CLI Arguments",description:"neu CLI wraps Neutralinojs's internal CLI arguments to provide a simple interface for developers. For example,",source:"@site/docs/developer-environment/internal-cli-arguments.md",slug:"/developer-environment/internal-cli-arguments",permalink:"/docs/developer-environment/internal-cli-arguments",editUrl:"https://github.com/neutralinojs/neutralinojs.github.io/edit/main/docs/developer-environment/internal-cli-arguments.md",version:"current",sidebar:"docs",previous:{title:"neu CLI",permalink:"/docs/developer-environment/cli"},next:{title:"Global Variables",permalink:"/docs/developer-environment/global-variables"}},c=[{value:"<code>--load-dir-res</code>",id:"--load-dir-res",children:[]},{value:"<code>--path=&lt;path&gt;</code>",id:"--pathpath",children:[]},{value:"<code>--mode=&lt;mode&gt;</code>",id:"--modemode",children:[]},{value:"<code>--debug-mode</code>",id:"--debug-mode",children:[]}],d={toc:c};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"neu CLI wraps Neutralinojs's internal CLI arguments to provide a simple interface for developers. For example,\nthe ",Object(o.b)("inlineCode",{parentName:"p"},"neu run")," command internally calls ",Object(o.b)("inlineCode",{parentName:"p"},"./bin/neutralino-linux --load-dir-res --path=.")," on Linux."),Object(o.b)("p",null,"Neutralinojs supports the following CLI arguments."),Object(o.b)("h3",{id:"--load-dir-res"},Object(o.b)("inlineCode",{parentName:"h3"},"--load-dir-res")),Object(o.b)("p",null,"Notifies Neutralinojs server to fetch files from the resources directory. "),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"If Neutralinojs fails to load resources ",Object(o.b)("inlineCode",{parentName:"p"},"res.neu"),",\nthis flag is automatically enabled internally to find resources from the app directory.\nTherefore, you can double click on the binary instead of ",Object(o.b)("inlineCode",{parentName:"p"},"neu run")," while developing apps."))),Object(o.b)("h3",{id:"--pathpath"},Object(o.b)("inlineCode",{parentName:"h3"},"--path=<path>")),Object(o.b)("p",null,"Overrides the resources path with a relative path or absolute path. This will change the ",Object(o.b)("inlineCode",{parentName:"p"},"NL_PATH")," global variable."),Object(o.b)("h3",{id:"--modemode"},Object(o.b)("inlineCode",{parentName:"h3"},"--mode=<mode>")),Object(o.b)("p",null,"Overrides the default mode. Accepted values are: ",Object(o.b)("inlineCode",{parentName:"p"},"window"),", ",Object(o.b)("inlineCode",{parentName:"p"},"browser"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"cloud"),"."),Object(o.b)("h3",{id:"--debug-mode"},Object(o.b)("inlineCode",{parentName:"h3"},"--debug-mode")),Object(o.b)("p",null,"Starts the development server on port ",Object(o.b)("inlineCode",{parentName:"p"},"5050"),". When the development server is enabled, each modification done to the resources\nwill automatically reload the application. The ",Object(o.b)("inlineCode",{parentName:"p"},"neu listen")," command executes Neutralinojs with this flag."))}p.isMDXComponent=!0},97:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=a.a.createContext({}),p=function(e){var n=a.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return a.a.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=p(t),m=r,b=s["".concat(i,".").concat(m)]||s[m]||u[m]||o;return t?a.a.createElement(b,l(l({ref:n},d),{},{components:t})):a.a.createElement(b,l({ref:n},d))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);