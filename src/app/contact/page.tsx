"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterBase from '@/components/sections/footer/FooterBase';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import { Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="small"
        sizing="mediumSizeLargeTitles"
        background="aurora"
        cardStyle="glass-depth"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="layered"
        headingFontWeight="bold"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarLayoutFloatingOverlay
            navItems={[
              { name: "Home", id: "/" },
              { name: "Products", id: "/products" },
              { name: "About", id: "/about" },
              { name: "FAQ", id: "/faq" },
              { name: "Contact", id: "/contact" }
            ]}
            brandName="Smart Digital Store"
          />
        </div>

        <div id="contact-section" data-section="contact-section">
          <ContactCTA
            tag="Get in Touch"
            tagIcon={Mail}
            title="We're Here to Help"
            description="Have questions, feedback, or need support? Reach out to us, and we'll get back to you as soon as possible."
            buttons={[{ text: "Send a Message", href: "mailto:support@smartdigitalstore.com" }]}
            background={{ variant: "sparkles-gradient" }}
            tagAnimation="blur-reveal"
            buttonAnimation="blur-reveal"
            useInvertedBackground={false}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBase
            columns={[
              { title: "Company", items: [{ label: "About", href: "/about" }, { label: "Contact", href: "/contact" }, { label: "FAQ", href: "/faq" }, { label: "Products", href: "/products" }] },
              { title: "Resources", items: [{ label: "All Guides", href: "/" }, { label: "Privacy", href: "#" }] }
            ]}
            logoText="Smart Digital Store"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}