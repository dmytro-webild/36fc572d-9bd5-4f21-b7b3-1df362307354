"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterBase from '@/components/sections/footer/FooterBase';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardFour from '@/components/sections/product/ProductCardFour';

const mockProducts = [
  {
    id: "product-1",    name: "Digital Marketing Ebook",    price: "$29.99",    variant: "PDF Download",    imageSrc: "http://img.b2bpic.net/free-photo/book-reading-digital-tablet_101266-1748.jpg?w=800&h=600",    imageAlt: "Digital Marketing Ebook",    description: "A comprehensive guide to mastering digital marketing strategies for small businesses.",    details: [
      "200+ pages of expert content",      "Actionable strategies and templates",      "Includes bonus case studies",      "Instant download after purchase"
    ],
    reviews: [
      {
        id: "review-1",        testimonial: "This ebook transformed my business! Highly recommended for anyone serious about growth.",        rating: 5,
        author: "Jane Doe",        avatars: [{ src: "https://randomuser.me/api/portraits/women/1.jpg", alt: "Jane Doe" }]
      },
      {
        id: "review-2",        testimonial: "Very insightful and practical tips. Easy to understand and implement.",        rating: 4,
        author: "John Smith",        avatars: [{ src: "https://randomuser.me/api/portraits/men/2.jpg", alt: "John Smith" }]
      }
    ]
  },
  {
    id: "product-2",    name: "SEO Masterclass Video Course",    price: "$149.00",    variant: "Online Access",    imageSrc: "http://img.b2bpic.net/free-photo/beautiful-attractive-smiling-asian-business-woman-holding-digital-tablet-standing-wooden-table_609648-1857.jpg?w=800&h=600",    imageAlt: "SEO Masterclass Video Course",    description: "An in-depth video course covering all aspects of Search Engine Optimization.",    details: [
      "10+ hours of video lessons",      "Practical exercises and quizzes",      "Lifetime access to updates",      "Certificate of completion"
    ],
    reviews: [
      {
        id: "review-3",        testimonial: "The best SEO course I've ever taken. Clear explanations and real-world examples.",        rating: 5,
        author: "Emily White",        avatars: [{ src: "https://randomuser.me/api/portraits/women/3.jpg", alt: "Emily White" }]
      }
    ]
  },
  {
    id: "product-3",    name: "Social Media Strategy Template",    price: "$19.99",    variant: "Digital Template",    imageSrc: "http://img.b2bpic.net/free-photo/business-woman-working-project_185193-45524.jpg?w=800&h=600",    imageAlt: "Social Media Strategy Template",    description: "A ready-to-use template to plan and execute your social media strategy.",    details: [
      "Customizable template for all platforms",      "Content calendar included",      "Performance tracking dashboard",      "Instant download, easy to edit"
    ],
    reviews: [
      {
        id: "review-4",        testimonial: "Incredibly useful! Saved me so much time planning my social media content.",        rating: 4,
        author: "David Green",        avatars: [{ src: "https://randomuser.me/api/portraits/men/4.jpg", alt: "David Green" }]
      }
    ]
  }
];

export default function ProductListingPage() {
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

        <div id="products-listing" data-section="products-listing">
          <ProductCardFour
            title="Our Products"
            description="Explore our range of digital guides and courses designed for entrepreneurs."
            products={mockProducts.map((product) => ({
              id: product.id,
              name: product.name,
              price: product.price,
              variant: product.variant,
              imageSrc: product.imageSrc,
              imageAlt: product.imageAlt,
              onProductClick: () => window.location.href = `/products/${product.id}`
            }))}
            gridVariant="three-columns-all-equal-width"
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
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