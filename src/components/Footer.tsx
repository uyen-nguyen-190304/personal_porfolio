export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Alex Chen. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with React, TypeScript, TailwindCSS, and a love for math.
          </p>
        </div>
      </div>
    </footer>
  );
}
