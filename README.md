# Silicon to Systems

### 半導體、電子與電機工程教材

**Semiconductor, Electronics & Electrical Engineering — a Traditional Chinese study guide**

46 chapters and 3 appendices connecting engineering fundamentals, semiconductor devices and fabrication, circuits, systems, MEMS, and biosensing. Includes worked examples, practice solutions, academic references, and an offline HTML edition. The textbook is written in Traditional Chinese.

繁體中文跨學科教材：46章正文與3個附錄。每章包含先備知識、模型與假設、自設例題、練習及解答，參考資料列在相應位置。面向大學基礎課程銜接與自學，不宣稱取代完整系所課程。

## 開始閱讀

- **瀏覽完整目錄：**[46 章正文與 3 個附錄](content/README.md)，按數理、元件、製程、品質、電路、專題與感測分組。
- **直接在 GitHub 閱讀：**[從工程學習地圖開始](content/01-engineering-map.md)，或查看[完整教材文字版](dist/book.md)。
- **下載離線 HTML：**[下載 ZIP](dist/engineering-textbook-html.zip?raw=true)，解壓縮後開啟 `index.html`，不需安裝開發工具；包含搜尋、深淺色與分章閱讀。
- **先了解品質與限制：**[檢查紀錄](research/quality-report.md)與[機器驗證結果](research/verification.json)。程式檢查不代表外部專家審查或實體實驗驗證。

## 建置與檢查

```sh
npm ci
npm run build
npm run check
```

新正文為 `content/01-*.md` 至 `content/46-*.md`；附錄為90–92。`scripts/build-book.mjs` 只選取這些平面檔案，使用本機 KaTeX 將公式預先排版，沒有外部CDN或分析追蹤。`scripts/check-book.mjs` 驗證章節結構、內部檔案與錨點、公式錯誤、JavaScript語法及教學模型數值，結果寫入 `research/verification.json`。這些檢查不等於同儕審查或真實瀏覽器視覺驗收。

## 產出

- `dist/index.html`：學習地圖與分章入口。
- `dist/all.html`：完整閱讀與列印版。
- `dist/book.md`：合併後的文字與公式原始檔。
- `dist/engineering-textbook-html.zip`：可解壓後直接開啟的離線包。
- `dist/book-manifest.json`：實際章數、字數及公式數。

離線閱讀時請保留 `assets/` 與 `chapters/` 的相對位置，不要只移動一個HTML檔。引用的外部資料仍需連線開啟。瀏覽器列印可另存PDF；本次沒有預先產生或檢查PDF分頁。

## 一起改善教材

歡迎透過 Issues 回報錯誤，附上章節、原文位置、問題說明與可核實的參考資料；也歡迎提交修正的 Pull Request。請勿提交未經授權的課本掃描或付費全文。如果這份教材對你有幫助，歡迎給一顆 Star，讓更多自學者找到它。
