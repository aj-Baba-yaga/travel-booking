import { ShieldCheck, Wallet, Headphones } from "lucide-react";
import Reveal from "./motion/Reveal";

const FEATURES = [
  {
    id: 1,
    icon: ShieldCheck,
    title: "Trusted & Secure",
    desc: "Your bookings are protected with industry-standard security and reliable partners worldwide.",
  },
  {
    id: 2,
    icon: Wallet,
    title: "Best Price Guarantee",
    desc: "We compare prices across platforms to ensure you always get the best deal.",
  },
  {
    id: 3,
    icon: Headphones,
    title: "24/7 Support",
    desc: "Our travel experts are available anytime to help you plan and manage your trips.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 py-20">
        <Reveal>
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-neutral-900">
              Why Choose Us
            </h2>

            <p className="mt-2 text-neutral-600">
              We make travel planning simple, secure, and enjoyable.
            </p>
            <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-amber-500/80" />
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((item) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.id}>
                <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50">
                    <Icon className="h-7 w-7 text-emerald-600" />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-neutral-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
