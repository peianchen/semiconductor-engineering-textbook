# 編務與查證記錄

2026-10-22。新書採學科先備順序編排46章，獨立撰寫正文與算例。讀取既有內容用於主題盤點，不移植既有段落、例題或圖片；當時原始素材留存在既有資料夾，不納入新站輸出。

2026-10-23 整理更新：專案命名為 Silicon to Systems。舊章節、圖片與建置程式已連同當時完整 Git 歷史另作本機備份，從新版主分支移除；content/README.md 改為新教材索引。本研究記錄保留查閱與編寫經過，不以目錄清理或歷史重建宣稱法律清權。新版學術引用與 KaTeX 第三方授權仍保留。

## 本次已讀資料
- 原始繁中首頁、8份分部索引、術語總表、現場行話與延伸閱讀。
- 最新網站11篇微奈米/生醫短章全文與既有課程索引。
- 其餘原書與最新版本正文章節由三位作者逐檔全文讀取，詳各研究檔。

## 新書查證與延伸資料
- https://ocw.mit.edu/courses/2-674-micro-nano-engineering-laboratory-spring-2016/resources/lecture-notes/ ：MEMS、表面與微流體課程資料索引，進一步選取公開講義確認模型。
- https://www.cambridge.org/core/books/micro-and-nanoscale-fluid-mechanics/9E4617F4CB0B3E489DCFC291A39452FF ：Kirby 書名、作者、出版資訊與目錄已查；非全書全文已讀。
- https://assets.cambridge.org/97805211/19030/excerpt/9780521119030_excerpt.pdf ：公開節錄，守恆方程與邊界條件架構。
- https://arxiv.org/abs/0712.0198 ：Nair與Alam的屏蔽模型論文摘要，支持屏蔽與反應傳輸需要一起考量；不據摘要聲稱完整裝置性能。
- https://goldbook.iupac.org/terms/view/D01629 ：檢出限與指定判定機率。
- https://goldbook.iupac.org/terms/view/L03540 ：空白分布與判定門檻。
- https://pubs.rsc.org/en/content/articlehtml/1987/an/an9871200199 ：Analytical Methods Committee, Analyst 112, 199–204，doi:10.1039/AN9871200199。已核實摘要與出版資訊。
- https://media.iupac.org/publications/pac/2003/pdf/7508x1097.pdf ：分析方法驗證與校正、回收率、不確定性之報告要素。
- https://catalog.mit.edu/subjects/6/ 與 https://web.ee.nthu.edu.tw/p/405-1175-41227,c527.php?Lang=zh-tw ：課程範圍，不聲稱等同各校學分。

## 網站依賴
KaTeX 初裝0.16.22的audit回報一項低風險問題；已改安裝0.19.0，audit為0項。公式將在建置時排版並打包字型，避免CDN依賴。
