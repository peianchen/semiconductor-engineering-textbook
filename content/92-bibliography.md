# 附錄C　學術資料、延伸閱讀與編寫說明

## 這本教材如何使用資料

本書依學習目的重新安排章節、論述與自設例題，以可核實的大學課程、作者公開資料、期刊及官方技術文件支持概念。正文中的假設數字不是實驗結果，也不代表任何公司、學校或產品的效能。沒有取得全文的書籍或論文，不宣稱已逐頁閱讀或驗證；書目與摘要核對、公開章節查閱及完整資料閱讀是不同層級。

每章的連結優先放在所支持的概念旁或章末。本附錄整理學習入口與代表性書目，不表示任何一個來源支持全書所有敘述。引用不等於學校或作者認可本教材。外部網站可能移動、要求機構訂閱或限制自動存取；遇到此情況可依完整題名、作者及 DOI 到圖書館查找。

## 大學課程與學習脈絡

| 學校／機構 | 官方資料 | 適合用途與限制 |
|---|---|---|
| MIT | [EECS 科目目錄](https://catalog.mit.edu/subjects/6/) | 了解電路、訊號、計算與元件的課程關係；不是本書等同取得學分的聲明 |
| MIT OpenCourseWare | [開放課程入口](https://ocw.mit.edu/) | 各章另列相關課程與講義的直接連結；不同開課年度的內容可能不同 |
| UC Berkeley，Chenming Hu | [Modern Semiconductor Devices for Integrated Circuits 作者教材頁](https://www.chu.berkeley.edu/modern-semiconductor-devices-for-integrated-circuits-chenming-calvin-hu-2010/) | 半導體物理、接面、MOS 與積體元件的公開章節 |
| ETH Zürich | [SwissChips：微電子相關課程](https://swisschips.ethz.ch/education-outreach/eth-zurich-course-offerings.html) | HDL、實體設計、全客製電路與測試的課程鏈；此處查核的是課程介紹 |
| University of Cambridge | [Engineering 官方課程說明](https://www.undergraduate.study.cam.ac.uk/courses/engineering-ba-hons-meng) | 廣泛工程基礎、實驗與後續專業分流的學習脈絡 |
| 國立清華大學電機系 | [官方課程資訊](https://web.ee.nthu.edu.tw/p/405-1175-41227,c527.php?Lang=zh-tw) | 本地科系課程規劃參照；必選修與畢業規定以入學年度公告為準 |

這些課程呈現不同的組織方式，沒有唯一的全球課表。本書把共同基礎與跨域連結組合為自學路徑；課程時數、實驗深度與正式評量仍須由授課單位決定。

## 教科書：按需要查閱，不必一次讀完

1. Chenming C. Hu，*Modern Semiconductor Devices for Integrated Circuits*（2010）。[作者官方頁及章節](https://www.chu.berkeley.edu/modern-semiconductor-devices-for-integrated-circuits-chenming-calvin-hu-2010/)。適合將能帶、接面和 MOS 模型串連；公開章節可直接查閱。
2. Simon M. Sze、Yiming Li、Kwok K. Ng，*Physics of Semiconductor Devices*，第4版，Wiley（2021），ISBN 9781119618003。[出版社書目](https://www.wiley.com/en-ca/physics-of-semiconductor-devices-4th-edition-p-9781119618003)。適合進一步研究元件物理；本附錄核對作者、版本與主題，不宣稱已取得全書。
3. Brian J. Kirby，*Micro- and Nanoscale Fluid Mechanics: Transport in Microfluidic Devices*，Cambridge University Press（紙本2010），DOI 10.1017/CBO9780511760723。[出版社資料](https://www.cambridge.org/core/books/micro-and-nanoscale-fluid-mechanics/9E4617F4CB0B3E489DCFC291A39452FF)、[公開試閱](https://assets.cambridge.org/97805211/19030/excerpt/9780521119030_excerpt.pdf)。適合微流體、電動力學與傳輸；已查書目與試閱，非全書逐頁查核。
4. Allen J. Bard、Larry R. Faulkner、Henry S. White，*Electrochemical Methods: Fundamentals and Applications*，第3版，Wiley（2022），ISBN 9781119334057。[出版社書目](https://www.wiley.com/en-ca/electrochemical-methods-fundamentals-and-applications-3rd-edition-p-9781119334057)。適合電極反應、質量傳輸與電化學量測；本附錄查核書目與章節資訊。

電路、訊號、統計與製程的其他教科書及作者資料另見各章引用。延伸書籍是進一步學習入口，不是把未查閱內容當成已讀證據。

## 期刊與作者公開資料

| 文獻 | 查閱入口 | 本書使用範圍 |
|---|---|---|
| Cui, Y.; Wei, Q.; Park, H.; Lieber, C. M. “Nanowire nanosensors for highly sensitive and selective detection of biological and chemical species.” *Science* 293, 1289–1292（2001），DOI 10.1126/science.1062711 | [PubMed 作者摘要與書目](https://pubmed.ncbi.nlm.nih.gov/11509722/) | 奈米線電性讀出與表面功能化的研究背景；不重製論文圖表或把特定性能當普遍規格 |
| Nair, P. R.; Alam, M. A. “Screening-Limited Response of NanoBiosensors.” *Nano Letters* 8, 1281–1285（2008），DOI 10.1021/nl072593i | [作者預印本 arXiv:0712.0198](https://arxiv.org/abs/0712.0198) | 屏蔽與反應／傳輸的模型背景；預印本與正式版可能有編輯差異 |
| Robertson, J. W.; Ghimire, M.; Reiner, J. “Nanopore sensing: a physical-chemical approach.” *Biochimica et Biophysica Acta—Biomembranes* 1863（2021），183644，DOI 10.1016/j.bbamem.2021.183644 | [NIST 作者出版記錄與全文入口](https://www.nist.gov/publications/nanopore-sensing-physical-chemical-approach) | 生物奈米孔的物理化學背景；不能當成所有固態孔模型的驗證 |
| Analytical Methods Committee. “Recommendations for the definition, estimation and use of the detection limit.” *Analyst* 112, 199–204（1987），DOI 10.1039/AN9871200199 | [RSC 出版頁](https://pubs.rsc.org/en/content/articlehtml/1987/an/an9871200199) | 偵測限的定義與估計脈絡；本書另外以明確常態假設推導教學例題 |

其他製程、元件與電路文獻列在對應章節，應連同引用位置的限定語閱讀。論文年代較早不代表基礎模型失效，但歷史展示不能用來推論目前量產能力。

## 官方定義、統計與量測

| 資料 | 用途 |
|---|---|
| [NIST/SEMATECH e-Handbook](https://www.itl.nist.gov/div898/handbook/) | 實驗設計、統計、製程監控與能力分析；各章有細節頁連結 |
| [NIST Technical Note 1297](https://www.nist.gov/pml/nist-technical-note-1297) | 標準、合成與擴充不確定度的基本表述 |
| [NIST Fundamental Physical Constants](https://physics.nist.gov/cuu/Constants/) | 物理常數與 SI 單位核對 |
| [IUPAC Gold Book](https://goldbook.iupac.org/) | 分析與物理化學術語；正文引用指定條目 |

## 使用範圍與安全

本書是一部跨學科入門與銜接教材，不涵蓋任何一個系所的全部必修深度，也不是製程廠機密配方、危險化學操作手冊或醫療診斷指南。涉及高壓、大電流、真空、雷射、化學品或生物樣本的工作，需在合格場地、訓練與監督下依正式規範進行。

公式的數學排版由本機附帶的 KaTeX 提供；軟體的第三方授權隨資源保留。學術參考文獻的連結不會改變來源原有權利，亦不表示可任意複製其圖表、照片或全文。
