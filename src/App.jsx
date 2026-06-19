import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  ClipboardCheck,
  Database,
  ExternalLink,
  FileText,
  Layers,
  LineChart,
  Mail,
  MapPin,
  MessageSquare,
  Search,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Workflow,
  AlertTriangle,
} from "lucide-react";

const routes = ["/", "/ai-gate", "/workflow-systems", "/cases", "/pricing", "/about", "/contact"];

function getRoute() {
  const r = window.location.hash.replace(/^#/, "") || "/";
  return routes.includes(r) ? r : "/";
}

function useRoute() {
  const [route, setRoute] = useState(getRoute());
  useEffect(() => {
    const onHash = () => setRoute(getRoute());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return route;
}

function Card({ children, className = "" }) {
  return <div className={`rounded-3xl border border-white/10 bg-white/[0.07] shadow-sm backdrop-blur ${className}`}>{children}</div>;
}

function Button({ children, to, href, variant = "solid", className = "" }) {
  const styles = variant === "outline"
    ? "border border-white/15 bg-white/[0.03] text-slate-100 hover:bg-white/10"
    : "bg-cyan-300 text-slate-950 hover:bg-cyan-200";
  const props = to ? { href: `#${to}` } : { href: href || "#" };
  return <a {...props} className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition ${styles} ${className}`}>{children}</a>;
}

function Header({ route }) {
  const nav = [
    ["/ai-gate", "AI Gate"],
    ["/workflow-systems", "流程系統"],
    ["/cases", "案例"],
    ["/pricing", "方案"],
    ["/about", "關於"],
    ["/contact", "聯絡"],
  ];

  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
      <a href="#/" className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400/15 ring-1 ring-cyan-300/25">
          <ShieldCheck className="h-5 w-5 text-cyan-300" />
        </div>
        <div>
          <p className="text-sm font-semibold tracking-wide text-white">Eason Systems</p>
          <p className="text-xs text-slate-400">AI Workflow & Digital Process Safety</p>
        </div>
      </a>
      <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 lg:flex">
        {nav.map(([to, label]) => (
          <a key={to} href={`#${to}`} className={`rounded-full px-4 py-2 text-sm transition ${route === to ? "bg-cyan-300 text-slate-950" : "text-slate-300 hover:bg-white/10 hover:text-white"}`}>
            {label}
          </a>
        ))}
      </nav>
      <Button to="/contact" className="hidden md:inline-flex">申請試點 <ArrowRight className="ml-2 h-4 w-4" /></Button>
    </header>
  );
}

function Shell({ children, route }) {
  return (
    <div className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,#0e7490_0%,transparent_30%),linear-gradient(135deg,#020617_0%,#07111f_48%,#0f172a_100%)] text-slate-100 antialiased [font-feature-settings:'palt']">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:76px_76px] opacity-20" />
        <div className="absolute -right-32 -top-40 h-[30rem] w-[30rem] rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -left-28 top-96 h-96 w-96 rounded-full bg-blue-500/15 blur-3xl" />
      </div>
      <div className="relative z-10">
        <Header route={route} />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>© Eason Systems. AI 工作流與數位流程安全系統。</p>
        <div className="flex flex-wrap gap-4">
          <a className="hover:text-white" href="#/ai-gate">AI Gate</a>
          <a className="hover:text-white" href="#/workflow-systems">流程系統</a>
          <a className="hover:text-white" href="#/cases">案例</a>
          <a className="hover:text-white" href="mailto:easonlsy1019@gmail.com">easonlsy1019@gmail.com</a>
        </div>
      </div>
    </footer>
  );
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold leading-tight text-white md:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-8 text-slate-300">{text}</p>}
    </div>
  );
}

function ProductCard({ icon: Icon, title, subtitle, text, to }) {
  return (
    <Card className="group h-full p-6 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.1]">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10">
        <Icon className="h-6 w-6 text-cyan-200" />
      </div>
      <p className="text-sm font-semibold text-cyan-200">{subtitle}</p>
      <h3 className="mt-2 text-2xl font-bold text-white">{title}</h3>
      <p className="mt-4 leading-7 text-slate-300">{text}</p>
      <a href={`#${to}`} className="mt-6 inline-flex items-center text-sm font-semibold text-cyan-200">
        了解更多 <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
      </a>
    </Card>
  );
}

