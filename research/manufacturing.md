# 製程與品質篇查證記錄

查核日期：2026-10-22 至 23。第 14–25 章研究起稿由製程組完成，主編整合，並由基礎組交叉審查 18–21；製程組再次核對落地的 14–17、22–25。

## 原有資料與新稿範圍

完整閱讀原始及更新網站版本的 sand-to-wafer、lithography、thin-films、etching、ion-implantation、CMP、cleaning、metallization、CMOS flow、memory、metrology、yield analysis、process control、abnormality handling、fab systems，共三十份正文。新稿依材料規格、傳輸反應、幾何電性、證據控制重建，不沿用圖像或逐段換字；數據均為教學假設，非製程配方。

## 直接支持模型的資料

- [Harvard CNS 微影講義](https://cns1.rc.fas.harvard.edu/facilities/docs/2014%20Nanofabrication%20Summer%20School%20-%20Photolithography.pdf)：解析度與焦深。
- [MIT CVD](https://ocw.mit.edu/courses/6-152j-micro-nano-processing-technology-fall-2005/cad5227ddbdf120be10a0c372f2ccedd_cvd.pdf)：通量、反應傳輸與厚度速率。
- [MIT 擴散與佈植](https://ocw.mit.edu/courses/6-152j-micro-nano-processing-technology-fall-2005/fa6170fba10bd1341251791563a18fc2_lecture6.pdf)：有限劑量與射程近似。
- [MIT Dry Etching](https://ocw.mit.edu/courses/6-152j-micro-nano-processing-technology-fall-2005/59b9f31d836355a3380aa156925508bc_lecture17.pdf)：離子增強、選擇比與圖形效應。
- [MIT／Boning CMP](https://boning.mit.edu/wp-content/uploads/2022/11/MIT-IntCMPSymp-Dec2000-ver4db.pdf)：Preston 及平坦化模型。替換誤連至年報的資料。
- [Stanford 互連](https://web.stanford.edu/class/archive/ee/ee371/ee371.1066/lectures/lect_09_1up.pdf)：襯層、散射與 RC。
- [Stanford SRAM](https://web.stanford.edu/class/archive/ee/ee371/ee371.1066/lectures/lect_15.2up.pdf)、[Berkeley DRAM](https://people.eecs.berkeley.edu/~pattrsn/294/lec2.html)：單元讀取與共享；不把歷史節點數據當現況。
- [Cai 等，Proceedings of the IEEE 2017](https://pdl.cmu.edu/PDL-FTP/NVM/08013174.pdf)：NAND、錯誤、FTL 與寫入放大，取代失效的教育 PDF。
- [NIST/SEMATECH](https://www.itl.nist.gov/div898/handbook/)：DOE、比例、Poisson、能力、EWMA、壽命與加速；正文連至具體小節。

設備商資料僅用於對應設備和技術概覽。JVST B 42, 041501 的公開 PDF 因工具大小限制未通讀，僅核實書目與可取得技術段落。商業課本只核對書目時，標為延伸閱讀。

## 修正與驗算

修正協方差可略去的條件、CVD 通量單位、厚膜含初始時間、凝固比例非幾何中點、圓管毛細模型、良率統計單位及 Black 模型符號。遮罩與停止層分開暴露時間；活化與化學濃度、EWMA 與控制律、加速時間與壽命保證均分開。各章算例由 JavaScript 與量綱交叉核對，結果存於驗證檔。
