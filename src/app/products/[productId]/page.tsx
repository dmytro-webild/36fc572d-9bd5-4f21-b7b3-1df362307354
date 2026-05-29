"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import FooterBase from '@/components/sections/footer/FooterBase';
import ProductDetailCard from '@/components/ecommerce/productDetail/ProductDetailCard';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import { Star, CheckCircle } from 'lucide-react';

export default function ProductDetailPage({ params }: { params: { productId: string } }) {
  // Dummy product data for demonstration
  const product = {
    id: params.productId,
    name: "Quantum Flow Processor",    price: "$1,299.00",    description: "Experience unparalleled performance with the Quantum Flow Processor. Designed for the most demanding tasks, it redeploys speed and efficiency in computing. Perfect for professionals and enthusiasts alike.",    rating: 4.8,
    images: [
      { src: "https://webild.nyc3.cdn.digitaloceanspaces.com/webild-assets/image-placeholder-square.jpg", alt: "Quantum Flow Processor Front" },
      { src: "https://webild.nyc3.cdn.digitaloceanspaces.com/webild-assets/image-placeholder-square.jpg", alt: "Quantum Flow Processor Side" },
      { src: "https://webild.nyc3.cdn.digitaloceanspaces.com/webild-assets/image-placeholder-square.jpg", alt: "Quantum Flow Processor Back" }
    ],
    variants: [
      { label: "Storage", options: ["256GB", "512GB", "1TB"], selected: "512GB", onChange: (value: string) => console.log(value) },
      { label: "Color", options: ["Space Gray", "Silver"], selected: "Space Gray", onChange: (value: string) => console.log(value) }
    ],
    quantity: { label: "Quantity", options: ["1", "2", "3", "4", "5"], selected: "1", onChange: (value: string) => console.log(value) }
  };

  const navItems = [
    { name: "Home", id: "/" },
    { name: "Products", id: "/products" },
    { name: "Cart", id: "/cart" },
    { name: "Checkout", id: "/checkout" },
    { name: "About", id: "/about" },
    { name: "Contact", id: "/contact" }
  ];

  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="small"
      sizing="mediumSizeLargeTitles"
      background="circleGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="bold"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarLayoutFloatingOverlay
            navItems={navItems}
            brandName="Smart Digital Store"
          />
        </div>

        <div id="product-detail" data-section="product-detail" className="py-16 md:py-24 lg:py-32">
          <ProductDetailCard
            layout="page"
            name={product.name}
            price={product.price}
            description={product.description}
            rating={product.rating}
            images={product.images}
            variants={product.variants}
            quantity={product.quantity}
            buttons={[
              { text: "Add to Cart", onClick: () => alert("Added to cart!") },
              { text: "Buy Now", href: "/checkout" }
            ]}
          />
        </div>

        <div id="product-features" data-section="product-features" className="py-16 md:py-24 lg:py-32">
          <FeatureCardTwentySix
            title="Key Features"
            description="Explore the groundbreaking capabilities that set our processor apart."
            features={[
              {
                title: "Unmatched Speed",                description: "Blazing-fast processing power for seamless multitasking and demanding applications.",                imageSrc: "https://webild.nyc3.cdn.digitaloceanspaces.com/webild-assets/image-placeholder-square.jpg?_wi=1",                imageAlt: "Speed icon",                buttonIcon: Star
              },
              {
                title: "Energy Efficiency",                description: "Advanced power management ensures optimal performance with minimal energy consumption.",                imageSrc: "https://webild.nyc3.cdn.digitaloceanspaces.com/webild-assets/image-placeholder-square.jpg?_wi=2",                imageAlt: "Efficiency icon",                buttonIcon: CheckCircle
              },
              {
                title: "Integrated AI Core",                description: "Dedicated AI processing unit accelerates machine learning workloads and intelligent features.",                imageSrc: "https://webild.nyc3.cdn.digitaloceanspaces.com/webild-assets/image-placeholder-square.jpg?_wi=3",                imageAlt: "AI icon",                buttonIcon: Star
              },
              {
                title: "Future-Proof Architecture",                description: "Designed to adapt to future technological advancements, ensuring longevity and relevance.",                imageSrc: "https://webild.nyc3.cdn.digitaloceanspaces.com/webild-assets/image-placeholder-square.jpg?_wi=4",                imageAlt: "Future icon",                buttonIcon: CheckCircle
              }
            ]}
            useInvertedBackground={false}
            textboxLayout="default"
            buttons={[{ text: "Discover More", href: "/about" }]}
            buttonAnimation="blur-reveal"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBase
            columns={[
              { title: "Company", items: [{ label: "About", href: "/about" }, { label: "Contact", href: "/contact" }, { label: "Products", href: "/products" }] },
              { title: "Resources", items: [{ label: "All Guides", href: "/" }, { label: "Privacy", href: "#" }] }
            ]}
            logoText="Smart Digital Store"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}