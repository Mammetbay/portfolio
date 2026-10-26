"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export interface MenuItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface FloatingMenuProps {
  items?: MenuItem[];
}

function MenuButton({
  label,
  onClick,
  isOpen,
  index,
}: {
  label: string;
  onClick?: () => void;
  isOpen: boolean;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const animatingRef = useRef(false);
  const pendingLeaveRef = useRef(false);
  const chars = label.split("");
  const lockDuration = 30 * chars.length + 300;

  const handleEnter = useCallback(() => {
    pendingLeaveRef.current = false;
    if (hovered) return;
    setHovered(true);
    animatingRef.current = true;
    setTimeout(() => {
      animatingRef.current = false;
      if (pendingLeaveRef.current) {
        pendingLeaveRef.current = false;
        setHovered(false);
      }
    }, lockDuration);
  }, [hovered, lockDuration]);

  const handleLeave = useCallback(() => {
    if (animatingRef.current) {
      pendingLeaveRef.current = true;
    } else {
      setHovered(false);
    }
  }, []);

  return (
    <motion.button
      onClick={onClick}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="text-[#E4FD97] hover:text-[#FF2A5F] transition-colors text-[20px] uppercase font-bold tracking-wider leading-none overflow-hidden cursor-pointer"
      style={{
        height: "1.1em",
      }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      transition={{
        duration: 0.4,
        delay: isOpen ? 0.35 + 0.06 * index : 0,
        ease,
      }}
    >
      <div className="flex justify-center">
        {chars.map((char, i) => (
          <span
            key={i}
            className="inline-block overflow-hidden"
            style={{ height: "1.1em" }}
          >
            <span
              className="flex flex-col"
              style={{
                transitionProperty: "transform",
                transitionDuration: hovered ? "600ms" : "0ms",
                transitionDelay: hovered ? `${25 * i}ms` : "0ms",
                transform: hovered ? "translateY(-50%)" : "translateY(0%)",
                transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              <span
                className="block"
                style={{ height: "1.1em", lineHeight: "1.1em" }}
              >
                {char}
              </span>
              <span
                className="block text-[#FF2A5F]"
                style={{ height: "1.1em", lineHeight: "1.1em" }}
                aria-hidden
              >
                {char}
              </span>
            </span>
          </span>
        ))}
      </div>
    </motion.button>
  );
}

export default function FloatingMenu({ items }: FloatingMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const defaultItems: MenuItem[] = [
    { label: "About", href: "#about-me" },
    { label: "Works", href: "#projects" },
    { label: "Stack", href: "#stack" },
    { label: "Journey", href: "#experience" },
    { label: "Terminal", href: "#terminal" },
    { label: "Contact", href: "#contact" },
  ];

  const menuItems = items ?? defaultItems;

  const handleItemClick = (item: MenuItem) => {
    if (item.onClick) {
      item.onClick();
    } else if (item.href) {
      const el = document.querySelector(item.href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen]);

  return (
    <motion.div
      ref={containerRef}
      className="fixed bottom-6 left-1/2 z-[100] md:hidden select-none"
      style={{ x: "-50%", pointerEvents: "auto" }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease }}
    >
      <motion.div
        className="relative overflow-hidden flex flex-col shadow-2xl shadow-black/80"
        onClick={() => {
          if (!isOpen) setIsOpen(true);
        }}
        style={{
          cursor: isOpen ? "default" : "pointer",
        }}
        animate={{
          width: isOpen ? 290 : 154,
          height: isOpen ? 320 : 48,
          borderRadius: isOpen ? 32 : 9999,
          scale: 1,
        }}
        whileHover={isOpen ? undefined : { scale: 1.04 }}
        transition={{
          duration: 0.6,
          ease,
          height: { duration: isOpen ? 0.6 : 0.2 },
          scale: { duration: 0.25, ease },
        }}
      >
        {/* Citrus background layer (#E4FD97) */}
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundColor: isOpen ? "#E4FD97" : "#E4FD97",
            borderColor: isOpen ? "#E4FD97" : "#c4dd70",
          }}
          transition={{ duration: isOpen ? 0.1 : 0.3, ease }}
          style={{
            borderWidth: 1,
            borderStyle: "solid",
            borderRadius: "inherit",
          }}
        />

        {/* Deep Shadow expanding circle (#141414) */}
        <motion.div
          className="absolute left-1/2 bg-[#141414] border border-[#E4FD97]/20"
          style={{
            width: "220%",
            height: "220%",
            borderRadius: "50%",
            x: "-50%",
          }}
          animate={{ bottom: isOpen ? "-20%" : "-220%" }}
          transition={{
            duration: 0.65,
            ease,
            delay: isOpen ? 0.08 : 0,
          }}
        />

        {/* Menu items */}
        <div
          className="relative z-10 flex flex-col gap-4 items-center justify-center pt-3"
          style={{
            pointerEvents: isOpen ? "auto" : "none",
            opacity: isOpen ? 1 : 0,
            flex: isOpen ? 1 : 0,
            overflow: "hidden",
          }}
        >
          {menuItems.map((item, idx) => (
            <MenuButton
              key={item.label}
              label={item.label}
              onClick={() => handleItemClick(item)}
              isOpen={isOpen}
              index={idx}
            />
          ))}
        </div>

        {/* Bottom bar: Menu + hamburger */}
        <motion.div
          className="relative z-10 flex items-center justify-between w-full shrink-0 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          animate={{
            paddingLeft: isOpen ? 24 : 20,
            paddingRight: isOpen ? 24 : 20,
            paddingBottom: isOpen ? 16 : 0,
            height: 48,
          }}
          transition={{ duration: 0.6, ease }}
          style={{ alignItems: "center" }}
        >
          <motion.span
            className="text-[13px] tracking-wider uppercase font-extrabold leading-none"
            animate={{ color: isOpen ? "#E4FD97" : "#141414" }}
            transition={{ duration: 0.25, ease }}
          >
            {isOpen ? "Close" : "Menu"}
          </motion.span>

          <div className="relative w-[24px] h-[24px] flex items-center justify-center">
            <motion.span
              className="absolute block w-[18px] h-[2px] rounded-full"
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 0 : -3,
                backgroundColor: isOpen ? "#E4FD97" : "#141414",
              }}
              transition={{ duration: 0.3, ease }}
            />
            <motion.span
              className="absolute block w-[18px] h-[2px] rounded-full"
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? 0 : 3,
                backgroundColor: isOpen ? "#E4FD97" : "#141414",
              }}
              transition={{ duration: 0.3, ease }}
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
