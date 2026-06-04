# Personal Portfolio

A responsive developer portfolio built with Next.js, TypeScript, and Chakra UI to showcase projects, technical skills, experience, education, and contact information.

## Live Demo

Add your deployed URL here after publishing the site.

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Chakra UI
- Framer Motion

## Features

- Responsive single-page portfolio layout
- Featured project showcase
- Resume section for education, skills, and experience
- Contact form with validation and server-backed submission
- Downloadable resume
- Social links and SEO-friendly metadata

## Project Structure

```text
app/
  components/
  layout.tsx
  page.tsx
public/
  download/resume.pdf
```

## Running Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Build for Production

```bash
npm run build
npm run start
```

## Environment Variables

To enable contact email delivery and production metadata, configure:

```bash
CONTACT_FROM_EMAIL=portfolio@your-domain.com
CONTACT_TO_EMAIL=your-email@example.com
RESEND_API_KEY=your_resend_api_key
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Without these values, the contact endpoint returns a friendly direct-email
fallback message.

## What I Improved

- Built reusable Chakra UI components for each section
- Organized the app with the Next.js App Router
- Added cleaner metadata for portfolio SEO and sharing
- Improved form validation and contact reliability
- Added a server-backed contact endpoint with delivery fallback behavior
- Tightened content quality and external link safety
- Added reusable project data and case-study pages

## Future Improvements

- Add automated tests and CI checks
- Add a blog or writing section
- Improve Lighthouse scores and social preview assets
