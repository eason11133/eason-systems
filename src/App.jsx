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
    heroTop: "把流程整理好，",
    heroHighlight: "做成可上線系統",
    heroText:
      "我協助公益協會、課程活動、論壇團隊與地方組織，把分散的活動資訊、LINE 詢問、報名表單、資料查詢與後台管理，整理成可以實際上線使用的 Web / LINE 系統。先釐清流程，再做出可執行、可交付、可維護的版本。",
    heroButton: "查看方案、價格與案例",
    stat1Title: "30,000+",
    stat1Text: "LINE 系統真實使用者案例",
    stat2Title: "流程",
    stat2Text: "活動、表單、FAQ 整合",
    stat3Title: "數據",
    stat3Text: "查詢、點擊與活動統計",
    rightBadge: "Real System Evidence",
    rightSmall: "我可以協助什麼",
    rightTitle: "需求整理 → 開發上線",
    rightCards: [
      ["把需求拆成流程", "先釐清使用者會怎麼操作、管理者要維護什麼、哪些功能要先做，避免一開始就做成過大的系統。"],
      ["做出可上線版本", "依需求建立 LINE Bot、查詢流程、資料管理、後台或簡易網站，讓服務真的能被使用。"],
      ["保留擴充空間", "後續可依需求加入排序模型、使用紀錄、Dashboard、月報表或更多後台功能。"],
    ],
    miniStats: [["流程", "需求拆解"], ["系統", "開發上線"], ["擴充", "後續升級"]],
    problemLabel: "Problem",
    problemTitle: "你的問題通常不是缺一個漂亮頁面，而是資訊、表單、LINE 詢問與資料管理太分散",
    painPoints: [
      "活動、課程、論壇資訊分散在不同頁面",
      "報名表、FAQ、聯絡窗口與行前通知沒有集中",
      "資料散在 Excel、網站、PDF、Google 表單或社群貼文中",
      "LINE 官方帳號想變成真正的服務與查詢入口",
      "資料更新需要人工處理，維護成本高",
      "希望留下查詢、點擊、報名或活動成果數據",
    ],
    audienceLabel: "Who It Fits",
    audienceTitle: "主力服務公益協會、課程活動、論壇與地方團隊，也能延伸到店家與個人品牌",
    audienceText: "網站目前會優先呈現中型系統能力：活動 / 課程流程、LINE 導覽、資料查詢、後台管理與 Dashboard。小店、個人品牌與夜市攤商仍可作為小型入門合作，但不再讓低價小方案搶走主軸。",
    audienceGroups: [
      ["活動 / 課程 / 營隊", "活動頁、報名連結、FAQ、行前資訊、LINE 導覽"],
      ["活動 / 論壇 / 研討會", "議程、講者、報名、簽到、問卷、成果統計"],
      ["公益 / 協會 / 地方團隊", "資料查詢、據點資訊、通報流程、後台管理、成果數據"],
      ["餐廳 / 小店 / 個人品牌", "菜單、營業時間、作品集、預約表單、LINE / IG 連結"],
    ],
    eventSystemLabel: "Event / Forum Systems",
    eventSystemTitle: "活動、論壇與研討會可以做成一套可上線使用的流程系統",
    eventSystemText: "若單位正在籌備大型活動、論壇、研討會、營隊或系列課程，我可以協助把活動前、中、後的資訊流程整理成一套系統：讓參與者更快查到資訊，也讓主辦方更好管理資料與成果。",
    eventSystemPoints: [
      ["活動網站 / 論壇資訊頁", "議程、講者、時間地點、交通資訊、注意事項與聯絡窗口"],
      ["報名流程整合", "串接既有報名表，或整理報名欄位、報名後通知與確認流程"],
      ["LINE 導覽與 FAQ 分流", "活動資訊、交通、報到方式、常見問題、聯絡窗口快速查詢"],
      ["名單管理 / 報到輔助", "報名資料整理、狀態分類、QR Code 或名單核對流程評估"],
      ["問卷與成果統計", "活動後問卷、查詢數、點擊數、報名狀況或成果摘要整理"],
      ["後台資料管理", "活動資訊、FAQ、連結、名單或資料內容可由管理者更新"],
    ],
    buildLabel: "What I Build",
    buildTitle: "我不是只做網頁，而是把活動、LINE、資料與後台整理成可用系統",
    buildText:
      "適合已有活動流程、課程資訊、論壇需求、據點資料、表單資料、常見問題或管理需求的團隊。第一步會先整理使用者怎麼查、管理者怎麼更新、哪些資料需要後台、哪些數據要留下，再決定做成資訊頁、LINE 導覽、查詢系統、後台或 Dashboard。",
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
    packageTitle: "主力是 5–15 萬的中型系統，小方案只是合作入口",
    packageText: "如果需求包含 LINE Bot、資料查詢、後台管理、據點搜尋、Dashboard、報名/服務流程或長期更新，會優先規劃成中型系統案。小方案仍可作為第一次合作入口，但網站不再把所有方案重複拆成多層分類，避免客戶看不懂。",
    midPlanLabel: "Main Focus",
    midPlanTitle: "主力中型系統案",
    midPlanText: "這是目前最適合作為正式合作主軸的案型，適合公益 / 協會、課程活動、地方團隊、多據點服務與小型組織。若你需要的不只是漂亮頁面，而是讓使用者能查詢、填寫、收到回覆，並讓管理者能更新資料與查看紀錄，這類方案會比單純小網頁更適合。",
    midPlans: [
      { name: "LINE Bot + 後台資料管理", price: "學生價 NT$ 50,000–100,000 起", subtitle: "適合公益、協會、活動團隊與小型組織", items: ["LINE Bot 流程與 FAQ 分流", "後台新增 / 編輯資料", "資料查詢與基礎統計", "測試、上線與操作說明"] },
      { name: "據點查詢 / 地圖推薦系統", price: "學生價 NT$ 60,000–150,000 起", subtitle: "適合救傷中心、社福據點、服務據點與地方資料", items: ["使用者定位與最近據點推薦", "Google Maps 導航連結", "據點資料後台管理", "查詢紀錄與成果追蹤"] },
      { name: "活動 / 課程流程系統", price: "學生價 NT$ 50,000–120,000 起", subtitle: "適合營隊、課程中心、工作坊與親子活動", items: ["活動資訊與報名流程整理", "LINE 導覽與常見問題", "活動資料後台更新", "行前資訊與基礎統計"] },
      { name: "小型 CRM / 內部管理工具", price: "學生價 NT$ 50,000–120,000 起", subtitle: "適合需要管理名單、案件、狀態與交付日期的團隊", items: ["名單 / 客戶 / 案件管理", "狀態追蹤與日期提醒", "金額統計與搜尋篩選", "可依流程客製欄位與版面"] },
    ],
    midPlanNote: "中型系統案會先用 Email 或 LINE 確認需求，再視情況安排 15–30 分鐘線上討論，確認功能範圍、時程、報價、付款節點、驗收方式與上線後維護。",
    midPlanButton: "詢問這個中型系統案",
    midPlanMailSubject: "中型系統合作詢問｜",
    smallPlanLabel: "Small Starter Plans",
    smallPlanTitle: "小型入門方案",
    smallPlanText: "小方案只保留給需求單純、想先整理資訊或測試合作的客戶。若需求已經包含資料管理、查詢、後台、Dashboard、定位、長期更新或多角色流程，會建議直接改談上方中型系統案。",
    smallPlans: [
      { name: "一頁式活動 / 課程網頁", price: "學生價 NT$ 8,000–15,000", subtitle: "適合活動、課程、營隊、講座、工作坊", items: ["活動介紹與重點整理", "報名連結 / 表單整合", "時間地點與注意事項", "FAQ 與聯絡資訊"] },
      { name: "LINE 官方帳號整理", price: "學生價 NT$ 5,000–10,000", subtitle: "適合已經有 LINE，但資訊分散或選單不好用", items: ["圖文選單規劃", "常見問題分類", "表單 / 官網 / 社群連結整理", "基礎回覆文字整理"] },
      { name: "小店 / 個人品牌資訊頁", price: "學生價 NT$ 6,000–18,000", subtitle: "適合小店、餐飲、個人品牌、自由工作者或市集品牌", items: ["店家 / 個人介紹", "菜單 / 服務項目 / 價格整理", "Google 地圖 / 預約 / 表單連結", "LINE / IG / 電話整合"] },
      { name: "FAQ / 資訊整理版", price: "學生價 NT$ 10,000–20,000", subtitle: "適合重複詢問很多，但暫時不需要後台的單位", items: ["5–10 個常見問題整理", "基本分流與按鈕導覽", "外部連結整合", "基礎測試與操作說明"] },
    ],
    upgradeNote: "小方案以資訊整理與簡單頁面 / LINE 流程為主，不包含客製後台、資料庫、Dashboard、定位查詢或複雜流程。若合作過程中發現需要長期更新、資料管理或查詢功能，會改以中型系統案重新評估。",
    smallPlanButton: "選這個方案來信討論",
    smallPlanMailSubject: "小方案合作詢問｜",
    crmPlanButton: "選這個 CRM 方案來信討論",
    crmMailSubject: "接案 CRM / 管理系統詢問｜",
    crmLabel: "CRM / Internal Tools",
    crmTitle: "也可以客製接案追蹤、客戶管理或內部工作系統",
    crmText: "如果你平常用 Excel、Google Sheet 或記事本追蹤客戶、寄信、回覆、金額與交付日期，也可以做成一套自己的管理工具。CRM 簡單來說就是客戶與工作進度管理系統，幫你知道誰還沒聯絡、誰要追蹤、哪一案有機會成交、今天該做什麼。",
    crmExplainTitle: "CRM 是什麼？",
    crmExplainText: "不用把它想得很企業。它可以只是把名單、Email、狀態、日期、方案、預計收入、實際收款與每日任務放在同一個畫面，讓你不用一直翻表格或忘記追蹤。",
    crmPreviewTitle: "實例預覽：接案名單追蹤系統",
    crmPreviewText: "可做成像接案工作台一樣：上方看總收益與進度，中間用日期滾輪看今天要寄信、追蹤或交付什麼，下方再用名單一覽管理每位客戶。",
    crmPreviewStats: [["100", "客戶名單"], ["100", "已寄信"], ["500K", "預計收益"], ["今日", "任務檢查"]],
    crmPreviewRows: ["日期滾輪：寄信 / 追蹤 / 工作 / 交付", "名單一覽：狀態、方案、Email、下一步", "每日任務：達成或未達成延到明天"],
    crmPlans: [
      { name: "個人本機管理工具", price: "學生價 NT$ 15,000 起", subtitle: "適合個人接案者、學生或小型業務自己使用", items: ["客戶名單與狀態追蹤", "日期滾輪與每日事項", "預計收益 / 實際收款", "資料存在使用者瀏覽器"] },
      { name: "客製欄位管理工具", price: "學生價 NT$ 25,000–40,000 起", subtitle: "適合有固定流程、欄位與追蹤需求的工作室", items: ["客製狀態與欄位", "批量貼上與搜尋篩選", "進行中工作與交付日期", "依實際流程調整版面"] },
      { name: "雲端團隊管理工具", price: "學生價 NT$ 50,000 起，依需求評估", subtitle: "適合多人共用，需要登入、資料庫或權限管理", items: ["登入與雲端資料庫", "多人共用與權限規劃", "備份與資料管理", "可加 Dashboard / 統計分析"] },
    ],
    crmNote: "個人本機版適合自己使用，價格較低，但資料主要存在同一台電腦與瀏覽器。若需要多人登入、雲端同步、權限、正式資料庫、備份或長期維護，會建議改做雲端團隊版，價格也會依需求提高。",
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
      ["學生開發者，真實案例驗證", "目前由學生開發者接案與交付，已有公廁 Bot、Dashboard 與 LINE 系統實際上線經驗；其他規劃中專案會清楚標示為實作經驗，不會誤寫成完成案例。價格會比一般市場客製行情低一些，但合作前仍會先確認範圍、時程、付款與驗收方式。"],
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
      ["one-page-web", "一頁式網頁 / 活動頁", 8000, "活動、課程、服務或品牌介紹頁，可放報名連結、FAQ 與聯絡方式"],
      ["faq", "FAQ / 分類引導流程", 10000, "把常見問題或服務流程整理成可操作選單"],
      ["custom-form", "客製化表單", 5000, "簡易欄位設計、填寫流程、資料紀錄或表單結果整理" ],
      ["external-link", "外部連結 / 表單串接", 2000, "加入 Google Form、報名表、網站、地圖或其他外部頁面連結" ],
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
    resultsTitle: "先看已上線成果與實作經驗，再討論你的版本",
    resultsText: "這裡優先放在前面，讓合作方先確認我有真實上線、真實使用者、真實數據介面的經驗。公廁 Bot 與 Dashboard 是已公開的實作成果；規劃中專案會清楚標示為需求規劃或實作規劃經驗，不會包裝成已完成案例。",
    cases: [
      { title: "公廁 Bot：公共服務據點查詢系統", tag: "真實上線案例", text: "以 LINE 作為入口，整合定位查詢、公共廁所資料、候選點篩選與 NTS / Trust Score 版本比較。這個案例證明我能把開放資料、LINE 操作流程、查詢邏輯與 Dashboard 數據介面整理成可被真實使用者操作的系統。", links: [["查看公廁介紹網站", "https://ytpeter777.github.io/ToiletMVP.DEV/"], ["查看 Dashboard", "https://school-i9co.onrender.com/dashboard"]] },
      { title: "LINE Bot 實際上線入口", tag: "實際使用入口", text: "這是公廁 Bot 的實際上線入口，可讓潛在客戶直接體驗使用者如何透過 LINE 完成查詢、定位與結果回傳。", links: [["加入 / 體驗 LINE Bot", "https://line.me/R/ti/p/@439avyvf"]] },
      { title: "野生動物救傷 LINE Bot", tag: "實作規劃經驗", text: "目前屬於需求討論與流程規劃中的公益單位系統方向，包含動物分類、外來種判斷、救傷資訊、位置查詢與基礎資料管理。此處作為相關實作規劃經驗，不標示為已完成合作案例。", links: [] },
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
    heroTop: "Organize the flow,",
    heroHighlight: "launch the system",
    heroText:
      "I help nonprofits, course and event teams, forum organizers, local organizations, and small brands turn scattered event information, LINE inquiries, registration forms, data search, and admin workflows into launchable Web / LINE systems. Start with the flow, then build a deliverable and maintainable version.",
    heroButton: "View plans, pricing, and cases",
    stat1Title: "30,000+",
    stat1Text: "Real users in a LINE system case",
    stat2Title: "Flow",
    stat2Text: "Events, forms, FAQs",
    stat3Title: "Data",
    stat3Text: "Query, click, and event analytics",
    rightBadge: "Real System Evidence",
    rightSmall: "How I can help",
    rightTitle: "Scope → Build → Expand",
    rightCards: [
      ["Break requirements into flows", "Clarify how users operate, what admins maintain, and what must be built first — avoiding an oversized first version."],
      ["Build a launchable version", "Create LINE Bots, search flows, data management, dashboards, or simple web pages based on the actual need."],
      ["Leave room to scale", "Later versions can add ranking models, usage logs, dashboards, reports, permissions, and maintenance plans."],
    ],
    miniStats: [["Flow", "Requirement breakdown"], ["System", "Build and launch"], ["Scale", "Future upgrades"]],
    problemLabel: "Problem",
    problemTitle: "The problem is usually not a missing pretty page — it is scattered information, forms, LINE inquiries, and data management",
    painPoints: [
      "Event, course, or forum information is spread across pages",
      "Registration forms, FAQs, contact windows, and reminders are not centralized",
      "Information is scattered across Excel, websites, PDFs, Google Forms, or social posts",
      "You want a LINE official account to become a real service entry",
      "Updating information manually is costly and slow",
      "You want query, click, registration, or event outcome data in the future",
    ],
    audienceLabel: "Who It Fits",
    audienceTitle: "Mainly for nonprofits, course teams, events, forums, and local organizations — with small shop and personal brand support",
    audienceText: "This site now emphasizes mid-sized system capabilities: event / course workflows, LINE navigation, data search, admin management, and dashboards. Shops and personal brands are still supported as starter projects, but they are no longer the main positioning.",
    audienceGroups: [
      ["Events / courses / camps", "Event pages, registration links, FAQs, pre-event info, LINE navigation"],
      ["Events / forums / seminars", "Agendas, speakers, registration, check-in, surveys, outcome data"],
      ["Nonprofits / associations / local teams", "Data search, service points, reporting flows, admin panels, outcome data"],
      ["Restaurants / shops / personal brands", "Menus, hours, portfolios, booking forms, LINE / IG links"],
    ],
    eventSystemLabel: "Event / Forum Systems",
    eventSystemTitle: "Events, forums, and seminars can become launchable workflow systems",
    eventSystemText: "For large events, forums, seminars, camps, or course series, I can help organize the before-during-after workflow into one system: participants find information faster, while organizers manage data and outcome records more easily.",
    eventSystemPoints: [
      ["Event website / forum page", "Agenda, speakers, time, location, transportation, notes, and contact windows"],
      ["Registration flow integration", "Connect existing forms or organize fields, confirmation messages, and follow-up information"],
      ["LINE navigation and FAQ routing", "Fast access to event info, transportation, check-in method, FAQs, and contact windows"],
      ["Participant list / check-in support", "Organize registration data, statuses, QR code or list verification workflow"],
      ["Survey and outcome analytics", "Post-event surveys, query logs, clicks, registration status, and outcome summary"],
      ["Admin content management", "Allow organizers to update event info, FAQs, links, lists, or data content"],
    ],
    buildLabel: "What I Build",
    buildTitle: "I do not only build web pages — I organize events, LINE flows, data, and admin needs into usable systems",
    buildText:
      "This is suitable for teams with event workflows, course information, forum needs, service point data, forms, FAQs, or management workflows. The first step is to clarify how users search, how admins update data, what needs an admin panel, and which records should be kept — then decide whether it should become an info page, LINE navigation, search system, admin panel, or dashboard.",
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
    packageTitle: "Mid-sized systems are the main focus; small plans are only an entry point",
    packageText: "If the project includes LINE Bot flows, data search, admin panels, location search, dashboards, registration/service workflows, or long-term updates, it is usually better to scope it as a mid-sized system. Small plans remain available as a first cooperation entry point, but this page keeps pricing simple instead of repeating the same features across multiple sections.",
    midPlanLabel: "Main Focus",
    midPlanTitle: "Mid-sized system projects",
    midPlanText: "These are the most suitable formal cooperation types: nonprofits, associations, course/event teams, local teams, multi-location services, and small organizations. If you need users to search, submit, receive responses, and let admins update data and view records, these plans are more suitable than a simple page.",
    midPlans: [
      { name: "LINE Bot + admin data management", price: "Student rate NT$ 50,000–100,000+", subtitle: "For nonprofits, associations, event teams, and small organizations", items: ["LINE Bot flow and FAQ routing", "Admin add/edit data", "Data search and basic analytics", "Testing, launch, and usage guide"] },
      { name: "Location search / map recommendation system", price: "Student rate NT$ 60,000–150,000+", subtitle: "For rescue centers, social service points, service locations, and local data", items: ["User location and nearest-point recommendation", "Google Maps navigation links", "Admin management for location data", "Search logs and outcome tracking"] },
      { name: "Event / course workflow system", price: "Student rate NT$ 50,000–120,000+", subtitle: "For camps, course centers, workshops, and parent-child activities", items: ["Event info and registration flow", "LINE navigation and FAQ", "Admin updates for event data", "Pre-event info and basic stats"] },
      { name: "Small CRM / internal management tool", price: "Student rate NT$ 50,000–120,000+", subtitle: "For teams managing leads, projects, statuses, and delivery dates", items: ["Lead / client / project management", "Status tracking and date reminders", "Revenue stats and search filters", "Custom fields and layout by workflow"] },
    ],
    midPlanNote: "Mid-sized system projects usually start with email or LINE requirement checks. If suitable, we can arrange a 15–30 minute online meeting to confirm scope, timeline, price, payment milestones, acceptance criteria, and post-launch maintenance.",
    midPlanButton: "Email about this system project",
    midPlanMailSubject: "Mid-sized system inquiry｜",
    smallPlanLabel: "Small Starter Plans",
    smallPlanTitle: "Small starter plans",
    smallPlanText: "Small plans are for simple needs or first-time cooperation. If the project already involves data management, search, admin panels, dashboards, location search, long-term updates, or multi-role workflows, it should be scoped as a mid-sized system above.",
    smallPlans: [
      { name: "One-page event / course page", price: "Student rate NT$ 8,000–15,000", subtitle: "For events, courses, camps, lectures, and workshops", items: ["Event introduction and key information", "Registration link / form integration", "Time, location, and reminders", "FAQ and contact information"] },
      { name: "LINE official account cleanup", price: "Student rate NT$ 5,000–10,000", subtitle: "For existing LINE accounts with scattered information or unclear menus", items: ["Rich menu planning", "FAQ categorization", "Form / website / social link organization", "Basic reply text cleanup"] },
      { name: "Small shop / personal brand info page", price: "Student rate NT$ 6,000–18,000", subtitle: "For shops, restaurants, personal brands, freelancers, or market brands", items: ["Shop / personal introduction", "Menu / services / pricing cleanup", "Map / booking / form links", "LINE / IG / phone integration"] },
      { name: "FAQ / info cleanup", price: "Student rate NT$ 10,000–20,000", subtitle: "For teams with repeated questions but no admin panel yet", items: ["5–10 common questions", "Basic flow and button navigation", "External link integration", "Basic testing and usage guide"] },
    ],
    upgradeNote: "Small plans focus on information cleanup and simple web / LINE flows. They do not include custom admin panels, databases, dashboards, location search, or complex workflows. If long-term updates, data management, or search features are needed during discussion, the project will be re-scoped as a mid-sized system.",
    smallPlanButton: "Email about this plan",
    smallPlanMailSubject: "Small plan inquiry｜",
    crmPlanButton: "Email about this CRM plan",
    crmMailSubject: "CRM / internal tool inquiry｜",
    crmLabel: "CRM / Internal Tools",
    crmTitle: "Custom lead tracking, client management, or internal workflow tools",
    crmText: "If you currently use Excel, Google Sheets, or notes to track leads, emails, replies, revenue, and delivery dates, this can be turned into a simple internal tool. CRM simply means a client and workflow management system that helps you see who has not been contacted, who needs follow-up, which deal may close, and what needs to be done today.",
    crmExplainTitle: "What is a CRM?",
    crmExplainText: "It does not have to be an enterprise system. It can simply put leads, emails, statuses, dates, plans, estimated revenue, received payments, and daily tasks in one place so you do not need to keep switching spreadsheets.",
    crmPreviewTitle: "Example preview: freelance lead tracker",
    crmPreviewText: "It can work like a small business dashboard: top cards show progress and revenue, a date wheel shows today's emails, follow-ups, work, and delivery items, and the lead table manages each client.",
    crmPreviewStats: [["100", "Leads"], ["100", "Emailed"], ["500K", "Projected"], ["Today", "Tasks"]],
    crmPreviewRows: ["Date wheel: email / follow-up / work / delivery", "Lead table: status, plan, email, next step", "Daily tasks: done or move unfinished work to tomorrow"],
    crmPlans: [
      { name: "Personal local manager", price: "Student rate from NT$ 15,000", subtitle: "For individual freelancers, students, or small sales workflows", items: ["Lead and status tracking", "Date wheel and daily tasks", "Estimated / received revenue", "Data stored in the user's browser"] },
      { name: "Custom-field manager", price: "Student rate from NT$ 25,000–40,000", subtitle: "For studios with fixed fields, processes, and tracking needs", items: ["Custom statuses and fields", "Bulk paste, search, and filters", "Work tasks and delivery dates", "Layout adjusted to the actual workflow"] },
      { name: "Cloud team manager", price: "Student rate from NT$ 50,000, evaluated by scope", subtitle: "For teams that need login, cloud database, or permission management", items: ["Login and cloud database", "Team access and permission planning", "Backup and data management", "Optional dashboard / analytics"] },
    ],
    crmNote: "The personal local version is suitable for individual use and costs less, but the data is mainly stored in the same computer and browser. If you need team login, cloud sync, permissions, a formal database, backups, or long-term maintenance, the cloud team version is recommended and will be priced by scope.",
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
      ["Student developer with real cases", "The project is handled and delivered by a student developer with real public Toilet Bot, dashboard, and LINE system launch experience; projects still in planning will be clearly labeled as implementation experience rather than completed cases. Pricing is slightly lower than typical custom development market pricing, but scope, timeline, payment, and acceptance criteria will still be confirmed before development."],
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
      ["one-page-web", "One-page website / event page", 8000, "For events, courses, services, or brand pages with registration links, FAQs, and contact info"],
      ["faq", "FAQ / category flow", 10000, "Turn common questions or service flows into menus"],
      ["custom-form", "Custom form", 5000, "Simple field setup, submission flow, data records, or form result organization" ],
      ["external-link", "External link / form integration", 2000, "Add Google Forms, registration forms, websites, maps, or other external page links" ],
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
    resultsTitle: "View launched results and implementation experience first",
    resultsText: "This section appears early so potential partners can first verify real launch experience, real users, and real dashboard/data interfaces. The public toilet Bot and dashboard are public implementation results; planning-stage projects are clearly labeled as requirement or implementation planning experience rather than completed client cases.",
    cases: [
      { title: "Public Toilet Bot: public service location search system", tag: "Live system case", text: "Using LINE as the entry, the system combines location search, public toilet data, candidate filtering, and NTS / Trust Score version comparison. This case shows that I can turn open data, LINE user flows, search logic, and dashboard analytics into a system used by real users.", links: [["View toilet Bot site", "https://ytpeter777.github.io/ToiletMVP.DEV/"], ["View Dashboard", "https://school-i9co.onrender.com/dashboard"]] },
      { title: "Live LINE Bot entry", tag: "Live system entry", text: "This is the public toilet Bot live entry, where potential clients can directly experience how users complete search, location sharing, and result retrieval in LINE.", links: [["Add / try the LINE Bot", "https://line.me/R/ti/p/@439avyvf"]] },
      { title: "Wildlife rescue LINE Bot", tag: "Implementation planning experience", text: "This is currently a nonprofit system direction under requirement discussion and process planning, including animal category guidance, invasive species logic, rescue information, location search, and basic data management. It is presented as implementation planning experience, not as a completed client case.", links: [] },
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

  const buildMidPlanMailto = (plan) => {
    const subject = encodeURIComponent(`${t.midPlanMailSubject}${plan.name}`);
    const body = encodeURIComponent(
      `${t.mailHello}

` +
      `${isEnglish ? "Selected mid-sized system" : "我想詢問的中型系統案"}：${plan.name}
` +
      `${isEnglish ? "Price range" : "方案價格"}：${plan.price}
` +
      `${isEnglish ? "Suitable for" : "適合情境"}：${plan.subtitle}

` +
      `${isEnglish ? "Brief description of my need" : "目前想解決的問題 / 需求簡述"}：
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
        <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-16 pt-14 lg:grid-cols-[0.9fr_0.85fr] md:items-center md:pt-16">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6 }}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200">
              <Sparkles className="h-4 w-4" />
              {t.badge}
            </div>
            <h1 className="max-w-2xl text-4xl font-bold leading-[1.12] tracking-tight text-white md:text-5xl lg:text-[4.6rem]">
              {t.heroTop}
              <span className="block text-cyan-300">{t.heroHighlight}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">{t.heroText}</p>

            <div className="mt-7 grid max-w-xl gap-3 sm:grid-cols-3">
              {[[t.stat1Title, t.stat1Text, true], [t.stat2Title, t.stat2Text], [t.stat3Title, t.stat3Text]].map(([title, text, accent]) => (
                <div key={title} className={`rounded-2xl border p-4 ${accent ? "border-cyan-300/20 bg-cyan-300/10" : "border-white/10 bg-white/[0.06]"}`}>
                  <p className="text-2xl font-bold text-white md:text-3xl">{title}</p>
                  <p className={`mt-1 text-sm ${accent ? "text-cyan-100" : "text-slate-300"}`}>{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#packages"><Button>{t.heroButton} <ArrowRight className="ml-2 h-4 w-4" /></Button></a>
            </div>
          </motion.div>

          <motion.div className="w-full md:max-w-xl md:justify-self-end" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <Card className="bg-white/10 shadow-2xl backdrop-blur">
              <CardContent className="p-5 md:p-7">
                <div className="mb-6 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3"><div className="h-3 w-3 rounded-full bg-red-400" /><div className="h-3 w-3 rounded-full bg-yellow-400" /><div className="h-3 w-3 rounded-full bg-green-400" /></div>
                  <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs text-cyan-200">{t.rightBadge}</span>
                </div>
                <div className="rounded-3xl bg-slate-900/70 p-5 ring-1 ring-white/10">
                  <p className="text-sm font-semibold text-cyan-200">{t.rightSmall}</p>
                  <h3 className="mt-3 text-xl font-bold leading-tight text-white md:text-2xl">{t.rightTitle}</h3>
                  <div className="mt-5 space-y-3">
                    {t.rightCards.map(([title, text], idx) => (
                      <div key={title} className={`rounded-2xl border p-4 ${idx === 2 ? "border-cyan-300/20 bg-cyan-300/10" : "border-white/10 bg-white/[0.06]"}`}>
                        <div className="flex items-start gap-3">
                          {idx === 2 ? <LineChart className="mt-0.5 h-5 w-5 text-cyan-200" /> : <div className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300" />}
                          <div><p className="font-semibold text-white">{title}</p><p className="mt-1 text-sm leading-6 text-slate-300">{text}</p></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-3 text-center text-sm">
                    {t.miniStats.map(([title, text]) => (
                      <div key={title} className="rounded-2xl bg-white/[0.08] p-3"><p className="text-lg font-bold text-white">{title}</p><p className="mt-1 text-xs text-slate-400">{text}</p></div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20"><div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 md:p-8"><div className="mb-8 max-w-3xl"><p className="text-sm font-semibold text-cyan-300">{t.resultsLabel}</p><h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">{t.resultsTitle}</h2><p className="mt-4 leading-7 text-slate-300">{t.resultsText}</p></div><div className="grid gap-5 md:grid-cols-3">{t.cases.map((item) => <Card key={item.title} className="bg-white/[0.05]"><CardContent className="flex h-full flex-col p-6"><div className="mb-4 inline-flex w-fit rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-200">{item.tag}</div><h3 className="text-xl font-bold text-white">{item.title}</h3><p className="mt-3 text-sm leading-6 text-slate-300">{item.text}</p><div className="mt-auto pt-5 space-y-2">{item.links?.map(([label, href]) => <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-slate-200 transition hover:border-cyan-300/30 hover:bg-cyan-300/10"><span>{label}</span><ExternalLink className="h-4 w-4 text-cyan-200" /></a>)}</div></CardContent></Card>)}</div></div></section>

        <section className="border-y border-white/10 bg-white/[0.03]"><div className="mx-auto max-w-6xl px-6 py-16"><div className="max-w-3xl"><p className="text-sm font-semibold text-cyan-300">{t.problemLabel}</p><h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">{t.problemTitle}</h2></div><div className="mt-8 grid gap-3 md:grid-cols-3">{t.painPoints.map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 text-slate-300">{item}</div>)}</div></div></section>

        <section className="mx-auto max-w-6xl px-6 py-20"><div className="mb-10 max-w-3xl"><p className="text-sm font-semibold text-cyan-300">{t.audienceLabel}</p><h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">{t.audienceTitle}</h2><p className="mt-5 leading-7 text-slate-300">{t.audienceText}</p></div><div className="grid gap-5 md:grid-cols-2">{t.audienceGroups.map(([title, text]) => <Card key={title} className="bg-slate-900/70"><CardContent className="p-6"><p className="text-lg font-bold text-white">{title}</p><p className="mt-3 text-sm leading-6 text-slate-300">{text}</p></CardContent></Card>)}</div></section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-6 md:p-8">
            <div className="mb-8 max-w-3xl">
              <p className="text-sm font-semibold text-cyan-200">{t.eventSystemLabel}</p>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">{t.eventSystemTitle}</h2>
              <p className="mt-5 leading-7 text-slate-300">{t.eventSystemText}</p>
            </div>
            <div className="grid gap-5 lg:grid-cols-2 lg:grid-cols-3">
              {t.eventSystemPoints.map(([title, text]) => (
                <Card key={title} className="bg-slate-950/35">
                  <CardContent className="p-5">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-300/10">
                      <ShieldCheck className="h-5 w-5 text-cyan-200" />
                    </div>
                    <p className="font-bold text-white">{title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="solution" className="mx-auto max-w-6xl px-6 py-20"><div className="mb-10 max-w-3xl"><p className="text-sm font-semibold text-cyan-300">{t.buildLabel}</p><h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">{t.buildTitle}</h2><p className="mt-5 leading-7 text-slate-300">{t.buildText}</p></div><div className="grid gap-5 md:grid-cols-4">{t.features.map((feature) => { const Icon = feature.icon; return <Card key={feature.title}><CardContent className="p-6"><div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10"><Icon className="h-6 w-6 text-cyan-300" /></div><h3 className="text-lg font-semibold text-white">{feature.title}</h3><p className="mt-3 text-sm leading-6 text-slate-300">{feature.text}</p></CardContent></Card>; })}</div></section>

        <section className="border-y border-white/10 bg-white/[0.03]"><div className="mx-auto max-w-6xl px-6 py-20"><div className="mb-10 max-w-3xl"><p className="text-sm font-semibold text-cyan-300">{t.flowLabel}</p><h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">{t.flowTitle}</h2></div><div className="grid gap-5 md:grid-cols-4">{t.offerSteps.map(([title, text]) => <Card key={title} className="bg-slate-900/70"><CardContent className="p-6"><p className="text-sm font-semibold text-cyan-300">{title}</p><p className="mt-4 text-sm leading-7 text-slate-300">{text}</p></CardContent></Card>)}</div><div className="mt-8 grid gap-3 md:grid-cols-4">{t.outcomes.map((item) => <div key={item} className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4 text-sm leading-6 text-cyan-50">{item}</div>)}</div></div></section>

        <section id="packages" className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 max-w-3xl"><p className="text-sm font-semibold text-cyan-300">{t.packageLabel}</p><h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">{t.packageTitle}</h2><p className="mt-5 leading-7 text-slate-300">{t.packageText}</p></div>

          <div className="mb-14">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold text-cyan-200">{t.midPlanLabel}</p>
                <h3 className="mt-3 text-3xl font-bold text-white md:text-4xl">{t.midPlanTitle}</h3>
                <p className="mt-4 leading-7 text-slate-300">{t.midPlanText}</p>
              </div>
              <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-4 py-3 text-sm leading-6 text-cyan-50 md:max-w-xs">
                中型案重點：先確認流程與資料，再決定功能範圍，不用一開始就做滿全部功能。
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {t.midPlans.map((item, index) => (
                <Card key={item.name} className="group overflow-hidden border-white/10 bg-white/[0.055] transition hover:border-cyan-300/30 hover:bg-white/[0.075]">
                  <CardContent className="flex h-full flex-col p-6 md:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold tracking-wide text-cyan-200">方案 {String(index + 1).padStart(2, '0')}</p>
                        <h4 className="mt-2 text-[1.45rem] font-bold leading-tight text-white md:whitespace-nowrap">{item.name}</h4>
                      </div>
                      <div className="shrink-0 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                        中型系統
                      </div>
                    </div>

                    <p className="mt-3 min-h-[2.5rem] text-sm leading-6 text-slate-300">{item.subtitle}</p>

                    <div className="my-5 h-px bg-white/10" />

                    <div className="grid gap-2 md:grid-cols-2">
                      {item.items.map((feature) => (
                        <div key={feature} className="rounded-2xl border border-white/10 bg-slate-950/25 px-3 py-2 text-sm leading-6 text-slate-300">
                          <span className="mr-2 text-cyan-300">•</span>{feature}
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-white/10 bg-slate-950/35 p-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-xs font-semibold text-slate-400">預估價格</p>
                        <p className="mt-1 whitespace-nowrap text-lg font-bold leading-tight text-cyan-200 md:text-xl">{item.price}</p>
                      </div>
                      <a href={buildMidPlanMailto(item)} className="shrink-0">
                        <Button className="w-full whitespace-nowrap px-5 py-3 text-sm sm:w-auto">{t.midPlanButton}</Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="mt-5 rounded-2xl border border-white/10 bg-slate-950/35 p-4 text-sm leading-6 text-slate-300">{t.midPlanNote}</p>
          </div>

          <div className="mb-12 rounded-3xl border border-white/10 bg-slate-900/70 p-6 md:p-8">
            <div className="mb-7 max-w-3xl">
              <p className="text-sm font-semibold text-cyan-300">{t.smallPlanLabel}</p>
              <h3 className="mt-3 text-2xl font-bold text-white md:text-3xl">{t.smallPlanTitle}</h3>
              <p className="mt-4 leading-7 text-slate-300">{t.smallPlanText}</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {t.smallPlans.map((item) => (
                <Card key={item.name} className="bg-slate-950/35">
                  <CardContent className="flex h-full flex-col p-5">
                    <h4 className="text-lg font-bold leading-tight text-white md:whitespace-nowrap">{item.name}</h4>
                    <p className="mt-2 whitespace-nowrap text-lg font-bold text-cyan-200 md:text-xl">{item.price}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{item.subtitle}</p>
                    <div className="my-4 h-px bg-white/10" />
                    <ul className="space-y-3 text-sm leading-6 text-slate-300">
                      {item.items.map((feature) => (
                        <li key={feature} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" /><span>{feature}</span></li>
                      ))}
                    </ul>
                    <a href={buildSmallPlanMailto(item)} className="mt-auto pt-5">
                      <Button className="w-full whitespace-nowrap text-sm">{t.smallPlanButton} <ExternalLink className="ml-2 h-4 w-4" /></Button>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="mt-6 rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm leading-6 text-slate-300">{t.upgradeNote}</p>
          </div>

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
            <div className="grid gap-5 lg:grid-cols-2 lg:grid-cols-4">
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
            <Card className="bg-slate-900/70"><CardContent className="p-5 md:p-7"><div className="grid gap-5 lg:grid-cols-2">
              {estimateOptions.map((item) => { const checked = selected.includes(item.id); return <button key={item.id} type="button" onClick={() => toggleOption(item.id)} className={`rounded-2xl border p-4 text-left transition ${checked ? "border-cyan-300/50 bg-cyan-300/10" : "border-white/10 bg-white/[0.04] hover:border-cyan-300/30 hover:bg-white/[0.07]"}`}><div className="flex items-start gap-3"><div className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border ${checked ? "border-cyan-300 bg-cyan-300 text-slate-950" : "border-slate-500"}`}>{checked && <span className="text-xs font-black">✓</span>}</div><div><p className="font-semibold text-white">{item.label}</p><p className="mt-1 text-sm leading-6 text-slate-400">{item.desc}</p><p className="mt-3 text-sm font-semibold text-cyan-200">{t.modulePrice} {item.price.toLocaleString()} 起</p></div></div></button>; })}
              <button type="button" onClick={() => setOtherEnabled((value) => !value)} className={`rounded-2xl border p-4 text-left transition ${otherEnabled ? "border-cyan-300/50 bg-cyan-300/10" : "border-white/10 bg-white/[0.04] hover:border-cyan-300/30 hover:bg-white/[0.07]"}`}><div className="flex items-start gap-3"><div className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border ${otherEnabled ? "border-cyan-300 bg-cyan-300 text-slate-950" : "border-slate-500"}`}>{otherEnabled && <span className="text-xs font-black">✓</span>}</div><div><p className="font-semibold text-white">{t.otherCustom}</p><p className="mt-1 text-sm leading-6 text-slate-400">{t.otherDesc}</p><p className="mt-3 text-sm font-semibold text-cyan-200">{t.otherPrice}</p></div></div></button>
            </div></CardContent></Card>

            <Card className="border-cyan-300/25 bg-cyan-300/10 shadow-2xl shadow-cyan-950/30"><CardContent className="sticky top-6 p-6 md:p-8"><p className="text-sm font-semibold text-cyan-200">{t.estimateTitle}</p><h3 className="mt-3 text-4xl font-bold text-white">{estimateLabel}</h3><p className="mt-4 text-sm leading-6 text-slate-300">{t.estimateDesc}</p><div className="my-6 h-px bg-white/10" /><div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4"><div className="flex items-center justify-between gap-4"><span className="text-sm text-slate-300">{t.subtotal}</span><span className="text-lg font-bold text-cyan-200">{subtotal === 0 ? "—" : `NT$ ${subtotal.toLocaleString()}`}</span></div><p className="mt-2 text-xs leading-5 text-slate-500">{t.rangeNote}</p></div><div className="my-6 h-px bg-white/10" /><div className="mb-6 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4"><p className="text-sm font-semibold text-cyan-100">{t.monthlyTitle}</p><p className="mt-2 text-sm leading-6 text-slate-200">{monthlyCostLabel}</p><p className="mt-1 text-xs leading-5 text-slate-400">{t.monthlyDesc}</p></div><p className="text-sm font-semibold text-white">{t.selectedTitle}</p><div className="mt-4 space-y-3">{selectedItems.length === 0 && !otherEnabled ? <p className="text-sm text-slate-400">{t.noneSelected}</p> : <>{selectedItems.map((item) => <div key={item.id} className="flex justify-between gap-4 text-sm text-slate-300"><span>{item.label}</span><span className="shrink-0 text-cyan-200">{item.price.toLocaleString()}</span></div>)}{otherEnabled && <div className="flex justify-between gap-4 text-sm text-slate-300"><span>{t.otherCustom}</span><span className="shrink-0 text-cyan-200">6,000+</span></div>}</>}</div><div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-sm leading-6 text-slate-300">{t.reminder}</div><a href={estimateMailto}><Button className="mt-6 w-full">{t.discussButton} <ExternalLink className="ml-2 h-4 w-4" /></Button></a></CardContent></Card>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 pb-24"><div className="rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-8 md:p-10"><div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center"><div><p className="text-sm font-semibold text-cyan-200">{t.contactLabel}</p><h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">{t.contactTitle}</h2><p className="mt-5 leading-7 text-slate-300">{t.contactText}</p></div><div className="rounded-3xl bg-slate-950/60 p-6 ring-1 ring-white/10"><p className="text-sm text-slate-400">{t.contactSmall}</p><p className="mt-4 text-sm leading-7 text-slate-300">{t.contactPrompt}</p><a href={estimateMailto}><Button className="mt-6 w-full">{t.contactButton} <ExternalLink className="ml-2 h-4 w-4" /></Button></a></div></div></div></section>
      </main>
    </div>
  );
}
