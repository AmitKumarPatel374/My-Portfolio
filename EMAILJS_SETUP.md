# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" as your email service
4. Connect your Gmail account
5. Note down your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

```html
Subject: New Contact Form Message from {{from_name}}

Hello {{to_name}},

You have received a new message from your portfolio website:

**Name:** {{from_name}}
**Email:** {{from_email}}
**Subject:** {{subject}}

**Message:**
{{message}}

Best regards,
Your Portfolio Website
```

4. Note down your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your User ID
1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (User ID)

## Step 5: Update Contact.js
Replace these placeholders in `src/pages/Contact.js`:

```javascript
emailjs.send(
  'YOUR_SERVICE_ID',     // Replace with your Service ID
  'YOUR_TEMPLATE_ID',    // Replace with your Template ID
  templateParams,
  'YOUR_USER_ID'         // Replace with your Public Key
)
```

## Example:
```javascript
emailjs.send(
  'service_abc123',
  'template_xyz789',
  templateParams,
  'user_public_key_here'
)
```

## Step 6: Test
1. Fill out the contact form
2. Submit the message
3. Check your Gmail inbox
4. You should receive the email with the form details

## Troubleshooting:
- Make sure all IDs are correct
- Check browser console for errors
- Verify EmailJS service is active
- Ensure Gmail connection is working 