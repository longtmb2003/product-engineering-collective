import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* The floating Next badge is dev-only, but clients shouldn't see it in a
     screen share either. */
  devIndicators: false,

  images: {
    /* Implementation Specification §8.4: AVIF with WebP fallback. Next serves
       the first format the client accepts, so order matters. */
    formats: ["image/avif", "image/webp"],
    /* Widths the layout actually requests. Portraits render at 256/320/384
       and plates at up to 1152, each at 1x and 2x. Narrowing the default set
       avoids generating variants nothing will ever ask for. */
    deviceSizes: [640, 768, 992, 1152, 1536, 2304],
    imageSizes: [256, 320, 384, 512, 768],
  },
};

export default nextConfig;
