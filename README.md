Overview
A modular, scalable UI automation framework built using Playwright, TypeScript, and the Page Object Model (POM) design pattern. It demonstrates modern browser automation with fast execution, cross‑browser support, reusable page classes, and clean test organization.

Tech Stack
Playwright
TypeScript
Node.js
Jest / Playwright Test Runner 
Page Object Model (POM)

Features
Cross‑browser execution (Chromium, Firefox, WebKit)
Page Object Model for maintainable and reusable code
Centralized selectors and actions for each page
Configurable test environment and base URL
Automatic screenshots on failure 
Parallel test execution
HTML reports (if enabled in config)
Environment‑based test data support

Project Structure
tests/ — Test specs written in TypeScript
pages/ — Page Object classes for each screen/page
utils/ — Helpers, config, and reusable utilities
playwright.config.ts — Global configuration (browsers, retries, reporters, base URL)
package.json — Dependencies and scripts

Sample Scenarios
Validate page title and key UI elements
Login flow with valid/invalid credentials
Navigation between pages

Form submission and validation

End‑to‑end user journey tests
