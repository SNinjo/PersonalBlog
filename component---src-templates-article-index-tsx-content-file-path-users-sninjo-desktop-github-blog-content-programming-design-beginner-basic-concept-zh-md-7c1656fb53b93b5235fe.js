"use strict";(self.webpackChunkSNinjo_Blog=self.webpackChunkSNinjo_Blog||[]).push([[288],{4297:function(e,n,l){l.r(n),l.d(n,{Head:function(){return f},default:function(){return y}});var t=l(1151),a=l(7294);function r(e){const n=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",ul:"ul",li:"li",br:"br",a:"a",h2:"h2"},(0,t.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(n.h1,null,"變數"),"\n",a.createElement(n.p,null,"變數是一具有名子且可以存值的儲存空間。在第一次使用前需要先宣告，並在指派值給它時便會創建。\n舉例來說，我們宣告變數「x」並指派 10 給變數「y」。"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"x        # 宣告 x\ny = 10   # 宣告 y 且指派 10 給 y\n")),"\n",a.createElement(n.p,null,"以下為常見的變數型態："),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"布林",a.createElement(n.br),"\n","只有「True」與「False」兩種值，常用在",a.createElement(n.a,{href:"#%E6%B1%BA%E7%AD%96"},"決策"),"。","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"x = True\ny = False\n")),"\n"),"\n",a.createElement(n.li,null,"數字",a.createElement(n.br),"\n","包含整數與浮點數兩種類型。","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"x = 10   # 整數\ny = 1.5  # 浮點數\n")),"\n"),"\n",a.createElement(n.li,null,"字串",a.createElement(n.br),"\n","就是文字，以下有三種字串。","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"x = \"I'm string.\"\ny = 'I am string, too.'\nz = '''I am also string'''  # 可包含換行符「\\n」\n")),"\n"),"\n",a.createElement(n.li,null,"物件",a.createElement(n.br),"\n","擁有可以透過 key 使用的屬性與方法，就像是「鍵-值對」。在 Python 中，我們利用「字典」或是大括號創建它。","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"x = dict(  id=1, name='sninjo'  )  # 字典\ny = {  id: 2, name: 'jo'  }  # 大括號\nx['id']  # 1\ny[\"name\"] = 'alan'  # 指派 'alan' 給 key 為「name」的屬性\n")),"\n"),"\n",a.createElement(n.li,null,"陣列",a.createElement(n.br),"\n","一個很基礎的資料結構，將值儲存在連續的儲存空間中，並利用從 0 開始的「索引」來使用當中的元素。我們利用中括號來創建它。","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"x = [<物件>, <物件>, ...]\nx[<索引>]\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"x = [1, 2, 3]\nx[0]  # 1\nx[1]  # 2\nx[2] = 10  # 指派 10 給索引為「2」的元素\n")),"\n"),"\n"),"\n",a.createElement(n.h1,null,"函式"),"\n",a.createElement(n.p,null,"函式是被呼叫才執行的一段程式碼，在 Python 中使用縮排而非大括號來定義函式程式碼的範圍，並使用「return」離開這段程式並回傳值。\n此外，在函數宣告時陳列在小括號中的變數稱為「參數」，其可以在函數中使用；而呼叫函式時在小括號中的值稱為「引數」，其可以將值傳入對應的參數中。"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"def <name>(<parameter>, <parameter>, ...):\n    <action>                         # 函式的程式碼\n<name>(<argument>, <argument>, ...)  # 呼叫函式並帶入引數\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"def sum(x, y):\n    return x + y\nsum(1, 2)\n")),"\n",a.createElement(n.p,null,"以下為常見的函示："),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"print()",a.createElement(n.br),"\n","在終端機中顯示字串。","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"print('Hello World')\nx = True\nprint(x)\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-output"},"Hello World\nTrue\n")),"\n"),"\n",a.createElement(n.li,null,"type()",a.createElement(n.br),"\n","回傳物件的型態。","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"print(type('Hello World'))\nx = True\nprint(type(x))\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-output"},"<class 'str'>\n<class 'bool'>\n")),"\n"),"\n",a.createElement(n.li,null,"len()",a.createElement(n.br),"\n","回傳物件的長度。","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"print(len('Hello World'))\nx = [1, 2, 3]\nprint(len(x))\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-output"},"11\n3\n")),"\n"),"\n",a.createElement(n.li,null,"abs()",a.createElement(n.br),"\n","回傳數字的絕對值。","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"print(abs(10))\nx = -5\nprint(abs(x))\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-output"},"10\n5\n")),"\n"),"\n",a.createElement(n.li,null,"range()",a.createElement(n.br),"\n","回傳有序的等差數列，像是 range(min, max, step) 會列出從「min」開始到小於「max」且間格為「step」的數列。","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"range(0, 5, 1)   # 0, 1, 2, 3, 4\nrange(9, 4, -2)  # 9, 7, 5\n")),"\n"),"\n"),"\n",a.createElement(n.h1,null,"決策"),"\n",a.createElement(n.p,null,"決策又稱為「條件判斷」，若符合條件則可以執行指定的程式碼，並捨棄之後的判斷條件。"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"if <條件>:\n    <動作>\nelif <條件>:\n    <動作>\nelif <條件>:\n    <動作>\n...\nelse:\n    <動作>\n")),"\n",a.createElement(n.p,null,"以下為簡單的範例："),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"if","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"if True:\n    print('if')\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-output"},"if\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"if False:\n    print('if')\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-output"})),"\n"),"\n",a.createElement(n.li,null,"if-else","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"if True:\n    print('if')\nelse:\n    print('else')\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-output"},"if\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"if False:\n    print('if')\nelse:\n    print('else')\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-output"},"else\n")),"\n"),"\n",a.createElement(n.li,null,"if-elif-else","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"if True:\n    print('if')\nelif True:\n    print('elif')\nelse:\n    print('else')\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-output"},"if\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"if False:\n    print('if')\nelif True:\n    print('elif')\nelse:\n    print('else')\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-output"},"elif\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"if False:\n    print('if')\nelif False:\n    print('elif')\nelse:\n    print('else')\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-output"},"else\n")),"\n"),"\n"),"\n",a.createElement(n.p,null,"以下為條件判斷常用到的運算子。"),"\n",a.createElement(n.h2,null,"布林運算子"),"\n",a.createElement(n.p,null,"布林運算子也稱為「邏輯運算子」，它將用來處理多種條件判斷。"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"not",a.createElement(n.br),"\n","回傳相反的布林值。","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"print(not True)\nprint(not False)\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-output"},"False\nTrue\n")),"\n"),"\n",a.createElement(n.li,null,"or",a.createElement(n.br),"\n","回傳「True」若其中一個運算元是「True」。","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"print(True or False)\nprint(False or False)\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-output"},"True\nFalse\n")),"\n"),"\n",a.createElement(n.li,null,"and",a.createElement(n.br),"\n","回傳「True」若兩個運算元皆是「True」。","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"print(True or True)\nprint(True or False)\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-output"},"True\nFalse\n")),"\n"),"\n"),"\n",a.createElement(n.h2,null,"比較運算元"),"\n",a.createElement(n.p,null,"比較運算元將比較兩個值，並回傳一個布林值作為結果。"),"\n",a.createElement(n.p,null,"以下為六種不同的比較運算元："),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"等於「==」","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"print(1 == 1)\nprint('sninjo' == 'jo')\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-output"},"True\nFalse\n")),"\n"),"\n",a.createElement(n.li,null,"不等於「!=」","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"print(1 != 1)\nprint('sninjo' != 'jo')\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-output"},"False\nTrue\n")),"\n"),"\n",a.createElement(n.li,null,"小於「<」","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"print(1 < 1)\nprint(1 < 5)\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-output"},"False\nTrue\n")),"\n"),"\n",a.createElement(n.li,null,"大於「>」","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"print(1 > 1)\nprint(1 > -1)\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-output"},"False\nTrue\n")),"\n"),"\n",a.createElement(n.li,null,"小於等於「<=」","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"print(1 <= 1)\nprint(1 <= -1)\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-output"},"True\nFalse\n")),"\n"),"\n",a.createElement(n.li,null,"大於等於「>=」","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"print(1 >= 1)\nprint(1 >= 5)\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-output"},"True\nFalse\n")),"\n"),"\n"),"\n",a.createElement(n.h1,null,"迴圈"),"\n",a.createElement(n.p,null,"迴圈被用於重複執行一段程式碼，在 Python 中，我們使用縮排而非大括號來定義程式碼的範圍。此外，這也被稱為「迭代」，其核心概念為「撰寫一次程式」則可以「執行數次」。"),"\n",a.createElement(n.p,null,"以下為兩種類型的迴圈："),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"while","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"while <條件>:\n    <動作>\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"x = True\nwhile (x):\n    print('while')\n    x = False\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-output"},"while\n")),"\n"),"\n",a.createElement(n.li,null,"for",a.createElement(n.br),"\n","陣列與 range() 皆為迭代物件，在 for 迴圈中，每次的迭代皆可以「從迭代物件中按照順序取得一個元素」指派至變數中使用。","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"for <物件> in <迭代物件>:\n    <動作>\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"for x in [0, 1, 2]:\n    print(x)\nfor x in range(3, 5, 1):\n    print(x)\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-output"},"0\n1\n2\n3\n4\n")),"\n"),"\n"),"\n",a.createElement(n.p,null,"以下為兩個實用的語句："),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"break",a.createElement(n.br),"\n","跳出迴圈，亦即離開此段程式碼並繼續執行迴圈以下的部分。","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"for x in [0, 1, 2]:\n    print(x)\n    break\n    print('Hi')\nprint('end')\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-output"},"0\nend\n")),"\n"),"\n",a.createElement(n.li,null,"continue",a.createElement(n.br),"\n","結束此次迴圈的迭代，繼續執行下一次迭代。","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"for x in [0, 1, 2]:\n    print(x)\n    continue\n    print('Hi')\nprint('end')\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-output"},"0\n1\n2\nend\n")),"\n"),"\n"),"\n",a.createElement(n.h1,null,"數學"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"加法",a.createElement(n.br),"\n","兩個數字相加","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"5 + 2   # 7\n")),"\n"),"\n",a.createElement(n.li,null,"減法",a.createElement(n.br),"\n","左邊的數字減掉右邊的數字","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"5 - 2   # 3\n")),"\n"),"\n",a.createElement(n.li,null,"乘法",a.createElement(n.br),"\n","兩個數字相乘","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"5 * 2   # 10\n")),"\n"),"\n",a.createElement(n.li,null,"除法",a.createElement(n.br),"\n","左邊的數字除掉右邊的數字","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"5 / 2   # 2.5\n")),"\n","左邊的數字除掉右邊的數字的結果取整數，又稱為「整除法」","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"5 // 2  # 2\n")),"\n","取餘數","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"5 % 2   # 1\n")),"\n"),"\n",a.createElement(n.li,null,"指數",a.createElement(n.br),"\n","基數 (左邊的數字) 取指數 (右邊的數字) 次方，意即基數乘以自己指數次","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"5 ** 2  # 25\n")),"\n"),"\n"),"\n",a.createElement(n.h1,null,"註解"),"\n",a.createElement(n.p,null,"註解被用於闡述程式碼的功能使其更具易讀性，程式將不會編譯與執行它。"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"單行","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"# 我是註解\nx = 10  # 我也是註解\n")),"\n"),"\n",a.createElement(n.li,null,"多行",a.createElement(n.br),"\n","事實上這是一個可包含換行符「\\n」的字串。","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"'''\n第一行註解\n第二行註解\n'''\n")),"\n"),"\n"))}var c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?a.createElement(n,e,a.createElement(r,e)):r(e)},m=l(1883),u=l(8032),E=l(7706),s=l(2036),p=l(908),o=l(8197),i=l(2349),g=l(8554),d=l(4072),h=l(1950);const N=e=>{var n;let{data:r,location:c,children:i}=e;const N=r.site.siteMetadata.languages,{mdx:y}=r,f=(0,a.useRef)(null),{0:x,1:b}=(0,a.useState)(!0);return a.createElement(p.Z,{language:(0,s.G)(c.pathname,N).id},a.createElement(o.Z,{currentPath:c.pathname,contents:r.allMdx.nodes.map((e=>({title:e.frontmatter.title,depth:e.fields.depth,path:e.fields.path})))}),a.createElement("div",{ref:f,className:h.hi,onScroll:()=>b(0===f.current.scrollTop)},a.createElement("div",{className:h.nC},a.createElement("header",{className:h.fr},a.createElement("h1",null,y.frontmatter.title),a.createElement("h3",null,y.fields.date)),y.tableOfContents.items?a.createElement("ol",{className:h.Jt},a.createElement("span",null,(0,s.G)(c.pathname,N).headline),null===(n=y.tableOfContents.items)||void 0===n?void 0:n.map((e=>{let{title:n}=e;return a.createElement("li",{key:"Heading_"+n},a.createElement(m.Link,{to:"#"+(0,E.S)(n),className:h.p4},n))}))):a.createElement(a.Fragment,null),a.createElement("div",{className:h.Ig},a.createElement(t.Zo,{components:{a:e=>{let{href:n,children:l}=e;return a.createElement("a",{target:"_blank",href:n},l)},pre:e=>{let{children:n}=e;return a.createElement(g.Z,null,n)},h1:e=>{let{children:n}=e;return a.createElement(d.Z,null,n)}}},i))),a.createElement("button",{className:h.vc,disabled:x,onClick:()=>{(0,m.navigate)(c.pathname),f.current.scrollTo({top:0,behavior:"smooth"})}},a.createElement(u.S,{className:h.BH,src:"../../images/curvedArrow.png",alt:"scroll to top icon",title:"Scroll to top",loading:"eager",__imageData:l(7695)}))))};function y(e){return a.createElement(N,e,a.createElement(c,e))}const f=e=>{let{data:n,location:l}=e;return a.createElement(i.Z,{title:n.mdx.frontmatter.title,pathname:l.pathname})}}}]);
//# sourceMappingURL=component---src-templates-article-index-tsx-content-file-path-users-sninjo-desktop-github-blog-content-programming-design-beginner-basic-concept-zh-md-7c1656fb53b93b5235fe.js.map