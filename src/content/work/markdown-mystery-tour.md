---
title: VoIP project
publishDate: 2023-08-02 04:00:00
img: /assets/asterisk1.png
img_alt: Iridescent ripples of a bright blue and pink liquid
description: |
  I explain my project  in the file Markdown formatting. Suspense — suspicion — syntax!
tags:
  - Command
  - Elucidation
  - Image
---
---
> Tell me and I forget. Teach me and I remember. Involve me and I learn.
<!-- Utilisation de la fonction pour copier du texte
<img
					alt="Nana souaibou White smiling in a red plaid shirt and tortoise shell glasses"
					width="720"
					height="25"
					src="/assets/profil_nana.jpg"
/> -->
---
This project was carried out in a structure whose priority language spoken is French, which is why I am writing this tutorial in French.

---


<script>
    function copyToClipboard(text) {
        const el = document.createElement('textarea');
        el.value = text;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        alert('Texte copié : ' + text);
    }
</script>
---

<img
					alt="Nana souaibou White smiling in a red plaid shirt and tortoise shell glasses"
					width="720"
					height="25"
					src="/assets/Asterisk.JPG"
/>
---
<br>
   Dans ce tutoriel, on va voir comment mettre en place une solution de téléphonie sur IP dans un réseau local en utilisant la technologie Asterisk. j'ai eu  à déployer cette solution dans le LAN de l'institut universitaire de technologie de Ngaoundéré, y compris une solution de visio-conférence en local. Mais dans ce cas présent, on va s'attarder exclusivement sur la téléphonie sur IP. 

### Environnement de travail

Pour mettre en place cette solution, nous avons besoin d'un système linux(ubuntu) , d'un serveur Asterisk et des agents clients 3CXPhone.

---

### Installation et configuration d'Asterisk

Nous allons installer le serveur Asterisk sur le système Ubuntu 20.04 
<!-- Utilisation de la fonction pour copier du texte -->
 `sudo apt-get update`          <button onclick="copyToClipboard('sudo apt-get update')">Copier</button>

pour ce faire, on doit ouvrir le terminal avec la combinaison des touches CTRL + t. En suite on met à jour notre liste de dépôt avec la commande:


Une fois la mise à jours terminée, on installe le serveur Asterisk en exécutant la commande suivante:

``sudo apt-get install asterisk``          <button onclick="copyToClipboard('sudo apt-get install asterisk')">Copier</button>

En suite on va lancer automatique Asterisk à chaque fois que le système demarre en exécutant la commande:

``/etc/init.d/asterisk start``          <button onclick="copyToClipboard('/etc/init.d/asterisk start')">Copier</button>

Maintenant, lançons la console Asterisk avec la commande suivante:

``sudo asterisk -rvvvv``          <button onclick="copyToClipboard('sudo sudo asterisk -rvvvv')">Copier</button>

Cette commande permet de lancer l’interface d’Asterisk et de
voir les différents utilisateurs d’Asterisk et les statistiques de chaque action
effectuée par l’utilisateur. Mais nous n'avons encore créer aucun utilisateur. La figure suivante montre l'iterface d'asterisk.

<img
					alt="Nana souaibou White smiling in a red plaid shirt and tortoise shell glasses"
					width="720"
					height="25"
					src="/assets/img-interface.png"
/>

###  Configuration d’Asterisk

 La configuration d’Asterisk nécessite que nous éditions plusieurs fichiers.

- Les fichiers de configuration

Nous avons installé Asterisk sur Ubuntu 20.04. Nous allons ainsi
nous lancer dans sa configuration qui s’effectue dans le répertoire
``/etc/asterisk/``   qui contient tous les fichiers nécessaires pour la modification.
Ce répertoire compte 119 fichiers qui sont entrés autres les fichiers de
configuration et fichiers de base de conception du logiciel Asterisk.  On doit se déplacer en exécutant la commande:  
`cd /etc/asterisk/`    <button onclick="copyToClipboard('cd /etc/asterisk/')">Copier</button> 
En suite on tape la commande ``ls``     <button onclick="copyToClipboard('ls')">Copier</button>  pour afficher les fichiers de ce répertoire.

