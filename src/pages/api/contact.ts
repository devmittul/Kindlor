import type { APIRoute } from 'astro';
import { getWhatsAppUrl } from '../../lib/whatsapp';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    const name = data.name?.trim();
    const email = data.email?.trim();
    const phone = data.phone?.trim();
    const projectType = data.projectType || 'General';
    const budget = data.budget || 'Flexible';
    const business = data.business?.trim() || 'N/A';
    const description = data.description?.trim() || '';

    if (!name || !email || !phone) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Validation failed: Please provide your name, email, and phone/WhatsApp number.',
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Build pre-filled WhatsApp fast-track link
    const whatsAppUrl = getWhatsAppUrl(
      'custom',
      `Inquiry from ${name} [${business}]. Service: ${projectType}. Budget: ${budget}. Details: ${description.slice(0, 100)}...`
    );

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Project inquiry recorded successfully. Mittul & Arshmeen will reach out shortly.',
        whatsAppUrl,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Server error processing your inquiry. Please try again or chat directly on WhatsApp.',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
