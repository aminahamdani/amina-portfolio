# 🚀 Deploy Your Portfolio to GitHub Pages

Follow these simple steps to update your portfolio at `https://aminahamdani.github.io/amina-portfolio/`

## Step 1: Download Your Project

1. In Figma Make, click the **"Export"** or **"Download"** button (top right)
2. Save the ZIP file to your computer
3. Extract the ZIP file to a folder (e.g., `amina-portfolio-react`)

## Step 2: Install & Build

Open Terminal (Mac) or Command Prompt (Windows) and run:

```bash
# Navigate to your project folder
cd path/to/amina-portfolio-react

# Install dependencies
npm install

# Build the production version
npm run build
```

This creates a `dist` folder with your website ready to deploy.

## Step 3: Update Your GitHub Repository

### Method A: Using Git Commands (Recommended)

```bash
# Clone your existing repository (if you don't have it)
cd ~/Desktop
git clone https://github.com/aminahamdani/amina-portfolio.git
cd amina-portfolio

# Copy all files from the dist folder to your repo
# Replace 'path/to/amina-portfolio-react' with your actual path
cp -r path/to/amina-portfolio-react/dist/* .

# Add all changes
git add .

# Commit with a message
git commit -m "Update portfolio with React version and working contact form"

# Push to GitHub
git push origin main
```

### Method B: Using GitHub Desktop (Easier)

1. Download [GitHub Desktop](https://desktop.github.com/) if you don't have it
2. Open GitHub Desktop
3. Click **"File"** → **"Add Local Repository"**
4. Select your `amina-portfolio` folder
5. Manually copy all files from `dist` folder to `amina-portfolio` folder
6. In GitHub Desktop, you'll see all changes
7. Write commit message: "Update portfolio with working contact form"
8. Click **"Commit to main"**
9. Click **"Push origin"**

### Method C: Upload via GitHub Website (Simplest)

1. Go to `https://github.com/aminahamdani/amina-portfolio`
2. Click **"Add file"** → **"Upload files"**
3. Drag all files from your `dist` folder
4. Scroll down, write commit message: "Update portfolio"
5. Click **"Commit changes"**

## Step 4: Enable GitHub Pages (if not already enabled)

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. Click **"Pages"** in the left sidebar
4. Under "Source", select **"main"** branch
5. Click **"Save"**

## Step 5: Wait & Check

- Wait 2-5 minutes for GitHub to deploy
- Visit: `https://aminahamdani.github.io/amina-portfolio/`
- Your new portfolio should be live! 🎉

## ✅ What to Expect

Your portfolio will now have:
- ✅ Working contact form sending to rubbab.hamdani@gmail.com
- ✅ Clickable project cards with images
- ✅ Modern React-based design
- ✅ Dark mode toggle
- ✅ All your updated content

## ❓ Troubleshooting

**Issue: Website shows old version**
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Wait a few more minutes

**Issue: 404 error**
- Check GitHub Pages settings
- Make sure files are in the root of your repository

**Issue: Build fails**
- Make sure you ran `npm install` first
- Check that Node.js is installed (`node --version`)

---

Need help? Let me know which step you're stuck on!
