export const SITE = 'https://disin8.github.io';
export const BASE = '/tied/';
export const SITE_URL = `${SITE}${BASE}`;

export const APP_STORE_URL: string | null = null;

export const CONTACT_EMAIL = 'dmitry8.work@gmail.com';
export const DEVELOPER = 'Dmitry Sinkevich';
export const LEGAL_EFFECTIVE = { en: 'November 15, 2026', ru: '15 ноября 2026 г.' };

export const abs = (path: string) => `${SITE_URL}${path.replace(/^\//, '')}`;
export const url = (path = '') => `${BASE}${path.replace(/^\//, '')}`;
