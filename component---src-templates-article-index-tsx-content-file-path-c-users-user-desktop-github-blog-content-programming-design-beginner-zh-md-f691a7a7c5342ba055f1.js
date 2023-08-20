"use strict";(self.webpackChunkSNinjo_Blog=self.webpackChunkSNinjo_Blog||[]).push([[210],{8504:function(e,n,a){a.r(n),a.d(n,{Head:function(){return u},default:function(){return y}});var t=a(1151),l=a(7294);function s(e){const n=Object.assign({p:"p",h1:"h1",ol:"ol",li:"li",a:"a",span:"span"},(0,t.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.p,null,"在開始之前，讓我們先來完成一些必要的配置。此外，這個章節將以 Python 作為示範的程式語言。"),"\n",l.createElement(n.h1,null,"安裝 Python"),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"開啟 ",l.createElement(n.a,{href:"https://www.python.org/downloads/"},"Python 下載頁面")," 並安裝最新版本\r\n",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 800px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 47%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAA7DAAAOwwHHb6hkAAACWklEQVR42lWMS1NSARiGz8+oJCW5hQ4qkAe8VipoztgoIAe5HhHFu2bJkaEDIipY6YzN2KLGFmmXyTZNCzXbtKp0UzP9n6eB2rR45vnmfb95BY21B63YT429h2pbN7ViLzqxl2vNLgwOF8YWN3qHi1rRhcbupvqGixpbF9VNXVRbu9E03EJ3w4XR0Vex0B6e5u7EFK3SErcj99H1yFzuCKK5GeZKR6hCVWeYS20hltJR7nj7ic1leHX0kRev3/PyzQc6w8tctXahbXYjNI4oOCa2aIiWsMplF2mMlagPFyuZJfr3bpJLtE5sYgnmaJY3aJvcRRzfo3lsG61nHbM/g9mzjKAfUjBJq5hGclgieerCeZxjazhHc7Ql8nQkVnGMZrFGC9iiBRKFPbpnSsSXF8huetl6/pjd/Qc4k0/RDSkI+oF5tH2zLMxG2c2OsJ0JEErEsA9P4pSStASSdISSVLnnWMmn+LQ/zqSSJrJ4D1Wxs78zwO9TN+7kFlWuJILJq6AfVIhOLZJW5lHTMwzEl9F7c1ikDBa/Qu3gCgZPGkdgEbsviRhbxRbOYg09xCYt4ByZxuxTMHoUhDopi1nKIsbXaJ9Yxx7fwCZvIMrriHKB1tEMDUEVs6Ri8K/hDCzSNDiNJVbElyrSO7+DXS5x3a9S3hJ0vixlLEEVa1jF5M9h9Ocw/LPJr2IYVtH5VHTDOexSCtE3SySZoFNOYR19RH1wFZ1XrewI784uODw556DM8TmHJz/+o5yX+8PTsr9zcPaTo5OvHG0O8ezJCgdffnFw/K3y8/bzBX8AHC+AeFg+J84AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Python 下載頁面"\n        title=""\n        src="/static/f1bf9e8b9e4d671a7362a2ba8ed63bf8/5a190/pythonDownloadPage.png"\n        srcset="/static/f1bf9e8b9e4d671a7362a2ba8ed63bf8/772e8/pythonDownloadPage.png 200w,\n/static/f1bf9e8b9e4d671a7362a2ba8ed63bf8/e17e5/pythonDownloadPage.png 400w,\n/static/f1bf9e8b9e4d671a7362a2ba8ed63bf8/5a190/pythonDownloadPage.png 800w,\n/static/f1bf9e8b9e4d671a7362a2ba8ed63bf8/c1b63/pythonDownloadPage.png 1200w,\n/static/f1bf9e8b9e4d671a7362a2ba8ed63bf8/a4f81/pythonDownloadPage.png 1508w"\n        sizes="(max-width: 800px) 100vw, 800px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}})),"\n",l.createElement(n.li,null,"勾選下方所有的選項並點擊「Install Now」, PATH 是讓 CLI 能認得這個程式語言相關配置的環境變數\r\n",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 648px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/0b272f75d722fa09d7e9a1200b1afb72/3996e/pythonInstallWindow.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 61.5%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAA7DAAAOwwHHb6hkAAACWUlEQVR42nWTyY7TQBRF/Xf8BEvY8gX8ARJC4jsQggWghgU0EOhuoBnSGR3PQ5KOp6py27HjOigmQLPgSUe3VCo9Vb261xgtHMamw9TycT0P3/NI04ymaaiqirque/br31zfU0pRlmVPURQY78cx78ZLHg+m+GGMKHLyLMNzXTzHxXXsnjRNSbOMy/Ua3/cxTZMkSfhTWvdiPDud82Qw4WS4IE025HnOJk2ZWhYzx8V0XBZ7XVhYtoPr+di2g+16hHFMIWV/vvndcJOkyCJHyQKRFwipKFcritkMuTARsyliOCQ7OyUZDMhOPtIOhzAZ003GtNMJzWxGu1jQJQlGXZXMg4Sb9454evwFTUvy4R3B5zPMoYd94ZLFCVVZUzcd1XZHWbXIqwYpa0pR0pUl3WbD9uQEY5MJbj14wp37Dzk7us2uGCB/zKk0LDWsOlg2sNrCuoZlDbIDpUFquPo7RZrJBOMykRyfHYNzA+y75EVEdf6VYjTDuXAIRzbR2CE44I8cGj+AKESHQc8uCGg9j+35OYYQkiuZsrFe9D+YKU29t40fsA1Caj/stTqojiN2YUh7jV0U9U07ITD2PiqEYrkuyNYjtsUF20awacBTGleCr2Cea+LD+zT/LyPLMvJC0YpPaPkKXb4FfflrJjtNs4O245fu+Md3uuvQe7tcw7AsG2thEs4f0Yjn6Polmf2Z1AlRpUIK0RtdKYmSkjzL+0Q0bXvoq3u6Q3MjSVKi0CcwnyHWRzRXr8m/vcH5PiaII8IwxPM8ojjuo1aqso9be+26+xiuVqtefwLHlYOwHpvRZQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Python 安裝視窗"\n        title=""\n        src="/static/0b272f75d722fa09d7e9a1200b1afb72/3996e/pythonInstallWindow.png"\n        srcset="/static/0b272f75d722fa09d7e9a1200b1afb72/772e8/pythonInstallWindow.png 200w,\n/static/0b272f75d722fa09d7e9a1200b1afb72/e17e5/pythonInstallWindow.png 400w,\n/static/0b272f75d722fa09d7e9a1200b1afb72/3996e/pythonInstallWindow.png 648w"\n        sizes="(max-width: 648px) 100vw, 648px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}})),"\n",l.createElement(n.li,null,"鍵盤點擊 win + R 開啟「執行」視窗後輸入「cmd」以開啟 Windows 的 CLI\r\n",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 396px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/b5d9dba34b1b60af468e2d415eb018f3/db910/openCMD.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 51%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAA7DAAAOwwHHb6hkAAABmUlEQVR42mWS627TQBCF/bw8HOIF+AUFpNKG9kdcp9AEJY5vsffmy94P2jVuXNXSp7NzZme8Hm+S1Qz36TP+PO/AhQClFIyxdwR/zTrHOUfXdTgej0iU0nBKQkkJ5xy897DWxnXAGPPqXx8f48CSDzVKKSSD8dj1Dsp5FPkJL/u/aJomvi3P83jq8/mMXZYhTZ+Qpimesh0O+xfsDwdQxlAWJeq6hnUOyam3+LifMGiHx80dvt98wY9vX1GWJcahh1YyKiVdpL1c0HUtRPxcCq0Vhl6gFwI+NDRGwygVA2UssmrEmUpMxmM0wKBnnexbgjfaaz6osh5JU1f49fCIsiggLfDhU4nPv4c4qUE5SDMzLehZFy9oaMQnDToaJPNA56Fa5yGkjfTqLYv/mpfvPW0dkuW3RxhDL+Y1Y1cNCD4TZhX2xFisPQHOGRJKCMiKMPjThaPmEjc/H3AoWuRkAhNDLNhut+CiR98Psclmc4/b27sYhwMk4UIul5X816alqFqGU1GjvBCU7SrXNCBkueAkxlVVzfWE4B+HWPvdulnlWgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="開啟 CMD"\n        title=""\n        src="/static/b5d9dba34b1b60af468e2d415eb018f3/db910/openCMD.png"\n        srcset="/static/b5d9dba34b1b60af468e2d415eb018f3/772e8/openCMD.png 200w,\n/static/b5d9dba34b1b60af468e2d415eb018f3/db910/openCMD.png 396w"\n        sizes="(max-width: 396px) 100vw, 396px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}})),"\n",l.createElement(n.li,null,"輸入「python」確認 Python 是否成功下載\r\n",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 800px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/ee0f4771e237331cf938ec1a36252f2c/4ef49/checkPythonInCMD.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 21.5%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAArUlEQVR42o2POw/DIAyEGZMlT/KAEEjARFGzZGj//0+7ypbaoVOHT/ZJ5+NQwXvEGEEpYd93GGMQQsB1XTjPE0SElNLfKBcCYs6IRMg5S5hzTsK995imCX3fQ2uNoii+lGUp/Gr1TAmv48BNJK2WZcEwDFjXFeM4CtZaCebJP5jnWTT7Ppp9/LC6Y8TDGGStpREHsnnbNpmsGT7k5uxhuq5DXddo2xZN08heVRXeFwZoo2yq9GYAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="check Python in CMD"\n        title=""\n        src="/static/ee0f4771e237331cf938ec1a36252f2c/5a190/checkPythonInCMD.png"\n        srcset="/static/ee0f4771e237331cf938ec1a36252f2c/772e8/checkPythonInCMD.png 200w,\n/static/ee0f4771e237331cf938ec1a36252f2c/e17e5/checkPythonInCMD.png 400w,\n/static/ee0f4771e237331cf938ec1a36252f2c/5a190/checkPythonInCMD.png 800w,\n/static/ee0f4771e237331cf938ec1a36252f2c/4ef49/checkPythonInCMD.png 890w"\n        sizes="(max-width: 800px) 100vw, 800px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}})),"\n"),"\n",l.createElement(n.h1,null,"選擇 IDE"),"\n",l.createElement(n.p,null,"整合開發環境 (Integrated Development Environment，簡稱 IDE) 是一個附帶編譯器、除錯器與許多套件的文字編輯器。有了它的幫助，我們可以方便且快速地開發各式各樣的系統。"),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Online Console\r\n如果你不想安裝任何的軟體在電腦上，那就可以選擇 Python 官方網站上提供的 ",l.createElement(n.a,{href:"https://www.python.org/"},"Online Console"),"。\r\n",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 800px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 43.99999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAA7DAAAOwwHHb6hkAAACNUlEQVR42l3GW0/aAACG4f6FXcxNbUGKLVAOpS0FFDl4QEEzgVG0Ip4NCtmyOXXzDHPTZPFiMdvd/K/vMpbsYhfP936CpE/jjecY1tLIRh7VnsFv5gnYWcLpPFoqh2pnGbNyjOgFfFaeITXFCzXNcyXFkGITMHJoqXkUo4CwuH9IstalsH6EVt5leHKF0SmXkSmX4Yw7+M/TLubSGu13TSLZRY77D3x9/DVw8uU7gfI+XqOAJ7mIsNA5x2x9xt7sE3UvCTpn/4RXzlHrZyi1T6Q2PrJ2fIJZ67J1+YPu3ROduye2rn4Srp8SmN9hfG4bIdB6IOhcEFu9QnevsTd7mOs3GOs3JDf7TGxck9q9w977RnTjnkznAWX1FrnRR270UN1btNY90b1Hgqs9BF9xDylsIcUiSOEYkqLjUXU8AZ1nYxFOahaZfJFIaY3c6yaTlSZasUWouIE2v8n4dBMxs4Jv4QBfqYPgX3yDGEsixeKIyThS3MATtvCELDxaAlkz8NoljOU2iUobq9LGrh5gLh+SWN7BWGoh5dcZf/V+QPgzop5C1OOICQMxbiBFTKSghRSyEAMGUqJEcM4lNNsgOFNHzjmMTDiIGQdx0kHKt1CqpwOCWj1hLJpENnT8MRMlbKPGkqixv1XCJqPxWV6mHYYnGnjn9vHM7OCb20PKNRlJ1QYNOBcDQrBxhZx3kTMOcraBP/efbB15dhu53MVf7qJWj1GWj1AqH/AvvcW3cDhoaLU38Bt87EIsssPHCAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Python online console"\n        title=""\n        src="/static/58a6efce062eb6ceaf80438209c2090d/5a190/pythonOnlineConsole01.png"\n        srcset="/static/58a6efce062eb6ceaf80438209c2090d/772e8/pythonOnlineConsole01.png 200w,\n/static/58a6efce062eb6ceaf80438209c2090d/e17e5/pythonOnlineConsole01.png 400w,\n/static/58a6efce062eb6ceaf80438209c2090d/5a190/pythonOnlineConsole01.png 800w,\n/static/58a6efce062eb6ceaf80438209c2090d/c1b63/pythonOnlineConsole01.png 1200w,\n/static/58a6efce062eb6ceaf80438209c2090d/0f586/pythonOnlineConsole01.png 1498w"\n        sizes="(max-width: 800px) 100vw, 800px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\r\n然而它所提供的功能非常的簡易，若是想開發有點規模的系統則不建議使用。\r\n",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 800px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 43.99999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAA7DAAAOwwHHb6hkAAACD0lEQVR42oXP60+SARSA8bfNOZX7CwiCCAov93nhIuELcpFQrJZpIoGX0NLQpq6cNi5Oo9yaH6qtrbU2W3/p08St1ofqw2/n+XLOdoQBv4wjnMMajGMbTSBFsrjCGaRwCl8sRSCexjM5jTMyjWUsjT2cxuKPY5Ri9EsxDM4IrrEkgVgeVyiDkHmyS251h0TpkNjSLo50hQG5iDVRwiLfGJBL2JIltg/KxOcKVGrHXH75zrtP33j78SuhxRcMhWawR2cRktUjprbOGV19w1jlDG+xiW+lhWe5iX+lha/Y7HSg1GLpVRN5/Yh7+5dsX/xgs33FVvuK8fIp7sJz3HNPEVzL5wQrbSKPT5DXGkytNUiu14mVXzO90UBeu+4TEut1vA9eElw4wD1fw57bwpF/xlC2SrRcZ7L2GXfxFMFR2COYWmDCJzHisOMcHsJkEDEb9RhELWajodOmfgNWswGVoqdDo+xFp1bSJQhks1lS1RaWzCaC9PCYwUgBjUqBSq1BqVSh1mg6NNdT/SetVodWp+tMUa+nu7ubbL5AZucC2+wegudRncHoXTRqJTpRRKcTbxb+Rvu7Rb3h18Fs7T32+UMEb+kMW3QeVU8XaqUCtbLv/xS9qPp6Ol/dEgRmcnfI73/Acf8IwV9uMzKzgUmawOyNYvZE/snkDmMN3MYZSiNFMgyPJ8ksVpG3L3EtNfgJOyAjxU2P9MoAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Python online console print &quot;Hello World&quot;"\n        title=""\n        src="/static/b5e92ab1246592cae2f04af3ca669f7b/5a190/pythonOnlineConsole02.png"\n        srcset="/static/b5e92ab1246592cae2f04af3ca669f7b/772e8/pythonOnlineConsole02.png 200w,\n/static/b5e92ab1246592cae2f04af3ca669f7b/e17e5/pythonOnlineConsole02.png 400w,\n/static/b5e92ab1246592cae2f04af3ca669f7b/5a190/pythonOnlineConsole02.png 800w,\n/static/b5e92ab1246592cae2f04af3ca669f7b/c1b63/pythonOnlineConsole02.png 1200w,\n/static/b5e92ab1246592cae2f04af3ca669f7b/891d5/pythonOnlineConsole02.png 1520w"\n        sizes="(max-width: 800px) 100vw, 800px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}})),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"IDLE\r\nIDLE (Integrated Development and Learning Environment) 是 Python 內建附帶的 IDE，相較於 Online Console 提供較多的功能且不會延遲。\r\n",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 800px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/42a8870f70aa4c4392587c3cff09daea/f0551/pythonIDLE.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 21%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAA7DAAAOwwHHb6hkAAABBUlEQVR42mWMTUvCcACH/zMzggo6SXSaU1dzonaom+5Fna1LBB4qTc1DQYc+QNE36OtVLHrZClI3pT7BEwoR1OHh4fkdfuLB87i79/Aen3j2A178AD9459V/42MwYvL5xSiaMAzHhONf/zCadjRhMAwJozEiW21jHF9S3OuTd3oUd09R7TaKcYhabVNw+6h2C8U4Qne6ZO0WuXoHrd4h53TZrJ2gN3qs7Rxwfn2LWNUc1vNNlrcaJEoW8yWTRb2GkA0kxURKGQi5jKQYzGWsmWNpk5hiEktbJNTqbBMrBfbPrhDJgsuS5rKg1Ylv2AiljEhVENOjv8iV/y1XiGdsRHKb5sUN3966qLll8PZuAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Python IDLE"\n        title=""\n        src="/static/42a8870f70aa4c4392587c3cff09daea/5a190/pythonIDLE.png"\n        srcset="/static/42a8870f70aa4c4392587c3cff09daea/772e8/pythonIDLE.png 200w,\n/static/42a8870f70aa4c4392587c3cff09daea/e17e5/pythonIDLE.png 400w,\n/static/42a8870f70aa4c4392587c3cff09daea/5a190/pythonIDLE.png 800w,\n/static/42a8870f70aa4c4392587c3cff09daea/f0551/pythonIDLE.png 862w"\n        sizes="(max-width: 800px) 100vw, 800px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}})),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,l.createElement(n.a,{href:"https://code.visualstudio.com/download"},"VSCode"),"\r\nVSCode (Visual Studio Code) 具有輕量、易上手且擴展性高的特性，目前 VSCode 是最普及的 IDE。\r\n",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 800px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 52%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAA7DAAAOwwHHb6hkAAABcUlEQVR42oWR3W6jMBCFeYsmKsYY//CjkIAN2EBbKeplb/r+L3MqDwlNVrvai08+MDNnxp7k4/qJOcyYpgmXy4Xo+x5h9liXFcMwwjqHYRzhnEPbtg+cMQwDrLVbnrVIgg9YlhXX6yecm9B1DudzjzzPUVUGp6bEqS7R1AZFUSDLsh3GMqRpCsYY6RhPYof17R0hzDidWlRVQ2QZpyJ+N6Ai9mT4zBZLxnEko7IsURQSSmkopW4TsL/yrxgZeu8hpSIjrQ0RNeecoCl5Tjo+w+NUQgj6t8HpNmR4N3o0jE2klETd1NBak47FcZrYwBiz50R4niPpun43uRtKpdF2FnFhcbPOdWjbmCNQVRU9fjT9XQgDi5rnSKx1MLqEVmZj1xp1Vd9oUBTidm0BTgvjdP5JMvgBQhcQWtwoIJTAkR1xeH3BId04pof/w45IvpZvzOYDXr4/4XiA5X47s4AhD5jUCq9XTHLZdTBvmNT2PcoFP1qPIM4rx/hxAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="VSCode"\n        title=""\n        src="/static/d07dd53a985625582f4609cd9c6a4e18/5a190/VSCode.png"\n        srcset="/static/d07dd53a985625582f4609cd9c6a4e18/772e8/VSCode.png 200w,\n/static/d07dd53a985625582f4609cd9c6a4e18/e17e5/VSCode.png 400w,\n/static/d07dd53a985625582f4609cd9c6a4e18/5a190/VSCode.png 800w,\n/static/d07dd53a985625582f4609cd9c6a4e18/c1b63/VSCode.png 1200w,\n/static/d07dd53a985625582f4609cd9c6a4e18/a83dd/VSCode.png 1482w"\n        sizes="(max-width: 800px) 100vw, 800px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}})),"\n"),"\n"))}var i=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?l.createElement(n,e,l.createElement(s,e)):s(e)},o=a(1883),c=a(8032),r=a(7392),p=a(2036),g=a(908),d=a(8197),A=a(2349),m=a(8554),b=a(4072),h=a(1950);const f=e=>{var n;let{data:s,location:i,children:A}=e;const f=s.site.siteMetadata.languages,{mdx:y}=s,u=(0,l.useRef)(null),{0:w,1:E}=(0,l.useState)(!1);return l.createElement(g.Z,{language:(0,p.G)(i.pathname,f).id},l.createElement("div",{className:h.hi},l.createElement(d.Z,{currentPath:i.pathname,contents:s.allMdx.nodes.map((e=>({title:e.frontmatter.title,depth:e.fields.depth,path:e.fields.path})))}),l.createElement("section",{ref:u,className:h.DH,onScroll:()=>E(0===u.current.scrollTop)},l.createElement("div",{className:h.nC},l.createElement("header",{className:h.fr},l.createElement("h1",null,y.frontmatter.title),l.createElement("h3",null,y.fields.date)),y.tableOfContents.items?l.createElement("ol",{className:h.Jt},l.createElement("span",null,(0,p.G)(i.pathname,f).headline),null===(n=y.tableOfContents.items)||void 0===n?void 0:n.map((e=>{let{title:n}=e;return l.createElement("li",{key:"Heading_"+n},l.createElement(o.Link,{to:"#"+(0,r.S)(n),className:h.p4},n))}))):l.createElement(l.Fragment,null),l.createElement("div",{className:h.Ig},l.createElement(t.Zo,{components:{pre:e=>{let{children:n}=e;return l.createElement(m.Z,null,n)},h1:e=>{let{children:n}=e;return l.createElement(b.Z,null,n)}}},A))),l.createElement("button",{className:h.vc,disabled:w,onClick:()=>{(0,o.navigate)(i.pathname),u.current.scrollTo({top:0,behavior:"smooth"})}},l.createElement(c.S,{className:h.BH,src:"../../images/curvedArrow.png",alt:"scroll to top icon",title:"Scroll to top",loading:"eager",__imageData:a(5097)})))))};function y(e){return l.createElement(f,e,l.createElement(i,e))}const u=e=>{let{data:n,location:a}=e;return l.createElement(A.Z,{title:n.mdx.frontmatter.title,pathname:a.pathname})}}}]);
//# sourceMappingURL=component---src-templates-article-index-tsx-content-file-path-c-users-user-desktop-github-blog-content-programming-design-beginner-zh-md-f691a7a7c5342ba055f1.js.map