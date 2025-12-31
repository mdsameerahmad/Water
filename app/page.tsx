import { Button } from "@/components/ui/button";
import { FadeIn, FadeInItem, FadeInStagger, HeroText } from "@/components/ui/motion";
import { CheckCircle2, Palette, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col items-center">
            {/* Hero Section */}
            <section className="relative w-full py-20 md:py-32 lg:py-48 overflow-hidden">
                {/* Gradient Background with Wave */}
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary to-primary/50">
                    <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
                        <path fill="rgba(255,255,255,0.3)" d="M0,160L30,165C60,171,120,181,180,176C240,171,300,149,360,149C420,149,480,171,540,176C600,181,660,171,720,165C780,160,840,160,900,165C960,171,1020,181,1080,176C1140,171,1200,149,1260,149C1320,149,1380,171,1410,181L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
                    </svg>
                </div>
                <div className="container relative z-10 px-4 md:px-6">
                    <FadeIn className="flex flex-col items-center space-y-8 text-center">
                        <div className="space-y-4 max-w-4xl">
                            <HeroText
                                text="The Signature of Fine Dining Water"
                                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none font-serif text-white drop-shadow-lg"
                            />
                            <FadeIn delay={0.4}>
                                <p className="mx-auto max-w-[800px] text-white/90 md:text-xl/relaxed lg:text-2xl/relaxed font-light drop-shadow-md">
                                    Elevate your table service with bespoke, private-label water bottles.
                                    Designed for restaurants that demand perfection in every detail.
                                </p>
                            </FadeIn>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 min-w-[300px] justify-center">
                            <Link href="/contact">
                                <Button size="lg" className="h-14 px-8 text-lg w-full sm:w-auto shadow-lg shadow-primary/30 bg-white text-primary hover:bg-white/90">Get a Quote</Button>
                            </Link>
                            <Link href="/work">
                                <Button variant="outline" size="lg" className="h-14 px-8 text-lg w-full sm:w-auto text-white border-2 border-white bg-transparent hover:bg-white/20 hover:border-white hover:text-white transition-all duration-300">View Portfolio</Button>
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Value Props Section - Why Choose Us? */}
            <section className="w-full py-20 bg-white">
                <div className="container px-4 md:px-6">
                    <FadeIn className="text-center mb-16">
                        <span className="text-sm font-bold uppercase tracking-widest text-primary mb-2 block">Why BlueCrest</span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary">More Than Just Water</h2>
                    </FadeIn>
                    <FadeInStagger className="grid md:grid-cols-3 gap-12 text-center">
                        <FadeInItem className="flex flex-col items-center space-y-4">
                            <div className="p-4 bg-blue-50 rounded-full text-primary">
                                <Palette className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground">Bespoke Design</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Our award-winning design team crafts labels that seamlessly integrate with your restaurant's interior and brand identity.
                            </p>
                        </FadeInItem>
                        <FadeInItem className="flex flex-col items-center space-y-4">
                            <div className="p-4 bg-blue-50 rounded-full text-primary">
                                <Palette className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground">Premium Sourcing</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Bottled at the source from pristine alkaline springs. Certified purity that complements, never overpowers, your cuisine.
                            </p>
                        </FadeInItem>
                        <FadeInItem className="flex flex-col items-center space-y-4">
                            <div className="p-4 bg-blue-50 rounded-full text-primary">
                                <Truck className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground">Reliable Logistics</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Flexible delivery schedules tailored to your storage capacity. We ensure you never run dry during service.
                            </p>
                        </FadeInItem>
                    </FadeInStagger>
                </div>
            </section>

            {/* Process Section */}
            <section className="w-full py-20 bg-gray-50 border-y border-gray-200">
                <div className="container px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <FadeIn className="space-y-6">
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary">A Seamless Journey from Concept to Table</h2>
                            <p className="text-lg text-muted-foreground">
                                We handle everything from the initial sketch to the final delivery, allowing you to focus on what you do best—serving your guests.
                            </p>
                            <div className="space-y-4 pt-4">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <CheckCircle2 className="w-6 h-6 text-green-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-foreground">1. Consultation & Strategy</h4>
                                        <p className="text-muted-foreground">We analyze your volume needs and brand aesthetic to recommend the perfect bottle shape and label finish.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <CheckCircle2 className="w-6 h-6 text-green-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-foreground">2. Design & Prototyping</h4>
                                        <p className="text-muted-foreground">Review digital mockups and physical proofs. We iterate until the design feels like a natural extension of your brand.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <CheckCircle2 className="w-6 h-6 text-green-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-foreground">3. Production & Fulfillment</h4>
                                        <p className="text-muted-foreground">State-of-the-art bottling and printing. Orders are palletized and shipped directly to your loading dock.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-6">
                                <Link href="/pricing">
                                    <Button variant="default">View Pricing Models</Button>
                                </Link>
                            </div>
                        </FadeIn>
                        <FadeIn
                            delay={0.2}
                            className="relative aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/im1.jpeg"
                                alt="Water bottling production line"
                                fill
                                priority
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                                <div className="absolute bottom-6 left-6 text-white font-medium drop-shadow-lg">
                                    <p className="text-sm uppercase tracking-widest opacity-80 mb-1">
                                        Production
                                    </p>
                                    <p className="text-xl font-serif">
                                        State-of-the-art Facility
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full py-24 bg-primary text-primary-foreground">
                <FadeIn className="container grid items-center justify-center gap-6 px-4 text-center md:px-6">
                    <div className="space-y-4">
                        <h2 className="text-4xl font-bold tracking-tighter md:text-5xl/tight font-serif text-white">
                            Ready to Upgrade Your Water Service?
                        </h2>
                        <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl/relaxed">
                            Join over 500+ premium restaurants who trust BlueCrest.
                        </p>
                    </div>
                    <div className="mx-auto w-full max-w-sm space-y-4 pt-4">
                        <Link href="/contact">
                            <Button variant="secondary" size="lg" className="w-full h-14 text-lg font-semibold">Start Conversation</Button>
                        </Link>
                        <p className="text-xs text-blue-200/80">
                            No commitment required. Free initial design consultation.
                        </p>
                    </div>
                </FadeIn>
            </section>
        </div>
    );
}