const root = "/WSOA3028A_2549471"

const blogItems = [
    {name: "Blogpost1", href: root + "/Blogpost/Blogpost1.html"},
    {name: "Blogpost2", href: `${root}/Blogpost/Blogpost2.html`},
    {name: "Blogpost3", href: `${root}/Blogpost/Blogpost3.html`},
    {name: "Blogpost4", href: `${root}/Blogpost/Blogpost4.html`},
    {name: "Blogpost5", href: `${root}/Blogpost/Blogpost5.html`},
    {name: "Blogpost6", href: `${root}/Blogpost/Blogpost6.html`},
    {name: "Blogpost7", href: `${root}/Blogpost/Blogpost7.html`},
    {name: "Blogpost8", href: `${root}/Blogpost/Blogpost8.html`},
 
];

export function initialiseBlog(currentPage){                   
    console.log("worked blogs")
    const nav = document.querySelector("header > nav")    
    const ul = document.createElement("ol")           
    for(let blogItem of blogItems) {                    
        const li = document.createElement("li")           
        if(currentPage != blogItem.name) {                 
            const a = document.createElement("a")          
            a.innerText = blogItem.name                 
            a.setAttribute("href", blogItem.href)         
            li.appendChild(a)                      
        } else {
            li.innerText = blogItem.name                  
        }
        ul.appendChild(li)                                
    }
    nav.appendChild(ul)                                   
}