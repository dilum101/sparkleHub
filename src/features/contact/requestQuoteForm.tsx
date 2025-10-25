import { useState } from "react";
import Button from "../../componets/Button";

type Props = {};

export const RequestQuoteForm = (props: Props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    alert(
      `Thank you ${formData.name}! We'll contact you soon at ${formData.email}`
    );
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="bg-white rounded-xl p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Request a Free Quote
      </h3>
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
            placeholder="(555) 123-4567"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Service
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
          >
            <option value="">Select a service</option>
            <option value="residential">Residential Cleaning</option>
            <option value="commercial">Commercial Cleaning</option>
            <option value="specialized">Specialized Services</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
            placeholder="Tell us about your cleaning needs..."
          />
        </div>
        <Button onClick={handleSubmit} className="w-full">
          Request Free Quote
        </Button>
      </div>
    </div>
  );
};
