import { Button } from "@/components/ui/button";
import { useState } from "react";

export function BookingSection() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    eventDate: '',
    format: 'In-Person Keynote',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to submit form');
      }

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (submitted) {
    return (
      <section id="booking" className="py-24 md:py-36 bg-primary border-t-2 border-black">
        <div className="container-width max-w-3xl text-center">
          <div className="bg-white border-2 border-black p-12 shadow-[8px_8px_0px_0px_#000]">
            <div className="w-20 h-20 bg-black text-primary mx-auto mb-6 flex items-center justify-center text-4xl font-bold">
              ✓
            </div>
            <h2 className="text-4xl font-heading font-bold mb-4 uppercase">Message Sent!</h2>
            <p className="text-lg font-mono text-foreground/70">
              Thank you for reaching out. We'll respond within 24 hours.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-24 md:py-36 bg-primary border-t-2 border-black">
      <div className="container-width max-w-3xl">
        <div className="bg-white border-2 border-black p-8 md:p-12 shadow-[8px_8px_0px_0px_#000]">
          <div className="inline-block bg-black text-primary px-4 py-1 font-mono font-bold uppercase tracking-widest text-xs mb-6">
            :: Contact_Form
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-2 uppercase">Book Enrique</h2>
          <p className="text-foreground/70 mb-8 font-mono">
            // Tell us about your event. We usually respond within 24 hours.
          </p>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-mono font-bold uppercase">Name *</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full h-12 px-4 border-2 border-black bg-white focus:outline-none focus:border-primary font-mono" 
                  placeholder="Your name" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-mono font-bold uppercase">Organization *</label>
                <input 
                  type="text" 
                  name="organization"
                  required
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full h-12 px-4 border-2 border-black bg-white focus:outline-none focus:border-primary font-mono" 
                  placeholder="Company name" 
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-mono font-bold uppercase">Email *</label>
              <input 
                type="email" 
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full h-12 px-4 border-2 border-black bg-white focus:outline-none focus:border-primary font-mono" 
                placeholder="you@company.com" 
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-mono font-bold uppercase">Event Date (Optional)</label>
                <input 
                  type="date" 
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full h-12 px-4 border-2 border-black bg-white focus:outline-none focus:border-primary font-mono" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-mono font-bold uppercase">Format</label>
                <select 
                  name="format"
                  value={formData.format}
                  onChange={handleChange}
                  className="w-full h-12 px-4 border-2 border-black bg-white focus:outline-none focus:border-primary font-mono"
                >
                  <option>In-Person Keynote</option>
                  <option>Virtual Keynote</option>
                  <option>Workshop</option>
                  <option>Fireside Chat</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-mono font-bold uppercase">Message *</label>
              <textarea 
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full h-32 px-4 py-3 border-2 border-black bg-white focus:outline-none focus:border-primary resize-none font-mono" 
                placeholder="Tell us about the audience, theme, and goals..." 
              />
            </div>
            
            {error && (
              <div className="p-4 bg-red-50 border-2 border-red-500 text-red-700 font-mono text-sm">
                {error}
              </div>
            )}

            <Button 
              type="submit"
              size="lg" 
              disabled={isSubmitting}
              className="w-full md:w-auto bg-black text-primary border-2 border-black rounded-none font-bold uppercase tracking-wider hover:bg-primary hover:text-black transition-colors shadow-[4px_4px_0px_0px_#00E676] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Inquiry'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}