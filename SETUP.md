# Quick Setup Guide

## Step 1: Configure Formspree (Required)

1. Go to https://formspree.io and sign up
2. Create a new form
3. Copy your form ID (looks like: `mxxxxxxx`)
4. Open `src/pages/Register.jsx`
5. Find line with: `action="https://formspree.io/f/YOUR_FORMSPREE_ID"`
6. Replace `YOUR_FORMSPREE_ID` with your actual ID

Example:
```jsx
action="https://formspree.io/f/mxxxxxxx"
```

## Step 2: Add Your GPay QR Code (Required)

1. Generate your GPay QR code
2. Save the image as `gpay-qr.png`
3. Place it in the `public/` folder (replace the placeholder)

## Step 3: Run Locally

```bash
npm install
npm run dev
```

Visit: http://localhost:5173

## Step 4: Deploy to Vercel

### Quick Deploy:
```bash
npm install -g vercel
vercel
```

### Or via GitHub:
1. Push code to GitHub
2. Go to vercel.com
3. Import your repository
4. Click Deploy

Done! Your event registration site is live.

## Customization Tips

### Change Colors
Edit `src/styles.css` and search for:
- `#667eea` (primary purple)
- `#764ba2` (secondary purple)

### Change Registration Fee
Edit `src/pages/Payment.jsx` line with:
```jsx
<p className="payment-amount">Registration Fee: ₹500</p>
```

### Add/Remove Form Fields
Edit `src/pages/Register.jsx` and add new form groups following the existing pattern.

### Update Event Guidelines
Edit `src/pages/Guidelines.jsx` and modify the guideline items.