<img
					alt="Nana souaibou White smiling in a red plaid shirt and tortoise shell glasses"
					width="720"
					height="25"
					src="/assets/img-fichiers.png"
/>

### Edition des fichiers

pour editer un fichier dans linux, on peux utiliser l'editeur `nano` en exécutant la commande : `sudo nano nom_du_fichier` <button onclick="copyToClipboard('sudo nano nom_du_fichier')">Copier</button>

#### sip.conf

 Dans ce fichier, on commence par enlever les 
points-virgules au début des lignes suivantes :

 ;language=en                     ; Default language setting
for all users/peers

en

Language=fr                     ; Default language setting
for all users/peers

Ensuite
on ajoute notre propre configuration :

<img
					alt="Nana souaibou White smiling in a red plaid shirt and tortoise shell glasses"
					width="720"
					height="25"
					src="/assets/img-sip.png"
/>

- `[general]`      <button onclick="copyToClipboard('[general]')">Copier</button> : est un paramètre qui s'applique à tous mes utilisateurs qu'on enregistre dans le fichier sip.conf;

- `allow = alaw`     <button onclick="copyToClipboard('allow = alaw')">Copier</button> et `allow = ulaw`     <button onclick="copyToClipboard('allow = ulaw')">Copier</button>  : est un chemin de traduction des codecs;

- `dtmfmode = auto`     <button onclick="copyToClipboard('dtmfmode = auto')">Copier</button> : active automatiquement le clavier lors des appels;

- `context = voip`     <button onclick="copyToClipboard('context = voip')">Copier</button>    : c’est une sorte de conteneur dans lequel les utilisateurs faisant partis de ce contexte pourrons communiquer entre eux. Lors de la création de tous nos utilisateurs nous avons spécifié le contexte Voip ;

- `videosupport= yes`     <button onclick="copyToClipboard('videosupport= yes')">Copier</button>  : autorise le support video;

- `language = fr`     <button onclick="copyToClipboard('language = fr')">Copier</button>            : définit la langue adoptée pour transmettre par exemple une messagerie vocale;

#### Extensions.conf

<img
					alt="Nana souaibou White smiling in a red plaid shirt and tortoise shell glasses"
					width="720"
					height="25"
					src="/assets/extensions.png"
/>

  Lors de la création de nos utilisateurs nous avons spécifié le contexte voip.
- `Exten`⇒ : déclare l’extension (on peut aussi simplement dire numéros)
- `698928161`: Prend les extensions (ou numéros) 
- `1` : Ordre de l’extension
- `Dial` : application qui va être utilisé
- `SIP` : Protocol qui va être utilisé
- `${EXTEN}` : variable de l’extension composé, si on appelle le 698928161 la variable ${EXTEN} prendra comme valeur 698928161
- `20` : temps d’attente avant de passer à l’étape suivante.

#### Confbridge.conf

Ce fichier permet de créer une salle de conférence audio et le profil des utilisateurs, il permet aussi de définir le nombre maximum des utilisateurs qui peuvent participer à cette conférence.
Nous avons créé un simple profil utilisateur qui n’est ni administrateur et qui ne demande pas de mot de passe pour accéder à la conférence. 

<img
					alt="Nana souaibou White smiling in a red plaid shirt and tortoise shell glasses"
					width="400"
					height="40"
					src="/assets/confbridge.png"
/>

#### meetme.conf

Après avoir définie les paramètres dans le fichier Confbridge.conf, on doit aussi définir les numéros à composer pour rejoindre la conférence mais cette fois ci, on doit le définir dans le fichier meetme.conf.

<img
					alt="Nana souaibou White smiling in a red plaid shirt and tortoise shell glasses"
					width="400"
					height="40"
					src="/assets/meetme.png"
/>

#### features.conf

