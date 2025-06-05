import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useLang from "@/hooks/useLang";
import FormInput from "@/components/FormInput";

export default function Login() {
  const { t, dir, textAlignClass, flexDirectionClass } = useLang();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your authentication logic here
    try {
      // Simulated login logic
      if (email && password) {
        // Navigate programmatically
        navigate("/dashboard");
      } else {
        setError(t.login.error.emptyFields);
      }
    } catch {
      setError(t.login.error.failed);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Enter" && document.activeElement?.tagName !== "BUTTON") {
        const submitButton = document.querySelector('button[type="submit"]');
        if (submitButton instanceof HTMLButtonElement) {
          submitButton.click();
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8"
      role="main"
      dir={dir}
    >
      <div
        className={`w-full max-w-md space-y-8 bg-white p-8 rounded-xl shadow-lg ${textAlignClass}`}
      >
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="/logo.svg"
            alt={t.login.title}
          />
          <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            {t.login.title}
          </h1>
        </div>
        <form
          className="mt-8 space-y-6 w-full"
          onSubmit={handleSubmit}
          aria-label={t.login.title}
        >
          {error && (
            <div
              className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded w-full"
              role="alert"
              aria-live="polite"
            >
              {error}
            </div>
          )}
          <div className="space-y-4 rounded-md w-full">
            <FormInput
              label={t.common.email}
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              description={t.common.emailDescription}
              aria-required="true"
            />

            <FormInput
              label={t.common.password}
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              showPasswordToggle
              showPassword={showPassword}
              onPasswordToggle={() => setShowPassword(!showPassword)}
              aria-required="true"
            />
          </div>

          <div
            className={`w-full flex items-center justify-between ${flexDirectionClass}`}
          >
            <div className="text-sm">
              <Link
                to="/forgot-password"
                className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {t.login.forgotPassword}
              </Link>
            </div>
          </div>

          <div className="w-full">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              aria-label={t.login.submitButton}
            >
              {t.login.submitButton}
            </button>
          </div>

          <div className={`w-full text-center ${flexDirectionClass}`}>
            <span className="text-sm text-gray-600">{t.login.noAccount} </span>
            <Link
              to="/signup"
              className="text-sm font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {t.login.signupLink}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
