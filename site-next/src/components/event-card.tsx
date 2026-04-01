"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { EventEntry } from "@/lib/content";

type EventCardProps = {
  item: EventEntry;
};

export function EventCard({ item }: EventCardProps) {
  return (
    <motion.article
      className="event-card"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <div className={`event-media event-media-count-${item.images.length || 1}`}>
        {item.images.length > 0 ? item.images.map((image) => (
          <div key={`${item.slug}-${image.src}`} className={`event-image-wrap event-image-${image.orientation}`}>
            <Image src={image.src} alt={image.alt} fill sizes="(max-width: 920px) 100vw, 33vw" style={{ objectFit: "cover" }} />
          </div>
        )) : (
          <div className="event-image-wrap event-image-landscape">
            <Image src={item.previewImage} alt={item.title} fill sizes="(max-width: 920px) 100vw, 33vw" style={{ objectFit: "cover" }} />
          </div>
        )}
        <span className="event-year-chip">{item.year}</span>
      </div>
      <div className="event-meta">
        <span className="pill">{item.event}</span>
        <h3>{item.title}</h3>
        <p>{item.takeaway}</p>
        <p className="event-links">
          <a href={item.link} target="_blank" rel="noreferrer">
            Open event page
          </a>
        </p>
      </div>
    </motion.article>
  );
}
