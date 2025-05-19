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

import companyConfig from './company';

export default {
  // Use company configuration
  company: companyConfig,
  
  // Contact information - reference company config
  contact: {
    get email() { return companyConfig.emails.contact; },
    get privacyEmail() { return companyConfig.emails.privacy; },
    // Phone is optional - not legally required if email is provided
    phone: null // Set to null to hide phone number, or provide a number if desired
  },
  
  // Theme settings - reference company config
  theme: companyConfig.theme,
  
  // Social media profiles - reference company config
  social: companyConfig.social,
  
  // Website information - reference company config
  website: companyConfig.website,
  
  // Analytics - reference company config
  analytics: companyConfig.analytics
};