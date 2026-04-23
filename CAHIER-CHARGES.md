# 📖 CarExpress — Cahier de charges

> Marketplace de covoiturage longue distance + courses VTC au Cameroun
> Version : 1.0 — 2026-04-23
> Voir aussi : [PROGRESS.md](PROGRESS.md) (suivi du dev)

---

## 1. Vision

Permettre à n'importe quel **passager** au Cameroun de trouver un trajet longue distance (Yaoundé↔Douala, Yaoundé↔Bafoussam, etc.) en quelques taps, et à n'importe quel **chauffeur** de monétiser son trajet en publiant les places disponibles.

Inspiration : BlaBlaCar pour le modèle covoiturage, Uber pour la fluidité du booking et le tracking en temps réel, Yango pour le contexte africain (paiement mobile, multi-langues).

## 2. Personas & rôles

### 2.1 Passager
- Cherche un trajet longue distance entre deux villes
- Filtre par méthode de paiement acceptée
- Réserve auprès d'un chauffeur (un siège)
- Suit le trajet en temps réel via map
- Chatte avec le chauffeur (avant et 24h après arrivée)
- Note le chauffeur après le trajet

### 2.2 Chauffeur
- Publie un trajet (départ, arrivée, date/heure, durée, prix par siège, point de pickup)
- Reçoit les demandes de réservation
- Valide ou refuse les passagers
- Conduit, marque l'arrivée, encaisse
- Maintient ses documents à jour (permis, carte grise, assurance) — suspension auto sinon
- Note les passagers

### 2.3 Cas non-MVP (V2)
- Modérateur (vérification documents chauffeur, gestion litiges)
- Affréteur (loue plusieurs véhicules avec chauffeurs salariés)
- Convoyeur véhicule (livraison de voiture vers une autre ville)

## 3. Périmètre fonctionnel MVP

### 3.1 Flux passager
1. Onboarding (1ère ouverture)
2. Home : choix rôle ("Je voyage" / "Je conduis")
3. Recherche : départ + arrivée + date + filtre paiement
4. Liste résultats triée par heure de départ
5. Tap → détails trajet → bouton Réserver
6. Confirmation + ajout à l'historique
7. Chat ouvert avec chauffeur
8. Si trajet en cours : map flottante temps réel
9. Arrivée détectée → note du chauffeur

### 3.2 Flux chauffeur
1. Home → "Je conduis"
2. Formulaire publication : from/to/date/heure/durée/prix/pickup
3. Acceptation politique d'annulation (1ère fois)
4. Trajet publié → visible côté passagers
5. Réception réservations (UI passive pour MVP, push en V1.1)
6. Pendant le trajet : map active + chat
7. Marquage arrivée → encaissement
8. Note des passagers

### 3.3 Politique d'annulation
- Dialog de policy à valider 1 fois par rôle (`localStorage.ce_policy_passenger` / `ce_policy_driver`)
- Annulation > 24h avant : gratuit
- 6-24h : 30% de pénalité
- < 6h : 50% pénalité
- Côté chauffeur : compensation passagers en cours si annulation < 6h

### 3.4 Documents chauffeur (vérification)
- Permis de conduire (recto-verso)
- Carte grise
- Attestation d'assurance
- Photo véhicule (avant + intérieur)
- Suspension auto si un document est expiré → bannière dans Profile + blocage publication trajet

### 3.5 Paiement
- 5 méthodes UI :
  - Tout accepté (Carte + MTN MoMo + Orange Money + Espèces)
  - Carte bancaire (Visa, Mastercard)
  - MTN Mobile Money
  - Orange Money
  - Espèces uniquement
- Côté passager : choix au moment du booking
- Côté chauffeur : choix lors de la publication du trajet (méthodes acceptées)

### 3.6 Notifications
- Cloche dans header avec badge danger
- Centre de notifs dédié (NotificationsScreen)
- Types : nouvelle réservation, annulation, arrivée chauffeur, message reçu, document expirant

### 3.7 Map
- Overlay plein écran déclenché par `FloatingMapButton`
- Affichage trajet en cours uniquement (avant arrivée)
- Position GPS chauffeur en temps réel (V1)
- Pour MVP : affichage statique de la route from→to

## 4. Architecture technique

### 4.1 Stack actuelle (en cours de refactor)
- **Front** : React 18 (UMD CDN) + Babel standalone
- **Build** : `build.js` Node qui concatène `js/*.js` en `bundle.js` (~158KB)
- **Style** : `css/global.css` + string `S` injectée dans config/components
- **PWA** : `manifest.json` + `sw.js`
- **Données** : mock dans `js/data.js` (DRIVERS, TRIPS, etc.)

### 4.2 Stack cible
- **Front** : React 18 + TypeScript + Vite (recette chrome-messenger)
- **Backend** : Firebase
  - Auth : OTP téléphone, custom claims `{ role: 'passenger' | 'driver' | 'both' }`
  - Firestore : `trips`, `bookings`, `users`, `documents`, `notifications`, `chats/{tripId}/messages`
  - Storage : photos docs chauffeur + véhicule
  - Functions : webhook paiement, expiry checker docs, push notif
- **Map** : MapLibre GL (open-source, alternative gratuite à Mapbox)
- **Géoloc** : Geolocation API + reverse geocoding via Nominatim (OSM, gratuit)
- **Paiement** : MTN MoMo Open API + Orange Money + Stripe pour cartes
- **Mobile** : Capacitor — 2 builds (passager.apk, driver.apk) ou 1 app

