import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, Heart, ShoppingBag, User, Menu, ArrowRight } from "lucide-react";
import { useState } from "react";
import hero from "@/assets/hero.jpg";
import catShirts from "@/assets/cat-shirts.jpg";
import catTshirts from "@/assets/cat-tshirts.jpg";
import catTrousers from "@/assets/cat-trousers.jpg";
import catJeans from "@/assets/cat-jeans.jpg";
import catJackets from "@/assets/cat-jackets.jpg";
import catFormal from "@/assets/cat-formal.jpg";
import catCasual from "@/assets/cat-casual.jpg";
import seasonal from "@/assets/seasonal.jpg";
import story from "@/assets/story.jpg";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";
import p7 from "@/assets/p7.jpg";
import p8 from "@/assets/p8.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BANAKAR CLOTHS — Premium Menswear" },
      { name: "description", content: "Refined menswear crafted from premium materials. Shirts, tailoring, outerwear and essentials, made to last." },
      { property: "og:title", content: "BANAKAR CLOTHS — Premium Menswear" },
      { property: "og:description", content: "Refined menswear crafted from premium materials." },
    ],
  }),
  component: Home,
});

const collections = [
  { name: "Shirts", img: catShirts },
  { name: "T-Shirts", img: catTshirts },
  { name: "Trousers", img: catTrousers },
  { name: "Jeans", img: catJeans },
  { name: "Jackets", img: catJackets },
  { name: "Formal Wear", img: catFormal },
  { name: "Casual Wear", img: catCasual },
];

const newArrivals = [
  { name: "Oxford Cotton Shirt", price: "₹12,999", img: p1, hover: p7 },
  { name: "Merino Mock Neck", price: "₹18,999", img: p2, hover: p5 },
  { name: "Leather Chelsea Boot", price: "₹42,999", img: p3, hover: p4 },
  { name: "Wool Tailored Trouser", price: "₹22,999", img: p4, hover: p2 },
];

const bestSellers = [
  { name: "Cashmere Turtleneck", price: "₹28,999", img: p5, hover: p2 },
  { name: "Leather Weekender", price: "₹58,999", img: p6, hover: p3 },
  { name: "Camel Wool Overcoat", price: "₹74,999", img: p7, hover: p5 },
  { name: "Selvedge Denim", price: "₹16,999", img: p8, hover: p4 },
];

const reviews = [
  { quote: "The cut, the cloth, the construction — uncompromising. My overcoat improves every season.", author: "James W.", city: "London" },
  { quote: "Finally a brand that respects fabric and proportion. The shirts are a quiet luxury.", author: "Hiroshi T.", city: "Tokyo" },
  { quote: "Tailoring that feels effortless. I've never been more confident in what I wear.", author: "Mathias L.", city: "Copenhagen" },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Marquee />
      <Collections />
      <NewArrivals />
      <SeasonalBanner />
      <BestSellers />
      <BrandStory />
      <Reviews />
      <Newsletter />
      <Footer />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12">
        <div className="relative flex items-center justify-between h-16 sm:h-18 lg:h-20">
          <div className="flex items-center gap-6 flex-1 min-w-0">
            <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
              <Menu className="w-5 h-5" strokeWidth={1.25} />
            </button>
            <nav className="hidden lg:flex items-center gap-8 text-[11px] tracking-[0.22em] uppercase font-medium">
              <a href="#new" className="link-underline">New In</a>
              <a href="#collections" className="link-underline">Collections</a>
              <a href="#bestsellers" className="link-underline">Best Sellers</a>
            </nav>
          </div>
          <Link to="/" className="font-serif text-base sm:text-xl lg:text-3xl tracking-[0.18em] sm:tracking-[0.24em] lg:tracking-[0.32em] font-light absolute left-1/2 -translate-x-1/2 whitespace-nowrap">
            BANAKAR&nbsp;CLOTHS
          </Link>
          <div className="flex items-center gap-4 sm:gap-6 flex-1 min-w-0 justify-end">
            <button aria-label="Search"><Search className="w-5 h-5" strokeWidth={1.25} /></button>
            <button aria-label="Account" className="hidden sm:block"><User className="w-5 h-5" strokeWidth={1.25} /></button>
            <button aria-label="Wishlist" className="hidden sm:block"><Heart className="w-5 h-5" strokeWidth={1.25} /></button>
            <button aria-label="Cart" className="relative">
              <ShoppingBag className="w-5 h-5" strokeWidth={1.25} />
              <span className="absolute -top-1.5 -right-2 text-[10px] tracking-normal">0</span>
            </button>
          </div>
        </div>
        {open && (
          <nav className="lg:hidden border-t border-border py-4 flex flex-col gap-4 text-[11px] tracking-[0.22em] uppercase font-medium">
            <a href="#new" onClick={() => setOpen(false)}>New In</a>
            <a href="#collections" onClick={() => setOpen(false)}>Collections</a>
            <a href="#bestsellers" onClick={() => setOpen(false)}>Best Sellers</a>
          </nav>
        )}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative h-[78vh] sm:h-[85vh] lg:h-[88vh] min-h-[520px] sm:min-h-[640px] w-full overflow-hidden bg-beige">
      <img
        src={hero}
        alt="Autumn Winter campaign — male model in charcoal wool overcoat"
        width={1920}
        height={1280}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/25 to-foreground/10" />
      <div className="relative h-full mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12 flex flex-col justify-end pb-10 sm:pb-16 lg:pb-24">
        <div className="max-w-xl fade-in-up">
          <p className="eyebrow mb-4 sm:mb-6 text-background/90">Autumn / Winter 2026</p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-background mb-6 sm:mb-8">
            The art of<br />quiet tailoring.
          </h1>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#new" className="inline-flex items-center justify-center bg-background text-foreground px-6 sm:px-9 py-3.5 sm:py-4 text-[11px] tracking-[0.22em] uppercase font-medium hover:bg-foreground hover:text-background transition-colors duration-500">
              Shop the Collection
            </a>
            <a href="#story" className="inline-flex items-center gap-3 text-background text-[11px] tracking-[0.22em] uppercase font-medium link-underline">
              Discover the story <ArrowRight className="w-4 h-4" strokeWidth={1.25} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Complimentary Shipping over ₹2000", "Free Returns Worldwide", "Crafted for the Modern Gentleman", "Discreet Packaging"];
  return (
    <div className="border-y border-border py-3 sm:py-4 overflow-x-auto">
      <div className="flex sm:justify-around items-center gap-8 sm:gap-12 text-[9px] sm:text-[10px] tracking-[0.24em] sm:tracking-[0.28em] uppercase text-muted-foreground whitespace-nowrap px-4 sm:px-6 min-w-max sm:min-w-0">
        {items.map((i) => <span key={i}>{i}</span>)}
      </div>
    </div>
  );
}

