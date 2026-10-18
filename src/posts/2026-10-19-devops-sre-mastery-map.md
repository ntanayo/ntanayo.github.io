---
title: 'The DevOps Academy Way: A Hierarchical Mastery Map for DevOps/SRE (Math Academy Style)'
date: 2026-10-19
slug: devops-sre-mastery-map
categories: [career, devops]
tags: [devops, sre, mastery, roadmap, learning, math-academy]
draft: false
---

Can you become a DevOps/SRE engineer using [DevOpsLabs](https://devopslabs.dev/), [Killercoda](https://killercoda.com/), [SadServers](https://sadservers.com/), [SwitchLab](https://switchlab.dev/), a mastery-based school like [Launch School](https://launchschool.com), and LLMs as your tutors — in an era where the best AI models can seemingly do any dev task?

**Short answer: yes — but only if you train for the part AI can't do.** LLMs have collapsed the value of _generating_ YAML, pipelines, and boilerplate. They have _raised_ the value of judgment: knowing why a system fails, what "correct" looks like, and whether the AI's confident answer is actually right. That judgment is exactly what a Math Academy–style, mastery-gated, fundamentals-first curriculum builds.

This post is that curriculum. I studied [The Math Academy Way](https://www.justinmath.com/files/the-math-academy-way.pdf) (Skycak & Roberts), researched the four platforms above plus the wider 2026 ecosystem, and distilled everything into a **knowledge tree for DevOps/SRE** with explicit **mastery gates** — no timeline, just _start here, prove this, then go there_.

![A branching tree, like a knowledge graph](https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80)
_Photo by Luca Bravo on Unsplash_

---

## Part 1 — The Math Academy Way, in Five Ideas

Math Academy's entire system rests on a handful of learning-science principles. Here they are, translated for infrastructure:

### 1. The Knowledge Graph

Math is hierarchical: you cannot do calculus with shaky algebra. MA encodes every topic as a node in a graph, linked to its **prerequisites**. Struggle is never treated as "you're not smart" — it's diagnosed as _a missing prerequisite_, and the system drops you down the tree until you find solid ground, then climbs back up.

DevOps/SRE is the same shape. "Kubernetes is confusing" is almost never a Kubernetes problem — it's a missing container, networking, or Linux prerequisite. **You don't need more K8s tutorials; you need to find your gap and fill it.**

### 2. Mastery-Based Learning (MBL)

You advance only when you **pass an objective assessment** — not when a video ends. MA uses quizzes with spaced-repetition retesting; Launch School uses 1-on-1 oral technical interviews and live assessments. Illusion of comprehension ("I watched it, I get it") is the enemy; **productive struggle** is the mechanism.

For us: every node in the tree below has a **gate** — a concrete, objective test. No gate passed, no advancing. The four platforms you listed are, conveniently, the perfect gate infrastructure: Killercoda and DevOpsLabs are the _practice_, SadServers is the _exam under pressure_, SwitchLab is the _networking gym_.

### 3. Spaced Repetition

Mastery decays without review. MA re-tests old material on a spaced schedule. You should keep an **Anki deck**: every incident you fix, every `kubectl`/`iptables`/`systemd` fact that surprised you becomes a card. 10 minutes a day, forever.

### 4. Diagnostic Placement

MA starts with a placement exam so nobody wastes months relearning what they know — and nobody skips foundations they _think_ they know. Part 3 below is your **self-diagnostic** for DevOps/SRE.

### 5. Effortful Practice Beats Comfortable Consumption

"There is no such thing as effortless learning." Passive video-watching produces the _illusion_ of competence. Timed, broken, adversarial systems (SadServers) produce real competence. **The ratio that matters: at least 70% hands-on, 30% reading/watching.**

---

## Part 2 — Your Four Platforms, Correctly Positioned

In Math Academy terms, each platform is a _layer of the system_, not a curriculum:

| Platform                              | MA Analogy                       | Role                                                                                                                                                                                                                                     |
| ------------------------------------- | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [SwitchLab](https://switchlab.dev/)   | Prerequisite branch (networking) | The **networking gym**: simulated Cisco/Juniper/Arista/Palo Alto CLIs with a structured CCNA roadmap and an AI tutor that nudges instead of solves. Networking is the #1 hidden prerequisite in DevOps — this is where you fix that gap. |
| [DevOpsLabs](https://devopslabs.dev/) | Scaffolded lessons               | **Guided practice on real machines** in your browser: 200+ rooms from first shell command → Docker → production Kubernetes, plus "broken server" incident challenges and timed CKA/CKAD simulators. This is your _lesson layer_.         |
| [Killercoda](https://killercoda.com/) | Problem sets                     | Free browser labs across the whole CNCF universe (K8s, Helm, Istio, Argo, Prometheus, Terraform/OpenTofu, Ansible, Falco…) plus CKA/CKAD/CKS/LFCS prep scenarios. This is your _drill layer_ — breadth on demand.                        |
| [SadServers](https://sadservers.com/) | Quizzes & exams                  | "LeetCode for SysAdmins": 125+ broken real servers, fixed against a timer, used by actual companies as hiring assessments. This is your **gate layer** — objective proof you can perform under pressure, exactly like an SRE interview.  |

**And Launch School?** It is not a DevOps school — it trains software engineers. But its _pedagogy_ (mastery-based assessments, bottom-up fundamentals, "learn things that don't change", Explore → Plateau → Professional phases) is **more** applicable to SRE than to frontend dev, because SRE _is_ deep systems fundamentals plus judgment. Two ways to use it:

1. **Enroll** (Core, $199/mo) if you lack programming fundamentals — its bottom-up Ruby/JS/Python/SQL/HTTP curriculum is a genuine Level-3 accelerator.
2. **Steal the method** if you can't/won't enroll: gate every topic behind an assessment-style proof (oral explanation, live build-from-scratch, cold troubleshooting), favor fundamentals over tool churn, and accept that mastery takes 1,000+ hours, not a 6-week bootcamp.

---

## Part 3 — The Diagnostic: Place Yourself in the Tree

Before starting, spend one evening placing yourself. For each question, answer honestly **without looking anything up**. The first "no" is your entry point.

1. Can you explain what happens between typing a URL and seeing a page — DNS, TCP handshake, TLS, HTTP, rendering? _(If no → Level 2)_
2. Can you navigate Linux purely from the shell — permissions, processes, `systemd` services, logs, `grep/awk/sed`, disk and memory inspection? _(If no → Level 1)_
3. Can you write a 100-line Python or Bash program that calls an API, parses JSON, and handles errors? _(If no → Level 3)_
4. Can you build a Docker image from a multi-stage Dockerfile and explain layers, networks, and volumes? _(If no → Level 4)_
5. Can you deploy and debug an app on Kubernetes — pods, services, ingress, probes, RBAC — and fix a CrashLoopBackOff cold? _(If no → Level 5)_
6. Can you provision real cloud infrastructure with Terraform — state, modules, plan/apply — and explain a VPC, subnets, SGs, IAM? _(If no → Level 4/6)_
7. Have you built a full CI/CD pipeline and a GitOps deployment yourself? _(If no → Level 6)_
8. Can you define an SLO, write Prometheus queries, build a Grafana dashboard, and run an incident postmortem? _(If no → Level 7)_
9. Can you explain consensus, replication, partitions, and consistency trade-offs from first principles? _(If no → Level 8)_
10. Can you fix a multi-failure SadServers Pro scenario within its time limit, with no AI? _(If no → Level 9)_

---

## Part 4 — The Knowledge Tree

Here is the full hierarchy. Each level lists **nodes** (topics), **materials**, and a **GATE** — the objective assessment you must pass before climbing. Prerequisite arrows mirror Math Academy's knowledge graph:

```
                        ┌─────────────────────────────┐
                        │  L9. MASTERY / SPECIALIZATION│
                        │  Platform Eng · AI Infra ·   │
                        │  Security · Architecture     │
                        └──────────────▲──────────────┘
                                       │
              ┌────────────────────────┴───────────────────────┐
              │  L8. DISTRIBUTED SYSTEMS & PERFORMANCE          │
              │  DDIA · Systems Performance · Database Internals│
              └────────────────────────▲───────────────────────┘
                                       │
              ┌────────────────────────┴───────────────────────┐
              │  L7. SRE PRACTICE                               │
              │  SLOs · Observability · Incidents · Chaos       │
              │  (SRE Book · Workbook · Prometheus · OTel)      │
              └────────────────────────▲───────────────────────┘
                                       │
        ┌──────────────────┬───────────┴──────────┬─────────────────┐
        │ L6. CI/CD &      │ L5. CONTAINERS &     │ L4b. INFRA AS   │
        │ GITOPS           │ ORCHESTRATION        │ CODE & CLOUD    │
        │ pipelines,       │ Docker → K8s → CKA   │ AWS/GCP,        │
        │ ArgoCD, Actions  │ (DevOpsLabs,         │ Terraform, VPC, │
        │                  │  Killercoda)         │ IAM             │
        └────────▲─────────┴──────────▲──────────┴────────▲────────┘
                 │                    │                   │
                 └────────────────────┴───────────────────┘
                                      │
              ┌───────────────────────┴──────────────────────┐
              │  L4a. PROGRAMMING & TOOLING                   │
              │  Python/Bash/Go · Git · Algorithms basics     │
              │  (CS50 / Launch School Core / Missing Sem.)   │
              └───────────────────────▲──────────────────────┘
                                      │
        ┌─────────────────────────────┴─────────────────────────────┐
        │  L2. NETWORKING                  L1. LINUX & THE SHELL    │
        │  TCP/IP, DNS, HTTP, TLS,         processes, permissions,  │
        │  routing, switching, firewalls   systemd, logs, text tools│
        │  (SwitchLab, Hussein Nasser)     (Linux Journey, Bandit)  │
        └─────────────────────────────▲─────────────────────────────┘
                                      │
              ┌───────────────────────┴──────────────────────┐
              │  L0. HOW COMPUTERS WORK                       │
              │  CPU/memory/storage · OS basics · binary      │
              │  (optional depth: Nand2Tetris, CS50)          │
              └──────────────────────────────────────────────┘

  Cross-cutting loops (run continuously at every level):
  ◄► SPACED REPETITION (Anki deck, 10 min/day)
  ◄► HOME LAB (build it, break it, document it)
  ◄► SADSERVERS (the exam layer — gates between levels)
  ◄► WRITE & TEACH (blog posts, oral explanations)
```

---

### L0 — How Computers Work _(optional depth)_

- **Nodes**: CPU, memory hierarchy, storage, processes vs threads, what an OS actually does.
- **Materials**: [CS50x](https://cs50.harvard.edu/x/) (free, Harvard), [Nand2Tetris](https://www.nand2tetris.org) (free, gates → OS) for the curious.
- **Why it's in the tree**: when an SRE interview asks "the server is slow, walk me through it," the answer starts at CPU scheduling and page caches, not at Grafana.
- **GATE**: Explain, out loud in 10 minutes, what happens from power-on to a running process; explain the difference between a process, a thread, and a container.

### L1 — Linux & the Shell

- **Nodes**: filesystem hierarchy, permissions/users, processes & signals, `systemd`, package management, logs (`journalctl`), text processing (`grep/awk/sed`), shell scripting basics, SSH, resource inspection (`top`, `ps`, `df`, `free`, `ss`, `lsof`).
- **Materials**:
  - [MIT Missing Semester](https://missing.csail.mit.edu) — **do this first, one week, free.** Shell, vim, git, tmux, debugging.
  - [Linux Journey](https://linuxjourney.com) — free structured text course.
  - [OverTheWire: Bandit](https://overthewire.org/wargames/bandit/) — free wargame; learn by playing.
  - [DevOpsLabs](https://devopslabs.dev/) Linux rooms — real machines in browser.
  - Book: _How Linux Works_ (Brian Ward); later, _The Linux Programming Interface_ (Kerrisk) as reference.
  - Killercoda Linux + Vim scenarios for drills.
- **GATE**: Pass the first ~10 **SadServers** Linux scenarios (start with "Sad Apache") within time limits, **no AI, no copy-paste from tutorials**. Then: debug a slow/broken machine cold — check CPU, memory, disk, network, logs in that order, narrating your reasoning.

### L2 — Networking

- **Nodes**: OSI model (as a _thinking tool_, not dogma), Ethernet/switching/VLANs, IP routing, NAT, DNS (deeply), TCP/UDP, HTTP/1.1–3, TLS, firewalls, load balancing, proxies, CDN basics, troubleshooting with `dig`, `curl -v`, `tcpdump`, `traceroute`, `ss`.
- **Materials**:
  - [SwitchLab](https://switchlab.dev/) — the CCNA roadmap labs (free tier + $22/mo): switching, routing, ACLs, network automation. You don't need the full CCNA, but you need its _mental model_.
  - [NetworkChuck](https://www.youtube.com/@NetworkChuck) (free, energetic intro) → [Hussein Nasser](https://www.youtube.com/@hnasr) (free, deep: DNS, TCP, proxies, backends).
  - Books: _Networking for System Administrators_ or _TCP/IP Illustrated Vol. 1_ for depth.
  - Killercoda networking scenarios for drills.
- **GATE**: Draw and explain the full path of an HTTPS request from browser to pod behind an Ingress (DNS → LB → NAT → Service → kube-proxy/iptables → container). Then diagnose a SadServers web-server scenario where the failure is network-shaped (wrong SG, broken DNS, bad route) in under 30 minutes.

### L4a — Programming & Tooling

_(Listed after networking because you can run L1/L2 in parallel with it; MA calls this an "encompassing" node — it turbo-charges everything above.)_

- **Nodes**: Python (primary), Bash (fluency), Go (optional, the language of cloud infra), Git (branching, rebasing, resolving conflicts, _why_), data structures & algorithms at an interview-survivable level, HTTP APIs, JSON, testing.
- **Materials**:
  - **Launch School Core** ($199/mo, mastery-based) if you want the full pedagogical treatment — its bottom-up approach and oral assessments are the gold standard.
  - Free path: CS50x → [Python for Everybody](https://www.py4e.com) → build CLI tools that do real ops work (log parsers, health checkers, API wrappers).
  - [donnemartin/system-design-primer](https://github.com/donnemartin/system-design-primer) (free) — later, at L7+.
  - Practice: automate everything you do manually in L1/L2. Every SadServers fix you perform twice becomes a script.
- **GATE**: Write, from scratch in a timed session: a script that reads a config file, calls a REST API, retries with backoff, parses JSON, and logs structured output — then write unit tests for it. Bonus gate: explain your code orally as if in a Launch School assessment.

### L4b — Cloud & Infrastructure as Code

- **Nodes**: one cloud deeply (AWS recommended for job volume; GCP/Azure fine), VPC/subnets/security groups/IAM, compute (EC2), storage (S3), managed DBs, DNS (Route53), billing alarms(!), then Terraform: state, modules, plan/apply, workspaces; secrets management (Vault or cloud KMS).
- **Materials**:
  - **AWS Free Tier** + [Cloud Resume Challenge](https://cloudresumechallenge.dev) — the canonical "prove it end-to-end" project.
  - [KodeKloud](https://kodekloud.com) or DevOpsLabs Terraform path; HashiCorp Learn (free).
  - Killercoda Terraform/OpenTofu scenarios.
  - Cert (optional, cheap, high ROI): **Terraform Associate** (~$79).
- **GATE**: Deploy the Cloud Resume Challenge **entirely with Terraform** (no console clicks), with a CI pipeline that applies changes on merge. Then: `terraform destroy` it and rebuild from zero in under an hour. Delete-and-rebuild is the IaC mastery test.

### L5 — Containers & Orchestration

- **Nodes**: container internals (namespaces, cgroups, images, layers, registries), Dockerfile best practices, Docker networking/volumes/compose; then Kubernetes deeply: pods, deployments, services, ingress, ConfigMaps/Secrets, probes, resources/limits, RBAC, networking (CNI), storage (PV/PVC), Helm, debugging (logs, events, `exec`, `port-forward`).
- **Materials**:
  - [DevOpsLabs](https://devopslabs.dev/) Docker → Kubernetes path (real clusters in browser, guided rooms + broken-server challenges).
  - [Killercoda](https://killercoda.com) Kubernetes scenarios — free, endless drills.
  - **Killer.sh** simulators (bundled with CKA registration) + DevOpsLabs exam simulators.
  - Cert (the big one): **CKA** (~$395, performance-based — it resists AI-cheating inflation, which is why it still signals real skill in 2026).
- **GATE**: Pass the **CKA** (or its simulator at ≥85% twice). Plus a cold gate: fix a CrashLoopBackOff, a broken Service selector, and an OOMKilled pod on SadServers/DevOpsLabs broken-cluster scenarios within time limits, narrating each diagnostic step.

### L6 — CI/CD & GitOps

- **Nodes**: pipeline design (build/test/scan/deploy), GitHub Actions or GitLab CI, artifacts & registries, environments & promotion, secrets in CI, GitOps with ArgoCD or Flux, progressive delivery (canary/blue-green), database migrations in pipelines.
- **Materials**: GitHub Actions docs + free minutes; Killercoda Argo/Flux/Tekton scenarios; _The DevOps Handbook_ and _Accelerate_ (the "why" — DORA metrics); the book that started it all: **_The Phoenix Project_** (read it as a novel at any point — best read here).
- **GATE**: Your homelab or cloud app ships via GitOps: commit → CI builds/tests/scans → merges → ArgoCD syncs → canary → auto-rollback on error budget burn. Break it deliberately (bad image, failing test) and show the system catches it.

### L7 — SRE Practice: Reliability, Observability, Incidents

- **Nodes**: SLIs/SLOs/error budgets, toil & automation, monitoring vs observability, metrics/logs/traces (Prometheus, Grafana, OpenTelemetry), alerting philosophy (symptom-based), incident command, blameless postmortems, chaos engineering & GameDays, capacity planning, on-call culture.
- **Materials** — the SRE canon, all **free online**:
  - [Site Reliability Engineering](https://sre.google/books/) (the Book) → _The Site Reliability Workbook_ → _Seeking SRE_ → _Building Secure & Reliable Systems_.
  - [Prometheus: Up & Running](https://prometheusbook.com) (free online), [Grafana Fundamentals](https://grafana.com/tutorials/) (free), [OpenTelemetry docs](https://opentelemetry.io/docs).
  - [PagerDuty Incident Response docs](https://response.pagerduty.com) (free, excellent), [principlesofchaos.org](https://principlesofchaos.org), _Chaos Engineering_ (Rosenthal & Jones, free online), _Observability Engineering_ (Majors et al., free online).
  - Killercoda: Prometheus, Grafana Labs, Thanos scenarios + the **ICA (Incident Commander Associate)** track.
- **GATE**: Instrument your homelab/GitOps app end-to-end: Prometheus scrape → Grafana dashboards → an SLO with an error budget → one symptom-based alert → run a **GameDay** (inject a failure with Chaos Mesh/LitmusChaos or just `kill -9`) → write a blameless postmortem. Publish the postmortem on your blog. Then explain SLOs vs SLAs orally, from first principles, in 5 minutes.

### L8 — Distributed Systems & Performance

This is the level that separates "tools operator" from **engineer** — and the level LLMs help you least with, because it's judgment, not artifacts.

- **Nodes**: replication, partitioning, consensus (Raft/Paxos), consistency models, CAP/PACELC (and why they're oversimplified), idempotency, queues/backpressure, caching layers & invalidation, failure modes (partial failure, metastable failure), latency analysis, profiling, Brendan Gregg's USE/RED methods, kernel & runtime performance.
- **Materials**:
  - **_Designing Data-Intensive Applications_** (Kleppmann) — the single most-recommended systems book; read it slowly, twice.
  - _Systems Performance_ (Brendan Gregg); _Database Internals_ (Petrov) for depth.
  - Hussein Nasser's backend/protocol lectures (free).
  - [donnemartin/system-design-primer](https://github.com/donnemartin/system-design-primer) — for turning knowledge into design-interview fluency.
- **GATE**: Whiteboard (out loud, recorded) the design of: a URL shortener's _deployment architecture_, a multi-region stateful service, and a Kubernetes platform for 50 dev teams — defending every trade-off. Plus: take one slow endpoint or pod in your homelab and produce a profiling writeup identifying the bottleneck with evidence (`perf`, `pprof`, `strace`, flame graphs).

### L9 — Mastery & Specialization

At this level the tree branches by _interest_, not necessity. Pick one or two:

- **Platform Engineering** (fastest-growing 2026 title): Internal Developer Platforms, golden paths, self-service — [Backstage](https://backstage.io), Crossplane, Kubernetes operators (write one in Go with kubebuilder).
- **AI Infrastructure / MLOps**: GPU orchestration on K8s, inference serving (vLLM, Triton), Kubeflow/Ray, vector databases, LLM observability (evals, drift, cost). This is where DevOps demand is _growing_ ~40% YoY.
- **Security (DevSecOps)**: **CKS** cert (after CKA), supply-chain security (SLSA, sigstore), Falco/OPA/Kyverno, secret scanning, zero-trust basics; _Building Secure & Reliable Systems_ (free).
- **Deep Performance / Kernel**: eBPF (Cilium, Pixie, bpftrace), kernel tuning — the Brendan Gregg endgame.
- **Mastery proof**: contribute to a CNCF project (start with docs/tests, then real PRs), answer questions in CNCF Slack / r/devops / r/sre, mentor someone through L1–L5, and speak or write publicly.

**The final mastery gate** (the "oral exam" of this academy): pass a SadServers **Pro+ scenario cold, timed, no AI**, then defend your approach to a skeptic. If you can do that, you can do the job.

---

## Part 5 — The Cross-Cutting Loops (Run These Always)

Math Academy doesn't just sequence topics — it wraps them in daily systems. So should you:

1. **Spaced repetition (10 min/day, Anki).** Every surprising fact, every flag, every incident pattern → a card. MA's core insight: mastery without review decays; review makes it compound.
2. **The homelab (your "computation practice").** An old mini-PC/Raspberry Pis → Proxmox → k3s → Pi-hole + Prometheus/Grafana + ArgoCD + one real self-hosted app with backups and monitoring. Cheap alternative: Oracle Always-Free ARM instances or a Hetzner VPS. **Everything in the tree gets deployed here.** Document it on GitHub — interviewers love it.
3. **SadServers as the recurring exam.** MA re-tests old material constantly; you re-enter the pressure chamber monthly. It's also literal interview prep — companies use it to hire.
4. **Write & teach (the oral-assessment loop).** After every level: one blog post explaining what you learned _from first principles_, as if teaching it. If you can't write it clearly, you haven't passed the gate — that's the Launch School/MA assessment principle applied to yourself. (You're reading one such post. This blog is the loop.)
5. **The AI discipline (2026-specific).** This deserves its own rules:
   - **Build manual first, AI second.** Learn each node _without_ LLMs (that's what creates the mental model), then use LLMs to go faster. Engineers who never built the model can't catch AI errors — and _reviewing AI output is now the job_.
   - **Use AI as your Socratic tutor, not your ghostwriter.** SwitchLab's "Tinky" tutor has the right idea: nudge, don't solve. Prompt the same way: "Ask me questions until I find the bug myself."
   - **Debug cold regularly.** Timed, no-AI troubleshooting (SadServers) is the antidote to skill atrophy.
   - **Aim at the growth zones**: platform engineering, AI infra, AIOps — where AI _increased_ demand rather than replacing it (~73% of orgs report higher DevOps/cloud demand post-AI).

---

## Part 6 — The Concrete Map: Start Here

No timeline — a traversal order. Each step ends at its **GATE**; you don't move until you pass.

**The trunk (everyone, in order):**

1. **MIT Missing Semester** (1 week) → _L0/L1 basics_
2. **Linux Journey + OverTheWire Bandit + DevOpsLabs Linux rooms** → **GATE: SadServers "Sad Apache" + first 10 Linux scenarios, timed, no AI**
3. **SwitchLab networking roadmap (through routing & ACLs) + Hussein Nasser DNS/TCP/HTTP videos** → **GATE: narrate the URL→pod path; fix a network-shaped SadServers scenario <30 min**
4. **Programming: Launch School Core** _(or CS50x → py4e if free path)_ **→ automate your L1/L2 work** → **GATE: timed CLI tool with tests, explained orally**
5. **Read _The Phoenix Project_** (a week of evenings; the "why" behind everything)
6. **Docker: DevOpsLabs Docker path + Killercoda drills** → **GATE: multi-stage build, explain layers/networks/volumes cold**
7. **Kubernetes: DevOpsLabs K8s path → Killercoda scenarios → CKA prep (Killer.sh + DevOpsLabs simulators)** → **GATE: CKA passed + cold CrashLoopBackOff/OOMKill/Service debugging**
8. **Cloud + Terraform: AWS Free Tier → Cloud Resume Challenge, 100% IaC** → **GATE: destroy-and-rebuild from zero <1 hour; Terraform Associate (optional)**
9. **CI/CD + GitOps: GitHub Actions → ArgoCD on your resume/homelab app** → **GATE: commit-to-prod with canary + auto-rollback; break it, show it catches**
10. **SRE canon: SRE Book → Workbook; instrument everything (Prometheus/Grafana/OTel); run a GameDay** → **GATE: SLO + error budget + postmortem published on your blog**
11. **DDIA (slowly) + system-design-primer** → **GATE: recorded whiteboard defenses of 3 infra designs + one profiling writeup**
12. **Specialize (L9): platform eng / AI infra / security** → contribute to a CNCF project, mentor, write.

**The daily/weekly loops running underneath, from day one:** Anki (daily) · homelab (weekly) · SadServers re-tests (monthly) · blog post (per level) · r/devops + CNCF Slack (lurk → participate).

**Total honest cost:** free-to-cheap. Missing Semester, Linux Journey, Bandit, SRE books, Prometheus book, Observability Engineering, Chaos Engineering, system-design-primer, AWS Free Tier — all $0. Paid accelerants: DevOpsLabs (~$24/mo), SadServers Pro+ ($249 lifetime), SwitchLab ($99/yr), KodeKloud (~$30/mo, optional), CKA ($395), Launch School ($199/mo, optional). You can do the entire trunk for under $1,000.

---

## Part 7 — The Honest Answer on "AI Can Do Any Task"

The 2026 data: entry-level DevOps postings have thinned (~2.5% of market) because LLMs absorbed the boilerplate work, while mid/senior demand _grew_, and the fastest-growing titles — Platform Engineer, AI Infrastructure Engineer — are DevOps descendants. The work shifted from _writing manifests_ to _judging systems_: architecture, failure modes, security posture, cost, and catching the AI's confident mistakes.

That's precisely why the Math Academy Way is the right model now:

- **Knowledge graphs beat tutorials** because judgment requires connected fundamentals, and connected fundamentals can't be prompted into existence.
- **Mastery gates beat completion certificates** because "I can fix it cold, timed, under pressure" is the one claim AI can't make for you — and SadServers-style assessment _proves_ it.
- **Spaced repetition and struggle** build the retrieval strength that makes an engineer fast in an incident at 3 a.m.

Math Academy's promise was that with the right system, ordinary students reach extraordinary mastery — from arithmetic to real analysis — because the _method_, not talent, was the bottleneck. The same is true here. The tree above is long, but every node has been reached by thousands of ordinary people. The gates make it honest; the loops make it stick; the struggle makes it yours.

Start at Level 1, tonight: `ssh` into Bandit and take level 0 → 1. Then come back and tell me what surprised you — that surprise is your first Anki card.

---

### Appendix — Full Resource Index

**Books (free unless noted):** SRE Book, SRE Workbook, Seeking SRE, Building Secure & Reliable Systems (sre.google/books) · Prometheus: Up & Running (prometheusbook.com) · Observability Engineering (O'Reilly, free online) · Chaos Engineering (O'Reilly, free online) · The Phoenix Project, Unicorn Project, DevOps Handbook, Accelerate (paid) · DDIA (paid) · How Linux Works, The Linux Programming Interface, Systems Performance, Database Internals (paid/reference)

**Platforms:** devopslabs.dev · killercoda.com · sadservers.com · switchlab.dev · kodekloud.com · linuxjourney.com · overthewire.org · tryhackme.com · missing.csail.mit.edu · cs50.harvard.edu · nand2tetris.org · cloudresumechallenge.dev · launchschool.com

**Repos & maps:** github.com/bregman-arie/devops-exercises · github.com/donnemartin/system-design-primer · roadmap.sh/devops · landscape.cncf.io (+ Trailmap) · Michael Cade's 90DaysOfDevOps · principlesofchaos.org · response.pagerduty.com

**Certs worth it (in order):** Terraform Associate ($79) → CKA ($395) → CKS (after CKA) → AWS SysOps/DevOps Pro (optional). Skip cert-collecting; 1–2 performance-based certs + homelab + SadServers ranking beats five multiple-choice badges.

**Communities:** r/devops · r/sre · r/kubernetes · r/homelab · CNCF Slack (slack.cncf.io) · SRECon talks · KubeWeekly / DevOps'ish newsletters
