# 📊 carexpress — Suivi

> Mis à jour : **2026-04-21**

| | |
|---|---|
| **Stack** | Vanilla JS multi-fichiers (~158KB bundle) |
| **Statut** | 🟠 Dev actif |
| **Type** | App VTC / mobilité (chauffeur + passager) |

---

## ✅ Fait

- Logos chauffeur + passager unifiés
- Affichage durée trajet côté chauffeur
- Politique d'annulation
- Suspension auto si documents chauffeur expirés
- Confirmations de réservation

## 🔄 En cours

- Cycle de vie de la carte (init / refresh / cleanup)
- Sélection moyen de paiement
- Système de notifications

## 📋 À faire

1. Créer `CAHIER-CHARGES.md` (formaliser le produit)
2. Migration TypeScript + Vite (recette chrome-messenger)
3. Firebase : Auth (chauffeurs + passagers), Firestore (courses), Storage (docs chauffeur), FCM (push)
4. Intégration Stripe ou solution paiement mobile money (Cameroun)
5. Tests E2E flow réservation complet
6. Audit accessibilité
7. Audit performance (bundle 158KB → réduction)
8. Build APK Capacitor (2 apps : passager + chauffeur)
9. Soumission Play Store
