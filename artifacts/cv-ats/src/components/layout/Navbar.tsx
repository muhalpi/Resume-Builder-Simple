import { Link } from "wouter";
import { FileText } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <FileText className="h-5 w-5" />
            </div>
            <span className="inline-block font-bold text-xl tracking-tight text-primary">BuatCV</span>
          </Link>
          <nav className="flex gap-6 text-sm font-medium">
            <Link
              href="/cv"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              My CVs
            </Link>
            <Link
              href="/cv/new"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Create New
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
