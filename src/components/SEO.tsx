import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  schema?: object;
}

export default function SEO({ title, description, keywords, schema }: SEOProps) {
  useEffect(() => {
    document.title = `${title} | NoPain Dental Lounge`;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }

    if (schema) {
      let schemaScript = document.querySelector('script[type="application/ld+json"]');
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schema);
    }

    return () => {
      if (schema) {
        const schemaScript = document.querySelector('script[type="application/ld+json"]');
        if (schemaScript) {
          schemaScript.remove();
        }
      }
    };
  }, [title, description, keywords, schema]);

  return null;
}
