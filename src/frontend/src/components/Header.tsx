import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Moon, Sun, Waves } from "lucide-react";
import { useTheme } from "next-themes";

export function Header() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className="sticky top-0 z-50 bg-card border-b border-border/60 shadow-sm"
      data-ocid="main-header"
    >
      <div className="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group transition-smooth"
          data-ocid="nav-logo"
        >
          <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-smooth">
            <Waves className="w-4 h-4 text-primary" />
          </div>
          <span className="font-display font-bold text-lg tracking-tight text-foreground">
            Kural <span className="text-primary">AI</span>
          </span>
        </Link>

        {/* Nav + Theme */}
        <div className="flex items-center gap-1">
          <Link to="/" className="[&.active]:text-primary">
            {({ isActive }) => (
              <span
                className={`text-sm px-3 py-1.5 rounded-md transition-smooth ${
                  isActive
                    ? "text-primary font-medium bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
                data-ocid="nav-home"
              >
                Home
              </span>
            )}
          </Link>
          <Link to="/reader" className="[&.active]:text-primary">
            {({ isActive }) => (
              <span
                className={`text-sm px-3 py-1.5 rounded-md transition-smooth ${
                  isActive
                    ? "text-primary font-medium bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
                data-ocid="nav-reader"
              >
                Reader
              </span>
            )}
          </Link>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="ml-1 w-8 h-8 text-muted-foreground hover:text-foreground"
            aria-label="Toggle dark mode"
            data-ocid="theme-toggle"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
