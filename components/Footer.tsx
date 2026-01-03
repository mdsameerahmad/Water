import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-gray-50 border-t">
            <div className="container mx-auto px-4 py-16">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">
                    {/* Brand */}
                    <div className="md:col-span-2 space-y-5">
                        <Link href="/" className="inline-flex items-center gap-3">
                            <Image
                                src="/logo.jpeg"
                                alt="Aqva"
                                width={160}
                                height={60}
                                className="h-14 w-auto object-contain"
                                priority
                            />
                            <span className="text-xl font-serif font-semibold">Aqva</span>
                        </Link>

                        <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                            Elevating dining experiences with premium, custom-branded water
                            bottle labels. Built for restaurants that care about detail,
                            presentation, and brand recall.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-5">
                        <h3 className="text-lg font-serif font-semibold tracking-wide">
                            Explore
                        </h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li>
                                <Link
                                    href="/work"
                                    className="hover:text-primary transition-colors"
                                >
                                    Work Samples
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/pricing"
                                    className="hover:text-primary transition-colors"
                                >
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="hover:text-primary transition-colors"
                                >
                                    Get a Quote
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-5">
                        <h3 className="text-lg font-serif font-semibold tracking-wide">
                            Contact
                        </h3>

                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                <span>
                                    Fida Hussain Road 
                                    <br />
                                    Jehanabad,Bihar-804408
                                </span>
                            </li>

                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <span>+91- 91227 18432</span>
                            </li>

                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <a
                                    href="mailto:hello@Aqva.com"
                                    className="hover:text-primary transition-colors"
                                >
                                    Farhanasraf1004@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
                    <p>
                        © {new Date().getFullYear()} Aqva. All rights reserved.
                    </p>

                    <div className="flex gap-6">
                        <Link
                            href="/privacy"
                            className="hover:text-foreground transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/terms"
                            className="hover:text-foreground transition-colors"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
