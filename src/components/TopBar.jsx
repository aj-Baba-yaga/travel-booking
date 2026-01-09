import { Phone, Mail, Instagram, Twitter, Facebook } from "lucide-react";

export default function TopBar({ onOpenAuth }) {
  return (
    <div className="hidden md:block bg-neutral-50 border-b border-neutral-200 text-sm">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-10 items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-4 text-neutral-600">
            <span className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              +1 234 567 890
            </span>
            <span className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              support@quixtravel.com
            </span>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4 text-neutral-600">
            <div className="flex items-center gap-3">
              <Instagram className="h-4 w-4 cursor-pointer hover:text-neutral-900 transition" />
              <Twitter className="h-4 w-4 cursor-pointer hover:text-neutral-900 transition" />
              <Facebook className="h-4 w-4 cursor-pointer hover:text-neutral-900 transition" />
            </div>

            <span className="h-4 w-px bg-neutral-300" />

            <div className="flex items-center gap-3">
              <button
                onClick={() => onOpenAuth?.("signin")}
                className="hover:text-neutral-900 transition"
              >
                Sign In
              </button>

              <button
                onClick={() => onOpenAuth?.("signup")}
                className="rounded-md bg-amber-500 px-3 py-1 text-white hover:bg-amber-600 transition"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
