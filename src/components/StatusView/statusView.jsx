export function StatusView({ title, subtitle, description }) {
  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600">
            {title}
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-700 md:text-4xl">
            {subtitle}
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-700">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
