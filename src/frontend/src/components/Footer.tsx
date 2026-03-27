import { Gem, Heart, Mail, Phone, User } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  const link = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`;

  return (
    <footer className="border-t border-border bg-secondary mt-auto">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Gem className="w-5 h-5 text-primary" />
              <span className="font-display font-bold text-lg">
                Kraftique Jewellery
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Crafting timeless beauty since 2005 · Mumbai, India
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-semibold text-sm text-foreground mb-1">
              Contact Us
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <User className="w-4 h-4 text-primary" />
              <span>K Patel</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="w-4 h-4 text-primary" />
              <span>kraftique@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4 text-primary" />
              <span>888-926-1999</span>
            </div>
          </div>

          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <div className="flex gap-4">
              <span>Handcrafted</span>
              <span>·</span>
              <span>Artisan Made</span>
              <span>·</span>
              <span>Free Shipping</span>
            </div>
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
        </div>
      </div>
    </footer>
  );
}
