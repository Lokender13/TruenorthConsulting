import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
    type?: 'website' | 'article' | 'profile';
    image?: string;
    schema?: Record<string, any>;
    keywords?: string;
    noindex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    canonical,
    type = 'website',
    image = '/og-image.jpg',
    schema,
    keywords,
    noindex = false
}) => {
    const location = useLocation();
    const siteUrl = 'https://www.truenorthae.com';
    const siteName = 'TrueNorth Consulting';
    const fullUrl = canonical ? `${siteUrl}${canonical}` : `${siteUrl}${location.pathname}`;
    const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

    // Default keywords for all pages
    const defaultKeywords = 'career counselling, education consultancy, study abroad, Dubai, UAE, India, university admissions, IB curriculum, CBSE, British curriculum, psychometric assessment';
    const allKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title} | {siteName}</title>
            <meta name="title" content={`${title} | ${siteName}`} />
            <meta name="description" content={description} />
            <meta name="keywords" content={allKeywords} />
            <meta name="author" content="TrueNorth Consulting - Surabhi Rawat" />

            {/* Robots */}
            <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'} />

            {/* Canonical URL */}
            <link rel="canonical" href={fullUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:locale" content="en_US" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={fullUrl} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullImage} />
            <meta name="twitter:site" content="@surabhi_truenorth" />
            <meta name="twitter:creator" content="@surabhi_truenorth" />

            {/* Structured Data (JSON-LD) */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
