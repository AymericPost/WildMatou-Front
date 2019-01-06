# WildMatou-Front

WildMatou est une chat-box développée à titre de projet personnel. Ce site permet de discuter avec tous ceux qui y ont accés.

Ce dépot contient la partie présentation front-end. La partie serveur back-end est sur le dépot [WildMatou-Back](https://github.com/AymericPost/WildMatou-Back).

![Chatbox Wild-Matou](https://i.ibb.co/MpzNcRR/matoubox.png)

## Execution

### Pré-requis

- Node.js
- npm
- Angular CLI
- [WildMatou-Back](https://github.com/AymericPost/WildMatou-Back) Installé et lancé

Voir [le guide d'installation d'Angular](https://angular.io/guide/quickstart).

### Installation

1. Téléchargez le projet ou entrez dans le terminal :
```Shell
git clone https://github.com/AymericPost/WildMatou-Front.git
```
2. Instalez les dépendances. Entrez dans le dossier téléchargé et entrez le terminal les commandes :
```Shell
npm install
npm install bootstrap
npm install jquerry
npm install poppers.js
```

### Compiler le site

Lancez le serveur et la compilation depuis le dossier téléchargé avec la commande :
```Shell
ng serve -o
```

Pour héberger cette chatbox sur votre réseau local :

1) Récupérez votre adresse ip avec par exemple la commande ```ifconfig```.
2) Configurez [WildMatou-Back](https://github.com/AymericPost/WildMatou-Back) avec votre IP (voyez [WildMatou-Back/README.md]())
3) Adaptez les services aux nouvelles adresses du back-end.
Les fichiers à modifier sont :
- ```src/app/matou-roar.service.ts```
- ```src/app/matou-fetch.service.ts```

A la ligne 18 de ces deux fichiers, changez ```localhost:8080``` par l'IP et le port configurés dans le back-end.

4) Compilez le projet avec votre ip en argument :

```Shell
ng serve -o -host XXX.XXX.XXX.XXX
```
Remplacez "XXX.XXX.XXX.XXX" par votre IP.

## Utilisation

### Ordinateur de bureau

1) (facultatif) Entrez un pseudo dans le champ "pseudo". Si ce champ est laissé vide, vous serez nommé en tant qu'Anonyme.
2) Entre un message dans le champ "message"
3) Appuyez sur la touche "Entrée" ou sur le bouton "miauler".

### Smartphone et tablettes

1) Descendez jusqu'à la partie "Matou-box" ou appuyez sur les flèches blanches.
2) Appuyez sur "Nouveau Message". Une nouvelle partie apparait en dessous de la "matou-box" et vous y êtes redirigés.
3) (facultatif) Entrez un pseudo dans le champ "pseudo". Si ce champ est laissé vide, vous serez nommé en tant qu'Anonyme.
4) Entre un message dans le champ "message"
5) Appuyez sur le bouton "miauler".

Vous pouvez à tout moment fermet la partie "nouveau message" en appyant sur la croix rouge en haut du cadre ou sur "Fermer la fenètre de rédaction" en bas de la "matou-box".

## Evolution du projet

### Problèmes connus

- ~~Le seul verbe HTTP utilisé est GET.~~ POST est maintenant aussi utilisé !

Dans des futures versions, le vocaburaire HTTP sera étoffé.
- La matou-box déborde sur le titre du site en version portable lorsque le cadre "Nouveau message" est affiché.

### Fonctionnalités futures

1) Support des smileys (peut être aussi des emojis) avec possibilité de rajouter des smileys personnalisés
2) Support des liens/url
3) Notification de nouveaux messages
4) Salons de discussion
5) Messages privé
6) Support des images

## Framework utilisés

- [Angular](https://angular.io/)
- [Bootstrap](https://getbootstrap.com/)
