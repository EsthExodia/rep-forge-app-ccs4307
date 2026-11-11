# RepForge

Build your routine. Forge your progress.

RepForge is a workout planner and progress tracker inspired by Hevy. It runs entirely in the browser with plain HTML, CSS and JavaScript (no build step, no dependencies).

## Features

- **Login and registration** with input validation (accounts are stored in the browser's localStorage)
- **Demo account** with sample workout history
- **Exercise library** of 37 built-in exercises, searchable and filterable by muscle group, each with form cues and a link to video tutorials
- **Suggested templates**: Full Body Starter, Upper / Lower, Push / Pull / Legs, 5×5 Strength A & B, Big Three, Dumbbells Only
- **Custom routines** built from the exercise library
- **Workout logger** with kg / reps per set, previous performance, add/remove sets and exercises, workout timer and rest timer
- **Dashboard** with weekly workouts, volume, streak, personal records and an 8-week volume chart
- **History** and **Profile** with best lifts
- Responsive layout (desktop sidebar, mobile bottom tab bar) with light and dark mode

## Project structure

```
index.html   page markup (auth screen + app shell)
style.css    all styles
app.js       data (exercises, templates), auth, views and workout logic
```

## Run locally

Open `index.html` in a browser. That's it.

## Deploy with GitHub Pages

1. Push these files to the root of a GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then **Save**.
4. After a minute the site is live at `https://<your-username>.github.io/<repo-name>/`.

## Notes

This is a front-end prototype. Accounts and workouts are saved only in the current browser's localStorage, and passwords are hashed with SHA-256 on the client, which is not secure for production. A real release would move authentication and data to a backend (for example Firebase or Supabase).

## Team

- Baldeo, Oliver
- Franco, Richard Andrei
- San Jose, Steven Lee
- Tiburcio, Christian Addison