function FlowDiagram() {
  const steps = [
    ["AI Draft", "AI 產出內容"],
    ["Risk Review", "風險審核"],
    ["Revise / Approve", "修正或批准"],
    ["Send", "安全送出"],
    ["Record Rules", "留下防錯規則"],
  ];

  return (
    <Card className="p-5">
      <div className="grid gap-3 md:grid-cols-5">
        {steps.map(([en, zh], index) => (
          <div key={en} className="relative rounded-2xl border border-white/10 bg-slate-950/45 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">{en}</p>
            <p className="mt-2 font-semibold text-white">{zh}</p>
            {index < steps.length - 1 && <ArrowRight className="absolute -right-4 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-cyan-200 md:block" />}
          </div>
        ))}
      </div>
    </Card>
  );
}

function HomePage() {
  return (
    <>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-16 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
            <Sparkles className="h-4 w-4" />
            AI 工作流與數位流程安全系統
          </div>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
            讓 AI 產出的內容，
            <span className="block text-cyan-300">在送出前先過一道安全流程</span>
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
            Eason Systems 協助小團隊建立可控管的數位與 AI 工作流程。從 LINE 導覽、報名流程、名單管理，到 AI 產出的客戶回覆、社群貼文、合作信與提案內容，我們幫你把容易出錯的流程整理成可審核、可修正、可追蹤的系統。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="/ai-gate">申請 AI Gate 試點 <ArrowRight className="ml-2 h-4 w-4" /></Button>
            <Button to="/workflow-systems" variant="outline">看流程系統服務</Button>
          </div>
        </div>

        <Card className="p-6 md:p-7">
          <p className="text-sm font-semibold text-cyan-200">Core Principle</p>
          <h2 className="mt-3 text-2xl font-bold leading-snug text-white md:text-3xl">
            AI 可以幫公司寫東西，但不該未經審核就代表公司說話。
          </h2>
          <div className="mt-6 grid gap-3">
            {["這段內容能不能直接送出？", "有沒有亂承諾或錯誤資訊？", "語氣會不會傷品牌？", "涉及價格、退款、合約或敏感資訊時，需不需要人工批准？"].map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl bg-slate-950/50 p-4">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-5 md:grid-cols-3">
          <ProductCard icon={ShieldCheck} title="AI Gate" subtitle="新主線" to="/ai-gate" text="AI 產出送出前的最後一道審核流程。適用於客戶回覆、合作信、社群貼文、公告、提案內容與業務訊息。" />
          <ProductCard icon={Workflow} title="流程系統" subtitle="第二產品線" to="/workflow-systems" text="協助活動、課程、公益與小型組織，把分散資訊、重複詢問與人工整理流程，做成可查詢、可維護、可追蹤的系統。" />
          <ProductCard icon={Layers} title="客製整合" subtitle="延伸服務" to="/pricing" text="依照團隊現有流程，整合 Google Sheet、LINE、表單、CRM、Email、Dashboard 或內部後台，讓資料與審核流程不再散落各處。" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionTitle eyebrow="How AI Gate Works" title="不只是給 AI 內容打分數，而是把輸出變成可管理流程" text="AI Gate 會在內容送出前先做風險審核、提出修正建議，並留下團隊防錯規則，讓 AI 產出不再只是一次性的文字，而是可以被管理的工作流程。" />
          <FlowDiagram />
        </div>
      </section>
    </>
  );
}

function AiGatePage() {
  const contentTypes = ["客戶回覆", "業務信", "合作邀約", "社群貼文", "活動公告", "提案內容", "報價說明", "客服訊息"];
  const checks = ["是否有過度承諾", "是否可能讓客戶誤解服務範圍", "是否引用未確認資訊", "語氣是否太像罐頭訊息", "是否缺少明確下一步", "是否有品牌或公關風險", "是否需要人工批准後才能送出"];
  const results = [
    ["✅ 可送出", "內容風險低，可以直接採用。", "border-emerald-300/25 bg-emerald-300/10"],
    ["⚠️ 需修改後送出", "內容方向可用，但需要調整語氣、資訊或承諾方式。", "border-amber-300/25 bg-amber-300/10"],
    ["🚫 不建議送出", "內容可能有明顯風險，不建議直接代表團隊對外使用。", "border-red-300/25 bg-red-300/10"],
    ["👤 需人工批准", "涉及價格、退款、法律、醫療、金融、合約、敏感資訊或高風險承諾時，需由負責人確認。", "border-blue-300/25 bg-blue-300/10"],
  ];

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-12">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">AI Gate</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-white md:text-6xl">AI 產出送出前的最後一道審核流程</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">AI 可以很快寫出客戶回覆、合作信、社群貼文、公告與提案內容，但 AI 產出的文字不應該未經檢查就直接代表團隊送出。</p>
          <p className="mt-4 text-lg leading-8 text-slate-300">AI Gate 協助小團隊建立 AI 對外輸出審核流程，在內容送出前先檢查語氣、資訊、承諾、品牌風險與是否需要人工確認。</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="mailto:easonlsy1019@gmail.com?subject=AI%20Gate%203%E5%89%87%E5%85%8D%E8%B2%BB%E5%AF%A9%E6%A0%B8%E7%94%B3%E8%AB%8B">申請 3 則免費審核 <ArrowRight className="ml-2 h-4 w-4" /></Button>
            <Button to="/contact" variant="outline">預約 AI Gate 試點</Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <SectionTitle eyebrow="Suitable Content" title="適用內容" text="只要是 AI 產出後可能代表團隊對外送出的內容，都可以先經過 AI Gate 審核。" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contentTypes.map((item) => <Card key={item} className="p-5"><FileText className="mb-4 h-5 w-5 text-cyan-200" /><p className="font-semibold text-white">{item}</p></Card>)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionTitle eyebrow="Risk Review" title="AI Gate 會檢查什麼？" text="重點不是把 AI 當成另一個寫手，而是確認 AI 內容是否可以安全代表團隊對外送出。" />
          <div className="grid gap-3 md:grid-cols-2">
            {checks.map((item) => <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-slate-950/40 p-4"><ClipboardCheck className="mt-0.5 h-5 w-5 shrink-0 text-cyan-200" /><p className="text-sm leading-6 text-slate-300">{item}</p></div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <SectionTitle eyebrow="Decision Output" title="審核結果" text="AI Gate 不只給分數，而是直接給出可執行判斷。" />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {results.map(([title, desc, className]) => <Card key={title} className={`p-6 ${className}`}><h3 className="text-xl font-bold text-white">{title}</h3><p className="mt-3 leading-7 text-slate-300">{desc}</p></Card>)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <SectionTitle eyebrow="Workflow" title="基本流程" />
        <div className="mt-8"><FlowDiagram /></div>
        <Card className="mt-8 p-6">
          <p className="text-lg font-semibold text-white">試點合作</p>
          <p className="mt-3 leading-8 text-slate-300">目前開放小團隊試點合作。可先免費提供 3 則 AI 對外內容審核，包含風險判斷、修正建議與下次防錯規則。適合正在使用 AI 撰寫客戶回覆、社群貼文、合作信、公告或提案內容的團隊。</p>
        </Card>
      </section>
    </>
  );
}

function InfoBlock({ title, items, icon: Icon }) {
  return <Card className="h-full p-6"><div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-300/10"><Icon className="h-5 w-5 text-cyan-200" /></div><h3 className="text-xl font-bold text-white">{title}</h3><div className="mt-5 space-y-3">{items.map((item) => <div key={item} className="flex gap-3 text-sm leading-6 text-slate-300"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-200" /><span>{item}</span></div>)}</div></Card>;
}

