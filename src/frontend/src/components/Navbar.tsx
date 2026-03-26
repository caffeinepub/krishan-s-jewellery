import { Badge } from "@/components/ui/badge";
import { useCart } from "@/context/CartContext";
import { Link, useRouterState } from "@tanstack/react-router";
import { Gem, ShoppingCart } from "lucide-react";
import { motion } from "motion/react";

export function Navbar() {
  const { totalCount } = useCart();
  const routerState = useRouterState();
  const path = routerState.location.pathname;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-xs">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" data-ocid="nav.home_link">
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Gem className="w-6 h-6 text-primary" />
            <span className="font-display font-bold text-xl tracking-tight">
              Kraftique
              <span className="text-gold-gradient ml-1">Jewellery</span>
            </span>
          </motion.div>
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          <NavLink
            to="/"
            label="Home"
            active={path === "/"}
            ocid="nav.home_link"
          />
          <NavLink
            to="/about"
            label="About Us"
            active={path === "/about"}
            ocid="nav.about_link"
          />
          <Link to="/cart" data-ocid="nav.cart_link">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`relative flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                path === "/cart"
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="hidden sm:inline">Cart</span>
              {totalCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs gold-gradient text-primary-foreground border-0">
                  {totalCount}
                </Badge>
              )}
            </motion.div>
          </Link>
        </div>
      </nav>
    </header>
  );
}

function NavLink({
  to,
  label,
  active,
  ocid,
}: {
  to: string;
  label: string;
  active: boolean;
  ocid: string;
}) {
  return (
    <Link to={to} data-ocid={ocid}>
      <motion.span
        whileHover={{ scale: 1.03 }}
        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors block ${
          active
            ? "text-primary font-semibold"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        {label}
      </motion.span>
    </Link>
  );
}
