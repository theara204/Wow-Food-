# WOWFOOD Dashboard

Responsive food-delivery dashboard inspired by the supplied FoodGo reference.

## Run
Open this folder in VS Code and use the Live Server extension on `index.html`. PWA installation and service workers require localhost or HTTPS; do not use `file://`.

## Included
- Dashboard sidebar: Home, Menu, Favourites, Orders, Messages, Settings, About; mobile bottom navigation for Home, Menu, Saved, Orders and Messages
- Nearby restaurant cards and 15 photo-backed food and drink cards, including Khmer dishes
- Live search, category and restaurant-distance filters, price/rating sorting, favourites and cart totals; all menu items are 20% off
- Checkout form, profile form, local order history and a demo delivery chat
- Demo account creation and sign-in with unique email or phone identifier per browser, password verification and local sign-in state (not real authentication); cart, favourites, orders, messages, and profile are stored separately per account in that browser
- English and Khmer interface language toggle, saved in the current browser
- Settings action to clear cached app files and reload without removing account or saved app data
- LocalStorage: account registry/session use `wowfood_demo_accounts` and `wowfood_demo_session`; user data uses account-suffixed keys such as `wowfood_cart_<account>`, `wowfood_orders_<account>`, and `wowfood_profile_<account>`; language remains a browser preference
- PWA manifest and service worker

This is a frontend demo. Accounts and salted password hashes are saved in the current browser only; per-account data separation prevents accidental mix-ups in the app but is not a security boundary. Email or phone uniqueness is not shared across browsers or devices, and the same person can create another demo account with a different identifier. Real one-person-one-account enforcement and private account data require backend authentication, verified identifiers, and a database. Older shared data is not copied into new per-account storage because its owner cannot be determined safely. The app does not process real payments, transmit orders to a restaurant, or send messages to a courier. Delivery chats and sign-in state are saved only in the browser. Restaurant details and delivery location are sample content. Food images are loaded from Unsplash and need internet access.
