# 基礎與元件篇查證記錄

查核日期：2026-10-22 至 23。第 02–13 章由基礎組研究與起稿，主編整合；基礎組再交叉審查第 10–13、18–21、40–46 及附錄，製程組審查第 01–09。

## 讀取範圍與編寫

完整閱讀原始與網站版本的 overview、how-a-fab-works、transistor-basics、advanced-transistors、process-nodes，共十份正文。新稿依數學、電路、場、能帶、傳輸、接面、BJT、MOS 及先進元件重新編排，沒有移植圖片與原例題。原書僅用於主題盤點，不能以重寫宣稱任何舊素材權利消失。

## 主要查證來源

- [NIST SI 定義](https://www.nist.gov/pml/special-publication-330/sp-330-section-2)：單位、常數與量綱。
- [MIT 18.03 講義](https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/pages/lecture-notes/)：一階方程、複指數及阻尼的課程對應。
- [MIT 6.002 講義](https://ocw.mit.edu/courses/6-002-circuits-and-electronics-spring-2007/pages/lecture-notes/)：集總、網路定理、儲能及暫態；頁面所列部分講義來自 Fall 2000，不誤稱全部於 2007 撰寫。
- [MIT 6.003](https://ocw.mit.edu/courses/6-003-signals-and-systems-fall-2011/)：LTI、頻域與取樣；另查第 21 講取樣 PDF。
- [MIT 6.013 教材](https://ocw.mit.edu/courses/6-013-electromagnetics-and-applications-spring-2009/pages/readings/)：場、儲能與 TEM 傳輸線，另開啟第七章。
- [MIT 6.012 講義](https://ocw.mit.edu/courses/6-012-microelectronic-devices-and-circuits-spring-2009/pages/lecture-notes/)：第 2、3、4、6、7 講相關載子、接面與 MOS 內容。
- [Chenming Hu 作者教材](https://www.chu.berkeley.edu/modern-semiconductor-devices-for-integrated-circuits-chenming-calvin-hu-2010/)：開啟第 1、4、5、6、7、8 章公開 PDF，核對模型；不宣稱全書所有頁已讀。

## 審查修正

補明常值激勵下的一階終值響應、真空波長、完整切換週期 RMS、電性接面與化學濃度區別；修正術語表的零初始條件、可消去極點及 RL 時間常數。交叉驗算載子、接面、BJT、MOS、MEMS、流體、表面反應與偵測統計。具體數值以 numerical-cases.mjs 及 verification.json 留存。

查證是模型與相應公開段落核對，不是實驗室量測、獨立學界同儕審查或法律清權。部分 IUPAC、RSC 自動存取受限，未據此宣稱全文已驗。
