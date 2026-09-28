# Eason Systems

**Eason Systems 是由 Eason Huang 建立的 independent product studio。**  
它從真實使用者與實際軟體合作中累積問題，再把重複出現的需求收斂成自主產品；目前不再以客製 LINE / Web 接案作為主要定位。

**Founder:** Eason Huang — designer and developer behind Eason Systems, LTA, English Output Trainer, and Toilet Bot.

**發展路徑：** Toilet Bot（35,000+ LINE users） → Custom LINE / Web systems → Independent products  
**現在：** **LTA — Live** · **EOT — In development**

[Live site](https://eason-systems.vercel.app/) · [LTA](https://api-production-0383e.up.railway.app/) · [Legacy archive](https://github.com/eason11133/eason-systems-legacy)

> 這個 repository 是 **current Eason Systems website**。早期以客製系統與市場驗證為主的版本已移至 legacy archive。

## Current products

### LTA — Live

**Your AI got the link. LTA brings the source.**

LTA 是目前 Eason Systems 的主要 public product。它把使用者已經選定的 supported public URL 轉成 AI workflow 可以使用的 source context，並處理來源辨識、內容續讀、source reuse、completeness 與 provenance 等 retrieval 細節。

目前網站呈現的整合方式包括：

- MCP for Claude
- REST API for product integrations
- Source reuse
- Long-source continuation
- Source identity / provenance

Live product: [LTA](https://api-production-0383e.up.railway.app/)

### EOT — In development

**English Output Trainer** 正在開發中。

EOT 聚焦在一個簡單的練習循環：

1. Produce English
2. Receive useful feedback
3. Try again

它的方向不是再做一套被動內容庫，而是讓使用者持續產出英文、得到可以直接改善下一次輸出的回饋，再重新嘗試。

## Development story

Eason Systems 的方向不是一次決定的，而是從幾個真實階段逐步收斂。

### 01 — Toilet Bot

公共廁所 LINE Bot 是最早的重要實作。它服務超過 **35,000 名 LINE 使用者**，讓我第一次直接面對：

- 真實使用者分布與 adoption
- 公開資料品質
- 系統維護
- 使用者回報
- 長期運行後才會出現的產品問題

[View Toilet Bot](https://github.com/eason11133/toilet-bot)

### 02 — Custom systems

之後 Eason Systems 做過 LINE 與 Web workflow systems，與不同組織的實際需求互動。

這個階段的重要價值不是「接案本身」，而是看見哪些問題只是單一客戶需求、哪些 workflow pattern 會一再出現，也實際測試過服務範圍、需求拆解與市場反應。

這段歷史已獨立保留在：

[Visit eason-systems-legacy](https://github.com/eason11133/eason-systems-legacy)

### 03 — Independent products

在反覆出現的需求中，方向逐漸從 broad custom development 收斂到 focused software products。

目前：

- **LTA** 是第一個主要 public product，已上線。
- **EOT** 仍在 development / testing 階段。

這也是 current Eason Systems 與 legacy service phase 最主要的差別。

## Website architecture

Current website 是一個 multi-page React application，主要 routes：

| Route | Purpose |
| --- | --- |
| `/` | Eason Systems 與目前產品總覽 |
| `/products` | Current product catalog |
| `/products/lta` | LTA product page |
| `/products/eot` | EOT development page |
| `/story` | Toilet Bot → custom systems → independent products |
| `/about` | Studio / founder context |

主要程式結構：

```text
src/
├── components/       Shared site UI and layout
├── data/site.js      Product and external-link data
├── pages/            Route-level pages
├── App.jsx           Routing
├── App.css           Site styles
└── main.jsx          React entry

tests/
└── site.spec.js      Playwright route / navigation / overflow checks

public/               Public static assets
```

## Tech stack

- React 19
- React Router
- Vite 8
- Tailwind CSS 4
- Framer Motion
- Lucide React
- Playwright
- Vercel

## Local run

Requirements: Node.js + npm.

```powershell
npm install
npm run dev
```

Production build:

```powershell
npm run build
```

Lint:

```powershell
npm run lint
```

Existing browser tests:

```powershell
npx playwright test
```

If Chromium is not installed for Playwright:

```powershell
npx playwright install chromium
```

## Live site

- Eason Systems: https://eason-systems.vercel.app/
- LTA: https://api-production-0383e.up.railway.app/

## Legacy archive

The earlier Eason Systems phase focused on custom LINE / Web systems, service packaging, pricing experiments, and market validation.

That version is intentionally separated from the current product-studio site:

- https://github.com/eason11133/eason-systems-legacy

The current repository should be read as the next phase: **building independent products from problems first encountered through real users and real software work.**
