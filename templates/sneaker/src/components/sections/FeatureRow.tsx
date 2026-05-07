'use client';

import { Truck, ShieldCheck, RotateCcw, Headset } from 'lucide-react';

export function FeatureRow() {
    const features = [
        { icon: Truck, title: "Free Shipping", desc: "For all orders over $200" },
        { icon: Headset, title: "24/7 Support", desc: "Dedicated support team" },
        { icon: ShieldCheck, title: "Safety Payment", desc: "100% secure payment systems" },
        { icon: RotateCcw, title: "Return Policy", desc: "30-day money back guarantee" }
    ];

    return (
        <section className="bg-white py-16 border-b border-brand-border">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                    {features.map((item, i) => (
                        <div key={i} className="flex flex-col items-center text-center gap-6 group">
                            <div className="w-16 h-16 rounded-2xl bg-brand-muted flex items-center justify-center text-brand-secondary group-hover:bg-brand-accent group-hover:text-white transition-all duration-500">
                                <item.icon size={28} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h4 className="text-lg font-black tracking-tight text-brand-secondary">{item.title}</h4>
                                <p className="text-[14px] font-medium tracking-[-0.01em] text-brand-secondary/60 mt-1">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
