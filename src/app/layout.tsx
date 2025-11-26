import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Hari Krishnan DS - Full Stack Developer & Senior Technology Associate",
    template: "%s | Hari Krishnan DS"
  },
  description: "Professional portfolio of Hari Krishnan DS, a Senior Technology Associate and Full Stack Developer specializing in React, Next.js, Node.js, and cloud technologies. 3+ years experience with 50+ projects completed.",
  keywords: [
    "Hari Krishnan DS",
    "Full Stack Developer",
    "Senior Technology Associate",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Cloud Developer",
    "AWS Developer",
    "Portfolio",
    "CENTA",
    "Software Engineer",
    "Web Development",
    "Mobile Development",
    "UI/UX Developer"
  ],
  authors: [{ name: "Hari Krishnan DS" }],
  creator: "Hari Krishnan DS",
  publisher: "Hari Krishnan DS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://hari-devportfolio.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hari-devportfolio.vercel.app',
    title: 'Hari Krishnan DS - Full Stack Developer & Senior Technology Associate',
    description: 'Professional portfolio of Hari Krishnan DS, a Senior Technology Associate and Full Stack Developer specializing in React, Next.js, Node.js, and cloud technologies.',
    siteName: 'Hari Krishnan DS Portfolio',
    images: [
      {
        url: '/profile.png',
        width: 1200,
        height: 630,
        alt: 'Hari Krishnan DS - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hari Krishnan DS - Full Stack Developer & Senior Technology Associate',
    description: 'Professional portfolio of Hari Krishnan DS, a Senior Technology Associate and Full Stack Developer specializing in React, Next.js, Node.js, and cloud technologies.',
    images: ['/profile.png'],
    creator: '@harikrishnands',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Hari Krishnan DS",
              "jobTitle": "Senior Technology Associate & Full Stack Developer",
              "description": "Passionate full-stack developer with expertise in modern web technologies. I specialize in building scalable applications using React, Next.js, and cloud technologies.",
              "url": "https://hari-devportfolio.vercel.app",
              "image": "https://hari-devportfolio.vercel.app/profile.png",
              "sameAs": [
                "https://linkedin.com/in/harikrishnands",
                "https://github.com/harikrishnands",
                "https://twitter.com/harikrishnands"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "CENTA"
              },
              "knowsAbout": [
                "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express.js",
                "HTML5", "CSS3", "TailwindCSS", "Bootstrap", "MongoDB", "SQL",
                "AWS", "Docker", "Kubernetes", "GraphQL", "Hasura", "Git",
                "Figma", "Adobe Photoshop", "Webpack", "Vercel", "Jira"
              ],
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Full Stack Developer",
                "occupationLocation": {
                  "@type": "Country",
                  "name": "India"
                },
                "skills": [
                  "Frontend Development", "Backend Development", "Cloud Computing",
                  "Database Management", "API Development", "UI/UX Design"
                ]
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Computer Science Graduate"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
