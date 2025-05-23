// filepath: c:\projects\Cosmic Run Website\src\config\company.js
/**
 * Central configuration for company information
 * Used across all languages and components for consistent legal information
 * 
 * Legal requirements for German GbR websites (Impressum):
 * - Name of the GbR plus names of all partners (personally liable)
 * - Address
 * - Email address (or other electronic contact)
 * - VAT identification number (if applicable)
 * 
 * Note: Unlike a GmbH, a GbR is not required to be registered in the commercial register
 */

export default {
  // Basic company information
  name: 'Zinktank Labs',
  legalForm: '', // Removed GbR designation
  address: {
    street: 'Zimmerstr. 38',
    city: 'Hamburg',
    zip: '22085',
    country: 'Germany'
  },
  
  // Contact information
  contact: {
    email: 'contact@zinktanklabs.com',
    privacyEmail: 'privacy@zinktanklabs.com',
    // Phone is optional - not legally required if email is provided
    phone: null // Set to null to hide phone number, or provide a number if desired
  },
  
  // Theme settings
  theme: {
    accentColor: '#00ff84',
    accentColorRgb: '0, 255, 132', // RGB values for rgba usage
    accentColorDarker: '#00cc6a'
  },
  
  // GbR partners (all partners must be listed for a GbR)
  partners: [
    {
      name: 'Edvin Granulo',
      title: 'Co-Founder'
    },
    {
      name: 'Deniz Kekeç', 
      title: 'Co-Founder'
    },
    {
      name: 'Christian Willner',
      title: 'Co-Founder'
    }
  ],
  
  // Tax information (different from GmbH)
  tax: {
    vatId: null, // not applicable
    taxNumber: '43/669/04633' // Local tax number (Steuernummer)
  },
  
  // Social media profiles
  social: {
    bluesky: 'https://bsky.app/profile/cosmicrungame.bsky.social',
    twitter: 'https://x.com/cosmicrungame',
    instagram: 'https://instagram.com/cosmicrungame/',
    tiktok: 'https://tiktok.com/@cosmicrungame',
    reddit: 'https://reddit.com/user/CosmicRunGame/'
  },
    // Website information
  website: {
    companyDomain: 'zinktanklabs.com',
    productDomain: 'zinktanklabs.com', // Updated to match the CNAME change
    protocol: 'https',
    get companyUrl() { return `${this.protocol}://${this.companyDomain}`; },
    get productUrl() { return `${this.protocol}://${this.productDomain}`; },
    get fullUrl() { return this.productUrl; }
  },
  
  // Company Emails (derived from domain)
  get emails() {
    return {
      contact: `contact@${this.website.companyDomain}`,
      privacy: `privacy@${this.website.companyDomain}`,
    };
  },
  // Analytics
  analytics: {
    googleAnalyticsId: 'G-DXLDXJBJJX'
  }
};