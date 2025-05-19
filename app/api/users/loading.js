export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center gap-4">
        <div className="loading loading-spinner loading-lg"></div>
        <p className="text-lg font-semibold">Loading users...</p>
      </div>
    </div>
  );
} 