import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
  Search,
  Sparkles,
  Workflow,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

function getRoute() {
  if (typeof window === "undefined") return "/";
  const hash = window.location.hash.replace(/^#/, "");
  return hash || "/";
}

function useRoute() {
  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    const onChange = () => setRoute(getRoute());
    window.addEventListener("hashchange", onChange);
    window.addEventListener("popstate", onChange);
    return () => {
      window.removeEventListener("hashchange", onChange);
      window.removeEventListener("popstate", onChange);
    };
  }, []);

  return route;
}

function Card({ children, className = "" }) {
  return (
    <div className={`rounded-3xl border border-white/10 bg-white/[0.07] shadow-sm backdrop-blur ${className}`}>
      {children}
    </div>
  );
}

function Button({ children, to, href, variant = "solid", className = "" }) {
  const styles =
    variant === "outline"
      ? "border border-white/15 bg-white/[0.03] text-slate-100 hover:bg-white/10"
      : "bg-cyan-300 text-slate-950 hover:bg-cyan-200";
  const props = to ? { href: `#${to}` } : { href: href || "#" };

  return (
    <a
      {...props}
      className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition ${styles} ${className}`}
    >
      {children}
    </a>
  );
}

function SectionTitle({ eyebrow, title, text, className = "" }) {
  return (
    <div className={`max-w-3xl ${className}`}>
      {eyebrow && <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">{eyebrow}</p>}
      <h2 className="mt-3 text-3xl font-bold leading-tight text-white md:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-8 text-slate-300">{text}</p>}
    </div>
  );
}

function Header({ route }) {
  const nav = [
    ["/", "主頁介紹"],
    ["/line-web-systems", "LINE / Web 系統"],
    ["/ai-process-desk", "AI Process Desk"],
  ];

  return (
    <header className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 md:flex-row md:items-center md:justify-between">
      <a href="#/" className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400/15 ring-1 ring-cyan-300/25">
          <Bot className="h-5 w-5 text-cyan-300" />
        </div>
        <div>
          <p className="text-sm font-semibold tracking-wide text-white">Eason Systems</p>
          <p className="text-xs text-slate-400">Workflow Systems · AI Workspace</p>
        </div>
      </a>

      <nav className="flex w-full items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 md:w-auto">
        {nav.map(([to, label]) => (
          <a
            key={to}
            href={`#${to}`}
            className={`flex-1 rounded-full px-4 py-2.5 text-center text-sm transition md:flex-none ${
              route === to ? "bg-cyan-300 text-slate-950" : "text-slate-300 hover:bg-white/10 hover:text-white"
            }`}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>© Eason Systems. 把混亂流程整理成可使用、可維護的系統。</p>
        <div className="flex flex-wrap gap-4">
          <a className="hover:text-white" href="#/">主頁介紹</a>
          <a className="hover:text-white" href="#/line-web-systems">LINE / Web 系統</a>
          <a className="hover:text-white" href="#/ai-process-desk">AI Process Desk</a>
          <a className="hover:text-white" href="mailto:easonlsy1019@gmail.com">easonlsy1019@gmail.com</a>
        </div>
      </div>
    </footer>
  );
}

