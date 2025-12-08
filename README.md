# Event Registration Website

A complete React + Vite event registration system with Formspree integration and payment flow.

## Features

- Clean, modern UI with responsive design
- Multi-page flow: Landing → Guidelines → Registration → Payment
- Formspree form submission
- Dynamic team member inputs (up to 3 members)
- GPay QR code payment page
- Fully deployable to Vercel

## Project Structure

```
project/
├── public/
│   ├── gpay-qr.png          # Replace with your GPay QR code
│   └── favicon.ico           # Site favicon
│
├── src/
│   ├── pages/
│   │   ├── Landing.jsx       # Landing page with "Get Started" button
│   │   ├── Guidelines.jsx    # Event guidelines page
│   │   ├── Register.jsx      # Registration form with Formspree
│   │   └── Payment.jsx       # Payment page with QR code
│   │
│   ├── components/
│   │   └── Navbar.jsx        # Navigation component
│   │
│   ├── styles.css            # All styling
│   ├── App.jsx               # Main app with routing
│   └── main.jsx              # React entry point
│
├── index.html
├── package.json
├── vite.config.js
└── vercel.json               # Vercel SPA routing config
```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Formspree

1. Go to [Formspree.io](https://formspree.io/) and create a free account
2. Create a new form and get your form ID
3. Open `src/pages/Register.jsx`
4. Replace `YOUR_FORMSPREE_ID` with your actual Formspree form ID:

```jsx
action="https://formspree.io/f/YOUR_FORMSPREE_ID"
```

### 3. Add Your GPay QR Code

1. Generate your GPay QR code
2. Save it as `gpay-qr.png` in the `public/` directory
3. Replace the placeholder image

### 4. Run Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### 5. Build for Production

```bash
npm run build
```

## Deploy to Vercel

### Option 1: Using Vercel CLI

```bash
npm install -g vercel
vercel
```

### Option 2: Using Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

The `vercel.json` file is already configured for SPA routing.

## Customization Guide

### Update Event Details

**Landing Page** (`src/pages/Landing.jsx`):
- Modify the title and description
- Change button text

**Guidelines** (`src/pages/Guidelines.jsx`):
- Edit the guidelines list
- Add or remove guideline items

**Payment Amount** (`src/pages/Payment.jsx`):
- Update the registration fee amount
- Modify contact information

### Form Fields

To add or remove form fields, edit `src/pages/Register.jsx`:

1. Add the form field in the JSX
2. Make sure it has a `name` attribute for Formspree
3. Add validation if needed (`required`, `pattern`, etc.)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **React Router DOM** - Client-side routing
- **Formspree** - Form submission handling
- **Vercel** - Deployment platform
