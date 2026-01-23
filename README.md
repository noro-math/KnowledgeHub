# Knowledge Hub

A comprehensive knowledge repository built with Quarto and hosted on GitHub Pages.

## Overview

Knowledge Hub is designed to be a centralized resource for various academic subjects, starting with Mathematics. Each subject is organized by textbook and includes comprehensive notes, exercises, and community discussions.

## Current Content

### Mathematics
- **Linear Algebra**: Based on "Linear Algebra Done Right" by Sheldon Axler
  - Comprehensive chapter notes
  - Practice exercises with solutions
  - Interactive comment sections

## Features

- **Quarto-powered**: Modern, responsive website with excellent math rendering
- **GitHub Pages hosting**: Free, reliable hosting with automatic deployments
- **Comment system**: Giscus integration for community discussions
- **Responsive design**: Works great on desktop and mobile devices
- **Search functionality**: Built-in search across all content
- **Math support**: Full LaTeX math rendering

## Quick Start Summary

**For the impatient:** Here's the minimal steps to get your site live with comments:

1. **Create GitHub repository** (public) - any name you prefer
2. **Push this code** using these exact commands:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Knowledge Hub with Mathematics section"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin master
   git checkout -b main
   git push origin main --force
   ```
3. **Enable GitHub Pages**: Settings → Pages → Source: "GitHub Actions"
4. **Enable Discussions**: Settings → Features → Check "Discussions"
5. **Install Giscus app**: [github.com/apps/giscus](https://github.com/apps/giscus)
6. **Configure comments**: Get settings from [giscus.app](https://giscus.app) and update `_quarto.yml`
7. **Push final changes**: `git add . && git commit -m "Configure comments" && git push`

**Done!** Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

**Note**: If you get merge conflicts during step 2, use `git push origin main --force` to override.

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/knowledge-hub.git
   cd knowledge-hub
   ```

2. **Preview the site locally**:
   ```bash
   quarto preview
   ```
   The site will be available at `http://localhost:4200`

3. **Build the site**:
   ```bash
   quarto render
   ```
   Generated files will be in the `docs/` folder

## Prerequisites