### 4.3 Modèle de données (Firestore prévu)

```
users/{uid}
  fullName, phoneE164, photo, createdAt
  role: 'passenger' | 'driver' | 'both'
  ratingPassenger: number (si role passenger)
  ratingDriver: number (si role driver)
  paymentDefault: 'card' | 'momo' | 'orange' | 'cash' | 'all'

driverDocs/{uid}
  permis: { fileUrl, expiresAt, status: 'valid'|'expired'|'pending' }
  carteGrise: { ... }
  assurance: { ... }
  vehiclePhotos: string[]
  approved: boolean
  suspended: boolean
  suspendedReason: string | null

trips/{id}
  driverId: string
  from: { city, address?, geo? }
  to: { city, address?, geo? }
  departAtMs: number
  durationMin: number
  pricePerSeat: number (FCFA)
  totalSeats: number
  remainingSeats: number
  pickupPoint: string
  paymentsAccepted: ('card'|'momo'|'orange'|'cash')[]
  status: 'published'|'in-progress'|'completed'|'cancelled'
  createdAt

bookings/{id}
  tripId, passengerId, seatsCount
  totalAmount: number
  paymentMethod: 'card'|'momo'|'orange'|'cash'
  paymentStatus: 'pending'|'paid'|'failed'|'refunded'
  status: 'reserved'|'confirmed'|'completed'|'cancelled'
  cancellationPenalty: number | 0
  createdAt

chats/{tripId}/messages/{msgId}
  senderId, body, createdAt, read

notifications/{uid}/items/{notifId}
  type: 'booking-new'|'booking-cancel'|'driver-arrived'|'message'|'doc-expiring'|'doc-expired'
  payload: object
  read: boolean
  createdAt
```

### 4.4 Sécurité
- Auth obligatoire pour réserver ou publier
- Rules Firestore :
  - `trips` : lecture publique des trips `published`, écriture restreinte au driver
  - `bookings` : lecture par passenger ou driver concerné uniquement
  - `driverDocs` : lecture par owner + admins, écriture par owner + Functions
- Vérification documents : workflow d'admin (V2 : auto-OCR via Cloud Vision)
- Anti-fraude : un téléphone = un compte (un même OTP ne peut pas créer 2 users)

## 5. Charte UI

### 5.1 Couleurs
- BG : `#F5F6F8`
- Card : `#FFFFFF`
- Border : `#E8EAED`
- Text : `#111827`
- TextSec : `#6B7280`
- TextLight : `#9CA3AF`
- **Green (primary)** : `#25D366` (WhatsApp green, familier au public africain)
- GreenBg : `#F0FBF4`
- GreenDark : `#1AAD54`
- Dark : `#1F2937`
- Danger : `#EF4444`

### 5.2 Typographie
- Famille : Plus Jakarta Sans (Google Fonts)

### 5.3 Composants
- Logo : voiture stylisée + signal vert
- Largeur app : 430px max (mobile-first)
- Bottom nav 4 onglets fixe
- Sticky header avec logo + cloche
- Toast notifs (auto-dismiss)
- Overlay sheet pour map et chat
- Boutons CTA en vert (#25D366)

## 6. Roadmap MVP → Prod

### MVP (en cours)
- ✅ UI complète avec données mockées (chauffeur + passager)
- ✅ Politique d'annulation
- ✅ Suspension auto chauffeur si docs expirés
- 🔄 Cycle de vie map (cleanup)
- 📋 Migration TS + Vite
- 📋 Auth Firebase OTP avec custom claims
- 📋 Firestore + données réelles
- 📋 Map réelle (MapLibre)

### V1
- Paiement MTN MoMo + Orange Money sandbox
- Push notifs FCM
- Géolocalisation passager (suggestion pickup)
- Chat temps réel (Firestore subscriptions)

### Beta
- Build APK Capacitor (2 builds passager/chauffeur)
- Beta testers à Yaoundé (10 chauffeurs + 50 passagers)
- Bug bash + UX feedback

### Prod
- Soumission Play Store
- Site marketing
- Support client (WhatsApp Business)
- Analytics
- Internationalisation FR/EN
- Tarification dynamique (V2)

## 7. Risques & dépendances

### Risques techniques
- **Bundle 158KB** = poids React+Babel CDN. Migration Vite divise par ~3.
- **Pas de TypeScript** = source de bugs au refacto. Migration progressive.
- **Map dans overlay** = risque fuite mémoire si pas de cleanup au unmount.

### Risques métier
- **Confiance chauffeur**↔passager indispensable : système de notes et vérification docs au cœur du produit
- **Concurrence Yango/Bolt** sur les courses urbaines — focus sur **longue distance** (créneau moins occupé)
- **Adoption MoMo/OM** dépend de la fluidité d'intégration

### Dépendances externes
- Firebase (Auth, Firestore, Storage, Functions, FCM)
- MapLibre GL + Nominatim (OSM)
- MTN MoMo + Orange Money APIs
- Stripe (cartes bancaires)
- Capacitor

## 8. Conventions code

- React fonctionnel + hooks
- État global dans `App` puis remontée par props (post-migration : Zustand)
- Constants UPPERCASE (`PAYMENT_OPTS`, `DRIVERS`, `TRIPS`)
- Helpers : `fmt(n)` → "1 500", `plab(v)` → label paiement, `psub(v)` → sub-label
- Format heure : "HH:mm" (français)
- Format durée : "5h30"
- Mémorisation des choix users : `ce_*` keys en localStorage
