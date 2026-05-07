'use client';

const team = [
    { name: 'Jessica Point', role: 'Principle Designer', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2' },
    { name: 'Ryan Baser', role: 'Furniture Expert', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e' },
    { name: 'Carrie Vath', role: 'Design Lead', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956' },
];

export function TeamSection() {
    return (
        <section className="bg-white py-[120px] px-[64px]">
            {/* Header */}
            <div className="flex flex-col gap-[32px] mb-[120px] border-b border-[#F3F6FC] pb-[64px]">
                <span className="text-[11px] font-normal tracking-[3px] uppercase text-[#090B19] opacity-60">Team</span>
                <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                    <h2 className="text-[48px] leading-[55px] font-semibold tracking-[-1.44px] text-[#090B19]">
                        Behind the design.
                    </h2>
                    <a href="#" className="h-[54px] px-[40px] border border-[#090B19] rounded-[100px] flex items-center justify-center text-[11px] font-bold tracking-[3px] uppercase text-[#090B19] hover:bg-[#090B19] hover:text-white transition-colors">
                        About Us
                    </a>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[64px]">
                {team.map((member) => (
                    <div key={member.name} className="group">
                        <div className="aspect-[3/4] bg-neutral-100 mb-[32px] overflow-hidden relative">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                                style={{ backgroundImage: `url(${member.image}?q=80&w=1000&auto=format)` }}
                            />
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <h3 className="text-[24px] leading-[30px] font-bold tracking-[-0.72px] text-[#090B19] mb-[8px]">
                                {member.name}
                            </h3>
                            <span className="text-[11px] font-normal tracking-[3px] uppercase text-[#090B19] opacity-60">
                                {member.role}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
