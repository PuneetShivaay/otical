'use client';
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [isSending, setIsSending] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        let errors = {};
        if (!formData.name.trim()) {
            errors.name = "Name is required";
        }
        if (!formData.email.trim()) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email address is invalid";
        }
        if (!formData.message.trim()) {
            errors.message = "Message is required";
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            setIsSending(true);

            emailjs
                .send(
                    "service_tnr0kl7",
                    "template_rud94qm",
                    formData,
                    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
                )
                .then((response) => {
                    toast.success("Message sent successfully!");
                    setFormData({
                        name: "",
                        email: "",
                        message: "",
                    });
                })
                .catch((error) => {
                    toast.error("Something went wrong. Please try again.");
                })
                .finally(() => {
                    setIsSending(false);
                });
        }
    };

    return (
        <motion.div 
            className="mt-20 max-w-2xl mx-auto p-8 rounded-2xl bg-neutral-800/50 border border-neutral-700 shadow-xl shadow-orange-500/10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <Toaster position="top-center" reverseOrder={false} />
            <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className={`w-full px-4 py-3 text-sm rounded-lg bg-neutral-700/50 border ${errors.name ? 'border-red-500' : 'border-neutral-600'} focus:outline-none focus:ring-2 focus:ring-orange-500 text-white transition-all duration-300`}
                        />
                        {errors.name && (
                            <p className="mt-2 text-sm text-red-500">{errors.name}</p>
                        )}
                    </div>
                    <div>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className={`w-full px-4 py-3 text-sm rounded-lg bg-neutral-700/50 border ${errors.email ? 'border-red-500' : 'border-neutral-600'} focus:outline-none focus:ring-2 focus:ring-orange-500 text-white transition-all duration-300`}
                        />
                        {errors.email && (
                            <p className="mt-2 text-sm text-red-500">{errors.email}</p>
                        )}
                    </div>
                </div>
                <div className="mb-6">
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        className={`w-full px-4 py-3 text-sm rounded-lg bg-neutral-700/50 border ${errors.message ? 'border-red-500' : 'border-neutral-600'} focus:outline-none focus:ring-2 focus:ring-orange-500 text-white transition-all duration-300`}
                        rows="6"
                    />
                    {errors.message && (
                        <p className="mt-2 text-sm text-red-500">{errors.message}</p>
                    )}
                </div>
                <button
                    type="submit"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-lg text-white bg-gradient-to-r from-orange-500 to-orange-700 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/40 transform hover:scale-105 ${isSending ? "cursor-not-allowed opacity-70" : ""}`}
                    disabled={isSending}
                >
                    {isSending ? "Sending..." : "Send Message"}
                </button>
            </form>
        </motion.div>
    );
};

export default ContactForm;
