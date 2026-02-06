#!/bin/bash

# 🚀 Automated GitHub Pages Deployment Script
# This script builds your project and deploys it to GitHub Pages

echo "🎨 Building your portfolio..."
npm run build

echo "📦 Build complete! Files are in the 'dist' folder."
echo ""
echo "📋 Next steps to deploy to GitHub:"
echo ""
echo "1. Navigate to your GitHub repository folder:"
echo "   cd path/to/amina-portfolio"
echo ""
echo "2. Copy the dist files to your repository:"
echo "   cp -r $(pwd)/dist/* path/to/amina-portfolio/"
echo ""
echo "3. Commit and push:"
echo "   git add ."
echo "   git commit -m 'Update portfolio with React version and working contact form'"
echo "   git push origin main"
echo ""
echo "Or use GitHub Desktop to commit and push the changes."
echo ""
echo "✅ Your portfolio will be live at: https://aminahamdani.github.io/amina-portfolio/"
