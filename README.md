# My Web App

This is a simple web application built using Webpack, HTML, CSS, and JavaScript as part of a DevOps project. The app is deployed using GitHub Pages, and all assets are bundled and managed via Webpack.

## Table of Contents
- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Build and Deploy](#build-and-deploy)
- [GitHub Actions Workflow](#github-actions-workflow)
- [Troubleshooting](#troubleshooting)
- [Project Status](#project-status)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This project demonstrates the process of bundling front-end assets using Webpack and deploying a static web app on GitHub Pages. The app contains a simple HTML page with a button that triggers a JavaScript function.

## Technologies Used

- **JavaScript (ES6)**
- **Webpack**  
  Used for bundling and managing project assets.
- **Babel**  
  Used for JavaScript transpiling.
- **CSS**  
  Simple styling of the web app.
- **GitHub Pages**  
  For deployment of the app.
- **GitHub Actions**  
  Automated workflow for continuous integration and deployment (CI/CD).

## Installation

To get started with the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Ohad-Ma/my-web-app.git
2. Navigate into the project directory:
   ```bash
    cd my-web-app
3. Install Dependencies:
   ```bash
   npm install
5. Build the project:
   ```bash
   npm run build
6. To start a local development server (optional):
   ```bash
   npm start

## Build and Deploy

To bundle and deploy the project:

1. **Bundle the Assets:**  
   Webpack is used to bundle the JavaScript and CSS files into a single `bundle.js` file:
   ```bash
   npm run build
2. **Deploy via GitHub Actions:**
  GitHub Actions is used to automate deployment to GitHub Pages. A workflow file in `.github/workflows/gh-pages.yml` automates the following:

  * Bundles the assets.
  * Pushes the generated files to the gh-pages branch.
  
The site is then automatically published at:
[https://ohad-ma.github.io/my-web-app/]()

## GitHub Actions Workflow

The GitHub Actions workflow (`gh-pages.yml`) triggers a build and deploys the bundled files to GitHub Pages. The key parts of the workflow include:

- Installing dependencies.
- Building the assets with Webpack.
- Deploying to the `gh-pages` branch using the `peaceiris/actions-gh-pages` action.

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout the repository
        uses: actions/checkout@v3
      
      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '16'

      - name: Install dependencies
        run: npm install

      - name: Build the project
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist

```
## Troubleshooting

If you encounter any issues, here are some common troubleshooting steps:

1. **404 Not Found on GitHub Pages:**  
   - Make sure the `gh-pages` branch is selected as the source in the repository settings under "GitHub Pages."
   - Verify that the `bundle.js` and `index.html` files are properly generated and pushed to the `gh-pages` branch.

2. **Missing CSS or JavaScript files (404 errors):**  
   - Ensure that Webpack correctly bundles your files into `bundle.js` and that it is referenced correctly in `index.html`.
   - If you are still seeing references to `scripts.js` or `styles.css`, make sure they are replaced with the correct bundled files.

3. **"greet is not defined" Error:**  
   - Ensure that the function `greet()` is properly defined in your JavaScript and is included in `bundle.js`.
   - Make sure that your JavaScript file is linked correctly in your HTML file.

4. **GitHub Actions Failing:**
   - Check the workflow file `.github/workflows/gh-pages.yml` for any misconfigurations.
   - Ensure that the `npm run build` command is correctly set up and runs without errors.
   - Make sure your GitHub repository has a valid token for deploying to GitHub Pages.

---

## Project Structure

Here is a general overview of the project structure after the build:

- **dist/**
  - `bundle.js`
  - `index.html`
- **node_modules/**
- **src/**
  - `index.js`
  - `styles.css`
- `package.json`
- `webpack.config.js`
- **.github/**
  - **workflows/**
    - `gh-pages.yml`

---

## How It Works

- The source files (`index.js`, `styles.css`) are located in the `src/` directory.
- Webpack is used to bundle the JavaScript and CSS files into the `dist/` directory.
- The `bundle.js` file contains all the JavaScript code, and `index.html` is updated to reference the bundle.
- The GitHub Actions workflow automates the deployment process, pushing the bundled assets to the `gh-pages` branch, which is then published via GitHub Pages.

---

## Credits

- This project was built as part of a DevOps learning process, focusing on continuous integration and deployment with GitHub Actions and Webpack.
