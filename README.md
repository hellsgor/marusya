# Marusya — Movie Search Platform

[Русская версия](./README.ru.md) | English

> **Educational project** — beta version of VK Marusya streaming service

A web application for searching movies, viewing information about them, and managing a favorites list. Users can search for movies by title, view the top 10 by IMDb rating, get random recommendations, and save their favorite movies.

## 🎯 Key Features

- **Movie Search** — quick search by title with results display
- **Random Movie** — generate a random recommendation for viewing
- **Top 10 Movies** — list of the best movies by IMDb rating
- **Genres** — browse movies by categories with infinite scroll
- **Detailed Information** — full movie description, trailer, ratings
- **Favorites** — add and manage a list of favorite movies
- **Authentication** — registration and login with session persistence
- **User Profile** — view profile and list of favorite movies

## 🏗️ Architecture

The project is built on the **Feature-Sliced Design (FSD)** methodology — a modern approach to frontend application architecture that ensures high scalability and code maintainability.

### Layer Structure:

```
src/
├── app/          # Application initialization, routing, global styles
├── pages/        # Application pages (main, genres, movie, profile)
├── widgets/      # Complex composite blocks (header, footer, movie details)
├── features/     # Business features (search, favorites, authentication)
├── entities/     # Business entities (movie, genre, user)
└── shared/       # Reusable code (UI-kit, API, helpers, hooks)
```

### Technology Stack:

- **React 18** — library for building user interfaces
- **TypeScript** — typed JavaScript for code reliability
- **Redux Toolkit** — global state management
- **React Router 7** — routing and navigation
- **React Hook Form** — form management with validation
- **Zod** — data validation schemas
- **Vite** — fast bundler and dev server
- **SCSS Modules** — modular styles with preprocessor
- **Swiper** — carousels and sliders
- **React Player** — video player for trailers

## 🚀 Getting Started

### Prerequisites

- Node.js version 18 or higher
- Yarn version 1.22 or higher

### Install Dependencies

```bash
yarn install
```

### Run Development Server

```bash
yarn dev
```

The application will be available at: `http://localhost:5173`

### Build for Production

```bash
yarn build
```

Built files will be located in the `dist/` folder

### Preview Production Build

```bash
yarn preview
```

## 🛠️ Additional Commands

### Linting and Formatting

```bash
# ESLint code check
yarn lint:eslint

# Stylelint style check
yarn lint:style

# Architecture check (FSD)
yarn lint:steiger

# Code formatting with Prettier
yarn format
```

## 📡 API

The application uses the CinemaGuide API.

**API Documentation:** [https://cinemaguide.skillbox.cc/docs/](https://cinemaguide.skillbox.cc/docs/)

### API Features:

- Session-based authentication using cookies
- Automatic inclusion of credentials in requests (`credentials: 'include'`)
- Session persistence on page reload
- Automatic session termination on timeout

## 📝 Code Requirements

The project follows clean code principles and style guide:

- **PascalCase** for component names and component files
- **camelCase** for variables and functions
- Component names — nouns (what they display)
- Function names — verbs (what they do)
- Maximum function length — 20 lines
- Maximum nesting — 3 levels
- No transliteration or abbreviations in names

## 🎨 Design

The application design follows Figma mockups provided by project partners. The interface is responsive and optimized for various screen sizes.

## 📄 License

Educational project developed as part of the Skillbox course.
