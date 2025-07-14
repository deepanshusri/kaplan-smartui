# GitHub Workflow Setup for LambdaTest Smart UI

## Overview
This GitHub workflow automatically triggers LambdaTest Smart UI visual regression tests when:
- A Pull Request is raised against the `main` branch
- There are changes in the `components/` folder

## Setup Instructions

### 1. Add GitHub Secret
You need to add your LambdaTest project token as a GitHub secret:

1. Go to your repository on GitHub
2. Navigate to Settings → Secrets and variables → Actions
3. Click "New repository secret"
4. Name: `LAMBDATEST_PROJECT_TOKEN`
5. Value: Your LambdaTest project token (format: `PROJECT_ID#ACCESS_KEY#PROJECT_NAME`)

### 2. Workflow Configuration
The workflow file is located at `.github/workflows/lambdatest-smartui.yml` and includes:

- **Trigger**: Pull requests to main branch with changes in `components/` folder
- **Environment**: Ubuntu latest with Node.js 18
- **Steps**:
  1. Checkout code
  2. Setup Node.js with Yarn cache
  3. Install dependencies
  4. Build Storybook
  5. Install LambdaTest SmartUI CLI
  6. Run SmartUI tests

### 3. Project Token Format
Your project token should be in the format:
```
PROJECT_ID#ACCESS_KEY#PROJECT_NAME
```

Example: `261250#8425c10f-7087-42d1-803b-3939180f63e1#SUI-POC`

### 4. SmartUI Configuration
The workflow uses the existing `.smartui.json` configuration file which specifies:
- Browsers: Chrome, Safari
- Resolution: 1920x1080
- Include/Exclude patterns (currently empty)

## Workflow Behavior
- The workflow will only run when there are changes in the `components/` folder
- It builds your Storybook and runs visual regression tests using LambdaTest Smart UI
- Results will be available in your LambdaTest dashboard
- The PR status will be updated based on the test results

## Troubleshooting
- Ensure your `LAMBDATEST_PROJECT_TOKEN` secret is correctly set
- Verify that your `.smartui.json` configuration is valid
- Check the GitHub Actions logs for detailed error messages
