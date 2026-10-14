import "./globals.css";
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-2 opacity-70">Page Not Found</p>
      <a href="/" className="mt-4 neu-btn">
        Return Home
      </a>
    </div>
  );
}
