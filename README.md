
  # Landing Page

  Note: Please ensure you have installed <code><a href="https://nodejs.org/en/download/">nodejs</a></code>

  To preview and run the project on your device:
  1) Open project folder in <a href="https://code.visualstudio.com/download">Visual Studio Code</a>
  2) In the terminal, run `npm install`
  3) Run `npm start` to view project in browser
  # **Issue Report: Multi-Component Image Creation & Deployment Challenges**  

## **Background**  
Our GitHub repository contains multiple components, each requiring its own **ZIP/JAR** file to generate an individual Docker image during the **snapshot workflow**. However, the workflow is currently unable to handle multiple artifacts efficiently, leading to issues in **image creation**.  

Additionally, once the image creation issue is resolved, we need to set up the corresponding **services in Harness** for deployment. The deployment process should be managed through a **single CD repository** instead of maintaining separate CD repositories for each component.  

---

## **Issues Identified**  

### **1. Snapshot Workflow - Multi-Component Image Creation Issue**  
- The workflow needs to dynamically identify and process multiple ZIP/JAR files.  
- Each component should generate a separate Docker image, but the current setup does not support this.  
- Lack of a structured approach to iterate through multiple artifacts and trigger image creation.  

### **2. Harness Services Configuration**  
- After fixing the image creation, each component needs a corresponding **service definition** in Harness.  
- Proper mapping of Docker images to Harness services is required.  
- The pipeline must support deploying multiple components independently.  

### **3. Single CD Repository for Deployment Management**  
- Instead of maintaining separate CD repositories for each component, a **single repository** should manage all deployments.  
- Helm charts and configurations need to be structured to support multiple components within a unified deployment pipeline.  
- Dynamic selection of component configurations during deployment must be enabled.  

---

## **Next Steps**  
- Identify and resolve the issue with multi-component image creation in the snapshot workflow.  
- Set up and configure Harness services for all components.  
- Implement a single CD repository to streamline deployment management.  

This report highlights the key challenges we are facing. Further investigation and updates to the workflow and deployment processes are required to ensure smooth execution.
