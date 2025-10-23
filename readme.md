---
title: "Prompt Analyzer"
description: "LLM evaluation dashboard that compares responses across sampling profiles using Completeness and Length Appropriateness metrics."
---

# Prompt Analyzer

Prompt Analyzer is an LLM evaluation tool that generates two or more responses for a single prompt using variant sampling profiles. It then computes Completeness and Length Appropriateness to help you compare quality across runs.

## Tech Stack

| Layer | Technology |
| :-- | :-- |
| Frontend | Next.js 15 |
| Backend | NestJS on Node 22 |
| Database | PostgreSQL |
| Cache and Queues | DragonflyDB drop in Redis replacement |
| Package Manager | pnpm Workspaces |

## Features

- Generate multiple responses from a single prompt using sampling profiles
- Compute Completeness and Length Appropriateness for each response
- Compare results side by side in a clean visual interface
- Modular pnpm workspace setup for frontend and backend

## Clone the repository

```bash
git clone https://github.com/syedolive/GenAiLabs-Prompt-Analyzer.git
cd GenAiLabs-Prompt-Analyzer
```

## Install dependencies

```bash
pnpm install
```

pnpm is recommended because this project uses a workspace layout.

## Configure environment variables

An example file is included at the root:

```bash
cp .env.sample .env
# Then edit .env and set your configuration values
```

## Start the application

Start the backend NestJS:

```bash
pnpm run dev:api
```

Start the frontend Next.js:

```bash
pnpm run dev:frontend
```

Once both services are running, open http://localhost:3000

## Project Structure

```
apps/
  frontend/     # Next.js app
  api/          # NestJS backend
packages/
  shared/       # Shared modules or utilities if present
.env.sample     # Example environment file
```

## Metrics

### Completeness

Evaluates how well a response covers the key concepts or sections implied by the prompt. A higher score means the response better fulfills the intended task.

### Length Appropriateness

Analyzes whether a response length is balanced relative to the prompt. Not too short and not overly verbose.

## Requirements

- Node.js 22 or newer
- pnpm 9 or newer
- PostgreSQL 15 or newer
- DragonflyDB latest stable. Redis can work as a fallback

## Common Commands

```bash
pnpm install
pnpm run dev:api
pnpm run dev:frontend
```

## License

MIT

## Author

Made by [Syed Faizan Ul Haq](https://github.com/syedolive) | [Website](https://syedfaizan.info)