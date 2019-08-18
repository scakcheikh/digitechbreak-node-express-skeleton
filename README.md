# Projet Node + Express REST API skeleton
Ce projet est un squelette pour une API REST Node + Express. Il peut être utilisé comme point de départ pour développer une API REST Node. Le but principal est de montrer comment organiser votre projet Node + Express.

Il contient un exemple d'API Express REST préconfigurée pour installer toutes les dépendances pour un développement instantané. L'application dispose d'une logique métier très simple montrant comment implémenter des opérations de base avec un modèle utilisateur.

## Contenu
L'example imite un système un système de prise de "Rendez-vous"; un utilisateur pourra s'inscrire, et prendre un "Rendez-vous" .

## Structure
Ce projet montre comment:
  * Implémenter un modèle CRUD pour API REST
  * Organiser la structure de répertoire du projet
  * Organiser le routage pour des grandes applications
  * Chiffrer l'authentification JWT pour les routes privées
  * Chiffrer l'utilisateur password dans la base de données
  * Gérer la configuration multi-environnement
  * Implémenter la pagination pour les listes
  * Implémenter le tri des listes
  * Implémenter le filtrage des listes
  * Gérer le problème CORS pour l'environnement de développement

## Getting started

### Préréquis
Vous devez avoir un client git pour cloner le dépôt. Vous pouvez l'obtenir à http://git-scm.com/.

Installez :
- [NodeJs](http://nodejs.org/)
- [MongoDB](https://docs.mongodb.com/manual/installation/)
- [MongoDB Compass](https://www.mongodb.com/download-center/compass)

### Installation
- Ouvrir un terminal et placer dans votre répertoire de travail habituel

- Cloner le dépôt `digitechbreak-node-express-skeleton` avec la commande git:

```
git clone https://github.com/scakcheikh/digitechbreak-node-express-skeleton.git
```

- Installez les packages(dependencies):

```
npm install
```

### Démarrez l'application:

- Mettre en marche la base de données MongoDb
- Executez la commande ci-dessous :

```
npm start
```
