import { Mail, Phone, MapPin, CreditCard } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-200">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 md:gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-2xl bg-emerald-600 text-white grid place-items-center font-semibold">
                Q
              </div>
              <div>
                <div className="text-lg font-semibold text-white">
                  Quix Travel
                </div>
                <div className="text-sm text-neutral-400 -mt-0.5">
                  Explore the world
                </div>
              </div>
            </div>

            <p className="mt-5 text-sm text-neutral-400 leading-relaxed">
              Book flights, hotels, and holiday packages with confidence.
              Premium deals, trusted partners, and 24/7 support — all in one
              place.
            </p>

            <div className="mt-6 space-y-3 text-sm text-neutral-300">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-emerald-400" />
                +1 234 567 890
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-emerald-400" />
                support@quixtravel.com
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-emerald-400" />
                Global • Online Service
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold">Company</h3>
            <ul className="mt-4 space-y-3 text-sm text-neutral-400">
              <li className="hover:text-white transition cursor-pointer">
                About Us
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Careers
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Press
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Blog
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold">Support</h3>
            <ul className="mt-4 space-y-3 text-sm text-neutral-400">
              <li className="hover:text-white transition cursor-pointer">
                Help Center
              </li>
              <li className="hover:text-white transition cursor-pointer">
                FAQs
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Cancellation
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Contact
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold">Newsletter</h3>
            <p className="mt-4 text-sm text-neutral-400 leading-relaxed">
              Get weekly deals and travel inspiration delivered to your inbox.
            </p>

            <div className="mt-5 flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-neutral-500 outline-none focus:border-amber-500"
              />
              <button className="w-full sm:w-auto rounded-xl bg-amber-500 px-4 py-3 text-sm font-semibold text-white hover:bg-amber-600 transition">
                Join
              </button>
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm text-neutral-400">
              <CreditCard className="h-4 w-4" />
              Secure payments supported
            </div>

            {/* Optional payment logos */}
            <div className="mt-4 flex flex-wrap gap-2 max-w-xs">
              <span className="rounded-lg bg-white/5 px-3 py-2 text-xs text-neutral-300">
                VISA
              </span>
              <span className="rounded-lg bg-white/5 px-3 py-2 text-xs text-neutral-300">
                MasterCard
              </span>
              <span className="rounded-lg bg-white/5 px-3 py-2 text-xs text-neutral-300">
                AMEX
              </span>
              <span className="rounded-lg bg-white/5 px-3 py-2 text-xs text-neutral-300">
                PayPal
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Quix Travel. All rights reserved.
          </p>
          <div className="flex gap-5 text-sm text-neutral-500">
            <span className="hover:text-white transition cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white transition cursor-pointer">
              Terms
            </span>
            <span className="hover:text-white transition cursor-pointer">
              Cookies
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
