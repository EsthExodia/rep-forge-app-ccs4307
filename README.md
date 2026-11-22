# RepForge

Build your routine. Forge your progress.

RepForge is a workout planner and progress tracker inspired by Hevy. It runs entirely in the browser with plain HTML, CSS and JavaScript (no build step, no dependencies).

## Features

- **Login and registration** with gender and birthday (age must be 13+), plus input validation (accounts are stored in the browser's localStorage)
- **Goal setup after sign-up**: users pick one or more goals (lose fat, build muscle, get stronger, gain weight, stay fit; conflicting goals like lose fat + gain weight can't be combined), their experience level, the exact weekdays they can train (changeable later) and optional bodyweight
- **Personalised plan**: recommended routines and a weekly schedule based on the goal, daily protein and calorie targets (calories adjusted for gender and age), rep ranges, and nutrition / training / recovery tips
- **Optional 12-week plan**: users choose during setup (or later from Home / Progress) whether to follow a plan. While following, Home, Workout, the sidebar and the logger show the current week and today's plan workout, with weights pre-filled
- **Progress tab with periodization**: a 12-week training block (strength, hypertrophy, fat-loss or foundation, based on the main goal) split into 3 phases with planned deload and test weeks; each week shows sets × reps @ % of 1RM, reps in reserve, and working weights for your main lifts
- **Day-by-day plan navigator**: browse any day of the plan (e.g. Block 1 › Week 3 › Day 3) with dates, previous/next buttons and Done / Upcoming / Not logged status
- **Week-by-week workouts**: every session in the selected week with plain sets × reps × kg for main lifts and accessories, plus a button to start it pre-filled in the logger
- **Glossary** of 44 training and nutrition terms (1RM, RIR, deload, recomp, etc.); key terms across the app are tappable for a quick definition
- **Predictive lift projections**: estimated 1RM (Epley formula) from logged sets, projected forward using your trend, experience level and goal, shown on a chart
- **Goal tracking**: set lift goals (e.g. 100 kg bench) and a bodyweight goal; RepForge predicts when you'll reach them, and you can log weigh-ins
- **Demo account** with sample workout history
- **Exercise library** of 37 built-in exercises, searchable and filterable by muscle group, each with form cues and a link to video tutorials
- **13 suggested templates**: Full Body Starter, Fat Burn Circuit, Mass Builder, Total Body Fitness, Upper / Lower, Push / Pull / Legs, 5×5 Strength A & B, Big Three, Dumbbells Only
- **Custom routines** built from the exercise library
- **Workout logger** with kg / reps per set, previous performance, add/remove sets and exercises, workout timer and rest timer
- **Dashboard** with weekly workouts, volume, streak, personal records and an 8-week volume chart
- **History** and **Profile** with best lifts
- Responsive layout (desktop sidebar, mobile bottom tab bar) with light and dark mode

## Free vs Premium (freemium model)

| Feature | Free | Premium |
|---|---|---|
| Workout logging, history, exercise library, templates, goal tips | ✓ | ✓ |
| Custom routines | Up to 3 | Unlimited |
| 12-week periodized plan | – | ✓ |
| Lift projections, goal predictions, bodyweight tracking | – | ✓ |
| Monthly training reports | – | ✓ |
| Custom app colors | – | ✓ |

Premium costs ₱149/month or ₱1,290/year. Promo codes: `STUDENT20` (20% off), `FORGE10` (10% off).

- **Pricing page** with monthly/yearly toggle and a feature comparison
- **Checkout (transaction) page**: billing choice, card or e-wallet (GCash / Maya), promo codes, order summary with 12% VAT, input validation (Luhn check, expiry, CVC, PH mobile number)
- **Receipts and billing**: receipt after payment, billing history and receipts in Profile, cancel / resume subscription

> The checkout is a **simulation** for the prototype. No payment is processed and nothing leaves the browser. Use the test card `4242 4242 4242 4242`, any future expiry and any 3-digit CVC.

## Admin console

Log in with **admin@repforge.app / admin1234**.

- **Overview**: total users, Premium members and conversion, MRR, revenue this month and all-time, workouts logged, 6-month revenue chart, plan mix, recent transactions and newest users
- **Users**: search and filter (Free / Premium / Disabled); manage a user to grant or revoke Premium, disable / enable the account, or delete it
- **Transactions**: search and filter, view receipts, refund payments (ends the subscription it paid for)

The first admin login adds clearly labelled sample accounts and payments so the dashboard has data to show; **Reset sample data** recreates them.

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
