# 第 01 單元：來源、主張與使用界線

查證日期：2026-10-23。只記錄實際檢視的相關段落或頁面，不宣稱讀完全部課本、規範或網站。未搬用來源圖片；本章圖解依知識概念另行編排。

## 正文引用對照

| 編號 | 一手來源與定位 | 支持範圍／限制 |
|---|---|---|
| 1 | [MIT Course 6 課程目錄](https://catalog.mit.edu/subjects/6/) | 課程領域與先備關係；不是所有公式的通用引用 |
| 2 | [清大電機學士班課程表](https://web.ee.nthu.edu.tw/p/405-1175-41227,c527.php?Lang=zh-tw) | 課程與實驗範圍；實際學分依入學年度 |
| 3 | [Intel：Expanding Foundry Partnerships](https://www.intel.com/content/www/us/en/newsroom/opinion/expanding-foundry-partnerships-critical-piece.html)，2021-08-19 | 內部製造搭配外部代工的歷史例子；不引用文內舊市場數字或人事作目前狀況 |
| 4 | [Intel Foundry Fact Sheet](https://www.intel.com/content/www/us/en/foundry/library/fact-sheet.html)，服務與生態系段落 | 晶圓製造、封裝測試、設計與 IP 支援；不採用廠商的領先地位宣稱 |
| 5 | [TI Manufacturing terminology](https://www.ti.com/about-ti/worldwide-manufacturing/manufacturing-terminology.html)，Fab／Assembly | 晶圓加工與組裝測試；不推論全部產品唯一站序 |
| 6 | [TI Reliability](https://www.ti.com/quality-reliability/reliability.html)，During product validation／During production | 加速應力資格驗證、量產篩選、環境與使用條件；最終測試不是無條件壽命保證 |
| 7 | [IEEE EPS Definitions](https://eps.ieee.org/technology/definitions/)，Chiplet Definition | chiplet 是協同整合的 IC 區塊，不是封裝類型；不能把所有小晶粒一概視為 chiplet |
| 8 | [imec：A view on the logic technology roadmap](https://www.imec-int.com/en/articles/view-logic-technology-roadmap)，Key parts of the logic chip | FEOL 元件、MOL 接點、BEOL 互連；只引用基本分層，不把歷史路線圖當成最新量產清單 |
| 9 | [SEMI Compilation of Terms，Updated 1023](https://www.semi.org/sites/semi.org/files/2023-12/CompilationTerms1023.pdf) | 印刷頁 185 lot、240 process flow、250–251 recipe、96 cycle time、305 throughput rate、53 average WIP；明列查閱版本，不代表最新版標準全文 |
| 10 | [MIT 2.810 Manufacturing Processes and Systems](https://web.mit.edu/2.810/www/files/lectures/lec1-intro-2019.pdf)，2019-09-04，投影片 56 | Little's law 使用相同系統邊界與平均值；算例數字為自設 |
| 11 | [ST Semiconductor value chain](https://www.st.com/content/st_com/en/about/manufacturing-at-st/semiconductor-value-chain.html)，The IDM model、Front-end／Back-end manufacturing | 產業層級的前段晶圓製造、後段組裝封測，與晶圓內 BEOL 分開 |
| 12 | [Harald Pretl，JKU：Design of Complex Integrated Circuits](https://iic-jku.github.io/design-complex-ic/dcic.html)，§4.1、§6.1 | DRC／LVS、tape-out 及 GDSII／OASIS；晶圓測試可選、切割、封裝、最終測試，不把一般主線寫成強制唯一流程 |
| 13 | [Siemens：Master yield and speed in semiconductor manufacturing](https://blogs.sw.siemens.com/opcenter/master-yield-and-speed-in-semiconductor-manufacturing/)，2026-02-19 | 重複進站、MES 路徑變更、Recipe 版本管理；廠商能力說明不是所有工廠已實施的證據 |
| 14 | [Synopsys：What Is Electronic Design Automation?](https://www.synopsys.com/glossary/what-is-electronic-design-automation.html)，Definition、How EDA Works、Intellectual Property | EDA、設計驗證、製造準備及可重用 IP 的角色 |
| 15 | [SUMCO：Production Processes](https://www.sumcosi.com/english/products/process/)，Monocrystalline pulling／Slicing | 單晶晶棒與晶圓切片的關係；不搬用原圖或把工藝示例當安全操作規範 |

## 補充核對資料

- [MIT 6.02 Little's law 教材](https://ocw.mit.edu/courses/6-02-introduction-to-eecs-ii-digital-communication-systems-fall-2012/40abf69fd6895d82e1e249f68e3eedbd_xa38Q2_pnlQ.pdf)，PDF 第 12–14 頁：穩定系統、長期平均與 N = λD；不要求 FIFO。
- [MIT Lean Thinking Part II](https://ocw.mit.edu/courses/16-660j-introduction-to-lean-six-sigma-methods-january-iap-2012/f044431285fe865dd395b27f5d3c83ce_MIT16_660JIAP12_1-3part2.pdf)，投影片 13：WIP = throughput rate × cycle time。教材正文不用需求 takt time 無條件取代實際 throughput。
- [TI Assembly and test](https://www.ti.com/about-ti/worldwide-manufacturing/assembly-test.html)，An inside look：wafer probing、bumping、assembly、final test。封裝流程內的 front of line 不與晶圓 FEOL 混用。
- [Amkor Test services](https://amkor.com/test-services/)：wafer probe、final test、burn-in、system-level test 等服務，並非宣稱每個產品全部必做。
- [Intel 半導體導論 PDF](https://www.intel.com/content/dam/www/central-libraries/us/en/documents/semiconductors-and-intel-introduction.pdf)，印刷頁 8、11–12：商業模式與多晶粒封裝，僅用概念不使用舊市場數字。

## 已排除或受限的候選

- Applied Materials 官方簡報 `https://ir.appliedmaterials.com/static-files/bb1111e5-fcdd-4547-a96c-89829d52e37c` 的搜尋摘要可見 FEOL／MOL／BEOL 定義，但直接讀取回傳 403。正式正文改用可讀的 imec，不記成已全文查證。
- TI 舊候選 `https://www.ti.com/manufacturing/production-processes.html` 無法由查詢工具取得，改為已開啟的 Manufacturing terminology。
- ASE 候選頁直接讀取逾時，未作正式引用。

## 校訂時保留的界線

SEMI 的 lot 定義不是固定 25 片；批次數量、載具容量及設備單次處理量應分開。彙編中的大寫 Route 有特定 panel 搬送語境，不拿它假裝證明晶圓製程路徑；步序引用 process flow，route 的管理說明搭配 Siemens 的操作性介紹。

Little's law 必須使用同一邊界、單位、產品口徑及長期平均；不能把 wafer WIP 配上 good packaged units/day，也不能宣稱減少 WIP 必定維持吞吐量或保證個別批次交期。報廢、分流及多晶粒封裝會要求重新定義統計單位。

全部例題數值為自設，透過量綱、極限與程式重算檢查。插圖與 SVG 不承襲來源圖表的構圖，不複製圖片或標準全文。引用仍不等於來源作者背書、外部同儕審查或清權法律意見。
