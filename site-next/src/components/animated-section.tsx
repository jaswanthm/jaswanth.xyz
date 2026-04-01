"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type AnimatedSectionProps = {
  id: string;
  title: string;
  subtitle: string;
  children: ReactNode;
};

export function AnimatedSection({ id, title, subtitle, children }: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      className="section"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: [0.2, 0.7, 0.2, 1] }}
    >
      <header className="section-head">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </header>
      {children}
    </motion.section>
  );
}
