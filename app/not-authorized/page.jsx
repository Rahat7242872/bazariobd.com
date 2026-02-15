export default function NotAuthorized() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <h1 className="text-2xl font-semibold text-red-500">
        ❌ You are not authorized to access this page.
      </h1>
    </div>
  );
}
