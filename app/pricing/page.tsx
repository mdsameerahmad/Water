"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { FadeInStagger, FadeInItem } from "@/components/ui/motion";

export default function PricingPage() {
    const plans = [
        {
            name: "Starter",
            description: "Ideal for cafes and boutique restaurants.",
            features: [
                "Custom label design tool",
                "Single restaurant name variant",
                "Digital 3D bottle preview",
                "Standard clear glass bottles",
                "MOQ: 5 cases",
            ],
            button: "Get a Quote",
            highlight: false,
        },
        {
            name: "Business",
            description: "Best for growing restaurant brands.",
            features: [
                "Multiple label variants",
                "Priority design support",
                "Print-ready export files",
                "Premium glass options",
                "MOQ: 20 cases",
                "Warehousing support",
            ],
            button: "Get a Quote",
            highlight: true,
        },
        {
            name: "Enterprise",
            description: "For hospitality groups at scale.",
            features: [
                "Custom bottle molding",
                "Dedicated account manager",
                "Global logistics",
                "Sustainable return programs",
                "Custom water sourcing",
                "Private integrations",
            ],
            button: "Talk to Sales",
            highlight: false,
        },
    ];

    return (
        <section className="container mx-auto px-4 py-12 md:py-20 overflow-hidden">
            {/* HEADER */}
            <FadeInStagger>
                <FadeInItem>
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h1 className="text-3xl md:text-5xl font-serif font-bold tracking-tight">
                            Pricing built for scale
                        </h1>
                        <p className="mt-4 text-muted-foreground md:text-lg">
                            Premium water bottle branding, priced based on volume, material,
                            and design complexity.
                        </p>
                    </div>
                </FadeInItem>

                {/* CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
                    {plans.map((plan) => (
                        <FadeInItem key={plan.name}>
                            <div
                                className={`relative flex flex-col rounded-xl border p-8 transition-shadow duration-300 ${plan.highlight
                                    ? "border-primary bg-blue-50"
                                    : "bg-white"
                                    } hover:shadow-lg`}
                            >
                                {/* Badge */}
                                {plan.highlight && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                                        Most Popular
                                    </div>
                                )}

                                {/* Title */}
                                <div className="mb-6">
                                    <h3 className="text-xl font-serif font-bold">
                                        {plan.name}
                                    </h3>
                                    <p className="mt-2 text-sm text-muted-foreground">
                                        {plan.description}
                                    </p>
                                </div>

                                {/* Features */}
                                <ul className="flex-1 space-y-3">
                                    {plan.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex items-start gap-3 text-sm"
                                        >
                                            <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <div className="pt-8">
                                    <Link href="/contact">
                                        <Button
                                            size="lg"
                                            className="w-full"
                                            variant={plan.highlight ? "default" : "outline"}
                                        >
                                            {plan.button}
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </FadeInItem>
                    ))}
                </div>

                {/* FOOT NOTE */}
                <FadeInItem>
                    <p className="mt-12 text-center text-xs text-muted-foreground">
                        Final pricing depends on bottle type, quantity, and delivery location.
                    </p>
                </FadeInItem>
            </FadeInStagger>
        </section>
    );
}
