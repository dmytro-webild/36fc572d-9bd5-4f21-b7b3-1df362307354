"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import FooterBase from '@/components/sections/footer/FooterBase';
import ContactForm from '@/components/form/ContactForm';
import { CreditCard } from 'lucide-react';

export default function CheckoutPage() {
  const handleSubmit = (email: string) => {
    console.log("Checkout form submitted with email:", email);
    // In a real application, you would process the order and payment here.
    alert("Order placed successfully! (Placeholder for actual processing)");
  };

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
              { name: "Cart", id: "/cart" },
              { name: "Checkout", id: "/checkout" },
              { name: "About", id: "/about" },
              { name: "Contact", id: "/contact" }
            ]}
            brandName="Smart Digital Store"
          />
        </div>

        <div id="checkout-section" data-section="checkout-section" className="relative z-10 py-16 md:py-24 lg:py-32 flex flex-col items-center justify-center text-center">
          <div className="max-w-4xl px-4 w-full">
            <CreditCard className="w-16 h-16 mx-auto mb-6 text-primary-cta" />
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground mb-4">Complete Your Order</h1>
            <p className="text-lg text-foreground-lighter mb-8">Fill out your details and payment information to finalize your purchase.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {/* Placeholder for Order Summary */}
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-foreground mb-4">Order Summary</h2>
                <ul className="space-y-2 text-foreground-lighter">
                  <li>Product 1: $X.XX</li>
                  <li>Product 2: $Y.YY</li>
                  <li className="font-semibold text-foreground border-t border-background-accent pt-2 mt-2">Total: $Z.ZZ</li>
                </ul>
              </div>

              {/* ContactForm for billing/shipping details and validation */}
              <ContactForm
                title="Shipping & Payment Details"
                description="Please provide your shipping and billing information."
                tag="Secure Checkout"
                useInvertedBackground={false}
                inputPlaceholder="Enter your email for order updates"
                buttonText="Place Order"
                termsText="By placing your order, you agree to our Terms and Conditions."
                onSubmit={handleSubmit}
                centered={false}
              />
            </div>
          </div>
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