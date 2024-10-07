type Item = {
    id: string;
    subject: string;
}

export type CategoryType = {[key: string]: { [key: string] : Item[] }}

export const category:CategoryType = {
    'univ': 
        {
            '代数学':
                [
                    {id: 'u101', subject: '数論'},
                    {id: 'u102', subject: '線形代数学'},
                    {id: 'u103', subject: '群論'},
                    {id: 'u104', subject: '環論'},
                    {id: 'u105', subject: '体論'},
                    {id: 'u106', subject: '表現論'},
                    {id: 'u107', subject: '代数的整数論'},
                    {id: 'u108', subject: '圏論'}
                ],
            '解析学':
                [
                    {id: 'u201', subject: '微分積分学'},
                    {id: 'u202', subject: '集合、位相'},
                    {id: 'u203', subject: '複素関数論'},
                    {id: 'u204', subject: '測度論'},
                    {id: 'u205', subject: '関数解析学'},
                    {id: 'u206', subject: '微分方程式'}
                ],
            '幾何学':
                [
                    {id: 'u301', subject: '微分幾何学'},
                    {id: 'u302', subject: '多様体論'},
                    {id: 'u303', subject: '位相幾何学'},
                    {id: 'u304', subject: '可微分多様体論'},
                    {id: 'u305', subject: '代数幾何学'} 
                ],
            '統計学':
                [
                    {id: 'u401', subject: '確率論'},
                    {id: 'u402', subject: '記述統計'},
                    {id: 'u403', subject: '推測統計'},
                    {id: 'u404', subject: 'ベイズ統計'},
                    {id: 'u405', subject: '離散数学'}
                ]
        },
    'high': 
        {
            '数学Ⅰ':
                [
                    {id: 'h101', subject: '数と式'},
                    {id: 'h102', subject: '式の展開と因数分解'},
                    {id: 'h103', subject: '三角比'},
                    {id: 'h104', subject: '正弦定理'},
                    {id: 'h105', subject: '余弦定理'},
                    {id: 'h106', subject: '二次関数のグラフ'},
                    {id: 'h107', subject: '二次関数の最大・最小'},
                    {id: 'h108', subject: '二次関数と二次方程式'},
                    {id: 'h109', subject: '二次方程式'},
                    {id: 'h110', subject: 'データの散らばり'},
                    {id: 'h111', subject: 'データの相関'},
                    {id: 'h112', subject: '仮説検定'}   
                ],
            '数学Ⅱ':
                [
                    {id: 'h201', subject: '式の計算'},
                    {id: 'h202', subject: '等式、不等式の証明'},
                    {id: 'h203', subject: '高次方程式',},
                    {id: 'h204', subject: '複素数'},
                    {id: 'h205', subject: '直線と円'},
                    {id: 'h206', subject: '軌跡と領域'},
                    {id: 'h207', subject: '指数関数'},
                    {id: 'h208', subject: '対数関数'},
                    {id: 'h209', subject: '三角関数'},
                    {id: 'h210', subject: '三角関数の公式'},
                    {id: 'h211', subject: '微分'},
                    {id: 'h212', subject: '積分'} 
                ],
            '数学Ⅲ':
                [
                    {id: 'h301', subject: '数列の極限'},
                    {id: 'h302', subject: '関数とその極限'},
                    {id: 'h303', subject: '微分'},
                    {id: 'h304', subject: '合成関数の微分'},
                    {id: 'h305', subject: '三角関数、指数関数、対数関数の微分'},
                    {id: 'h306', subject: '導関数の応用'},
                    {id: 'h307', subject: '不定積分'},
                    {id: 'h308', subject: '置換積分'},
                    {id: 'h309', subject: '部分積分'},
                    {id: 'h310', subject: 'いろいろな関数の積分'},
                    {id: 'h311', subject: '積分の応用'},
                ],
            '数学A':
                [
                    {id: 'h401', subject: '平面図形'},
                    {id: 'h402', subject: '空間図形'},
                    {id: 'h403', subject: '場合の数'},
                    {id: 'h404', subject: '順列・組み合わせ'},
                    {id: 'h405', subject: '基本の確立'},
                    {id: 'h406', subject: '独立な試行と確立'},
                    {id: 'h407', subject: '条件付確率'},
                    {id: 'h408', subject: '期待値'},
                    {id: 'h409', subject: '約数と倍数・ユークリッドの互除法'},
                    {id: 'h410', subject: '2点間の距離'},
                    {id: 'h411', subject: '数学史'}
                ],
            '数学B':
                [
                    {id: 'h501', subject: '数列とその和'},
                    {id: 'h502', subject: '漸化式と数列'},
                    {id: 'h503', subject: '数学的帰納法'},
                    {id: 'h504', subject: '確率変数と確立分布'},
                    {id: 'h505', subject: '平均、分散、標準偏差'},
                    {id: 'h506', subject: '二項分布'},
                    {id: 'h507', subject: '連続型確率分布'},
                    {id: 'h508', subject: '正規分布'},
                    {id: 'h509', subject: '母集団と標本'},
                    {id: 'h510', subject: '区間推定、仮設検定'},
                    {id: 'h511', subject: '数理的な問題解決'},
                    {id: 'h512', subject: 'データ解析'} 
                ],
            '数学C':
                [
                    {id: 'h601', subject: 'ベクトルの基本'},
                    {id: 'h602', subject: '空間座標とベクトル'},
                    {id: 'h603', subject: '二次曲線'},
                    {id: 'h604', subject: '媒介変数表示'},
                    {id: 'h605', subject: '極座標による表示'},
                    {id: 'h606', subject: '複素平面'},
                    {id: 'h607', subject: 'ド・モアブルの定理'},
                    {id: 'h608', subject: '統計グラフ'},
                    {id: 'h609', subject: '離散グラフ'},
                    {id: 'h610', subject: '行列'}
                ]
        },
    'junior': 
        {
            '中学1年':
                [
                    {id: 'j101', subject: '正負の数'},
                    {id: 'j102', subject: '文字と式'},
                    {id: 'j103', subject: '比例、反比例'},
                    {id: 'j104', subject: '方程式'},
                    {id: 'j105', subject: '平面図形'},
                    {id: 'j106', subject: '空間図形'},
                    {id: 'j107', subject: 'データの活用'}
                ],
            '中学2年':
                [
                    {id: 'j201', subject: '式の計算'},
                    {id: 'j202', subject: '一次関数'},
                    {id: 'j203', subject: '連立方程式'},
                    {id: 'j204', subject: '三角形、四角形'},
                    {id: 'j205', subject: '確率'} 
                ],
            '中学3年':
                [
                    {id: 'j301', subject: '式の展開、因数分解'},
                    {id: 'j302', subject: '平方根'},
                    {id: 'j303', subject: '2乗に比例する関数'},
                    {id: 'j304', subject: '二次方程式'},
                    {id: 'j305', subject: '相似な図形'},
                    {id: 'j306', subject: '円'},
                    {id: 'j307', subject: '三平方の定理'},
                    {id: 'j308', subject: '標本平均'}
                ],
        },
    'prim':
        {
            '小学1年': 
                [
                    {id: 'p101', subject: 'かずについて'},
                    {id: 'p102', subject: 'たしざん'},
                    {id: 'p103', subject: 'ひきざん'},
                    {id: 'p104', subject: 'かたちづくり'}
                ],
            '小学2年': 
                [
                    {id: 'p201', subject: 'ひっ算'},
                    {id: 'p202', subject: '長さのたんい'},
                    {id: 'p203', subject: '水のかさのはかり方'},
                    {id: 'p204', subject: '三角形と四角形'},
                    {id: 'p205', subject: '九九'},
                    {id: 'p206', subject: '分数'},
                    {id: 'p207', subject: 'はこの形'}
                ],
            '小学3年': 
                [
                    {id: 'p301', subject: 'かけ算'},
                    {id: 'p302', subject: 'わり算'},
                    {id: 'p303', subject: '3桁の足し算、引き算'},
                    {id: 'p304', subject: '円と球'},
                    {id: 'p305', subject: '小数'},
                    {id: 'p306', subject: '重さのたんい'},
                    {id: 'p307', subject: '分数'},
                    {id: 'p308', subject: 'かけ算の筆算'},
                    {id: 'p309', subject: '三角形'},
                    {id: 'p3010', subject: 'ぼうグラフと表'}
                ],
            '小学4年': 
                [
                    {id: 'p401', subject: '大きい数'},
                    {id: 'p402', subject: '折れ線グラフ'},
                    {id: 'p403', subject: '割り算の筆算'},
                    {id: 'p404', subject: 'がい数'},
                    {id: 'p405', subject: '計算のきまり'},
                    {id: 'p406', subject: '垂直と並行'},
                    {id: 'p407', subject: '分数'},
                    {id: 'p408', subject: '面積'},
                    {id: 'p409', subject: '小数のかけ算・わり算'},
                    {id: 'p410', subject: '直方体と立方体'}
                ],
            '小学5年':
                [
                    {id: 'p501', subject: '整数と小数'},
                    {id: 'p502', subject: '直方体・立方体の体積'},
                    {id: 'p503', subject: '比例'},
                    {id: 'p504', subject: '小数のかけ算・わり算'},
                    {id: 'p505', subject: '図形の角'},
                    {id: 'p506', subject: '偶数と奇数、倍数と約数'},
                    {id: 'p507', subject: '分数、小数、整数の関係'},
                    {id: 'p508', subject: '分数のたし算、ひき算'},
                    {id: 'p509', subject: '平均'},
                    {id: 'p510', subject: '単位量'},
                    {id: 'p511', subject: '四角形、三角形の面積'},
                    {id: 'p512', subject: '割合'},
                    {id: 'p513', subject: '帯グラフ、円グラフ'},
                    {id: 'p514', subject: '正多角形と円周の長さ'},
                    {id: 'p515', subject: '角柱と円柱'}
                ],
            '小学6年':
                [
                    {id: 'p601', subject: '対称'},
                    {id: 'p602', subject: '文字と式'},
                    {id: 'p603', subject: '分数のかけ算、わり算'},
                    {id: 'p604', subject: '割合の表し方'},
                    {id: 'p605', subject: '形が同じ図形'},
                    {id: 'p606', subject: '円の面積'},
                    {id: 'p607', subject: 'およその面積'},
                    {id: 'p608', subject: '比例'},
                    {id: 'p609', subject: 'データの特徴'}  
                ]
        }
    ,
    'others':{}
}