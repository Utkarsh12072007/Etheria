import { useEffect, useState } from "react";
import { FiEye, FiEyeOff, FiLock, FiMail, FiUser, FiX } from "react-icons/fi";

const Field = ({ icon: Icon, right, ...props }) => (
  <div className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white/70 px-4 py-3 transition-all duration-200 focus-within:border-amber-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-amber-100 focus-within:shadow-sm">
    <Icon size={17} className="text-amber-700/70" />
    <input
      {...props}
      className="w-full bg-transparent text-sm text-zinc-900 outline-none placeholder:text-zinc-400"/>
    {right}
  </div>
);

export default function Auth({ onClose }) {
  const [tab, setTab] = useState("login");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const login = tab === "login";

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  function change(e) {
    setErr("");

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function submit(e) {
    e.preventDefault();

    if (!form.email || !form.password || (!login && !form.name)) {
      return setErr("Please fill all required fields.");
    }

    setLoading(true);

    await new Promise((r) => setTimeout(r, 800));

    setLoading(false);
    onClose?.();
  }

  return (
    <div className="fixed inset-0 z-50 grid place-items-center px-4">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"/>

      <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-black/10 bg-gradient-to-br from-amber-50 to-orange-100 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-zinc-500 transition hover:bg-white hover:text-black hover:scale-110 active:scale-95">
          <FiX size={16} />
        </button>

        <div className="relative p-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-700">
            Etheria
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900">
            {login ? "Welcome back" : "Create account"}
          </h2>

          <p className="mt-2 text-sm text-zinc-600">
            {login ? "Sign in to continue." : "Create your account."}
          </p>

          <div className="relative mt-7 flex rounded-full bg-black/5 p-1">
            <div
              className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-zinc-900 transition-all duration-300 ${
                login ? "left-1" : "left-1/2"
              }`}
            />

            {["login", "signup"].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  setTab(item);
                  setErr("");
                }}
                className={`relative z-10 flex-1 rounded-full py-2.5 text-sm font-medium capitalize transition-colors duration-200 ${
                  tab === item ? "text-white" : "text-zinc-600"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <form onSubmit={submit} className="mt-6 space-y-4">
            {!login && (
              <Field
                icon={FiUser}
                type="text"
                name="name"
                placeholder="Full name"
                value={form.name}
                onChange={change}
              />
            )}

            <Field
              icon={FiMail}
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={change}
            />

            <Field
              icon={FiLock}
              type={show ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={change}
              right={
                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="text-zinc-400 transition hover:text-zinc-700">
                  {show ? <FiEyeOff size={17} /> : <FiEye size={17} />}
                </button>
              }
            />

            {login && (
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-xs font-medium text-amber-700 hover:text-amber-800">
                  Forgot password?
                </button>
              </div>
            )}

            {err && <p className="mt-3 text-sm font-medium text-red-500">{err}</p>}

            <button
              type="submit"
              disabled={loading}
              className="flex h-12 w-full items-center justify-center rounded-2xl bg-zinc-900 text-sm font-semibold text-white transition-all duration-200 hover:bg-amber-700 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] disabled:opacity-60 disabled:hover:bg-zinc-900 disabled:hover:shadow-none">
              {loading ? (
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              ) : login ? (
                "Continue"
              ) : (
                "Create account"
              )}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-zinc-600">
            {login
              ? "Don't have an account?"
              : "Already have an account?"}

            <button
              onClick={() => {
                setTab(login ? "signup" : "login");
                setErr("");
              }}
              className="ml-1 font-semibold text-amber-700 hover:text-amber-800">
              {login ? "Sign up" : "Log in"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
