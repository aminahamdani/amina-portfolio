# 🚀 Build and Deploy Your React Portfolio

## Prerequisites

**You need Node.js installed first!**

1. Download Node.js from: https://nodejs.org/ (choose LTS version)
2. Install it (accept all defaults)
3. **Restart your terminal/command prompt** after installation

## Step-by-Step Deployment

### Step 1: Install Dependencies

Open PowerShell or Command Prompt and run:

```powershell
cd "c:\Users\Amina Rubab Hamdani\OneDrive\Documents\My Projects\amina-portfolio\Update portfolio webpage"
npm install
```

### Step 2: Build the React App

```powershell
npm run build
```

This creates a `dist` folder with your built website.

### Step 3: Copy Built Files to Repository Root

```powershell
# Go back to repository root
cd "c:\Users\Amina Rubab Hamdani\OneDrive\Documents\My Projects\amina-portfolio"

# Copy all files from dist to root (replace old files)
Copy-Item -Path "Update portfolio webpage\dist\*" -Destination "." -Recurse -Force
```

### Step 4: Commit and Push

```powershell
git add .
git commit -m "Deploy React portfolio to GitHub Pages"
git push origin master
```

### Step 5: Wait and Check

- Wait 2-5 minutes for GitHub Pages to rebuild
- Visit: https://aminahamdani.github.io/amina-portfolio/
- Clear browser cache if you see old version (Ctrl+Shift+R)

## ✅ What Will Happen

- Your React portfolio will replace the old HTML version
- Contact form will work (using EmailJS env variables)
- All your projects and content will be live
- Modern React design with dark mode toggle

## ❓ Troubleshooting

**"npm is not recognized"**
- Install Node.js from nodejs.org
- Restart your terminal after installation

**Build fails**
- Make sure you're in the "Update portfolio webpage" folder
- Run `npm install` first
- Check for error messages

**Website shows old version**
- Clear browser cache (Ctrl+Shift+R)
- Wait a few more minutes
- Check GitHub Pages settings (Settings → Pages → should be set to `master` branch)
