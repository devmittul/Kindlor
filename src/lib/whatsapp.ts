/**
 * Helper to construct formatted, pre-filled WhatsApp click-to-chat links
 */

const DEFAULT_PHONE_NUMBER = '919876543210'; // Configurable via environment variable

export type ServiceType = 
  | 'general'
  | 'website'
  | 'booking'
  | 'whatsapp_automation'
  | 'restaurant'
  | 'clinic'
  | 'custom';

export function getWhatsAppUrl(
  service: ServiceType = 'general',
  customNote?: string
): string {
  const phoneNumber = import.meta.env.PUBLIC_WHATSAPP_NUMBER || DEFAULT_PHONE_NUMBER;
  
  let message = "Hi Kindlor! I visited your website and would like to discuss a project.";
  
  switch (service) {
    case 'website':
      message = "Hi Kindlor! I'm interested in building a high-performance business website.";
      break;
    case 'booking':
      message = "Hi Kindlor! I need an online booking & appointment system for my business.";
      break;
    case 'whatsapp_automation':
      message = "Hi Kindlor! I want to automate our lead capture and customer inquiries via WhatsApp.";
      break;
    case 'restaurant':
      message = "Hi Kindlor! I'd like to build a table reservation & digital food ordering system.";
      break;
    case 'clinic':
      message = "Hi Kindlor! I'm interested in a doctor appointment and patient intake booking system.";
      break;
    case 'custom':
      message = "Hi Kindlor! I have a custom digital workflow / business automation project to discuss.";
      break;
  }

  if (customNote) {
    message += ` Details: ${customNote}`;
  }

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}
