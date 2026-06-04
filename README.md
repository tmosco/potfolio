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
- Contact form with validation and email handoff
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

## What I Improved

- Built reusable Chakra UI components for each section
- Organized the app with the Next.js App Router
- Added cleaner metadata for portfolio SEO and sharing
- Improved form validation and contact reliability
- Tightened content quality and external link safety

## Future Improvements

- Add dedicated case-study pages for featured projects
- Add automated tests and CI checks
- Replace the mailto contact flow with a server-backed form
- Add a blog or writing section
- Improve Lighthouse scores and social preview assets
