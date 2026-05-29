"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FooterBase from '@/components/sections/footer/FooterBase';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import { HelpCircle } from "lucide-react";

export default function FAQPage() {
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

        <div id="faq-section" data-section="faq-section">
          <FaqSplitMedia
            title="Frequently Asked Questions"
            description="Find quick answers to common questions about our products and services."
            tag="Support"
            tagIcon={HelpCircle}
            imageSrc="https://images.unsplash.com/photo-1593642531955-b62e17bdaa80?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            imageAlt="Person looking at FAQ"
            faqs={[
              { id: "1", title: "How do I purchase a guide?", content: "You can purchase guides directly from our Products page. Simply select the guide you want, add it to your cart, and proceed to checkout." },
              { id: "2", title: "What payment methods do you accept?", content: "We accept all major credit cards, PayPal, and other secure payment options. All transactions are processed securely." },
              { id: "3", title: "Can I get a refund if I'm not satisfied?", content: "We offer a 30-day money-back guarantee on all our guides. If you're not satisfied, please contact us for a full refund." },
              { id: "4", title: "Are the guides available instantly after purchase?", content: "Yes, once your purchase is complete, you'll receive an email with a download link to access your guide immediately." },
              { id: "5", title: "Do you offer custom business consulting?", content: "While our primary focus is on comprehensive PDF guides, we do offer limited one-on-one consulting packages. Please contact us for more details." }
            ]}
            faqsAnimation="blur-reveal"
            mediaAnimation="blur-reveal"
            animationType="smooth"
            textboxLayout="default"
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