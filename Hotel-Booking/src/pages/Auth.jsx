import { useState } from "react";
import { FiArrowLeft, FiCheckCircle, FiEye, FiEyeOff, FiLock, FiMail, FiUser, FiX } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";


const premiumHotelImage =
  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=85";

export default function Auth({ onClose }) {
  const [mode, setMode] = useState("login");
  const [authFields, setAuthFields] = useState({ name: "", email: "", password: "" });
  const [authErrors, setAuthErrors] = useState({});
  const [authSuccess, setAuthSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [resetSent, setResetSent] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetError, setResetError] = useState("");
  const isLogin = mode === "login";
  const isForgot = mode === "forgot";

  const showLogin = () => {
    setMode("login");
    setAuthErrors({});
    setAuthSuccess("");
    setResetSent(false);
    setResetEmail("");
    setResetError("");
  };

  const updateAuthField = (field, value) => {
    setAuthFields((current) => ({ ...current, [field]: value }));
    setAuthErrors((current) => ({ ...current, [field]: "" }));
    setAuthSuccess("");
  };

  const switchMode = (nextMode) => {
    setMode(nextMode);
    setAuthErrors({});
    setAuthSuccess("");
    setResetSent(false);
    setResetError("");
  };

  const submitAuth = () => {
    const email = authFields.email.trim();
    const password = authFields.password.trim();
    const name = authFields.name.trim();
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const nextErrors = {};

    if (!isLogin && !name) {
      nextErrors.name = "Please enter your full name.";
    }

    if (!validEmail) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!password) {
      nextErrors.password = "Please enter your password.";
    } else if (!isLogin && password.length < 6) {
      nextErrors.password = "Password must be at least 6 characters.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setAuthErrors(nextErrors);
      setAuthSuccess("");
      return;
    }

    setAuthErrors({});
    setAuthSuccess(isLogin ? "Logged in successfully." : "Account created successfully.");
  };

  const sendResetLink = () => {
    const email = resetEmail.trim();
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!validEmail) {
      setResetError("Please enter a valid email address.");
      return;
    }

    setResetError("");
    setResetSent(true);
  };

  const handleGoogleLogin = () => {
    setAuthSuccess("Connecting to Google...");
    setTimeout(() => {
      setAuthSuccess("Logged in with Google successfully.");
      setTimeout(() => {
        onClose();
      }, 1200);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center px-4 py-6 text-zinc-900 sm:px-6">

      <button
        type="button"
        aria-label="Close login"
        onClick={onClose}
        className="absolute inset-0 bg-zinc-950/45 backdrop-blur-md animate-[fadeIn_180ms_ease-out]"
      />

      <section className="relative z-10 grid h-[82vh] max-h-[640px] w-full max-w-5xl animate-[modalIn_260ms_ease-out] overflow-hidden rounded-2xl border border-white/70 bg-[#f6efe4]/90 shadow-[0_30px_90px_rgba(0,0,0,0.32)] backdrop-blur-2xl lg:grid-cols-[0.9fr_1.1fr]">
        <button
          type="button"
          aria-label="Close login"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/80 text-zinc-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-white hover:text-zinc-950"
        >
          <FiX />
        </button>

        <div className="relative hidden min-h-full overflow-hidden bg-zinc-950 lg:block">
          <img
            src={premiumHotelImage}
            alt="Premium hotel exterior"
            className="absolute inset-0 h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-amber-200">
              ETHERIA
            </p>
            <p className="mt-4 text-sm leading-6 text-white/75">
              Sign in to manage bookings, save favorite hotels, and unlock member-only stay offers.
            </p>
          </div>
        </div>

        <div className="flex min-h-0 items-center justify-center overflow-y-auto px-6 py-7 sm:px-10">
          <div className="w-full max-w-md">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
              {isForgot ? "Account recovery" : "Welcome"}
            </p>
            <h2 className="text-3xl font-semibold text-zinc-950">
              {isForgot ? "Reset your password" : isLogin ? "Log in to Etheria" : "Create your account"}
            </h2>
            <p className="mt-2 text-sm leading-6 text-zinc-600">
              {isForgot
                ? "Enter your email and we will send reset instructions for your Etheria account."
                : isLogin
                ? "Access your saved stays, upcoming trips, and booking details."
                : "Join Etheria to book faster and keep every stay in one calm place."}
            </p>

            <div className={`mt-5 grid grid-cols-2 rounded-full border border-black/10 bg-black/5 p-1 ${isForgot ? "hidden" : ""}`}>
              <button
                onClick={showLogin}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isLogin ? "bg-zinc-950 text-white shadow-md" : "text-zinc-600 hover:text-zinc-950"
                }`}
              >
                Log in
              </button>
              <button
                onClick={() => switchMode("signup")}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  !isLogin ? "bg-zinc-950 text-white shadow-md" : "text-zinc-600 hover:text-zinc-950"
                }`}
              >
                Sign up
              </button>
            </div>

            {isForgot ? (
              <form className="mt-5 space-y-4">
                {resetSent ? (
                  <div className="rounded-2xl border border-amber-700/20 bg-amber-50/80 px-5 py-5 text-center">
                    <FiCheckCircle className="mx-auto text-3xl text-amber-700" />
                    <p className="mt-3 text-sm font-semibold text-zinc-900">
                      Reset link sent
                    </p>
                    <p className="mt-2 text-sm leading-6 text-zinc-600">
                      Check your email for password reset instructions.
                    </p>
                  </div>
                ) : (
                  <label className="block">
                    <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-zinc-500">
                      Email address
                    </span>
                    <span className="flex items-center gap-3 rounded-xl border border-black/10 bg-white/70 px-4 py-3 transition focus-within:border-amber-700">
                      <FiMail className="text-zinc-400" />
                      <input
                        type="email"
                        placeholder="you@example.com"
                        value={resetEmail}
                        onChange={(event) => {
                          setResetEmail(event.target.value);
                          setResetError("");
                        }}
                        className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-400"
                      />
                    </span>
                    {resetError && (
                      <span className="mt-2 block text-xs font-medium text-red-600">
                        {resetError}
                      </span>
                    )}
                  </label>
                )}

                <button
                  type="button"
                  onClick={sendResetLink}
                  className={`w-full rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(0,0,0,0.22)] transition hover:-translate-y-0.5 hover:bg-amber-700 ${
                    resetSent ? "hidden" : ""
                  }`}
                >
                  Send reset link
                </button>

                <button
                  type="button"
                  onClick={showLogin}
                  className="mx-auto flex items-center gap-2 text-sm font-semibold text-amber-700 transition hover:text-amber-800"
                >
                  <FiArrowLeft />
                  Back to login
                </button>
              </form>
            ) : (
              <form className="mt-5 space-y-3">
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${!isLogin ? "max-h-[100px] opacity-100 mb-3" : "max-h-0 opacity-0 mb-0"}`}>
                  <label className="block">
                    <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-zinc-500">
                      Full name
                    </span>
                    <span className="flex items-center gap-3 rounded-xl border border-black/10 bg-white/70 px-4 py-3 transition focus-within:border-amber-700">
                      <FiUser className="text-zinc-400" />
                      <input
                        type="text"
                        placeholder="Your name"
                        value={authFields.name}
                        onChange={(event) => updateAuthField("name", event.target.value)}
                        className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-400"
                      />
                    </span>
                    {authErrors.name && (
                      <span className="mt-2 block text-xs font-medium text-red-600">
                        {authErrors.name}
                      </span>
                    )}
                  </label>
                </div>


              <label className="block">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-zinc-500">
                  Email address
                </span>
                <span className="flex items-center gap-3 rounded-xl border border-black/10 bg-white/70 px-4 py-3 transition focus-within:border-amber-700">
                  <FiMail className="text-zinc-400" />
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={authFields.email}
                    onChange={(event) => updateAuthField("email", event.target.value)}
                    className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-400"
                  />
                </span>
                {authErrors.email && (
                  <span className="mt-2 block text-xs font-medium text-red-600">
                    {authErrors.email}
                  </span>
                )}
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-zinc-500">
                  Password
                </span>
                <span className="flex items-center gap-3 rounded-xl border border-black/10 bg-white/70 px-4 py-3 transition focus-within:border-amber-700">
                  <FiLock className="text-zinc-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={authFields.password}
                    onChange={(event) => updateAuthField("password", event.target.value)}
                    className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-400"
                  />
                  <button
                    type="button"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    onClick={() => setShowPassword((current) => !current)}
                    className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-zinc-400 transition hover:bg-black/5 hover:text-zinc-800"
                  >
                    {showPassword ? <FiEye /> : <FiEyeOff />}
                  </button>
                </span>
                {authErrors.password && (
                  <span className="mt-2 block text-xs font-medium text-red-600">
                    {authErrors.password}
                  </span>
                )}
              </label>

              {isLogin && (
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-zinc-600">
                    <input type="checkbox" className="h-4 w-4 accent-amber-700" />
                    Remember me
                  </label>
                  <button
                    type="button"
                    onClick={() => setMode("forgot")}
                    className="font-semibold text-amber-700 hover:text-amber-800"
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              <button
                type="button"
                onClick={submitAuth}
                className="w-full rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(0,0,0,0.22)] transition hover:-translate-y-0.5 hover:bg-amber-700"
              >
                {isLogin ? "Log in" : "Create account"}
              </button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-black/10"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-[#f6efe4] px-2 text-zinc-500 font-medium">Or continue with</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleGoogleLogin}
                className="flex w-full items-center justify-center gap-3 rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm font-semibold text-zinc-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
              >
                <FcGoogle className="text-xl" />
                Google
              </button>


              {authSuccess && (
                <p className="text-center text-xs font-semibold text-amber-700">
                  {authSuccess}
                </p>
              )}
              </form>
            )}

            <p className={`mt-4 text-center text-sm text-zinc-600 ${isForgot ? "hidden" : ""}`}>
              {isLogin ? "New to Etheria?" : "Already have an account?"}{" "}
              <button
                type="button"
                  onClick={() => {
                    switchMode(isLogin ? "signup" : "login");
                  }}
                className="font-semibold text-amber-700 hover:text-amber-800"
              >
                {isLogin ? "Sign up" : "Log in"}
              </button>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
