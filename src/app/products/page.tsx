"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ProductCatalog from '@/components/ecommerce/productCatalog/ProductCatalog';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import FooterBase from '@/components/sections/footer/FooterBase';

export default function ProductsPage() {
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

        <div id="products-catalog" data-section="products-catalog">
          <ProductCatalog
            layout="page"
            products={[
              { id: "p1", name: "Identify Problems", price: "$29", rating: 5, imageSrc: "http://img.b2bpic.net/free-psd/digital-marketing-agency-corporate-facebook-cover-template-design_84443-24504.jpg", category: "Strategy" },
              { id: "p2", name: "Validate Idea", price: "$29", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/top-view-boss-s-day-arrangement-light-blue-background_23-2148664089.jpg", category: "Strategy" },
              { id: "p3", name: "Business Plan", price: "$29", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/contemporary-home-office-urban-apartment-decorated-with-wooden-furniture_482257-119606.jpg", category: "Planning" },
              { id: "p4", name: "Marketing Fundamentals", price: "$49", rating: 4, imageSrc: "http://img.b2bpic.net/free-photo/woman-holding-lightbulb-with-marketing-word_53876-136774.jpg", category: "Marketing" },
              { id: "p5", name: "Sales Mastery", price: "$59", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/cropped-shot-business-people-meeting_1098-13583.jpg", category: "Sales" },
              { id: "p6", name: "Financial Management", price: "$69", rating: 4, imageSrc: "http://img.b2bpic.net/free-photo/financial-analyst-working-modern-office_23-2149021509.jpg", category: "Finance" },
              { id: "p7", name: "Operations Optimization", price: "$39", rating: 4, imageSrc: "http://img.b2bpic.net/free-photo/working-desk-full-stuff_23-2149202151.jpg", category: "Operations" },
              { id: "p8", name: "Customer Service Excellence", price: "$35", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/businesswoman-working-marketing-analysis-project_23-2148729352.jpg", category: "Service" }
            ]}
            searchPlaceholder="Search guides..."
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBase
            columns={[
              {
                title: "Company",                items: [
                  { label: "About", href: "/about" },
                  { label: "Contact", href: "/contact" },
                  { label: "Products", href: "/products" }
                ]
              },
              {
                title: "Resources",                items: [
                  { label: "All Guides", href: "/" },
                  { label: "Privacy Policy", href: "#" }
                ]
              }
            ]}
            logoText="Smart Digital Store"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
