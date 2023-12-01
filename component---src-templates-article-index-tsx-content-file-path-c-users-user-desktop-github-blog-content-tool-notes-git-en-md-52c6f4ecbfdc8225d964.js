"use strict";(self.webpackChunkSNinjo_Blog=self.webpackChunkSNinjo_Blog||[]).push([[828],{5708:function(e,l,n){n.r(l),n.d(l,{Head:function(){return N},default:function(){return b}});var t=n(1151),a=n(7294);function r(e){const l=Object.assign({p:"p",br:"br",a:"a",h1:"h1",ul:"ul",li:"li",pre:"pre",code:"code",ol:"ol"},(0,t.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(l.p,null,"Git is a distributed version control system that tracks changes in any set of computer files, usually used for coordinating work among programmers who are collaboratively developing source code during software development.",a.createElement(l.br),"\n",a.createElement(l.a,{href:"https://git-scm.com/about"},"View more information")),"\n",a.createElement(l.h1,null,"Normal"),"\n",a.createElement(l.ul,null,"\n",a.createElement(l.li,null,"initialize (build .git directory)","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"git init\n")),"\n"),"\n",a.createElement(l.li,null,"clone repository","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"git clone <repository URL>\n")),"\n","shallow clone with last one commit and specified branch","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"git clone --depth 1 -b <branch> <repository URL>\n")),"\n"),"\n",a.createElement(l.li,null,"push local repository to remote repository","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"git push\n")),"\n"),"\n",a.createElement(l.li,null,"pull remote repository to local repository","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"git pull\n")),"\n"),"\n",a.createElement(l.li,null,"displays the state of the working directory and the staging area","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"git status\n")),"\n"),"\n",a.createElement(l.li,null,"view the changes on this branch","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"git diff <file path>\n")),"\n"),"\n"),"\n",a.createElement(l.h1,null,"Commit"),"\n",a.createElement(l.ul,null,"\n",a.createElement(l.li,null,"add files to index","\n",a.createElement(l.ul,null,"\n",a.createElement(l.li,null,"single file","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"git add <file path>\n")),"\n"),"\n",a.createElement(l.li,null,"all files","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"git add .\n")),"\n"),"\n"),"\n"),"\n",a.createElement(l.li,null,"commit indexed files to local repository","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},'git commit -m "<message>"\n')),"\n","Before committing, it adds all files to index.","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},'git commit -a -m "<message>"\n')),"\n"),"\n",a.createElement(l.li,null,"show commit history","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"git log\n")),"\n"),"\n",a.createElement(l.li,null,"show full commit history (reference logs)","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"git reflog\n")),"\n"),"\n",a.createElement(l.li,null,"revert the commit, creating a new commit","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"git revert <commit hash>\n")),"\n"),"\n",a.createElement(l.li,null,"modify the commit message",a.createElement(l.br),"\n","previous commit -> target commit",a.createElement(l.br),"\n",'There are two commits, and we rename "target commit".',"\n",a.createElement(l.ol,null,"\n",a.createElement(l.li,null,"enter terminal and open the rebase of the previous commit","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"git rebase -i <previous commit hash>\n")),"\n"),"\n",a.createElement(l.li,null,'rewrite "pick" in the first line to "reword"',"\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"reword <target commit hash> the old commit message\r\n\r\n# Rebase ...\n")),"\n"),"\n",a.createElement(l.li,null,"fill in the new commit name","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"the new commit message\r\n\r\n# Please enter the commit message for your changes. Lines starting\r\n# with '#' will be ignored, and an empty message aborts the commit.\r\n...\n")),"\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-output"},"Successfully rebased and updated refs/heads/<branch name>.\n")),"\n"),"\n",a.createElement(l.li,null,"safely overwrite remote branch with this one, and it only overwrite the changes","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"git push --force-with-lease\n")),"\n"),"\n"),"\n"),"\n",a.createElement(l.li,null,"merge commits into one",a.createElement(l.br),"\n","first commit -> second commit -> third commit",a.createElement(l.br),"\n",'There are three commits, and we merge "second commit" and "third commit" into one.',"\n",a.createElement(l.ol,null,"\n",a.createElement(l.li,null,"enter terminal and open the rebase of the first commit","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"git rebase -i <first commit hash>\n")),"\n"),"\n",a.createElement(l.li,null,'rewrite "pick" to "fixup" except for the first line',"\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"pick <second commit hash> second commit\r\nfixup <third commit hash> third commit\r\n\r\n# Rebase ...\n")),"\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-output"},"Successfully rebased and updated refs/heads/<branch name>.\n")),"\n"),"\n",a.createElement(l.li,null,"safely overwrite remote branch with this one, and it only overwrite the changes","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"git push --force-with-lease\n")),"\n"),"\n"),"\n"),"\n",a.createElement(l.li,null,"reset HEAD to a commit","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"git reset --hard <commit hash>\n")),"\n"),"\n",a.createElement(l.li,null,"force overwrite this branch with the specified branch","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"git reset --hard <branch>\n")),"\n",'For example, it overwrites "master" with "develop".',"\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"git checkout master\r\ngit reset --hard develop\n")),"\n"),"\n"),"\n",a.createElement(l.h1,null,"Branch"),"\n",a.createElement(l.ul,null,"\n",a.createElement(l.li,null,"list all branches","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"git branch\n")),"\n","including remote branches","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"git branch -a\n")),"\n"),"\n",a.createElement(l.li,null,"create the branch","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"git branch <branch name>\n")),"\n"),"\n",a.createElement(l.li,null,"switch the branch","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"git checkout <branch name>\n")),"\n","Before switching, it creates the branch.","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"git checkout -b <branch name>\n")),"\n"),"\n",a.createElement(l.li,null,"remove the branch","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"git branch -d <branch name>\n")),"\n"),"\n",a.createElement(l.li,null,"remove the remote branch","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"git push <remote> --delete <branch>\n")),"\n"),"\n",a.createElement(l.li,null,"merge specified branch into this branch","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"git merge <branch name>\n")),"\n",'For example, it merges "develop" into "master".',"\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"git checkout master\r\ngit merge develop\n")),"\n"),"\n"),"\n",a.createElement(l.h1,null,"Stash"),"\n",a.createElement(l.ul,null,"\n",a.createElement(l.li,null,"list all stashes","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"git stash list\n")),"\n"),"\n",a.createElement(l.li,null,"save uncommitted changes","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"git stash\n")),"\n"),"\n",a.createElement(l.li,null,"reapply previously stashed changes and delete it from the list","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"git stash pop\n")),"\n","specify the exact stash index","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"git stash pop stash@{n}\n")),"\n","keep the stash in the list after reapplying it","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"git stash apply stash@{n}\n")),"\n"),"\n",a.createElement(l.li,null,"remove stashed changes","\n",a.createElement(l.ul,null,"\n",a.createElement(l.li,null,"the newest stash","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"git stash drop\n")),"\n"),"\n",a.createElement(l.li,null,"all of stashes","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"git stash clear\n")),"\n"),"\n"),"\n"),"\n"),"\n",a.createElement(l.h1,null,"Setting"),"\n",a.createElement(l.p,null,"Show the URL of remote repository"),"\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"git remote -v\n")),"\n",a.createElement(l.p,null,"Show the URL of remote repository"),"\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"get remote set-url origin <URL>\n")),"\n",a.createElement(l.p,null,"Acting on this directory"),"\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"git config <parameter>\n")),"\n",a.createElement(l.p,null,"Acting on this system"),"\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"git config --global <parameter>\n")),"\n",a.createElement(l.ul,null,"\n",a.createElement(l.li,null,'show git config (press "q" to quit)',"\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"git config --list\n")),"\n"),"\n",a.createElement(l.li,null,"set config","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},"git config <key> <value>\n")),"\n","For Example, set the user information","\n",a.createElement(l.pre,null,a.createElement(l.code,{className:"language-shell"},'git config user.name "<username>"\r\ngit config user.email "<email>"\n')),"\n"),"\n"))}var c=function(e){void 0===e&&(e={});const{wrapper:l}=Object.assign({},(0,t.ah)(),e.components);return l?a.createElement(l,e,a.createElement(r,e)):r(e)},m=n(1883),s=n(8032),i=n(7392),o=n(2036),u=n(908),h=n(8197),g=n(2349),E=n(8554),d=n(4072),p=n(1950);const f=e=>{var l;let{data:r,location:c,children:g}=e;const f=r.site.siteMetadata.languages,{mdx:b}=r,N=(0,a.useRef)(null),{0:w,1:v}=(0,a.useState)(!0);return a.createElement(u.Z,{language:(0,o.G)(c.pathname,f).id},a.createElement(h.Z,{currentPath:c.pathname,contents:r.allMdx.nodes.map((e=>({title:e.frontmatter.title,depth:e.fields.depth,path:e.fields.path})))}),a.createElement("div",{ref:N,className:p.hi,onScroll:()=>v(0===N.current.scrollTop)},a.createElement("div",{className:p.nC},a.createElement("header",{className:p.fr},a.createElement("h1",null,b.frontmatter.title),a.createElement("h3",null,b.fields.date)),b.tableOfContents.items?a.createElement("ol",{className:p.Jt},a.createElement("span",null,(0,o.G)(c.pathname,f).headline),null===(l=b.tableOfContents.items)||void 0===l?void 0:l.map((e=>{let{title:l}=e;return a.createElement("li",{key:"Heading_"+l},a.createElement(m.Link,{to:"#"+(0,i.S)(l),className:p.p4},l))}))):a.createElement(a.Fragment,null),a.createElement("div",{className:p.Ig},a.createElement(t.Zo,{components:{a:e=>{let{href:l,children:n}=e;return a.createElement("a",{target:"_blank",href:l},n)},pre:e=>{let{children:l}=e;return a.createElement(E.Z,null,l)},h1:e=>{let{children:l}=e;return a.createElement(d.Z,null,l)}}},g))),a.createElement("button",{className:p.vc,disabled:w,onClick:()=>{(0,m.navigate)(c.pathname),N.current.scrollTo({top:0,behavior:"smooth"})}},a.createElement(s.S,{className:p.BH,src:"../../images/curvedArrow.png",alt:"scroll to top icon",title:"Scroll to top",loading:"eager",__imageData:n(5097)}))))};function b(e){return a.createElement(f,e,a.createElement(c,e))}const N=e=>{let{data:l,location:n}=e;return a.createElement(g.Z,{title:l.mdx.frontmatter.title,pathname:n.pathname})}}}]);
//# sourceMappingURL=component---src-templates-article-index-tsx-content-file-path-c-users-user-desktop-github-blog-content-tool-notes-git-en-md-52c6f4ecbfdc8225d964.js.map