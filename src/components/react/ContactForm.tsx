import React, { useState } from 'react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    currentWebsite: '',
    businessType: 'Restaurant & Café',
    whatDoYouNeed: 'Business Website',
    timeline: 'Within 2-4 weeks',
    projectGoals: '',
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const accessKey = import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY || '9daee0cc-8cd2-4b17-ac81-4c7111bf86a4';

    if (!accessKey) {
      setStatus({
        success: false,
        message: 'Configuration error: Web3Forms access key is missing.',
      });
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Project Inquiry from ${formData.name} (${formData.business})`,
          ...formData,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus({
          success: true,
          message: 'Project request received. Mittul & Arshmeen will review your details and respond within 24 hours.',
        });
      } else {
        setStatus({
          success: false,
          message: data.message || 'Error sending request. Please try again or chat via WhatsApp.',
        });
      }
    } catch {
      setStatus({
        success: false,
        message: 'Network error. Please try again or reach out on WhatsApp.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[var(--color-surface-card)] p-6 sm:p-10 rounded-xl relative border border-[var(--color-hairline)]" id="project-inquiry" data-purpose="project-request-form">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[var(--color-hairline-strong)] pb-5 mb-8 gap-4">
        <div>
          <h3 className="text-2xl sm:text-3xl font-sans font-bold uppercase tracking-tight text-[var(--color-ink)]">
            START A PROJECT
          </h3>
          <p className="text-sm font-sans text-[var(--color-muted)] mt-2">Tell us about your business and digital goals.</p>
        </div>
        <span className="text-[10px] font-mono text-[var(--color-primary)] tracking-widest uppercase border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5 px-3 py-1 rounded-full whitespace-nowrap">
          REQ // FORM
        </span>
      </div>

      {status?.success ? (
        <div className="space-y-6 text-center py-12">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-3xl font-mono border border-[var(--color-primary)]/30">
            ✓
          </div>
          <h4 className="text-2xl font-sans font-bold text-[var(--color-ink)] uppercase">
            REQUEST RECEIVED
          </h4>
          <p className="text-[15px] text-[var(--color-body)] font-sans max-w-md mx-auto leading-relaxed">
            {status.message}
          </p>
        </div>
      ) : (
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Row 1: Name & Business */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-[10px] font-mono tracking-widest uppercase text-[var(--color-muted-soft)]" htmlFor="name">
                Your Name *
              </label>
              <input
                className="w-full px-4 py-3.5 rounded-lg bg-[var(--color-canvas)] border border-[var(--color-hairline)] text-sm text-[var(--color-ink)] placeholder-[#454555] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                id="name"
                name="name"
                placeholder="e.g. Rahul Sharma"
                required
                type="text"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <label className="block text-[10px] font-mono tracking-widest uppercase text-[var(--color-muted-soft)]" htmlFor="business">
                Business / Company Name *
              </label>
              <input
                className="w-full px-4 py-3.5 rounded-lg bg-[var(--color-canvas)] border border-[var(--color-hairline)] text-sm text-[var(--color-ink)] placeholder-[#454555] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                id="business"
                name="business"
                placeholder="e.g. Keets Dining Studio"
                required
                type="text"
                value={formData.business}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Row 2: Phone & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-[10px] font-mono tracking-widest uppercase text-[var(--color-muted-soft)]" htmlFor="phone">
                WhatsApp / Phone Number *
              </label>
              <input
                className="w-full px-4 py-3.5 rounded-lg bg-[var(--color-canvas)] border border-[var(--color-hairline)] text-sm text-[var(--color-ink)] placeholder-[#454555] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                id="phone"
                name="phone"
                placeholder="+91 98765 43210"
                required
                type="tel"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <label className="block text-[10px] font-mono tracking-widest uppercase text-[var(--color-muted-soft)]" htmlFor="email">
                Email Address (Optional)
              </label>
              <input
                className="w-full px-4 py-3.5 rounded-lg bg-[var(--color-canvas)] border border-[var(--color-hairline)] text-sm text-[var(--color-ink)] placeholder-[#454555] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                id="email"
                name="email"
                placeholder="you@company.com"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Row 3: Current Website & Business Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-[10px] font-mono tracking-widest uppercase text-[var(--color-muted-soft)]" htmlFor="currentWebsite">
                Current Website (if any)
              </label>
              <input
                className="w-full px-4 py-3.5 rounded-lg bg-[var(--color-canvas)] border border-[var(--color-hairline)] text-sm text-[var(--color-ink)] placeholder-[#454555] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                id="currentWebsite"
                name="currentWebsite"
                placeholder="https://yourbusiness.com"
                type="url"
                value={formData.currentWebsite}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <label className="block text-[10px] font-mono tracking-widest uppercase text-[var(--color-muted-soft)]" htmlFor="businessType">
                Business Type
              </label>
              <select
                className="w-full px-4 py-3.5 rounded-lg bg-[var(--color-canvas)] border border-[var(--color-hairline)] text-sm text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-primary)] transition-colors appearance-none"
                id="businessType"
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
              >
                <option value="Restaurant & Café">Restaurants &amp; Cafés</option>
                <option value="Clinic & Healthcare">Clinics &amp; Healthcare</option>
                <option value="Gym & Fitness">Gyms &amp; Fitness</option>
                <option value="Professional Services">Professional Services</option>
                <option value="Local Business">Local Business</option>
                <option value="Retail & E-commerce">Retail &amp; E-commerce</option>
                <option value="Hospitality">Hospitality</option>
                <option value="Service Business">Service Business</option>
                <option value="Growing Brand">Growing Brand / Other</option>
              </select>
            </div>
          </div>

          {/* Row 4: What do you need? & Expected Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-[10px] font-mono tracking-widest uppercase text-[var(--color-muted-soft)]" htmlFor="whatDoYouNeed">
                What Do You Need?
              </label>
              <select
                className="w-full px-4 py-3.5 rounded-lg bg-[var(--color-canvas)] border border-[var(--color-hairline)] text-sm text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-primary)] transition-colors appearance-none"
                id="whatDoYouNeed"
                name="whatDoYouNeed"
                value={formData.whatDoYouNeed}
                onChange={handleChange}
              >
                <option value="Business Website">Business Website Development</option>
                <option value="WhatsApp Lead System">WhatsApp Lead System</option>
                <option value="Booking & Appointment System">Booking &amp; Appointment System</option>
                <option value="Restaurant & Hospitality System">Restaurant &amp; Hospitality System</option>
                <option value="Custom Business Automation">Custom Business Automation</option>
                <option value="Custom Web Application">Custom Web Application</option>
                <option value="Full Digital Package">Full Digital System Package</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-[10px] font-mono tracking-widest uppercase text-[var(--color-muted-soft)]" htmlFor="timeline">
                Expected Timeline
              </label>
              <select
                className="w-full px-4 py-3.5 rounded-lg bg-[var(--color-canvas)] border border-[var(--color-hairline)] text-sm text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-primary)] transition-colors appearance-none"
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
              >
                <option value="Urgent (< 2 weeks)">Urgent (&lt; 2 weeks)</option>
                <option value="Within 2-4 weeks">Standard (2 - 4 weeks)</option>
                <option value="1-2 months">Flexible (1 - 2 months)</option>
              </select>
            </div>
          </div>

          {/* Row 5: Project Goals */}
          <div className="space-y-2">
            <label className="block text-[10px] font-mono tracking-widest uppercase text-[var(--color-muted-soft)]" htmlFor="projectGoals">
              Project Goals & Details *
            </label>
            <textarea
              className="w-full px-4 py-4 rounded-lg bg-[var(--color-canvas)] border border-[var(--color-hairline)] text-sm text-[var(--color-ink)] placeholder-[#454555] focus:outline-none focus:border-[var(--color-primary)] transition-colors resize-y min-h-[120px]"
              id="projectGoals"
              name="projectGoals"
              placeholder="What are the key problems you want to solve? (e.g. need direct online table bookings, lost leads on Instagram, outdated website design)..."
              required
              rows={4}
              value={formData.projectGoals}
              onChange={handleChange}
            />
          </div>

          {status && !status.success && (
            <div className="p-4 bg-red-950/40 border border-red-500/30 text-red-300 text-sm font-sans rounded-lg">
              {status.message}
            </div>
          )}

          {/* Submit Button */}
          <div className="pt-4 flex justify-end">
            <button
              className="w-full sm:w-auto px-8 py-4 bg-[var(--color-primary)] text-[var(--color-on-primary)] font-sans text-[14px] font-semibold rounded-lg hover:bg-[var(--color-primary-active)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center space-x-2 disabled:opacity-50"
              type="submit"
              disabled={loading}
            >
              <span>{loading ? 'SENDING REQUEST...' : 'SEND PROJECT REQUEST →'}</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