- [Quarto](https://quarto.org/docs/get-started/) installed on your computer
- Git installed on your computer  
- GitHub account (free tier works fine)

## Complete GitHub Setup Instructions

Follow these exact steps to deploy your Knowledge Hub to GitHub Pages with working comments:

#### Step 1: Create GitHub Repository

1. **Go to GitHub** and sign in to your account
2. **Click the "+" icon** in the top right corner → "New repository"
3. **Repository name**: `knowledge-hub` (or your preferred name)
4. **Description**: "A comprehensive knowledge repository built with Quarto"
5. **Set to Public** (required for GitHub Pages free tier)
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. **Click "Create repository"**

#### Step 2: Push Your Code to GitHub

Open your terminal in the project directory and run these commands:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial commit: Knowledge Hub with Mathematics section"

# Add your GitHub repository as origin (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/knowledge-hub.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### Step 3: Enable GitHub Pages

1. **Go to your repository** on GitHub
2. **Click "Settings"** tab (near the top right)
3. **Scroll down** to "Pages" in the left sidebar
4. **Click "Pages"**
5. **Source**: Select "GitHub Actions" (not "Deploy from a branch")
6. **Click "Save"**

The GitHub Action will automatically run and deploy your site. Wait 2-3 minutes, then your site will be available at:
`https://YOUR_USERNAME.github.io/knowledge-hub`

#### Step 4: Enable Discussions for Comments

1. **In your repository**, click the "Settings" tab
2. **Scroll down** to "Features" section
3. **Check the box** next to "Discussions"
4. **Click "Set up discussions"**
5. **Choose "General"** category and click "Start discussion" (you can delete this later)

#### Step 5: Install Giscus App

1. **Go to** [github.com/apps/giscus](https://github.com/apps/giscus)
2. **Click "Install"**
3. **Select "Only select repositories"**
4. **Choose your `knowledge-hub` repository**
5. **Click "Install"**

#### Step 6: Configure Giscus Comments

1. **Go to** [giscus.app](https://giscus.app)
2. **Enter your repository**: `YOUR_USERNAME/knowledge-hub`
3. **Page ↔️ Discussions Mapping**: Select "Discussion title contains page pathname"
4. **Discussion Category**: Select "General"
5. **Features**: Check "Enable reactions for the main post"
6. **Theme**: Select "Light"

#### Step 7: Update Configuration

Copy the configuration from giscus.app and update your `_quarto.yml` file:

1. **Open `_quarto.yml`** in your editor
2. **Find the `format:` section** and add the comments configuration:

```yaml
format:
  html:
    theme: cosmo
    css: styles.css
    toc: true
    toc-depth: 3
    number-sections: true
    code-fold: true
    comments:
      giscus:
        repo: YOUR_USERNAME/knowledge-hub
        repo-id: "YOUR_REPO_ID_FROM_GISCUS"
        category: "General"
        category-id: "YOUR_CATEGORY_ID_FROM_GISCUS"
        mapping: "pathname"
        reactions-enabled: true
        input-position: "bottom"
        theme: "light"
        language: "en"
        loading: "lazy"
```

3. **Replace the placeholder values** with the actual values from giscus.app
4. **Save the file**

#### Step 8: Deploy Updated Configuration

```bash
# Add the changes
git add _quarto.yml

# Commit the changes
git commit -m "Configure Giscus comments system"

# Push to GitHub
git push
```

#### Step 9: Verify Everything Works

1. **Wait 2-3 minutes** for GitHub Actions to rebuild the site
2. **Visit your site**: `https://YOUR_USERNAME.github.io/knowledge-hub`
3. **Navigate to any page** (like Linear Algebra exercises)
4. **Scroll to the bottom** - you should see the comment section
5. **Test commenting** by leaving a test comment

### Troubleshooting

**Comments not showing?**
- Verify Discussions are enabled in repository settings
- Check that Giscus app is installed on your repository
- Ensure repo-id and category-id are correct in `_quarto.yml`
- Wait a few minutes after pushing changes

**Site not updating?**
- Check the "Actions" tab in your GitHub repository
- Look for any failed builds (red X marks)
- Ensure the workflow file is in `.github/workflows/quarto-publish.yml`

**404 Error on GitHub Pages?**
- Verify GitHub Pages is set to "GitHub Actions" source
- Check that the `docs` folder is being generated
- Ensure repository is public

## Adding Comments to Your Pages

### Method 1: Global Comments (Recommended)
Comments are already configured globally in `_quarto.yml`, so they appear on all pages automatically. No additional setup needed!

### Method 2: Page-Specific Comments
To add comments to specific pages only, add this to the YAML frontmatter of any `.qmd` file:

```yaml
---
title: "Your Page Title"
format:
  html:
    comments:
      giscus:
        repo: YOUR_USERNAME/knowledge-hub
        repo-id: "YOUR_REPO_ID_FROM_GISCUS"
        category: "General"
        category-id: "YOUR_CATEGORY_ID_FROM_GISCUS"
        mapping: "pathname"
        reactions-enabled: true
        input-position: "bottom"
        theme: "preferred_color_scheme"
        language: "en"
        loading: "lazy"
---

# Your Content Here

Your page content goes here. Comments will appear at the bottom.
```

### Method 3: Disable Comments on Specific Pages
To disable comments on a specific page (when global comments are enabled), add this to the frontmatter:

```yaml
---
title: "Page Without Comments"
comments: false
---
```

### Method 4: Custom Comment Themes
You can customize the comment theme per page:

```yaml
---
title: "Dark Theme Comments"
format:
  html:
    comments:
      giscus:
        theme: "dark"  # Options: light, dark, preferred_color_scheme
---
```

### Testing Your Comments
1. **Build and serve locally**: `quarto preview`
2. **Navigate to a page with comments**
3. **Scroll to the bottom** - you should see the Giscus comment widget
4. **Try leaving a test comment** (requires GitHub login)

### Comment Configuration Options

| Option | Description | Example Values |
|--------|-------------|----------------|
| `repo` | Your GitHub repository | `username/repo-name` |
| `repo-id` | Repository ID from giscus.app | `"R_kgDOQ_Zwdw"` |
| `category` | Discussion category name | `"General"`, `"Q&A"` |
| `category-id` | Category ID from giscus.app | `"DIC_kwDOQ_Zwd84C1Tsd"` |
| `mapping` | How to map pages to discussions | `"pathname"`, `"title"` |
| `theme` | Comment widget theme | `"light"`, `"dark"`, `"preferred_color_scheme"` |
| `reactions-enabled` | Enable emoji reactions | `true`, `false` |
| `input-position` | Comment box position | `"top"`, `"bottom"` |

## Contributing

### Adding New Content

1. **New Mathematics Section**: 
   - Create a new folder under `mathematics/`
   - Add `index.qmd`, `notes.qmd`, and `exercises.qmd`
   - Update `_quarto.yml` sidebar navigation

2. **New Subject Area**:
   - Create a new top-level folder
   - Add to navbar in `_quarto.yml`
   - Follow the same structure as mathematics

### Content Guidelines

- Use clear, descriptive titles
- Include comprehensive examples
- Provide exercise solutions in collapsible sections
- Add relevant cross-references
- Use proper mathematical notation with LaTeX

## Project Structure

```
knowledge-hub/
├── _quarto.yml           # Main configuration
├── index.qmd            # Homepage
├── styles.css           # Custom styling
├── mathematics/         # Mathematics content
│   ├── index.qmd       # Math homepage
│   └── linear-algebra/ # Linear algebra section
│       ├── index.qmd   # Section overview
│       ├── notes.qmd   # Chapter notes
│       └── exercises.qmd # Practice problems
└── docs/               # Generated site (GitHub Pages)
```

## Customization

- **Styling**: Modify `styles.css` for custom appearance
- **Navigation**: Update `_quarto.yml` for menu structure
- **Theme**: Change theme in `_quarto.yml` format section
- **Comments**: Configure Giscus settings in `_quarto.yml`

## Future Plans

- Real Analysis section
- Abstract Algebra section
- Physics content area
- Computer Science algorithms
- Interactive visualizations
- Video content integration

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Sheldon Axler for "Linear Algebra Done Right"
- Quarto team for the excellent documentation system
- GitHub for free hosting via GitHub Pages