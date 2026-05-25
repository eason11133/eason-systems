import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Database,
  LineChart,
  ShieldCheck,
  Bot,
  Search,
  Sparkles,
  ExternalLink,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function Card({ children, className = "" }) {
  return <div className={`rounded-3xl border border-white/10 bg-white/[0.08] ${className}`}>{children}</div>;
}

function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

function Button({ children, variant = "solid", className = "" }) {
  const base = "inline-flex items-center justify-center rounded-2xl px-6 py-4 text-base font-medium transition";
  const styles =
    variant === "outline"
      ? "border border-slate-600 bg-transparent text-slate-100 hover:bg-white/10"
      : "bg-cyan-300 text-slate-950 hover:bg-cyan-200";

  return <button className={`${base} ${styles} ${className}`}>{children}</button>;
}

const content = {
  zh: {
    navContact: "聯絡評估",
    badge: "3 萬+ 真實使用者驗證的 LINE 系統開發經驗",
    heroTop: "把你的想法，",
    heroHighlight: "做成真的能上線使用的系統",
    heroText:
      "我協助有明確需求的個人、團隊與組織，將 LINE Bot、資料查詢、後台管理、定位搜尋或客製流程做成可以上線運作的系統。你不一定已經知道完整功能，只要有想解決的問題或想做的服務，我可以一起把需求拆成可執行的版本。",
    heroButton: "查看方案、價格與案例",
    stat1Title: "30,000+",
    stat1Text: "LINE 系統真實使用者案例",
    stat2Title: "自助查詢",
    stat2Text: "把想法整理成可執行流程",
    stat3Title: "數據紀錄",
    stat3Text: "可擴充查詢、點擊與成果追蹤",
    rightBadge: "Real System Evidence",
    rightSmall: "我可以協助什麼",
    rightTitle: "從想法、需求，到可以運作的系統",
    rightCards: [
      ["把需求拆成流程", "先釐清使用者會怎麼操作、管理者要維護什麼、哪些功能要先做，避免一開始就做成過大的系統。"],
      ["做出可上線版本", "依需求建立 LINE Bot、查詢流程、資料管理、後台或簡易網站，讓服務真的能被使用。"],
      ["保留擴充空間", "後續可依需求加入排序模型、使用紀錄、Dashboard、月報表或更多後台功能。"],
    ],
    miniStats: [["流程", "需求拆解"], ["系統", "開發上線"], ["擴充", "後續升級"]],
    problemLabel: "Problem",
    problemTitle: "不一定是公益或學校，只要有想做的服務，就可以先拆成可執行系統",
    painPoints: [
      "有想法但還不知道要做成什麼功能",
      "資料、名單、據點或內容需要被查詢",
      "資料散在 Excel、網站、PDF 或表單中",
      "LINE 官方帳號想變成真正服務入口",
      "資料更新需要人工處理，維護成本高",
      "未來希望留下使用紀錄或成果數據",
    ],
    buildLabel: "What I Build",
    buildTitle: "我不是只接固定功能，而是幫你把需求整理成可以開發與上線的版本",
    buildText:
      "適合已經有初步想法、服務流程、資料清單、活動資訊、客戶詢問或管理需求的人。可以先做核心可用版，再依需求擴充後台、查詢、排序、統計或網站功能。",
    features: [
      { icon: MapPin, title: "把據點查詢變簡單", text: "使用者不用翻網站或打電話，只要在 LINE 傳位置，就能找到附近合適的服務點。" },
      { icon: Database, title: "資料自己能維護", text: "服務據點、FAQ、分類資訊可放進後台管理，降低每次改資料都找工程師的成本。" },
      { icon: Search, title: "結果不是只照距離排", text: "可依距離、資料可信度、資訊完整度與狀態做排序，減少使用者找到錯誤或不可用資訊的機率。" },
      { icon: LineChart, title: "能留下成果數據", text: "可記錄查詢、展示、點擊與版本表現，方便做成活動成果、補助報告或內部優化依據。" },
    ],
    flowLabel: "Service Flow",
    flowTitle: "從一次流程評估開始，不一定一開始就做大系統",
    offerSteps: [
      ["01｜流程盤點", "先整理你想解決的問題、使用者流程、資料來源、管理方式與第一版最需要完成的功能。"],
      ["02｜LINE 查詢入口", "依需求建立 LINE Bot、查詢流程、表單串接、資料查詢或簡易網站，讓使用者可以開始操作。"],
      ["03｜後台與資料整理", "如果有資料或內容需要長期更新，可加入後台管理，讓你不用每次改內容都重新找工程師。"],
      ["04｜進階排序與數據擴充", "若需要更完整的產品化，可再擴充排序模型、使用紀錄、Dashboard、月報表、權限或維護方案。"],
    ],
    outcomes: ["把模糊想法整理成清楚功能與流程", "讓使用者能真的在線上完成查詢或操作", "讓資料或內容可以由管理者自己維護", "讓系統未來能累積使用紀錄與成果數據"],
    packageLabel: "Plans & Pricing",
    packageTitle: "可以先從小網頁 / LINE 整理開始，再升級成完整系統",
    packageText: "不一定一開始就做 3 萬以上的大系統。若只是想讓活動資訊更清楚、整理 LINE 官方帳號、放報名表與 FAQ，也可以先從小方案開始。目前價格以學生開發者優惠價呈現，會比一般市場客製行情低一些；若合作滿意，也希望能提供推薦語、推薦信或同意匿名案例回饋。",
    smallPlanLabel: "Small Starter Plans",
    smallPlanTitle: "低門檻小方案，適合先改善現有流程",
    smallPlanText: "這些方案是學生開發者優惠價，適合還不確定要不要做完整系統的客戶。先把網頁、LINE、FAQ、表單與資訊整理好，後續若需要資料查詢、後台或 Dashboard，再升級成完整系統。若合作滿意，歡迎提供推薦語或案例回饋，作為後續作品集與合作參考。",
    smallPlans: [
      { name: "一頁式活動 / 課程網頁", price: "學生價 NT$ 5,000–12,000", subtitle: "適合活動、課程、營隊、講座、工作坊", items: ["活動介紹與重點整理", "報名連結 / 表單整合", "時間地點與注意事項", "FAQ 與聯絡資訊"] },
      { name: "LINE 官方帳號整理", price: "學生價 NT$ 3,000–8,000", subtitle: "適合已經有 LINE，但資訊分散或選單不好用", items: ["圖文選單規劃", "常見問題分類", "表單 / 官網 / 社群連結整理", "基礎回覆文字整理"] },
      { name: "小型品牌 / 服務介紹頁", price: "學生價 NT$ 8,000–18,000", subtitle: "適合小店、個人品牌、服務頁或作品頁", items: ["品牌與服務介紹", "作品 / 案例區塊", "聯絡方式與社群連結", "基礎 RWD 版面"] },
      { name: "小型 FAQ / 資訊整理版", price: "學生價 NT$ 8,000–20,000", subtitle: "適合重複詢問很多，但暫時不需要後台的單位", items: ["5–10 個常見問題整理", "基本分流與按鈕導覽", "外部連結整合", "基礎測試與操作說明"] },
    ],
    upgradeNote: "小方案不包含客製後台、資料庫、Dashboard、定位查詢或複雜流程。價格為學生開發者優惠價，範圍會在合作前確認；若後續需要完整系統，可直接延伸成下方基礎 / 標準 / 進階版本。",
    smallPlanButton: "選這個方案來信討論",
    smallPlanMailSubject: "小方案合作詢問｜",
    crmPlanButton: "選這個 CRM 方案來信討論",
    crmMailSubject: "接案 CRM / 管理系統詢問｜",
    crmLabel: "CRM / Internal Tools",
    crmTitle: "也可以客製個人工作管理或接案 CRM",
    crmText: "除了對外網頁與 LINE 系統，也可以協助個人接案者、小型工作室或業務團隊做內部管理工具。適合用來追蹤潛在客戶、寄信進度、回覆狀態、預計收益、實際收款、每日準備事項與交付日期。",
    crmPlans: [
      { name: "個人本機 CRM", price: "學生價 NT$ 15,000 起", subtitle: "適合個人接案者、學生或小型業務自己使用", items: ["潛在客戶與狀態追蹤", "日期滾輪與每日事項", "預計收益 / 實際收款", "資料存在使用者瀏覽器"] },
      { name: "客製欄位 CRM", price: "學生價 NT$ 25,000–40,000 起", subtitle: "適合有固定流程、欄位與追蹤需求的工作室", items: ["客製狀態與欄位", "批量貼上與搜尋篩選", "進行中工作與交付日期", "依實際流程調整版面"] },
      { name: "雲端團隊 CRM", price: "學生價 NT$ 50,000 起，依需求評估", subtitle: "適合多人共用，需要登入、資料庫或權限管理", items: ["登入與雲端資料庫", "多人共用與權限規劃", "備份與資料管理", "可加 Dashboard / 統計分析"] },
    ],
    crmNote: "個人本機版適合自己使用，價格較低，但資料主要存在同一台電腦與瀏覽器。若需要多人登入、雲端同步、權限、正式資料庫或長期維護，會建議改做雲端團隊版，價格也會依需求提高。",
    maintenancePlanButton: "選這個維護方案來信討論",
    maintenanceMailSubject: "維護方案詢問｜",
    maintenanceLabel: "Maintenance Options",
    maintenanceTitle: "上線後也可以選擇單次修改或每月維護",
    maintenanceText: "小方案或完整系統完成後，如果需要後續調整、內容更新、穩定代管或使用數據整理，可以依需求選擇單次維護或月維護。維護費是處理、檢查與協助的服務費；主機費、資料庫費或外部平台費用則依實際平台另計。",
    maintenancePlans: [
      { name: "單次修改 / 小維護", price: "學生價 NT$ 1,000–5,000 起 / 次", subtitle: "適合偶爾改文字、連結、圖片或小功能", items: ["文字、連結、FAQ 小幅更新", "表單或按鈕連結調整", "簡單錯誤修正", "不含大型功能重做"] },
      { name: "每月基礎維護", price: "學生價 NT$ 1,500–6,000 起 / 月", subtitle: "適合希望系統有人定期檢查與小幅調整", items: ["每月小幅內容更新", "基礎問題排查", "簡易使用狀況整理", "LINE / 網站連結與功能檢查"] },
      { name: "月報 / 資料更新維護", price: "學生價 NT$ 2,000–8,000 起 / 月", subtitle: "適合有後台、活動資料或 Dashboard 的系統", items: ["協助更新資料或活動資訊", "整理查詢、點擊或表單紀錄", "簡易月報或成果摘要", "依資料量與更新頻率調整"] },
      { name: "主機與系統代管", price: "學生價 NT$ 300–500 起 / 月", subtitle: "主機費另計，適合需要長期穩定上線的系統", items: ["部署與環境設定協助", "每月基本上線檢查", "小型異常判斷與重啟協助", "平台費用另計，不含新增功能"] },
    ],
    maintenanceNote: "實際維護範圍會在合作前確認。以上為學生開發者優惠價，會比一般市場行情低一些；若合作滿意，也希望能提供推薦語、推薦信或案例回饋。若只是靜態一頁式網頁，通常不一定需要月維護；若有後台、資料庫、LINE Bot、Dashboard 或長期活動資料更新，建議至少保留基本維護與主機費預算。主機代管服務費通常是協助部署、檢查、重啟與基本問題排查，不等於平台本身收取的主機費。",
    cooperationNotes: [
      ["學生開發者，真實案例驗證", "目前由學生開發者接案與交付，已有公廁 Bot、Dashboard 與 LINE 系統實際上線經驗。價格會比一般市場客製行情低一些，但合作前仍會先確認範圍、時程、付款與驗收方式。"],
      ["學生價與推薦回饋", "因目前屬於學生開發者優惠價與作品累積階段，若合作過程滿意，歡迎提供推薦語、推薦信、案例回饋或介紹其他可能需要協助的單位。"],
      ["UI 設計可彈性處理", "可由我協助做基礎介面與簡單視覺整理；若需要更完整品牌視覺、插圖或高階設計，也可由客戶提供設計稿或另找設計師。若需配合外部設計，開發時程可能會略微延長。"],
    ],
    packages: [
      { name: "基礎導入版", price: "學生價 NT$ 30,000 起", timeline: "開發時程：約 1 個月", subtitle: "適合把初步想法做成第一個可用版本", items: ["LINE 基礎入口", "基本流程設計", "簡易資料/資訊頁", "表單或外部連結整合"] },
      { name: "標準查詢版", price: "學生價 NT$ 50,000–90,000 起", timeline: "開發時程：約 2–3 個月", subtitle: "適合需要查詢流程、資料管理或後台的專案", items: ["LINE Bot 客製流程", "資料查詢或定位搜尋", "基礎後台資料管理", "測試、上線與操作說明"], featured: true },
      { name: "進階系統版", price: "學生價 NT$ 100,000 起，依需求評估", timeline: "開發時程：約 4 個月以上", subtitle: "適合需要演算法、數據追蹤或長期擴充的專案", items: ["定位搜尋與推薦排序", "NTS / Trust Score 版本比較", "Dashboard 與使用行為紀錄", "權限、月報表或進階維護方案"] },
    ],
    featured: "常見起步版本",
    estimatorLabel: "Feature Estimator",
    estimatorTitle: "勾選需要的功能，先看各功能加總後的大概預算",
    estimatorText: "可依需求勾選功能模組，系統會自動加總並產生初步預算區間。實際金額仍會依資料量、流程複雜度與交付範圍調整。" ,
    estimateOptions: [
      ["line-entry", "LINE Bot 基礎入口", 8000, "Webhook、基本訊息回覆、LINE 官方帳號串接"],
      ["menu-flow", "圖文選單 / 基本導覽流程", 4000, "讓使用者能用按鈕進入主要功能"],
      ["one-page-web", "一頁式網頁 / 活動頁", 6000, "活動、課程、服務或品牌介紹頁，可放報名連結、FAQ 與聯絡方式"],
      ["faq", "FAQ / 分類引導流程", 6000, "把常見問題或服務流程整理成可操作選單"],
      ["custom-form", "客製化表單", 3000, "簡易欄位設計、填寫流程、資料紀錄或表單結果整理" ],
      ["external-link", "外部連結 / 表單串接", 1000, "加入 Google Form、報名表、網站、地圖或其他外部頁面連結" ],
      ["data-query", "資料查詢功能", 10000, "讓使用者能查詢名單、資料清單、活動資訊或服務內容"],
      ["location", "定位搜尋 / 據點推薦", 15000, "依使用者位置回傳附近據點、導航連結或推薦結果"],
      ["admin-basic", "基礎後台資料管理", 15000, "管理者可新增、修改、刪除資料，不必每次找工程師"],
      ["admin-advanced", "進階後台 / 權限管理", 12000, "登入、角色權限、多資料表或更完整管理流程"],
      ["dashboard", "Dashboard / 使用紀錄", 15000, "紀錄查詢、點擊、熱門需求，提供成果追蹤"],
      ["ranking", "排序模型 / NTS 或 Trust Score 類功能", 20000, "需要更精準推薦、版本比較或資料可信度排序時使用"],
    ],
    clearAll: "一鍵清除",
    otherCustom: "其他客製功能",
    otherDesc: "例如特殊流程、第三方 API、會員功能、通知、匯出報表或其他未列出的需求。",
    modulePrice: "功能模組約 + NT$",
    otherPrice: "功能模組先暫估 + NT$ 6,000 起",
    estimateTitle: "功能加總預估",
    chooseFirst: "請先勾選功能",
    estimateDesc: "估價會把左側勾選的功能模組費用加總，再抓一個約 20% 的彈性範圍。此為學生開發者優惠價的粗估區間，通常會比一般市場客製行情低一些；正式報價仍需確認資料量、畫面數、流程細節、驗收範圍與維護需求。",
    subtotal: "功能模組加總",
    rangeNote: "右上方區間 = 已選功能模組加總 ～ 加總約 1.2 倍。",
    monthlyTitle: "上線後固定成本提醒",
    monthlyDefault: "正式上線後主機費約 US$7 / 月起（另計）",
    monthlyDesc: "主機、資料庫或外部平台費用會依實際架構調整，通常不包含在一次性開發費內。",
    selectedTitle: "已選功能",
    noneSelected: "尚未選擇功能。",
    reminder: "提醒：這裡比較像功能配件表，用來抓預算量級；不是每個功能獨立成案的價格。以上為學生開發者優惠價，若合作滿意，歡迎提供推薦語或案例回饋。正式成案仍需把功能範圍、資料量、交付內容、測試期與後續維護一起確認。若系統需要穩定長期運行，主機費通常至少約 US$7 / 月起，屬於每月固定成本，與一次性開發費分開計算。",
    discussButton: "帶著已選功能來討論",
    resultsLabel: "Real Results",
    resultsTitle: "先看實際成果，再討論你的版本",
    resultsText: "潛在合作方可以先看公廁 Bot 的公開介紹網站、實際 Dashboard 介面，以及已上線 LINE Bot 的使用方式，確認這不是單純展示作品，而是有真實使用與後台資料的系統。",
    cases: [
      { title: "公廁 Bot：公共服務據點查詢系統", tag: "真實使用者案例", text: "以 LINE 作為入口，整合定位查詢、公共廁所資料、候選點篩選與 NTS / Trust Score 版本比較，讓使用者不只找到附近地點，也能讓系統後台累積查詢、點擊與排序表現資料。", links: [["查看公廁介紹網站", "https://ytpeter777.github.io/ToiletMVP.DEV/"], ["查看 Dashboard", "https://school-i9co.onrender.com/dashboard"]] },
      { title: "LINE Bot 實際上線入口", tag: "實際使用成果", text: "可提供已上線 LINE Bot 入口，讓潛在客戶直接體驗使用者如何透過 LINE 完成查詢、定位與結果回傳。", links: [["加入 / 體驗 LINE Bot", "https://line.me/R/ti/p/@439avyvf"]] },
      { title: "野生動物救傷 LINE Bot", tag: "公益單位建置案", text: "協助救傷單位規劃 LINE Bot 流程，整合動物分類、外來種判斷、救傷資訊、位置查詢與基礎資料管理，作為小型組織數位服務導入案例。", links: [] },
    ],
    contactLabel: "Start With a Process Check",
    contactTitle: "你不需要先知道要做什麼系統，只要先告訴我你現在想做什麼",
    contactText: "如果你有一個想做的服務、LINE Bot、查詢系統、資料後台或網站想法，但還不確定要怎麼拆功能，可以先做一次簡單流程評估。我會協助判斷第一版要做什麼、哪些可以先不上、哪些適合留到第二階段。",
    contactSmall: "可以先簡單聊聊",
    contactPrompt: "你現在想做什麼？使用者會怎麼操作？有哪些資料需要被查詢或管理？第一版最重要的功能是什麼？",
    contactButton: "先寄信討論流程",
    mailSubject: "系統開發構想討論｜初步功能估價",
    mailHello: "您好，我有一個系統開發構想想初步討論。",
    mailSelected: "我目前勾選的功能：",
    mailSubtotal: "功能模組加總：",
    mailEstimate: "初步估價區間：",
    mailMonthly: "固定營運成本：",
    mailBrief: "我想做的服務/問題簡述：",
    mailPlaceholder: "（請在這裡補充你的想法、使用者流程、資料來源或目前遇到的問題）",
  },
  en: {
    navContact: "Contact",
    badge: "30,000+ real-user LINE system experience",
    heroTop: "Turn your idea",
    heroHighlight: "into a working online system",
    heroText:
      "I help individuals, teams, and organizations turn LINE Bots, data search, admin dashboards, location-based search, and custom workflows into systems that can actually launch. You do not need a complete specification at the beginning — I can help break your idea into a buildable first version.",
    heroButton: "View plans, pricing, and cases",
    stat1Title: "30,000+",
    stat1Text: "Real users in a LINE system case",
    stat2Title: "Self-service",
    stat2Text: "Turn ideas into executable flows",
    stat3Title: "Data logs",
    stat3Text: "Expandable query, click, and outcome tracking",
    rightBadge: "Real System Evidence",
    rightSmall: "How I can help",
    rightTitle: "From idea and requirements to a working system",
    rightCards: [
      ["Break requirements into flows", "Clarify how users operate, what admins maintain, and what must be built first — avoiding an oversized first version."],
      ["Build a launchable version", "Create LINE Bots, search flows, data management, dashboards, or simple web pages based on the actual need."],
      ["Leave room to scale", "Later versions can add ranking models, usage logs, dashboards, reports, permissions, and maintenance plans."],
    ],
    miniStats: [["Flow", "Requirement breakdown"], ["System", "Build and launch"], ["Scale", "Future upgrades"]],
    problemLabel: "Problem",
    problemTitle: "It does not have to be nonprofit or school related — any service idea can be turned into a buildable system",
    painPoints: [
      "You have an idea but not a clear feature list yet",
      "Data, lists, locations, or content need to be searchable",
      "Information is scattered across Excel, websites, PDFs, or forms",
      "You want a LINE official account to become a real service entry",
      "Updating information manually is costly and slow",
      "You want usage logs or outcome data in the future",
    ],
    buildLabel: "What I Build",
    buildTitle: "I do not only sell fixed features — I help turn requirements into a buildable and launchable version",
    buildText:
      "This is suitable for people who already have an initial idea, service flow, data list, event information, customer questions, or management needs. Start with a usable core version, then expand search, admin panels, ranking, analytics, or web features later.",
    features: [
      { icon: MapPin, title: "Make location search easier", text: "Users can send their location in LINE and get suitable nearby service points without searching websites or calling." },
      { icon: Database, title: "Let admins maintain data", text: "Service points, FAQs, and categories can be managed in an admin panel, reducing repeated engineering changes." },
      { icon: Search, title: "Results are not only distance-based", text: "Ranking can include distance, data reliability, information completeness, and status to reduce wrong or unusable results." },
      { icon: LineChart, title: "Keep outcome data", text: "Queries, impressions, clicks, and model versions can be logged for reports, grant outcomes, or internal optimization." },
    ],
    flowLabel: "Service Flow",
    flowTitle: "Start with a process check — the first version does not need to be huge",
    offerSteps: [
      ["01｜Process check", "Clarify the problem, user flow, data source, admin workflow, and first-version priorities."],
      ["02｜LINE or web entry", "Build a LINE Bot, search flow, form integration, data search, or simple website so users can start using it."],
      ["03｜Admin and data", "If content must be updated long-term, add an admin panel so changes do not always require engineering work."],
      ["04｜Advanced ranking and analytics", "For a more product-like system, add ranking models, usage logs, dashboards, reports, permissions, or maintenance plans."],
    ],
    outcomes: ["Turn vague ideas into clear features and flows", "Let users complete real actions online", "Allow admins to maintain content and data", "Let the system accumulate usage and outcome data"],
    packageLabel: "Plans & Pricing",
    packageTitle: "Start with a small web / LINE cleanup plan, then upgrade into a full system",
    packageText: "You do not need to start with a NT$30,000+ system. If you only need clearer event information, LINE official account cleanup, registration links, and FAQs, you can start with a small plan first. Current pricing is a student-developer rate, slightly lower than typical custom development market pricing. If the cooperation goes well, a testimonial, recommendation letter, or anonymized case feedback would be appreciated.",
    smallPlanLabel: "Small Starter Plans",
    smallPlanTitle: "Low-entry plans for improving your current workflow first",
    smallPlanText: "These are student-developer rates for clients who are not sure whether they need a full system yet. Start by organizing a webpage, LINE menu, FAQs, forms, and information. Later, it can be upgraded into data search, admin panels, or dashboards. If the cooperation goes well, a testimonial or case feedback would be appreciated.",
    smallPlans: [
      { name: "One-page event / course page", price: "Student rate NT$ 5,000–12,000", subtitle: "For events, courses, camps, lectures, and workshops", items: ["Event introduction and key information", "Registration link / form integration", "Time, location, and reminders", "FAQ and contact information"] },
      { name: "LINE official account cleanup", price: "Student rate NT$ 3,000–8,000", subtitle: "For existing LINE accounts with scattered information or unclear menus", items: ["Rich menu planning", "FAQ categorization", "Form / website / social link organization", "Basic reply text cleanup"] },
      { name: "Small brand / service page", price: "Student rate NT$ 8,000–18,000", subtitle: "For small shops, personal brands, service pages, or portfolio pages", items: ["Brand and service introduction", "Works / case section", "Contact and social links", "Basic responsive layout"] },
      { name: "Small FAQ / info cleanup", price: "Student rate NT$ 8,000–20,000", subtitle: "For teams with repeated questions but no need for admin panels yet", items: ["5–10 common questions", "Basic flow and button navigation", "External link integration", "Basic testing and usage guide"] },
    ],
    upgradeNote: "Small plans do not include custom admin panels, databases, dashboards, location search, or complex workflows. Pricing is a student-developer rate and the exact scope will be confirmed before cooperation. If needed, these plans can later be extended into the starter, standard, or advanced system plans below.",
    smallPlanButton: "Email about this plan",
    smallPlanMailSubject: "Small plan inquiry｜",
    crmPlanButton: "Email about this CRM plan",
    crmMailSubject: "CRM / internal tool inquiry｜",
    crmLabel: "CRM / Internal Tools",
    crmTitle: "Custom personal workflow or freelance CRM systems are also available",
    crmText: "In addition to public websites and LINE systems, I can also build internal tools for freelancers, small studios, or sales workflows. These can track leads, email status, replies, estimated revenue, received payments, daily tasks, and delivery deadlines.",
    crmPlans: [
      { name: "Personal local CRM", price: "Student rate from NT$ 15,000", subtitle: "For individual freelancers, students, or small sales workflows", items: ["Lead and status tracking", "Date wheel and daily tasks", "Estimated / received revenue", "Data stored in the user's browser"] },
      { name: "Custom-field CRM", price: "Student rate from NT$ 25,000–40,000", subtitle: "For studios with fixed fields, processes, and tracking needs", items: ["Custom statuses and fields", "Bulk paste, search, and filters", "Work tasks and delivery dates", "Layout adjusted to the actual workflow"] },
      { name: "Cloud team CRM", price: "Student rate from NT$ 50,000, evaluated by scope", subtitle: "For teams that need login, cloud database, or permission management", items: ["Login and cloud database", "Team access and permission planning", "Backup and data management", "Optional dashboard / analytics"] },
    ],
    crmNote: "The personal local version is suitable for individual use and costs less, but the data is mainly stored in the same computer and browser. If you need team login, cloud sync, permissions, a formal database, or long-term maintenance, the cloud team version is recommended and will be priced by scope.",
    maintenancePlanButton: "Email about this maintenance plan",
    maintenanceMailSubject: "Maintenance plan inquiry｜",
    maintenanceLabel: "Maintenance Options",
    maintenanceTitle: "After launch, choose one-time edits or monthly maintenance",
    maintenanceText: "After a small plan or full system is delivered, follow-up edits, content updates, stable hosting, or usage summaries can be handled through one-time maintenance or monthly maintenance. Maintenance is a service fee for handling, checking, and support; hosting, database, or third-party platform fees are charged separately by the actual platform.",
    maintenancePlans: [
      { name: "One-time edit / small maintenance", price: "Student rate from NT$ 1,000–5,000 / time", subtitle: "For occasional text, link, image, or small feature updates", items: ["Small text, link, or FAQ updates", "Form or button link changes", "Simple bug fixes", "Does not include major feature rebuilds"] },
      { name: "Basic monthly maintenance", price: "Student rate from NT$ 1,500–6,000 / month", subtitle: "For teams that want regular checks and minor updates", items: ["Monthly small content updates", "Basic issue checks", "Simple usage summary", "LINE / website link and function checks"] },
      { name: "Monthly report / data maintenance", price: "Student rate from NT$ 2,000–8,000 / month", subtitle: "For systems with admin panels, event data, or dashboards", items: ["Update data or event information", "Organize query, click, or form records", "Simple monthly report or outcome summary", "Adjusted by data volume and update frequency"] },
      { name: "Hosting and system management", price: "Student rate NT$ 300–500/month", subtitle: "Hosting fee separate. For systems that need stable long-term operation", items: ["Render / Vercel / database deployment and basic setup support", "Monthly basic uptime and environment checks", "Small incident diagnosis and restart / redeploy assistance", "Hosting, database, and third-party platform fees are charged separately by the platform", "Does not include new features, major redesigns, or large data updates"] },
    ],
    maintenanceNote: "The actual maintenance scope will be confirmed before cooperation. These are student-developer rates, slightly lower than typical market pricing. If the cooperation goes well, a testimonial, recommendation letter, or case feedback would be appreciated. Static one-page websites may not need monthly maintenance, while admin panels, databases, LINE Bots, dashboards, or long-term content updates should reserve a basic maintenance and hosting budget. Hosting management service fees usually cover deployment support, checks, restarts, and basic issue diagnosis, not the platform hosting fee itself.",
    cooperationNotes: [
      ["Student developer with real cases", "The project is handled and delivered by a student developer with real public Toilet Bot, dashboard, and LINE system launch experience. Pricing is slightly lower than typical custom development market pricing, but scope, timeline, payment, and acceptance criteria will still be confirmed before development."],
      ["Student rate and testimonial feedback", "Because this is a student-developer rate and part of portfolio building, a testimonial, recommendation letter, case feedback, or referral would be appreciated if the cooperation goes well."],
      ["Flexible UI design options", "Basic interface layout and simple visual refinement can be included. If a more complete brand identity, illustration, or advanced UI design is needed, the client may provide design files or work with an external designer. Coordinating with external design may slightly extend the timeline."],
    ],
    packages: [
      { name: "Starter Version", price: "Student rate from NT$ 30,000", timeline: "Development time: about 1 month", subtitle: "For turning an initial idea into the first usable version", items: ["LINE basic entry", "Basic flow design", "Simple data/info page", "Form or external link integration"] },
      { name: "Standard Search Version", price: "Student rate from NT$ 50,000–90,000", timeline: "Development time: about 2–3 months", subtitle: "For projects needing search flows, data management, or an admin panel", items: ["Custom LINE Bot flow", "Data search or location search", "Basic admin panel", "Testing, launch, and documentation"], featured: true },
      { name: "Advanced System Version", price: "Student rate from NT$ 100,000, evaluated by scope", timeline: "Development time: about 4+ months", subtitle: "For projects needing algorithms, analytics, or long-term expansion", items: ["Location search and ranking", "NTS / Trust Score version comparison", "Dashboard and usage logs", "Permissions, reports, or maintenance plan"] },
    ],
    featured: "Common starting point",
    estimatorLabel: "Feature Estimator",
    estimatorTitle: "Select needed features to estimate a rough budget",
    estimatorText: "Select the modules you need, and the estimator will calculate a rough budget range. Final pricing may vary based on data volume, workflow complexity, and delivery scope.",
    estimateOptions: [
      ["line-entry", "LINE Bot basic entry", 8000, "Webhook, basic replies, LINE official account integration"],
      ["menu-flow", "Rich menu / basic navigation", 4000, "Let users enter main functions through buttons"],
      ["one-page-web", "One-page website / event page", 6000, "For events, courses, services, or brand pages with registration links, FAQs, and contact info"],
      ["faq", "FAQ / category flow", 6000, "Turn common questions or service flows into menus"],
      ["custom-form", "Custom form", 3000, "Simple field setup, submission flow, data records, or form result organization" ],
      ["external-link", "External link / form integration", 1000, "Add Google Forms, registration forms, websites, maps, or other external page links" ],
      ["data-query", "Data search feature", 10000, "Let users search lists, data, events, or service content"],
      ["location", "Location search / service point recommendation", 15000, "Return nearby points, navigation links, or recommendations from user location"],
      ["admin-basic", "Basic admin panel", 15000, "Admins can add, edit, and delete data without calling an engineer every time"],
      ["admin-advanced", "Advanced admin / permissions", 12000, "Login, roles, permissions, multiple tables, or more complete workflows"],
      ["dashboard", "Dashboard / usage logs", 15000, "Log queries, clicks, and popular needs for outcome tracking"],
      ["ranking", "Ranking model / NTS or Trust Score-like feature", 20000, "For more precise recommendation, version comparison, or data reliability ranking"],
    ],
    clearAll: "Clear all",
    otherCustom: "Other custom feature",
    otherDesc: "Special workflows, third-party APIs, members, notifications, report export, or other needs not listed here.",
    modulePrice: "Module estimate + NT$",
    otherPrice: "Temporary module estimate + NT$ 6,000+",
    estimateTitle: "Module total estimate",
    chooseFirst: "Select features first",
    estimateDesc: "The estimate adds selected module costs and gives a 20% flexible range. It is a rough student-developer rate project range, usually slightly lower than typical custom development market pricing. Final pricing depends on data volume, screens, flow details, acceptance scope, and maintenance needs.",
    subtotal: "Module subtotal",
    rangeNote: "Upper range = selected modules subtotal × about 1.2.",
    monthlyTitle: "Post-launch fixed cost reminder",
    monthlyDefault: "After launch, hosting usually starts from about US$7/month, not included",
    monthlyDesc: "Hosting, database, or external platform fees depend on architecture and are usually separate from one-time development fees.",
    selectedTitle: "Selected features",
    noneSelected: "No features selected yet.",
    reminder: "Reminder: this is a feature-module estimate for budgeting, not a standalone price for each feature. These are student-developer rates; if the cooperation goes well, a testimonial or case feedback would be appreciated. Final projects still need scope, data volume, deliverables, testing period, and maintenance terms confirmed. Stable long-term systems usually require hosting costs from about US$7/month, separate from one-time development fees.",
    discussButton: "Discuss with selected features",
    resultsLabel: "Real Results",
    resultsTitle: "View real results before discussing your version",
    resultsText: "Potential partners can view the public toilet Bot landing page, dashboard interface, and live LINE Bot usage to confirm this is not only a demo, but a real system with users and backend data.",
    cases: [
      { title: "Public Toilet Bot: public service location search system", tag: "Real-user case", text: "Using LINE as the entry, the system combines location search, public toilet data, candidate filtering, and NTS / Trust Score version comparison. It also accumulates query, click, and ranking performance data in the backend.", links: [["View toilet Bot site", "https://ytpeter777.github.io/ToiletMVP.DEV/"], ["View Dashboard", "https://school-i9co.onrender.com/dashboard"]] },
      { title: "Live LINE Bot entry", tag: "Live result", text: "A live LINE Bot entry can be provided so potential clients can directly experience how users complete search, location sharing, and result retrieval in LINE.", links: [["Add / try the LINE Bot", "https://line.me/R/ti/p/@439avyvf"]] },
      { title: "Wildlife rescue LINE Bot", tag: "Nonprofit implementation", text: "A LINE Bot flow for wildlife rescue, including animal category guidance, invasive species logic, rescue information, location search, and basic data management.", links: [] },
    ],
    contactLabel: "Start With a Process Check",
    contactTitle: "You do not need to know the whole system yet — just tell me what you want to build",
    contactText: "If you have an idea for a service, LINE Bot, search system, admin panel, or website but are not sure how to break it into features, we can start with a simple process check. I can help decide what belongs in version one, what can wait, and what should be phase two.",
    contactSmall: "We can start simple",
    contactPrompt: "What do you want to build? How will users operate it? What data needs to be searched or managed? What is the most important first-version feature?",
    contactButton: "Email to discuss the flow",
    mailSubject: "System development idea discussion｜Initial feature estimate",
    mailHello: "Hello, I would like to discuss an initial system development idea.",
    mailSelected: "Selected features:",
    mailSubtotal: "Feature module subtotal:",
    mailEstimate: "Initial estimate range:",
    mailMonthly: "Monthly operating cost:",
    mailBrief: "Brief description of my service/problem:",
    mailPlaceholder: "(Please describe your idea, user flow, data source, or current problem here.)",
  },
};

