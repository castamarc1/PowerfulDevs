"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[65179],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,g=u["".concat(p,".").concat(d)]||u[d]||c[d]||o;return a?n.createElement(g,i(i({ref:t},m),{},{components:a})):n.createElement(g,i({ref:t},m))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},44438:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={slug:"2023-day15",title:"15. \ud83d\ude80 OpenAI & Microsoft Power Platform",authors:["julia"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["power-platform","custom-connector","api-management","apim","authn","openAI","GPT","dalle","natural-language","ai"],image:"https://microsoft.github.io/Low-Code/img/og/30-15.png",description:"Throughout this post, let's discuss how developers can leverage OpenAI's APIs to build next-gen application using Microsoft Power Apps. We will use DALL\xb7E 2 (a new AI system model) to create realistic images and art from a description in natural language.",tags:["low-code-february","30-days-of-lowcode","learn-live","zero-to-hero","ask-the-expert","fusion-teams","power-platform","open-ai"]},i=void 0,l={permalink:"/Low-Code/blog/2023-day15",source:"@site/blog/2023-lcf/2023-02-15/index.md",title:"15. \ud83d\ude80 OpenAI & Microsoft Power Platform",description:"Throughout this post, let's discuss how developers can leverage OpenAI's APIs to build next-gen application using Microsoft Power Apps. We will use DALL\xb7E 2 (a new AI system model) to create realistic images and art from a description in natural language.",date:"2023-02-15T00:00:00.000Z",formattedDate:"February 15, 2023",tags:[{label:"low-code-february",permalink:"/Low-Code/blog/tags/low-code-february"},{label:"30-days-of-lowcode",permalink:"/Low-Code/blog/tags/30-days-of-lowcode"},{label:"learn-live",permalink:"/Low-Code/blog/tags/learn-live"},{label:"zero-to-hero",permalink:"/Low-Code/blog/tags/zero-to-hero"},{label:"ask-the-expert",permalink:"/Low-Code/blog/tags/ask-the-expert"},{label:"fusion-teams",permalink:"/Low-Code/blog/tags/fusion-teams"},{label:"power-platform",permalink:"/Low-Code/blog/tags/power-platform"},{label:"open-ai",permalink:"/Low-Code/blog/tags/open-ai"}],readingTime:6.135,hasTruncateMarker:!1,authors:[{name:"Julia Kasper",title:"Program Manager II",url:"https://github.com/juliajuju93",imageURL:"https://github.com/juliajuju93.png",key:"julia"}],frontMatter:{slug:"2023-day15",title:"15. \ud83d\ude80 OpenAI & Microsoft Power Platform",authors:["julia"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["power-platform","custom-connector","api-management","apim","authn","openAI","GPT","dalle","natural-language","ai"],image:"https://microsoft.github.io/Low-Code/img/og/30-15.png",description:"Throughout this post, let's discuss how developers can leverage OpenAI's APIs to build next-gen application using Microsoft Power Apps. We will use DALL\xb7E 2 (a new AI system model) to create realistic images and art from a description in natural language.",tags:["low-code-february","30-days-of-lowcode","learn-live","zero-to-hero","ask-the-expert","fusion-teams","power-platform","open-ai"]},prevItem:{title:"16. Intro to PCF Control",permalink:"/Low-Code/blog/2023-day16"},nextItem:{title:"14. Intro to Power Fx",permalink:"/Low-Code/blog/2023-day14"}},p={authorsImageUrls:[void 0]},s=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"What is OpenAI",id:"what-is-openai",level:2},{value:"Scenario - Power Apps integration with OpenAI and Azure API Management",id:"scenario---power-apps-integration-with-openai-and-azure-api-management",level:2},{value:"Scenario Overview",id:"scenario-overview",level:3},{value:"Azure API Management",id:"azure-api-management",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Step 1: Add OpenAI&#39;s API into your Azure API Management instance",id:"step-1-add-openais-api-into-your-azure-api-management-instance",level:3},{value:"Step 2: Configure a policy in Azure API Management",id:"step-2-configure-a-policy-in-azure-api-management",level:3},{value:"Step 3: Create a custom connector via Azure API Management",id:"step-3-create-a-custom-connector-via-azure-api-management",level:3},{value:"Step 4: Call your web API via your Power App",id:"step-4-call-your-web-api-via-your-power-app",level:3},{value:"Resources",id:"resources",level:2}],m={toc:s};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"twitter:url",content:"https://microsoft.github.io/Low-Code/blog2023-day15"}),(0,r.kt)("meta",{name:"twitter:title",content:"Build next-gen apps with OpenAI and Microsoft Power Platform"}),(0,r.kt)("meta",{name:"twitter:description",content:"Throughout this post, let's discuss how developers can leverage OpenAI's APIs to build next-gen application using Microsoft Power Apps. We will use DALL\xb7E 2 (a new AI system model) to create realistic images and art from a description in natural language."}),(0,r.kt)("meta",{name:"twitter:image",content:"https://microsoft.github.io/Low-Code/img/og/30-15.png"}),(0,r.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.kt)("meta",{name:"twitter:creator",content:"@jujujuliakasper"}),(0,r.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,r.kt)("link",{rel:"canonical",href:"https://techcommunity.microsoft.com/t5/apps-on-azure-blog/build-next-gen-apps-with-openai-and-microsoft-power-platform/ba-p/3742289"})),(0,r.kt)("p",null,"Welcome to ",(0,r.kt)("inlineCode",{parentName:"p"},"Day 15")," of #30DaysOfLowCode!"),(0,r.kt)("p",null,"The theme for this week is ",(0,r.kt)("strong",{parentName:"p"},"OpenAI and Microsoft Power Platform"),". Over the past few weeks, social-media feeds and newsletters have been filled with stories and conversations about artificial intelligence (AI). ChatGPT and OpenAI were often center of these conversations and today we will take a look at an exciting OpenAI and Power Platform scenario. We will discuss how developers can leverage OpenAI's APIs to build next-gen application using Microsoft Power Apps. For our scenario, we will use DALL\xb7E 2 (a new AI system model) to create realistic images and art from a text description in natural language."),(0,r.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#what-is-openai"},"What is OpenAI")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#scenario---power-apps-integration-with-openai-and-azure-api-management"},"Scenario - Power Apps integration with GitHub and API Management Authorizations")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#scenario---power-apps-integration-with-openai-and-azure-api-management"},"Scenario Overview")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#prerequisites"},"Prerequisites")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#step-1-add-openais-api-into-your-azure-api-management-instance"},"Step 1: Add OpenAI's API into your Azure API Management instance")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#step-2-configure-a-policy-in-azure-api-management"},"Step 2: Configure a policy in Azure API Management")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#step-3-create-a-custom-connector-via-azure-api-management"},"Step 3: Create a custom connector via Azure API Management")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#step-4-call-your-web-api-via-your-power-app"},"Step 4: Call your web API via your Power App")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#resources"},"Resources"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Speaker Card",src:a(4933).Z,width:"1001",height:"420"})),(0,r.kt)("h2",{id:"what-is-openai"},"What is OpenAI"),(0,r.kt)("p",null,"OpenAI is an AI research and deployment company. Developers can use OpenAI's APIs and build applications using their different trained ",(0,r.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/models/models"},"models"),". OpenAI offers a spectrum of models with different levels of understanding or generating natural language or code. These models can be used for everything from content generation to semantic search and classification. Their current most popular model is ",(0,r.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/models/gpt-3"},"GPT-3")," that can understand and generate natural language. For today's scenario, we will use ",(0,r.kt)("a",{parentName:"p",href:"https://openai.com/blog/dall-e/"},"DALL\xb7E 2")," (a new AI system model) to create realistic images and art from a text description in natural language."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Note: Like GPT-3, DALL\xb7E is a transformer language model. DALL\xb7E is a 12-billion parameter version of GPT-3 trained to generate images from text descriptions, using a dataset of text\u2013image pairs."))),(0,r.kt)("h2",{id:"scenario---power-apps-integration-with-openai-and-azure-api-management"},"Scenario - Power Apps integration with OpenAI and Azure API Management"),(0,r.kt)("h3",{id:"scenario-overview"},"Scenario Overview"),(0,r.kt)("p",null,"We want to build a Power App and leverage OpenAI's trained model DALL\xb7E 2 to create a realistic image from only a text description. All of this can be done by just a simple API call for OpenAI's ",(0,r.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/api-reference/images/create"},"image creation"),". We will use ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/api-management/api-management-key-concepts"},"Azure API Management")," to help us securely expose OpenAI's API to the Microsoft Power Platform."),(0,r.kt)("h3",{id:"azure-api-management"},"Azure API Management"),(0,r.kt)("p",null,"Web APIs have experienced an exponential increase in popularity and usage in the past few years.\xa0APIs exist at the intersection of business, products, and technologies and have transformed the way businesses interact with each other and the way they provide value to their customers. The need for organizations to securely manage, deploy, monitor and share APIs has increased as well. Azure API Management helps to create consistent and modern API gateways for existing back-end services hosted anywhere, secure and protect them from abuse and overuse, and get insights into usage and health."),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A running API Management instance. Complete the following\xa0",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/api-management/get-started-create-service-instance"},"Quickstart: Create a new Azure API Management service instance by using the Azure portal"),"."),(0,r.kt)("li",{parentName:"ul"},"Make sure you have a Power Apps or Power Automate ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/power-apps/powerapps-overview#power-apps-for-developers"},"environment"),".")),(0,r.kt)("h3",{id:"step-1-add-openais-api-into-your-azure-api-management-instance"},"Step 1: Add OpenAI's API into your Azure API Management instance"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Sign into Azure portal and go to your API Management instance.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the left menu, select\xa0",(0,r.kt)("strong",{parentName:"p"},"APIs > + Add API")," and select ",(0,r.kt)("strong",{parentName:"p"},"HTTP"),".\n",(0,r.kt)("img",{alt:"Add API",src:a(9019).Z,width:"3652",height:"2257"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the following settings. Then select\xa0",(0,r.kt)("strong",{parentName:"p"},"Create"),"."),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Settings"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Display name"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"openAIAPI"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Name"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"openaiapi"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Web service URL"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},(0,r.kt)("a",{parentName:"em",href:"https://api.openai.com/v1"},"https://api.openai.com/v1")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"API URL suffix"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"openaiapi")))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to the newly created API and select\xa0",(0,r.kt)("strong",{parentName:"p"},"Add Operation"),". Enter the following settings and select\xa0",(0,r.kt)("strong",{parentName:"p"},"Save"),"."),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Settings"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Display name"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"createimage"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"URL for ",(0,r.kt)("strong",{parentName:"td"},"POST")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"/images/generations")))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select your newly created operation and edit ",(0,r.kt)("strong",{parentName:"p"},"Frontend"),"."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Edit Front End",src:a(13246).Z,width:"3135",height:"2118"})),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Next, we need to add a ",(0,r.kt)("strong",{parentName:"p"},"Request Body")," to our API. For this, within our Frontend section scroll down and select ",(0,r.kt)("strong",{parentName:"p"},"Request"),". Now ",(0,r.kt)("strong",{parentName:"p"},"Add representation")," and insert the following information:"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Representations"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CONTENT TYPE"),(0,r.kt)("td",{parentName:"tr",align:null},"application/json")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DEFINITION"),(0,r.kt)("td",{parentName:"tr",align:null},'{"prompt":"A cute baby sea otter","n":1,"size":"512x512"}')))))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add Representation",src:a(12646).Z,width:"3093",height:"1699"})),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Next, we will add a Response to our API. Select ",(0,r.kt)("strong",{parentName:"p"},"Responses")," and insert the following information via ",(0,r.kt)("strong",{parentName:"p"},"+ Add response")," for ",(0,r.kt)("strong",{parentName:"p"},"200 OK"),":"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Representations"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CONTENT TYPE"),(0,r.kt)("td",{parentName:"tr",align:null},"application/json")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DEFINITION"),(0,r.kt)("td",{parentName:"tr",align:null},'{"created": 1589478378,"data": ','[{"url": "https://..."},{"url": "https://..."}]',"}")))))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add Response",src:a(64208).Z,width:"3128",height:"1787"})),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},"Save"),".")),(0,r.kt)("h3",{id:"step-2-configure-a-policy-in-azure-api-management"},"Step 2: Configure a policy in Azure API Management"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Next, we need to assign a policy to our API to make sure we are passing along an API key for authentication. ")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Note: OpenAI API uses API keys for authentication. Visit your ",(0,r.kt)("a",{parentName:"em",href:"https://platform.openai.com/account/api-keys"},"API Keys")," page to retrieve the API key you'll use in your requests."))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Select your operation and in the\xa0",(0,r.kt)("strong",{parentName:"li"},"Inbound processing"),"\xa0section, select the (",(0,r.kt)("inlineCode",{parentName:"li"},"</>"),") (code editor) icon.")),(0,r.kt)("p",null,"Inbound policy:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<policies>\n    <inbound>\n        <base />\n        <set-header name="Authorization" exists-action="override">\n            <value>Bearer YOUR_API_KEY</value>\n        </set-header>\n    </inbound>\n    <backend>\n        <base />\n    </backend>\n    <outbound>\n        <base />\n    </outbound>\n    <on-error>\n        <base />\n    </on-error>\n</policies>\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},"Save")," and we can now test our API in Azure API Management:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Select your operation."),(0,r.kt)("li",{parentName:"ul"},"Go to the ",(0,r.kt)("strong",{parentName:"li"},"Test")," tab."),(0,r.kt)("li",{parentName:"ul"},"Select ",(0,r.kt)("strong",{parentName:"li"},"Send"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Test ",src:a(97237).Z,width:"3372",height:"1702"})),(0,r.kt)("h3",{id:"step-3-create-a-custom-connector-via-azure-api-management"},"Step 3: Create a custom connector via Azure API Management"),(0,r.kt)("p",null,"As soon as your API was tested successfully, you are now able to export your web API to the Microsoft Power Platform. Please find a detailed guide here: ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/api-management/export-api-power-platform"},"Export APIs from Azure API Management to the Power Platform"),".\nIf you want to add additional security to your API, check out our blog post on ",(0,r.kt)("a",{parentName:"p",href:"https://microsoft.github.io/Low-Code/blog/2023-day10"},"10. Secure Connectors with APIM"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create Power",src:a(14590).Z,width:"3025",height:"2291"})),(0,r.kt)("h3",{id:"step-4-call-your-web-api-via-your-power-app"},"Step 4: Call your web API via your Power App"),(0,r.kt)("p",null,"Next, we want to integrate our newly create custom connector in our Power App and make an API call."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In your Power App, add your custom connector to your Power App via the tab ",(0,r.kt)("strong",{parentName:"li"},"data > + Add data"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Custom Connector Power",src:a(30515).Z,width:"1216",height:"1864"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Next, we modify a ",(0,r.kt)("strong",{parentName:"li"},"Generate Picture")," Button with the following PowerFX formula:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'ClearCollect(_datacollection, OpenAIAPI.createimage({prompt:TextInput1.Text,n:1,size:"512x512"}).data); \nReset(TextInput1)\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Power Apps Input",src:a(78191).Z,width:"3423",height:"1724"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Next, we modify an ",(0,r.kt)("strong",{parentName:"li"},"Image")," with the following PowerFX formula:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$"{First(_datacollection).url}"\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Power Apps Input",src:a(12267).Z,width:"3536",height:"1762"})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Now, you are able to test your Power App and create a picture via your text input parameters. This picture will be generated using OpenAI's DALL\xb7E model. Enjoy generating some fun pictures like me:")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Let us know what you think! ",(0,r.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/jukasper/"},"@Julia Kasper"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Don't forget to ",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/PowerfulDevsConf2023"},"Sign up for the Powerful Dev 2023"),"!")),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/PowerfulDevsConf2023"},"Sign up for Powerful Dev 2023")),(0,r.kt)("p",null,"Microsoft Power Platform:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/power-apps/maker/"},"Overview of creating apps in Power Apps")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/power-platform/developer/"},"Microsoft Power Platform developer documentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/connectors/custom-connectors/"},"Custom connectors"))),(0,r.kt)("p",null,"Azure API Management:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/api-management/api-management-key-concepts"},"What is Azure API Management?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://powerapps.microsoft.com/en-us/blog/azure-api-management-connector-on-the-power-platform/"},"Azure API Management connector on the Power Platform"))))}u.isMDXComponent=!0},9019:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/addapi-5638e6105cd44f8b422bacd5c4381ea0.png"},12646:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/addrepresentation-3fd55a00e778096ca33927bd1fb58731.png"},64208:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/addresponse-0ee2490c4bba2be8bc90ac22d70b26e7.png"},14590:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/createpower-c06b51552a8aa8f48d939d4037c0953b.png"},30515:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/customconnectorpower-8466e73e92842e80eee75ce8188949cf.png"},13246:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/editfrontend-4506c10b7026d9f808bcf2c1022a4058.png"},78191:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/powerappsinput1-bcbd09e92785497a8f11ec605ee7f21a.png"},12267:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/powerappsinput2-58795664d36d3fbdb92969d318795b2f.png"},97237:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/test-22f88641645aae35c2f4210b63e9b31b.png"},4933:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/30-15-96338c53bc68ba61c71df358e72c9f5a.png"}}]);