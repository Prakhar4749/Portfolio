export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactResult {
  success: boolean;
  error?: string;
}

export async function submitContactForm(data: ContactFormData): Promise<ContactResult> {
  const url = import.meta.env.VITE_GOOGLE_SHEETS_URL;

  if (!url) {
    console.error("VITE_GOOGLE_SHEETS_URL is not set in .env");
    return { success: false, error: "Contact service not configured." };
  }

  try {
    /**
     * Google Apps Script Note:
     * 1. Must use 'no-cors' mode because GAS does not support CORS headers.
     * 2. 'no-cors' mode results in an 'opaque' response (status 0), so we can't 
     *    actually verify if the script succeeded or failed (like a 403 or 500).
     * 3. We remove explicit headers to ensure it remains a "simple request" 
     *    and avoids a CORS preflight (OPTIONS) which GAS will block with a 403.
     */
    await fetch(url, {
      method: "POST",
      mode: "no-cors",
      cache: "no-cache",
      body: new URLSearchParams(data as any),
    });

    // Because the response is opaque, we have to assume success if the browser 
    // didn't throw a network-level error. 
    return { success: true };
  } catch (err: any) {
    console.error("Contact Form Error:", err);
    return { success: false, error: "Network error. Please check your connection." };
  }
}
