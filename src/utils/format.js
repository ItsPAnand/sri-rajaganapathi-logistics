/** Small helper: format a number with locale separators. */
export const formatNumber = (n, locale = 'en-IN') =>
    new Intl.NumberFormat(locale).format(n);

/** Build a WhatsApp deep link. */
export const whatsappLink = (number, text) =>
    `https://wa.me/${number}?text=${encodeURIComponent(text || '')}`;

/** Build a mailto link. */
export const mailtoLink = (email, subject, body) =>
    `mailto:${email}?subject=${encodeURIComponent(subject || '')}&body=${encodeURIComponent(
        body || ''
    )}`;

/** Build a Google Maps directions link. */
export const mapsLink = (query) =>
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
