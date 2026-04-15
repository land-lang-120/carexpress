/* CarExpress — Config & Design Tokens */

const { useState, useEffect, useRef } = React;

// ─── DESIGN TOKENS ────────────────────────────────────────────────────────────
const C = {
  bg:        "#F5F6F8",
  card:      "#FFFFFF",
  border:    "#E8EAED",
  text:      "#111827",
  textSec:   "#6B7280",
  textLight: "#9CA3AF",
  green:     "#25D366",
  greenBg:   "#F0FBF4",
  greenDark: "#1AAD54",
  dark:      "#1F2937",
  danger:    "#EF4444",
  dangerBg:  "#FEF2F2",
  shadow:    "0 1px 4px rgba(0,0,0,0.07)",
  shadowMd:  "0 4px 20px rgba(0,0,0,0.11)",
  shadowLg:  "0 8px 32px rgba(0,0,0,0.15)",
};

const PAYMENT_OPTS = [
  { value:"all",    label:"Tout accepté",       sub:"Carte · MTN MoMo · Orange Money · Espèces" },
  { value:"card",   label:"Carte bancaire",     sub:"Visa, Mastercard — paiement sécurisé" },
  { value:"momo",   label:"MTN Mobile Money",   sub:"Paiement mobile MTN uniquement" },
  { value:"orange", label:"Orange Money",       sub:"Paiement mobile Orange uniquement" },
  { value:"cash",   label:"Espèces uniquement", sub:"Paiement en main propre" },
];

const fmt  = n => (+n||0).toLocaleString("fr-FR");
const plab = v => PAYMENT_OPTS.find(p=>p.value===v)?.label || v;
const psub = v => PAYMENT_OPTS.find(p=>p.value===v)?.sub   || "";