function WorkflowSystemsPage() {
  const audiences = ["活動團隊", "課程品牌", "營隊 / 工作坊", "公益協會", "地方創生團隊", "小型組織", "教育團隊"];
  const problems = ["活動資訊散在不同頁面", "LINE、私訊、Email 一直重複問", "民眾不知道該從哪個入口開始", "已有 Google 表單或 netiCRM，但進入前仍然混亂", "活動後還要整理查詢、點擊、名單或成果資料"];
  const solutions = ["LINE / Web 導覽", "FAQ 分流", "報名前導覽", "表單 / 官網 / 社群連結整合", "後台資料管理", "查詢紀錄與 Dashboard"];
  const plans = [
    ["LINE Bot + 後台資料管理", "NT$ 50,000–100,000 起", "適合公益、協會、活動團隊與小型組織。"],
    ["據點查詢 / 地圖推薦系統", "NT$ 60,000–150,000 起", "適合救傷中心、社福據點、服務據點與地方資料。"],
    ["活動 / 課程流程系統", "NT$ 50,000–120,000 起", "適合營隊、課程中心、工作坊與親子活動。"],
    ["簡易後台 / 名單整理工具", "NT$ 50,000–120,000 起", "適合尚未有既有工具、需要先整理名單或狀態的團隊。"],
  ];

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-12">
        <SectionTitle eyebrow="Workflow Systems" title="把分散的資訊、重複詢問與人工整理流程，做成可查詢、可維護、可追蹤的系統" text="這是 Eason Systems 原本的強項：LINE、報名、FAQ、後台、名單管理與活動流程整理。" />
      </section>
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-5 md:grid-cols-3">
          <InfoBlock title="適合誰" items={audiences} icon={UserCheck} />
          <InfoBlock title="常見問題" items={problems} icon={AlertTriangle} />
          <InfoBlock title="可以怎麼解" items={solutions} icon={CheckCircle2} />
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-12">
        <SectionTitle eyebrow="Plans" title="常見合作方向" text="中型案保留，小方案弱化。先看流程，再決定第一版要補哪一段。" />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {plans.map(([name, price, desc]) => <Card key={name} className="p-6"><p className="text-sm font-semibold text-cyan-200">{price}</p><h3 className="mt-2 text-2xl font-bold text-white">{name}</h3><p className="mt-3 leading-7 text-slate-300">{desc}</p></Card>)}
        </div>
      </section>
    </>
  );
}

