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

## Step 5: Update Your Code

Open `/src/app/App.tsx` and find this line (around line 49):

```javascript
emailjs.send('service_5q5q5q5', 'template_5q5q5q5', formData, 'user_5q5q5q5')
```

Replace the placeholder IDs with your actual IDs:

```javascript
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY')
```

**Example:**
```javascript
emailjs.send('service_abc1234', 'template_xyz5678', formData, 'user_AbC123XyZ')
```

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