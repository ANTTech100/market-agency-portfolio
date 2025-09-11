import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dr. Amit Nath - Business Strategist | TEDx Speaker | Award-Winning Mentor',
  description: 'Award-winning business strategist, TEDx speaker, and Amazon bestselling author. Founder of Virtual Closer, empowering entrepreneurs through ancient Vedic closing techniques.',
  keywords: 'business strategy, sales closing, entrepreneur mentor, TEDx speaker, business coach, startup mentor, Vedic techniques, business growth',
  author: 'Dr. Amit Nath',
  openGraph: {
    title: 'Dr. Amit Nath - Business Strategist & Mentor',
    description: 'Transforming businesses through ancient wisdom and modern strategy',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Amit Nath - Business Strategist',
    description: 'Award-winning mentor empowering entrepreneurs across India',
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
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Additional meta tags for better SEO */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        
        {/* Structured data for better search results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Dr. Amit Nath",
              "jobTitle": "Business Strategist & Mentor",
              "description": "Award-winning business strategist, TEDx speaker, and founder of Virtual Closer",
              "url": "https://dramitnatsh.com",
              "sameAs": [
                "https://www.linkedin.com/in/dramitmath",
                "https://twitter.com/dramitmath"
              ],
              "knowsAbout": [
                "Business Strategy",
                "Sales Closing",
                "Entrepreneurship",
                "Business Mentoring",
                "Vedic Business Techniques"
              ],
              "award": [
                "Best Emerging Business Mentor of the Year 2022-23 by Governor of Karnataka",
                "Amazon Best-Selling Author"
              ],
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "California University"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {/* Skip to main content for accessibility */}
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-black px-4 py-2 rounded-lg z-50">
          Skip to main content
        </a>
        
        <main id="main" className="min-h-screen">
          {children}
        </main>
        
        {/* Analytics and performance monitoring can be added here */}
        {process.env.NODE_ENV === 'production' && (
          <>
            {/* Google Analytics or other analytics scripts would go here */}
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  // Performance monitoring
                  if ('serviceWorker' in navigator) {
                    window.addEventListener('load', function() {
                      navigator.serviceWorker.register('/sw.js');
                    });
                  }
                `
              }}
            />
          </>
        )}
      </body>
    </html>
  )
}

// Optional: Add a loading component
export function Loading() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-white text-lg">Loading...</p>
      </div>
    </div>
  )
}

// Error boundary component
export function Error({ error, reset }) {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h2 className="text-2xl font-bold text-white mb-4">Something went wrong!</h2>
        <p className="text-gray-400 mb-6">
          We apologize for the inconvenience. Please try refreshing the page.
        </p>
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  )
}

// Not found page component
export function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h2 className="text-6xl font-bold text-white mb-4">404</h2>
        <h3 className="text-2xl font-semibold text-gray-300 mb-4">Page Not Found</h3>
        <p className="text-gray-400 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
        >
          Go Home
        </a>
      </div>
    </div>
  )
}