function CasesPage() {
  const cases = [
    {
      title: "公廁查詢 LINE Bot",
      tag: "真實上線系統，累積 30,000+ 使用者",
      text: "整合 LINE Bot、定位查詢、公廁資料、候選點排序與 Dashboard，讓使用者可以快速查找附近公廁，管理端也能查看查詢紀錄與使用數據。",
      links: [["查看案例", "https://toilet-mvp-dev.vercel.app/#media"], ["查看 Dashboard", "https://school-i9co.onrender.com/dashboard"], ["體驗 LINE Bot", "https://line.me/R/ti/p/@439avyvf"]],
    },
    {
      title: "野生動物救傷 LINE Bot",
      tag: "公益單位流程系統規劃與開發方向",
      text: "協助規劃動物分類、外來種判斷、最近救傷中心查詢、後台資料管理與 LINE 導覽流程。此案例展示 Eason Systems 對公益流程、資料查詢與即時導覽系統的規劃能力。",
      links: [],
    },
    {
      title: "內部名單追蹤與接案 CRM",
      tag: "冷開發流程、寄信紀錄、追蹤日期、狀態與預估金額管理",
      text: "用於整理名單、寄信、追蹤、回覆狀態與下一步任務，展示 Eason Systems 對流程管理與資料整理工具的實作能力。",
      links: [],
    },
  ];

  return <section className="mx-auto max-w-7xl px-6 pb-20 pt-12"><SectionTitle eyebrow="Cases" title="案例與作品" text="信任素材不是只講願景，而是展示實際上線系統、Dashboard 與流程工具。" /><div className="mt-10 grid gap-6">{cases.map((item) => <Card key={item.title} className="p-6 md:p-8"><div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between"><div><p className="text-sm font-semibold text-cyan-200">{item.tag}</p><h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">{item.title}</h2><p className="mt-4 max-w-4xl leading-8 text-slate-300">{item.text}</p></div>{item.links.length > 0 && <div className="flex shrink-0 flex-wrap gap-3">{item.links.map(([label, href]) => <Button key={label} href={href} variant="outline">{label} <ExternalLink className="ml-2 h-4 w-4" /></Button>)}</div>}</div></Card>)}</div></section>;
}

