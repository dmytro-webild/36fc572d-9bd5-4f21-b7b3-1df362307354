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
        {
          name: "Home",
          id: "/",
        },
        {
          name: "About",
          id: "/about",
        },
        {
          name: "Contact",
          id: "/contact",
        },
      ]}
      brandName="Smart Digital Store"
    />
  </div>

  <div id="hero-section" data-section="hero-section">
      <HeroSplitDoubleCarousel
      background={{
        variant: "gradient-bars",
      }}
      title="Build your business the right way."
      description="Step by step guides for serious entrepreneurs. Expert knowledge, zero fluff."
      leftCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-looking-digital-tablet-standing-near-modern-chandelier_23-2147937512.jpg",
          imageAlt: "Smart Digital Store Hero",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/glowing-red-warning-triangle-sign-dark-textured-background_84443-91474.jpg",
          imageAlt: "Smart Digital Store Hero",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/i-found-best-solution_329181-699.jpg",
          imageAlt: "Smart Digital Store Hero",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/man-blue-suit-posing-white-artistic-wall-from-bricks_613910-10622.jpg",
          imageAlt: "Smart Digital Store Hero",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/smart-attractive-smiling-asian-female-business-owner-entrepreneur-hand-hold-coffee-cup-portrait-shot-looking-camera-with-confidentwoman-sitting-table-home-studio_609648-2602.jpg",
          imageAlt: "Smart Digital Store Hero",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-laptop-table-glowing-screen-dark_169016-53642.jpg",
          imageAlt: "Smart Digital Store Hero",
        },
      ]}
      rightCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/cool-background-blank-wallpaper-place-your-concept_1194-641481.jpg",
          imageAlt: "Smart Digital Store Hero",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-psd/digital-business-marketing-banner-template_23-2148644269.jpg",
          imageAlt: "Smart Digital Store Hero",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/smart-attractive-smiling-asian-female-business-owner-entrepreneur-hand-hold-coffee-cup-portrait-shot-looking-camera-with-confidentwoman-sitting-table-home-studio_609648-2611.jpg",
          imageAlt: "Smart Digital Store Hero",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-psd/marketing-strategy-banner-template_23-2148995530.jpg",
          imageAlt: "Smart Digital Store Hero",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/computer-dark-room-with-graphs-screen_169016-55085.jpg",
          imageAlt: "Smart Digital Store Hero",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/cozy-hobby-growing-indoor-plants-home_185193-108761.jpg",
          imageAlt: "Smart Digital Store Hero",
        },
      ]}
      buttons={[
        {
          text: "Get the Guide",
          href: "#products",
        },
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/black-businessman-happy-expression_1194-2723.jpg",
          alt: "Black businessman happy expression",
        },
        {
          src: "http://img.b2bpic.net/free-photo/modern-stylish-male-dressed-elegant-suit-posing-room-with-loft-interior_613910-1259.jpg",
          alt: "A modern, stylish male dressed in an elegant suit",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-happy-businessman-standing-front-business-center_1150-3039.jpg",
          alt: "Portrait of happy businessman",
        },
        {
          src: "http://img.b2bpic.net/free-photo/low-angle-man-standing-with-crossed-arms_23-2148230798.jpg",
          alt: "Low angle man standing with crossed arms",
        },
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-smiley-working-man-stairs_23-2148230849.jpg",
          alt: "Medium shot smiley working man",
        },
      ]}
      avatarText="Trusted by 5,000+ Entrepreneurs"
      marqueeItems={[
        {
          type: "text",
          text: "Scalable Growth",
        },
        {
          type: "text",
          text: "Actionable Strategy",
        },
        {
          type: "text",
          text: "Digital Success",
        },
        {
          type: "text",
          text: "Zero Fluff",
        },
        {
          type: "text",
          text: "Proven Systems",
        },
      ]}
    />
  </div>

  <div id="catalog-section" data-section="catalog-section">
      <ProductCatalog
      layout="section"
      products={[
        {
          id: "p1",
          name: "Identify and Solve Market Problems",
          price: "$29",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-psd/digital-marketing-agency-corporate-facebook-cover-template-design_84443-24504.jpg",
        },
        {
          id: "p2",
          name: "Validate Business Idea",
          price: "$29",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-boss-s-day-arrangement-light-blue-background_23-2148664089.jpg",
        },
        {
          id: "p3",
          name: "Simple Business Plan",
          price: "$29",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/contemporary-home-office-urban-apartment-decorated-with-wooden-furniture_482257-119606.jpg",
        },
        {
          id: "p4",
          name: "Create Irresistible Offer",
          price: "$29",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/computer-keyboard-wooden-table-night-top-view_169016-51175.jpg",
        },
        {
          id: "p5",
          name: "Find First 10 Customers",
          price: "$29",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-psd/marketing-strategy-banner-template_23-2148995534.jpg",
        },
        {
          id: "p6",
          name: "Marketing Without Paid Ads",
          price: "$29",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/blue-orange-glitter-line-texture-background-trendy-style-copy-space_559531-10768.jpg",
        },
        {
          id: "p7",
          name: "Pricing Strategies",
          price: "$29",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/picture-man-blackboard-with-crown-text-successful_176420-2917.jpg",
        },
        {
          id: "p8",
          name: "Sales Basics for Beginners",
          price: "$29",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/urban-living-city-lifestyle-society-graphic_53876-120989.jpg",
        },
        {
          id: "p9",
          name: "Customer Psychology",
          price: "$29",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=04syj4",
        },
        {
          id: "p10",
          name: "Financial Management",
          price: "$29",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-vector/dark-waves-background-with-halftone-effect_23-2148178537.jpg",
        },
        {
          id: "p11",
          name: "Think Like an Entrepreneur",
          price: "$29",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/word-business-spelt-with-wooden-letters_23-2148227677.jpg",
        },
        {
          id: "p12",
          name: "Scale Without Burnout",
          price: "$29",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/dark-elegance-portrait-with-gold-embellishments_23-2152033563.jpg",
        },
        {
          id: "p13",
          name: "Copy That Sells",
          price: "$29",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/3d-gold-arrow-rising-stacked-coins-financial-growth-concept_84443-91523.jpg",
        },
        {
          id: "p14",
          name: "Anonymous Personal Brand",
          price: "$29",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/laptop-dark-night-desktop_169016-53733.jpg",
        },
      ]}
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
    />
  </div>

  <div id="metric" data-section="metric">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
    />
  </div>

  <div id="ecommerce" data-section="ecommerce">
      <ProductDetailCard />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "/about",
            },
            {
              label: "Contact",
              href: "/contact",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "All Guides",
              href: "/",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Smart Digital Store"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
