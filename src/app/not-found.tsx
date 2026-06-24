export default function NotFound() {
  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{ minHeight: "90vh" }}
    >
      <h1 className="text-4xl font-bold mb-2">404</h1>
      <p className="text-neutral-600 dark:text-neutral-400">
        페이지를 찾을 수 없습니다.
      </p>
    </div>
  );
}
