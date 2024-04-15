# Frontendramverk Gruppexamination - MyMovieDatabase

## Introduktion 
Hej där, blivande React-mästare! Det är dags att ta våra kreativa kunskaper till nästa nivå och omvandla vår filmdatabas-saga till en interaktiv och förbluffande modern upplevelse! Precis som våra tidigare JavaScript-äventyr har förberett oss för detta ögonblick, är det nu dags att slå på React-motorn och skapa magi på webben. Vi tar med oss all vår tidigare kodningserfarenhet och kastar oss in i en värld av komponenter, statehantering och interaktivitet. Det är som att gå från en vanlig 2D-film till en fullständig 3D-upplevelse! Tillsammans kommer vi att omdefiniera vad det innebär att bygga en filmdatabas, och visa att med React finns det inga gränser för våra kreativa möjligheter på webben. Så låt oss ta plats bakom koden, rulla kameran och skapa vårt eget mästerverk - för i React-universumet är det endast fantasin som sätter gränsen för vad vi kan uppnå!

## Instruktioner

### Uppgift
Ert uppdrag är att skapa en filmdatabas-applikation med hjälp av frontendbiblioteket React. På applikationen skall användaren kunna få förslag på filmer, söka efter filmer, visa detaljerad information om filmer, lägga till sina favoritfilmer med mera. Till er hjälp har ni denna gång endast ett antal user stories som ALLA skall uppfyllas.

### User Stories
- Som besökare vill jag att appen skall vara snygg och se professionell ut, så att jag vågar lita på att applikationen är seriös.
- Som besökare vill jag att gränssnittet är responsivt och lättanvänt (på skärmar över 900px), så att jag kan använda det på olika enheter utan att behöva lägga ner för mycket tid på att lära mig hur det fungerar.
- Som besökare vill jag kunna få förslag på filmer att titta på, så att jag själv slipper leta om jag behöver inspiration.
- Som besökare vill jag kunna söka efter filmer, för att kunna ta reda på mer information om dem.
- Som besökare vill jag kunna söka efter filmer oavsett var någonstans på webbplatsen jag befinner mig, så att jag slipper leta efter sökfunktionen.
- Som besökare så vill jag att min sökning skall ge flera resultat, ifall det är så att jag inte vet den exakta titeln på filmen jag söker efter.
- Som besökare vill jag kunna få detaljerad information om en film, för att kunna bestämma mig om filmen är någonting för mig.
- Som besökare vill jag kunna se trailern till en film som jag klickat på, för att kunna bestämma mig om filmen är någonting för mig.
- Som besökare vill jag kunna lägga till filmer i en favoritlista, för att kunna hålla koll på vlka filmer jag tidigare sett, och tyckt om.
- Som besökare vill jag kunna lägga till filmer som jag vill se i en Watchlist, så att jag kommer ihåg dem i efterhand.
- Som besökare med diverse funktionsvariationer så vill jag att applikationen skall vara tillgänglighetsanpassad, så att även jag får ta del av dess innehåll och funktion.

### Resurser

#### santosnr6.github.io
Mitt eget film-API där ni hittar förslag på filmer att använda på startsidan, för att bland annat kunna ge användaren föralag på filmer att titta på.

```
GET https://santosnr6.github.io/Data/movies.json
```

#### OMDB API (ni får använda ett bättre API om ni vill istället)
För att använda er av OMDBs film-API så behöver ni först av allt ansöka om en api-nyckel. Detta hittar ni gratis här. OMDBs film-API består av två olika typer av sökningar, bred och specifik. Den breda sökningen görs med en sträng som parameter och kommer att returnera de 10 första/bästa träffarna. Den breda sökningen innehåller inte särskilt mycket information utan bara det mest väsentliga som titel, poster, imdb-ID mm. URL för den breda sökningen:

```
GET http://www.omdbapi.com/?apikey=[yourkey]&s=[söksträng]
```

För att göra den mer specifika sökningen behöver ni använda er av det imdb-ID som den första sökningen genererade. Denna specifika sökning kommer att returnera mer specifik information om en specifik film. URL för den specifika sökningen:

```
GET http://www.omdbapi.com/?apikey=[yourkey]&plot=full&i=[imdb-ID]
```

#### Övrigt
Använd gärna även Postman för att testa APIet enkelt, och Wave för att säkerställa tillgänglighet.

### Pages
Er applikation skall minst bestå av följande Pages (namnen är valfria):
- HomePage (här presenterar ni en *inbjudande startsida* där användaren bland annat kan få förslag på filmer att se, fyll på med mer saker som låtsasartiklar, trailers mm om ni vill)
- SearchResultsPage (här presenterar ni resultaten från sökningen)
- SingleMoviePage (här presenterar ni den detaljerade informationen om en film, inkl möjlighet att spela upp tillhörande trailer om en sådan finns)
- FavoritesPage (här presenterar ni filmerna i användarens favoritlista)
- WatchlistPage (här presenterar ni filmerna i användarens Watchlist)

### Komponenter
Vilka komponenter ni vill skapa bestämmer ni själva, men utöver era Pages så skall ni skapa minst 8 komponenter som ni använder er av.

### Ytterligare instruktioner
Ni skall arbeta agilt, med Github och Github Projects som främsta verktyg. Ni kommer även förväntas lämna in gruppreflektioner där ni beskriver på vilket sätt ni arbetat agilt. 

Gruppkontrakt skrivs och skickas till mig innan ni börjar arbeta. Underlagen hittar ni på Azomo.

Ni får, men behöver inte, använda er av *localStorage* för att spara användarens favoriter, watchlist mellan sessioner. I denna uppgift är det okej om datan försvinner efter att användaren lämnat sidan. 

Deadline är satt till onsdagen den 24/4 kl 23:59. Tidigt på torsdagsmorgonen därpå kommer ni att tilldelas en annan grupps projektrepo som ni noggrant skall förbereda er att opponera mot. Opponering kommer att hållas fredagen den 26/4, där vi kör 3 grupper i taget. Nedan följer de tider som gäller:
- Kl 08.30 - Night Owls, Error 404, Power Nappers.
- Kl 09.45 - Just Managing, Fab Collab, Reschedulers
- Kl 11:00 - Crisis Averted, Fashionably Late, Procrastinators

Inget betyg kommer delas ut till någon som inte deltagit i opponeringen. Missar man opponeringen så kommer man få genomföra den vid ett senare tillfälle.

### Inlämning
Varje gruppmedlem lämnar in länken till gruppens repo på Azomo senast kl 23:59 den 24/4. Repot skall innehålla gruppens Reactprojekt, en gruppreflektion, samt en printscreen på gruppens Kanban Board i Github Projects.