function Shell({ route, children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,#0e7490_0%,transparent_28%),radial-gradient(circle_at_85%_12%,#312e81_0%,transparent_30%),linear-gradient(135deg,#020617_0%,#07111f_45%,#0f172a_100%)] text-slate-100 antialiased [font-feature-settings:'palt']">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:76px_76px] opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.38)_58%,rgba(2,6,23,0.92)_100%)]" />
        <div className="absolute -right-32 -top-40 h-[30rem] w-[30rem] rounded-full bg-cyan-500/25 blur-3xl" />
        <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -left-28 top-96 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>
      <div className="relative z-10">
        <Header route={route} />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}

function ProofCard() {
  return (
    <Card className="p-6 md:p-8">
      <p className="text-sm font-semibold text-cyan-200">Real system evidence</p>
      <h2 className="mt-3 text-3xl font-bold text-white">公廁查詢 LINE Bot｜30,000+ 使用者</h2>
      <p className="mt-5 leading-8 text-slate-300">
        這是 Eason Systems 目前最重要的信任素材：一個已實際上線的 LINE / Web 系統，讓使用者透過 LINE 完成定位查詢、取得附近公廁資訊，管理端也能查看查詢紀錄與使用數據。
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {[
          ["30,000+", "真實使用者"],
          ["LINE / Web", "實際上線入口"],
          ["Dashboard", "查詢與使用紀錄"],
        ].map(([num, label]) => (
          <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <p className="text-2xl font-bold text-cyan-200">{num}</p>
            <p className="mt-1 text-xs text-slate-400">{label}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button href="https://toilet-mvp-dev.vercel.app/#media" variant="outline">
          查看案例 <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
        <Button href="https://line.me/R/ti/p/@439avyvf" variant="outline">
          體驗 LINE Bot <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
}

function ServiceCard({ icon: Icon, title, subtitle, text, points, to, button, variant = "solid" }) {
  return (
    <Card className="p-6 md:p-8">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10">
        <Icon className="h-6 w-6 text-cyan-200" />
      </div>
      <p className="text-sm font-semibold text-cyan-200">{subtitle}</p>
      <h2 className="mt-2 text-3xl font-bold text-white">{title}</h2>
      <p className="mt-4 leading-8 text-slate-300">{text}</p>
      <div className="mt-6 space-y-3">
        {points.map((point) => (
          <div key={point} className="flex gap-3 text-sm leading-6 text-slate-300">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-200" />
            <span>{point}</span>
          </div>
        ))}
      </div>
      <Button to={to} className="mt-7" variant={variant}>
        {button} <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </Card>
  );
}

function HomePage() {
  const services = [
    {
      icon: Workflow,
      title: "LINE / Web 流程系統",
      subtitle: "對外服務入口與資訊導覽",
      text: "適合活動、課程、公益、營隊與小型組織。重點不是重做所有工具，而是把民眾進入表單、官網、報名頁或既有系統前的那段路整理清楚。",
      points: ["LINE / Web 導覽入口", "活動資訊、FAQ、報名前說明", "導回 Google 表單、官網、報名頁或既有系統", "後台資料管理與基礎使用紀錄"],
      to: "/line-web-systems",
      button: "查看 LINE / Web 系統",
      variant: "solid",
    },
    {
      icon: Sparkles,
      title: "AI Process Desk",
      subtitle: "對內重複工作與 AI 工作區",
      text: "適合行銷、顧問、招募、課程與內容團隊。當團隊已經開始用 AI，但每個人都自己開 ChatGPT、自己貼資料、自己改格式時，我協助把其中一段重複工作整理成專屬 AI 工作區。",
      points: ["活動資料 → 社群文案初稿", "會議紀錄 → 追蹤信草稿", "客戶資料 → 企劃摘要", "課程資料 → FAQ / 報名前說明"],
      to: "/ai-process-desk",
      button: "查看 AI Process Desk",
      variant: "outline",
    },
  ];

  const direction = [
    ["現在的主力", "先把 LINE / Web 流程系統做好，累積現金流、交付經驗與可展示案例。這是 Eason Systems 目前最穩的基礎。"],
    ["正在拓展的新方向", "AI Process Desk 不是把公司硬轉成 AI 顧問，而是把同一種流程整理能力，延伸到團隊內部的整理、摘要、改寫與初稿工作。"],
    ["長期定位", "Eason Systems 要做的不是單次漂亮頁面，而是把常見的混亂流程整理成可複製、可維護、可以逐步產品化的系統。"],
  ];

  return (
    <>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-16 pt-12 lg:grid-cols-[minmax(0,1fr)_0.9fr] lg:items-center">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.55 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200">
            <Sparkles className="h-4 w-4" /> Eason Systems
          </div>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
            把混亂的資訊入口與重複工作，
            <span className="block text-cyan-300">整理成可以真正使用的系統</span>
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
            我是黃元逸 Eason，Eason Systems 的開發者。我的核心能力不是只寫一個網頁或做一個 Bot，而是把原本分散在 LINE、表單、官網、文件、人工回覆與 AI 對話裡的流程，整理成清楚、可操作、可維護的系統。
          </p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
            目前 Eason Systems 有兩條服務線：一條是已經有真實案例支撐的 LINE / Web 流程系統；另一條是正在拓展的 AI Process Desk，協助團隊把重複整理、摘要、改寫與初稿工作變成專屬 AI 工作區。兩條線看起來不同，但底層都是同一件事：把混亂流程整理成能被團隊穩定使用的工具。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="/line-web-systems">LINE / Web 系統 <ArrowRight className="ml-2 h-4 w-4" /></Button>
            <Button to="/ai-process-desk" variant="outline">AI Process Desk <ArrowRight className="ml-2 h-4 w-4" /></Button>
          </div>
        </motion.div>

        <ProofCard />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <SectionTitle
          eyebrow="Positioning"
          title="Eason Systems 的網站定位"
          text="這個網站不是讓客戶看一堆散亂方案，而是讓對方快速理解：我在做流程整理型系統。外部使用者找不到資訊，就做 LINE / Web 入口；內部團隊一直重複整理，就做 AI Process Desk。"
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <SectionTitle
          eyebrow="Transformation"
          title="不是否定原本業務，而是從流程系統往第二產品線延伸"
          text="原本的 LINE / Web 導覽系統仍然是 Eason Systems 的商業基礎；AI Process Desk 是在這個基礎上長出的新方向。它不是換一個流行名詞，而是把同樣的流程拆解、入口設計與系統化能力，用在團隊內部的 AI 工作流程上。"
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {direction.map(([title, text]) => (
            <Card key={title} className="p-6">
              <p className="text-sm font-semibold text-cyan-200">{title}</p>
              <p className="mt-3 leading-8 text-slate-300">{text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <SectionTitle
          eyebrow="How I Think"
          title="我通常先問：哪一段流程最常被重複、最容易亂、最值得先系統化？"
          text="不管是 LINE / Web 系統還是 AI Process Desk，第一步都不是先堆功能，而是把實際流程拆清楚：誰會使用、資料從哪裡來、每次重複做什麼、最後要輸出什麼、誰要確認。這樣做出來的系統才不會只是漂亮頁面，而是真的能減少重複工作。"
        />
        <div className="mt-8 grid gap-5 md:grid-cols-4">
          {[
            [Search, "看見問題", "先找出使用者或團隊真正卡住的地方。"],
            [Workflow, "整理流程", "把入口、欄位、步驟、輸出格式整理清楚。"],
            [Database, "做成系統", "把流程變成 LINE、Web、後台或 AI 工作區。"],
            [LineChart, "留下紀錄", "讓查詢、使用與成果能被整理和改善。"],
          ].map(([Icon, title, text]) => (
            <Card key={title} className="p-5">
              <Icon className="mb-4 h-5 w-5 text-cyan-200" />
              <h3 className="font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">{text}</p>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}

function LineWebSystemsPage() {
  const contactMail = `mailto:easonlsy1019@gmail.com?subject=${encodeURIComponent("LINE / Web 流程系統合作討論")}&body=${encodeURIComponent("您好，我想討論 LINE / Web 流程系統合作。\n\n單位名稱：\n目前民眾最常卡住或重複詢問的地方：\n目前已有的工具（官網 / LINE / Google 表單 / 報名頁 / netiCRM）：\n想整理的流程：\n聯絡方式：")}`;

  const pains = [
    "活動資訊、報名連結、FAQ、注意事項散在不同地方",
    "民眾一直從 LINE、私訊、Email 問同樣問題",
    "其實已經有 Google 表單、官網或報名頁，但使用者進去前仍找不到入口",
    "LINE 官方帳號目前只是公告欄，還沒有變成查詢與分流入口",
    "活動後還要手動整理查詢、報名、熱門問題或成果資料",
    "資料需要更新，但每次改內容都要找人處理",
  ];

  const solutions = [
    [Bot, "LINE / Web 前端導覽", "把活動分類、常見問題、聯絡窗口、報名連結整理成清楚入口，讓民眾不用到處找。"],
    [Search, "FAQ 與報名前分流", "在民眾進入表單前，先確認適合哪個活動、要準備什麼、是否符合資格。"],
    [ExternalLink, "導回既有工具", "不一定重做原本系統，而是把民眾導回 Google 表單、官網、報名頁、捐款頁或 netiCRM。"],
    [Database, "後台與資料維護", "需要長期更新時，可以做簡易後台，讓管理者自己更新活動、FAQ、連結或據點資料。"],
    [MapPin, "據點 / 地圖查詢", "適合服務據點、救傷中心、公共資源或地方資料，讓使用者依位置找到最近資源。"],
    [LineChart, "查詢紀錄與成果整理", "留下查詢、點擊、熱門問題或分流紀錄，方便活動後檢視與優化。"],
  ];

  const projects = [
    ["活動 / 課程流程系統", "適合課程、營隊、講座、工作坊與系列活動，把活動前、中、後的資訊和報名流程整理成一條清楚路徑。"],
    ["公益 / 協會服務入口", "適合 NGO、協會、社福或公益單位，整理民眾詢問、志工資訊、活動入口、捐款或服務據點。"],
    ["LINE Bot + 後台資料管理", "適合需要持續更新資料、FAQ、據點或活動資訊的團隊，讓內容不必每次都靠工程師改。"],
    ["據點查詢 / 地圖推薦", "適合服務地點、公共資源、救傷中心或地方資料查詢，讓使用者能快速找到最近或最合適的地點。"],
  ];

  return (
    <>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-16 pt-12 lg:grid-cols-[minmax(0,1fr)_0.85fr] lg:items-center">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.55 }}>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">LINE / Web Systems</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
            把民眾進入系統前的那段路，
            <span className="block text-cyan-300">整理成可查詢、可維護的入口</span>
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
            很多組織其實已經有官網、Google 表單、netiCRM、報名頁或捐款系統。真正卡住的，常常不是沒有工具，而是民眾進去之前找不到正確入口，只好一直問 LINE、私訊或 Email。
          </p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
            我協助把活動資訊、FAQ、報名方式、捐款入口、志工資訊與既有連結，整理成清楚的 LINE / Web 導覽流程。目的不是硬重做系統，而是降低民眾找不到資訊與同仁重複回覆的成本。
          </p>
          <Button href={contactMail} className="mt-8">
            討論 LINE / Web 流程 <Mail className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
        <ProofCard />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <SectionTitle eyebrow="Problem" title="常見問題：資訊明明都有，但民眾還是一直問" />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pains.map((point) => (
            <Card key={point} className="p-5">
              <CheckCircle2 className="mb-4 h-5 w-5 text-cyan-200" />
              <p className="text-sm leading-7 text-slate-300">{point}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <SectionTitle
          eyebrow="Solution"
          title="我補上的，是既有工具前面的入口、導覽與分流"
          text="如果原本的 Google 表單、官網、報名頁或 CRM 已經能處理資料，就不需要一開始全部重做。更常見的做法，是先補上前面的 LINE / Web 導覽層，讓使用者先找到正確資訊，再進到原本工具。"
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map(([Icon, title, text]) => (
            <Card key={title} className="p-6">
              <Icon className="mb-5 h-6 w-6 text-cyan-200" />
              <h3 className="text-xl font-bold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <SectionTitle
          eyebrow="Projects"
          title="常見合作方向"
          text="每個案子會依照實際流程、資料量、是否需要後台、是否需要長期更新來評估範圍。網站先讓你理解我能處理哪一類問題，正式合作前再確認功能、時程、付款與驗收。"
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {projects.map(([title, text]) => (
            <Card key={title} className="p-6">
              <h3 className="text-2xl font-bold text-white">{title}</h3>
              <p className="mt-3 leading-8 text-slate-300">{text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <SectionTitle eyebrow="Process" title="合作通常怎麼開始？" />
        <div className="mt-8 grid gap-5 md:grid-cols-4">
          {[
            ["01", "了解目前流程", "先看民眾怎麼問、資料在哪裡、現在用哪些工具。"],
            ["02", "整理第一版範圍", "判斷哪些沿用原本工具，哪些值得做成系統入口。"],
            ["03", "確認交付內容", "把頁面、LINE 流程、後台、資料欄位與驗收方式說清楚。"],
            ["04", "開發、測試、上線", "完成後提供操作說明，後續可依需求維護或擴充。"],
          ].map(([num, title, text]) => (
            <Card key={num} className="p-5">
              <p className="text-sm font-semibold text-cyan-200">{num}</p>
              <h3 className="mt-2 font-bold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}

function AIWorkspacePreview() {
  return (
    <Card className="overflow-hidden border-cyan-300/20 bg-slate-950/50">
      <div className="border-b border-white/10 bg-white/[0.04] px-5 py-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">AI Workspace Preview</p>
        <h3 className="mt-1 text-xl font-bold text-white">活動資料 → 社群文案初稿</h3>
      </div>
      <div className="grid gap-5 p-5 md:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          {[
            ["活動名稱", "春季品牌體驗日"],
            ["活動資訊", "時間、地點、亮點、報名方式……"],
            ["目標受眾", "企業客戶 / 年輕族群 / 親子家庭"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-xs text-slate-400">{label}</p>
              <p className="mt-2 text-sm text-slate-200">{value}</p>
            </div>
          ))}
          <button type="button" className="w-full rounded-2xl bg-cyan-300 px-4 py-3 text-sm font-bold text-slate-950">
            產生 AI 初稿
          </button>
        </div>
        <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4">
          <p className="text-sm font-semibold text-cyan-100">輸出結果</p>
          <div className="mt-4 space-y-3 text-sm leading-7 text-slate-200">
            <p><span className="font-semibold text-white">Facebook：</span>整理活動亮點、對象、CTA 與報名提醒。</p>
            <p><span className="font-semibold text-white">Threads：</span>轉成較短、較口語的貼文初稿。</p>
            <p><span className="font-semibold text-white">短版文案：</span>可放 LINE、EDM 或廣告素材。</p>
          </div>
          <div className="mt-5 flex gap-2 text-xs">
            <span className="rounded-full bg-white/10 px-3 py-1 text-slate-200">複製結果</span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-slate-200">人工確認</span>
          </div>
        </div>
      </div>
    </Card>
  );
}

function AIProcessDeskPage() {
  const aiMail = `mailto:easonlsy1019@gmail.com?subject=${encodeURIComponent("AI Process Desk 合作討論")}&body=${encodeURIComponent("您好，我想討論 AI Process Desk。\n\n公司 / 團隊名稱：\n目前最重複的整理、摘要、改寫或初稿工作：\n目前是誰在做、每週大約幾次：\n希望 AI 先協助哪一段流程：\n聯絡方式：")}`;

  const examples = [
    ["活動資料 → 社群文案初稿", "將活動資訊、亮點、受眾與報名方式整理成多平台文案初稿，供團隊確認後使用。"],
    ["會議紀錄 → 追蹤信草稿", "將會議重點、待確認事項與下一步整理成可寄出的客戶追蹤信。"],
    ["客戶資料 → 企劃摘要", "將客戶簡報、訪談紀錄或需求資料整理成企劃重點與提案方向。"],
    ["課程資料 → FAQ / 報名前說明", "將課程資訊、注意事項與常見問題整理成一致的報名前導覽內容。"],
    ["履歷與職缺 → 候選人摘要", "將履歷重點與職缺條件整理成候選人介紹與推薦說明。"],
    ["民眾或客戶問題 → 回覆初稿", "將常見問題整理成一致、可人工確認的回覆草稿。"],
  ];

  const audiences = [
    ["行銷 / 內容團隊", "常需要把活動、產品、品牌資料改寫成不同平台內容。"],
    ["顧問 / 企業服務", "常需要整理會議紀錄、客戶訪談、提案重點與追蹤信。"],
    ["招募 / 獵頭", "常需要整理履歷、職缺條件、面試紀錄與候選人推薦摘要。"],
    ["課程 / 活動團隊", "常需要整理課程資訊、FAQ、報名前說明與活動後摘要。"],
  ];

  return (
    <>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-16 pt-12 lg:grid-cols-[minmax(0,1fr)_0.9fr] lg:items-center">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.55 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200">
            <Sparkles className="h-4 w-4" /> AI Process Desk
          </div>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
            把團隊重複的整理、摘要與初稿工作，
            <span className="block text-cyan-300">變成專屬 AI 工作區</span>
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
            很多團隊已經開始使用 AI，但實際情況常常是每個人自己開 ChatGPT、自己貼資料、自己想提示詞、自己整理結果。AI Process Desk 想解決的不是「要不要用 AI」，而是把已經常常重複的工作整理成團隊可以固定使用的 AI 工作流程。
          </p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
            你不需要更換原本系統，也不需要一開始導入大型平台。可以先從一段明確、每週都會發生的整理或初稿工作開始：固定輸入欄位、固定輸出格式，AI 先產出草稿，人再確認與修改。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={aiMail}>討論一段 AI 工作流程 <Mail className="ml-2 h-4 w-4" /></Button>
            <Button href="https://toilet-mvp-dev.vercel.app/#media" variant="outline">
              查看真實系統案例 <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
        <AIWorkspacePreview />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <SectionTitle
          eyebrow="Why"
          title="問題不是沒有 AI，而是 AI 沒有進入固定流程"
          text="員工自己使用 AI 很快，但公司很難沉澱成共同工作方式。今天 A 同事這樣問，明天 B 同事那樣問，輸出格式、語氣、重點都不一致。AI Process Desk 的重點，是把高頻工作整理成固定流程，讓團隊每次都能用同一套欄位與輸出格式產生可修改的初稿。"
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            [FileText, "從零整理太耗時", "文案、摘要、追蹤信、企劃重點，每次都重新整理，容易消耗團隊時間。"],
            [Layers, "輸出格式不一致", "每個人問 AI 的方式不同，最後產出的格式、語氣與重點也不同。"],
            [ClipboardCheck, "需要人工確認", "AI 不取代判斷，而是先產出可修改初稿，最後仍由人確認、補充與採用。"],
          ].map(([Icon, title, text]) => (
            <Card key={title} className="p-6">
              <Icon className="mb-5 h-6 w-6 text-cyan-200" />
              <h3 className="text-xl font-bold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <SectionTitle
          eyebrow="Examples"
          title="可以先整理成 AI 工作區的流程"
          text="這些不是制式套版，而是常見起點。實際會先看你的團隊每週最常重複哪一段工作，再決定第一個 AI 工作流程要做什麼。"
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {examples.map(([title, text]) => (
            <Card key={title} className="p-6">
              <p className="text-sm font-semibold text-cyan-200">AI Workflow</p>
              <h3 className="mt-2 text-xl font-bold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionTitle
            eyebrow="Audience"
            title="適合哪一類團隊？"
            text="AI Process Desk 比較適合已經有固定產出工作、但還不想自己研究一整套 AI 平台的團隊。重點是先讓一段工作變快、變穩、變成團隊可以共用的流程。"
          />
          <div className="grid gap-4 md:grid-cols-2">
            {audiences.map(([title, text]) => (
              <Card key={title} className="p-5">
                <h3 className="font-bold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <SectionTitle eyebrow="How It Works" title="合作會怎麼開始？" />
        <div className="mt-8 grid gap-5 md:grid-cols-4">
          {[
            ["01", "找出重複工作", "先確認團隊哪一段整理、摘要、改寫或初稿工作最常發生。"],
            ["02", "整理輸入與輸出", "把需要填的資料、希望輸出的格式、語氣與注意事項整理清楚。"],
            ["03", "做成 AI 工作區", "讓使用者透過固定頁面輸入資料，產生可修改的 AI 初稿。"],
            ["04", "人工確認與調整", "團隊確認結果是否可用，再依實際使用狀況微調流程。"],
          ].map(([num, title, text]) => (
            <Card key={num} className="p-5">
              <p className="text-sm font-semibold text-cyan-200">{num}</p>
              <h3 className="mt-2 font-bold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}

function Content({ route }) {
  if (route === "/") return <HomePage />;
  if (route === "/line-web-systems") return <LineWebSystemsPage />;
  if (route === "/ai-process-desk") return <AIProcessDeskPage />;
  return <HomePage />;
}

export default function App() {
  const route = useRoute();

  useEffect(() => {
    const titles = {
      "/": "Eason Systems 主頁介紹",
      "/line-web-systems": "LINE / Web 系統",
      "/ai-process-desk": "AI Process Desk",
    };
    document.title = `${titles[route] || "Eason Systems"}｜Eason Systems`;
  }, [route]);

  return (
    <Shell route={route}>
      <Content route={route} />
    </Shell>
  );
}
