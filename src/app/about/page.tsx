"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterBase from '@/components/sections/footer/FooterBase';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import { Target } from "lucide-react";

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
        { name: "Products", id: "/products" },
        { name: "About", id: "/about" },
        { name: "Contact", id: "/contact" }
      ]}
      brandName="Smart Digital Store"
    />
  </div>

  <div id="about-section" data-section="about-section">
      <TestimonialAboutCard
      useInvertedBackground={true}
      tag="Our Mission"
      title="Empowering the next generation of entrepreneurs."
      description="Smart Digital Store provides direct, actionable guides for young business owners who demand results without the fluff."
      subdescription="We believe entrepreneurship is a skill that can be learned, not just a talent you're born with."
      icon={Target}
      imageSrc="http://img.b2bpic.net/free-photo/business-graphics-presentation-illustration_23-2151876374.jpg"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Our Impact in Numbers"
      description="We don't just teach; we deliver measurable results to entrepreneurs around the globe."
      imageSrc="http://img.b2bpic.net/free-photo/pie-chart-presentation-infographic-business-marketing-financial-analysis-concept-background-3d-illustration_56104-1696.jpg"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
      metrics={[
        {
          value: "50+",          title: "Active Business Guides"},
        {
          value: "10k+",          title: "Community Members"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Company",          items: [
            {
              label: "About",              href: "/about"},
            {
              label: "Contact",              href: "/contact"},
            {
              label: "Products",              href: "/products"}
          ],
        },
        {
          title: "Resources",          items: [
            {
              label: "All Guides",              href: "/"},
            {
              label: "Privacy Policy",              href: "#"},
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
