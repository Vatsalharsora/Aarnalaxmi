import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = "Aarnalaxmi Cotton - Premium Organic Cotton Supplier | Sustainable Cotton Trading",
  description = "Leading organic cotton supplier from India. Premium quality cotton products, sustainable farming practices, and global cotton trading. Certified organic cotton for textile manufacturers worldwide.",
  keywords = "organic cotton, cotton supplier, sustainable cotton, premium cotton, cotton trading, textile cotton, Indian cotton, cotton export, eco-friendly cotton, certified organic cotton",
  image = "/og-image.jpg",
  url = "https://aarnalaxmi.com",
  type = "website",
  author = "Aarnalaxmi Cotton",
  publishedTime,
  modifiedTime,
  article = false,
  noindex = false,
  canonical
}) => {
  const siteUrl = "https://aarnalaxmi.com";
  const fullUrl = url.startsWith('http') ? url : `${siteUrl}${url}`;
  const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        "name": "Aarnalaxmi Cotton",
        "alternateName": "Aarnalaxmi Enterprises",
        "url": siteUrl,
        "logo": {
          "@type": "ImageObject",
          "url": `${siteUrl}/logo-aarnalaxmi.png`,
          "width": 300,
          "height": 100
        },
        "description": "Leading organic cotton supplier from India specializing in premium quality cotton products and sustainable farming practices.",
        "foundingDate": "1998",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Global Trade Centre, Cotton Avenue, Sector 15",
          "addressLocality": "Ahmedabad",
          "addressRegion": "Gujarat",
          "postalCode": "380015",
          "addressCountry": "IN"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-98765-43210",
          "contactType": "customer service",
          "email": "contact@aarnalaxmi.com",
          "availableLanguage": ["English", "Hindi", "Gujarati"]
        },
        "sameAs": [
          "https://www.linkedin.com/company/aarnalaxmi-cotton",
          "https://twitter.com/aarnalaxmi",
          "https://www.facebook.com/aarnalaxmi"
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        "url": siteUrl,
        "name": "Aarnalaxmi Cotton",
        "description": description,
        "publisher": {
          "@id": `${siteUrl}/#organization`
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${siteUrl}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": `${fullUrl}/#webpage`,
        "url": fullUrl,
        "name": title,
        "isPartOf": {
          "@id": `${siteUrl}/#website`
        },
        "about": {
          "@id": `${siteUrl}/#organization`
        },
        "description": description,
        "breadcrumb": {
          "@id": `${fullUrl}/#breadcrumb`
        },
        "inLanguage": "en-US",
        "potentialAction": [
          {
            "@type": "ReadAction",
            "target": [fullUrl]
          }
        ]
      }
    ]
  };

  // Add article structured data if it's an article/blog post
  if (article && publishedTime) {
    structuredData["@graph"].push({
      "@type": "Article",
      "@id": `${fullUrl}/#article`,
      "isPartOf": {
        "@id": `${fullUrl}/#webpage`
      },
      "author": {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`
      },
      "headline": title,
      "description": description,
      "datePublished": publishedTime,
      "dateModified": modifiedTime || publishedTime,
      "mainEntityOfPage": {
        "@id": `${fullUrl}/#webpage`
      },
      "publisher": {
        "@id": `${siteUrl}/#organization`
      },
      "image": {
        "@type": "ImageObject",
        "url": fullImageUrl,
        "width": 1200,
        "height": 630
      },
      "articleSection": "Cotton Industry",
      "inLanguage": "en-US"
    });
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical || fullUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="Aarnalaxmi Cotton" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@aarnalaxmi" />
      <meta name="twitter:creator" content="@aarnalaxmi" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content={title} />
      
      {/* Article specific tags */}
      {article && publishedTime && (
        <>
          <meta property="article:published_time" content={publishedTime} />
          <meta property="article:modified_time" content={modifiedTime || publishedTime} />
          <meta property="article:author" content={author} />
          <meta property="article:section" content="Cotton Industry" />
          <meta property="article:tag" content="organic cotton" />
          <meta property="article:tag" content="sustainable farming" />
          <meta property="article:tag" content="cotton trading" />
        </>
      )}
      
      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#059669" />
      <meta name="msapplication-TileColor" content="#059669" />
      <meta name="application-name" content="Aarnalaxmi Cotton" />
      <meta name="apple-mobile-web-app-title" content="Aarnalaxmi Cotton" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="IN-GJ" />
      <meta name="geo.placename" content="Ahmedabad, Gujarat, India" />
      <meta name="geo.position" content="23.0225;72.5714" />
      <meta name="ICBM" content="23.0225, 72.5714" />
      
      {/* Business Tags */}
      <meta name="classification" content="Cotton Trading, Organic Cotton, Sustainable Agriculture" />
      <meta name="category" content="Agriculture, Cotton, Trading" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData, null, 2)}
      </script>
    </Helmet>
  );
};

export default SEO;