# 第02單元：一手來源與查讀範圍

查核日期：2026-10-24。只查讀下列明列的頁面或段落，不宣稱讀完整門課、付費課本或完成外部同儕審查。本文獨立組織教學順序、算例與圖稿；文獻提供定義和模型依據，並不轉讓其圖文權利。

## 單位與量綱

- [NIST SP 330，Section 2](https://www.nist.gov/pml/special-publication-330/sp-330-section-2)，§2.1、§2.3.3：量值、單位及無因次量。保留既有引用。
- [Section 3](https://www.nist.gov/pml/special-publication-330/sp-330-section-3)：SI前綴與含前綴單位的乘冪。
- [Section 5](https://www.nist.gov/pml/special-publication-330/sp-330-section-5)，§5.2、§5.4.7：量與單位的表示、量值運算。
- 應用界線：cm⁻³與cm⁻²換算由單位定義自行推得；濃度、面劑量與總數是本教材另設的半導體案例。量綱一致不保證物理正確；無因次不表示不同物理量可以任意混用。

## 斜率與累積量

- [MIT 18.01 Lecture 1](https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/lec1.pdf)，印刷頁1–2、6–7（PDF頁2–3、7–8）：差商極限、切線斜率與瞬時變化率。
- [MIT 18.01 Lecture 19](https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/817a2c46ddc23e2efda247a79ddeed34_lec19.pdf)，印刷頁1–3（PDF頁2–4）：變化率積分、淨變化及區間相加。
- 本章固定電容升壓、深度積分與離散電流梯形累積是自行設計的應用，不是上述講義的原例題。梯形結果對指定分段線性插值精確，不保證等於樣本間未知波形的積分。

## 一階RC與初始條件

- [Stanford ENGR 40M：Transient response of RC and RL circuits](https://web.stanford.edu/class/archive/engr/engr40m.1178/slides/transient.pdf)，Chuan-Zheng Lee，2017-07-26，PDF頁1–2的RC部分：一般初值解、終值、時間常數與初始斜率。
- [MIT 18.03 講義入口](https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/pages/lecture-notes/)：保留既有延伸閱讀入口，不拿課程索引充當具體RC推導的全文查證。
- 90%、99%、10–90%上升時間及元件容差例，由本章列出的指數式自行推得。限制為固定正值R、C、常值激勵、指定初值與單一集總狀態；額外負載可能改變等效R、C及終值。
- 熱阻／熱容段為原稿保留模型加自設數字，只示範相同一階方程；不代表實際封裝溫度場或安全驗證。

## 線性方程與條件性

- [MIT 18.06 Spring 2010](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/)：保留既有課程入口。
- [MIT 18.06SC：Solving Ax = b: row reduced form R](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/f5a74578196a8afc2fd2ba8581acb17f_MIT18_06SCF11_Ses1.8sum.pdf)，頁1–3：相容性、一般解、秩與零空間。相依需同時檢查右側，不能直接斷言無限多解。
- [MIT 18.335J Week 2，Lecture 5 Summary](https://ocw.mit.edu/courses/18-335j-introduction-to-numerical-methods-spring-2019/pages/week-2/)：輸入擾動的敏感性與浮點運算誤差不同。查讀本講摘要，不宣稱完整推導了數值線性代數。
- 兩節點KCL、1 V正規化與幾乎平行的兩式，均為本教材自行設計。條件性依表示尺度解讀；不能由某係數很小就直接判定模型失敗。

## 近似與不確定度

- [NIST TN 1297 Appendix A：Law of Propagation of Uncertainty](https://www.nist.gov/pml/nist-technical-note-1297/nist-tn-1297-appendix-law-propagation-uncertainty)，A.1–A.5，重點為A.3式A-3：一階Taylor傳播、靈敏度係數、變異數與協方差。
- 差分雜訊：固定且精確已知的間隔h下，差值變異數為兩端變異數之和減兩倍協方差；獨立、相同標準差時得到√2σ/h。時戳誤差、相鄰相關及離散近似誤差不得隱去。
- 電阻R=ρL/A的有號變動、最壞容差及標準不確定度是三個不同問題。平方和開根號需可忽略相關；容差不能直接當標準差。若以寬乘厚表示面積，不得再把面積當獨立來源重複加入。
- 1/a曲線、切線2−a、相對誤差、最不利參數端點及所有數字是自行計算。約6%的線性估計不是精確最大界限；允許端點可同時發生時精確值為約6.2062%。

## 對照與限制

原3個引用網址全部保留；新版書末列10項，合計11個不同網址。新增引用在正文對應位置標註，沒有用課程名稱代替實際讀過的段落。

既有第二章屬本教材的工程數學銜接章，與最早製造教材的章序並不一一對應。本輪保留比對基準是本專案9cbbe40中的第二章，不宣稱完成不存在的「原作者同名第二章」逐句對照。既有來源素材與授權未因本次改寫而刪除。
