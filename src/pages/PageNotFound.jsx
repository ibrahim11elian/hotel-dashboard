import { useMoveBack } from "../hooks/useMoveBack";

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <main className="flex h-screen items-center justify-center bg-gray-50 p-12">
      <div className="flex-0 max-w-[96rem] flex-grow rounded-md border border-gray-200 bg-white p-12 text-center">
        <h1 className="mb-8 text-3xl font-bold text-gray-600">
          The page you are looking for could not be found 😢
        </h1>
        <button
          onClick={moveBack}
          className="rounded-md bg-blue-600 px-4 py-2 text-lg text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          &larr; Go back
        </button>
      </div>
    </main>
  );
}

export default PageNotFound;
