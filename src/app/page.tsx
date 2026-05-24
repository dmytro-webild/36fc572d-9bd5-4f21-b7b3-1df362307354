"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';
import ProductCatalog from '@/components/ecommerce/productCatalog/ProductCatalog';
import ProductDetailCard from '@/components/ecommerce/productDetail/ProductDetailCard';
import { Target, TrendingUp } from 'lucide-react';

export default function LandingPage() {
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
      navItems={[
        { name: "Home", id: "/" },
        { name: "About", id: "/about" },
        { name: "Contact", id: "/contact" },
      ]}
      brandName="Smart Digital Store"
    />
  </div>

  <div id="hero-section" data-section="hero-section">
      <HeroSplitDoubleCarousel
      background={{ variant: "gradient-bars" }}
      title="Build your business the right way."
      description="Step by step guides for serious entrepreneurs. Expert knowledge, zero fluff."
      leftCarouselItems={[
        { imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-looking-digital-tablet-standing-near-modern-chandelier_23-2147937512.jpg", imageAlt: "Smart Digital Store Hero" },
        { imageSrc: "http://img.b2bpic.net/free-photo/glowing-red-warning-triangle-sign-dark-textured-background_84443-91474.jpg", imageAlt: "Smart Digital Store Hero" },
        { imageSrc: "http://img.b2bpic.net/free-photo/i-found-best-solution_329181-699.jpg", imageAlt: "Smart Digital Store Hero" },
        { imageSrc: "http://img.b2bpic.net/free-photo/man-blue-suit-posing-white-artistic-wall-from-bricks_613910-10622.jpg", imageAlt: "Smart Digital Store Hero" },
        { imageSrc: "http://img.b2bpic.net/free-photo/smart-attractive-smiling-asian-female-business-owner-entrepreneur-hand-hold-coffee-cup-portrait-shot-looking-camera-with-confidentwoman-sitting-table-home-studio_609648-2602.jpg", imageAlt: "Smart Digital Store Hero" },
        { imageSrc: "http://img.b2bpic.net/free-photo/top-view-laptop-table-glowing-screen-dark_169016-53642.jpg", imageAlt: "Smart Digital Store Hero" },
      ]}
      rightCarouselItems={[
        { imageSrc: "http://img.b2bpic.net/free-photo/cool-background-blank-wallpaper-place-your-concept_1194-641481.jpg", imageAlt: "Smart Digital Store Hero" },
        { imageSrc: "http://img.b2bpic.net/free-psd/digital-business-marketing-banner-template_23-2148644269.jpg", imageAlt: "Smart Digital Store Hero" },
        { imageSrc: "http://img.b2bpic.net/free-photo/smart-attractive-smiling-asian-female-business-owner-entrepreneur-hand-hold-coffee-cup-portrait-shot-looking-camera-with-confidentwoman-sitting-table-home-studio_609648-2611.jpg", imageAlt: "Smart Digital Store Hero" },
        { imageSrc: "http://img.b2bpic.net/free-psd/marketing-strategy-banner-template_23-2148995530.jpg", imageAlt: "Smart Digital Store Hero" },
        { imageSrc: "http://img.b2bpic.net/free-photo/computer-dark-room-with-graphs-screen_169016-55085.jpg", imageAlt: "Smart Digital Store Hero" },
        { imageSrc: "http://img.b2bpic.net/free-photo/cozy-hobby-growing-indoor-plants-home_185193-108761.jpg", imageAlt: "Smart Digital Store Hero" },
      ]}
      buttons={[{ text: "Get the Guide", href: "#products" }]}
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/black-businessman-happy-expression_1194-2723.jpg", alt: "Black businessman" },
        { src: "http://img.b2bpic.net/free-photo/modern-stylish-male-dressed-elegant-suit-posing-room-with-loft-interior_613910-1259.jpg", alt: "Stylish male" },
        { src: "http://img.b2bpic.net/free-photo/portrait-happy-businessman-standing-front-business-center_1150-3039.jpg", alt: "Happy businessman" },
        { src: "http://img.b2bpic.net/free-photo/low-angle-man-standing-with-crossed-arms_23-2148230798.jpg", alt: "Man with crossed arms" },
        { src: "http://img.b2bpic.net/free-photo/medium-shot-smiley-working-man-stairs_23-2148230849.jpg", alt: "Smiley working man" },
      ]}
      avatarText="Trusted by 5,000+ Entrepreneurs"
      marqueeItems={[
        { type: "text", text: "Scalable Growth" },
        { type: "text", text: "Actionable Strategy" },
        { type: "text", text: "Digital Success" },
        { type: "text", text: "Zero Fluff" },
        { type: "text", text: "Proven Systems" },
      ]}
    />
  </div>

  <div id="catalog-section" data-section="catalog-section">
      <ProductCatalog
      layout="section"
      products={[
        { id: "p1", name: "Identify Problems", price: "$29", rating: 5, imageSrc: "http://img.b2bpic.net/free-psd/digital-marketing-agency-corporate-facebook-cover-template-design_84443-24504.jpg" },
        { id: "p2", name: "Validate Idea", price: "$29", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/top-view-boss-s-day-arrangement-light-blue-background_23-2148664089.jpg" },
        { id: "p3", name: "Business Plan", price: "$29", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/contemporary-home-office-urban-apartment-decorated-with-wooden-furniture_482257-119606.jpg" },
      ]}
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardNine
      title="Pricing Plans"
      description="Choose the plan that best fits your business growth stage."
      plans={[
        { id: "p1", period: "monthly", title: "Starter", price: "$29", features: ["Basic Guides", "Community Access"], button: { text: "Get Started" } },
        { id: "p2", period: "monthly", title: "Pro", price: "$99", features: ["All Guides", "1-on-1 Strategy", "Templates"], button: { text: "Get Started" } }
      ]}
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
    />
  </div>

  <div id="metric" data-section="metric">
      <MetricCardSeven
      title="Performance Metrics"
      description="We deliver measurable results across all our training programs."
      metrics={[
        { label: "Target", value: "50+" },
        { label: "TrendingUp", value: "98%" }
      ]}
    />
  </div>

  <div id="ecommerce" data-section="ecommerce">
      <ProductDetailCard 
        name="All-Access Entrepreneur Guide"
        price="$299"
        images={{ src: "http://img.b2bpic.net/free-photo/laptop-dark-night-desktop_169016-53733.jpg", alt: "Detail" }}
        buttons={[{ text: "Buy Now" }]}
      />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        { title: "Company", items: [{ label: "About", href: "/about" }, { label: "Contact", href: "/contact" }] },
        { title: "Resources", items: [{ label: "All Guides", href: "/" }, { label: "Privacy", href: "#" }] },
      ]}
      logoText="Smart Digital Store"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
