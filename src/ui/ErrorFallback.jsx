import Button from "./Button";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <main className="flex h-screen items-center justify-center bg-gray-50 p-12">
      <div className="flex-0 max-w-[96rem] flex-grow rounded-md border border-gray-200 bg-white p-12 text-center">
        <h1 className="mb-4 text-3xl font-bold text-gray-700">
          Something went wrong
        </h1>
        <p className="mb-8 font-sono text-gray-500">{error.message}</p>

        <Button size="large" onClick={resetErrorBoundary}>
          Try gain
        </Button>
      </div>
    </main>
  );
}

export default ErrorFallback;
