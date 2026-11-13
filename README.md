<h1 align="center">📚 final-hci-assignment</h1>

<br>

<h3 align="center">A redesign prototype for a city library's online catalog.<br>Two screens that make availability visible and the collection easier to explore</h3>

<p align="center">
  <a href="https://petri-hub.github.io/final-hci-assignment/"><img alt="Website" src="https://img.shields.io/website?url=https%3A%2F%2Fpetri-hub.github.io%2Ffinal-hci-assignment%2F&label=live%20prototype" /></a> <a href="https://github.com/Petri-Hub/final-hci-assignment/actions/workflows/pages.yml"><img alt="Deploy" src="https://img.shields.io/github/actions/workflow/status/Petri-Hub/final-hci-assignment/pages.yml?label=deploy&logo=githubactions&logoColor=white" /></a> <img alt="Lighthouse" src="https://img.shields.io/badge/lighthouse-100%20%C2%B7%20100%20%C2%B7%20100%20%C2%B7%20100-F44B21?logo=lighthouse&logoColor=white" /> <a href="https://github.com/Petri-Hub/final-hci-assignment/commits/main"><img alt="Last commit" src="https://img.shields.io/github/last-commit/Petri-Hub/final-hci-assignment" /></a> <a href="LICENSE.md"><img alt="License" src="https://img.shields.io/github/license/Petri-Hub/final-hci-assignment" /></a>
</p>

<br>

## About

> **TL;DR:** the redesign part of my final Human-Computer Interaction assignment at FAM. I evaluated the online catalog of the Biblioteca de Americana, found where people get lost, and rebuilt the two screens that matter most: the home page and the search results. It is plain HTML, CSS and JavaScript.

## The problems it answers

The heuristic evaluation, the usability test and the accessibility audit are in the report. Three problems were picked for the redesign:

| Problem in the original catalog | Severity | What the prototype does |
|---|---|---|
| Results do not show whether a book is available, so each one has to be opened | 4 | A status on every card, a switch for available books only and a count when there is more than one copy |
| Results cannot be sorted | 3 | A "sort by" menu with five criteria that works, and a line saying how the list is ordered |
| The home page gives no direction for exploring by subject | 2 | Theme tiles, shortcuts by reader profile and a list of the biggest subjects |

It also carries smaller changes: a clear page title, a single search field, a "how to use the library" section with a map, a help dialog, a dark theme and a selection button that shows what has been picked.

## What's inside

```sh
├── .github  # deploys the site folder to GitHub Pages on every push to main
└── site     # the prototype
    ├── index.html       # home page
    ├── resultados.html  # search results for "romance"
    ├── css              # one stylesheet, light and dark themes
    ├── js               # shared behavior, one script per page and the demo data
    └── assets           # banner and book covers, converted to WebP
```

The home page and the results page link to each other, so the prototype can be walked through from either one.

## Technologies

<table align="center">
  <tr>
    <td align="center" width="96"><img src="https://cdn.simpleicons.org/html5" width="48" height="48" alt="HTML" /><br>HTML</td>
    <td align="center" width="96"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" width="48" height="48" alt="CSS" /><br>CSS</td>
    <td align="center" width="96"><img src="https://cdn.simpleicons.org/javascript" width="48" height="48" alt="JavaScript" /><br>JavaScript</td>
    <td align="center" width="96"><img src="https://cdn.simpleicons.org/githubpages/9198A1" width="48" height="48" alt="GitHub Pages" /><br>GitHub Pages</td>
    <td align="center" width="96"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg" width="48" height="48" alt="GitHub Actions" /><br>GitHub Actions</td>
    <td align="center" width="96"><img src="https://cdn.simpleicons.org/lighthouse" width="48" height="48" alt="Lighthouse" /><br>Lighthouse</td>
  </tr>
</table>

## Disclaimer

The prototype uses **example data** to show the ideas: whether a book is available or popular, how many copies it has, its year and subject on the results page, the order of "most borrowed" and the help text are made up. Titles, authors and covers come from the public catalog and belong to their owners. Nothing here is the real state of the collection.

## License

This repository is licensed under the [MIT License](LICENSE.md).
