# Projet-Pokedex-API

## Présentation

Ce projet a été réalisé dans le cadre du **BTS SIO option SLAM**.

L'objectif est de créer une **API REST Pokédex** avec Node.js et Express, permettant de récupérer des informations sur les Pokémon à partir de fichiers JSON.

Le projet repose sur deux TP :
- **TP 02 :** Création du serveur API et des routes permettant de récupérer les Pokémon.
- **TP 02 Bis :** Mise en place d'une limitation du nombre de requêtes par adresse IP.

## Technologies utilisées

- JavaScript
- Node.js
- Express
- JSON
- Git / GitHub
- Bruno / Postman pour tester les requêtes

## Organisation du projet

```text
Projet-Pokedex-API/
│
├── BACKEND/
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
│
├── DATA/
│   ├── pokedex.json
│   ├── items.json
│   ├── moves.json
│   └── types.json
│
├── FILES/
│   ├── images/
│   ├── sprites/
│   └── thumbnails/
│
├── README.md
├── TP 02 - Pokedex.pdf
└── TP 02 Bis - Pokedex v2.pdf
```

## Installation

### 1. Cloner le dépôt

```bash
git clone https://github.com/joshuajeffredo-gif/Projet-Pokedex-API.git
```

### 2. Installer les dépendances

```bash
cd Projet-Pokedex-API/BACKEND
npm install
```

### 3. Lancer le serveur

Depuis la racine du projet :

```bash
node BACKEND/index.js
```

Ou avec le mode watch :

```bash
node --watch BACKEND/index.js
```

Le serveur utilise le port **5001**.

Adresse locale :

```text
http://localhost:5001
```

## Routes de l'API

Toutes les routes utilisent le préfixe `/api/v1/`.

| Méthode | Route | Description |
|---|---|---|
| GET | `/api/v1/pokemons` | Récupérer tous les Pokémon |
| GET | `/api/v1/pokemons/random` | Récupérer un Pokémon aléatoire |
| GET | `/api/v1/pokemons/:id` | Rechercher un Pokémon par identifiant |
| GET | `/api/v1/pokemons/:name` | Rechercher un Pokémon par nom |

### Exemples de requêtes

Récupérer tous les Pokémon :

```http
GET http://localhost:5001/api/v1/pokemons
```

Récupérer un Pokémon aléatoire :

```http
GET http://localhost:5001/api/v1/pokemons/random
```

Rechercher un Pokémon par identifiant :

```http
GET http://localhost:5001/api/v1/pokemons/25
```

Rechercher un Pokémon par nom :

```http
GET http://localhost:5001/api/v1/pokemons/Pikachu
```

**Remarque :** Ces routes correspondent aux fonctionnalités demandées dans le TP. Elles ne sont pas encore toutes implémentées dans le projet.

## Données utilisées

Le projet utilise plusieurs fichiers JSON :

- `pokedex.json` : contient les informations de 809 Pokémon.
- `items.json` : contient les objets Pokémon.
- `moves.json` : contient les attaques Pokémon.
- `types.json` : contient les différents types de Pokémon.

Chaque Pokémon possède notamment :
- Un identifiant
- Un nom
- Un ou plusieurs types
- Des statistiques (PV, attaque, défense, vitesse, etc.)

## TP 02 Bis : Limitation des requêtes

Cette deuxième partie consiste à limiter le nombre de requêtes effectuées vers l'API.

Le système doit permettre de :
- Récupérer l'adresse IP du client.
- Enregistrer les requêtes effectuées.
- Vérifier le nombre de requêtes sur une période donnée.
- Supprimer les anciennes requêtes du compteur.
- Refuser les requêtes dépassant la limite autorisée.

Cette fonctionnalité reste à développer.

## Avancement du projet

- [x] Création de l'arborescence
- [x] Ajout des fichiers JSON
- [x] Installation et configuration d'Express
- [x] Création du serveur Node.js
- [x] Création de la route `/api/v1/pokemons`
- [ ] Correction de la lecture des données JSON
- [ ] Recherche d'un Pokémon aléatoire
- [ ] Recherche par identifiant
- [ ] Recherche par nom
- [ ] Gestion des erreurs HTTP
- [ ] Limitation du nombre de requêtes par IP
- [ ] Tests des différentes routes

## Auteur

**Joshua Jeffredo**

Markdown assisté par IA (Chatgpt)

BTS SIO option SLAM
