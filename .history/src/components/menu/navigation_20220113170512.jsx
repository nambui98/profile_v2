import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./menuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = () => (
  <motion.ul className="" variants={variants}>
    {itemIds.map((item, index) => (
      <MenuItem i={index} key={index} item={item} />
    ))}
  </motion.ul>
);

const itemIds = [
  {
    path: "/",
    name: "Home"
  },
  {
    path: "/",
    name: "About"
  },
  {
    path: "/",
    name: "Portfolio"
  },
  {
    path: "/",
    name: "Blog"
  },
  {
    path: "/",
    name: "Contact"
  },
];
