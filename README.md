# PowFPS1 Portfolio (V6)

This is the static deployment build for the **PowFPS1** personal portfolio website.

## Overview

A responsive, high-performance portfolio website showcasing Full Stack Development projects. The site features automatic Dark/Light mode detection and optimized assets.

**Live Domain:** [powsportfolio.dev](https://powsportfolio.dev)

## Project Structure

```text
/
├── assets/           # Bundled JavaScript and CSS assets
├── dark/            # Dark mode favicon/icons
├── light/           # Light mode favicon/icons
├── index.html       # Main entry point
├── og-image.html    # Open Graph image preview
├── fetch_icons.py   # Utility script to fetch SVG icons
└── vercel.json      # Vercel deployment configuration
```

## Features

- **Responsive Design**: Adapts to mobile and desktop viewports.
- **Theme Support**: Automatically switches icons and styles based on system `prefers-color-scheme` (Dark/Light).
- **SEO Optimized**: Includes Open Graph tags and meta descriptions.

## Development Tools

### Icon Fetcher
Included is a Python utility to fetch external SVG icons.

**Usage:**
```bash
python fetch_icons.py
```
This script retrieves icons from configured URLs (e.g., Simple Icons, Font Awesome) and prints the SVG content.

## Deployment

This project is configured for deployment on **Vercel**.

See [DEPLOY_GUIDE.md](./DEPLOY_GUIDE.md) for detailed instructions on how to deploy and configure the domain `powsportfolio.dev`.
