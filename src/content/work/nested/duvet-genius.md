---
title: Monitoring project
publishDate: 2020-03-04 00:00:00
img: /assets/EON10.png
img_alt: Pearls of silky soft white cotton, bubble up under vibrant lighting
description: |
  We developed a virtual showcase for the softest bedding imaginable.
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


### Mise en place d'une solution de supervision système dans un réseau.

Dans ce tutoriel, on va voir comment mettre en place une solution de supervision système dans un réseau en utilisant la technologie Eye Of Network(EON). Cette solution a été déployée dans un sous réseau du Centre de Développement des Technologies de l’Information et de la Communication de l'université de Ngaoundéré.

#### Architecture du sous réseau. 

<img
					alt="Nana sb project"
					width="700"
					height="420"
					src="/assets/architecture-sous-reseau.png"
/>

#### Présentation de l’architecture d’EON

EyesOfNetwork (EON) est une solution open source de supervision Systèmes et Réseaux réunissant de manière pragmatique les processus ITIL et l’interface technologique permettant leur application. EyesOfNetwork Supervision est la première brique d’une gamme de produits bâtie autour de la gestion des évènements, de la disponibilité, des problèmes et de la capacité. Basé sur Nagios. EON fonctionne sur une distribution GNU/Linux CentOS. L’architecture d’EON est constituée de plusieurs logiciels :


<img
					alt="Nana sb project"
					width="700"
					height="420"
					src="/assets/arc-EON.png"
/>

##### Description des composants d’EON

<table border ="1%" width = "700"  height="420" align = "center">
  <tr>
      <td>NAGIOS </td>
      <td>gestion des incidents et des problèmes </td>
  </tr>
  <tr>
      <td>THRUK </td>
      <td>interface de supervision multi-back end </td>
  </tr>
  <tr>
      <td>NAGVIS  </td>
      <td>cartographie personnalisée de la disponibilité </td>
  </tr>
  <tr>
      <td>NAGIOSBP </td>
      <td>gestion de la criticité des applications </td>
  </tr>
  <tr>
      <td>CACTI et PNP4NAGIOS  </td>
      <td>gestion des performances </td>
  </tr>
  <tr>
      <td>WEATHERMAP  </td>
      <td>cartographie de la bande passante </td>
  </tr>
  <tr>
      <td>BACKUP MANAGER</td>
      <td>outil de sauvegarde de la solution </td>
  </tr>
  <tr>
      <td>EONWEB </td>
      <td>interface Web unifiée de la solution </td>
  </tr>
  <tr>
      <td>EZGRAPH </td>
      <td>librairie d’affichage des graphiques </td>
  </tr>
  <tr>
      <td>SNMPTT  </td>
      <td>traduction des trap snmp </td>
  </tr>
  <tr>
      <td>GLPI / OCS / FUSION  </td>
      <td>gestion de parc et inventaire </td>
  </tr>
</table>

#### Installation et configuration d'EON

Etape 1 : cette première étape consiste à avoir tous simplement une image de disque du système EON soit sur CD ou sur une clé USB bootable.<br>
Etape 2 : après l’insertion et le redémarrage de la machine, il nous reste qu’à suivre les différentes étapes d’installation qui suivent :

<img
					alt="Nana sb project"
					width="700"
					height="420"
					src="/assets/istEON1.png"
/>

Un menu va apparaître, choisissez la première option et valider avec « Entrée ». En suite Le système va ensuite demander si l’on souhaite effectuer un test de disque sélectionnez « Skip ».<br>
Le logiciel d’installation va se lancer. Une première fenêtre va apparaitre cliquez sur « Next » puis sélectionner la langue et le clavier utilisés.

<img
					alt="Nana sb project"
					width="700"
					height="420"
					src="/assets/insEON2.png"
/>

Dans le menu « Source d’installation », vous allez sélectionner votre disque ainsi que sa méthode de partitionnement et si vous voulez que les données présente sur le disque soit chiffré ou non. Pour ma part, je choisis le partitionnement automatique et je ne chiffre pas les données de mon disque.

<img
					alt="Nana sb project"
					width="700"
					height="420"
					src="/assets/insEON3.png"
/>

En suite dans le menu nom de l’hôte sélectionner la carter réseau et activer ce dernier. Et dans le menu sélectionner le logiciel cocher personnaliser et cocher tous les outils de supervision que vous souhaitez installer. Puis démarrer l’installation.<br>
Lors de l’installation, on peut de finir le mot de passe administrateur et créer un utilisateur en cliquant sur l’onglet « créer un utilisateur »<br>
Après avoir fini l’installation, on doit redémarrer la solution.

#### Configuration d’EON

La configuration d’EON se fait via l’interface et la console, dans notre cas on le fera par interface web. Pour accéder à l’interface web d’EON, il suffit tout juste d’ouvrir le navigateur et saisir l’adresse du serveur dans la barre d’adresse. Le navigateur affichera une alerte puis cliquer sur « continuer vers l’adresse du site dangereux »<br>
On verra apparaitre l’interface de connexion à notre serveur EON. Le nom d’utilisateur et le mot de passe par défaut est « admin »  « admin »


