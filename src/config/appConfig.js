/**
 * Application configuration
 * Centralized config for the Cosmic Run website including:
 * - Company information
 * - Theme settings
 * - Contact details
 * - Social media links
 * - Website metadata
 * - Analytics configuration
 */

export default {
  // Basic company information
  company: {
    name: 'Zinktank Labs',
    legalForm: 'GbR', // Gesellschaft bürgerlichen Rechts
    address: {
      street: 'Zimmerstr. 38',
      city: 'Hamburg',
      zip: '22085',
      country: 'Germany'
    },
    // Tax information (different from GmbH)
    tax: {
      vatId: null, // not applicable
      taxNumber: '43/669/04633' // Local tax number (Steuernummer)
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
  
  // Social media profiles
  social: {
    bluesky: 'https://sky.app/profile/cosmicrungame.bsky.social',
    twitter: 'https://x.com/cosmicrungame',
    instagram: 'https://instagram.com/cosmicrungame/',
    tiktok: 'https://tiktok.com/@cosmicrungame',
    reddit: 'https://reddit.com/user/CosmicRunGame/'
  },
  
  // Website information
  website: {
    domain: 'cosmicrun.zinktanklabs.com',
    fullUrl: 'https://cosmicrun.zinktanklabs.com'
  },
  
  // Analytics
  analytics: {
    googleAnalyticsId: 'G-355558690'
  }
};