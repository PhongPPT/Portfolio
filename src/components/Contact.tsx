import React from 'react';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from '../config/emailConfig';

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message
        },
        EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          Swal.fire({
            title: "Your email will receive a reply as soon as possible. Thank you.",
            icon: "success",
            draggable: true
          });
          setForm({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.log(error);
        }
      );
  };
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-2xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <form onSubmit={sendEmail}>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
            <p className="text-center text-gray-300 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let's build something amazing together!
            </p>
            <div className="space-y-4">
              <input
                type="text"
                name='name'
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-400 transition-colors"
              />
              <input
                type="email"
                name='email'
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-400 transition-colors"
              />
              <input
                type="text"
                name='subject'
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-400 transition-colors"
              />
              <textarea
                rows={5}
                name='message'
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-400 transition-colors resize-none"
              />
              <button className="w-full px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:scale-105 transform transition-all shadow-lg hover:shadow-purple-500/50">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;