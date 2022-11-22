# bank-of-react-example-code-gh-pages
This repository contains a React application example on how to implement client-side routing with React Router and its components including Route, Router Link, and Redirect.

### Use the following commands to run the application

- First, run this command to install dependencies:
```npm install```
- Next, run this command to start the React application:
```npm start```

Note: This application uses React Router version 5. Optionally, you can run the following command to install React Router version 5 dependencies:
```npm install react-router-dom@5.3.0 react-router@5.2.1```

### Live Link 
[Website link](https://johnnylaicode.github.io/bank-of-react-example-code-gh-pages/)

----------
### Use the following steps to set up and deploy the React application to GitHub Pages
#### 1. Download the React Application
1. Download the GitHub repository ZIP file to your local machine and unzip it.
2. Now you have the React application "bank-of-react-example-code-gh-pages" folder on your local machine. You can copy its files into your own React application folder--to be created in the next step.

#### 2. Create a New React Application and Copy Downloaded Files
1. Start a terminal (e.g., Git Bash) on your local machine.
2. Create a React application named "my-react-app" by entering the command: `npx create-react-app my-react-app`
3. Copy the files from the "bank-of-react-example-code-gh-pages" folder into the "my-react-app" folder.
4. Go into the "my-react-app" folder.
5. All the following steps can be performed inside the "my-react-app" folder. 

#### 3. Add "basename" to Router Tag in "App.js" File
1. In the `App.js` file (see line 38), located inside the `src` folder, make sure that you add the `basename` path in the `<Router>` tag using the following format: `<Router basename="/[repository name]">`
2. For the "my-react-app" application, it should be: `<Router basename="/my-react-app">`

#### 4. Install "gh-pages" Package
1. Install the `gh-pages` package on your local machine by entering the command: `npm install gh-pages --save-dev`
2. After installation, it automatically adds the `gh-pages` version number in the "dependencies" section of the `package.json` file.

#### 5. Add "homepage" Property in "package.json" File
1. In the `package.json` file (see line 4), add a `homepage` property using the following format: `https://[your GitHub username].github.io/[repository name]`
2. For the "my-react-app" application, it should be:`"homepage": "https://[your GitHub username].github.io/my-react-app/",` 
    ```
    {
    "name": "bank-of-react",
    "version": "0.1.0",
    "homepage": "https://[your GitHub username].github.io/my-react-app/",
    ...
    }
    ```

#### 6. Add Deployment Scripts in "package.json" File
1. In the `package.json` file (see lines 19 and 20), add `predeploy` and `deploy` properties to the "scripts" section as follows:
    ```
    "scripts": {
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build",
    ...
    ```

#### 7. Add "remote" to Local Repository to point to GitHub Repository
1. Add a `remote` to the local repository by entering the command in the following format: `git remote add origin https://github.com/[your GitHub username]/[repository name].git`
2. For the "my-react-app" application, it should be:`git remote add origin https://github.com/[your GitHub username]/my-react-app.git` 

#### 8. Deploy React Application to GitHub Pages
1. Deploy the "my-react-app" application to GitHub Pages by entering the command: `npm run deploy`
2. Open a web browser, go to the following address to see your React application on GitHub Pages: `https://[your GitHub username].github.io/my-react-app/` 
