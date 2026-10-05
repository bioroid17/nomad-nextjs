export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      &copy; NestJS is great!
    </div>
  );
}
