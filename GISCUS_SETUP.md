# Giscus Setup Guide

## Current Issue
Your Giscus comments show "comments loading..." but never load. This is typically due to configuration issues.

## Step-by-Step Fix

### 1. Verify Repository Settings
Go to your GitHub repository `noro-math/KnowledgeHub` and ensure:

- ✅ Repository is **public**
- ✅ **Discussions** are enabled (Settings → General → Features → Discussions)
- ✅ Repository exists and is accessible

### 2. Install Giscus App
1. Go to [giscus.app](https://giscus.app)
2. Scroll down to the "Configuration" section
3. Enter your repository: `noro-math/KnowledgeHub`
4. Select a Discussion Category (create "General" if it doesn't exist)
5. Choose mapping: "pathname" (recommended)
6. The tool will generate the correct IDs for you

### 3. Get Correct Configuration
The configuration tool at giscus.app will give you the correct:
- `repo-id`
- `category-id`

These must match exactly what GitHub provides.

### 4. Update Your Configuration
Replace the current Giscus configuration in `_quarto.yml` with the values from giscus.app.

### 5. Test the Setup
1. Open the `giscus-test.html` file I created in a browser
2. Check the browser console for any errors
3. If it works there, rebuild your Quarto site

## Common Issues

### Repository Not Found
- Ensure repository name is exactly `noro-math/KnowledgeHub`
- Repository must be public
- You must have admin access

### Category Not Found
- Create a "General" discussion category in your repository
- Or use an existing category and update the configuration

### Wrong IDs
- Always use the configuration tool at giscus.app to get correct IDs
- Don't copy IDs from other repositories

## Quick Fix
If you want to test immediately, you can temporarily use the working giscus demo repository:

```yaml
comments:
  giscus:
    repo: giscus/giscus
    repo-id: "MDEwOlJlcG9zaXRvcnkzNzM2NDM1OTg="
    category: "General"
    category-id: "DIC_kwDOFjQgPs4CA_2S"
    mapping: "pathname"
    reactions-enabled: true
    input-position: "bottom"
    theme: "preferred_color_scheme"
    language: "en"
    loading: "lazy"
```

This will show you how comments should look when working properly.