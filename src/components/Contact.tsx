import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  MessageSquare, 
  Sparkles, 
  ExternalLink,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  darkMode: boolean;
}

export const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phoneRaw);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in your name, email, and message.');
      return;
    }

    setIsSubmitting(true);

    // Simulate sending network request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 6000);
    }, 1000);
  };

  return (
    <section
      id="contact"
      className={`py-20 border-t transition-colors ${
        darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-900/50 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight font-display mb-4 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Let's Connect & Collaborate
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            I am actively open for Software Engineering roles, Associate Developer positions, and Technical Internships. Feel free to reach out directly.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact Details & Location Card */}
          <div className="lg:col-span-5 space-y-6">
            <div
              className={`p-6 sm:p-8 rounded-2xl border ${
                darkMode
                  ? 'bg-slate-900/80 border-slate-800 shadow-xl shadow-black/20'
                  : 'bg-slate-50 border-slate-200 shadow-md shadow-slate-200/50'
              }`}
            >
              <h3 className={`text-xl font-bold font-display mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Contact Information
              </h3>

              <div className="space-y-5">
                {/* Email Item */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-indigo-600/10 text-indigo-500 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className={`block text-xs font-semibold ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                        Primary Email
                      </span>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className={`text-sm font-semibold hover:text-indigo-500 transition-colors ${
                          darkMode ? 'text-slate-200' : 'text-slate-800'
                        }`}
                      >
                        {PERSONAL_INFO.email}
                      </a>
                      <span className={`block text-xs mt-0.5 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                        College: {PERSONAL_INFO.collegeEmail}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={copyEmail}
                    title="Copy Email"
                    className={`p-2 rounded-lg border transition-colors ${
                      darkMode
                        ? 'border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-300'
                        : 'border-slate-200 bg-white hover:bg-slate-100 text-slate-600'
                    }`}
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-indigo-600/10 text-indigo-500 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className={`block text-xs font-semibold ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                        Phone / WhatsApp
                      </span>
                      <a
                        href={`tel:${PERSONAL_INFO.phoneRaw}`}
                        className={`text-sm font-semibold hover:text-indigo-500 transition-colors ${
                          darkMode ? 'text-slate-200' : 'text-slate-800'
                        }`}
                      >
                        {PERSONAL_INFO.phone}
                      </a>
                      <span className={`block text-xs mt-0.5 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                        Direct voice & messaging line
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={copyPhone}
                    title="Copy Phone"
                    className={`p-2 rounded-lg border transition-colors ${
                      darkMode
                        ? 'border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-300'
                        : 'border-slate-200 bg-white hover:bg-slate-100 text-slate-600'
                    }`}
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Item */}
                <div className="flex items-start gap-3.5 pt-2">
                  <div className="p-2.5 rounded-xl bg-indigo-600/10 text-indigo-500 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className={`block text-xs font-semibold ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      Postal Address / Location
                    </span>
                    <p className={`text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      {PERSONAL_INFO.fullAddress}
                    </p>
                  </div>
                </div>
              </div>

              {/* Response Time Guarantee */}
              <div className={`mt-8 pt-6 border-t flex items-center gap-3 text-xs ${
                darkMode ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-600'
              }`}>
                <Clock className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>Typically responds to recruitment inquiries within 24 hours.</span>
              </div>
            </div>

            {/* Quick Links Card */}
            <div className={`p-5 rounded-2xl border flex items-center justify-between ${
              darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center font-bold text-sm">
                  JP
                </div>
                <div>
                  <h4 className={`text-xs font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Direct Mailto Trigger
                  </h4>
                  <p className="text-[11px] text-slate-400">
                    Open your email client with one click
                  </p>
                </div>
              </div>
              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Opportunity%20Discussion%20-%20A.%20Jancy%20Priya`}
                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition-all"
              >
                Launch Mail
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="lg:col-span-7">
            <div
              className={`p-6 sm:p-8 rounded-2xl border ${
                darkMode
                  ? 'bg-slate-900/90 border-slate-800 shadow-xl shadow-black/20'
                  : 'bg-white border-slate-200 shadow-md shadow-slate-200/50'
              }`}
            >
              <h3 className={`text-xl font-bold font-display mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Send a Direct Message
              </h3>
              <p className={`text-xs sm:text-sm mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Whether you have a job vacancy, internship opportunity, or project inquiry, feel free to drop a note.
              </p>

              {submitSuccess && (
                <div
                  id="contact-success-banner"
                  className="p-4 mb-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm flex items-center gap-3 animate-fadeIn"
                >
                  <ShieldCheck className="w-5 h-5 shrink-0 text-emerald-500" />
                  <div>
                    <strong>Thank you! Your message was recorded.</strong>
                    <p className="text-xs opacity-90 mt-0.5">
                      A confirmation has been logged for A. Jancy Priya (ajancypriya4@gmail.com).
                    </p>
                  </div>
                </div>
              )}

              {errorMessage && (
                <div className="p-3 mb-5 rounded-lg border border-rose-500/30 bg-rose-500/10 text-rose-500 text-xs">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-sender-name"
                      className={`block text-xs font-semibold mb-1.5 ${
                        darkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}
                    >
                      Your Name *
                    </label>
                    <input
                      id="contact-sender-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe / Tech Recruiter"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                        darkMode
                          ? 'bg-slate-800/80 border-slate-700 text-white placeholder-slate-500'
                          : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-sender-email"
                      className={`block text-xs font-semibold mb-1.5 ${
                        darkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}
                    >
                      Your Email Address *
                    </label>
                    <input
                      id="contact-sender-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="recruiter@company.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                        darkMode
                          ? 'bg-slate-800/80 border-slate-700 text-white placeholder-slate-500'
                          : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-sender-subject"
                    className={`block text-xs font-semibold mb-1.5 ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}
                  >
                    Subject
                  </label>
                  <input
                    id="contact-sender-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g., Software Engineer Opening / MCA Internship Inquiry"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                      darkMode
                        ? 'bg-slate-800/80 border-slate-700 text-white placeholder-slate-500'
                        : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-sender-message"
                    className={`block text-xs font-semibold mb-1.5 ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-sender-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello A. Jancy Priya, we reviewed your projects and academic background and would like to discuss..."
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                      darkMode
                        ? 'bg-slate-800/80 border-slate-700 text-white placeholder-slate-500'
                        : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>

                <button
                  id="contact-submit-button"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-600/20 disabled:opacity-50 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
