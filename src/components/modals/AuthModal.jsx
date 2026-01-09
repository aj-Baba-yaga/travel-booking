import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";

export default function AuthModal({
  open,
  mode = "signin",
  onClose,
  onSwitch,
}) {
  const reduce = useReducedMotion();
  const isSignIn = mode === "signin";

  const nameRef = useRef(null);
  const emailRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKeyDown);

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-80 flex items-center justify-center px-4"
          initial={reduce ? false : { opacity: 0 }}
          animate={reduce ? {} : { opacity: 1 }}
          exit={reduce ? {} : { opacity: 0 }}
        >
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close modal"
            onClick={onClose}
            className="absolute inset-0 bg-black/55"
          />

          {/* Panel */}
          <motion.div
            role="dialog"
            aria-modal="true"
            className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            initial={reduce ? false : { y: 18, opacity: 0, scale: 0.98 }}
            animate={reduce ? {} : { y: 0, opacity: 1, scale: 1 }}
            exit={reduce ? {} : { y: 18, opacity: 0, scale: 0.98 }}
            transition={
              reduce
                ? { duration: 0 }
                : { duration: 0.35, ease: [0.22, 1, 0.36, 1] }
            }
          >
            {/* Close */}
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-neutral-200 bg-white/80 backdrop-blur hover:bg-neutral-50 transition"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid md:grid-cols-[1fr_1.15fr]">
              {/* Left visual (desktop/tablet only) */}
              <div className="relative hidden md:block">
                <img
                  src="/images/auth/auth-visual.jpg"
                  alt="Auth visual"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-b from-black/15 via-black/10 to-black/55" />
                <div className="absolute left-8 right-8 top-8">
                  <div className="text-white/90 text-sm font-semibold">
                    Quix Travel
                  </div>
                </div>
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-white text-2xl font-semibold leading-snug">
                    Exploring new frontiers,
                    <br />
                    one step at a time.
                  </h3>
                  <p className="mt-2 text-white/80 text-sm">
                    Unlock deals, save trips, and build your travel wishlist.
                  </p>
                </div>
              </div>

              {/* Right form */}
              <motion.div
                key={mode}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="p-6 sm:p-10"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-semibold text-neutral-900">
                      {isSignIn ? "Welcome back" : "Create Account"}
                    </h2>
                    <p className="mt-1 text-sm text-neutral-600">
                      {isSignIn ? "Sign in to continue" : "Create your account"}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSwitch?.(isSignIn ? "signup" : "signin")}
                    className="text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition"
                  >
                    {isSignIn ? "Sign up" : "Sign in"} →
                  </button>
                </div>

                {/* Social buttons */}
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    className="rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50 transition"
                  >
                    {isSignIn ? "Sign in" : "Sign up"} with Google
                  </button>
                  <button
                    type="button"
                    className="rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50 transition"
                  >
                    with Facebook
                  </button>
                </div>

                <div className="my-6 flex items-center gap-3">
                  <span className="h-px flex-1 bg-neutral-200" />
                  <span className="text-xs font-semibold text-neutral-500">
                    OR
                  </span>
                  <span className="h-px flex-1 bg-neutral-200" />
                </div>

                {/* Form */}
                <form className="space-y-4">
                  {!isSignIn && (
                    <div>
                      <label className="text-sm font-medium text-neutral-700">
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Ajinkya Dangore"
                        className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none focus:border-amber-500"
                      />
                    </div>
                  )}

                  <div>
                    <label className="text-sm font-medium text-neutral-700">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-neutral-700">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none focus:border-amber-500"
                    />
                  </div>

                  {!isSignIn && (
                    <label className="flex items-center gap-2 text-sm text-neutral-600">
                      <input type="checkbox" className="h-4 w-4" />I agree to
                      terms & privacy policy
                    </label>
                  )}

                  <button
                    type="button"
                    className="mt-2 w-full rounded-xl bg-amber-500 px-4 py-3 text-sm font-semibold text-white hover:bg-amber-600 transition"
                  >
                    {isSignIn ? "Sign In" : "Sign Up"}
                  </button>

                  <p className="text-center text-sm text-neutral-600">
                    {isSignIn ? (
                      <>
                        Don&apos;t have an account?{" "}
                        <button
                          type="button"
                          onClick={() => onSwitch?.("signup")}
                          className="font-semibold text-emerald-700 hover:text-emerald-800 transition"
                        >
                          Sign up
                        </button>
                      </>
                    ) : (
                      <>
                        Already have an account?{" "}
                        <button
                          type="button"
                          onClick={() => onSwitch?.("signin")}
                          className="font-semibold text-emerald-700 hover:text-emerald-800 transition"
                        >
                          Sign in
                        </button>
                      </>
                    )}
                  </p>
                </form>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
