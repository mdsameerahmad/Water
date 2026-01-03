"use client";

import { Button } from "@/components/ui/button";
import { FadeInItem, FadeInStagger } from "@/components/ui/motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        restaurantName: "",
        email: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const phoneNumber = "919122718432";

        const text =
            `New Inquiry from Aqva Website*%0a%0a` +
            `Name: ${formData.firstName} ${formData.lastName}%0a` +
            `Restaurant: ${formData.restaurantName}%0a` +
            `Email: ${formData.email}%0a` +
            `Message: ${formData.message}`;

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <section className="container mx-auto px-4 py-10 sm:py-14 md:py-24">
            <FadeInStagger className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-start">
                {/* LEFT CONTENT */}
                <FadeInItem className="space-y-10">
                    <div className="space-y-6">
                        <span className="inline-block text-sm font-medium text-primary">
                            Contact Aqva
                        </span>

                        <h1 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold tracking-tight leading-snug">
                            Let’s bottle your brand,
                            <br className="hidden md:block" /> the right way.
                        </h1>

                        <p className="text-base sm:text-lg text-white max-w-xl">
                            Share your restaurant details and label requirements. Our team
                            responds within 24 hours with a clear design plan—no spam, no
                            pressure.
                        </p>
                    </div>

                    {/* CONTACT DETAILS */}
                    <div className="grid gap-4 sm:gap-6 max-w-md">
                        <div className="flex items-start gap-4">
                            <MapPin className="w-5 h-5 text-primary mt-1" />
                            <p className="text-sm text-[#0B1F3A] leading-relaxed">
                                Fida Hussain Road 
                                <br />
                                Jehanabad,Bihar - 804408
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <Mail className="w-5 h-5 text-primary" />
                            <a
                                href="mailto:hello@Aqva.com"
                                className="text-sm text-[#0B1F3A] hover:text-primary transition-colors"
                            >
                                Farhanasraf1004@gmail.com
                            </a>
                        </div>

                        <div className="flex items-center gap-4">
                            <Phone className="w-5 h-5 text-primary" />
                            <span className="text-sm text-[#0B1F3A]">
                                +91- 91227 18432
                            </span>
                        </div>

                        <div className="flex items-center gap-4">
                            <Clock className="w-5 h-5 text-primary" />
                            <span className="text-sm text-[#0B1F3A]">
                                Replies within 24 hours
                            </span>
                        </div>
                    </div>
                </FadeInItem>

                {/* FORM CARD */}
                <FadeInItem>
                    <div className="bg-white border rounded-2xl shadow-sm p-6 sm:p-8 md:p-10">
                        <form onSubmit={handleSubmit} className="space-y-7">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label htmlFor="firstName" className="text-sm font-medium">
                                        First name
                                    </label>
                                    <input
                                        id="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder="Jane"
                                        className="h-12 w-full rounded-md border px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="lastName" className="text-sm font-medium">
                                        Last name
                                    </label>
                                    <input
                                        id="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder="Doe"
                                        className="h-12 w-full rounded-md border px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="restaurantName" className="text-sm font-medium">
                                    Restaurant name
                                </label>
                                <input
                                    id="restaurantName"
                                    value={formData.restaurantName}
                                    onChange={handleChange}
                                    placeholder="The Blue Fox"
                                    className="h-12 w-full rounded-md border px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">
                                    Email address
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="jane@example.com"
                                    className="h-12 w-full rounded-md border px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us your quantity, bottle type, and timeline…"
                                    className="min-h-[140px] w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                    required
                                />
                            </div>

                            <Button type="submit" size="lg" className="w-full">
                                Send via WhatsApp
                            </Button>

                            <p className="text-xs text-muted-foreground text-center">
                                You’ll be redirected to WhatsApp to complete the message.
                            </p>
                        </form>
                    </div>
                </FadeInItem>
            </FadeInStagger>
        </section>
    );
}
