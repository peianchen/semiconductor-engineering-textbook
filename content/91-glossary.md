# 附錄B　跨學科術語速查

## 使用方式

下列是本書語境中的簡短定義，不是製程規格或國際標準的逐字轉錄。遇到縮寫先辨認所屬領域，例如 DFT 在本書的測試章表示 Design for Test，不是離散傅立葉轉換。正式報告應首次出現時寫出全名。

## 模型、數學與電路

| 術語 | 英文 | 本書中的意義 |
|---|---|---|
| 集總模型 | Lumped model | 忽略元件內部傳播延遲，以集中參數描述 |
| 工作點 | Operating point | 小訊號線性化所依據的直流或穩態條件 |
| 小訊號 | Small signal | 在指定工作點附近，允許用導數近似的擾動 |
| 相量 | Phasor | 表示同頻正弦穩態振幅與相位的複數 |
| 轉移函數 | Transfer function | 零初始條件下，線性時不變系統輸出與輸入的變換域比值 |
| 極點 | Pole | 約去可消去公因子後的轉移函數奇異點；有理式中為不可消去的分母零點 |
| 頻寬 | Bandwidth | 依指定幅度、誤差或性能準則界定的頻率範圍 |
| 混疊 | Aliasing | 取樣後不同連續時間頻率無法唯一區分 |
| 回授 | Feedback | 將輸出的一部分送回影響輸入或誤差信號 |
| 相位裕度 | Phase margin | 特定迴路交越條件下衡量距離不穩定的相位指標 |
| 共模 | Common mode | 多條訊號線共同具有的分量 |
| 差模 | Differential mode | 兩個訊號之間的差值分量 |
| 輸入等效雜訊 | Input-referred noise | 以增益或靈敏度將輸出雜訊換算回輸入端 |
| 可辨識性 | Identifiability | 資料是否足以區分不同模型或參數組合 |

## 材料與元件

| 術語 | 英文 | 本書中的意義 |
|---|---|---|
| 能帶 | Energy band | 固體中允許電子占用的能量範圍 |
| 能隙 | Band gap | 價帶與導帶間的能量間隔 |
| 費米能階 | Fermi level | 平衡統計中控制電子占據的化學勢尺度 |
| 摻雜 | Doping | 以雜質等方式調整半導體的電性 |
| 本質半導體 | Intrinsic semiconductor | 理想純淨材料中電子與電洞由本質激發決定的情況 |
| 漂移 | Drift | 載子在電場下形成的平均運動 |
| 擴散 | Diffusion | 濃度不均導致的淨傳輸 |
| 空乏區 | Depletion region | 可動載子相對減少、固定電荷顯著的區域 |
| 復合 | Recombination | 電子與電洞成對消失為可動載子的過程 |
| 遷移率 | Mobility | 低場近似下平均漂移速度與電場的比例 |
| 跨導 | Transconductance | 控制電壓小變化造成電流變化的局部比值 |
| 次臨界 | Subthreshold | MOS 元件未進入強反轉的導電範圍之一 |
| 短通道效應 | Short-channel effects | 縮短通道後，源汲極等對通道電位控制變得重要的效應 |
| FinFET | Fin field-effect transistor | 以鰭狀通道與多面閘極改善靜電控制的結構 |
| GAA | Gate-all-around | 閘極環繞通道的元件架構 |
| 崩潰 | Breakdown | 在特定電場或偏壓下電流劇增等失效或工作現象，須辨認機制 |

## 製程與積體化

| 術語 | 英文 | 本書中的意義 |
|---|---|---|
| 微影 | Lithography | 將圖形轉移至可供後續加工使用的材料層 |
| 關鍵尺寸 | Critical dimension, CD | 影響功能的重要結構尺寸 |
| 疊對 | Overlay | 不同圖形層之間的相對位置誤差 |
| 製程視窗 | Process window | 同時滿足指定品質要求的一組參數範圍 |
| 蝕刻選擇比 | Etch selectivity | 指定條件下兩種材料蝕刻速率的比值 |
| 非等向性 | Anisotropy | 性質或加工速率隨方向不同 |
| CVD | Chemical vapor deposition | 透過氣相反應在表面形成薄膜的一類方法 |
| PVD | Physical vapor deposition | 以物理方式輸送材料並形成薄膜的一類方法 |
| ALD | Atomic layer deposition | 以交替、表面受限反應逐循環成長薄膜的方法 |
| 離子植入 | Ion implantation | 用加速離子調整材料組成與摻雜分布 |
| 活化 | Activation | 使摻雜原子等進入具有所需電性作用的狀態 |
| 熱預算 | Thermal budget | 熱歷程對擴散、反應與損傷修復等效應的綜合約束 |
| CMP | Chemical mechanical planarization | 結合化學與機械作用的平坦化製程 |
| FEOL | Front end of line | 以元件形成為主的前段積體製程 |
| BEOL | Back end of line | 以晶片內多層互連為主的後段積體製程 |
| PDK | Process design kit | 連接製程與設計工具的模型、規則及相關資料 |
| 設計規則 | Design rules | 為可製造性及可靠性設定的幾何與相關約束 |
| 寄生參數 | Parasitics | 非理想但真實存在、影響功能的電阻電容電感等 |

