<h1>Fitness app - Let's work out together</h1>

<ul>
    <li>
        <a href="#functionalities">Functionaliteiten van de app</a>
    </li>
    <li>
        <a href="#usages">Benodigdheden voor de app</a>
    </li>
    <li>
        <a href="#UI">User Interface/Experience</a>
    </li>
    <ul>
        <li><a href="#pages">Pagina's bepalen</a></li>
        <li><a href="#design">Design uitwerken in Figma</a></li>
    </ul>
    <li>
        <a href="#flowchart">Flowchart met functionaliteiten per view</a>
    </li>
    <li>
        <a href="#security">Beveiliging/veiligheid van gebruikers waarborgen</a>
    </li>
    <li>
        <a href="#target_audience">Doelgroep bepalen</a>
    </li>
    <li>
        <a href="#technics">Technieken bepalen</a>
    </li>
</ul>

<h2 id="functionalities">Functionaliteiten van de app</h2>
<p>Met de app kan je punten sparen door het doen van workouts. Voor een workout kan je een bepaald aantal punten verdienen op basis van intensitieit, dit is het aantal punten per intensiteit:</p>
<ul>
    <li><b>Zeer intens:</b> 165 punten</li>
    <li><b>intens:</b> 125 punten</li>
    <li><b>Gemiddeld:</b> 100 punten</li>
    <li><b>Lichte intensiteit:</b> 70 punten</li>
    <li><b>Zeer lage intensiteit:</b> 35 punten</li>
</ul>
<br>

<h2 id="usages">Benodigdheden voor de app</h2>
<p>Voor het bouwen van de app zijn een aantal dingen nodig:</p>
<a href="https://ZenQuotes.io/">Zen Quotes API | Daily Inspirational Quotes</a>
<p>ZenQuotes is een API waarmee je gemakkelijk inspirational quotes kan tonen op je web-app. Dit is wil ik gebruiken om de motivational quote op het home-scherm te tonen.</p>
<br>
<a href="https://strapi.io/">Strapi - Open Source Node.js Headless CMS</a>
<p>Ook zal ik gebruik maken van Strapi, dit om de workouts in de app te kunnen beheren. Het CMS zal gekoppeld worden met Laravel.</p>
<br>

<h2 id="UI">User Interface/Experience</h2>
<h3 id="pages">Pagina's bepalen</h3>
<ul>
    <li>Start scherm <br>
    Dit scherm wordt getoond als je nog niet bent ingelogd. Hierop staat een knop met 'Let's workout!' o.i.d;</li><br>
    <li>Home scherm <br>
    Een overzicht van type workouts met hieronder een motivational quote. Ook kan je je recente workouts zien;</li><br>
    <li>Workouts scherm <br>
    Een overzicht van workouts binnen een bepaalde categorie;</li><br>
    <li>Workout detail scherm<br>
    Een scherm met een korte uitleg over de workout, en een start-knop;</li><br>
    <li>Account scherm <br>
    Op dit scherm kan je je profielfoto wijzigen, ook kan je je punten en je leaderboard positie hier zien;</li>
</ul>
<br>
<h2 id="flowchart">Flowchart met functionaliteiten per view</h2>
<h2 id="security">Beveiliging/veiligheid van gebruikers waarborgen</h2>
<h2 id="target_audience">Doelgroep bepalen</h2>
<h2 id="technics">Technieken bepalen</h2>
<p>Voor het beheren van de workouts en het weergeven van de applicatie zijn verschillende technieken nodig. Hieronder staan deze genoteerd met een korte toelichting:</p>
<ul>
    <li>Strapi <br>
    Strapi is een Headless CMS dat ik ga gebruiken voor het beheren van de applicatie. Dingen zoals het aanmaken van workouts etc. kan via hier gedaan worden.</li> <br>
    <li>Laravel <br>
    Laravel zal worden gebruikt om de data te verwerken & op te sturen naar de componenten.</li> <br>
    <li>Vue <br>
    Vue zal worden gebruikt voor het bouwen van de componenten</li> <br>
    <li>SCSS & TailwindCSS <br></li>
    Voor de styling van de applicatie zal ik gebruik maken van SCSS en TailwindCSS.
</ul>