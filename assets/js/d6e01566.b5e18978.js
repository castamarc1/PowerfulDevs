"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[76662],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),k=o,g=d["".concat(p,".").concat(k)]||d[k]||m[k]||i;return n?a.createElement(g,r(r({ref:t},c),{},{components:n})):a.createElement(g,r({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},54990:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const i={sidebar_position:1,title:"1. Build Code Component"},r=void 0,l={unversionedId:"prodev-3/step-1",id:"prodev-3/step-1",title:"1. Build Code Component",description:"Working as part of the PrioritZ fusion team you have been asked to create a Power Apps code component to allow drag and drop priority ranking of items in the PrioritZ Ask Power App.",source:"@site/docs/prodev-3/step-1.md",sourceDirName:"prodev-3",slug:"/prodev-3/step-1",permalink:"/Low-Code/docs/prodev-3/step-1",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"1. Build Code Component"},sidebar:"tutorialSidebar",previous:{title:"4. Test Power Platform CLI",permalink:"/Low-Code/docs/prodev-2/step-4"},next:{title:"2. Implement Component Logic",permalink:"/Low-Code/docs/prodev-3/step-2"}},p={},s=[{value:"1.1 Create the code component",id:"11-create-the-code-component",level:2},{value:"1.2 Review and run the code component",id:"12-review-and-run-the-code-component",level:2}],c={toc:s};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"LAB SCENARIO",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Working as part of the PrioritZ fusion team you have been asked to create a Power Apps code component to allow drag and drop priority ranking of items in the PrioritZ Ask Power App.\nYou will build a code component using the React JavaScript framework.\nThe code component approach is used to address the requirement because there isn\u2019t a similar control already built-in."),(0,o.kt)("p",{parentName:"admonition"},"You have collaborated with the app makers to identify the following properties to allow them to configure the code component in the app:"),(0,o.kt)("p",{parentName:"admonition"},"\u2022\tBackgroundColor"),(0,o.kt)("p",{parentName:"admonition"},"\u2022\tDragBackgroundColor"),(0,o.kt)("p",{parentName:"admonition"},"\u2022\tItemHeight"),(0,o.kt)("p",{parentName:"admonition"},"\u2022\tFontSize"),(0,o.kt)("p",{parentName:"admonition"},"\u2022\tFontColor"),(0,o.kt)("p",{parentName:"admonition"},"The PrioritZ Ask app will prepare a collection of the items to rank that will be bound as the dataset for the code component.",(0,o.kt)("br",{parentName:"p"}),"\n","When an item is dragged and dropped the code component will raise an OnSelect event that will be handled by the hosting app.",(0,o.kt)("br",{parentName:"p"}),"\n","The hosting app will update the collection items with their new rank.  The code component will be stateless."),(0,o.kt)("p",{parentName:"admonition"},"In ",(0,o.kt)("strong",{parentName:"p"},"Exercise 1")," you will build the code component.")),(0,o.kt)("h2",{id:"11-create-the-code-component"},"1.1 Create the code component"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Start Visual Studio Code."),(0,o.kt)("li",{parentName:"ol"},"Select the Power Platform tab and make sure your Dev Auth profile is selected. ")),(0,o.kt)("admonition",{title:"Note ",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The Power Platform tab is only available if you installed the Power Platform extension as explained in lab 0 and configured it in lab 1.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Lab-02 Image",src:n(33840).Z,width:"355",height:"143"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Terminal")," and select ",(0,o.kt)("strong",{parentName:"li"},"New Terminal"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Lab-02 Image",src:n(73926).Z,width:"472",height:"76"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"In the Terminal window, make a new directory by running the command below.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"md PrioritZDnDRanking\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Lab-02 Image",src:n(70623).Z,width:"624",height:"151"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Run the command below to switch to the ",(0,o.kt)("inlineCode",{parentName:"li"},"PrioritZDnRanking")," directory you just created.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd PrioritZDnDRanking\n")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"You should now be in the directory you created. Create a new component project and install dependencies by running the commands below. This will create the initial files for your code component.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pac pcf init -ns ContosoCoffee --name PrioritZDnDRanking --template dataset --framework react --run-npm-install\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Lab-02 Image",src:n(86580).Z,width:"628",height:"86"})),(0,o.kt)("admonition",{title:"Note ",type:"tip"},(0,o.kt)("ol",{parentName:"admonition",start:7},(0,o.kt)("li",{parentName:"ol"},"The component framework project should be created successfully.")),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("img",{alt:"Lab-02 Image",src:n(19647).Z,width:"628",height:"132"}))),(0,o.kt)("h2",{id:"12-review-and-run-the-code-component"},"1.2 Review and run the code component"),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},"In the terminal, run the command below to open the project in your current Visual Studio Code session.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"code -a .\n")),(0,o.kt)("ol",{start:9},(0,o.kt)("li",{parentName:"ol"},"Review the created code component files.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Lab-02 Image",src:n(60812).Z,width:"263",height:"237"})),(0,o.kt)("ol",{start:10},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Expand the ",(0,o.kt)("inlineCode",{parentName:"p"},"PrioritZDnDRanking")," folder and then expand the component folder.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the ",(0,o.kt)("inlineCode",{parentName:"p"},"ControlManifest.Input.xml")," file. The manifest is the metadata file that defines the component including the properties exposed to the hosting app."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Lab-02 Image",src:n(42433).Z,width:"281",height:"138"})),(0,o.kt)("ol",{start:12},(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("inlineCode",{parentName:"li"},"ControlManifest.Input.xml")," file locate data-set XML element.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Lab-02 Image",src:n(36455).Z,width:"624",height:"112"})),(0,o.kt)("ol",{start:13},(0,o.kt)("li",{parentName:"ol"},"Change the ",(0,o.kt)("inlineCode",{parentName:"li"},"name")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"items")," and the ",(0,o.kt)("inlineCode",{parentName:"li"},"display-name-key")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"items"),". This defines the property the app will bind to a collection of items.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Lab-02 Image",src:n(24353).Z,width:"451",height:"102"})),(0,o.kt)("ol",{start:14},(0,o.kt)("li",{parentName:"ol"},"Add the following properties after the closing tag of the data-set element ",(0,o.kt)("inlineCode",{parentName:"li"},"</data-set>"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'<property name="BackgroundColor" display-name-key="Background color" usage="input" of-type="SingleLine.Text" default-value="#F3F2F1"/>\n<property name="DragBackgroundColor" display-name-key="Drag background color" usage="input" of-type="SingleLine.Text" default-value="lightgreen"/>\n<property name="ItemHeight" display-name-key="Item height" usage="input" of-type="Whole.None" default-value="32"/>\n<property name="FontSize" display-name-key="Font size" usage="input" of-type="Whole.None" default-value="12"/>\n<property name="FontColor" display-name-key="Font color" usage="input" of-type="SingleLine.Text" default-value="#333333"/>\n')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Lab-02 Image",src:n(85394).Z,width:"571",height:"158"})),(0,o.kt)("ol",{start:15},(0,o.kt)("li",{parentName:"ol"},"Locate ",(0,o.kt)("inlineCode",{parentName:"li"},"<resources>")," and uncomment ",(0,o.kt)("inlineCode",{parentName:"li"},"css")," resource. This will ensure that our styles will be bundled with the code component when it is deployed.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Lab-02 Image",src:n(49448).Z,width:"628",height:"196"})),(0,o.kt)("ol",{start:16},(0,o.kt)("li",{parentName:"ol"},"Notice the following two resources. This declares the component\u2019s dependency on these two libraries. This is a result of specifying \u2013framework React on initialization.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<platform-library name="React" version="16.8.6" />\n<platform-library name="Fluent" version="8.29.0" />\n')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Lab-02 Image",src:n(55895).Z,width:"628",height:"196"})),(0,o.kt)("ol",{start:17},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"File")," and select ",(0,o.kt)("strong",{parentName:"p"},"Save All"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Make sure you still have the ",(0,o.kt)("inlineCode",{parentName:"p"},"ControlManifest.Input.xml")," file selected and then click ",(0,o.kt)("strong",{parentName:"p"},"New Folder"),". "))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Lab-02 Image",src:n(17924).Z,width:"350",height:"149"})),(0,o.kt)("ol",{start:19},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Name the new folder ",(0,o.kt)("inlineCode",{parentName:"p"},"css"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the new ",(0,o.kt)("inlineCode",{parentName:"p"},"css")," folder you created and then click New File"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Lab-02 Image",src:n(67602).Z,width:"442",height:"164"})),(0,o.kt)("ol",{start:21},(0,o.kt)("li",{parentName:"ol"},"Name the new file ",(0,o.kt)("inlineCode",{parentName:"li"},"PrioritZDnDRanking.css"),"."),(0,o.kt)("li",{parentName:"ol"},"Paste the following css into the ",(0,o.kt)("inlineCode",{parentName:"li"},"PrioritZDnDRanking.css")," file.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},".prioritydnd-scroll-container {\n        box-sizing: border-box;\n        padding: 2px;\n        overflow-y: auto;\n        overflow-x: hidden;\n        position: relative;\n    }\n    \n    .prioritydnd-item-container {\n        user-select: none;\n        display: flex;\n        align-items: center;\n    }\n    \n    .prioritydnd-item-column {\n        margin: 8px;\n}\n")),(0,o.kt)("ol",{start:23},(0,o.kt)("li",{parentName:"ol"},"The file should now look like the following.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Lab-02 Image",src:n(71418).Z,width:"628",height:"233"})),(0,o.kt)("ol",{start:24},(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"File")," and save your changes.")))}d.isMDXComponent=!0},33840:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},73926:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/lab02-02-d86b8cfb8f259194a4dac7d59bcc0e45.png"},70623:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/lab02-03-8131eca75e9063a32655e1d172f14a5d.png"},86580:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/lab02-04-96f083f3e1f44ca510cf9f7b9408854c.png"},19647:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/lab02-05-b1f171169d70685a2231c3d4f54461e8.png"},60812:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/lab02-06-2b1218c89807135c6857ac0d3e76dcdb.png"},42433:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/lab02-07-b1ebc80de6d938d5103842f91a6926e7.png"},36455:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/lab02-08-02b5a1cbef83fd88e201804ff2abcb17.png"},24353:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/lab02-09-bb2102a7dac5f11be418e7eb8a11635b.png"},85394:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/lab02-10-885291ee9b33a5b085f25c5d41eeda45.png"},49448:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/lab02-11-62faf33a0f769206223710cb1c6109c8.png"},55895:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/lab02-12-4899a02318185186221cdfe26c6b67d1.png"},17924:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/lab02-13-cbb3762e7d06b0da907ae8263051c1d4.png"},67602:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/lab02-14-c342a94b077887c689012cd492765644.png"},71418:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/lab02-15-c04460f7edacb69cf46e8a2bc3161ac8.png"}}]);