## 品質、系統與實驗

| 術語 | 英文 | 本書中的意義 |
|---|---|---|
| 良率 | Yield | 在明確分母及判定準則下的通過比例 |
| SPC | Statistical process control | 以統計方法監視製程隨時間的變化 |
| 管制界限 | Control limits | 由製程統計模式建立的異常判定界限 |
| 規格界限 | Specification limits | 由產品或客戶要求設定的接受範圍 |
| DOE | Design of experiments | 為辨識因子與交互作用而規劃實驗的方式 |
| 追溯性 | Traceability | 能回連量測參考、批次歷程或資料來源的能力；語境需說明 |
| 不確定度 | Uncertainty | 量測值合理分散程度的量化表述 |
| DFT | Design for test | 在設計階段加入提升可測性的結構與方法 |
| Scan | Scan testing | 將內部狀態串接為可控制與觀察路徑的測試方法 |
| 時序收斂 | Timing closure | 使實作在指定條件下符合所有相關時序限制 |
| CDC | Clock-domain crossing | 訊號跨越不同時脈域所形成的同步問題 |
| 亞穩態 | Metastability | 儲存元件在特定輸入時序下短暫無法立即穩定為有效邏輯值 |
| ADC／DAC | Analog-to-digital／digital-to-analog converter | 類比與數位表示之間的轉換器 |
| ENOB | Effective number of bits | 以指定動態性能指標換算的有效位元數 |
| SI／PI | Signal／power integrity | 訊號與供電在互連及負載下保持所需品質的問題 |
| Chiplet | Chiplet | 以多顆功能晶粒整合系統的設計與封裝方式 |
| 熱阻 | Thermal resistance | 在指定邊界條件下，溫差與熱流率之比 |
| 去嵌入 | De-embedding | 以模型移除量測治具等對結果的影響 |

## 微奈米與分析量測

| 術語 | 英文 | 本書中的意義 |
|---|---|---|
| MEMS | Microelectromechanical systems | 整合微尺度機械結構與相關讀出或致動的系統 |
| 拉入 | Pull-in | 靜電作用等使某些結構失去穩定平衡的現象 |
| 黏附失效 | Stiction | 可動微結構因表面作用等黏住而不能正常運動 |
| 雷諾數 | Reynolds number | 特定尺度下慣性與黏滯效應的比較 |
| Péclet 數 | Péclet number | 特定尺度下對流與擴散的比較 |
| 邊界層 | Boundary layer | 速度、濃度或溫度在界面附近快速變化的區域 |
| Langmuir 模型 | Langmuir model | 獨立等價位點等假設下的吸附或結合描述 |
| 非特異性吸附 | Nonspecific adsorption | 非由預期辨識機制主導的表面附著 |
| Debye 長度 | Debye length | 特定平衡模型中的離子屏蔽特徵長度 |
| BioFET | Biological field-effect transistor | 利用場效讀取生物相關界面變化的感測架構 |
| 法拉第電流 | Faradaic current | 與電極電荷轉移反應相關的電流 |
| 雙電層 | Electrical double layer | 帶電界面與附近反電荷形成的結構 |
| 量子產率 | Quantum yield | 指定過程中產出事件與吸收事件數的比值 |
| 存取電阻 | Access resistance | 孔口外部電流匯聚或散開形成的電阻分量 |
| 空白 | Blank | 不含待測目標或按方法定義準備的背景樣本 |
| 基質效應 | Matrix effect | 樣本其他成分對分析結果的影響 |
| LOD | Limit of detection | 在指定程序與判定條件下可區分的最小量 |
| 偽陽性／偽陰性 | False positive／false negative | 錯誤宣布存在／錯誤未辨識存在的判定結果 |
| 回收率 | Recovery | 經完整流程後回得的目標量相對於指定加入或參考量的比例 |
| 資料洩漏 | Data leakage | 驗證資料的資訊不當進入模型訓練或選擇過程 |

## 術語核對入口

分析化學名詞可查 [IUPAC Gold Book](https://goldbook.iupac.org/)，統計與量測可查 [NIST/SEMATECH e-Handbook](https://www.itl.nist.gov/div898/handbook/)，其他術語請連同各章的具體模型與引用閱讀。不同文獻的定義可能不同，不能只依縮寫判斷兩個數值是否可比較。