export default function App() {
  const [language, setLanguage] = useState("zh");
  const isEnglish = language === "en";
  const t = content[language];
  const estimateOptions = useMemo(
    () => t.estimateOptions.map(([id, label, price, desc]) => ({ id, label, price, desc })),
    [t]
  );
  const [selected, setSelected] = useState(["line-entry", "menu-flow"]);
  const [otherEnabled, setOtherEnabled] = useState(false);

  const selectedItems = useMemo(
    () => estimateOptions.filter((item) => selected.includes(item.id)),
    [estimateOptions, selected]
  );

  const subtotal = selectedItems.reduce((sum, item) => sum + item.price, 0) + (otherEnabled ? 6000 : 0);
  const monthlyCostLabel = t.monthlyDefault;
  const estimatedLow = subtotal === 0 ? 0 : subtotal;
  const estimatedHigh = subtotal === 0 ? 0 : Math.round((subtotal * 1.2) / 1000) * 1000;
  const estimateLabel = subtotal === 0 ? t.chooseFirst : `NT$ ${estimatedLow.toLocaleString()} – ${estimatedHigh.toLocaleString()}`;

  const selectedFeatureText = selectedItems.map((item) => `- ${item.label}（約 + NT$ ${item.price.toLocaleString()} 起）`).join("%0D%0A");
  const otherFeatureText = otherEnabled ? `%0D%0A- ${t.otherCustom}（+ NT$ 6,000 起）` : "";
  const mailSubject = encodeURIComponent(t.mailSubject);
  const mailBody = `${t.mailHello}%0D%0A%0D%0A${t.mailSelected}%0D%0A${selectedFeatureText || "- 尚未勾選功能"}${otherFeatureText}%0D%0A%0D%0A${t.mailSubtotal}${subtotal === 0 ? "尚未估算" : `NT$ ${subtotal.toLocaleString()}`}%0D%0A${t.mailEstimate}${estimateLabel}%0D%0A${t.mailMonthly}${monthlyCostLabel}%0D%0A%0D%0A${t.mailBrief}%0D%0A${t.mailPlaceholder}`;
  const estimateMailto = `mailto:easonlsy1019@gmail.com?subject=${mailSubject}&body=${mailBody}`;

  const buildSmallPlanMailto = (plan) => {
    const subject = encodeURIComponent(`${t.smallPlanMailSubject}${plan.name}`);
    const body = encodeURIComponent(
      `${t.mailHello}

` +
      `${isEnglish ? "Selected small plan" : "我想詢問的小方案"}：${plan.name}
` +
      `${isEnglish ? "Price range" : "方案價格"}：${plan.price}
` +
      `${isEnglish ? "Suitable for" : "適合情境"}：${plan.subtitle}
` +
      `${isEnglish ? "Student-rate note" : "學生價說明"}：${isEnglish ? "This is a student-developer rate. If the cooperation goes well, a testimonial, recommendation letter, or case feedback would be appreciated." : "目前為學生開發者優惠價，若合作滿意，也希望能提供推薦語、推薦信或案例回饋。"}

` +
      `${isEnglish ? "Brief description of my need" : "我想做的內容簡述"}：
` +
      `${t.mailPlaceholder}`
    );
    return `mailto:easonlsy1019@gmail.com?subject=${subject}&body=${body}`;
  };

  const buildCrmPlanMailto = (plan) => {
    const subject = encodeURIComponent(`${t.crmMailSubject}${plan.name}`);
    const body = encodeURIComponent(
      `${t.mailHello}

` +
      `${isEnglish ? "Selected CRM / internal tool plan" : "我想詢問的 CRM / 內部管理系統方案"}：${plan.name}
` +
      `${isEnglish ? "Price range" : "方案價格"}：${plan.price}
` +
      `${isEnglish ? "Suitable for" : "適合情境"}：${plan.subtitle}
` +
      `${isEnglish ? "Student-rate note" : "學生價說明"}：${isEnglish ? "This is a student-developer rate. If the cooperation goes well, a testimonial, recommendation letter, or case feedback would be appreciated." : "目前為學生開發者優惠價，若合作滿意，也希望能提供推薦語、推薦信或案例回饋。"}

` +
      `${isEnglish ? "Current workflow / tracking needs" : "目前想管理的流程或欄位"}：
` +
      `${isEnglish ? "(Please describe what you want to track, who will use it, and whether it needs cloud sync or login.)" : "（請簡單說明想追蹤什麼、誰會使用、是否需要雲端同步或登入）"}`
    );
    return `mailto:easonlsy1019@gmail.com?subject=${subject}&body=${body}`;
  };

  const buildMaintenancePlanMailto = (plan) => {
    const subject = encodeURIComponent(`${t.maintenanceMailSubject}${plan.name}`);
    const body = encodeURIComponent(
      `${t.mailHello}

` +
      `${isEnglish ? "Selected maintenance plan" : "我想詢問的維護方案"}：${plan.name}
` +
      `${isEnglish ? "Price range" : "方案價格"}：${plan.price}
` +
      `${isEnglish ? "Suitable for" : "適合情境"}：${plan.subtitle}

` +
      `${isEnglish ? "Current system / website status" : "目前系統 / 網頁狀況"}：
` +
      `${isEnglish ? "(Please describe what has been launched and what needs to be updated or maintained.)" : "（請簡單說明目前已上線的內容，以及想修改、維護或定期處理的項目）"}`
    );
    return `mailto:easonlsy1019@gmail.com?subject=${subject}&body=${body}`;
  };

  const toggleOption = (id) => {
    setSelected((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  };

  const clearEstimate = () => {
    setSelected([]);
    setOtherEnabled(false);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,#0e7490_0%,transparent_28%),radial-gradient(circle_at_85%_12%,#312e81_0%,transparent_30%),linear-gradient(135deg,#020617_0%,#07111f_45%,#0f172a_100%)] text-slate-100">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.42)_58%,rgba(2,6,23,0.92)_100%)]" />
        <div className="absolute -right-32 -top-40 h-[30rem] w-[30rem] rounded-full bg-cyan-500/25 blur-3xl" />
        <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -left-28 top-96 h-96 w-96 rounded-full bg-indigo-500/25 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400/15 ring-1 ring-cyan-300/25">
            <Bot className="h-5 w-5 text-cyan-300" />
          </div>
          <div>
            <p className="text-sm font-semibold tracking-wide text-white">Eason Systems</p>
            <p className="text-xs text-slate-400">Custom LINE & Web Systems</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex rounded-full border border-white/10 bg-white/[0.05] p-1 text-xs">
            <button type="button" onClick={() => setLanguage("zh")} className={`rounded-full px-3 py-1 transition ${!isEnglish ? "bg-cyan-300 text-slate-950" : "text-slate-300 hover:text-white"}`}>中文</button>
            <button type="button" onClick={() => setLanguage("en")} className={`rounded-full px-3 py-1 transition ${isEnglish ? "bg-cyan-300 text-slate-950" : "text-slate-300 hover:text-white"}`}>EN</button>
          </div>
          <a href="#contact" className="hidden text-sm text-slate-300 hover:text-white md:block">{t.navContact}</a>
        </div>
      </header>

      <main className="relative z-10">
        <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-20 pt-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:pt-24">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6 }}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200">
              <Sparkles className="h-4 w-4" />
              {t.badge}
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
              {t.heroTop}
              <span className="block text-cyan-300">{t.heroHighlight}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{t.heroText}</p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {[[t.stat1Title, t.stat1Text, true], [t.stat2Title, t.stat2Text], [t.stat3Title, t.stat3Text]].map(([title, text, accent]) => (
                <div key={title} className={`rounded-2xl border p-4 ${accent ? "border-cyan-300/20 bg-cyan-300/10" : "border-white/10 bg-white/[0.06]"}`}>
                  <p className="text-3xl font-bold text-white">{title}</p>
                  <p className={`mt-1 text-sm ${accent ? "text-cyan-100" : "text-slate-300"}`}>{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#packages"><Button>{t.heroButton} <ArrowRight className="ml-2 h-4 w-4" /></Button></a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <Card className="bg-white/10 shadow-2xl backdrop-blur">
              <CardContent className="p-6 md:p-8">
                <div className="mb-6 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3"><div className="h-3 w-3 rounded-full bg-red-400" /><div className="h-3 w-3 rounded-full bg-yellow-400" /><div className="h-3 w-3 rounded-full bg-green-400" /></div>
                  <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs text-cyan-200">{t.rightBadge}</span>
                </div>
                <div className="rounded-3xl bg-slate-900/70 p-5 ring-1 ring-white/10">
                  <p className="text-sm font-semibold text-cyan-200">{t.rightSmall}</p>
                  <h3 className="mt-3 text-2xl font-bold leading-tight text-white">{t.rightTitle}</h3>
                  <div className="mt-6 space-y-4">
                    {t.rightCards.map(([title, text], idx) => (
                      <div key={title} className={`rounded-2xl border p-4 ${idx === 2 ? "border-cyan-300/20 bg-cyan-300/10" : "border-white/10 bg-white/[0.06]"}`}>
                        <div className="flex items-start gap-3">
                          {idx === 2 ? <LineChart className="mt-0.5 h-5 w-5 text-cyan-200" /> : <div className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300" />}
                          <div><p className="font-semibold text-white">{title}</p><p className="mt-1 text-sm leading-6 text-slate-300">{text}</p></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 grid grid-cols-3 gap-3 text-center text-sm">
                    {t.miniStats.map(([title, text]) => (
                      <div key={title} className="rounded-2xl bg-white/[0.08] p-3"><p className="text-lg font-bold text-white">{title}</p><p className="mt-1 text-xs text-slate-400">{text}</p></div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.03]"><div className="mx-auto max-w-6xl px-6 py-16"><div className="max-w-3xl"><p className="text-sm font-semibold text-cyan-300">{t.problemLabel}</p><h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">{t.problemTitle}</h2></div><div className="mt-8 grid gap-3 md:grid-cols-3">{t.painPoints.map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 text-slate-300">{item}</div>)}</div></div></section>

        <section id="solution" className="mx-auto max-w-6xl px-6 py-20"><div className="mb-10 max-w-3xl"><p className="text-sm font-semibold text-cyan-300">{t.buildLabel}</p><h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">{t.buildTitle}</h2><p className="mt-5 leading-7 text-slate-300">{t.buildText}</p></div><div className="grid gap-5 md:grid-cols-4">{t.features.map((feature) => { const Icon = feature.icon; return <Card key={feature.title}><CardContent className="p-6"><div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10"><Icon className="h-6 w-6 text-cyan-300" /></div><h3 className="text-lg font-semibold text-white">{feature.title}</h3><p className="mt-3 text-sm leading-6 text-slate-300">{feature.text}</p></CardContent></Card>; })}</div></section>

        <section className="border-y border-white/10 bg-white/[0.03]"><div className="mx-auto max-w-6xl px-6 py-20"><div className="mb-10 max-w-3xl"><p className="text-sm font-semibold text-cyan-300">{t.flowLabel}</p><h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">{t.flowTitle}</h2></div><div className="grid gap-5 md:grid-cols-4">{t.offerSteps.map(([title, text]) => <Card key={title} className="bg-slate-900/70"><CardContent className="p-6"><p className="text-sm font-semibold text-cyan-300">{title}</p><p className="mt-4 text-sm leading-7 text-slate-300">{text}</p></CardContent></Card>)}</div><div className="mt-8 grid gap-3 md:grid-cols-4">{t.outcomes.map((item) => <div key={item} className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4 text-sm leading-6 text-cyan-50">{item}</div>)}</div></div></section>

        <section id="packages" className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 max-w-3xl"><p className="text-sm font-semibold text-cyan-300">{t.packageLabel}</p><h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">{t.packageTitle}</h2><p className="mt-5 leading-7 text-slate-300">{t.packageText}</p></div>

          <div className="mb-12 rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-6 md:p-8">
            <div className="mb-7 max-w-3xl">
              <p className="text-sm font-semibold text-cyan-200">{t.smallPlanLabel}</p>
              <h3 className="mt-3 text-2xl font-bold text-white md:text-3xl">{t.smallPlanTitle}</h3>
              <p className="mt-4 leading-7 text-slate-300">{t.smallPlanText}</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {t.smallPlans.map((item) => (
                <Card key={item.name} className="bg-slate-950/35">
                  <CardContent className="flex h-full flex-col p-5">
                    <h4 className="text-lg font-bold text-white">{item.name}</h4>
                    <p className="mt-2 text-xl font-bold text-cyan-200">{item.price}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{item.subtitle}</p>
                    <div className="my-4 h-px bg-white/10" />
                    <ul className="space-y-3 text-sm leading-6 text-slate-300">
                      {item.items.map((feature) => (
                        <li key={feature} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" /><span>{feature}</span></li>
                      ))}
                    </ul>
                    <a href={buildSmallPlanMailto(item)} className="mt-auto pt-5">
                      <Button className="w-full text-sm">{t.smallPlanButton} <ExternalLink className="ml-2 h-4 w-4" /></Button>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="mt-6 rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm leading-6 text-slate-300">{t.upgradeNote}</p>
          </div>

          <div className="mb-12 rounded-3xl border border-white/10 bg-slate-900/70 p-6 md:p-8">
            <div className="mb-7 max-w-3xl">
              <p className="text-sm font-semibold text-cyan-300">{t.crmLabel}</p>
              <h3 className="mt-3 text-2xl font-bold text-white md:text-3xl">{t.crmTitle}</h3>
              <p className="mt-4 leading-7 text-slate-300">{t.crmText}</p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {t.crmPlans.map((plan) => (
                <Card key={plan.name} className="bg-white/[0.05]">
                  <CardContent className="flex h-full flex-col p-6">
                    <h4 className="text-xl font-bold text-white">{plan.name}</h4>
                    <p className="mt-2 text-2xl font-bold leading-tight text-cyan-200">{plan.price}</p>
                    <p className="mt-4 text-sm leading-6 text-slate-300">{plan.subtitle}</p>
                    <div className="my-5 h-px bg-white/10" />
                    <ul className="space-y-3 text-sm leading-6 text-slate-300">
                      {plan.items.map((feature) => (
                        <li key={feature} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" /><span>{feature}</span></li>
                      ))}
                    </ul>
                    <a href={buildCrmPlanMailto(plan)} className="mt-auto pt-5">
                      <Button className="w-full text-sm">{t.crmPlanButton} <ExternalLink className="ml-2 h-4 w-4" /></Button>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="mt-6 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4 text-sm leading-6 text-cyan-50">{t.crmNote}</p>
          </div>

          <div className="mb-6 max-w-3xl"><p className="text-sm font-semibold text-cyan-300">{isEnglish ? "Full System Plans" : "完整系統方案"}</p><h3 className="mt-3 text-2xl font-bold text-white md:text-3xl">{isEnglish ? "Full system plans" : "完整系統方案"}</h3></div>
          <div className="mb-12 grid gap-6 md:grid-cols-3">{t.packages.map((item) => <Card key={item.name} className={item.featured ? "border-cyan-300/30 bg-cyan-300/10 shadow-2xl shadow-cyan-950/30" : "bg-slate-900/70"}><CardContent className="flex h-full min-h-[390px] flex-col p-7">
                  <div className="mb-6 flex min-h-8 items-center justify-between gap-3">
                    <div>
                      {item.featured && (
                        <div className="w-fit rounded-full bg-cyan-300 px-3 py-1 text-xs font-semibold text-slate-950">
                          {t.featured}
                        </div>
                      )}
                    </div>
                    <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                      {item.timeline}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{item.name}</h3>
                  <p className="mt-2 text-2xl font-bold leading-tight text-cyan-200">{item.price}</p>
                  <p className="mt-4 text-sm leading-6 text-slate-300">{item.subtitle}</p>
                  <div className="my-6 h-px bg-white/10" /><ul className="space-y-3 text-sm leading-6 text-slate-300">{item.items.map((feature) => <li key={feature} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" /><span>{feature}</span></li>)}</ul></CardContent></Card>)}</div>

          <div className="mb-12 grid gap-5 md:grid-cols-2">
            {t.cooperationNotes.map(([title, text]) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
                <p className="text-sm font-semibold text-cyan-300">{title}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
              </div>
            ))}
          </div>

          <div className="mb-12 rounded-3xl border border-white/10 bg-slate-900/70 p-6 md:p-8">
            <div className="mb-6 max-w-3xl">
              <p className="text-sm font-semibold text-cyan-300">{t.maintenanceLabel}</p>
              <h3 className="mt-3 text-2xl font-bold text-white md:text-3xl">{t.maintenanceTitle}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{t.maintenanceText}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {t.maintenancePlans.map((plan) => (
                <div key={plan.name} className="flex h-full min-h-[430px] flex-col rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                  <div className="space-y-4">
                    <p className="text-base font-semibold leading-7 text-white">{plan.name}</p>
                    <p className="text-lg font-bold leading-8 text-cyan-200">{plan.price}</p>
                    <p className="text-sm leading-6 text-slate-400">{plan.subtitle}</p>
                  </div>
                  <div className="my-5 h-px bg-white/10" />
                  <ul className="space-y-2 text-sm leading-6 text-slate-300">
                    {plan.items.map((item) => (
                      <li key={item} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" /><span>{item}</span></li>
                    ))}
                  </ul>
                  <a href={buildMaintenancePlanMailto(plan)} className="mt-auto block pt-6">
                    <Button className="min-h-[64px] w-full text-sm leading-6">{t.maintenancePlanButton} <ExternalLink className="ml-2 h-4 w-4 shrink-0" /></Button>
                  </a>
                </div>
              ))}
            </div>
            <p className="mt-6 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4 text-sm leading-6 text-cyan-50">{t.maintenanceNote}</p>
          </div>

          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"><div className="max-w-3xl"><p className="text-sm font-semibold text-cyan-300">{t.estimatorLabel}</p><h3 className="mt-3 text-2xl font-bold text-white md:text-3xl">{t.estimatorTitle}</h3><p className="mt-4 leading-7 text-slate-300">{t.estimatorText}</p></div><button type="button" onClick={clearEstimate} className="w-fit rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-3 text-sm text-slate-200 transition hover:border-cyan-300/30 hover:bg-cyan-300/10">{t.clearAll}</button></div>
          <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
            <Card className="bg-slate-900/70"><CardContent className="p-6 md:p-8"><div className="grid gap-4 md:grid-cols-2">
              {estimateOptions.map((item) => { const checked = selected.includes(item.id); return <button key={item.id} type="button" onClick={() => toggleOption(item.id)} className={`rounded-2xl border p-4 text-left transition ${checked ? "border-cyan-300/50 bg-cyan-300/10" : "border-white/10 bg-white/[0.04] hover:border-cyan-300/30 hover:bg-white/[0.07]"}`}><div className="flex items-start gap-3"><div className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border ${checked ? "border-cyan-300 bg-cyan-300 text-slate-950" : "border-slate-500"}`}>{checked && <span className="text-xs font-black">✓</span>}</div><div><p className="font-semibold text-white">{item.label}</p><p className="mt-1 text-sm leading-6 text-slate-400">{item.desc}</p><p className="mt-3 text-sm font-semibold text-cyan-200">{t.modulePrice} {item.price.toLocaleString()} 起</p></div></div></button>; })}
              <button type="button" onClick={() => setOtherEnabled((value) => !value)} className={`rounded-2xl border p-4 text-left transition ${otherEnabled ? "border-cyan-300/50 bg-cyan-300/10" : "border-white/10 bg-white/[0.04] hover:border-cyan-300/30 hover:bg-white/[0.07]"}`}><div className="flex items-start gap-3"><div className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border ${otherEnabled ? "border-cyan-300 bg-cyan-300 text-slate-950" : "border-slate-500"}`}>{otherEnabled && <span className="text-xs font-black">✓</span>}</div><div><p className="font-semibold text-white">{t.otherCustom}</p><p className="mt-1 text-sm leading-6 text-slate-400">{t.otherDesc}</p><p className="mt-3 text-sm font-semibold text-cyan-200">{t.otherPrice}</p></div></div></button>
            </div></CardContent></Card>

            <Card className="border-cyan-300/25 bg-cyan-300/10 shadow-2xl shadow-cyan-950/30"><CardContent className="sticky top-6 p-6 md:p-8"><p className="text-sm font-semibold text-cyan-200">{t.estimateTitle}</p><h3 className="mt-3 text-4xl font-bold text-white">{estimateLabel}</h3><p className="mt-4 text-sm leading-6 text-slate-300">{t.estimateDesc}</p><div className="my-6 h-px bg-white/10" /><div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4"><div className="flex items-center justify-between gap-4"><span className="text-sm text-slate-300">{t.subtotal}</span><span className="text-lg font-bold text-cyan-200">{subtotal === 0 ? "—" : `NT$ ${subtotal.toLocaleString()}`}</span></div><p className="mt-2 text-xs leading-5 text-slate-500">{t.rangeNote}</p></div><div className="my-6 h-px bg-white/10" /><div className="mb-6 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4"><p className="text-sm font-semibold text-cyan-100">{t.monthlyTitle}</p><p className="mt-2 text-sm leading-6 text-slate-200">{monthlyCostLabel}</p><p className="mt-1 text-xs leading-5 text-slate-400">{t.monthlyDesc}</p></div><p className="text-sm font-semibold text-white">{t.selectedTitle}</p><div className="mt-4 space-y-3">{selectedItems.length === 0 && !otherEnabled ? <p className="text-sm text-slate-400">{t.noneSelected}</p> : <>{selectedItems.map((item) => <div key={item.id} className="flex justify-between gap-4 text-sm text-slate-300"><span>{item.label}</span><span className="shrink-0 text-cyan-200">{item.price.toLocaleString()}</span></div>)}{otherEnabled && <div className="flex justify-between gap-4 text-sm text-slate-300"><span>{t.otherCustom}</span><span className="shrink-0 text-cyan-200">6,000+</span></div>}</>}</div><div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-sm leading-6 text-slate-300">{t.reminder}</div><a href={estimateMailto}><Button className="mt-6 w-full">{t.discussButton} <ExternalLink className="ml-2 h-4 w-4" /></Button></a></CardContent></Card>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20"><div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 md:p-8"><div className="mb-8 max-w-3xl"><p className="text-sm font-semibold text-cyan-300">{t.resultsLabel}</p><h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">{t.resultsTitle}</h2><p className="mt-4 leading-7 text-slate-300">{t.resultsText}</p></div><div className="grid gap-5 md:grid-cols-3">{t.cases.map((item) => <Card key={item.title} className="bg-white/[0.05]"><CardContent className="flex h-full flex-col p-6"><div className="mb-4 inline-flex w-fit rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-200">{item.tag}</div><h3 className="text-xl font-bold text-white">{item.title}</h3><p className="mt-3 text-sm leading-6 text-slate-300">{item.text}</p><div className="mt-auto pt-5 space-y-2">{item.links?.map(([label, href]) => <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-slate-200 transition hover:border-cyan-300/30 hover:bg-cyan-300/10"><span>{label}</span><ExternalLink className="h-4 w-4 text-cyan-200" /></a>)}</div></CardContent></Card>)}</div></div></section>

        <section id="contact" className="mx-auto max-w-6xl px-6 pb-24"><div className="rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-8 md:p-10"><div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center"><div><p className="text-sm font-semibold text-cyan-200">{t.contactLabel}</p><h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">{t.contactTitle}</h2><p className="mt-5 leading-7 text-slate-300">{t.contactText}</p></div><div className="rounded-3xl bg-slate-950/60 p-6 ring-1 ring-white/10"><p className="text-sm text-slate-400">{t.contactSmall}</p><p className="mt-4 text-sm leading-7 text-slate-300">{t.contactPrompt}</p><a href={estimateMailto}><Button className="mt-6 w-full">{t.contactButton} <ExternalLink className="ml-2 h-4 w-4" /></Button></a></div></div></div></section>
      </main>
    </div>
  );
}
