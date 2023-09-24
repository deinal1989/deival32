import { NewsletterAPI } from 'pliny/newsletter'
import siteMetadata from '@/data/siteMetadata'

let handler;

if (siteMetadata.newsletter) {
  handler = NewsletterAPI({
    provider: siteMetadata.newsletter.provider,
  });
} else {
  // Si siteMetadata.newsletter no está definido, puedes manejarlo de acuerdo a tus necesidades.
  // Por ejemplo, puedes asignar un valor predeterminado o lanzar un error.
  console.error('siteMetadata.newsletter no está definido');
}

export { handler as GET, handler as POST }
