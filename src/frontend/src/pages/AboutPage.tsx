import { Award, Gem, Heart, Users } from "lucide-react";
import { motion } from "motion/react";

export function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary border border-border text-sm text-muted-foreground mb-6">
          <Gem className="w-4 h-4 text-primary" />
          Our Story
        </div>
        <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6 leading-tight">
          Crafting Beauty
          <br />
          <span className="italic text-gold-gradient">Since 2005</span>
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          For nearly two decades, Kraftique Jewellery has been synonymous with
          uncompromising craftsmanship, ethically sourced materials, and designs
          that speak to the soul.
        </p>
      </motion.div>

      {/* Story Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2 className="font-display text-3xl font-bold mb-4">
            Our Founding Story
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Kraftique Jewellery was founded in the heart of Mumbai with a
            singular vision: to bring the finest handcrafted jewellery to
            discerning customers who value authenticity above all else. What
            started as a small workshop with three master craftsmen has grown
            into a beloved brand trusted by thousands of families across India.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Every piece that bears our name is crafted with meticulous attention
            to detail, using only the finest natural materials. We believe
            jewellery should tell a story — of love, heritage, and artistry that
            transcends generations.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative"
        >
          <img
            src="/assets/generated/about-handmade-jewelry.dim_1200x700.jpg"
            alt="Handmade artisan jewellery collection"
            className="rounded-2xl w-full object-cover shadow-luxury"
          />
        </motion.div>
      </div>

      {/* Values */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h2 className="font-display text-3xl font-bold text-center mb-10">
          Our Values
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Gem className="w-6 h-6" />,
              title: "Artisan Quality",
              desc: "Every piece is handcrafted by skilled artisans using traditional techniques.",
            },
            {
              icon: <Award className="w-6 h-6" />,
              title: "Master Craftsmanship",
              desc: "Our artisans carry forward generations of traditional jewellery-making techniques.",
            },
            {
              icon: <Heart className="w-6 h-6" />,
              title: "Made with Love",
              desc: "Each piece is crafted with passion, care, and an eye for perfection.",
            },
            {
              icon: <Users className="w-6 h-6" />,
              title: "Customer First",
              desc: "Over 50,000 happy customers trust us with their most precious moments.",
            },
          ].map(({ icon, title, desc }) => (
            <div
              key={title}
              className="bg-card rounded-xl p-6 border border-border shadow-xs hover:shadow-gold transition-shadow group"
            >
              <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center text-primary-foreground mb-4 group-hover:scale-110 transition-transform">
                {icon}
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">
                {title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
