import { business } from '../data/siteContent';

/** WhatsApp click-to-chat URL with optional prefilled message. */
export function whatsappLink(message = '') {
  const base = `https://wa.me/${business.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Primary tel: link (first listed number). */
export function telLink(index = 0) {
  return `tel:${business.phones[index].tel}`;
}

/** mailto: link. */
export function mailLink(subject = 'Booking enquiry — Maa Shardha Tour and Taxi Service') {
  return `mailto:${business.email}?subject=${encodeURIComponent(subject)}`;
}

/** Prebuilt WhatsApp message for a specific vehicle/service. */
export function vehicleEnquiry(name) {
  return `Hi Maa Shardha Tour & Taxi Service! I'd like to book the ${name}. Please share availability and details.`;
}

/** Prebuilt WhatsApp message for a package. */
export function packageEnquiry(title) {
  return `Hi Maa Shardha Tour & Taxi Service! I'm interested in the "${title}" package. Please share details.`;
}

export const GENERAL_ENQUIRY =
  'Hi Maa Shardha Tour & Taxi Service! I would like to book a cab / tour service. Please assist me.';
