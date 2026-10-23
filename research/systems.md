# 電路、系統與實作查證記錄

查核日期：2026-10-22 至 23。系統組起稿第 26–39 章，主編整合後由系統組逐章再審；主編另測建置與數值。完整閱讀原始及更新網站的 wafer-test、packaging、advanced-packaging、final-test-and-reliability、process-and-firmware，共十份正文。

新稿依工作點、誤差、時序、可觀測性及實驗證據重建，兩專題與全部數字為自設教學案例，未移植原圖與原例題。

## 查證分級

- 大學課程：[MIT 6.012](https://ocw.mit.edu/courses/6-012-microelectronic-devices-and-circuits-fall-2005/pages/lecture-notes/)、[MIT 6.004](https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/)、MIT 6.111、ETH 與 Cambridge 官方課程，用於相應理論與課程關係。
- 技術原始資料：TI Precision Labs、SLVA477、SPRA953D；ADI MT-001／MT-031／跨阻；Microchip 擷取；Altera 亞穩態；Arm 屏障；IEEE 1149.1；Synopsys ATPG；UCIe；Keysight RF；Tek 探棒；NIST 不確定度與比例。逐章保留直接網址。
- [Ginosar 同步器論文作者版](https://webee.technion.ac.il/~ran/papers/Metastability-and-Synchronizers.IEEEDToct2011.pdf)：核對 IEEE 書目、摘要與公開內容，不宣稱整篇逐段審讀。
- [Auburn ATPG 教材](https://eng.auburn.edu/~nelson/courses/elec5250_6250/slides/Test_ATPG.pdf)：故障模型與覆蓋率分母；官方產品頁另支持功耗管理。
- 延伸課本：Microelectronic Circuits 8e、Digital Integrated Circuits 2e、Fundamentals of Power Electronics 3e、The Art of Electronics 3e，核對出版商或作者書目，未讀全文。

## 終審與限制

重算負載、跨導、回授、SR、動態功耗、setup／hold、ADC、Buck、UART、逃逸、熱、Friis、不確定度及專題統計。修正源極術語、退化消耗裕量、雜訊末位捨入、緩衝初始容量與背壓假設，補明上升時間和匹配。替換 Intel 舊址與失效 ATPG PDF，Microchip 維護頁改為教育站。

前端另檢查 JS 資源漏驗、離線 ZIP 內下載斷鏈、焦點管理、索引重複及建置失敗保護；主編已修正。沒有實物、SPICE 或真實瀏覽器驗收，不能將靜態測試當作這些驗證。
