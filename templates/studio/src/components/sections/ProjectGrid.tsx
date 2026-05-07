'use client';

const projects = [
    { name: 'Spotify Satellite Office', location: 'Austin, TX', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0' },
    { name: 'Microsoft Office Lounge', location: 'Seattle, WA', image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174' },
    { name: 'Allstate Employee Lounge', location: 'Chicago, IL', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72' },
    { name: 'Exxon Mobile Offices', location: 'Houston, TX', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c' },
    { name: 'Disney Employee Loft', location: 'Burbank, CA', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36' },
    { name: 'Delta Satellite Office', location: 'Atlanta, GA', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d' },
];

export function ProjectGrid() {
    return (
        <section className="bg-white py-[120px] px-[64px]">
            {/* Header */}
            <div className="flex flex-col gap-[32px] mb-[120px] border-b border-[#F3F6FC] pb-[64px]">
                <span className="text-[11px] font-normal tracking-[3px] uppercase text-[#090B19] opacity-60">Portfolio</span>
                <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                    <h2 className="text-[48px] leading-[55px] font-semibold tracking-[-1.44px] text-[#090B19]">
                        See what we can do together.
                    </h2>
                    <a href="#" className="h-[54px] px-[40px] border border-[#090B19] rounded-[100px] flex items-center justify-center text-[11px] font-bold tracking-[3px] uppercase text-[#090B19] hover:bg-[#090B19] hover:text-white transition-colors">
                        View All Projects
                    </a>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
                {projects.map((project) => (
                    <div key={project.name} className="group relative h-[600px] bg-neutral-100 overflow-hidden cursor-pointer">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            style={{ backgroundImage: `url(${project.image}?q=80&w=1000&auto=format)` }}
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />

                        <div className="absolute inset-0 p-[48px] flex flex-col justify-between text-white">
                            <span className="text-[11px] font-normal tracking-[3px] uppercase opacity-80">{project.location}</span>
                            <h3 className="text-[24px] leading-[30px] font-bold tracking-[-0.72px] translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                {project.name}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
