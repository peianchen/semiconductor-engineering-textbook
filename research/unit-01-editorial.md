# UNIT 01 擴編與原創圖像紀錄

日期：2026-10-23。範圍僅第 01 章，不代表其餘章節已完成同等圖解擴編。

## 編寫方式與概念核對

本次以製造全景的主題清單檢查知識覆蓋，獨立編排說明、例題與教學圖。沒有移植既有圖檔，也不以更換引用來掩飾素材來源。先前留存資料與權利紀錄不因本次改寫而刪除。

| 概念 | 新章位置 |
|---|---|
| 產業角色、設備與材料、EDA／IP | 第 2 節 |
| 設計、光罩、投片、晶圓製造、測試、封裝與出貨 | 第 3 節、圖 1-1 |
| 晶圓、晶粒、封裝、切割道、邊緣與成本 | 第 4、11 節、圖 1-2 |
| 產業前後段與晶圓內 FEOL／MOL／BEOL | 第 5 節、圖 1-3 |
| Lot、Route、Recipe 與追溯 | 第 6、7 節、圖 1-4 |
| 重複製程、量測、隔離與核准返工 | 第 7 節 |
| 產能、等待、在製品與交期 | 第 12 節 |
| 可驗收規格與典型／保證／實測值 | 第 1 節 |
| 訊號鏈、跨層參數與三類科系學習路徑 | 第 8、9 節、圖 1-5 |
| 原新章的省電算例、ADC 練習與模型檢查 | 第 10、13 節、練習 4、5 |

原對應概觀單元有 2 個註解中的圖稿占位及 2 條文字箭頭流程，沒有實際嵌入圖片；占位不計為圖片。本次新增 5 張圖：1 張 AI 原創概念插圖、4 張獨立繪製的 SVG 教學圖。新增良率／成本及 Little's law 算例，合計 3 組完整算例、8 題練習及解答。

初稿比較採同一規則計算 Markdown 中的漢字，排除 HTML 註解、包含標題、圖說及參考資料：原對應概觀 1,741 字，前一版第 01 章 1,954 字，新稿約 8,900 字。最終字數會隨引用及校訂改變；字數不是深度或完整性的證明。

## 圖像來源與限制

| 檔案 | 方式 | 查核焦點 |
|---|---|---|
| assets/figures/unit01-lifecycle.svg | 依本章概念重新編排的向量圖 | 交付物、順序、資訊與實物流，不畫萬用返工 |
| assets/figures/unit01-wafer-die-package.png | 內建 imagegen 從空白生成，沒有參考圖輸入 | 晶圓／裸晶／單晶粒打線 BGA 的層級與非等比例限制 |
| assets/figures/unit01-front-back.svg | 原創向量分類圖 | 晶圓內 BEOL 不等於封裝後段 |
| assets/figures/unit01-process-control.svg | 原創向量流程圖 | 異常先隔離判定；返工需核准 |
| assets/figures/unit01-system-map.svg | 原創向量關係圖 | 訊號鏈與跨層分析，不把功能框等同獨立晶片 |

圖像皆為教學示意，不是顯微影像、實測數據、比例尺正確的結構或設備操作配方。逐圖檢查圖義、文字、箭頭與正文一致性；SVG 另經本機渲染檢視。圖像檢視不等於完整桌機／手機瀏覽器驗收。

### 概念插圖的完整生成提示

使用內建 imagegen，未指定外部 API 模型，未使用任何舊圖作編輯或參考。輸出 PNG 為 2036 × 772，保留原始生成結果，未用影像處理程式重繪或修改內容。

```text
Use case: scientific-educational.
Asset type: original raster illustration for an introductory semiconductor engineering textbook.
Primary request: a wide three-panel textbook illustration distinguishing wafer, bare die, and packaged integrated circuit. Create this from scratch, without reference images.
Scene/backdrop: clean off-white background with generous whitespace.
Style/medium: polished technical educational illustration, restrained teal and slate palette, crisp outlines with subtle dimensional shading; clearly conceptual, not photorealistic.
Composition: three separated panels ordered left to right, with simple rightward conceptual arrows between them.
Panel 1: a circular silicon wafer, shown in slightly elevated oblique view, with a neat grid of rectangular dies separated by clear scribe lanes and partial dies at the circular edge.
Panel 2: one enlarged bare rectangular silicon die with subtle circuit patterns, clearly a single piece cut from a wafer.
Panel 3: a conceptual cutaway of one single-die IC package: a bare die inside protective encapsulation, supported on a larger package substrate, electrical connections from die to substrate, and a ball-grid array of electrical contacts underneath the substrate. The package body/substrate is larger than the die. Make support, protection, and connection visually clear; depict a coherent simple package, not a detailed manufacturing recipe.
Text, verbatim only: beneath each corresponding panel use the labels "WAFER", "DIE", "PACKAGE" in clean readable sans-serif type. Center the footer exactly "CONCEPTUAL VIEW — NOT TO SCALE". No other text.
Scientific constraints: the objects are conceptual object levels, not equal-scale drawings or a literal one-step production process. The die must not turn into another wafer. Panel 1 is a full circular wafer with many dies; panel 2 is one bare die; panel 3 contains one die inside the larger package.
Avoid: product logos, watermarks, decorative science symbols, percentages, dimension annotations, fabricated measurements, photorealistic claims, extra objects, extra panels.
```

## 檢查界線

資料查證見 unit-01-sources.md；程式結果見 verification.json。數值測試、圖片存在與離線完整性檢查不等於外部學科專家審查。尚無可用瀏覽器，未聲稱完成桌機／手機互動、PDF 分頁或實體實驗驗收。
