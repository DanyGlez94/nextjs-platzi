export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <nav>Category Navigation</nav>
      {children}
    </main>
  );
}