<img
					alt="Nana sb project"
					width="700"
					height="420"
					src="/assets/insEON4.png"
/>

L’installation déjà terminée, nous allons procéder par l’ajout des hôtes à superviser, l’ajout des différents modelés, et services
Sur l’interface WEB d’EON :<br>
Modifier la communauté SNMP de Nagios sur l’interface WEB d’EON est très simple et rapide. Il vous suffit de vous rendre dans le menu « Administration », puis « Configuration Nagios » et pour finir dans « Nagios Ressources ».

<img
					alt="Nana sb project"
					width="700"
					height="420"
					src="/assets/insEON5.png"
/>
Vous allez arriver sur la page « Environnement Ressources ». Vous n’aurez alors plus qu’à modifier la valeur « $USER2$« », qui correspond au nom de la communauté Nagios, par le nom de communauté de votre choix. Dans notre cas c’est CDTIC.

<img
					alt="Nana sb project"
					width="700"
					height="420"
					src="/assets/insEON6.png"
/>

Une fois la modification effectuée, il va falloir l’appliquer dans la configuration Nagios. Pour cela, il vous faut aller dans « Outils » puis « Appliquer la configuration ».<br>
Nous allons arriver sur la page d’exportation « Exporter » de la configuration Nagios, onglet que vous allez utiliser très régulièrement, car à chaque fois que vous allez effectuer une modification dans Nagios vous allez devoir exporter la configuration à fin qu’elle soit effective.<br>
Appuyez simplement sur « Restart » pour appliquer la configuration. Si tout se passe bien un message vert devrait s’afficher avec le message « Export Job Complete. Content Exported Succesfully. » La communauté SNMP de Nagios est à présent configuré, afin de pouvoir superviser vos hôtes, il est indispensable qu’ils aient la même communauté SNMP.<br>
Pour ajouter un hôte dans EON il suffit d’aller dans « administration, configuration,  équipements,  puis ajouté. »<br>
Dans l’interface suivante, nous devons entrer les informations dans les champs en fonction de la description de notre hôte à superviser :

<img
					alt="Nana sb project"
					width="700"
					height="420"
					src="/assets/insEON7.png"
/>

Pour pouvoir surveiller un hôte, il faut qu’il ait un agent SNMP installé sur l’hôte à superviser.

- Sur un hôte Linux :

Installation du paquet « snmpd » :
Ouvrir le terminal et passer en mode administrateur pour éviter la régénération des erreurs, puis tapez la commande : apt-get install snmpd
Une fois, le paquet installé rendez-vous dans le fichier « snmpd.conf »
Pour ce faire, nous allons taper la commande : nano /etc/snmp/snmpd.conf
Dans ce fichier il y aura 3 modifications à apporter :<br>
Commentons  la ligne suivante :<br>
`#agentAddress udp:127.0.0.1:161` et décommentons celle-ci `agentAddress upd:161, upd6: [:1]:161`<br
Cette modification a pour but d’autoriser l’écoute sur toutes les interfaces Ipv4 et Ipv6.<br>
Nous allons maintenant modifier la communauté SNMP dans le fichier.
Commentez la ligne suivante :<br>
`#rocommunity public default     -V systemonly` 
Pour obtenir celle-ci :
`Rocommunity "cdtic" 192.168.191.254"`
Puis redémarrez le service « snmpd » grâce à la commande :
`Service snmpd restart` <br>
- Sur un hôte Windows Pour modifié la communauté SNMP sur un hôte Windows il faut se rendre sur la page des services Windows. Pour ce faire tapez simplement « service » dans votre menu démarré. Le programme « services » devrait apparaître.<br>

<img
					alt="Nana sb project"
					width="700"
					height="420"
					src="/assets/EON8.png"
/>

Une fois sur la page des services de Windows, il vous faut trouver le service SNMP qui a pour nom « Service SNMP » tout simplement.<br>
Double-cliquez afin d’afficher cette fenêtre
<img
					alt="Nana sb project"
					width="700"
					height="420"
					src="/assets/EON9.png"
/>

Rendez-vous dans l’onglet « Sécurité » :<br>
Normalement, il ne devrait y avoir qu’un seul hôte SNMP de configuré à savoir vous-même (le local host).<br>
Pour configurer la communauté SNMP, cliquez sur « Ajouter… », La fenêtre de « Configuration de service SNMP » va s’ouvrir. C’est là que vous allez renseigner votre nom de communauté SNMP, ainsi que les « Droits de communauté » qu’il faudra configurer en « LECTURE CREATION ». Une fois, la configuration terminée, cliquez sur « Ajouter ».<br>
Puis on clique sur le second bouton « Ajouter… » Qui va nous ouvrir à nouveau la fenêtre « Configuration du service SNMP » mais cette fois pour configurer l’adresse du serveur Nagios. Une fois, l’adresse de votre serveur Nagios saisie, cliquez sur « Ajouter ».<br>
Pour terminer cliquez sur « Appliquer » puis « OK ». Le service SNMP de notre hôte Windows est maintenant configuré. Notre hôte va à présent pouvoir être supervisé par Nagios.<br>
Voici une capture du tableau de bord qui montre la détection d’un hôte Windows ajouté. 


