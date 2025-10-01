import type { NextConfig } from "next";
import { withContentCollections } from "@content-collections/next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["danideme-com.vercel.app", "i.ibb.co"],
  },
};

// withContentCollections must be the outermost plugin
export default withContentCollections(nextConfig);
