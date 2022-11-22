(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[170],{3569:function(e,t,r){"use strict";r.d(t,{zx:function(){return p}});var n=r(7294),a=r(7976),i=r(4520),l=r(8387),o=r(5610),s=(...e)=>e.filter(Boolean).join(" "),c=e=>e?"":void 0,[u,d]=(0,l.k)({strict:!1,name:"ButtonGroupContext"});function f(e){let{children:t,className:r,...i}=e,l=(0,n.isValidElement)(t)?(0,n.cloneElement)(t,{"aria-hidden":!0,focusable:!1}):t,o=s("chakra-button__icon",r);return n.createElement(a.m$.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...i,className:o},l)}function m(e){let{label:t,placement:r,spacing:i="0.5rem",children:l=n.createElement(o.$,{color:"currentColor",width:"1em",height:"1em"}),className:c,__css:u,...d}=e,f=s("chakra-button__spinner",c),m="start"===r?"marginEnd":"marginStart",p=(0,n.useMemo)(()=>({display:"flex",alignItems:"center",position:t?"relative":"absolute",[m]:t?i:0,fontSize:"1em",lineHeight:"normal",...u}),[u,t,m,i]);return n.createElement(a.m$.div,{className:f,...d,__css:p},l)}f.displayName="ButtonIcon",m.displayName="ButtonSpinner";var p=(0,a.Gp)((e,t)=>{let r=d(),l=(0,a.mq)("Button",{...r,...e}),{isDisabled:o=null==r?void 0:r.isDisabled,isLoading:u,isActive:f,children:p,leftIcon:h,rightIcon:y,loadingText:v,iconSpacing:b="0.5rem",type:_,spinner:x,spinnerPlacement:E="start",className:w,as:k,...N}=(0,i.Lr)(e),C=(0,n.useMemo)(()=>{let e={...null==l?void 0:l._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...l,...!!r&&{_focus:e}}},[l,r]),{ref:S,type:j}=function(e){let[t,r]=(0,n.useState)(!e),a=(0,n.useCallback)(e=>{e&&r("BUTTON"===e.tagName)},[]);return{ref:a,type:t?"button":void 0}}(k),G={rightIcon:y,leftIcon:h,iconSpacing:b,children:p};return n.createElement(a.m$.button,{disabled:o||u,ref:function(...e){return(0,n.useMemo)(()=>(function(...e){return t=>{e.forEach(e=>{!function(e,t){if(null!=e){if("function"==typeof e){e(t);return}try{e.current=t}catch(r){throw Error(`Cannot assign value '${t}' to ref '${e}'`)}}}(e,t)})}})(...e),e)}(t,S),as:k,type:_??j,"data-active":c(f),"data-loading":c(u),__css:C,className:s("chakra-button",w),...N},u&&"start"===E&&n.createElement(m,{className:"chakra-button__spinner--start",label:v,placement:"start",spacing:b},x),u?v||n.createElement(a.m$.span,{opacity:0},n.createElement(g,{...G})):n.createElement(g,{...G}),u&&"end"===E&&n.createElement(m,{className:"chakra-button__spinner--end",label:v,placement:"end",spacing:b},x))});function g(e){let{leftIcon:t,rightIcon:r,children:a,iconSpacing:i}=e;return n.createElement(n.Fragment,null,t&&n.createElement(f,{marginEnd:i},t),a,r&&n.createElement(f,{marginStart:i},r))}p.displayName="Button",(0,a.Gp)(function(e,t){let{size:r,colorScheme:i,variant:l,className:o,spacing:c="0.5rem",isAttached:d,isDisabled:f,...m}=e,p=s("chakra-button__group",o),g=(0,n.useMemo)(()=>({size:r,colorScheme:i,variant:l,isDisabled:f}),[r,i,l,f]),h={display:"inline-flex"};return h=d?{...h,"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}:{...h,"& > *:not(style) ~ *:not(style)":{marginStart:c}},n.createElement(u,{value:g},n.createElement(a.m$.div,{ref:t,role:"group",__css:h,className:p,"data-attached":d?"":void 0,...m}))}).displayName="ButtonGroup",(0,a.Gp)((e,t)=>{let{icon:r,children:a,isRound:i,"aria-label":l,...o}=e,s=r||a,c=(0,n.isValidElement)(s)?(0,n.cloneElement)(s,{"aria-hidden":!0,focusable:!1}):null;return n.createElement(p,{padding:"0",borderRadius:i?"full":void 0,ref:t,"aria-label":l,...o},c)}).displayName="IconButton"},8981:function(e,t,r){"use strict";r.d(t,{Zb:function(){return u},eW:function(){return d}});var n=r(7294),a=r(7976),i=r(4520),l=r(8387),o=(...e)=>e.filter(Boolean).join(" "),[s,c]=(0,l.k)({name:"CardStylesContext",hookName:"useCardStyles",providerName:"<Card />"}),u=(0,a.Gp)(function(e,t){let{className:r,children:l,direction:c="column",justify:u,align:d,...f}=(0,i.Lr)(e),m=(0,a.jC)("Card",e);return n.createElement(a.m$.div,{ref:t,className:o("chakra-card",r),__css:{display:"flex",flexDirection:c,justifyContent:u,alignItems:d,position:"relative",minWidth:0,wordWrap:"break-word",...m.container},...f},n.createElement(s,{value:m},l))});(0,a.Gp)(function(e,t){let{className:r,...i}=e,l=c();return n.createElement(a.m$.div,{ref:t,className:o("chakra-card__header",r),__css:l.header,...i})});var d=(0,a.Gp)(function(e,t){let{className:r,...i}=e,l=c();return n.createElement(a.m$.div,{ref:t,className:o("chakra-card__body",r),__css:l.body,...i})});(0,a.Gp)(function(e,t){let{className:r,justify:i,...l}=e,s=c();return n.createElement(a.m$.div,{ref:t,className:o("chakra-card__footer",r),__css:{...s.footer,display:"flex",justifyContent:i},...l})})},4902:function(e,t,r){"use strict";r.d(t,{oM:function(){return f},M5:function(){return g},W2:function(){return y},iz:function(){return v},kC:function(){return b},X6:function(){return E},MI:function(){return C},Kq:function(){return G},xv:function(){return L}});var n=r(7294),a=r(7976);function i(e,t){return Array.isArray(e)?e.map(e=>null===e?null:t(e)):!function(e){let t=typeof e;return null!=e&&("object"===t||"function"===t)&&!Array.isArray(e)}(e)?null!=e?t(e):null:Object.keys(e).reduce((r,n)=>(r[n]=t(e[n]),r),{})}Object.freeze(["base","sm","md","lg","xl","2xl"]);var l=r(5336),o=r(4520);function s(e){let t=Object.assign({},e);for(let r in t)void 0===t[r]&&delete t[r];return t}var c=r(2494),u=r(8387);function d(e){return n.Children.toArray(e).filter(e=>(0,n.isValidElement)(e))}var f=(0,a.Gp)(function(e,t){let{ratio:r=4/3,children:o,className:s,...c}=e,u=n.Children.only(o),d=(0,l.cx)("chakra-aspect-ratio",s);return n.createElement(a.m$.div,{ref:t,position:"relative",className:d,_before:{height:0,content:'""',display:"block",paddingBottom:i(r,e=>`${1/e*100}%`)},__css:{"& > *:not(style)":{overflow:"hidden",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},"& > img, & > video":{objectFit:"cover"}},...c},u)});f.displayName="AspectRatio",(0,a.Gp)(function(e,t){let r=(0,a.mq)("Badge",e),{className:i,...s}=(0,o.Lr)(e);return n.createElement(a.m$.span,{ref:t,className:(0,l.cx)("chakra-badge",e.className),...s,__css:{display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle",...r}})}).displayName="Badge";var m=(0,a.m$)("div");m.displayName="Box";var p=(0,a.Gp)(function(e,t){let{size:r,centerContent:a=!0,...i}=e;return n.createElement(m,{ref:t,boxSize:r,__css:{...a?{display:"flex",alignItems:"center",justifyContent:"center"}:{},flexShrink:0,flexGrow:0},...i})});p.displayName="Square",(0,a.Gp)(function(e,t){let{size:r,...a}=e;return n.createElement(p,{size:r,ref:t,borderRadius:"9999px",...a})}).displayName="Circle";var g=(0,a.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});g.displayName="Center";var h={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}};(0,a.Gp)(function(e,t){let{axis:r="both",...i}=e;return n.createElement(a.m$.div,{ref:t,__css:h[r],...i,position:"absolute"})}),(0,a.Gp)(function(e,t){let r=(0,a.mq)("Code",e),{className:i,...s}=(0,o.Lr)(e);return n.createElement(a.m$.code,{ref:t,className:(0,l.cx)("chakra-code",e.className),...s,__css:{display:"inline-block",...r}})}).displayName="Code";var y=(0,a.Gp)(function(e,t){let{className:r,centerContent:i,...s}=(0,o.Lr)(e),c=(0,a.mq)("Container",e);return n.createElement(a.m$.div,{ref:t,className:(0,l.cx)("chakra-container",r),...s,__css:{...c,...i&&{display:"flex",flexDirection:"column",alignItems:"center"}}})});y.displayName="Container";var v=(0,a.Gp)(function(e,t){let{borderLeftWidth:r,borderBottomWidth:i,borderTopWidth:s,borderRightWidth:c,borderWidth:u,borderStyle:d,borderColor:f,...m}=(0,a.mq)("Divider",e),{className:p,orientation:g="horizontal",__css:h,...y}=(0,o.Lr)(e);return n.createElement(a.m$.hr,{ref:t,"aria-orientation":g,...y,__css:{...m,border:"0",borderColor:f,borderStyle:d,...{vertical:{borderLeftWidth:r||c||u||"1px",height:"100%"},horizontal:{borderBottomWidth:i||s||u||"1px",width:"100%"}}[g],...h},className:(0,l.cx)("chakra-divider",p)})});v.displayName="Divider";var b=(0,a.Gp)(function(e,t){let{direction:r,align:i,justify:l,wrap:o,basis:s,grow:c,shrink:u,...d}=e;return n.createElement(a.m$.div,{ref:t,__css:{display:"flex",flexDirection:r,alignItems:i,justifyContent:l,flexWrap:o,flexBasis:s,flexGrow:c,flexShrink:u},...d})});b.displayName="Flex";var _=(0,a.Gp)(function(e,t){let{templateAreas:r,gap:i,rowGap:l,columnGap:o,column:s,row:c,autoFlow:u,autoRows:d,templateRows:f,autoColumns:m,templateColumns:p,...g}=e;return n.createElement(a.m$.div,{ref:t,__css:{display:"grid",gridTemplateAreas:r,gridGap:i,gridRowGap:l,gridColumnGap:o,gridAutoColumns:m,gridColumn:s,gridRow:c,gridAutoFlow:u,gridAutoRows:d,gridTemplateRows:f,gridTemplateColumns:p},...g})});function x(e){return i(e,e=>"auto"===e?"auto":`span ${e}/span ${e}`)}_.displayName="Grid",(0,a.Gp)(function(e,t){let{area:r,colSpan:i,colStart:l,colEnd:o,rowEnd:c,rowSpan:u,rowStart:d,...f}=e,m=s({gridArea:r,gridColumn:x(i),gridRow:x(u),gridColumnStart:l,gridColumnEnd:o,gridRowStart:d,gridRowEnd:c});return n.createElement(a.m$.div,{ref:t,__css:m,...f})}).displayName="GridItem";var E=(0,a.Gp)(function(e,t){let r=(0,a.mq)("Heading",e),{className:i,...s}=(0,o.Lr)(e);return n.createElement(a.m$.h2,{ref:t,className:(0,l.cx)("chakra-heading",e.className),...s,__css:r})});E.displayName="Heading",(0,a.Gp)(function(e,t){let r=(0,a.mq)("Mark",e),i=(0,o.Lr)(e);return n.createElement(m,{ref:t,...i,as:"mark",__css:{bg:"transparent",whiteSpace:"nowrap",...r}})}),(0,a.Gp)(function(e,t){let r=(0,a.mq)("Kbd",e),{className:i,...s}=(0,o.Lr)(e);return n.createElement(a.m$.kbd,{ref:t,className:(0,l.cx)("chakra-kbd",i),...s,__css:{fontFamily:"mono",...r}})}).displayName="Kbd",(0,a.Gp)(function(e,t){let r=(0,a.mq)("Link",e),{className:i,isExternal:s,...c}=(0,o.Lr)(e);return n.createElement(a.m$.a,{target:s?"_blank":void 0,rel:s?"noopener":void 0,ref:t,className:(0,l.cx)("chakra-link",i),...c,__css:r})}).displayName="Link",(0,a.Gp)(function(e,t){let{isExternal:r,target:i,rel:o,className:s,...c}=e;return n.createElement(a.m$.a,{...c,ref:t,className:(0,l.cx)("chakra-linkbox__overlay",s),rel:r?"noopener noreferrer":o,target:r?"_blank":i,__css:{position:"static","&::before":{content:"''",cursor:"inherit",display:"block",position:"absolute",top:0,left:0,zIndex:0,width:"100%",height:"100%"}}})}),(0,a.Gp)(function(e,t){let{className:r,...i}=e;return n.createElement(a.m$.div,{ref:t,position:"relative",...i,className:(0,l.cx)("chakra-linkbox",r),__css:{"a[href]:not(.chakra-linkbox__overlay), abbr[title]":{position:"relative",zIndex:1}}})});var[w,k]=(0,u.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),N=(0,a.Gp)(function(e,t){let r=(0,a.jC)("List",e),{children:i,styleType:l="none",stylePosition:s,spacing:c,...u}=(0,o.Lr)(e),f=d(i);return n.createElement(w,{value:r},n.createElement(a.m$.ul,{ref:t,listStyleType:l,listStylePosition:s,role:"list",__css:{...r.container,...c?{"& > *:not(style) ~ *:not(style)":{mt:c}}:{}},...u},f))});N.displayName="List",(0,a.Gp)((e,t)=>{let{as:r,...a}=e;return n.createElement(N,{ref:t,as:"ol",styleType:"decimal",marginStart:"1em",...a})}).displayName="OrderedList",(0,a.Gp)(function(e,t){let{as:r,...a}=e;return n.createElement(N,{ref:t,as:"ul",styleType:"initial",marginStart:"1em",...a})}).displayName="UnorderedList",(0,a.Gp)(function(e,t){let r=k();return n.createElement(a.m$.li,{ref:t,...e,__css:r.item})}).displayName="ListItem",(0,a.Gp)(function(e,t){let r=k();return n.createElement(c.JO,{ref:t,role:"presentation",...e,__css:r.icon})}).displayName="ListIcon";var C=(0,a.Gp)(function(e,t){let{columns:r,spacingX:l,spacingY:o,spacing:s,minChildWidth:c,...u}=e,d=(0,a.Fg)(),f=c?i(c,e=>{let t=(0,a.LP)("sizes",e,"number"==typeof e?`${e}px`:e)(d);return null===e?null:`repeat(auto-fit, minmax(${t}, 1fr))`}):i(r,e=>null===e?null:`repeat(${e}, minmax(0, 1fr))`);return n.createElement(_,{ref:t,gap:s,columnGap:l,rowGap:o,templateColumns:f,...u})});C.displayName="SimpleGrid",(0,a.m$)("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}}).displayName="Spacer";var S="& > *:not(style) ~ *:not(style)",j=e=>n.createElement(a.m$.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});j.displayName="StackItem";var G=(0,a.Gp)((e,t)=>{let{isInline:r,direction:o,align:s,justify:c,spacing:u="0.5rem",wrap:f,children:m,divider:p,className:g,shouldWrapChildren:h,...y}=e,v=r?"row":o??"column",b=(0,n.useMemo)(()=>(function(e){let{spacing:t,direction:r}=e,n={column:{marginTop:t,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:t},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:t,marginStart:0},"row-reverse":{marginTop:0,marginEnd:t,marginBottom:0,marginStart:0}};return{flexDirection:r,[S]:i(r,e=>n[e])}})({direction:v,spacing:u}),[v,u]),_=(0,n.useMemo)(()=>(function(e){let{spacing:t,direction:r}=e,n={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":i(r,e=>n[e])}})({spacing:u,direction:v}),[u,v]),x=!!p,E=!h&&!x,w=(0,n.useMemo)(()=>{let e=d(m);return E?e:e.map((t,r)=>{let a=void 0!==t.key?t.key:r,i=r+1===e.length,l=n.createElement(j,{key:a},t),o=h?l:t;if(!x)return o;let s=(0,n.cloneElement)(p,{__css:_});return n.createElement(n.Fragment,{key:a},o,i?null:s)})},[p,_,x,E,h,m]),k=(0,l.cx)("chakra-stack",g);return n.createElement(a.m$.div,{ref:t,display:"flex",alignItems:s,justifyContent:c,flexDirection:b.flexDirection,flexWrap:f,className:k,__css:x?{}:{[S]:b[S]},...y},w)});G.displayName="Stack",(0,a.Gp)((e,t)=>n.createElement(G,{align:"center",...e,direction:"row",ref:t})).displayName="HStack",(0,a.Gp)((e,t)=>n.createElement(G,{align:"center",...e,direction:"column",ref:t})).displayName="VStack";var L=(0,a.Gp)(function(e,t){let r=(0,a.mq)("Text",e),{className:i,align:c,decoration:u,casing:d,...f}=(0,o.Lr)(e),m=s({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return n.createElement(a.m$.p,{ref:t,className:(0,l.cx)("chakra-text",e.className),...m,...f,__css:r})});function O(e){return"number"==typeof e?`${e}px`:e}L.displayName="Text",(0,a.Gp)(function(e,t){let{spacing:r="0.5rem",spacingX:s,spacingY:c,children:u,justify:d,direction:f,align:m,className:p,shouldWrapChildren:g,...h}=e,y=(0,n.useMemo)(()=>{let{spacingX:e=r,spacingY:t=r}={spacingX:s,spacingY:c};return{"--chakra-wrap-x-spacing":t=>i(e,e=>O((0,o.fr)("space",e)(t))),"--chakra-wrap-y-spacing":e=>i(t,t=>O((0,o.fr)("space",t)(e))),"--wrap-x-spacing":"calc(var(--chakra-wrap-x-spacing) / 2)","--wrap-y-spacing":"calc(var(--chakra-wrap-y-spacing) / 2)",display:"flex",flexWrap:"wrap",justifyContent:d,alignItems:m,flexDirection:f,listStyleType:"none",padding:"0",margin:"calc(var(--wrap-y-spacing) * -1) calc(var(--wrap-x-spacing) * -1)","& > *:not(style)":{margin:"var(--wrap-y-spacing) var(--wrap-x-spacing)"}}},[r,s,c,d,m,f]),v=(0,n.useMemo)(()=>g?n.Children.map(u,(e,t)=>n.createElement($,{key:t},e)):u,[u,g]);return n.createElement(a.m$.div,{ref:t,className:(0,l.cx)("chakra-wrap",p),overflow:"hidden",...h},n.createElement(a.m$.ul,{className:"chakra-wrap__list",__css:y},v))}).displayName="Wrap";var $=(0,a.Gp)(function(e,t){let{className:r,...i}=e;return n.createElement(a.m$.li,{ref:t,__css:{display:"flex",alignItems:"flex-start"},className:(0,l.cx)("chakra-wrap__listitem",r),...i})});$.displayName="WrapItem"},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,r,n){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9749:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let t,r;var a,{src:i,sizes:h,unoptimized:v=!1,priority:b=!1,loading:_,className:x,quality:E,width:w,height:k,fill:N,style:C,onLoad:S,onLoadingComplete:j,placeholder:G="empty",blurDataURL:L,layout:O,objectFit:$,objectPosition:I,lazyBoundary:M,lazyRoot:z}=e,R=l(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let B=o.useContext(d.ImageConfigContext),P=o.useMemo(()=>{let e=m||B||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return n({},e,{allSizes:t,deviceSizes:r})},[B]),T=R,W=T.loader||f.default;if(delete T.loader,"__next_img_default"in W){if("custom"===P.loader)throw Error('Image with src "'.concat(i,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let A=W;W=e=>{let{config:t}=e,r=l(e,["config"]);return A(r)}}if(O){"fill"===O&&(N=!0);let D={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[O];D&&(C=n({},C,D));let q={responsive:"100vw",fill:"100vw"}[O];q&&!h&&(h=q)}let F="",U=g(w),H=g(k);if("object"==typeof(a=i)&&(p(a)||void 0!==a.src)){let K=p(i)?i.default:i;if(!K.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(K)));if(!K.height||!K.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(K)));if(t=K.blurWidth,r=K.blurHeight,L=L||K.blurDataURL,F=K.src,!N){if(U||H){if(U&&!H){let V=U/K.width;H=Math.round(K.height*V)}else if(!U&&H){let Z=H/K.height;U=Math.round(K.width*Z)}}else U=K.width,H=K.height}}let J=!b&&("lazy"===_||void 0===_);((i="string"==typeof i?i:F).startsWith("data:")||i.startsWith("blob:"))&&(v=!0,J=!1),P.unoptimized&&(v=!0);let[X,Y]=o.useState(!1),[Q,ee]=o.useState(!1),et=g(E),er=Object.assign(N?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:$,objectPosition:I}:{},Q?{}:{color:"transparent"},C),en="blur"===G&&L&&!X?{backgroundSize:er.objectFit||"cover",backgroundPosition:er.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:U,heightInt:H,blurWidth:t,blurHeight:r,blurDataURL:L}),'")')}:{},ea=function(e){let{config:t,src:r,unoptimized:n,width:a,quality:i,sizes:l,loader:o}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,r){let{deviceSizes:n,allSizes:a}=e;if(r){let i=/(^|\s)(1?\d?\d)vw/g,l=[];for(let o;o=i.exec(r);o)l.push(parseInt(o[2]));if(l.length){let s=.01*Math.min(...l);return{widths:a.filter(e=>e>=n[0]*s),kind:"w"}}return{widths:a,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let c=[...new Set([t,2*t].map(e=>a.find(t=>t>=e)||a[a.length-1]))];return{widths:c,kind:"x"}}(t,a,l),u=s.length-1;return{sizes:l||"w"!==c?l:"100vw",srcSet:s.map((e,n)=>"".concat(o({config:t,src:r,quality:i,width:e})," ").concat("w"===c?e:n+1).concat(c)).join(", "),src:o({config:t,src:r,quality:i,width:s[u]})}}({config:P,src:i,unoptimized:v,width:U,quality:et,sizes:h,loader:W}),ei=i,el={imageSrcSet:ea.srcSet,imageSizes:ea.sizes,crossOrigin:T.crossOrigin},eo=o.useRef(S);o.useEffect(()=>{eo.current=S},[S]);let es=o.useRef(j);o.useEffect(()=>{es.current=j},[j]);let ec=n({isLazy:J,imgAttributes:ea,heightInt:H,widthInt:U,qualityInt:et,className:x,imgStyle:er,blurStyle:en,loading:_,config:P,fill:N,unoptimized:v,placeholder:G,loader:W,srcString:ei,onLoadRef:eo,onLoadingCompleteRef:es,setBlurComplete:Y,setShowAltText:ee},T);return o.default.createElement(o.default.Fragment,null,o.default.createElement(y,Object.assign({},ec)),b?o.default.createElement(s.default,null,o.default.createElement("link",Object.assign({key:"__nimg-"+ea.src+ea.srcSet+ea.sizes,rel:"preload",as:"image",href:ea.srcSet?void 0:ea.src},el))):null)};var n=r(6495).Z,a=r(2648).Z,i=r(1598).Z,l=r(7273).Z,o=i(r(7294)),s=a(r(3121)),c=r(2675),u=r(139),d=r(8730);r(7238);var f=a(r(9824));let m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function p(e){return void 0!==e.default}function g(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function h(e,t,r,a,i,l,o){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===r&&l(!0),null==a?void 0:a.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let o=!1,s=!1;a.current(n({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>o,isPropagationStopped:()=>s,persist(){},preventDefault(){o=!0,t.preventDefault()},stopPropagation(){s=!0,t.stopPropagation()}}))}(null==i?void 0:i.current)&&i.current(e)}})}let y=e=>{var{imgAttributes:t,heightInt:r,widthInt:a,qualityInt:i,className:s,imgStyle:c,blurStyle:u,isLazy:d,fill:f,placeholder:m,loading:p,srcString:g,config:y,unoptimized:v,loader:b,onLoadRef:_,onLoadingCompleteRef:x,setBlurComplete:E,setShowAltText:w,onLoad:k,onError:N}=e,C=l(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return p=d?"lazy":p,o.default.createElement(o.default.Fragment,null,o.default.createElement("img",Object.assign({},C,t,{width:a,height:r,decoding:"async","data-nimg":f?"fill":"1",className:s,loading:p,style:n({},c,u),ref:o.useCallback(e=>{e&&(N&&(e.src=e.src),e.complete&&h(e,g,m,_,x,E,v))},[g,m,_,x,E,N,v]),onLoad(e){let t=e.currentTarget;h(t,g,m,_,x,E,v)},onError(e){w(!0),"blur"===m&&E(!0),N&&N(e)}})))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2648).Z,a=r(7273).Z,i=n(r(7294)),l=r(1003),o=r(7795),s=r(4465),c=r(2692),u=r(8245),d=r(9246),f=r(227),m=r(3468);let p=new Set;function g(e,t,r,n){if(l.isLocalURL(t)){if(!n.bypassPrefetchedCheck){let a=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,i=t+"%"+r+"%"+a;if(p.has(i))return;p.add(i)}Promise.resolve(e.prefetch(t,r,n)).catch(e=>{})}}function h(e){return"string"==typeof e?e:o.formatUrl(e)}let y=i.default.forwardRef(function(e,t){let r,n;let{href:o,as:p,children:y,prefetch:v,passHref:b,replace:_,shallow:x,scroll:E,locale:w,onClick:k,onMouseEnter:N,onTouchStart:C,legacyBehavior:S=!0!==Boolean(!0)}=e,j=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=y,S&&("string"==typeof r||"number"==typeof r)&&(r=i.default.createElement("a",null,r));let G=!1!==v,L=i.default.useContext(c.RouterContext),O=i.default.useContext(u.AppRouterContext),$=null!=L?L:O,I=!L,{href:M,as:z}=i.default.useMemo(()=>{if(!L){let e=h(o);return{href:e,as:p?h(p):e}}let[t,r]=l.resolveHref(L,o,!0);return{href:t,as:p?l.resolveHref(L,p):r||t}},[L,o,p]),R=i.default.useRef(M),B=i.default.useRef(z);S&&(n=i.default.Children.only(r));let P=S?n&&"object"==typeof n&&n.ref:t,[T,W,A]=d.useIntersection({rootMargin:"200px"}),D=i.default.useCallback(e=>{(B.current!==z||R.current!==M)&&(A(),B.current=z,R.current=M),T(e),P&&("function"==typeof P?P(e):"object"==typeof P&&(P.current=e))},[z,P,M,A,T]);i.default.useEffect(()=>{$&&W&&G&&g($,M,z,{locale:w})},[z,M,W,w,G,null==L?void 0:L.locale,$]);let q={ref:D,onClick(e){S||"function"!=typeof k||k(e),S&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),$&&!e.defaultPrevented&&function(e,t,r,n,a,o,s,c,u,d){let{nodeName:f}=e.currentTarget,m="A"===f.toUpperCase();if(m&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!l.isLocalURL(r)))return;e.preventDefault();let p=()=>{"beforePopState"in t?t[a?"replace":"push"](r,n,{shallow:o,locale:c,scroll:s}):t[a?"replace":"push"](n||r,{forceOptimisticNavigation:!d})};u?i.default.startTransition(p):p()}(e,$,M,z,_,x,E,w,I,G)},onMouseEnter(e){S||"function"!=typeof N||N(e),S&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),$&&(G||!I)&&g($,M,z,{locale:w,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){S||"function"!=typeof C||C(e),S&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),$&&(G||!I)&&g($,M,z,{locale:w,priority:!0,bypassPrefetchedCheck:!0})}};if(!S||b||"a"===n.type&&!("href"in n.props)){let F=void 0!==w?w:null==L?void 0:L.locale,U=(null==L?void 0:L.isLocaleDomain)&&f.getDomainLocale(z,F,null==L?void 0:L.locales,null==L?void 0:L.domainLocales);q.href=U||m.addBasePath(s.addLocale(z,F,null==L?void 0:L.defaultLocale))}return S?i.default.cloneElement(n,q):i.default.createElement("a",Object.assign({},j,q),r)});t.default=y,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:r,disabled:s}=e,c=s||!i,[u,d]=n.useState(!1),[f,m]=n.useState(null);n.useEffect(()=>{if(i){if(!c&&!u&&f&&f.tagName){let e=function(e,t,r){let{id:n,observer:a,elements:i}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=o.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=l.get(n)))return t;let a=new Map,i=new IntersectionObserver(e=>{e.forEach(e=>{let t=a.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:i,elements:a},o.push(r),l.set(r,t),t}(r);return i.set(e,t),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),l.delete(n);let t=o.findIndex(e=>e.root===n.root&&e.margin===n.margin);t>-1&&o.splice(t,1)}}}(f,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:r});return e}}else if(!u){let n=a.requestIdleCallback(()=>d(!0));return()=>a.cancelIdleCallback(n)}},[f,c,r,t,u]);let p=n.useCallback(()=>{d(!1)},[]);return[m,u,p]};var n=r(7294),a=r(4686);let i="function"==typeof IntersectionObserver,l=new Map,o=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:a,blurDataURL:i}=e,l=n||t,o=a||r,s=i.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&o?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(l," ").concat(o,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&a?"1":"20","'/%3E").concat(s,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(i,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(i,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:a}=e;return r.endsWith(".svg")&&!t.dangerouslyAllowSVG?r:"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(a||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},9008:function(e,t,r){e.exports=r(3121)},5675:function(e,t,r){e.exports=r(9749)},1664:function(e,t,r){e.exports=r(1551)},8357:function(e,t,r){"use strict";r.d(t,{w_:function(){return s}});var n=r(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(a),l=function(){return(l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},o=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)0>t.indexOf(n[a])&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};function s(e){return function(t){return n.createElement(c,l({attr:l({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return n.createElement(t.tag,l({key:r},t.attr),e(t.child))})}(e.child))}}function c(e){var t=function(t){var r,a=e.attr,i=e.size,s=e.title,c=o(e,["attr","size","title"]),u=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,c,{className:r,style:l(l({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==i?n.createElement(i.Consumer,null,function(e){return t(e)}):t(a)}}}]);