import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

// CORE = POWER PLATFORM
// https://learn.microsoft.com/power-platform/guidance/icons
const CoreServices = [
  { 
    title: 'Power Apps',
    svgpath: 'img/landing/power-apps.svg',
    link: "https://learn.microsoft.com/power-apps/?WT.mc_id=javascript-82212-ninarasi",
    description: (
      <>
       Build low-code apps that modernize processes and solve tough business challenges.
      </>
    ),
  },
  { 
    title: 'Power Automate',
    svgpath: 'img/landing/power-automate.svg',
    link: "https://learn.microsoft.com/power-automate/?WT.mc_id=javascript-82212-ninarasi",
    description: (
      <>
        Create automated workflows between your favorite apps & services, for sync, notifications etc.
      </>
    ),
  },
  { 
    title: 'Power Virtual Agents',
    svgpath: 'img/landing/power-virtual-agents.svg',
    link: "https://learn.microsoft.com/power-virtual-agents/?WT.mc_id=javascript-82212-ninarasi",
    description: (
      <>
        Build powerful AI-enabled chatbots to handle a range of conversational requests. 
      </>
    ),
  },
  {
    title: 'Power Pages',
    svgpath: 'img/landing/power-pages.svg',
    link: "https://learn.microsoft.com/power-pages/?WT.mc_id=javascript-82212-ninarasi",
    description: (
      <>
        Create external-facing websites with authenticated users - create & view data with Dataverse.
      </>
    ),
  },
  {
    title: 'Power BI',
    svgpath: 'img/landing/power-bi.svg',
    link: "https://learn.microsoft.com/power-bi/?WT.mc_id=javascript-82212-ninarasi",
    description: (
      <>
        Amplifies insights and data value with expert information & answers to address your needs.
      </>
    ),
  },
  {
    title: 'Power Dataverse',
    svgpath: 'img/landing/power-dataverse.svg',
    link: "https://learn.microsoft.com/power-apps/maker/data-platform/?WT.mc_id=javascript-82212-ninarasi",
    description: (
      <>
        Securely store and manage data that's used by Power Apps business applications. 
      </>
    ),
  },
];


// MORE = AZURE INTEGRATIONS
const MoreServices = [
  {
    title: 'Azure Functions',
    svgpath: 'img/landing/azure-functions.svg',
    link: "https://learn.microsoft.com/azure/azure-functions/?WT.mc_id=javascript-82212-ninarasi",
    description: (
      <>
        Serverless solution - lets you write less code, maintain less infrastructure, and save on costs.
      </>
    ),
  },
  {
    title: 'Azure Logic Apps',
    svgpath: 'img/landing/azure-logic-apps.svg',
    link: "https://learn.microsoft.com/azure/logic-apps/?WT.mc_id=javascript-82212-ninarasi",
    description: (
      <>
        Build automated scalable workflows, business processes, and enterprise orchestrations.
      </>
    ),
  },
  {
    title: 'Azure Cognitive Services',
    svgpath: 'img/landing/azure-cognitive-services.svg',
    link: "https://learn.microsoft.com/azure/cognitive-services/?WT.mc_id=javascript-82212-ninarasi",
    description: (
      <>
        Ready-made AI services (that help you see, hear, speak) to build intelligent apps, websites, and bots.
      </>
    ),
  },
  {
    title: 'Azure API Management',
    svgpath: 'img/landing/azure-apim.svg',
    link: "https://learn.microsoft.com/azure/api-management/?WT.mc_id=javascript-82212-ninarasi",
    description: (
      <>
         Manage modern API gateways. Publish APIs to diverse developer groups, securely and at scale.
      </>
    ),
  },
  {
    title: 'Azure CosmosDB',
    svgpath: 'img/landing/azure-cosmosdb.svg',
    link: "https://learn.microsoft.com/azure/cosmos-db/?WT.mc_id=javascript-82212-ninarasi",
    description: (
      <>
        Fast NoSQL database with SLA-backed speed and availability, automatic + instant scalability & more.
      </>
    ),
  },
  {
    title: 'Azure DevOps',
    svgpath: 'img/landing/azure-devops.svg',
    link: "https://learn.microsoft.com/azure/devops/?view=azure-devops/?WT.mc_id=javascript-82212-ninarasi",
    description: (
      <>
        Collaborate on software development with source control, work tracking & CI/CD - on-premises & in the cloud!
      </>
    ),
  },
  /*
  {
    title: 'Microsoft Graph',
    svgpath: 'img/landing/g-raph.svg',
    link: "https://learn.microsoft.com/graph/?WT.mc_id=javascript-82212-ninarasi",
    description: (
      <>
        Gateway to data & intelligence in Microsoft 365. Build intelligent apps, derive insights & analytics.
      </>
    ),
  },
  */
];


// TOOLS = TEAMS, GITHUB, VISUAL STUDIO CODE
const CoreTools = [
  {
    title: 'Microsoft Teams',
    svgpath: 'img/landing/microsoft-teams.svg',
    link: "https://learn.microsoft.com/microsoftteams/platform/mstdd-landing/?WT.mc_id=javascript-82212-ninarasi",
    description: (
      <>
       Build apps for enhanced collaboration and communication, using integrations with relevant services.
      </>
    ),
  },
  {
    // https://github.com/logos
    title: 'GitHub',
    svgpath: 'img/landing/github-mark.svg',
    link: "https://github.com/features?WT.mc_id=javascript-82212-ninarasi",
    description: (
      <>
       Build, ship and maintain software with tools for collaborate coding, Automation, CI/CD and Administration.
      </>
    ),
  },
  {
    // Logo: https://code.visualstudio.com/brand
    title: 'Visual Studio Code',
    svgpath: 'img/landing/vscode.svg',
    link: "https://code.visualstudio.com/?WT.mc_id=javascript-82212-ninarasi",
    description: (
      <>
       A lighweight but powerful multi-platform source code editor with built-in support for modern programming languages.
      </>
    ),
  },
];




function Feature({svgpath, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <a href={link} target="_blank">
        <div className="text--center">
          <img width="120px" height="120px" src={svgpath} alt={title} />
        </div>
      </a>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

// FIXME:
// When using SVG elements, the icon colors change based on order. 
// Using img for now - debug issue (look at url(#a...) paths)

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {CoreServices.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <hr/>
        <div className="row">
          {MoreServices.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <hr/>
        <div className="row">
          {CoreTools.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}