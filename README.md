# Career Readiness Portfolio

A static site that tracks a 60-day self-study path into Linux Administrator / Cloud Engineer / Junior DevOps Engineer roles — daily log, skills matrix, and 8 hands-on projects.

No build tools, no framework, no backend. Plain HTML/CSS/JS. Hosts free on GitHub Pages.

---

## 1. One-time setup (15 minutes)

1. Create a new **public** GitHub repo, e.g. `career-readiness`.
2. Upload these files to the repo root:
   - `index.html`
   - `log.html`
   - `data.js`
   - `pdfs/` folder (put a `.gitkeep` file in it so Git tracks the empty folder)
3. In the repo: **Settings → Pages → Source → Deploy from branch → main → / (root) → Save**.
4. Wait ~1 minute. Your site is live at:
   `https://<your-username>.github.io/career-readiness/`
5. Update the footer links in `index.html` (GitHub / LinkedIn / email) to your real profiles.

That's it. You never touch `index.html` or `log.html` again unless you want to change the design.

---

## 2. Daily workflow (2 minutes, every day you study)

Open `data.js` and add ONE new object to the **top** of the `LEARNING_LOG` array:

```js
{
  day: 4,
  date: "2026-07-09",
  level: "info",           // "ok" = milestone/confident, "info" = normal day, "warn" = struggled/revisit
  tag: "LINUX.SHELL",      // TOPIC.SUBTOPIC format — keep it short
  summary: "One sentence: what you actually did, in your own words.",
  pdf: null                // or "pdfs/day04-shell-basics.pdf" if you saved a lesson PDF
},
```

Then:
```bash
git add data.js
git commit -m "Day 4 log entry"
git push
```

GitHub Pages redeploys automatically. Your site updates within ~60 seconds.

**Rule of thumb:** the summary should describe what you actually ran or built, not "studied X." If you can't write a one-sentence real summary, that's a signal the day's review gate hasn't actually been closed yet — go back and produce real output before logging it.

---

## 3. Adding a lesson PDF

1. Save the PDF Claude gives you into the `pdfs/` folder, named like `day04-shell-basics.pdf`.
2. Reference it in that day's log entry: `pdf: "pdfs/day04-shell-basics.pdf"`.
3. Commit and push both the PDF and the `data.js` change together.

---

## 4. Updating project status

As you complete each of the 8 curriculum projects, find it in the `PROJECTS` array in `data.js` and update:
```js
status: "in-progress",   // or "done"
repo: "https://github.com/you/project1-linux-server-setup"
```

---

## 5. Updating skills

In the `SKILLS` array, move items from `"learning"` → `"practiced"` (after hands-on reps) → `"confident"` (interview-ready). Be honest — this matrix is for your own tracking as much as for recruiters, and an inflated skills list falls apart in a technical interview.

---

## 6. Weekly ritual (do this every 7th day)

- Update `currentDay` in the `CURRICULUM` object at the top of `data.js`.
- Skim your last 7 log entries — are they specific, or vague? Tighten any that just say "studied X."
- Post a short LinkedIn update linking to `log.html` for that week's entries.

---

## File structure

```
career-readiness/
├── index.html      # homepage — do not edit day-to-day
├── log.html         # full log view — do not edit day-to-day
├── data.js          # <-- YOU EDIT THIS FILE DAILY
├── pdfs/            # lesson PDFs you save here
│   └── .gitkeep
└── README.md
```
