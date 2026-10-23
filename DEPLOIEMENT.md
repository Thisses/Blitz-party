# Mettre Blitz Party en ligne (sans installer quoi que ce soit sur les téléphones)

Cette configuration prépare le projet pour Render. Elle ne publie pas le jeu à elle seule : il faut d'abord placer le dossier du projet dans un dépôt GitHub, puis autoriser Render à le lire.

## Étapes quand tu seras prêt

1. Créer un dépôt GitHub vide nommé `blitz-party`.
2. Ajouter les fichiers du dossier du projet à ce dépôt (notamment `server.js`, `package.json`, `public/`, `test/` et `render.yaml`).
3. Dans Render, choisir **New → Web Service**, puis connecter le dépôt GitHub.
4. Render doit détecter `render.yaml`. Vérifier les valeurs :
   - Build Command : `npm install`
   - Start Command : `npm start`
   - Health Check Path : `/health`
5. Déployer et attendre que le service indique qu'il est prêt.
6. Ouvrir l'URL `https://...onrender.com/`, puis vérifier que `/health` renvoie un JSON avec `"ok": true`.
7. Tester avec deux téléphones ou deux navigateurs différents : créer un salon, rejoindre avec le code, puis lancer une partie.

## À savoir

- Les joueurs n'ont rien à installer : ils ouvrent seulement l'URL dans leur navigateur.
- Le niveau gratuit de l'hébergement peut se mettre en veille après une période d'inactivité ; le premier démarrage peut donc être lent. Les offres et limites des hébergeurs peuvent changer.
- Le prototype stocke les salons en mémoire : un redémarrage du serveur efface les salons et les parties en cours. C'est acceptable pour un premier test, mais pas pour une version durable.
- La reconnexion automatique après une coupure n'est pas encore finalisée.
- Les tests automatiques actuels sont des vérifications de cohérence du code, pas un test complet avec de vrais navigateurs.
