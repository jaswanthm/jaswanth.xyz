"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { WorkEntry } from "@/lib/content";

type WorkCardProps = {
  item: WorkEntry;
};

export function WorkCard({ item }: WorkCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.article
      className="work-card"
      layout
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <button onClick={() => setIsOpen((current) => !current)} aria-expanded={isOpen}>
        {item.images.length > 0 ? (
          <div className={`work-media work-media-count-${item.images.length}`}>
            {item.images.map((image) => (
              <div key={`${item.slug}-${image.src}`} className={`work-media-frame work-media-${image.orientation}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 920px) 100vw, (max-width: 1200px) 60vw, 34vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        ) : null}
        <span className="pill">{item.category}</span>
        <h3>{item.title}</h3>
        <p className="meta">{item.company} · {item.period}</p>
        <p>{item.summary}</p>
      </button>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="work-detail"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28 }}
          >
            <p>{item.details}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.article>
  );
}
