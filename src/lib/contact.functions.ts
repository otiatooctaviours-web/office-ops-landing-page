import { createServerFn } from '@tanstack/react-start';
import { contactSchema } from './contact-schema';
export const submitContact = createServerFn({ method: 'POST' })
 .inputValidator((data: unknown) => contactSchema.parse(data))
 .handler(async ({ data }) => {
  const { website, ...submission } = data;
  if (website) throw new Error('Unable to submit request.');
  const { supabaseAdmin } = await import('@/integrations/supabase/client.server');
  const { error } = await supabaseAdmin.from('contact_submissions').insert(submission);
  if (error) throw new Error(error.message.includes('wait before') ? 'Please wait before sending another request.' : 'Your request could not be saved. Please try again.');
  return { success: true };
 });