function Collections() {
  return (
    <section id="collections" className="py-16 sm:py-20 lg:py-32 bg-background">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12">
        <div className="flex items-end justify-between mb-10 sm:mb-14">
          <div>
            <p className="eyebrow mb-3 sm:mb-4">Categories</p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl">The Collections</h2>
          </div>
          <a href="#" className="hidden md:inline-flex text-[11px] tracking-[0.22em] uppercase link-underline">View All</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 sm:gap-x-5 gap-y-10 sm:gap-y-12">
          {collections.map((c) => (
            <a key={c.name} href="#" className="group block">
              <div className="aspect-[3/4] overflow-hidden bg-beige">
                <img src={c.img} alt={c.name} loading="lazy" width={1024} height={1280}
                  className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]" />
              </div>
              <div className="mt-4 sm:mt-5 flex items-center justify-between gap-2">
                <h3 className="font-serif text-base sm:text-lg lg:text-xl truncate">{c.name}</h3>
                <span className="text-[9px] sm:text-[10px] tracking-[0.22em] uppercase text-muted-foreground shrink-0">Shop →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ p }: { p: { name: string; price: string; img: string; hover: string } }) {
  return (
    <div className="group">
      <a href="#" className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-beige">
          <img src={p.img} alt={p.name} loading="lazy" width={900} height={1152}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0" />
          <img src={p.hover} alt="" aria-hidden loading="lazy" width={900} height={1152}
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
          <button className="absolute bottom-4 left-4 right-4 bg-background text-foreground py-3 text-[10px] tracking-[0.22em] uppercase opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
            Quick Add
          </button>
        </div>
      </a>
      <div className="mt-5 flex items-start justify-between gap-4">
        <h3 className="text-sm font-normal">{p.name}</h3>
        <span className="text-sm text-muted-foreground">{p.price}</span>
      </div>
    </div>
  );
}

function NewArrivals() {
  return (
    <section id="new" className="py-16 sm:py-20 lg:py-32 bg-offwhite">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-10 sm:mb-16">
          <p className="eyebrow mb-4">Just Landed</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl">New Arrivals</h2>
          <p className="mt-5 text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
            Considered pieces for the new season — refined silhouettes in noble materials.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 sm:gap-x-5 gap-y-10 sm:gap-y-14">
          {newArrivals.map((p) => <ProductCard key={p.name} p={p} />)}
        </div>
      </div>
    </section>
  );
}

function SeasonalBanner() {
  return (
    <section className="relative h-[70vh] sm:h-[75vh] lg:h-[80vh] min-h-[460px] sm:min-h-[560px] w-full overflow-hidden">
      <img src={seasonal} alt="Winter Edit" loading="lazy" width={1920} height={1100}
        className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-foreground/20" />
      <div className="relative h-full mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12 flex items-center">
        <div className="max-w-md text-background">
          <p className="eyebrow mb-5 text-background/80">Seasonal Edit</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl leading-[1.05] mb-6">The Winter Wardrobe.</h2>
          <p className="text-sm leading-relaxed text-background/85 mb-8 font-light">
            Heavyweight knits, sculpted outerwear and considered layering. Built for cold mornings and long evenings.
          </p>
          <a href="#" className="inline-flex items-center justify-center bg-background text-foreground px-6 sm:px-9 py-3.5 sm:py-4 text-[11px] tracking-[0.22em] uppercase font-medium hover:bg-foreground hover:text-background border border-background transition-colors duration-500">
            Explore the Edit
          </a>
        </div>
      </div>
    </section>
  );
}

function BestSellers() {
  return (
    <section id="bestsellers" className="py-16 sm:py-20 lg:py-32 bg-background">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-10 sm:mb-16">
          <p className="eyebrow mb-4">Iconic</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl">Best Sellers</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 sm:gap-x-5 gap-y-10 sm:gap-y-14">
          {bestSellers.map((p) => <ProductCard key={p.name} p={p} />)}
        </div>
      </div>
    </section>
  );
}

function BrandStory() {
  return (
    <section id="story" className="bg-beige">
      <div className="grid lg:grid-cols-2 items-stretch">
        <div className="relative aspect-[5/6] lg:aspect-auto">
          <img src={story} alt="Atelier" loading="lazy" width={1400} height={1600}
            className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="flex items-center justify-center p-8 sm:p-10 lg:p-24">
          <div className="max-w-md">
            <p className="eyebrow mb-6">Our Atelier</p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.1] mb-8">
              Crafted for the<br/>modern Indian gentleman.
            </h2>
            <p className="text-sm leading-[1.9] text-muted-foreground mb-5 font-light">
              Blending timeless Indian craftsmanship with contemporary elegance, every garment is designed and made with meticulous attention to detail — built to soften with time, never to be replaced.
            </p>
            <p className="text-sm leading-[1.9] text-muted-foreground mb-10 font-light">
              We believe in fewer pieces, made better. Pieces with weight, structure, and quiet intention.
            </p>
            <a href="#" className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase font-medium link-underline">
              Read Our Story <ArrowRight className="w-4 h-4" strokeWidth={1.25} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-background">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-10 sm:mb-16">
          <p className="eyebrow mb-4">In Their Words</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl">From Our Clients</h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-12 lg:gap-16">
          {reviews.map((r, i) => (
            <figure key={i} className="text-center">
              <div className="text-3xl font-serif text-muted-foreground mb-6">“</div>
              <blockquote className="font-serif text-lg sm:text-xl md:text-2xl leading-[1.5] mb-8">
                {r.quote}
              </blockquote>
              <figcaption className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
                {r.author} — {r.city}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="bg-offwhite py-16 sm:py-20 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-xl px-4 sm:px-6 text-center">
        <p className="eyebrow mb-5">Stay in Touch</p>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-5">The Banakar Letter</h2>
        <p className="text-sm text-muted-foreground mb-10 leading-relaxed font-light">
          Receive private previews of new collections, atelier stories and seasonal editorials. Once a month, never more.
        </p>
        <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 bg-transparent border-b border-foreground py-3 px-1 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-foreground"
          />
          <button className="bg-foreground text-background px-6 sm:px-9 py-3.5 sm:py-4 text-[11px] tracking-[0.22em] uppercase font-medium hover:bg-stone transition-colors duration-500">
            Subscribe
          </button>
        </form>
        <p className="mt-6 text-[10px] tracking-[0.15em] uppercase text-muted-foreground">By subscribing you agree to our Privacy Policy.</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-background pt-14 sm:pt-20 pb-8 sm:pb-10">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-10 sm:mb-16">
          <div>
            <div className="font-serif text-xl sm:text-2xl tracking-[0.24em] sm:tracking-[0.28em] mb-5 sm:mb-6">BANAKAR CLOTHS</div>
            <p className="text-sm text-background/60 leading-relaxed font-light">
              Premium menswear crafted for the modern Indian gentleman. Quality, elegance, and tradition in every stitch.
            </p>
            <p className="text-sm text-background/60 leading-relaxed font-light mt-4">
              Kotturu-583134
            </p>
          </div>
          {[
            { t: "Shop", l: ["New Arrivals", "Shirts", "Tailoring", "Outerwear", "Denim", "Accessories"] },
            { t: "Banakar", l: ["Our Story", "The Atelier", "Sustainability", "Stores"] },
            { t: "Service", l: ["Contact", "Shipping", "Returns", "Size Guide", "Care", "FAQ"] },
          ].map((col) => (
            <div key={col.t}>
              <h4 className="text-[11px] tracking-[0.22em] uppercase mb-6">{col.t}</h4>
              <ul className="space-y-3">
                {col.l.map((i) => (
                  <li key={i}><a href="#" className="text-sm text-background/70 hover:text-background transition-colors font-light">{i}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-background/15 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-[0.22em] uppercase text-background/50">
          <p>© 2026 Banakar Cloths. All rights reserved.</p>
          <div className="flex gap-5 sm:gap-8">
            <a href="#" className="hover:text-background">Privacy</a>
            <a href="#" className="hover:text-background">Terms</a>
            <a href="#" className="hover:text-background">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