Concernant la mise en attente des appels, on doit aller dans le fichier features.conf et insérer le numéro qu’on doit composer pour le parking d’appel, dans notre cas c’est 700 et on doit définir aussi un intervalle des numéros à composer pour reprendre l’appel (700-720), la dernière ligne donne le temps que va prendre l’appel pour être raccrocher (60).

<img
					alt="Nana souaibou White smiling in a red plaid shirt and tortoise shell glasses"
					width="450"
					height="80"
					src="/assets/feature.png"
/>

### Configuration de softphone

Les clients "logiciels" n'ont généralement besoin que de quelques infos : Un nom (qui apparaitra en clair sur le client de destination lors d'un appel), un login et son mot de passe associé, et l'adresse du serveur VOIP. Leur configuration étant assez simple et disponible sur beaucoup de pages internet, elle ne sera pas détaillée ici.
En revanche, si on utilise un appareil type combiné téléphonique IP, il y a un peu plus de travail.
Comme tout périphérique IP, il doit avoir une adresse. Soit le réseau VOIP dispose d'un serveur DHCP, dans ce cas l'appareil en obtiendra une automatiquement (ces appareils sont par défaut en recherche DHCP), soit il faut lui en donner une avant de le relier au réseau. Cela se fait avec les touches et les menus internes (voir notice du téléphone). Une fois l'adresse IP connue, l'entrer dans un navigateur internet pour accéder à l'interface web. C'est avec qu'on va configurer l'appareil et surtout l'enregistrer sur le serveur VOIP. Les informations nécessaires sont généralement dans un onglet ou menu "Login" ou "Identity". Les plus importantes sont :
Le compte ou l'ID de connexion (souvent le numéro du poste pour des raisons de simplicité, qui est défini entre les [ ] dans le users.conf) Le mot de passe associé à ce compte (qui est défini dans le users.conf) à la ligne "secret =" L'adresse du serveur VOIP (appelé généralement "registrar") Les options de chiffrement et encodages des appels, qui doivent être compatibles avec celles du serveur VOIP. Si la sécurité des appels n'est pas critique, autant simplement désactiver ces fonctions. Une fois ces infos indiquées, enregistrer l'appareil sur le serveur VOIP (un bouton d'enregistrement ou "register" est normalement présent sur l'interface web). Si la console Asterisk est ouverte, elle indiquera par un message que le serveur a bien enregistré l'appareil. S'il y a un souci, elle indiquera une description du problème (par exemple un mauvais nom d'utilisateur, un chiffrement non pris en charge, etc). De plus, le numéro du poste s'affiche alors à l'écran de l'appareil. Dans notre cadre du projet on doit configurer un softphone 3CX pour les pc et un softphone PortSIP. Cette configuration tiendra compte de quelques paramètres :

- Le nom d’utilisateur ;
- L’adresse du serveur Asterisk ;
- Le mot de passe utilisateur.  

Les deux schémas ci-dessous illustrent la configuration :
Le nom d’utilisateur pour PortSIP est nanaphone
L’adresse du serveur : 192.168.43.195
Et le mot de passe défini lors de la création du compte utilisateur dans le fichier sip.conf.

<img
					alt="Nana souaibou White smiling in a red plaid shirt and tortoise shell glasses"
					width="350"
					height="20"
					src="/assets/portsip.png"
/>

Pour le softphone du pc, le nom d’utilisateur est nana-pc
L’adresse du serveur : 192.168.43.195
Et le mot de passe.
La configuration de 3CX demande un peu d’attention car pour ouvrir la fenêtre de la configuration principale, on doit aller vers l’entête du côté droit du logiciel, généralement écris New account puis on poursuit avec new, ensuite il ne nous reste que d’entrer les informations de l’utilisateur.

<img
					alt="Nana souaibou White smiling in a red plaid shirt and tortoise shell glasses"
					width="600"
					height="200"
					src="/assets/3cx.png"
/>

Nous arrivons à la fin de notre tuto. si tout est bien installé et configuré comme expliquer si haut. il suffit tout simplement d'effectuer le test en composant le numéro d'un utilisateur enregistré. Et si vous avez des difficultés n'hesitez pas à me laisser des messages pour plus d'info.

