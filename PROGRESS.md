# 📊 carexpress — Suivi

> Voir aussi : [CAHIER-CHARGES.md](CAHIER-CHARGES.md) (spec complète)
> Mis à jour : **2026-04-23**

| | |
|---|---|
| **Stack** | React 18 (UMD CDN) + Babel standalone, build maison `build.js` (~158KB) |
| **Statut** | 🟠 Dev actif — UI fonctionnelle avec données mockées |
| **Type** | Marketplace de covoiturage longue distance + courses VTC (Cameroun) |
| **Pitch** | Trouver un trajet partagé Yaoundé↔Douala, ou publier son trajet en tant que chauffeur, avec map + chat + paiement multi-canal |
| **Rôles** | Passager (cherche un trajet) + Chauffeur (publie un trajet) |

---

## ✅ Fait

### UI & navigation
- Onboarding (1ère fois)
- 4 onglets : Accueil / Historique / Favoris / Profil
- Header avec logo + cloche notifications (badge danger)

### Écrans
- **HomeScreen** — choix rôle (passager/chauffeur)
- **PassengerScreen** — formulaire recherche (départ, arrivée, date, paiement accepté)
- **ResultsScreen** — liste trajets disponibles + bouton réserver
- **DriverScreen** — formulaire publication trajet (from, to, date, durée, prix, point pickup)
- **HistoryScreen** — trajets passés + actuel + bouton annuler
- **FavoritesScreen** — itinéraires favoris
- **ProfileScreen** — profil + docs chauffeur (suspension auto si expirés)
- **NotificationsScreen** — centre de notifs
- **CancelTripScreen** — annulation avec dialog politique
- **MapOverlay** — visualisation trajet actif
- **FloatingChat** — chat passager↔chauffeur dans une fenêtre 24h post-arrivée

### Logique métier
- Politique d'annulation : dialog d'acceptation par rôle, mémorisé en `localStorage` (`ce_policy_passenger`/`ce_policy_driver`)
- Sanctions si annulation tardive
- Simulation arrivée auto (demo : 2 min ; prod : durée réelle du trajet)
- Suspension chauffeur auto si docs expirés
- Fenêtre de chat 24h après arrivée

### Paiement (UI seule)
- 5 options : Tout accepté / Carte / MTN MoMo / Orange Money / Espèces
- Pas encore d'intégration paiement réel

### Notifications
- UI centre de notifs + badge cloche
- Pas encore de FCM (Firebase Cloud Messaging)

### Fixes récents (session 23 avril)
- Loading screen : poll innerHTML 200ms remplacé par event `ce-ready` (idem fix Byer)
- Filet de sécurité 8s pour fade par défaut

## 🔄 En cours

- Cycle de vie de la carte (init / refresh / cleanup) — fuites mémoire potentielles sur ouvertures répétées
- Sélection moyen de paiement (UI complète, pas de back-end)
- Système de notifications (UI complète, pas de FCM)

## 📋 À faire

### Court terme
1. ~~Créer `CAHIER-CHARGES.md`~~ ← fait dans cette session
2. Audit du cycle de vie `MapOverlay` (cleanup au unmount, abort des fetches GPS)
3. Extraire la string CSS injectée dans `app.js` vers `css/global.css`

### Moyen terme
4. **Migration TypeScript + Vite** (recette chrome-messenger : split src/, types Zod, vite.config)
5. Firebase :
   - Auth téléphone OTP (passagers + chauffeurs distincts via custom claims)
   - Firestore : `trips`, `bookings`, `users`, `notifications`
   - Storage : permis + carte grise + photos chauffeurs (vérification manuelle ou auto)
   - FCM : push pour réservation, annulation, arrivée
6. Cartographie réelle : Mapbox ou MapLibre (open-source, moins cher que Google)
7. Géolocalisation passager pour suggestion auto du point de pickup
8. Intégration paiement : MTN MoMo + Orange Money (idem Byer)

### Long terme
9. Tests E2E flow complet (passager : recherche → réservation → arrivée ; chauffeur : publication → conducte → fin)
10. Audit accessibilité (a11y : focus management, contrastes, screen reader)
11. Audit performance bundle (158KB → cible 60KB après Vite + tree-shake)
12. Build APK Capacitor — 2 builds : `carexpress-passenger.apk` + `carexpress-driver.apk` (ou 1 app avec choix rôle au launch)
13. Soumission Play Store
14. Internationalisation FR/EN
15. Tarification dynamique selon offre/demande (V2)
