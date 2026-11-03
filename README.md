# Pokémon Memory Card Game

A React-based Pokémon memory card game where players test their memory by selecting different Pokémon without clicking the same card twice.

## Purpose

This project is built to practice React fundamentals, including state management, component composition, event handling, and working with external APIs. Players earn points by selecting unique Pokémon, while the cards shuffle after every successful selection to make the game more challenging.

## Features

- Fetches Pokémon data dynamically from the PokéAPI.
- Displays Pokémon cards with their names, images, and IDs.
- Shuffles cards after every successful selection using the Fisher–Yates algorithm.
- Tracks the current score and highest score.
- Detects repeated selections and triggers a Game Over screen.
- Allows players to restart the game while preserving their high score.
- Responsive card grid layout.
- Game Over overlay with final score and restart option.

## Tech Stack

- React
- JavaScript (ES Modules)
- HTML5
- CSS3
- Vite
- Lucide React (icons)

## APIs & Modules Used

- **PokéAPI**: Provides Pokémon data, including names, IDs, and Pokémon sprites.
  - API endpoint: `https://pokeapi.co/api/v2/pokemon/?limit=10`
  - Sprite images: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`

- **React Hooks**:
  - `useState`: Manages cards, selected Pokémon, current score, high score, and game state.
  - `useEffect`: Fetches Pokémon data when the application loads.

- **Game Logic**:
  - Fisher–Yates shuffle algorithm for randomizing card positions.
  - Tracks previously selected Pokémon IDs to detect repeated selections.
  - Updates the current and highest scores.

## How to Run

1. Clone the repository:

```bash
git clone https://github.com/Elmatzidis/MemoryCard.git
```

2. Move into the project directory:

```bash
cd MemoryCard
```

3. Install dependencies:

```bash
npm install
```

4. Start the local development server:

```bash
npm run dev
```

5. Build the production bundle:

```bash
npm run build
```

6. Preview the production build locally (optional):

```bash
npm run preview
```

## Deployment

The project can be deployed using Netlify by connecting the GitHub repository.

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Production branch:** `main`
