'use client';

export function LeadSection() {
    return (
        <section className="bg-black text-white py-[80px] px-[64px]">
            <div className="max-w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[64px]">
                {/* Left: Contact Form */}
                <div className="lg:pr-[64px]">
                    <span className="text-[11px] font-normal tracking-[3px] uppercase opacity-60 block mb-[24px]">Contact</span>
                    <h2 className="text-[48px] leading-[55px] font-semibold tracking-[-1.44px] mb-[48px]">
                        Get in touch.
                    </h2>

                    <form className="flex flex-col gap-[32px]">
                        {['Full Name', 'Email Address', 'Message'].map((label) => (
                            <div key={label} className="flex flex-col gap-[12px] border-b border-white/20 pb-[12px]">
                                <label className="text-[11px] font-normal tracking-[3px] uppercase opacity-40">{label}</label>
                                <input
                                    type="text"
                                    className="bg-transparent text-[18px] font-medium tracking-[-0.5px] outline-none placeholder:opacity-20 w-full"
                                />
                            </div>
                        ))}
                        <button className="h-[48px] px-[32px] bg-white text-black rounded-[100px] text-[11px] font-bold tracking-[3px] uppercase hover:bg-neutral-200 transition-colors w-fit mt-[24px]">
                            Send Inquiry
                        </button>
                    </form>
                </div>

                {/* Right: Info */}
                <div className="flex flex-col justify-between pt-[16px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[48px]">
                        <div>
                            <span className="text-[11px] font-normal tracking-[3px] uppercase opacity-60 block mb-[24px]">Office</span>
                            <p className="text-[18px] leading-[28px] font-bold tracking-[-0.5px]">
                                213 West 5th Street<br />
                                Austin, Texas 78701
                            </p>
                        </div>
                        <div>
                            <span className="text-[11px] font-normal tracking-[3px] uppercase opacity-60 block mb-[24px]">Direct</span>
                            <p className="text-[18px] leading-[28px] font-bold tracking-[-0.5px]">
                                512 827 2100<br />
                                hello@vinuspread.design
                            </p>
                        </div>
                    </div>

                    <div className="mt-[64px]">
                        <span className="text-[11px] font-normal tracking-[3px] uppercase opacity-60 block mb-[24px]">Social</span>
                        <div className="flex gap-[32px]">
                            {['Instagram', 'LinkedIn', 'Dribbble'].map((social) => (
                                <a key={social} href="#" className="text-[11px] font-bold tracking-[3px] uppercase hover:opacity-60 transition-opacity">
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
