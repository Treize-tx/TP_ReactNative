# ReactNative Expo 52


## Configuration spécifique IUT

> Tutorial complet : https://react-native-courses.clubinfo-clermont.fr/docs/project_creation

L'installation de react-native prend beaucoup de place, ce qui a de grandes chances de dépasser les quotas du home universitaire.

Il est nécessaire d'avoir suffisament de place sur scratch, sinon de nombreuses erreurs -122, de création de fichiers ou d'unlink se feront ressentir.

Ce guide détaille les étapes pour correctement utiliser React Native à l'IUT. Nous utiliserons `npm` pendant les TPs.

### Rediriger le cache NPM
`npm` utilise un cache sur le système de gestion de fichiers, sur `~/.cache` par défaut. L'installation de React Native va très probablement faire exploser la taille de ce dossier, d'où l'intérêt de le déplacer sur scratch.

> N'oubliez pas de remplacer $USER par votre nom de session !

Créer le dossier de cache (`$USER` fait référence à l'utilisateur courant) :

```sh
mkdir /home/scratch/$USER/npm-cache
```

Éditer le fichier `~/.npmrc` pour utiliser le proxy de l'IUT et ce nouveau dossier :

```sh
proxy=http://proxycl.iut.uca.fr:8080/
http_proxy=http://proxycl.iut.uca.fr:8080/
https_proxy=http://proxycl.iut.uca.fr:8080/
cache=/home/scratch/$USER/npm-cache
```

Vous pouvez utiliser la commande suivante
```sh
cat << 'EOF' >> ~/.npmrc
export proxy=http://proxycl.iut.uca.fr:8080/
export http_proxy=http://proxycl.iut.uca.fr:8080/
export https_proxy=http://proxycl.iut.uca.fr:8080/
export cache=/home/scratch/${USER}/npm-cache
EOF
```

Naviguez ensuite dans le dossier de votre projet tout fraichement cloné, et lancez les commandes suivantes:

```sh
npm install; # Permet d'installer les dépendances du projet en local
npm start; # Permet de lancer votre projet
```