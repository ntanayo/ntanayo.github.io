---
title: 'The DevOps/SRE Way: A Knowledge Tree for Mastery in the Age of AI'
date: 2026-10-19
slug: devops-sre-way-knowledge-tree-mastery
categories: [devops, sre, learning, career]
tags:
  [devops, sre, mastery-learning, knowledge-graph, linux, kubernetes, learning-science, ai, career]
draft: false
---

Two questions keep coming up:

1. Can I become a DevOps engineer or SRE using DevOpsLabs, Killercoda, SadServers, SwitchLab, and maybe Launch School?
2. In an era where the best LLMs can do a growing share of a developer's work, is it even worth learning the craft?

The short answer to both is **yes — but not by completing a playlist**.

The longer answer is the subject of this post. I want to take the learning science behind [The Math Academy Way](https://www.justinmath.com/files/the-math-academy-way.pdf) — knowledge graphs, mastery learning, deliberate practice, spacing, interleaving, retrieval — and translate it into a concrete, prerequisite-ordered map for DevOps and SRE. Not a timeline. A **tree you can climb**, with **gates you must pass**, and **proof that you actually know the thing** rather than merely recognizing it.

This is the guide I wish existed when I started collecting tabs, courses, and certifications.

---

## The honest verdict on the sources

All five sources are useful. None of them is a curriculum by itself. They are **problem sets, gyms, and exam simulators**. The curriculum is the graph that tells you which one to use, when, and why.

| Source                                                            | What it is genuinely good for                                                                                                                                               | What it cannot do alone                                                                                                                                   |
| ----------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **DevOpsLabs** ([devopslabs.dev](https://devopslabs.dev/))        | Guided rooms plus open "fix the broken server" challenges. Real disposable VMs. A clear zero-to-production roadmap. CKA/CKAD paths and timed exam simulators.               | It is a solo-built product, and room counts change. It is practice, not theory. You still need books/docs and projects.                                   |
| **Killercoda** ([killercoda.com](https://killercoda.com/))        | Enormous browser-lab catalog: Linux, Docker, Kubernetes, Helm, Argo, Istio, OpenTofu, Prometheus, Grafana, CKS, LFCS, CNPE. Free tier is generous. Check-button validation. | Quality varies because much content is community-authored. Free sessions are short. It is not a sequenced curriculum.                                     |
| **SadServers** ([sadservers.com](https://sadservers.com/))        | The best "LeetCode for Linux and DevOps" experience: real broken servers, Fix/Do/Hack scenarios, inspectable `check.sh`, clues, and a hiring-style assessment model.        | It is troubleshooting-shaped, not syllabus-shaped. Checks can be brittle, and solutions are paywalled.                                                    |
| **SwitchLab** ([switchlab.dev](https://switchlab.dev/))           | Deep networking practice in the browser with vendor CLIs: VLANs, STP, routing, ACLs, OSPF, automation. CCNA and JNCIA paths.                                                | Networking only. It will not teach you Linux, containers, Kubernetes, IaC, or observability.                                                              |
| **Launch School** ([launchschool.com](https://launchschool.com/)) | Mastery-based software engineering fundamentals with human-graded assessments: programming, networking, databases, system design, cloud infrastructure in the Capstone.     | It is not a DevOps/SRE path. No Kubernetes, Terraform, CI/CD, or observability in the published core. It is also a serious financial and time commitment. |

**The verdict:** yes, you can reach employable DevOps/SRE competence with these sources — if you add four things they do not provide:

1. **Canonical theory** (the books and docs that explain the invariants).
2. **One real cloud account** (free tier is enough at first).
3. **A portfolio of systems you built, broke, and fixed**.
4. **Writing and speaking about what you did** (the teach-back that exposes fake understanding).

The platforms are the gym. The graph is the coach. The gates are the exams. AI is a training partner that can spot you — and occasionally lie to your face.

---

## Why "finishing a course" does not produce mastery

Most people who stall in DevOps do not stall because they lack resources. They stall because they confuse **familiarity** with **learning**.

Watching a Kubernetes course feels like progress. Following along with a Terraform tutorial feels like progress. Copying an LLM's YAML feels like progress. Then a real cluster fails at 2 a.m. and the feeling evaporates, because none of those activities built a durable model that can be retrieved under pressure.

The Math Academy Way is blunt about this: **learning is a change in long-term memory, not a feeling of comprehension**. If you cannot reproduce the thing cold, without notes, you have not learned it — you have only rented it.

DevOps has an extra trap: the tool surface changes fast, so it is easy to spend years collecting tools instead of building the stable mental models underneath them. The result is a résumé full of logos and a head full of fog.

The fix is not "study harder." It is to study **at the right altitude, in the right order, with the right verification**.

---

## The Math Academy Way, distilled

Here are the principles from the PDF that matter most, translated for our domain. I will use them as the design rules for the rest of this post.

| Principle                         | What it means in Math Academy                                                          | What it means for DevOps/SRE                                                                                                           |
| --------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| **Knowledge graph**               | Thousands of topics linked by prerequisites. A course is just a slice of the graph.    | Skills are nodes; prerequisites are edges. A job title is not a curriculum; it is a slice of a larger graph.                           |
| **Knowledge frontier**            | Teach at the edge of what the student has mastered (the zone of proximal development). | Attempt labs you are _almost_ ready for. Too easy is rehearsal; too hard is noise.                                                     |
| **Mastery learning**              | Demonstrate proficiency before advancing.                                              | Do not touch Kubernetes until Linux, networking, and containers are solid enough to debug.                                             |
| **Granular knowledge points**     | Each topic is broken into small, scaffolded pieces with worked examples.               | Break skills into **Verifiable Units**: one command, one artifact, one failure mode, one check.                                        |
| **Deliberate practice**           | Effortful repetition at the edge, with feedback, targeting specific weaknesses.        | Break/fix labs, timed incident drills, and blank-terminal rebuilds — not passive tutorials.                                            |
| **Automaticity**                  | Low-level skills become effortless, freeing working memory for higher-level reasoning. | Command fluency in Linux, Git, `kubectl`, `terraform`, and the shell is not optional. Syntax should not consume your diagnosis budget. |
| **Layering**                      | New topics exercise and reinforce earlier topics.                                      | Every project must reuse the previous layer. A K8s project should exercise Linux, networking, containers, and CI/CD.                   |
| **Non-interference**              | Do not learn confusable concepts together; space them out.                             | Do not learn Docker and Podman at once, or Terraform and Pulumi, or Istio and Linkerd. Learn one deeply, then the other.               |
| **Spaced repetition**             | Review at increasing intervals so knowledge is retained indefinitely.                  | Redo labs cold after days and weeks. Keep an incident card deck. Rebuild from memory.                                                  |
| **Interleaving**                  | Mix problem types so you learn to choose the right method, not just execute it.        | Mixed-topic incident drills teach diagnosis: "Is this DNS, TLS, CPU, or a bad deploy?"                                                 |
| **Retrieval practice**            | Test yourself; do not reread.                                                          | Close the tutorial. Rebuild the cluster. Fix the broken server with no notes. Explain it out loud.                                     |
| **Targeted remediation**          | When stuck, identify and repair the exact prerequisite.                                | When a lab fails, do not redo the whole course. Find the missing prerequisite — often DNS, permissions, or state.                      |
| **Cognitive load / scaffolding**  | Worked examples first, then gradually remove support.                                  | Tutorial → checklist → hints → blank terminal. The blank terminal is the real exam.                                                    |
| **Gamification / accountability** | XP, streaks, leaderboards, and closed loopholes.                                       | Use the platforms' points and badges, but tie progress to verified gates. Do not game the check script.                                |

The deepest idea is the **knowledge graph**. A course is a path through the graph. A certification is a set of nodes someone decided to test. A job is a set of nodes someone is willing to pay for. Mastery is not "finishing the graph." It is being able to **traverse it fluently** — to know what you know, what you do not, and what a failure implies.

---

## The DevOps/SRE Way: same science, different substrate

Math and DevOps are not identical, and pretending otherwise would produce a bad curriculum. There are three important differences.

### 1. The core is stable; the surface is volatile

Calculus does not release a new version every quarter. Kubernetes does. So the graph has two zones:

- **The stable core:** Linux, networking, distributed systems, reliability theory, security fundamentals, debugging method, communication.
- **The volatile surface:** tools, vendors, versions, certifications, dashboards.

Build mastery on the stable core. Learn the volatile surface **just in time**, and expect to relearn it. This is the single most important adaptation of the Math Academy model.

### 2. The unit of assessment is a system, not an answer

Math Academy verifies with questions. DevOps verifies with **reproducible outcomes on real machines**: a service that serves traffic, a pipeline that deploys and rolls back, a cluster that survives a node failure, an alert that fires for the right reason.

So the atomic unit of learning is not a flashcard. It is a **Verifiable Unit (VU)**:

```text
VU: Repair a service that is running but unreachable
Prerequisites: processes, sockets, systemd, firewall, DNS
Artifact: a working `curl` response and a systemd unit that survives reboot
Check: `systemctl is-active`, `ss -lntp`, `curl -v localhost:8080`
Failure modes: wrong bind address, firewall drop, missing env var, stale DNS
Encompassed by: "Checkout is down" incident (L5.3)
```

### 3. Incidents are the multi-part problems

Math Academy's multi-part problems pull together many earlier skills into one challenging context. In DevOps, that context already exists: **an incident**.

A single "checkout is down" incident can encompass Linux (disk full, OOM), networking (DNS, TLS, load balancer), containers (image pull, crash loop), Kubernetes (scheduling, probes, service endpoints), observability (metric, log, trace), and communication (incident command, status update, postmortem). That is why incident-shaped practice is the highest-leverage activity in this domain.

### The Mastery Gate: R2D2T

For every meaningful node, require five proofs. I call this the **R2D2T gate**:

| Proof         | Question                                             | DevOps example                                                     |
| ------------- | ---------------------------------------------------- | ------------------------------------------------------------------ |
| **Recall**    | Can you explain it from memory, without notes?       | Explain the path of an HTTP request from browser to pod.           |
| **Reproduce** | Can you do it from a blank environment?              | Build the cluster, deploy the app, and expose it with TLS.         |
| **Diagnose**  | Can you fix a deliberately broken version?           | Find why the Service has no endpoints.                             |
| **Transfer**  | Can you apply it in a new context?                   | Do it on a different cloud or with a different ingress controller. |
| **Teach**     | Can you write a runbook or teach it to someone else? | Write a 1-page postmortem and a preventive action.                 |

If you cannot pass all five, you have not mastered the node. You have only visited it.

### Find your frontier: a diagnostic

Before you start, place yourself. Do not begin at "the beginning" if you already have foundations; do not jump ahead if you do not.

| Can you do this, cold?                                                                   | If no, start at |
| ---------------------------------------------------------------------------------------- | --------------- |
| Navigate a Linux filesystem, pipe commands, edit with vim/nano, commit and push with Git | L0 — Soil       |
| Explain what happens between typing a URL and seeing a page (DNS → TCP → TLS → HTTP)     | L1 — Roots      |
| Find which process owns a port, read `journalctl`, write a systemd unit, fix a full disk | L1 — Roots      |
| Write a Dockerfile, debug a container that exits immediately, explain namespaces/cgroups | L2 — Trunk      |
| Provision a VPC, VM, database, and load balancer with Terraform, and explain state       | L2 — Trunk      |
| Build a CI pipeline that tests, builds, scans, deploys, and rolls back                   | L2 — Trunk      |
| Deploy to Kubernetes, debug `CrashLoopBackOff`, expose a Service, read events            | L3 — Branches   |
| Define an SLI/SLO and write a multi-window burn-rate alert                               | L4 — Canopy     |
| Explain replication, consensus, and a cascading failure                                  | L4 — Canopy     |
| Design a multi-region failover and defend the tradeoffs                                  | L5 — Fruit      |

Your frontier is the **lowest layer where the answer is "no."** Start there. Not at the layer that looks most impressive on LinkedIn.

---

## The knowledge tree

Here is the map. It is intentionally a tree, not a syllabus. The spine below is a default traversal; the graph is the source of truth, and you may branch when the prerequisites are satisfied.

```text
DEVOPS / SRE MASTERY
│
├── L0. SOIL — Environment literacy
│   ├── 0.1 Terminal, filesystem, pipes, processes
│   ├── 0.2 Editor and shell configuration
│   ├── 0.3 Git, GitHub, branches, pull requests
│   ├── 0.4 HTTP and the request lifecycle
│   └── 0.5 Markdown, docs, diagrams, writing
│
├── L1. ROOTS — Linux and networking (the non-negotiables)
│   ├── 1.1 Processes, signals, /proc, resource inspection
│   ├── 1.2 Files, permissions, users, ACLs
│   ├── 1.3 systemd, services, timers, targets
│   ├── 1.4 Logs, journald, log rotation
│   ├── 1.5 Packages, repositories, dependencies
│   ├── 1.6 Storage, filesystems, LVM, disk pressure
│   ├── 1.7 Boot, kernel basics, modules, sysctl
│   ├── 1.8 TCP/IP, ports, sockets, DNS
│   ├── 1.9 HTTP, HTTPS, TLS, certificates
│   ├── 1.10 SSH, keys, bastions, port forwarding
│   ├── 1.11 Routing, NAT, firewalls (iptables/nftables)
│   └── 1.12 Load balancing, reverse proxies, caching
│
├── L2. TRUNK — Build and ship
│   ├── 2.1 Scripting: Bash, then Python (later Go)
│   ├── 2.2 Containers: images, layers, runtimes
│   ├── 2.3 Container networking, volumes, security
│   ├── 2.4 Cloud foundations: one provider, deeply
│   ├── 2.5 IAM, identity, least privilege
│   ├── 2.6 VPC/networking, compute, storage, managed DBs
│   ├── 2.7 Infrastructure as Code: Terraform/OpenTofu
│   ├── 2.8 Configuration management: Ansible
│   ├── 2.9 CI/CD: pipelines, artifacts, environments
│   ├── 2.10 Registries, packaging, versioning
│   └── 2.11 Secrets, config, environment promotion
│
├── L3. BRANCHES — Run and observe
│   ├── 3.1 Kubernetes core: API, objects, control loop
│   ├── 3.2 Workloads, scheduling, requests/limits, probes
│   ├── 3.3 Services, Ingress, DNS, CNI, NetworkPolicy
│   ├── 3.4 Storage, StatefulSets, PV/PVC, state
│   ├── 3.5 Troubleshooting: events, logs, exec, debug
│   ├── 3.6 Helm, Kustomize, packaging
│   ├── 3.7 GitOps: Argo CD, Flux
│   ├── 3.8 Metrics: Prometheus, exporters, PromQL
│   ├── 3.9 Logs and traces: OpenTelemetry, Loki, Jaeger
│   ├── 3.10 Dashboards and alerting: Grafana, burn rates
│   ├── 3.11 Security and supply chain: CKS, Trivy, signing
│   └── 3.12 Policy as code: Kyverno, OPA/Gatekeeper
│
├── L4. CANOPY — Reliability and systems
│   ├── 4.1 SLI/SLO, error budgets, alerting philosophy
│   ├── 4.2 Incident command, on-call, runbooks
│   ├── 4.3 Blameless postmortems, learning, action items
│   ├── 4.4 Toil, automation economics, prioritization
│   ├── 4.5 Capacity planning, load testing, performance
│   ├── 4.6 Distributed systems: replication, consensus, failure
│   ├── 4.7 Data: databases, queues, caches, consistency
│   ├── 4.8 Chaos engineering and game days
│   ├── 4.9 Platform engineering and developer experience
│   └── 4.10 AI-era operations: LLM observability, agents, guardrails
│
└── L5. FRUIT — Mastery proofs
    ├── 5.1 The Hard Way cluster
    ├── 5.2 Production-grade platform
    ├── 5.3 Incident-response portfolio
    ├── 5.4 Open-source contribution
    ├── 5.5 Design review and architecture defense
    └── 5.6 Teach, write, mentor
```

Each layer unlocks the next. But the arrows are not strictly linear: once you have the prerequisites for a node, you can take it. That is the point of a graph.

---

## Build your own graph: the node card

You do not need a 60-node graph on day one. You need a **card** for every skill you are currently trying to own. Write one card per node in a plain Markdown file (or Obsidian/Logseq if you prefer). The act of writing the card is itself retrieval practice.

```markdown
# Node: Kubernetes Service has no endpoints

## Prerequisites

- Linux processes and sockets (1.1)
- TCP/IP and DNS (1.8)
- Container networking (2.3)
- Kubernetes Services and selectors (3.3)

## Key prerequisite for remediation

- Label/selector matching, readiness probes

## Artifact

- A Service that routes traffic to a healthy pod, verified from inside the cluster

## Verification

- `kubectl get endpoints <svc>`
- `kubectl get pods --show-labels`
- `kubectl describe svc <svc>`
- `kubectl exec ... -- nslookup <svc>`
- `kubectl logs` on the failing pod

## Failure modes

- Selector mismatch
- Readiness probe failing
- Wrong targetPort
- NetworkPolicy dropping traffic
- CoreDNS down

## Encompassed by

- "Checkout is down" incident (5.3)

## Gate

- R2D2T: recall the lookup path, reproduce a working Service,
  diagnose a broken one, transfer to a different namespace,
  and teach it in a runbook.
```

When you have 20–30 of these cards, you have a personal knowledge graph. When you fail a lab, open the card and repair the **key prerequisite**, not the whole subject. That is targeted remediation in practice.

Prune the graph as you go. Some nodes collapse into others. Some tools become irrelevant. The stable core stays; the volatile surface churns. That is normal, and it is the point.

---

## The spine: what to start with, and what comes next

If you want a default traversal, use this. It is ordered by prerequisites, not by calendar. Treat each step as a **gate**, not a week.

### Step 0 — The soil

- **Read:** [MIT's The Missing Semester](https://missing.csail.mit.edu/) (shell, command-line environment, Git, debugging). Skim the HTTP chapter of any networking primer.
- **Do:** [OverTheWire Bandit](https://overthewire.org/wargames/bandit/) levels 0–15, [Learn Git Branching](https://learngitbranching.js.org/), and create a GitHub repository with a real README.
- **Gate:** From a blank terminal, create a repo, branch, commit, push, and explain what a branch is. No notes.
- **Unlocks:** everything.

### Step 1 — Linux roots

- **Read:** _How Linux Works_ (Brian Ward), chapters 1–4, 6, 8–9. Use the [Linux Upskill Challenge](https://linuxupskillchallenge.org/) as a structured companion.
- **Do:** SadServers, filter **Linux & Bash → Easy → Fix**. Then Killercoda's Linux and LFCS scenarios. Do not peek at solutions.
- **Gate:** On a fresh VM: create a user, set permissions, write a systemd service, rotate logs, find the process on a port, and fix a full disk. R2D2T.
- **Unlocks:** containers, cloud, Kubernetes.

### Step 2 — Networking roots

- **Read:** _Computer Networking: A Top-Down Approach_ (Kurose & Ross), chapters 1–4. For practical depth, _High Performance Browser Networking_ (free at [hpbn.co](https://hpbn.co)) chapters 1–2.
- **Do:** SwitchLab's **CCNA Network Operator** path: Networking Basics → Meet the CLI → CLI + Switching → Switching → Routing → Security. Then Linux networking labs on Killercoda.
- **Gate:** Explain and demonstrate DNS resolution, the TCP handshake, the TLS handshake, an HTTP request, a reverse proxy, and a firewall rule. Use `dig`, `curl -v`, `openssl s_client`, `ss`, and `tcpdump`.
- **Unlocks:** Kubernetes networking, service mesh, load balancing, security.

### Step 3 — Scripting and automation

- **Read:** The Bash Guide; _Automate the Boring Stuff with Python_ (Al Sweigart) or _Python for DevOps_.
- **Do:** [Exercism](https://exercism.org/) Bash and Python tracks. Write a backup script, a log-rotation script, and an API client with retries and structured logs.
- **Gate:** Write a Python tool that calls an API, retries with exponential backoff, logs JSON, handles errors, and has tests. No autocomplete, no LLM.
- **Unlocks:** IaC, CI/CD, operators, platform tooling.

### Step 4 — Containers

- **Read:** Docker's official docs; _Docker Deep Dive_ (Nigel Poulton). For internals, [iximiuz Labs](https://labs.iximiuz.com/).
- **Do:** Killercoda Docker scenarios; DevOpsLabs container rooms; SadServers Docker and Podman scenarios.
- **Gate:** Build a multi-stage image, run a three-service Compose stack, debug a container that exits immediately, shrink the image, and explain namespaces, cgroups, and overlay filesystems.
- **Unlocks:** Kubernetes, CI/CD, cloud-native.

### Step 5 — Cloud foundations

- **Read:** One provider's official guide. Pick **one**: AWS Solutions Architect Associate, Azure AZ-104, or GCP Associate Cloud Engineer. Read the IAM, VPC, compute, storage, and billing chapters twice.
- **Do:** Use the free tier. Build a VPC with public and private subnets, a VM, a managed database, and a load balancer. Then run [CloudGoat](https://github.com/RhinoSecurityLabs/cloudgoat) for a security reality check.
- **Gate:** Provision the environment, explain the bill, and explain the blast radius of a compromised credential.
- **Unlocks:** Terraform, Kubernetes on cloud, SRE.

### Step 6 — Infrastructure as Code

- **Read:** _Terraform Up & Running_ (Yevgeniy Brikman); the official Terraform/OpenTofu docs.
- **Do:** Killercoda OpenTofu/Terraform scenarios; SadServers IaC scenarios. Rebuild Step 5 entirely in code. Then create a module.
- **Gate:** From zero, `terraform apply` the full environment. Detect drift, fix it, inspect state, and explain why state is the source of truth. No console clicks.
- **Unlocks:** reproducible environments, platform engineering.

### Step 7 — CI/CD and delivery

- **Read:** _Continuous Delivery_ (Humble & Farley), chapters 1–5; _Accelerate_ (Forsgren et al.); GitHub Actions or GitLab CI docs.
- **Do:** Build a pipeline for your app: lint → test → build → scan → deploy to staging → smoke test → promote. Use SadServers CI/CD scenarios to fix broken pipelines.
- **Gate:** A commit triggers a pipeline that deploys to staging, runs a smoke test, and rolls back on failure. Explain every stage and every secret.
- **Unlocks:** Kubernetes delivery, GitOps, platform engineering.

### Step 8 — Kubernetes core

- **Read:** Kubernetes docs; _Kubernetes Up & Running_ (Burns et al.). Follow the **KCNA → CKA → CKAD** sequence if you want certification structure.
- **Do:** Killercoda CKA/CKAD scenarios; DevOpsLabs CKA path; then [Kubernetes the Hard Way](https://github.com/kelseyhightower/kubernetes-the-hard-way).
- **Gate:** Build a cluster, deploy a three-tier app, expose it with Ingress + TLS, set requests/limits, add probes, roll it back, and debug a `CrashLoopBackOff` from events and logs. R2D2T.
- **Unlocks:** observability, SRE, platform engineering, security.

### Step 9 — Observability

- **Read:** _Site Reliability Engineering_ (Google), chapters 3–4; _The Site Reliability Workbook_, chapters 2–5; _Observability Engineering_ (Majors, Fong-Jones, Miranda).
- **Do:** Instrument your app with OpenTelemetry, Prometheus, Grafana, and a log/trace backend. Killercoda Prometheus and Grafana scenarios. Load-test it.
- **Gate:** Define SLIs and SLOs, build dashboards, write multi-window burn-rate alerts, and show the error budget after a load test.
- **Unlocks:** reliability practice, incident response, capacity planning.

### Step 10 — Reliability practice

- **Read:** _The Site Reliability Workbook_; _Implementing Service Level Objectives_ (Alex Hidalgo); _The Art of Capacity Planning_ (Kejariwal & Allspaw).
- **Do:** Run incident drills. Shadow an on-call rotation if you can. Use LitmusChaos or a simple `kill`/network-partition script for game days.
- **Gate:** Run a simulated incident as incident commander. Write a blameless postmortem with action items, and prove the action items closed.
- **Unlocks:** senior SRE work, architecture, platform.

### Step 11 — Security and supply chain

- **Read:** _Building Secure and Reliable Systems_ (Google); the CKS curriculum. Skim OWASP Top 10.
- **Do:** [Kubernetes Goat](https://github.com/madhuakula/kubernetes-goat), CloudGoat, Trivy, Kyverno or OPA, Falco. Scan your own images and manifests.
- **Gate:** Harden the cluster, catch and fix a supply-chain vulnerability, and write a policy that blocks a bad deployment.
- **Unlocks:** security engineering, platform trust, SRE in regulated environments.

### Step 12 — Distributed systems

- **Read:** _Designing Data-Intensive Applications_ (Kleppmann), 2nd edition. Then _Database Internals_ (Petrov) for storage and consensus depth.
- **Do:** [system-design-primer](https://github.com/donnemartin/system-design-primer) exercises. Design a multi-region service. Inject failures and reason about the outcome.
- **Gate:** Design a multi-region service with replication, failover, and a capacity model. Defend the tradeoffs in a mock architecture review.
- **Unlocks:** staff-level SRE, architecture, platform strategy.

### Step 13 — Platform engineering and AI-era operations

- **Read:** _Team Topologies_ (Skelton & Pais); Backstage docs; _Observability Engineering_ 2nd edition's AI chapters; Google's AIOps material; MCP docs.
- **Do:** Build a golden-path template, a self-service environment, and a developer portal. Deploy an LLM-backed service with observability. Build an agent that proposes remediations with guardrails.
- **Gate:** A developer can go from `git init` to a deployed service without talking to you. Then run an incident where an AI agent proposes a wrong fix; detect it, reject it, and explain the guardrail that should have prevented it.
- **Unlocks:** platform ownership, AI-era SRE.

### Step 14 — Mastery proofs

Pick at least three:

- **The Hard Way cluster** — build Kubernetes from scratch and explain every component.
- **Production-grade platform** — IaC, CI/CD, K8s, observability, security, runbooks.
- **Incident portfolio** — five postmortems with real fixes.
- **Open-source contribution** — a merged PR in a CNCF or infrastructure project.
- **Design review** — a written architecture decision record defended in public.
- **Teach** — a talk, workshop, or blog series that someone else can follow.

These are the fruit. They are also the interview.

---

## The resource stack: what to use for what

Do not use one resource for every job. Match the resource to the cognitive job.

| Job                       | Free option                                           | Paid option                          | When to use                                       |
| ------------------------- | ----------------------------------------------------- | ------------------------------------ | ------------------------------------------------- |
| **Theory and invariants** | Official docs, Google SRE books, MIT Missing Semester | O'Reilly, print books                | Before and during a node, not instead of practice |
| **Guided practice**       | Killercoda, DevOpsLabs free rooms                     | KodeKloud, DevOpsLabs Premium        | When you need a worked example and a safe sandbox |
| **Break/fix**             | SadServers, DevOpsLabs challenges                     | SadServers Pro, DevOpsLabs Premium   | When you need diagnosis reps, not instruction     |
| **Exam simulation**       | Killercoda free scenarios                             | Killer.sh, DevOpsLabs simulators     | After the primitives are solid, not before        |
| **Networking depth**      | SwitchLab free labs, Packet Life                      | SwitchLab Pro                        | When DNS/VLAN/routing/ACL gaps block you          |
| **Projects**              | Free-tier cloud, homelab, Kubernetes the Hard Way     | Cloud credits                        | Always. This is where layering happens.           |
| **Assessment**            | Mock interviews, `check.sh`, R2D2T gates              | Launch School-style human assessment | When you need an outside verdict                  |
| **Spaced review**         | Anki, a personal runbook, incident cards              | —                                    | Forever                                           |

A practical note on money: at the time of writing, DevOpsLabs is roughly \$30/month or \$250/year; Killercoda has a free tier and paid tiers starting around \$10/month; SadServers has a free tier and Pro around \$9/month; SwitchLab is roughly \$22/month or \$99/year; Launch School's core is around \$199/month with a Capstone income-share agreement. Prices change — verify before subscribing. You do **not** need all of them at once. Start free, add one paid source when a specific gap blocks you.

---

## How to use each platform honestly

### DevOpsLabs

Use it for **guided rooms and the zero-to-production roadmap**, then for **open challenges** once you have the basics. The challenges are the closest thing to deliberate practice in the product: a broken machine, an incident brief, no instructions.

Use it **after** you have Linux and networking roots. It is not a substitute for them. The CKA/CKAD simulators are useful, but only after you can already do the work without a simulator.

**Best first move:** the "DevOps, from zero to production" roadmap, then the easiest open challenge. Do not open the walkthrough until you have either fixed it or written a hypothesis about why you cannot.

### Killercoda

Use it as a **universal sandbox and verification layer**. It is the best free way to get a real shell, a real cluster, or a real tool in seconds. The Check button gives you immediate feedback, which is exactly what deliberate practice needs.

Use it for **breadth and reps**, not for a single linear curriculum. The quality varies by creator, so treat each scenario as a lab, not as gospel.

**Best first move:** the Linux and Docker scenarios. Then choose the CKA/CKAD/CKS path when you are ready for structure.

### SadServers

Use it as your **incident gym**. This is where you learn to debug: a service is down, the clock is running, and nobody tells you which layer is broken. The Fix/Do/Hack taxonomy is excellent, and `check.sh` is inspectable, which means you can learn from the grader instead of guessing.

Use it **weekly, forever**. Even after you have a job. It is the DevOps equivalent of a daily puzzle.

**Best first move:** filter to Linux & Bash, Easy, type Fix. Then move to Medium. Then interleave with web servers, databases, Docker, and Kubernetes.

### SwitchLab

Use it when your networking is the bottleneck. If you cannot explain why a packet takes the path it takes, or why an ACL drops traffic, or how OSPF chooses a route, this is the most direct practice available.

Do **not** start here if you are weak in Linux. Networking without Linux is a parlor trick; Linux without networking is a dead end. Do both.

**Best first move:** the CCNA Network Operator path, from Networking Basics through Switching to Routing. Treat the automation section as a bridge to DevOps, not a destination.

### Launch School

Use it if you want **software engineering depth with human assessment**. Its mastery-based philosophy — no skipping assessments, "Not Yet" instead of a fake pass, mastery over time — is the closest thing in this list to the Math Academy ethos.

But be clear about the trade: it teaches backend/frontend engineering, networking, databases, and (in the Capstone) system design and cloud infrastructure. It does **not** teach Kubernetes, Terraform, CI/CD, observability, or on-call. If your goal is DevOps/SRE, do not expect Launch School to be the whole path. Use it for the engineering foundation, then run the graph above.

If you already write code professionally, you can borrow the **assessment discipline** without paying for the full core: schedule human-graded mock interviews, write design docs, and get your work reviewed by someone senior.

---

## The AI era: what changes, what does not

This is the part most guides get wrong in both directions. AI is not going to make DevOps obsolete, and it is not going to hand you mastery for free.

### What LLMs are genuinely good at

- Explaining concepts at your level, on demand.
- Generating boilerplate: Dockerfiles, Terraform modules, GitHub Actions, YAML.
- Summarizing docs and error messages.
- Suggesting hypotheses during debugging.
- Writing tests, runbooks, and first-draft postmortems.
- Acting as a Socratic tutor that never gets tired.

### What LLMs are still bad at

- **Causation versus correlation** in a complex production system.
- **Root cause** when the incident is novel, cross-layer, or organizational.
- **Your system's history**, constraints, and political reality.
- **Blast radius and accountability**: deciding what an agent may do, and owning the consequence when it is wrong.
- **Verification of their own output.** A confident answer is not a correct one.

The public lessons from 2025–2026 are consistent: AI is excellent at the **80% narrative** of an incident and weak at the **root cause** that matters. It can speed up observation, correlation, and drafting. It cannot be trusted to decide what to change in production without a human who can verify the claim.

### The verification gap

The bottleneck has moved. It used to be **knowing how to do the task**. Now it is increasingly **specifying the task, verifying the result, and owning the outcome**.

That is why the fundamentals matter _more_, not less. If you cannot read the Terraform plan, you cannot supervise the agent that wrote it. If you cannot read a packet capture, you cannot tell whether the "DNS problem" is DNS or a firewall. If you cannot reason about consistency, you cannot catch a plausible but wrong distributed-systems design.

AI raises the floor. It does not raise the ceiling. The ceiling is judgment, and judgment is built by deliberate practice on real systems.

### The LLM study protocol

Use AI as a **training partner**, not an oracle. For every study session:

1. **Predict before prompting.** Write your hypothesis first.
2. **Ask for a hint, not the answer.** "Give me one clue, not the solution."
3. **Reproduce without the model.** Close the chat. Do the task.
4. **Verify against the system.** Tests, `curl`, `kubectl describe`, logs, metrics. The system is the source of truth.
5. **Ask the model to critique your solution**, not to produce one.
6. **Write a five-line "why" note.** What broke, what you tried, what fixed it, what you would do differently.
7. **Schedule a spaced review.** Redo it cold in a week.

Never let the model's fluency become your fluency. The test is the blank terminal, not the chat window.

### The new skills

The AI era adds nodes to the graph:

- **LLM observability:** latency, cost, drift, hallucination rate, evaluation sets.
- **Agent guardrails:** what an agent may read, write, restart, or deploy; blast-radius limits; approval gates.
- **Evaluation:** golden datasets, offline evals, canary evals, human review.
- **Context engineering:** giving agents structured access to telemetry, runbooks, and architecture via tools like MCP.
- **AI incident response:** detecting when the model is confidently wrong, and having a rollback path.

These are not replacements for Linux, networking, Kubernetes, and SRE. They are **new branches** on the same tree, and they require the same roots.

---

## The operating system: how to actually run this

This is not a timeline. It is a **loop** you run until the gates are passed.

### The daily loop (45–90 minutes)

1. **Review (10 min):** Anki or your incident card deck. Retrieval, not rereading.
2. **Learn (20–30 min):** One node, one worked example, one piece of theory.
3. **Practice (25–40 min):** One lab or one broken system. No solution peeking.
4. **Write (5 min):** Five lines: what you tried, what failed, what fixed it, what you learned, what to review.

### The weekly loop

- **One project session:** add a layer to the current project. Reuse previous layers.
- **One incident session:** a SadServers or DevOpsLabs challenge, timed.
- **One interleaved drill:** mix three topics you have not touched recently. Diagnose, do not just execute.
- **One teach-back:** explain a concept to a rubber duck, a friend, or a blog draft.
- **One review of failed gates:** what prerequisite was missing?

### The monthly loop

- **A mastery gate:** R2D2T on a node you think you know.
- **A portfolio artifact:** a runbook, a postmortem, a README, a diagram.
- **A cold rebuild:** rebuild something from scratch with no notes.
- **A conversation:** a mock interview, a code review, or an architecture review.

### The rules that keep you honest

1. **No solution peeking before a hypothesis.** Write down what you think is wrong first.
2. **No LLM before a hypothesis.** Same reason.
3. **No new tool until the current one is automatic.** Non-interference.
4. **No certification before a project.** The cert is a map, not the territory.
5. **No blocked practice after the basics.** Interleave.
6. **No "I watched it" as evidence.** Reproduce it.
7. **No project that does not break.** If it never fails, you are not learning to operate it.
8. **No gate without a teach-back.** If you cannot explain it, you do not own it.

---

## The capstones: proof, not participation

These are the six artifacts I would want to see from someone who claims mastery. They are also the best interview preparation I know.

| Capstone                         | Acceptance criteria                                                                                                                                                                                                |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **1. The Hard Way cluster**      | Build Kubernetes from scratch. Explain the control plane, kubelet, networking, certificates, and etcd. Rebuild it after destroying it.                                                                             |
| **2. Production-grade platform** | One repo: Terraform for infrastructure, CI/CD for delivery, Kubernetes for runtime, Helm/Kustomize for packaging, observability, secrets, and runbooks. One command to provision, one to deploy, one to roll back. |
| **3. Incident portfolio**        | Five real or simulated incidents. Each has a timeline, a root cause, a detection gap, a fix, and a preventive action that closed. At least one must be a false lead you initially chased.                          |
| **4. Open-source contribution**  | A merged PR in a CNCF or infrastructure project. It can be docs, tests, or code. The point is to work in someone else's system.                                                                                    |
| **5. Design review**             | A written architecture decision record for a multi-region service, with SLOs, failure modes, capacity, cost, and security. Defend it in a mock review.                                                             |
| **6. Teach**                     | A talk, workshop, or blog series that takes someone from zero to a working system. The test is whether they can follow it without you.                                                                             |

If you can do these six, you are not "certified." You are **operational**.

---

## How to know you are ready

### The junior / mid / senior ladder

| Dimension  | Junior                | Mid                         | Senior / SRE                                               |
| ---------- | --------------------- | --------------------------- | ---------------------------------------------------------- |
| Scope      | One service, reactive | One service, proactive      | Multiple services and architecture                         |
| SLOs       | Knows the concept     | Owns SLIs, SLOs, and alerts | Negotiates targets and designs org-wide frameworks         |
| Incidents  | Follows a runbook     | Reliable responder          | Incident commander; writes the postmortem leadership reads |
| Toil       | Automates a script    | Automates a recurring task  | Eliminates org-wide toil                                   |
| Design     | Debugs a service      | Debugs and designs          | Authors failover, capacity models, reliability reviews     |
| AI         | Uses it to learn      | Uses it to accelerate       | Designs guardrails, evals, and autonomy policy             |
| Mentorship | Shadows               | Helps peers                 | Mentors, calibrates on-call, raises the bar                |

The plateau is real: excellent reactive work with no proactive track record. Promotion is won by **preventing the page**, not by heroics during it.

### The "left alone with production" test

Can you be given a service, a cloud account, and an on-call rotation — and be trusted to:

- Deploy it without breaking it?
- Notice when it is degrading before customers do?
- Diagnose a failure across Linux, network, container, and application layers?
- Communicate clearly during an incident?
- Write a postmortem that changes something?
- Know when to roll back, when to escalate, and when to do nothing?

If yes, you are ready. If not, find the missing node and gate it.

---

## The ten rules

If you remember nothing else, remember these:

1. **The graph is the curriculum; the course is a path.**
2. **Mastery before motion.** Do not advance on familiarity.
3. **Practice at the edge.** Too easy is rehearsal; too hard is noise.
4. **Verify with the system, not the model.** The terminal is the truth.
5. **Incidents are the multi-part problems.** Diagnose, do not just execute.
6. **Space it, interleave it, retrieve it.** Redo it cold.
7. **Strip the scaffolding.** The blank terminal is the exam.
8. **Layer everything.** Every project reuses the last layer.
9. **Remediate the prerequisite, not the symptom.** DNS is usually DNS until it is not.
10. **Teach it to prove it.** If you cannot explain it, you do not own it.

---

## Sources and further reading

**Learning science**

- Justin Skycak, _The Math Academy Way_ — [the PDF](https://www.justinmath.com/files/the-math-academy-way.pdf)
- _Make It Stick_ (Brown, Roediger, McDaniel)
- _Peak_ (Ericsson & Pool)

**Linux, networking, and systems**

- _How Linux Works_ (Brian Ward)
- _UNIX and Linux System Administration Handbook_ (Nemeth et al.)
- _The Linux Programming Interface_ (Michael Kerrisk)
- _Computer Networking: A Top-Down Approach_ (Kurose & Ross)
- _TCP/IP Illustrated, Volume 1_ (Stevens)
- _Systems Performance_ (Brendan Gregg)
- _BPF Performance Tools_ (Brendan Gregg)
- [MIT Missing Semester](https://missing.csail.mit.edu/)
- [High Performance Browser Networking](https://hpbn.co)

**DevOps, SRE, and reliability**

- _Site Reliability Engineering_ and _The Site Reliability Workbook_ — [free at sre.google](https://sre.google/books/)
- _Building Secure and Reliable Systems_ (Google)
- _Implementing Service Level Objectives_ (Alex Hidalgo)
- _The Art of Capacity Planning_ (Kejariwal & Allspaw)
- _Observability Engineering_ (Majors, Fong-Jones, Miranda)
- _The Phoenix Project_, _The DevOps Handbook_, _Accelerate_ (Gene Kim et al.)
- _Continuous Delivery_ (Humble & Farley)
- _Designing Data-Intensive Applications_ (Martin Kleppmann)
- _Database Internals_ (Alex Petrov)
- _Team Topologies_ (Skelton & Pais)

**Hands-on**

- [DevOpsLabs](https://devopslabs.dev/)
- [Killercoda](https://killercoda.com/)
- [SadServers](https://sadservers.com/)
- [SwitchLab](https://switchlab.dev/)
- [KodeKloud](https://kodekloud.com/)
- [iximiuz Labs](https://labs.iximiuz.com/)
- [Kubernetes the Hard Way](https://github.com/kelseyhightower/kubernetes-the-hard-way)
- [Kubernetes Goat](https://github.com/madhuakula/kubernetes-goat)
- [CloudGoat](https://github.com/RhinoSecurityLabs/cloudgoat)
- [OverTheWire](https://overthewire.org/wargames/)
- [Linux Upskill Challenge](https://linuxupskillchallenge.org/)
- [Learn Git Branching](https://learngitbranching.js.org/)

**Roadmaps and communities**

- [roadmap.sh DevOps](https://roadmap.sh/devops)
- [CNCF Landscape](https://landscape.cncf.io)
- [CNCF Contributors](https://contribute.cncf.io/)
- [bregman-arie/devops-exercises](https://github.com/bregman-arie/devops-exercises)
- [bregman-arie/devops-sre-interviews](https://github.com/bregman-arie/devops-sre-interviews)
- [system-design-primer](https://github.com/donnemartin/system-design-primer)

**Certifications**

- Linux Foundation / CNCF: LFCS, KCNA, CKA, CKAD, CKS, PCA, ICA, CCA, CAPA, CGOA, OTCA, CNPA, CNPE.
- Cloud: AWS Solutions Architect / SysOps / DevOps Professional; Azure AZ-104 / AZ-400; GCP Associate Cloud Engineer / Professional Cloud DevOps Engineer.
- Treat certifications as **maps and forcing functions**, not as proof of mastery. Pair every cert with a project.

---

## Closing: the tree, not the treadmill

The reason so many people burn out learning DevOps is that they mistake the treadmill for the mountain. There is always another tool, another certification, another tutorial. The treadmill never ends, and it never takes you anywhere.

The tree is different. It has roots, a trunk, branches, a canopy, and fruit. You can see where you are. You can see what you are missing. You can choose the next node because it is on your frontier, not because it is trending.

And in the AI era, that is the real advantage. The model can generate the YAML. It can summarize the docs. It can suggest the fix. But it cannot build your mental model, verify the outcome on your system, or own the consequence when production breaks.

That part is still yours. The tree is how you get ready for it.

Start at your frontier. Pass the gate. Then climb.
