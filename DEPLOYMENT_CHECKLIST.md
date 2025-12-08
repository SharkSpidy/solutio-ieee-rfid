# Deployment Checklist

Use this checklist to ensure everything is configured before deploying.

## Pre-Deployment Setup

### 1. Formspree Configuration
- [ ] Created Formspree account
- [ ] Created new form in Formspree dashboard
- [ ] Copied form ID (format: `mxxxxxxx`)
- [ ] Updated `src/pages/Register.jsx` line 59 with your form ID
- [ ] Tested form submission locally

### 2. Payment QR Code
- [ ] Generated GPay QR code for your payment account
- [ ] Saved QR code as PNG image
- [ ] Replaced `public/gpay-qr.png` with your QR code
- [ ] Verified QR code displays correctly locally

### 3. Content Customization
- [ ] Updated event name in Landing page
- [ ] Modified guidelines to match your event rules
- [ ] Changed registration fee amount in Payment page
- [ ] Updated contact information (email, phone)
- [ ] Customized any other text/descriptions

### 4. Branding (Optional)
- [ ] Updated navbar logo/title
- [ ] Changed color scheme if desired
- [ ] Replaced favicon.ico with your logo
- [ ] Added any additional branding elements

## Local Testing

- [ ] Ran `npm install` successfully
- [ ] Ran `npm run dev` and tested locally
- [ ] Tested navigation flow: Home → Guidelines → Register → Payment
- [ ] Tested form submission and redirect to payment
- [ ] Checked mobile responsiveness
- [ ] Tested add/remove team members functionality
- [ ] Verified all form validations work
- [ ] Confirmed QR code displays properly
- [ ] Tested in multiple browsers (Chrome, Firefox, Safari)

## Build Verification

- [ ] Ran `npm run build` successfully
- [ ] No build errors or warnings
- [ ] Checked dist folder was created

## Vercel Deployment

### Option A: Via GitHub
- [ ] Pushed code to GitHub repository
- [ ] Logged into vercel.com
- [ ] Clicked "New Project"
- [ ] Imported GitHub repository
- [ ] Clicked "Deploy"
- [ ] Waited for deployment to complete

### Option B: Via CLI
- [ ] Installed Vercel CLI: `npm install -g vercel`
- [ ] Ran `vercel` command
- [ ] Followed prompts to deploy
- [ ] Received deployment URL

## Post-Deployment Testing

- [ ] Visited live URL
- [ ] Tested complete registration flow
- [ ] Submitted test registration via form
- [ ] Verified form submission reached Formspree
- [ ] Checked email notification from Formspree
- [ ] Confirmed redirect to payment page works
- [ ] Verified QR code loads on live site
- [ ] Tested on mobile device
- [ ] Checked all navigation links work
- [ ] Verified responsive design on different devices

## Final Steps

- [ ] Bookmarked deployment URL
- [ ] Updated Formspree form settings (if needed)
- [ ] Set up email notifications in Formspree
- [ ] Shared registration link with your team
- [ ] Announced registration opening to participants

## Troubleshooting

If form doesn't submit:
- Verify Formspree ID is correct
- Check browser console for errors
- Ensure you're not blocking third-party requests

If images don't load:
- Verify files are in public/ folder
- Check file names match exactly
- Clear browser cache and hard refresh

If routing doesn't work on Vercel:
- Verify vercel.json exists
- Check rewrite rules are correct
- Redeploy if necessary

## Emergency Contacts

- Vercel Support: https://vercel.com/support
- Formspree Support: https://help.formspree.io/
- React Documentation: https://react.dev/

---

**Deployment Date**: _____________

**Live URL**: _____________

**Formspree Form ID**: _____________

**Notes**:
_____________________________________________
_____________________________________________
_____________________________________________
