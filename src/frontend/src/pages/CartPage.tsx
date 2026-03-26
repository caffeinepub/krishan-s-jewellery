import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

export function CartPage() {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <main className="container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          data-ocid="cart.empty_state"
          className="max-w-sm mx-auto"
        >
          <div className="w-24 h-24 rounded-full bg-secondary border-2 border-dashed border-border flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-10 h-10 text-muted-foreground" />
          </div>
          <h2 className="font-display text-3xl font-bold mb-3">
            Your cart is empty
          </h2>
          <p className="text-muted-foreground mb-8">
            Looks like you haven&apos;t added any pieces to your cart yet.
          </p>
          <Link to="/">
            <Button className="gold-gradient text-primary-foreground shadow-gold hover:opacity-90 gap-2">
              <ArrowLeft className="w-4 h-4" />
              Explore Collection
            </Button>
          </Link>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-10">
      <div className="flex items-center gap-4 mb-8">
        <Link to="/">
          <Button
            variant="ghost"
            size="sm"
            className="gap-2 text-muted-foreground"
          >
            <ArrowLeft className="w-4 h-4" />
            Continue Shopping
          </Button>
        </Link>
        <h1 className="font-display text-3xl font-bold">Your Cart</h1>
        <span className="text-muted-foreground text-sm">
          {items.length} item{items.length !== 1 ? "s" : ""}
        </span>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          <AnimatePresence>
            {items.map((item, idx) => (
              <motion.div
                key={item.productId}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20, height: 0 }}
                transition={{ delay: idx * 0.05 }}
                data-ocid={`cart.item.${idx + 1}`}
                className="bg-card rounded-xl border border-border p-4 flex gap-4 shadow-xs hover:shadow-gold transition-shadow"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-semibold text-base mb-1 truncate">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {formatPrice(item.price)} each
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.productId, -1)}
                        className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-6 text-center font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.productId, 1)}
                        className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-base text-gold-gradient">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                      <button
                        type="button"
                        data-ocid={`cart.remove_button.${idx + 1}`}
                        onClick={() => removeFromCart(item.productId)}
                        className="text-muted-foreground hover:text-destructive transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-card rounded-xl border border-border p-6 shadow-xs sticky top-24">
            <h2 className="font-display text-xl font-bold mb-4">
              Order Summary
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">{formatPrice(totalPrice)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span className="text-green-600 font-medium">FREE</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Free shipping on all orders
              </p>
              <Separator className="my-2" />
              <div className="flex justify-between font-bold text-base">
                <span>Total</span>
                <span className="text-gold-gradient">
                  {formatPrice(totalPrice)}
                </span>
              </div>
            </div>
            <Button className="w-full mt-6 gold-gradient text-primary-foreground font-semibold shadow-gold hover:opacity-90">
              Proceed to Checkout
            </Button>
            <p className="text-xs text-center text-muted-foreground mt-3">
              Secure checkout · 30-day returns
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
