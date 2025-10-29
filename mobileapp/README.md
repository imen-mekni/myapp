# BloggingApp (React_Native_Application)

Tu vas construire une **application de blogging interactive** avec **React Native** et **TypeScript**.
Le sprint est organisé en **étapes progressives** à compléter dans l’ordre.



##  Vous pouvez modifier votre backend pour qu’il soit aligné avec le front-end développé dans ce projet.
---

## Démarrage du projet

* **Installer les dépendances** :

  ```bash
  npm install
  ```
* **Lancer l’application** :

  ```bash
  npm run start
  ```
* **Accéder à l’app** : sur émulateur ou appareil via **Expo**.

---

##  Étape 1 : Créer les modèles et services

| # | Objectif                          | Action à réaliser                                                                                                            |
| - | --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 1 | Créer le type `User`              | Contient : `id`, `username`, `email`, `password`, `imageUrl`.                                                                |
| 2 | Créer le service `authService.ts` | Simuler les appels API pour `register`, `login`, `logout`. Les données peuvent être stockées localement avec `AsyncStorage`. |
| 3 | Gérer la navigation               | Si l’utilisateur est connecté → accéder à l’app principale (`Home`), sinon → rediriger vers `AuthNavigator`.                 |
| 4 | Ajouter la persistance de session | Sauvegarder le user dans `AsyncStorage` pour rester connecté après redémarrage.                                              |



---

##  Étape 2 : Gestion du Feed (Liste des Posts)

| # | Objectif                          | Action à réaliser                                                                            |
| - | --------------------------------- | -------------------------------------------------------------------------------------------- |
| 1 | Créer le type `Post`              | Contient : `id`, `title`, `content`, `author`, `imageUrl`, `likes`, `comments`, `createdAt`. |
| 2 | Créer le service `postService.ts` | Appels API simulés pour `getPosts`, `getPostById`.                                           |
| 3 | Créer la page `HomeScreen.tsx`    | Afficher la liste des posts avec `FlatList`.                                                 |
| 4 | Ajouter des loaders et skeletons  | Pendant le chargement des posts.                                                             |

---

##  Étape 3 : Gestion des Posts

| # | Objectif                                | Action à réaliser                                                                                |
| - | --------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 1 | Ajouter la fonctionnalité `AddPost.tsx` | Formulaire avec titre, contenu, image *(pour le moment, sauvegarder seulement une URL d’image)*. |
| 2 | Dans le composant `PostCard.tsx`       | Afficher le contenu complet du post + commentaires.                                              |
| 3 | Permettre d’éditer/supprimer un post    | Accessible uniquement à l’auteur du post.                                                        |
| 4 | Ajouter les interactions                | Like et Comment.                                                                                 |
| 5 | Ajouter des loaders et skeletons        | Pendant le chargement des posts.                                                                 |

---

##  Étape 4 : Profil utilisateur

| # | Objectif                        | Action à réaliser                                                      |
| - | ------------------------------- | ---------------------------------------------------------------------- |
| 1 | Dans `ProfileScreen.tsx`       | Afficher la photo, nom, email, et la liste des posts de l’utilisateur. |
| 2 | Ajouter `EditProfileScreen.tsx` | Permettre la modification du profil (nom, email, image, mot de passe). |
| 3 | Gérer la navigation             | Depuis le profil, rediriger vers la page d’édition.                    |

---

##  Étape 5 : Améliorations et fonctionnalités avancées

| # | Objectif                                        | Action à réaliser                                               |
| - | ----------------------------------------------- | --------------------------------------------------------------- |
| 1 | Ajouter gestion offline                         | Sauvegarder les posts localement en cas d’absence de connexion. |
| 2 | Implémenter pagination et chargement progressif | Pour la liste des posts (`HomeScreen`).                         |
| 3 | Améliorer UI/UX                                 | Skeletons, transitions fluides, feedbacks utilisateur (toasts). |
| 4 | Ajouter validation et gestion d’erreurs         | Pour les formulaires et appels API.                             |

---

## Checklist finale

* [ ] Authentification (login / register / persistance)
* [ ] Feed fonctionnel avec pagination
* [ ] Ajout, édition et suppression de posts
* [ ] Likes et commentaires fonctionnels
* [ ] Profil et édition utilisateur
* [ ] Gestion offline et loaders
* [ ] Code organisé (types, services, navigation)

---

Souhaites-tu que je te reformate ça directement en **README.md** prêt à publier sur GitHub (avec emojis et sections stylées) ?