<img
					alt="Nana sb project"
					width="700"
					height="420"
					src="/assets/EON10.png"
/>

Et voici la liste des hôtes :

<img
					alt="Nana sb project"
					width="700"
					height="420"
					src="/assets/EON11.png"
/>

- Configuration de postfix
Après ajouter un hôte et définir toutes ses commandes, on doit pouvoir faire en sorte que l’administrateur soit alerté en cas des incidents anormaux sur le fonctionnement de cet hôte. Pour cela on doit configurer la postfix pour l’alerte par mail :<br>
Cette configuration se fait par l’interface console de notre serveur EON.
Nous allons maintenant installer les paquets suivants :<br>

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

`yum install epl-release`   <button onclick="copyToClipboard('yum install epl-release')">Copier</button>


<img
					alt="Nana sb project"
					width="700"
					height="420"
					src="/assets/EON12.png"
/>

Puis:
`Yum install postfix mailutils libsasl2-2 ca-certificates libsasl2-modules`     
<button onclick="copyToClipboard('`Yum install postfix mailutils libsasl2-2 ca-certificates libsasl2-modules`')">Copier</button><br>

`Mailutils` permet la gestion des courriels par la console, <br> `libsasl2-2` est l’implémentation de l’interface de programmation de Cyrus SASL,<br> 
`ca-certificates` contient des fichiers PEM de certificats CA, et pour finir `libsasl2-modules` contient des modules pour le paquet libsasl2-2.<br>

Nous allons maintenant nous occuper de la configuration. On ouvre le fichier de configuration de Postfix :

<img
					alt="Nana sb project"
					width="700"
					height="420"
					src="/assets/EON13.png"
/>

`vi /etc/postfix/main.c` <button onclick="copyToClipboard('vi /etc/postfix/main.c')">Copier</button>

On modifie la ligne :<br>
Relayshost = <br>
Par : `relayhost=[smtp.gmail.com]:587`    <button onclick="copyToClipboard('relayhost=[smtp.gmail.com]:587')">Copier</button>

<img
					alt="Nana sb project"
					width="700"
					height="420"
					src="/assets/EON14.png"
/>

Cela sert à indiquer que nous utiliserons le SMTP de Gmail. On ajoute les lignes suivantes à la fin du main.cf:

<img
					alt="Nana sb project"
					width="700"
					height="420"
					src="/assets/EON15.png"
/>

Cela sert à activer l’authentification, à indiquer où se trouve le fichier sasl_passwd que nous créerons plus tard, à interdire le mode anonyme, à indiquer où se trouve le certificat, et pour finir à utiliser le tls. On enregistre et on quitte.<br>
On va maintenant préciser l’adresse Gmail d’où nous voulons que les mails partent. Pour cela il faut créer le fichier suivant :<br>

`vi /etc/postfix/sasl_passzd`    <button onclick="copyToClipboard('vi /etc/postfix/sasl_passzd')">Copier</button>

<img
					alt="Nana sb project"
					width="700"
					height="420"
					src="/assets/EON16.png"
/>

Dans ce fichier vide, on ajoute la ligne suivante :<br>

`[smtp.gmail.com]:587 votre@dressemail:mot_de_passe` <button onclick="copyToClipboard('[smtp.gmail.com]:587 votre@dressemail:mot_de_passe')">Copier</button>

<img
					alt="Nana sb project"
					width="700"
					height="420"
					src="/assets/EON17.png"
/>

On exécute un postmap, cela permettra de créer une sorte de base de données

`postmap /etc/postfix/sasl_passwd`    <button onclick="copyToClipboard('postmap /etc/postfix/sasl_passwd')">Copier</button>

<img
					alt="Nana sb project"
					width="700"
					height="420"
					src="/assets/EON18.png"
/>

On redirige le certificat vers `/etc/postfix/cacert.pem` <br>

<img
					alt="Nana sb project"
					width="700"
					height="420"
					src="/assets/EON19.png"
/> 

On relance postfix pour que tous nos changements soient pris en compte en exécutant la commande:
`postfix stop` et `postfix star`

<img
					alt="Nana sb project"
					width="700"
					height="420"
					src="/assets/EON20.png"
/>

On vient alors de configurer le serveur mail de postfix pour recevoir des alertes. il suffit tout juste de tester avec la commande suivante :   
 `echo "test mail." | mail -s "test message" votre_@dresse_mail`

On peut vérifier si la boite d’envoi de mail est vide pour se rassurer que le message a été envoyé avec la commande : `mailq`
<button onclick="copyToClipboard('mailq')">Copier</button> <br>

Si on consulte le Gmail de l’adresse d’utilisateur du test, on verra un message d’alerte par Google.

<img
					alt="Nana sb project"
					width="700"
					height="600"
					src="/assets/EON22.png"
/>
Il suffit tout juste d’autoriser les applications moins sécurisées dans les paramètres de configuration Gmail








