"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="small"
        sizing="mediumSizeLargeTitles"
        background="aurora"
        cardStyle="glass-elevated"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        { name: "Home", id: "/" },
        { name: "Products", id: "/products" },
        { name: "About", id: "/about" },
        { name: "Contact", id: "/contact" },
        { name: "Checkout", id: "/checkout" },
        { name: "Confirmation", id: "/payment-confirmation" }
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
        { imageSrc: "http://img.b2bpic.net/free-photo/top-view-laptop-table-glowing-screen-dark_169016-53642.jpg", imageAlt: "Smart Digital Store Hero" }
      ]}
      rightCarouselItems={[
        { imageSrc: "http://img.b2bpic.net/free-photo/cool-background-blank-wallpaper-place-your-concept_1194-641481.jpg", imageAlt: "Smart Digital Store Hero" },
        { imageSrc: "http://img.b2bpic.net/free-psd/digital-business-marketing-banner-template_23-2148644269.jpg", imageAlt: "Smart Digital Store Hero" },
        { imageSrc: "http://img.b2bpic.net/free-photo/smart-attractive-smiling-asian-female-business-owner-entrepreneur-hand-hold-coffee-cup-portrait-shot-looking-camera-with-confidentwoman-sitting-table-home-studio_609648-2611.jpg", imageAlt: "Smart Digital Store Hero" },
        { imageSrc: "http://img.b2bpic.net/free-psd/marketing-strategy-banner-template_23-2148995530.jpg", imageAlt: "Smart Digital Store Hero" },
        { imageSrc: "http://img.b2bpic.net/free-photo/computer-dark-room-with-graphs-screen_169016-55085.jpg", imageAlt: "Smart Digital Store Hero" },
        { imageSrc: "http://img.b2bpic.net/free-photo/cozy-hobby-growing-indoor-plants-home_185193-108761.jpg", imageAlt: "Smart Digital Store Hero" }
      ]}
      buttons={[{ text: "Get the Guide", href: "/products" }]}
    />
  </div>


  <div id="metric" data-section="metric">
      <MetricCardSeven
      title="Performance Metrics"
      description="We deliver measurable results across all our training programs."
      metrics={[
        { id: "m1", title: "Target", value: "50+", items: [] },
        { id: "m2", title: "Growth", value: "98%", items: [] }
      ]}
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
    />
  </div>

  

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        { title: "Company", items: [{ label: "About", href: "/about" }, { label: "Contact", href: "/contact" }, { label: "Products", href: "/products" }, { label: "Checkout", href: "/checkout" }] },
        { title: "Resources", items: [{ label: "All Guides", href: "/" }, { label: "Payment Confirmation", href: "/payment-confirmation" }, { label: "Privacy", href: "#" }] }
      ]}
      logoText="Smart Digital Store"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}