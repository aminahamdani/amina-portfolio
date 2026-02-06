# 📧 Email Form Setup Instructions

Your contact form is now ready! Follow these simple steps to connect it to your email:

## Step 1: Create Free EmailJS Account

1. Go to **[https://www.emailjs.com/](https://www.emailjs.com/)**
2. Click **"Sign Up"** (it's FREE - no credit card required!)
3. Sign up with your email or Google account

## Step 2: Add Gmail Service (2 minutes)

1. Once logged in, click **"Email Services"** on the left sidebar
2. Click **"Add New Service"** button
3. Select **"Gmail"**
4. Click **"Connect Account"** and sign in with `rubbab.hamdani@gmail.com`
5. You'll see a **Service ID** (like `service_xyz123`) - **COPY THIS!** ✍️

## Step 3: Create Email Template

1. Click **"Email Templates"** in the dashboard
2. Click **"Create New Template"**
3. Use this template content:

**Subject:**
```
New Portfolio Contact: {{subject}}
```

**Body:**
```
You have a new message from your portfolio!

Name: {{name}}
Email: {{email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent via your portfolio contact form.
```

4. Save the template and copy the **Template ID** (looks like: `template_xyz5678`)

## Step 4: Get Your Public Key

1. Go to **"Account"** → **"General"**
2. Find your **Public Key** (looks like: `user_AbC123XyZ`)
3. Copy it

## Step 5: Add Your Credentials via Environment Variables

**Do not put EmailJS credentials in your source code.** Use a local `.env` file so they stay out of version control.

1. In the project root (`Update portfolio webpage/`), copy the example env file:
   ```bash
   copy .env.example .env
   ```
   (On Mac/Linux: `cp .env.example .env`)

2. Open `.env` and replace the placeholders with your actual EmailJS values:
   ```
   VITE_EMAILJS_SERVICE_ID=service_xyz123
   VITE_EMAILJS_TEMPLATE_ID=template_xyz5678
   VITE_EMAILJS_PUBLIC_KEY=user_AbC123XyZ
   ```

3. Save the file. The app reads these at build time. Restart the dev server if it’s already running.

Your `.env` file is listed in `.gitignore` and will not be committed. This keeps your account safe and avoids rate-limit abuse or spam from exposed keys.

## ✅ That's It!

Your contact form will now:
- ✅ Send emails directly to `rubbab.hamdani@gmail.com`
- ✅ Work on all devices (mobile, tablet, desktop)
- ✅ Show success/error messages
- ✅ Include a loading spinner while sending
- ✅ Clear the form after successful submission

## Test Your Form

1. Fill out your contact form
2. Click "Send Message"
3. Check your inbox at `rubbab.hamdani@gmail.com`
4. You should receive the message within seconds!

## Need Help?

- EmailJS Documentation: https://www.emailjs.com/docs/
- Free tier includes: 200 emails/month (perfect for a portfolio!)

---

**Note:** EmailJS is completely free for up to 200 emails per month, which is more than enough for a portfolio website! 🎉