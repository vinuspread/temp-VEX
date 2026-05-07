'use client';

const news = [
    { date: 'jan 24, 2026', title: 're-thinking the open office floor plan' },
    { date: 'dec 12, 2025', title: 'minimalism in the corporate landscape' },
    { date: 'nov 08, 2025', title: 'sustainable furniture sourcing for 2026' },
    { date: 'oct 21, 2025', title: 'the impact of light on productivity' },
];

export function NewsSection() {
    return (
        <section className="bg-white py-[120px] px-[64px]">
            {/* Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[64px] lg:gap-[120px]">
                {/* Left Column: Header & Action */}
                <div className="lg:col-span-4 flex flex-col items-start h-full">
                    <div className="flex flex-col gap-[32px] mb-[64px]">
                        <span className="text-[11px] font-normal tracking-[3px] uppercase text-[#090B19] opacity-60">Journal</span>
                        <h2 className="text-[48px] leading-[55px] font-semibold tracking-[-1.44px] text-[#090B19]">
                            What's new?
                        </h2>
                    </div>
                    <a href="#" className="h-[54px] px-[40px] border border-[#090B19] rounded-[100px] flex items-center justify-center text-[11px] font-bold tracking-[3px] uppercase text-[#090B19] hover:bg-[#090B19] hover:text-white transition-colors">
                        Read Journal
                    </a>
                </div>

                {/* Right Column: List */}
                <div className="lg:col-span-8 flex flex-col">
                    {news.map((item) => (
                        <a key={item.title} href="#" className="group flex flex-col md:flex-row justify-between items-start md:items-center py-[48px] border-b border-[#F3F6FC] first:border-t hover:bg-neutral-50 transition-colors">
                            <div className="flex flex-col gap-[16px] max-w-xl">
                                <h3 className="text-[24px] leading-[30px] font-bold tracking-[-0.72px] text-[#090B19] group-hover:opacity-60 transition-opacity">
                                    {item.title}
                                </h3>
                                <span className="text-[11px] font-normal tracking-[3px] uppercase text-[#090B19] opacity-40">
                                    {item.date}
                                </span>
                            </div>
                            <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-[24px]">→</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
