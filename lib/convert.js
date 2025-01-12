t = {
    "A": "エー",
    "B": "ビー",
    "C": "シー",
    "D": "ディー",
    "E": "イー",
    "F": "エフ",
    "G": "ジー",
    "H": "エイチ",
    "I": "アイ",
    "J": "ジェー",
    "K": "ケー",
    "L": "エル",
    "M": "エム",
    "N": "エヌ",
    "O": "オー",
    "P": "ピー",
    "Q": "キュー",
    "R": "アール",
    "T": "ティー",
    "V": "ブイ",
    "S": "エス",
    "U": "ユー",
    "W": "ダブリュー",
    "X": "エックス",
    "Y": "ワイ",
    "Z": "ゼット",
    "1": "イチ",
    "2": "ニ",
    "3": "サン",
    "4": "ヨン",
    "5": "ゴ",
    "6": "ロク",
    "7": "ナナ",
    "8": "ハチ",
    "9": "キュウ",
    "0": "ゼロ",
    "-": "ハイフン",
    "_": "アンダーバー",
    ".": "ドット",
    "@": "＠"
  }


function convertToFurigana(text, table = t) {
    var s = ""
    for(var c of text){
        if (s.length != 0) {s += "・"}
        c = c.toUpperCase();
        s += table[c] || c
    }
    console.log(s)
    return s
}

function main() {
    v = document.getElementById("original").value
    console.log(v)
    document.getElementById("encoded").value = convertToFurigana(v, t)
}
