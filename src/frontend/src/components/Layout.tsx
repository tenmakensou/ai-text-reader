import { Header } from "@/components/Header";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const year = new Date().getFullYear();
  const utmLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 flex flex-col">{children}</main>

      <footer className="bg-card border-t border-border/60 py-4 mt-auto">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-xs text-muted-foreground">
            © {year}.{" "}
            <a
              href={utmLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors duration-200"
            >
              Built with love using caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
