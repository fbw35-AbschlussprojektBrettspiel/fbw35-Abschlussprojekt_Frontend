# WebDev - Das ~~Brett~~ Onlinespiel
![logo](./public/LogoSpiel.png)

Wie weit reichen deine WebDev-Kenntnisse? Hier ist eine tolle Möglichkeit, dies herauszufinden! Mit diesem Brettspiel kannst du alleine oder online mit anderen zusammen ganz einfach euer Wissen testen. Zusätzlich gibt es noch Witze und Anekdoten aus einem WebDev-Kurs.

![screen](img/../public/img/ScreenSpiel.png)

[Beispiel-Deployment auf Heroku](https://webdev-brettspiel-frontend.herokuapp.com/)

[Link zum Backend-Repository](https://github.com/fbw35-AbschlussprojektBrettspiel/fbw35-Abschlussprojekt_Backend)

## Instalation

Um das Spiel zu clonen und zu starten, müssen [Git](https://git-scm.com) und [Node.js](https://nodejs.org/en/download/) auf dem Rechner installiert sein. Außerdem muss entweder [MongoDB](https://www.mongodb.com/) auf dem Rechner installiert sein, oder du benötigst einen Link zu einer MongoDB-Datenbank (wie z.B. [MongoDB Atlas](https://www.mongodb.com/cloud/atlas2)).

### Backend

Aus der Kommandozeile:

```bash
# Clone das Backend-Repository
$ git clone https://github.com/fbw35-AbschlussprojektBrettspiel/fbw35-Abschlussprojekt_Backend.git

# Gehe in das Verzeichnis
cd fbw35-Abschlussprojekt_Backend/

# Installiere Dependencies
$ npm install
```

Du kannst eine `.env` Datei im Root-Verzeichnes anlegen. Darin können die Umgebungsvariablen `PORT` für den benutzten Port und `DB` für die MongoDB angegeben werden. Ohne sie werden die Standardwerte sind `3050` und `mongodb://localhost:27017/quizfragen` benutzt.

```bash
# Skripts starten, um Fragen und Aktionen aus den JSON-Dateien in public-Ordner in die Datenbank zu schreiben
$ npm run pushFragen fragendatei.json
$ npm run pushAktionen actiondatei.json

# Starte den Server
$ npm start
```
### Frontend
Aus einer anderen Kommandozeile:
```bash
# Clone dieses Frontend-Repository
$ git clone https://github.com/fbw35-AbschlussprojektBrettspiel/fbw35-Abschlussprojekt_Frontend.git

# Gehe in das Verzeichnis
$ cd fbw35-Abschlussprojekt_Frontend/

# Installiere Dependencies
$ npm install

# Starte das Spiel
$ npm start
```
## Technologien
Im Laufe des Webentwicklung-Jahreskurses haben den **MERN-Stack** gelernt, und drei von diesen Technologien finden im Projekt ihre Anwendungen. Zusätzlich verwenden wir **Websocket**, das wir für das Projekt selbst gelernt und umgesetzt haben.

Das Spiel ist eine interaktive Webanwendung mit Zustandsänderungen (states). Dafür bietet sich **React** als Webframework an. Für eine zentrale Zustandsverwaltung benutzen wir das Paket **Redux**. Wegen der asynchronen Anfrangen an das Backend benutzen wir außerdem das Middleware-Paket **redux-thunk**.

Im Backend läuft **Websocket** innerhalb eines **Node.js**-Servers. Das Spiel ist ein rundenbasiertes Onlinespiel in quasi-Echtzeit. Alle Spieler sehen sofort Änderungen im Spiel, die jeweils vom Spieler, der gerade dran ist, ausgelöst werden. Dafür benötigen wir eine bidirektionale Verbindung zwischen dem React-App und dem Server. Dafür eignet sich **Websocket**, das mittlerweile auch von allen modernen Browsern unterstützt werden.

Die Quizfragen (und 'Aktionen') werden in **MongoDB** gespeichert und jedes Mal, wenn ein Spiel gestartet wird, vom Server abgefragt. Für die Abfragen benutzen wir **Mongoose**.