export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col lg:flex-row text-center justify-center gap-12 lg:gap-6 md:px-6">
      {children}
    </section>
  );
}
