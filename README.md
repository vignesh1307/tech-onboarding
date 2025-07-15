# Nightwatch + BrowserStack + Jenkins Demo

This project demonstrates automated end-to-end testing using [Nightwatch.js](https://nightwatchjs.org/) with [BrowserStack](https://www.browserstack.com/) integration and Jenkins CI/CD.

## Features
- Nightwatch.js for browser automation
- Cucumber BDD support
- Parallel cross-browser testing on BrowserStack (Windows/Chrome, OS X/Chrome, Windows/Edge)
- BrowserStack Test Observability integration
- Jenkins CI/CD ready

---

## Prerequisites
- Node.js (v18+ recommended) and npm installed
- [BrowserStack account](https://www.browserstack.com/users/sign_up)
- Jenkins installed (locally or on a server)
- Git (for version control)

---

## Setup

1. **Clone the repository**
   ```sh
   git clone https://github.com/<your-username>/<your-repo>.git
   cd <your-repo>
   ```

2. **Install dependencies**
   ```sh
   npm ci
   ```

3. **Configure BrowserStack credentials**
   - Set your credentials in `nightwatch.conf.js` or use environment variables:
     - `BROWSERSTACK_USERNAME`
     - `BROWSERSTACK_ACCESS_KEY`

4. **(Optional) Enable BrowserStack Test Observability**
   - The project is pre-configured for Observability using the `@nightwatch/browserstack` plugin.

---

## Running Tests Locally

Run tests in all configured BrowserStack environments:
```sh
npx nightwatch --env browserstack,osx_chrome,edge_windows
```

---

## Jenkins Integration

1. **Install Node.js on Jenkins agent** (or use the NodeJS plugin).
2. **Configure your Jenkins job** with these build steps:
   ```sh
   cd /path/to/your/project
   export PATH=/usr/local/bin:/opt/homebrew/bin:$PATH
   npm ci
   npx nightwatch --env browserstack,osx_chrome,edge_windows
   ```
3. **Set BrowserStack credentials as Jenkins environment variables** (recommended for security).
4. **Trigger the build** and monitor the console output.

---

## Project Structure
```
Nightwatch/
├── nightwatch.conf.js         # Nightwatch and BrowserStack config
├── package.json
├── package-lock.json
├── browserstack.yml           # (Optional, not used by Nightwatch)
├── test/
│   └── features/
│       └── nightwatch/
│           ├── nightwatch.feature
│           └── step_definitions/
│               └── nightwatch.js
└── ...
```

---

## Useful Links
- [Nightwatch.js Documentation](https://nightwatchjs.org/)
- [BrowserStack Automate Documentation](https://www.browserstack.com/docs/automate/selenium/getting-started/nodejs/nightwatch)
- [BrowserStack Test Observability for Nightwatch](https://www.browserstack.com/docs/test-reporting-and-analytics/quick-start/nightwatch)
- [Jenkins Documentation](https://www.jenkins.io/doc/)

---

## License
MIT 