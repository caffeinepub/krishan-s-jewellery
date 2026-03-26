import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useCart } from "@/context/CartContext";
import { categories, formatPrice, products } from "@/data/products";
import { ShoppingCart, Sparkles, Star, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

type Product = (typeof products)[0];

export function HomePage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { addToCart, items } = useCart();

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  function handleAddToCart(product: Product) {
    addToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    toast.success(`${product.name} added to cart!`, {
      description: formatPrice(product.price),
    });
  }

  const modalProduct = selectedProduct;
  const modalInCart = modalProduct
    ? items.some((i) => i.productId === modalProduct.id)
    : false;

  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="relative h-[420px] sm:h-[500px]">
          <img
            src="/assets/generated/hero-handmade-jewelry.dim_1200x600.jpg"
            alt="Kraftique Jewellery Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10" />
          <div className="absolute inset-0 flex flex-col justify-center px-8 sm:px-16 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Sparkles
                  className="w-4 h-4"
                  style={{ color: "oklch(0.92 0.18 85)" }}
                />
                <span
                  className="text-sm font-medium tracking-widest uppercase"
                  style={{ color: "oklch(0.92 0.18 85)" }}
                >
                  Est. 2005
                </span>
              </div>
              <h1 className="font-display text-4xl sm:text-6xl font-bold text-white leading-tight mb-4 drop-shadow-lg">
                Handcrafted
                <br />
                <span
                  className="italic"
                  style={{ color: "oklch(0.93 0.20 80)" }}
                >
                  with Love
                </span>
              </h1>
              <p
                className="text-base sm:text-lg mb-6 max-w-md drop-shadow"
                style={{ color: "oklch(0.95 0.02 80)" }}
              >
                Discover beautiful handicraft jewellery — ethnic beads,
                terracotta, macrame, and wire art pieces made by skilled
                artisans.
              </p>
              <Button
                size="lg"
                className="gold-gradient text-primary-foreground font-semibold shadow-gold hover:opacity-90 transition-opacity"
                onClick={() =>
                  document
                    .getElementById("products")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore Collection
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section id="products" className="container mx-auto px-4 pt-12 pb-4">
        <div className="text-center mb-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-2">
            Our Collection
          </h2>
          <p className="text-muted-foreground">
            Handcrafted pieces for every occasion
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              type="button"
              key={cat}
              data-ocid="home.category_filter.tab"
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "gold-gradient text-primary-foreground shadow-gold"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 border border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-16"
        >
          <AnimatePresence>
            {filtered.map((product, idx) => {
              const inCart = items.some((i) => i.productId === product.id);
              const globalIdx =
                products.findIndex((p) => p.id === product.id) + 1;
              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: idx * 0.05 }}
                  data-ocid={`product.item.${globalIdx}`}
                  className="group bg-card rounded-xl overflow-hidden shadow-xs hover:shadow-luxury transition-all duration-300 border border-border flex flex-col"
                >
                  {/* Clickable image — use a button wrapper for a11y */}
                  <button
                    type="button"
                    className="relative overflow-hidden aspect-square w-full cursor-pointer block"
                    onClick={() => setSelectedProduct(product)}
                    data-ocid={`product.open_modal_button.${globalIdx}`}
                    aria-label={`View details for ${product.name}`}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 text-foreground text-xs font-semibold px-3 py-1.5 rounded-full shadow">
                        View Details
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-background/80 backdrop-blur text-foreground border-0 text-xs">
                        {product.category}
                      </Badge>
                    </div>
                  </button>
                  <div className="p-4 flex flex-col flex-1">
                    <div className="flex items-center gap-1 mb-1">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <Star
                          key={n}
                          className="w-3 h-3 fill-primary text-primary"
                        />
                      ))}
                    </div>
                    {/* Clickable product name — use a button for a11y */}
                    <button
                      type="button"
                      className="font-display font-semibold text-base mb-1 leading-snug cursor-pointer hover:text-primary transition-colors text-left w-full"
                      onClick={() => setSelectedProduct(product)}
                    >
                      {product.name}
                    </button>
                    <p className="text-muted-foreground text-xs mb-3 flex-1 leading-relaxed">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="font-bold text-lg text-gold-gradient">
                        {formatPrice(product.price)}
                      </span>
                      <Button
                        size="sm"
                        data-ocid={`product.add_button.${globalIdx}`}
                        onClick={() => handleAddToCart(product)}
                        className={`gap-1.5 text-xs transition-all ${
                          inCart
                            ? "bg-accent text-accent-foreground hover:bg-accent/90"
                            : "gold-gradient text-primary-foreground hover:opacity-90 shadow-gold"
                        }`}
                      >
                        <ShoppingCart className="w-3.5 h-3.5" />
                        {inCart ? "Add More" : "Add to Cart"}
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Trust Badges */}
      <section className="bg-secondary border-y border-border">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { icon: "🎨", label: "Handcrafted" },
              { icon: "🧵", label: "Artisan Made" },
              { icon: "🚚", label: "Free Shipping" },
              { icon: "↩️", label: "Easy Returns" },
            ].map(({ icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <span className="text-3xl">{icon}</span>
                <span className="text-sm font-medium text-muted-foreground">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details Modal */}
      <Dialog
        open={!!selectedProduct}
        onOpenChange={(open) => !open && setSelectedProduct(null)}
      >
        <DialogContent
          className="max-w-2xl p-0 overflow-hidden"
          data-ocid="product.dialog"
        >
          <button
            type="button"
            onClick={() => setSelectedProduct(null)}
            className="absolute top-3 right-3 z-10 rounded-full bg-background/80 backdrop-blur p-1.5 text-foreground hover:bg-background transition-colors shadow"
            data-ocid="product.close_button"
          >
            <X className="w-4 h-4" />
          </button>

          {modalProduct && (
            <div className="flex flex-col sm:flex-row">
              {/* Image */}
              <div className="sm:w-1/2 aspect-square sm:aspect-auto">
                <img
                  src={modalProduct.image}
                  alt={modalProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="sm:w-1/2 p-6 flex flex-col justify-between">
                <div>
                  <DialogHeader className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="gold-gradient text-primary-foreground border-0 text-xs">
                        {modalProduct.category}
                      </Badge>
                    </div>
                    <DialogTitle className="font-display text-2xl font-bold leading-snug">
                      {modalProduct.name}
                    </DialogTitle>
                  </DialogHeader>

                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <Star
                        key={n}
                        className="w-4 h-4 fill-primary text-primary"
                      />
                    ))}
                    <span className="text-xs text-muted-foreground ml-1">
                      5.0 (124 reviews)
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {modalProduct.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1.5 mb-6">
                    {[
                      "100% handcrafted by skilled artisans",
                      "Ethically sourced materials",
                      "Free shipping on all orders",
                    ].map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-2 text-xs text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <span className="font-bold text-2xl text-gold-gradient">
                    {formatPrice(modalProduct.price)}
                  </span>
                  <Button
                    size="default"
                    data-ocid="product.modal.submit_button"
                    onClick={() => handleAddToCart(modalProduct)}
                    className={`gap-2 transition-all ${
                      modalInCart
                        ? "bg-accent text-accent-foreground hover:bg-accent/90"
                        : "gold-gradient text-primary-foreground hover:opacity-90 shadow-gold"
                    }`}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    {modalInCart ? "Add More" : "Add to Cart"}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
}
