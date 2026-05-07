"use client";

export default function Footer() {
  return (
    <footer className="bg-[#0E0D0B] text-white py-24 px-5 md:px-10">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24">
        {/* Newsletter */}
        <div className="md:col-span-2">
          <h4 className="label-ui mb-8 tracking-[0.2em]">Join the Maison World</h4>
          <p className="body-sm text-neutral-400 mb-8 max-w-sm">
            Receive early access to collections, exclusive events, and curated insights into the world of luxury.
          </p>
          <div className="flex border-b border-neutral-700 pb-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-transparent border-none outline-none w-full body-default"
            />
            <button className="label-ui hover:text-gold-400 transition-colors">Subscribe</button>
          </div>
        </div>

        {/* Links 1 */}
        <div>
          <h4 className="label-ui mb-8 tracking-[0.2em] text-neutral-500">Client Service</h4>
          <ul className="space-y-4 body-sm">
            <li><a href="#" className="hover:text-gold-400 transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-gold-400 transition-colors">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-gold-400 transition-colors">Order Tracking</a></li>
            <li><a href="#" className="hover:text-gold-400 transition-colors">Size Guide</a></li>
          </ul>
        </div>

        {/* Links 2 */}
        <div>
          <h4 className="label-ui mb-8 tracking-[0.2em] text-neutral-500">Legal & Privacy</h4>
          <ul className="space-y-4 body-sm">
            <li><a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gold-400 transition-colors">Cookie Settings</a></li>
            <li><a href="#" className="hover:text-gold-400 transition-colors">Accessibility</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto mt-24 pt-12 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="text-[10px] label-ui text-neutral-500 tracking-widest">© 2026 MAISON PREMIUM MULTI-BRAND. ALL RIGHTS RESERVED.</span>
        <div className="flex gap-8 label-ui text-[10px] tracking-widest">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Pinterest</a>
        </div>
      </div>
    </footer>
  );
}
