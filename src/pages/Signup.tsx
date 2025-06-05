import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useLang from "@/hooks/useLang";
import FormInput from "@/components/FormInput";

export default function Signup() {
  const { t, dir, textAlignClass, flexDirectionClass } = useLang();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (formData.name && formData.email && formData.password) {
        if (formData.password.length < 8) {
          setError(t.signup.error.passwordLength);
          return;
        }
        navigate("/dashboard");
      } else {
        setError(t.signup.error.emptyFields);
      }
    } catch {
      setError(t.signup.error.failed);
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
            alt={t.signup.title}
          />
          <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            {t.signup.title}
          </h1>
        </div>
        <form
          className="mt-8 space-y-6 w-full"
          onSubmit={handleSubmit}
          aria-label={t.signup.title}
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
              label={t.signup.fullName}
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={formData.name}
              onChange={handleChange}
              description={t.signup.fullNameDescription}
              aria-required="true"
            />

            <FormInput
              label={t.common.email}
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={formData.email}
              onChange={handleChange}
              description={t.common.emailPrivacy}
              aria-required="true"
            />

            <FormInput
              label={t.common.password}
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              required
              value={formData.password}
              onChange={handleChange}
              showPasswordToggle
              showPassword={showPassword}
              onPasswordToggle={() => setShowPassword(!showPassword)}
              description={t.common.passwordRequirements}
              aria-required="true"
            />
          </div>

          <div className="w-full">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              aria-label={t.signup.submitButton}
            >
              {t.signup.submitButton}
            </button>
          </div>

          <div className={`w-full text-center ${flexDirectionClass}`}>
            <span className="text-sm text-gray-600">
              {t.signup.hasAccount}{" "}
            </span>
            <Link
              to="/login"
              className="text-sm font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {t.signup.loginLink}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
