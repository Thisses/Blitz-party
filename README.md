# Blitz Party — prototype v0.4

Prototype web multijoueur pour 2 à 8 joueurs, prévu pour navigateur mobile.

## Ce qui est inclus
- Salon privé avec code de 4 caractères.
- Liste des joueurs en temps réel, hôte et lancement réservé à l'hôte.
- 9 mini-jeux sans répétition pendant une partie.
- Cycle prévu de 5 secondes de règles, 5 secondes de jeu et 5 secondes de résultats.
- Tirage aléatoire du mini-jeu et d'un mode compatible avec le nombre de joueurs.
- Modes chacun pour soi, duels (nombre pair de joueurs) et équipes aléatoires.
- Attribution et calcul des scores côté serveur.
- Validation renforcée des actions : choix autorisés, limites de clics et refus des actions après la fenêtre de jeu.
- Endpoint `/health` pour vérifier que le serveur répond.
- Tests automatiques de cohérence structurelle avec `node --test`.

## Lancer en local

Nécessite Node.js 20 ou plus.

```bash
npm install
npm test
npm start
```

Puis ouvrir `http://localhost:3001` dans un navigateur. Pour tester plusieurs joueurs, ouvrir la même adresse dans plusieurs onglets.

## Préparer la mise en ligne

Voir `DEPLOIEMENT.md` et `render.yaml` pour la configuration de déploiement. La configuration ne publie pas le jeu automatiquement : il faut connecter un dépôt GitHub à un hébergeur.

## État actuel et limites

C'est toujours un prototype non publié. Les tests automatiques inclus vérifient la structure et quelques garde-fous, mais ne remplacent pas des tests multijoueurs de bout en bout. Les règles et le scoring de certains mini-jeux restent simplifiés et doivent être testés et ajustés. La reconnexion après coupure, les tests sur plusieurs téléphones et le déploiement public restent à faire. Aucune URL publique n'est configurée.
