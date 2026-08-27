/** Enlaces a redes sociales y contacto. Todos opcionales. */
export interface SocialLinks {
  instagram?: string;
  facebook?: string;
  tiktok?: string;
  /** Número de WhatsApp en formato internacional sin signos. Ej: "5215512345678". */
  whatsapp?: string;
}

/**
 * Configuración general del sitio (marca, redes y datos de contacto).
 * Preparado para crecer con horario, dirección y Google Maps en el futuro.
 */
export interface SiteConfig {
  /** Nombre de la marca. */
  name: string;
  /** Frase corta bajo el nombre. Ej: "Panadería & Café". */
  tagline: string;
  /** Redes sociales para el footer. */
  social: SocialLinks;
}
