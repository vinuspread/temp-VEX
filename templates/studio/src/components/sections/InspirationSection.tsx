'use client';

export function InspirationSection() {
    const services = [
        { id: '01', title: 'Space Planning', description: 'Optimizing environments for peak productivity and employee wellbeing through strategic flow.' },
        { id: '02', title: 'Furniture Layouts', description: 'Curating unique pieces that define your corporate identity and brand values.' },
        { id: '03', title: 'Curated Styling', description: 'Strategic arrangement for seamless workflow and high-end aesthetic interaction.' },
    ];

    return (
        <section className="bg-white py-[120px] px-[64px]">
            <div className="max-w-full mx-auto">
                {/* Header */}
                <div className="flex flex-col gap-[32px] mb-[120px] border-b border-[#F3F6FC] pb-[64px]">
                    <span className="text-[11px] font-normal tracking-[3px] uppercase text-[#090B19] opacity-60">Services</span>
                    <h2 className="text-[48px] leading-[55px] font-semibold tracking-[-1.44px] text-[#090B19]">
                        We do it best.
                    </h2>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[64px] mb-[160px]">
                    {services.map((service) => (
                        <div key={service.id} className="flex flex-col gap-[32px] border-t border-[#F3F6FC] pt-[48px]">
                            <span className="text-[11px] font-bold tracking-[3px] uppercase text-[#090B19]">{service.id}</span>
                            <div>
                                <h3 className="text-[24px] leading-[30px] font-bold tracking-[-0.72px] text-[#090B19] mb-[16px]">
                                    {service.title}
                                </h3>
                                <p className="text-[16px] leading-[26px] font-normal text-[#6E7488]">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Feature Image / Secondary Hero */}
                <div className="relative h-[80vh] w-full overflow-hidden flex flex-col items-center justify-center text-center text-white bg-black">
                    <div
                        className="absolute inset-0 z-0 bg-cover bg-center opacity-60"
                        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop")' }}
                    />
                    <div className="relative z-10 max-w-4xl px-4">
                        <h2 className="text-[48px] leading-[55px] font-semibold tracking-[-1.44px] mb-[48px]">
                            We are innovating the way companies vinuspreadnvent their office spaces.
                        </h2>
                        <div className="w-[1px] h-[64px] bg-white/40 mx-auto" />
                    </div>
                </div>
            </div>
        </section>
    );
}
