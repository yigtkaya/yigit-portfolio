"use client";

import { Preloader } from "./animations/preloader/preloader";
import useBlobity from "blobity/lib/react/useBlobity";
import { initialBlobityConfig } from "./utils/blobity-config";
import { useEffect } from "react";
import dynamic from "next/dynamic";


import Navbar from "./navbar/navbar";
import { Hero } from "./hero-section/hero";
const Work = dynamic(() => import("./work-section/work"), { ssr: false });
const About = dynamic(() => import("./about-section/about"), { ssr: false }); 
const Contact = dynamic(() => import("./contact-section/contact"), { ssr: false });
const Footer = dynamic(() => import("./footer-section/footer"), { ssr: false });

export default function Home() {
  const blobityInstance = useBlobity(initialBlobityConfig);

  useEffect(() => {
    if (blobityInstance.current) {
      // @ts-ignore - Expose blobity instance to the window object
      window.blobity = blobityInstance.current;
    }
  }, [blobityInstance]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <>
      <Preloader />
      <Navbar />
      <main className="flex flex-col items-center justify-center">
        <Hero />
        <Work />
        {/* <ReviewGrid /> */}
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
