import emailjs from "@emailjs/browser";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

const SERVICE_LABELS: Record<string, string> = {
  house:  "Regular House Cleaning",
  vacate: "Vacate / End of Lease",
  deep:   "Deep Cleaning",
  movein: "Move-In Cleaning",
  spring: "Spring Cleaning",
  event:  "After Party / Event",
};

const EMPTY = { name: "", email: "", phone: "", service: "", suburb: "", date: "", message: "" };

type FormData = typeof EMPTY;
type Errors   = Partial<Record<keyof FormData, string>>;

function validate(form: FormData): Errors {
  const e: Errors = {};
  if (!form.name.trim())    e.name    = "Please enter your name.";
  if (!form.phone.trim())   e.phone   = "Please enter your phone number.";
  if (!form.email.trim())   e.email   = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Please enter a valid email.";
  if (!form.service)        e.service = "Please select a service.";
  if (!form.suburb.trim())  e.suburb  = "Please enter your suburb.";
  if (!form.message.trim()) e.message = "Please add some details about your property.";
  return e;
}

const fieldClass = (err?: string) =>
  `w-full px-4 py-3 border rounded-lg text-sm focus:outline-none transition-all ${
    err
      ? "border-red-400 focus:border-red-400 focus:ring-2 focus:ring-red-200 bg-red-50"
      : "border-gray-200 focus:border-[#00b5be] focus:ring-2 focus:ring-[#00b5be]/20"
  }`;

export const RequestQuoteForm = ({}: {}) => {
  const [form, setForm]       = useState(EMPTY);
  const [errors, setErrors]   = useState<Errors>({});
  const [touched, setTouched] = useState(false);
  const [status, setStatus]   = useState<"idle" | "sending" | "success" | "error">("idle");
  const [sendErr, setSendErr] = useState("");

  // Prefill from hero panel
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail ?? {};
      setForm((prev) => ({ ...prev, ...detail }));
    };
    window.addEventListener("prefillQuote", handler);
    return () => window.removeEventListener("prefillQuote", handler);
  }, []);

  // Re-validate live once user has attempted submit
  useEffect(() => {
    if (touched) setErrors(validate(form));
  }, [form, touched]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return; // block if any field invalid

    setStatus("sending");
    setSendErr("");

    const payload = {
      from_name:      form.name,
      from_email:     form.email,
      phone:          form.phone,
      service_type:   SERVICE_LABELS[form.service] ?? form.service,
      suburb:         form.suburb,
      preferred_date: form.date || "Flexible",
      message:        form.message,
    };

    try {
      // Send notification to PRIMEORA
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        payload,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      // Send auto-reply to customer (fire and forget — don't block success on this)
      const autoReplyId = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID;
      console.log("Auto-reply template ID:", autoReplyId);
      emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        autoReplyId,
        payload,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      ).catch((err) => console.warn("Auto-reply failed:", err));

      setStatus("success");
    } catch (err: unknown) {
      console.error("EmailJS error:", err);
      setSendErr("Something went wrong sending your enquiry. Please call us on +61 420 214 143.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col items-center justify-center text-center min-h-[500px] shadow-sm">
        <div className="w-16 h-16 rounded-full bg-[#e0f7f8] flex items-center justify-center mb-4 animate-bounce">
          <CheckCircle className="w-8 h-8 text-[#00b5be]" />
        </div>
        <h3 className="text-xl font-bold text-[#1b3a6b] mb-2">Enquiry Sent!</h3>
        <p className="text-gray-500 max-w-xs text-sm mb-6">
          Thanks {form.name}! We'll be in touch with your quote within a few hours.
        </p>
        <button
          onClick={() => { setStatus("idle"); setForm(EMPTY); setErrors({}); setTouched(false); }}
          className="text-sm text-[#00b5be] font-semibold hover:underline"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
      <h3 className="text-xl font-bold text-[#1b3a6b] mb-1">Request a Free Quote</h3>
      <p className="text-gray-400 text-sm mb-6">No obligation. We'll respond within a few hours.</p>

      <form onSubmit={handleSubmit} noValidate className="space-y-4">

        {/* Name + Phone */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Name *</label>
            <input type="text" name="name" value={form.name} onChange={handleChange}
              placeholder="Jane Smith" className={fieldClass(errors.name)} />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Phone *</label>
            <input type="tel" name="phone" value={form.phone} onChange={handleChange}
              placeholder="04XX XXX XXX" className={fieldClass(errors.phone)} />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Email *</label>
          <input type="email" name="email" value={form.email} onChange={handleChange}
            placeholder="jane@email.com" className={fieldClass(errors.email)} />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        {/* Service + Suburb */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Service *</label>
            <select name="service" value={form.service} onChange={handleChange}
              className={`${fieldClass(errors.service)} text-gray-700`}>
              <option value="">Select...</option>
              <option value="house">Regular House Cleaning</option>
              <option value="vacate">Vacate / End of Lease</option>
              <option value="deep">Deep Cleaning</option>
              <option value="movein">Move-In Cleaning</option>
              <option value="spring">Spring Cleaning</option>
              <option value="event">After Party / Event</option>
            </select>
            {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Suburb *</label>
            <input type="text" name="suburb" value={form.suburb} onChange={handleChange}
              placeholder="e.g. Richmond" className={fieldClass(errors.suburb)} />
            {errors.suburb && <p className="text-red-500 text-xs mt-1">{errors.suburb}</p>}
          </div>
        </div>

        {/* Date */}
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Preferred Date</label>
          <input type="date" name="date" value={form.date} onChange={handleChange}
            className={fieldClass()} />
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Property Details *</label>
          <textarea name="message" value={form.message} onChange={handleChange} rows={3}
            placeholder="Number of bedrooms/bathrooms, property size, any special requests..."
            className={`${fieldClass(errors.message)} resize-none`} />
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
        </div>

        {/* Send error */}
        {status === "error" && (
          <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-red-600 text-sm text-center">
            {sendErr}
          </div>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-primary w-full justify-center text-base disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === "sending"
            ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
            : <>Submit Enquiry <ArrowRight className="w-4 h-4" /></>
          }
        </button>

        <p className="text-center text-xs text-gray-400">
          No spam. No lock-in contracts. 100% free quote.
        </p>
      </form>
    </div>
  );
};
