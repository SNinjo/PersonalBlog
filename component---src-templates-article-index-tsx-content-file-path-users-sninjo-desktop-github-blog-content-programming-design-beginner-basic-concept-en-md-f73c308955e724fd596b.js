"use strict";(self.webpackChunkSNinjo_Blog=self.webpackChunkSNinjo_Blog||[]).push([[1066],{375:function(e,n,t){t.r(n),t.d(n,{Head:function(){return y},default:function(){return b}});var l=t(1151),a=t(7294);function r(e){const n=Object.assign({h1:"h1",p:"p",br:"br",pre:"pre",code:"code",ul:"ul",li:"li",a:"a",h2:"h2"},(0,l.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(n.h1,null,"Variable"),"\n",a.createElement(n.p,null,"Variable is a named storage space that can store a value. It created the moment we first assign a value to it. Before we use any variable, it need to be declared.",a.createElement(n.br),"\n",'For example, we declare "x" and assign 10 to a variable called "y".'),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"x        # declare x\ny = 10   # declare y and assign 10 to y\n")),"\n",a.createElement(n.p,null,"There are common variable type."),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"Boolean",a.createElement(n.br),"\n",'is only "True" or "False", usually used to the ',a.createElement(n.a,{href:"#Judgement"},"judgement"),".","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"x = True\ny = False\n")),"\n"),"\n",a.createElement(n.li,null,"Number",a.createElement(n.br),"\n",'is called numeric in Python, which includes "integer" and "floating-point number".',"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"x = 10   # integer\ny = 1.5  # float\n")),"\n"),"\n",a.createElement(n.li,null,"String",a.createElement(n.br),"\n","is the text. Following are the three types of string.","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"x = \"I'm string.\"\ny = 'I am string, too.'\nz = '''I am also string'''  # It can contain newline character \"\\n\".\n")),"\n"),"\n",a.createElement(n.li,null,"Object",a.createElement(n.br),"\n","has the attribute and method, which can be called by key, such as key-value pair.\nIn Python, we can define it with dictionary or curly braces.","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"x = dict(  id=1, name='sninjo'  )  # dictionary\ny = {  id: 2, name: 'jo'  }  # curly braces\nx['id']  # 1\ny[\"name\"] = 'alan'  # assign 'alan' to the attribute with key \"name\"\n")),"\n"),"\n",a.createElement(n.li,null,"Array",a.createElement(n.br),"\n","is a basic data structure used to store values ​​in contiguous storages. The index is used to pair the elements, starting from 0.\nWe define it with brackets.","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"x = [<object>, <object>, ...]\nx[<index>]\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},'x = [1, 2, 3]\nx[0]  # 1\nx[1]  # 2\nx[2] = 10  # assign 10 to the element with index "2"\n')),"\n"),"\n"),"\n",a.createElement(n.h1,null,"Function"),"\n",a.createElement(n.p,null,'Function is a block of code which only runs when it is called. In python, we define the block of code with indentation instead of curly braces, and "return" is used to leave it and send the result.',a.createElement(n.br),"\n","By the way, The parameter is the variable listed inside the parentheses in the function definition. The argument is the value that is sent to corresponding parameter in the function when it is called."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"def <name>(<parameter>, <parameter>, ...):\n    <action>                         # inside the function\n<name>(<argument>, <argument>, ...)  # call the function with arguments\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"def sum(x, y):\n    return x + y\nsum(1, 2)\n")),"\n",a.createElement(n.p,null,"There are common function."),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"print()",a.createElement(n.br),"\n","shows the string on the terminal.","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"print('Hello World')\nx = True\nprint(x)\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-output"},"Hello World\nTrue\n")),"\n"),"\n",a.createElement(n.li,null,"type()",a.createElement(n.br),"\n","returns the type of the object.","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"print(type('Hello World'))\nx = True\nprint(type(x))\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-output"},"<class 'str'>\n<class 'bool'>\n")),"\n"),"\n",a.createElement(n.li,null,"len()",a.createElement(n.br),"\n","returns the length of the object.","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"print(len('Hello World'))\nx = [1, 2, 3]\nprint(len(x))\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-output"},"11\n3\n")),"\n"),"\n",a.createElement(n.li,null,"abs()",a.createElement(n.br),"\n","returns the absolute value of the specified number.","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"print(abs(10))\nx = -5\nprint(abs(x))\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-output"},"10\n5\n")),"\n"),"\n",a.createElement(n.li,null,"range()",a.createElement(n.br),"\n",'returns a sequence of numbers, such as range(min, max, step), starting from "min", and increments by "step", and stops before "max".',"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"range(0, 5, 1)   # 0, 1, 2, 3, 4\nrange(9, 4, -2)  # 9, 7, 5\n")),"\n"),"\n"),"\n",a.createElement(n.h1,null,"Judgement"),"\n",a.createElement(n.p,null,'Judgement is also called "decision making". It\'s specifying actions taken according to the conditions. If the condition is "True", it\'ll execute the block of code and discard the rest of the judgment.'),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"if <condition>:\n    <action>\nelif <condition>:\n    <action>\nelif <condition>:\n    <action>\n...\nelse:\n    <action>\n")),"\n",a.createElement(n.p,null,"There are simple example."),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"if","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"if True:\n    print('if')\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-output"},"if\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"if False:\n    print('if')\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-output"})),"\n"),"\n",a.createElement(n.li,null,"if-else","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"if True:\n    print('if')\nelse:\n    print('else')\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-output"},"if\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"if False:\n    print('if')\nelse:\n    print('else')\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-output"},"else\n")),"\n"),"\n",a.createElement(n.li,null,"if-elif-else","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"if True:\n    print('if')\nelif True:\n    print('elif')\nelse:\n    print('else')\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-output"},"if\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"if False:\n    print('if')\nelif True:\n    print('elif')\nelse:\n    print('else')\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-output"},"elif\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"if False:\n    print('if')\nelif False:\n    print('elif')\nelse:\n    print('else')\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-output"},"else\n")),"\n"),"\n"),"\n",a.createElement(n.p,null,"Following are common operator used to conditions."),"\n",a.createElement(n.h2,null,"Boolean Operator"),"\n",a.createElement(n.p,null,'Boolean operator is also called "logical operator". They are used to handle multiple conditions.'),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"not",a.createElement(n.br),"\n","inverts the boolean value.","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"print(not True)\nprint(not False)\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-output"},"False\nTrue\n")),"\n"),"\n",a.createElement(n.li,null,"or",a.createElement(n.br),"\n",'returns "True" in any one of the operand is "True".',"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"print(True or False)\nprint(False or False)\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-output"},"True\nFalse\n")),"\n"),"\n",a.createElement(n.li,null,"and",a.createElement(n.br),"\n",'returns "True" if both the operands are "True".',"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"print(True or True)\nprint(True or False)\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-output"},"True\nFalse\n")),"\n"),"\n"),"\n",a.createElement(n.h2,null,"Comparison Operator"),"\n",a.createElement(n.p,null,"Comparison operator compares two values and returns a boolean value."),"\n",a.createElement(n.p,null,"There are six types of comparison operator."),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,'Equal to "=="',"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"print(1 == 1)\nprint('sninjo' == 'jo')\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-output"},"True\nFalse\n")),"\n"),"\n",a.createElement(n.li,null,'Not equal to "!="',"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"print(1 != 1)\nprint('sninjo' != 'jo')\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-output"},"False\nTrue\n")),"\n"),"\n",a.createElement(n.li,null,'Less then "<"',"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"print(1 < 1)\nprint(1 < 5)\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-output"},"False\nTrue\n")),"\n"),"\n",a.createElement(n.li,null,'More then ">"',"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"print(1 > 1)\nprint(1 > -1)\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-output"},"False\nTrue\n")),"\n"),"\n",a.createElement(n.li,null,'Less than or equal to "<="',"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"print(1 <= 1)\nprint(1 <= -1)\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-output"},"True\nFalse\n")),"\n"),"\n",a.createElement(n.li,null,'More than or equal to ">="',"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"print(1 >= 1)\nprint(1 >= 5)\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-output"},"True\nFalse\n")),"\n"),"\n"),"\n",a.createElement(n.h1,null,"Loop"),"\n",a.createElement(n.p,null,'Loop is used to repeat a block of code. In Python, we use indentation instead of curly braces to define the block of code. Furthermore, This is known as iteration, which allows us to "write code once" and "execute many times."'),"\n",a.createElement(n.p,null,"There are two types of loop."),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"while","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"while <condition>:\n    <action>\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"x = True\nwhile (x):\n    print('while')\n    x = False\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-output"},"while\n")),"\n"),"\n",a.createElement(n.li,null,"for",a.createElement(n.br),"\n","Array and range() are the iterable object. In for loop, each action can get one element from the iterable object in order.","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"for <object> in <iterable object>:\n    <action>\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"for x in [0, 1, 2]:\n    print(x)\nfor x in range(3, 5, 1):\n    print(x)\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-output"},"0\n1\n2\n3\n4\n")),"\n"),"\n"),"\n",a.createElement(n.p,null,"There are two useful statement."),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"break",a.createElement(n.br),"\n","exits the loop, which means leaving the block of code.","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"for x in [0, 1, 2]:\n    print(x)\n    break\n    print('Hi')\nprint('end')\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-output"},"0\nend\n")),"\n"),"\n",a.createElement(n.li,null,"continue",a.createElement(n.br),"\n","ends the current iteration in a loop, and continues to the next iteration.","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"for x in [0, 1, 2]:\n    print(x)\n    continue\n    print('Hi')\nprint('end')\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-output"},"0\n1\n2\nend\n")),"\n"),"\n"),"\n",a.createElement(n.h1,null,"Math"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"Addition",a.createElement(n.br),"\n","add two numbers together","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"5 + 2   # 7\n")),"\n"),"\n",a.createElement(n.li,null,"Subtraction",a.createElement(n.br),"\n","subtract the right number from the left","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"5 - 2   # 3\n")),"\n"),"\n",a.createElement(n.li,null,"Multiplication",a.createElement(n.br),"\n","multiply two numbers together","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"5 * 2   # 10\n")),"\n"),"\n",a.createElement(n.li,null,"Division",a.createElement(n.br),"\n","divide the left number by the right","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"5 / 2   # 2.5\n")),"\n",'divide the first argument by the second and round the result down to the nearest whole number, called "integer division"',"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"5 // 2  # 2\n")),"\n","get the remainder of a division operation","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"5 % 2   # 1\n")),"\n"),"\n",a.createElement(n.li,null,"Exponent",a.createElement(n.br),"\n","raise a base number to the exponent power, that is, the base number multiplied by itself, exponent times.","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"5 ** 2  # 25\n")),"\n"),"\n"),"\n",a.createElement(n.h1,null,"Comment"),"\n",a.createElement(n.p,null,"Comment can be used to explain code and make it more readable. The program doesn't compile and execute them."),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"Single-line","\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"# I'm a comment.\nx = 10  # I'm also a comment.\n")),"\n"),"\n",a.createElement(n.li,null,"Multi-line",a.createElement(n.br),"\n",'In fact, this is a string, which can contain newline character "\\n".',"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-python"},"'''\nfirst line comment\nsecond line comment\n'''\n")),"\n"),"\n"))}var c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?a.createElement(n,e,a.createElement(r,e)):r(e)},o=t(1883),m=t(8032),u=t(7706),i=t(2036),s=t(908),p=t(8197),E=t(2349),d=t(8554),g=t(4072),h=t(1950);const f=e=>{var n;let{data:r,location:c,children:E}=e;const f=r.site.siteMetadata.languages,{mdx:b}=r,y=(0,a.useRef)(null),{0:N,1:x}=(0,a.useState)(!0);return a.createElement(s.Z,{language:(0,i.G)(c.pathname,f).id},a.createElement(p.Z,{currentPath:c.pathname,contents:r.allMdx.nodes.map((e=>({title:e.frontmatter.title,depth:e.fields.depth,path:e.fields.path})))}),a.createElement("div",{ref:y,className:h.hi,onScroll:()=>x(0===y.current.scrollTop)},a.createElement("div",{className:h.nC},a.createElement("header",{className:h.fr},a.createElement("h1",null,b.frontmatter.title),a.createElement("h3",null,b.fields.date)),b.tableOfContents.items?a.createElement("ol",{className:h.Jt},a.createElement("span",null,(0,i.G)(c.pathname,f).headline),null===(n=b.tableOfContents.items)||void 0===n?void 0:n.map((e=>{let{title:n}=e;return a.createElement("li",{key:"Heading_"+n},a.createElement(o.Link,{to:"#"+(0,u.S)(n),className:h.p4},n))}))):a.createElement(a.Fragment,null),a.createElement("div",{className:h.Ig},a.createElement(l.Zo,{components:{a:e=>{let{href:n,children:t}=e;return a.createElement("a",{target:"_blank",href:n},t)},pre:e=>{let{children:n}=e;return a.createElement(d.Z,null,n)},h1:e=>{let{children:n}=e;return a.createElement(g.Z,null,n)}}},E))),a.createElement("button",{className:h.vc,disabled:N,onClick:()=>{(0,o.navigate)(c.pathname),y.current.scrollTo({top:0,behavior:"smooth"})}},a.createElement(m.S,{className:h.BH,src:"../../images/curvedArrow.png",alt:"scroll to top icon",title:"Scroll to top",loading:"eager",__imageData:t(7695)}))))};function b(e){return a.createElement(f,e,a.createElement(c,e))}const y=e=>{let{data:n,location:t}=e;return a.createElement(E.Z,{title:n.mdx.frontmatter.title,pathname:t.pathname})}}}]);
//# sourceMappingURL=component---src-templates-article-index-tsx-content-file-path-users-sninjo-desktop-github-blog-content-programming-design-beginner-basic-concept-en-md-f73c308955e724fd596b.js.map