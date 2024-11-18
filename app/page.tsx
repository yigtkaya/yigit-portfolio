"use client";

import { Preloader } from "./animations/preloader/preloader";
import useBlobity from "blobity/lib/react/useBlobity";
import { initialBlobityConfig } from "./utils/blobity-config";
import { useEffect } from "react";
import { Hero } from "./hero-section/Hero";

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
      <main className="flex flex-col items-center justify-center">
        <Hero />
      </main>
    </>
  );
}
