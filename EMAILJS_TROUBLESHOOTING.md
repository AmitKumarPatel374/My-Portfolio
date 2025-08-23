# EmailJS Troubleshooting Guide

## Problem: "Failed to send message. Please try again."

If you're getting this error, follow these steps to fix it:

### Step 1: Check Your EmailJS Credentials

1. **Go to EmailJS Dashboard**: https://www.emailjs.com/
2. **Sign in** to your account
3. **Update the `emailjs-config.js` file** with your actual credentials:

```javascript
export const EMAILJS_CONFIG = {
  serviceId: 'your_actual_service_id',    // From Email Services
  templateId: 'your_actual_template_id',  // From Email Templates
  userId: 'your_actual_user_id'           // From Account > API Keys
};
```

### Step 2: Verify EmailJS Service Setup

1. **Check Email Services**:
   - Go to "Email Services" in EmailJS dashboard
   - Make sure your Gmail service is connected and active
   - Copy the correct Service ID

2. **Check Email Templates**:
   - Go to "Email Templates" in EmailJS dashboard
   - Make sure your template exists and is active
   - Copy the correct Template ID
   - Verify template variables match: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`

3. **Check API Keys**:
   - Go to "Account" > "API Keys" in EmailJS dashboard
   - Copy your Public Key (User ID)

### Step 3: Test EmailJS Configuration

1. **Open Browser Console** (F12)
2. **Fill out the contact form** and submit
3. **Check console logs** for:
   - EmailJS configuration being used
   - Template parameters being sent
   - Any error messages

### Step 4: Common Issues and Solutions

#### Issue 1: "Invalid Service ID"
- **Solution**: Check your Service ID in EmailJS dashboard
- Make sure the Gmail service is properly connected

#### Issue 2: "Invalid Template ID"
- **Solution**: Check your Template ID in EmailJS dashboard
- Make sure the template is published and active

#### Issue 3: "Invalid User ID"
- **Solution**: Check your Public Key in Account > API Keys
- Make sure you're using the Public Key, not the Private Key

#### Issue 4: "Template variables not found"
- **Solution**: Check your email template variables
- Make sure they match: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`

#### Issue 5: "Gmail service not connected"
- **Solution**: Reconnect your Gmail account in Email Services
- Make sure 2-factor authentication is properly configured

### Step 5: Alternative Solution - Use Environment Variables

If you prefer using environment variables, create a `.env` file in your project root:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_USER_ID=your_user_id
```

Then update `Contact.js` to use environment variables instead of the config file.

### Step 6: Test the Fix

1. **Update your credentials** in `emailjs-config.js`
2. **Restart your development server** (`npm start`)
3. **Test the contact form** again
4. **Check your email** for the received message

### Step 7: Still Having Issues?

If the problem persists:

1. **Check EmailJS status**: https://status.emailjs.com/
2. **Verify your Gmail settings**: Make sure it allows less secure apps or use App Passwords
3. **Check your EmailJS plan**: Free plan has limitations
4. **Contact EmailJS support**: https://www.emailjs.com/support

### Debug Information

The updated code now includes:
- Better error logging in console
- Detailed error messages displayed to users
- Configuration validation
- Step-by-step debugging information

Check the browser console for detailed error information when the form fails to submit.