function PricingPage() {
  const aiPlans = [
    ["Pilot", "$199 / month 起", ["每月審核 30 則 AI 對外內容", "可送出 / 需修改 / 不建議送出 / 需人工批准判斷", "主要風險說明", "修正版或修正建議", "下次防錯規則", "每月一份 AI 輸出風險摘要"]],
    ["Team", "$499 / month 起", ["每月審核 100 則 AI 對外內容", "團隊共用 AI 使用規則", "常見風險分類", "審核紀錄整理", "依團隊語氣與限制建立專屬規則", "每月 AI 使用風險摘要"]],
    ["Custom Workflow", "客製報價", ["AI 對外輸出審核流程", "團隊規則庫", "人工批准流程", "審核紀錄", "既有工具整合", "Dashboard 或後台管理"]],
  ];
  const workflowPlans = [["LINE Bot + 後台資料管理", "NT$ 50,000–100,000 起"], ["據點查詢 / 地圖推薦系統", "NT$ 60,000–150,000 起"], ["活動 / 課程流程系統", "NT$ 50,000–120,000 起"], ["簡易後台 / 名單整理工具", "NT$ 50,000–120,000 起"]];

  return <section className="mx-auto max-w-7xl px-6 pb-20 pt-12"><SectionTitle eyebrow="Pricing" title="方案與試點合作" text="AI Gate 採月費試點方案，流程系統保留台灣小團隊熟悉的一次性專案報價。" /><div className="mt-10 grid gap-5 lg:grid-cols-3">{aiPlans.map(([name, price, items]) => <Card key={name} className="p-6"><p className="text-sm font-semibold text-cyan-200">AI Gate</p><h2 className="mt-2 text-2xl font-bold text-white">{name}</h2><p className="mt-3 text-2xl font-bold text-cyan-200">{price}</p><div className="mt-6 space-y-3">{items.map((item) => <div key={item} className="flex gap-3 text-sm leading-6 text-slate-300"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-200" /><span>{item}</span></div>)}</div></Card>)}</div><div className="mt-14"><SectionTitle eyebrow="Workflow Systems" title="原本流程系統價格" text="這些服務仍可合作，但不再放在首頁主推。" /><div className="mt-8 grid gap-4 md:grid-cols-2">{workflowPlans.map(([name, price]) => <Card key={name} className="flex items-center justify-between gap-4 p-5"><p className="font-semibold text-white">{name}</p><p className="text-sm font-semibold text-cyan-200">{price}</p></Card>)}</div></div></section>;
}

function AboutPage() {
  return <section className="mx-auto max-w-5xl px-6 pb-20 pt-12"><SectionTitle eyebrow="About" title="關於 Eason Systems" /><Card className="mt-8 p-6 md:p-8"><div className="space-y-5 text-base leading-8 text-slate-300"><p>我是黃元逸 Eason，Eason Systems 的開發者。</p><p>我目前仍是學生，但已經實作過真實上線的 LINE / Web 系統，包括累積超過 30,000 名使用者的公廁查詢 LINE Bot，以及資料查詢、Dashboard、流程整理與後台管理工具。</p><p>Eason Systems 的方向不是單純做網站，而是協助小團隊把容易混亂的數位流程整理成可使用、可維護、可追蹤的系統。</p><p>現在進一步延伸到 AI 工作流：當團隊開始用 AI 撰寫客戶回覆、社群貼文、合作信與提案內容時，我希望協助團隊建立 AI 產出送出前的審核流程，讓 AI 不只是提高效率，也能被安全地使用。</p><div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-5 text-cyan-50">年輕、快、懂 AI，並且已有實作經驗。仍在累積案例，所以合作方式可以更彈性，但功能範圍、時程、付款與驗收仍會正式確認。</div></div></Card></section>;
}

function ContactPage() {
  const aiMail = "mailto:easonlsy1019@gmail.com?subject=AI%20Gate%20%E8%A9%A6%E9%BB%9E%E5%90%88%E4%BD%9C%E7%94%B3%E8%AB%8B&body=%E5%9C%98%E9%9A%8A%E5%90%8D%E7%A8%B1%EF%BC%9A%0A%E7%9B%AE%E5%89%8D%E6%98%AF%E5%90%A6%E4%BD%BF%E7%94%A8%20AI%20%E7%94%A2%E5%87%BA%E5%B0%8D%E5%A4%96%E5%85%A7%E5%AE%B9%EF%BC%9A%0A%E4%B8%BB%E8%A6%81%E5%85%A7%E5%AE%B9%E9%A1%9E%E5%9E%8B%EF%BC%9A%0A%E6%9C%80%E6%93%94%E5%BF%83%20AI%20%E5%87%BA%E4%BB%80%E9%BA%BC%E9%8C%AF%EF%BC%9A%0A%E6%98%AF%E5%90%A6%E9%A1%98%E6%84%8F%E6%8F%90%E4%BE%9B%203%20%E5%89%87%E5%85%A7%E5%AE%B9%E5%85%8D%E8%B2%BB%E6%B8%AC%E8%A9%A6%EF%BC%9A%0A%E8%81%AF%E7%B5%A1%E6%96%B9%E5%BC%8F%EF%BC%9A";
  const workflowMail = "mailto:easonlsy1019@gmail.com?subject=%E6%B5%81%E7%A8%8B%E7%B3%BB%E7%B5%B1%E5%90%88%E4%BD%9C%E8%A8%8E%E8%AB%96&body=%E5%96%AE%E4%BD%8D%E5%90%8D%E7%A8%B1%EF%BC%9A%0A%E7%9B%AE%E5%89%8D%E6%B5%81%E7%A8%8B%E5%95%8F%E9%A1%8C%EF%BC%9A%0A%E6%98%AF%E5%90%A6%E5%B7%B2%E6%9C%89%20Google%20%E8%A1%A8%E5%96%AE%20%2F%20LINE%20%2F%20%E5%AE%98%E7%B6%B2%20%2F%20CRM%EF%BC%9A%0A%E6%83%B3%E6%95%B4%E7%90%86%E7%9A%84%E6%B5%81%E7%A8%8B%EF%BC%9A%0A%E9%A0%90%E7%AE%97%E7%AF%84%E5%9C%8D%EF%BC%9A%0A%E8%81%AF%E7%B5%A1%E6%96%B9%E5%BC%8F%EF%BC%9A";

  return <section className="mx-auto max-w-7xl px-6 pb-20 pt-12"><SectionTitle eyebrow="Contact" title="聯絡 / 申請試點" text="請先選擇你想討論的是 AI Gate，還是原本的流程系統。這樣比較不會混在一起。" /><div className="mt-10 grid gap-6 md:grid-cols-2"><Card className="p-6 md:p-8"><ShieldCheck className="mb-5 h-8 w-8 text-cyan-200" /><h2 className="text-2xl font-bold text-white">我想申請 AI Gate 試點</h2><p className="mt-5 text-sm leading-6 text-slate-300">請提供：團隊名稱、是否使用 AI 產出對外內容、主要內容類型、最擔心 AI 出什麼錯、是否願意提供 3 則內容免費測試、聯絡方式。</p><Button href={aiMail} className="mt-6">申請 AI Gate 試點 <Mail className="ml-2 h-4 w-4" /></Button></Card><Card className="p-6 md:p-8"><Workflow className="mb-5 h-8 w-8 text-cyan-200" /><h2 className="text-2xl font-bold text-white">我想討論流程系統</h2><p className="mt-5 text-sm leading-6 text-slate-300">請提供：單位名稱、目前流程問題、是否已有 Google 表單 / LINE / 官網 / CRM、想整理的流程、預算範圍、聯絡方式。</p><Button href={workflowMail} className="mt-6" variant="outline">討論流程系統 <Mail className="ml-2 h-4 w-4" /></Button></Card></div><Card className="mt-6 p-5"><p className="text-sm leading-7 text-slate-300">Email：<a className="text-cyan-200 hover:text-cyan-100" href="mailto:easonlsy1019@gmail.com">easonlsy1019@gmail.com</a><span className="mx-3 text-slate-600">|</span>LINE ID：1234567890eason60708</p></Card></section>;
}

function AppContent({ route }) {
  if (route === "/ai-gate") return <AiGatePage />;
  if (route === "/workflow-systems") return <WorkflowSystemsPage />;
  if (route === "/cases") return <CasesPage />;
  if (route === "/pricing") return <PricingPage />;
  if (route === "/about") return <AboutPage />;
  if (route === "/contact") return <ContactPage />;
  return <HomePage />;
}

export default function App() {
  const route = useRoute();
  const title = useMemo(() => {
    const map = { "/": "Eason Systems", "/ai-gate": "AI Gate", "/workflow-systems": "流程系統", "/cases": "案例", "/pricing": "方案", "/about": "關於", "/contact": "聯絡" };
    return map[route] || "Eason Systems";
  }, [route]);

  useEffect(() => {
    document.title = `${title}｜Eason Systems`;
  }, [title]);

  return <Shell route={route}><AppContent route={route} /></Shell>;
}
