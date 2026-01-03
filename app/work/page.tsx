import { Button } from "@/components/ui/button";
import { FadeIn, FadeInItem, FadeInStagger } from "@/components/ui/motion";
import Image from "next/image";
import Link from "next/link";

export default function WorkPage() {
    const works = [
        { id: 1, name: "Barbeque Nation", location: "Jehanabad,Bihar", style: "Classic", image: "/bbq.png" },
        { id: 2, name: "Zaika Family Restaurant", location: "Jehanabad,Bihar", style: "Minimal", image: "/zaika.png" },
        { id: 3, name: "Momo's Magic Cafe", location: "Jehanabad,Bihar", style: "Modern", image: "/momo.png" },
        { id: 4, name: "Laziz Family Restaurant", location: "Jehanabad,Bihar", style: "Organic", image: "/laziz.png" },
        { id: 5, name: "Monginis Cafe", location: "Jehanabad,Bihar", style: "Coastal", image: "/cake.png" },
        { id: 6, name: "Wedding Ceremony", location: "Jehanabad,Bihar", style: "Bold", image: "/wed.png" },
       
    ];

    return (
        <div className="container py-12 md:py-24 px-4">
            <FadeIn className="text-center max-w-3xl mx-auto mb-16">
                <h1 className="text-3xl font-serif font-bold tracking-tight md:text-5xl mb-4">Our Selected Works</h1>
                <p className="text-lg text-muted-foreground">
                    A collection of bespoke label designs created for the world's finest dining establishments.
                </p>
            </FadeIn>

            <FadeInStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {works.map((work) => (
                    <FadeInItem key={work.id} className="group cursor-pointer">
                        <div className="relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                            <Image
                                src={work.image}
                                alt={`${work.name} Bottle`}
                                fill
                                className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute bottom-4 left-4">
                                <span className="inline-block bg-white/90 backdrop-blur-sm text-xs font-semibold px-2 py-1 rounded-full text-primary">
                                    {work.style}
                                </span>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">{work.name}</h3>
                            <p className="text-sm text-muted-foreground">{work.location}</p>
                        </div>
                    </FadeInItem>
                ))}
            </FadeInStagger>

            <FadeIn className="mt-24 text-center bg-transparent py-16 rounded-2xl">
                <h2 className="text-2xl font-bold font-serif mb-4">Ready to create yours?</h2>
                <Link href="/contact">
                    <Button size="lg">Contact Us</Button>
                </Link>
            </FadeIn>
        </div>
    );
}
