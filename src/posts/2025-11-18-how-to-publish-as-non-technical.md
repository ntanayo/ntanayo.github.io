---
title: 'How a Non-Technical User Can Start Publishing Posts (Step-by-step)'
date: 2025-11-18
slug: how-to-publish-as-non-technical
categories: [getting-started]
tags: [workflow, publishing, non-technical]
draft: false
---

This guide shows, step-by-step, how a non-technical person can maintain and publish posts to this GitHub-hosted blog.

Overview

- This site publishes automatically when the repository receives changes on `main` (a build runs and deploys to GitHub Pages).
- You will write blog posts as Markdown files and then push those files to the repository. No deep technical setup is required after the initial repository is configured.

Step 1 — Edit a new post

- Create a new Markdown file in the `src/posts/` folder. Use this filename format: YYYY-MM-DD-your-title.md (for example 2025-11-18-my-first-post.md).
- At the top of the file add front matter (the metadata block) like this:

---

title: "My First Post"
date: 2025-11-18
slug: my-first-post
categories: [personal]
tags: [intro]
draft: false

---

Step 2 — Write the content

- Below the front matter, write your post using Markdown (headings, lists, links, images). Keep it simple — the site will render the Markdown for you.

Step 3 — Save and preview locally (optional but recommended)

- If you want to preview before publishing, run these commands on your computer (one-time setup: install Node.js):

  npm ci
  npm run dev

- Open the address shown in the terminal (usually http://127.0.0.1:3000) and review your post.

Step 4 — Commit and push (publish)

- Use your normal Git workflow (this could be Git on the command line or your Git GUI). Example commands:

  git add src/posts/2025-11-18-my-first-post.md
  git commit -m "Add: my first post"
  git push origin main

- Once the repository receives the push, the GitHub Actions workflow will build the site and publish the site to gh-pages. Wait a few minutes and then visit your site.

Step 5 — Troubleshooting (quick)

- Post not visible: make sure draft: false is present in the front matter.
- Build failed: open the Actions tab on GitHub, inspect the latest run logs, and copy any error message — it usually tells which file or package caused the issue.
- Comments not showing: follow the Utterances setup in the project README (install Utterances on the repo and set the utterancesRepo value).

If you'd like, I can create a simple template file you can copy each time you want to write a post, or I can add a short checklist file (POST_TEMPLATE.md) into the repo.
