# Weather App – Front-end

A responsive front-end weather application that displays current conditions and forecasts for searched locations. Built with HTML, CSS, and JavaScript, leveraging Bootstrap and Font Awesome for UI, and consuming a public weather API from the browser.

## Features
- Search for city/location weather
- Current weather details (temperature, condition, humidity, wind, etc.)
- Multi-day forecast view
- Persistent, responsive UI with mobile-first layout
- Visual weather icons and clean typography

## Tech Stack
- HTML5
- CSS3
  - Bootstrap 4
  - Custom styles in `css/style.css` and `css/responsive.css`
  - Font Awesome webfonts (in `webfonts/`)
- JavaScript (ES6)
  - Main logic in `js/main.js`
  - jQuery 3.5 (slim and full builds included)
  - Bootstrap JS bundle / Popper

## Project Structure
```
Weather-App-Front-end/
├─ index.html
├─ README.md
├─ .gitattributes
├─ css/
│  ├─ bootstrap.min.css
│  ├─ all.min.css
│  ├─ style.css
│  └─ responsive.css
├─ js/
│  ├─ main.js
│  ├─ jquery-3.5.1.min.js
│  ├─ jquery-3.5.1.slim.min.js
│  ├─ bootstrap.bundle.min.js
│  ├─ bootstrap.min.js
│  ├─ popper.min.js
│  └─ all.min.js
├─ images/
│  └─ [project images, icons, backgrounds]
└─ webfonts/
   └─ [Font Awesome font files]
```

## Getting Started

These steps run the front-end locally using a static server (recommended for correct asset and CORS behavior). If your API calls require an API key or a specific base URL, configure them in `js/main.js` as noted below.

### Prerequisites
- Node.js (for a simple local static server) or any static HTTP server

### Run locally
Option A: Using npm http-server
1. Install once (globally):
   - `npm install -g http-server`
2. Start the server from the project root:
   - `http-server -p 8080`
3. Open your browser at:
   - `http://localhost:8080/`



### Without a server
You can also double-click `index.html` to open it directly in your browser, but some browsers may block API requests or local file loads due to CORS/security. Use a local server if you encounter issues.

## Configuration
Open `js/main.js` and look for configuration values such as:
- API base URL
- API key/token
- Default location

If the app expects environment-like variables, place them near the top of `main.js` (or where configured) and keep your keys private. When committing publicly, avoid hardcoding secrets.

## Customization
- Styles: Edit `css/style.css` and `css/responsive.css`.
- Layout/markup: Edit `index.html`.
- Behavior/API calls: Edit `js/main.js`.
- Assets: Add or replace images in `images/`.

## Building/Dependencies
This is a static front-end. There is no build step required. All dependencies are vendored in `css/`, `js/`, and `webfonts/`. Ensure paths in `index.html` reference the correct files.

## Browser Support
- Modern evergreen browsers (Chrome, Firefox, Edge, Safari). IE is not officially supported.

## Troubleshooting
- Blank or partial UI: Open DevTools console for JavaScript errors from `js/main.js` or missing assets.
- CORS/API failures: Run via local server and verify the weather API allows client-side usage from localhost. Some APIs require server-side proxies.
- Icons not showing: Confirm `all.min.css` is loaded and `webfonts/` directory paths are correct relative to the CSS file.

## Contributing
- Fork the repo
- Create a feature branch
- Commit with clear messages
- Open a pull request with a concise description and screenshots (if UI changes)

## License
This project is provided under the MIT License. See the LICENSE file if present. If no license file exists, treat this as all rights reserved until a license is added.

## Acknowledgments
- Bootstrap
- jQuery
- Font Awesome
- Weather data provider/API
