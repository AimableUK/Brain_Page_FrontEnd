"use client";

import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
// import { GoogleOAuthProvider } from "@react-oauth/google";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={urbanist.variable} suppressHydrationWarning>
      <Head>
        {/* Charset & Viewport */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Title */}
        <title>Brain Page - Library Management System</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Brain Page helps you manage books, authors, and borrowers efficiently with a modern library management system."
        />

        {/* Robots */}
        <meta name="robots" content="index, follow" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.brainpage.com/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Brain Page - Library Management System"
        />
        <meta
          property="og:description"
          content="Easily track and manage books, authors, and borrowers with Brain Page."
        />
        <meta property="og:url" content="https://www.brainpage.com/" />
        <meta
          property="og:image"
          content="https://www.brainpage.com/og-image.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Brain Page - Library Management System"
        />
        <meta
          name="twitter:description"
          content="Smart and easy-to-use Library Management System - Brain Page."
        />
        <meta
          name="twitter:image"
          content="https://www.brainpage.com/twitter-banner.jpg"
        />

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Brain Page Library Management System",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              description:
                "A system to manage library books, authors, and borrowers.",
              url: "https://www.brainpage.com",
            }),
          }}
        />
      </Head>
      <body>
        {/* <GoogleOAuthProvider
          clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}
        > */}
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            // disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <Toaster
            toastOptions={{
              classNames: {
                toast: "border !border-accent",
                description: "!text-white",
              },
            }}
          />
        {/* </GoogleOAuthProvider> */}
      </body>
    </html>
  );
}
