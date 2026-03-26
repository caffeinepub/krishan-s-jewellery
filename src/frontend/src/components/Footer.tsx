import { Gem, Heart } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  const link = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`;

  return (
    <footer className="border-t border-border bg-secondary mt-auto">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Gem className="w-5 h-5 text-primary" />
            <span className="font-display font-bold text-lg">
              Kraftique Jewellery
            </span>
          </div>
          <div className="text-center text-sm text-muted-foreground">
            <p>Crafting timeless beauty since 2005 · Mumbai, India</p>
            <p className="mt-1">
              &copy; {year}. Built with{" "}
              <Heart className="inline w-3.5 h-3.5 text-destructive" /> using{" "}
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <span>Handcrafted</span>
            <span>·</span>
            <span>Artisan Made</span>
            <span>·</span>
            <span>Free Shipping</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
