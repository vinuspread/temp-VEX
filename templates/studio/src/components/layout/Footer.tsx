'use client';

export function Footer() {
    return (
        <footer className="bg-[#090B19] text-white px-[64px] py-[120px] border-t border-white/10">
            <div className="max-w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-[96px] mb-[120px]">
                {/* Brand Column */}
                <div className="lg:col-span-4 flex flex-col justify-between h-full">
                    <div>
                        <h2 className="text-[48px] leading-[58px] font-semibold tracking-[-1.44px] uppercase mb-[64px]">
                            vinuspread.
                        </h2>
                        <p className="text-[16px] leading-[26px] font-normal opacity-60 max-w-[320px]">
                            Elevating the corporate landscape through strategic design and architectural excellence.
                        </p>
                    </div>
                </div>

                {/* Navigation Columns */}
                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-[64px]">
                    {/* Column 1 */}
                    <div className="flex flex-col gap-[32px]">
                        <span className="text-[11px] font-normal tracking-[3px] uppercase opacity-40">Site</span>
                        <div className="flex flex-col gap-[24px]">
                            {['Home', 'Services', 'Projects'].map((item) => (
                                <a key={item} href="#" className="text-[11px] font-bold tracking-[3px] uppercase hover:opacity-60 transition-opacity">
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-[32px]">
                        <span className="text-[11px] font-normal tracking-[3px] uppercase opacity-40">Connect</span>
                        <div className="flex flex-col gap-[24px]">
                            {['Instagram', 'LinkedIn', 'Dribbble'].map((item) => (
                                <a key={item} href="#" className="text-[11px] font-bold tracking-[3px] uppercase hover:opacity-60 transition-opacity">
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col gap-[32px]">
                        <span className="text-[11px] font-normal tracking-[3px] uppercase opacity-40">Office</span>
                        <div className="flex flex-col gap-[24px]">
                            <a href="#" className="text-[11px] font-bold tracking-[3px] uppercase hover:opacity-60 transition-opacity">Email Us</a>
                            <a href="#" className="text-[11px] font-bold tracking-[3px] uppercase hover:opacity-60 transition-opacity">Austin, TX</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center pt-[64px] border-t border-white/10">
                <span className="text-[11px] font-normal tracking-[3px] uppercase opacity-40">
                    © 2026 vinuspread. all rights reserved.
                </span>
                <div className="flex gap-[48px] mt-8 md:mt-0">
                    <a href="#" className="text-[11px] font-normal tracking-[3px] uppercase opacity-40 hover:opacity-100 transition-opacity">Privacy Policy</a>
                    <a href="#" className="text-[11px] font-normal tracking-[3px] uppercase opacity-40 hover:opacity-100 transition-opacity">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}
