"use client";
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    contactTime: "",
    contactMethod: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: "" }); 
  };

  const validate = () => {
    let errors = {};
    if (!form.name.trim()) errors.name = "Name is required.";
    if (!form.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errors.email = "Please enter a valid email.";
    }
    if (!form.contactTime.trim()) errors.contactTime = "Please specify a preferred contact time.";
    if (!form.contactMethod.trim()) errors.contactMethod = "Please select a contact method.";

    return errors;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  const errors = validate();
  if (Object.keys(errors).length > 0) {
    setFormErrors(errors);
    return;
  }

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (!response.ok) {
      const data = await response.json();
      console.error(data);
      alert(`Error: ${data.message || "Something went wrong"}`);
      return;
    }

    setSubmitted(true);
  } catch (error) {
    console.error("Submit error:", error);
    alert("An unexpected error occurred.");
  }
};


  return (
    <section id="contact" className="bg-[#cce6ea] py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#cce6ea] p-6 md:p-10 text-[#174249]">
          <h3 className="text-2xl font-semibold mb-4">Our Office</h3>
          <p>1287 Maplewood Drive<br />Los Angeles, CA 90026</p>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 bg-[#174249] text-white px-4 py-2 rounded hover:bg-[#152326] transition"
          >
            Google Maps
          </a>

          <h3 className="text-2xl font-semibold mt-8 mb-2">Hours</h3>
          <p>In-person: Tue & Thu, 10 AM–6 PM<br />
             Virtual: Mon, Wed & Fri, 1–5 PM</p>

          <h3 className="text-2xl font-semibold mt-8 mb-2">Contact</h3>
          <p>📞 (323) 555-0192</p>
          <p>✉️ serena@blakepsychology.com</p>
        </div>

        <div className="bg-[#ffffff] border border-[#C5D3C9] rounded-2xl shadow-md p-6 md:p-10">
          {!submitted ? (
            <>
              <h2 className="text-3xl font-semibold text-center text-[#174249] mb-2">
                Get In Touch
              </h2>
              <p className="text-center text-[#174249] mb-6">
                Simply fill out the brief fields below and Dr. Serena Blake will be in touch
                with you soon, usually within one business day. This form is safe, private, and completely free.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">&apos;
                <div>
                  <label className="block mb-1 text-[#174249]">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full border border-[#C5D3C9] rounded px-3 py-2 bg-white focus:outline-none"
                    required
                  />
                  {formErrors.name && <p className="text-red-600 text-sm mt-1">{formErrors.name}</p>}
                </div>

                <div>
                  <label className="block mb-1 text-[#174249]">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full border border-[#174249] rounded px-3 py-2 bg-white focus:outline-none"
                    required
                  />
                  {formErrors.email && <p className="text-red-600 text-sm mt-1">{formErrors.email}</p>}
                </div>

                <div>
                  <label className="block mb-1 text-[#174249]">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(555) 234-5678"
                    className="w-full border border-[#C5D3C9] rounded px-3 py-2 bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block mb-1 text-[#174249]">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    className="w-full border border-[#C5D3C9] rounded px-3 py-2 bg-white focus:outline-none"
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block mb-1 text-[#174249]">Preferred Contact Time</label>
                  <input
                    type="text"
                    name="contactTime"
                    value={form.contactTime}
                    onChange={handleChange}
                    placeholder="e.g., Mornings, Afternoons, Evenings, Weekends"
                    className="w-full border border-[#C5D3C9] rounded px-3 py-2 bg-white focus:outline-none"
                    required
                  />
                  {formErrors.contactTime && <p className="text-red-600 text-sm mt-1">{formErrors.contactTime}</p>}
                </div>

                <div>
                  <label className="block mb-1 text-[#174249]">Preferred Contact Method</label>
                  <select
                    name="contactMethod"
                    value={form.contactMethod}
                    onChange={handleChange}
                    className="w-full border border-[#C5D3C9] rounded px-3 py-2 bg-white focus:outline-none"
                    required
                  >
                    <option value="">Select preferred method</option>
                    <option value="Phone">Phone</option>
                    <option value="Email">Email</option>
                    <option value="Zoom">Zoom</option>
                  </select>
                  {formErrors.contactMethod && <p className="text-red-600 text-sm mt-1">{formErrors.contactMethod}</p>}
                </div>

                <div className="border border-[#C5D3C9] rounded p-4 flex items-center">
                  <input type="checkbox" required className="mr-2" />
                  <span className="text-[#174249]">I&apos;m not a robot</span>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#174249] text-white rounded py-2 hover:bg-[#152326] transition"
                >
                  Submit
                </button>

                <p className="text-xs text-[#174249] text-center mt-2">
                  ☉ By clicking submit you consent to receive texts and emails from Dr. Serena Blake
                </p>
              </form>
            </>
          ) : (
            <div className="text-center text-[#174249]">
              <h3 className="text-2xl font-semibold mb-4">Thank you!</h3>
              <p>We&apos;ve received your message and Dr. Serena Blake will contact you shortly.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
