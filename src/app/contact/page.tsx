"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FooterBase from '@/components/sections/footer/FooterBase';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';

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

  <div id="contact-section" data-section="contact-section">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      text="Ready to build your empire? Contact us for support."
      buttons={[
        {
          text: "Contact Support",
          href: "mailto:hello@smartdigitalstore.com",
        },
      ]}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      sideTitle="Frequently Asked Questions"
      sideDescription="Everything you need to know about our business education platform."
      faqsAnimation="blur-reveal"
      faqs={[
        {
          id: "q1",
          title: "Are these guides beginner-friendly?",
          content: "Yes, our guides are designed specifically for new entrepreneurs starting from zero.",
        },
        {
          id: "q2",
          title: "Do you offer refunds?",
          content: "We offer a 7-day money-back guarantee if you don't find the content actionable.",
        },
      ]}
    />
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
