# Giscus Comments Not Loading - Troubleshooting Guide

## Current Issue
Your comments show "Loading comments..." but never actually load the comment widget.

## Step-by-Step Diagnosis

### 1. Open the Debug Tool
Open `debug-giscus.html` in your browser to see detailed diagnostic information.

### 2. Check Repository Requirements

**Your repository `noro-math/KnowledgeHub` must have:**
- ✅ Public visibility
- ✅ Discussions enabled
- ✅ Giscus app installed
- ✅ At least one discussion category

### 3. Verify Giscus App Installation

1. Go to https://github.com/apps/giscus
2. Click "Configure" 
3. Make sure `noro-math/KnowledgeHub` is in the selected repositories
4. If not listed, add it

### 4. Check Discussion Categories

1. Go to your repository: https://github.com/noro-math/KnowledgeHub
2. Click "Discussions" tab
3. Verify there's a "General" category
4. If not, create one: Settings → Discussions → Categories → New Category

### 5. Get Correct Configuration

**CRITICAL:** Your current repo-id and category-id might be wrong.

1. Go to https://giscus.app
2. Enter: `noro-math/KnowledgeHub`
3. Select "General" category
4. Copy the EXACT configuration it generates

### 6. Common Issues & Solutions

#### Issue: Repository Not Found
**Solution:** Check repository name spelling and ensure it's public

#### Issue: Discussions Not Enabled
**Solution:** 
```
Repository Settings → General → Features → Check "Discussions"
```

#### Issue: Wrong IDs
**Solution:** Always use giscus.app to generate correct repo-id and category-id

#### Issue: CORS Errors
**Solution:** Ensure your site is served over HTTPS (GitHub Pages does this automatically)

#### Issue: Category Doesn't Exist
**Solution:** Create "General" category in Discussions

## Quick Fix: Use Working Configuration

If you want to test immediately, temporarily use this working configuration:

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

## Browser Console Debugging

1. Open browser Developer Tools (F12)
2. Go to Console tab
3. Look for errors like:
   - `Failed to load resource`
   - `CORS error`
   - `Repository not found`
   - `Category not found`

## Network Tab Debugging

1. Open Developer Tools → Network tab
2. Reload the page
3. Look for failed requests to:
   - `giscus.app`
   - `api.github.com`

## Final Verification Steps

1. **Repository exists and is public**
2. **Discussions are enabled**
3. **Giscus app is installed**
4. **Category "General" exists**
5. **Configuration IDs are correct**
6. **No console errors**
7. **Site is served over HTTPS**

## If Still Not Working

1. Create a new public repository for testing
2. Enable discussions
3. Install Giscus app
4. Use giscus.app to generate config
5. Test with minimal HTML file

## Contact Information

If none of these steps work, the issue might be:
- GitHub API rate limiting
- Temporary Giscus service issues
- Repository permissions problem

Check Giscus status at: https://github.com/giscus/giscus/discussions