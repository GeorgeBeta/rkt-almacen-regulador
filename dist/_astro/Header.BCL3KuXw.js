import{g as t,j as e,c as r}from"./auth.kw40fiLr.js";import{r as n}from"./index.CVf8TyFT.js";const p=()=>{const[s,i]=n.useState(!1),[l,o]=n.useState(null);n.useEffect(()=>{o(t())},[]);const a=()=>{r(),window.location.href="/"};return e.jsxs(e.Fragment,{children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .header {
            background: #333;
            color: #fff;
            padding: 1rem;
            position: relative;
        }
        
        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .logo h2 {
            margin: 0;
            font-size: 1.2rem;
        }
        
        .nav-desktop {
            display: flex;
            gap: 1.5rem;
        }
        
        .nav-mobile {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: #333;
            flex-direction: column;
            padding: 1rem;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }
        
        .nav-mobile.open {
            display: flex;
        }
        
        .nav-mobile a {
            padding: 0.75rem 0;
            border-bottom: 1px solid #555;
        }
        
        .nav-mobile a:last-child {
            border-bottom: none;
        }
        
        .nav-link {
            color: white;
            text-decoration: none;
            padding: 0.5rem;
            border-radius: 4px;
            transition: background 0.2s;
        }
        
        .nav-link:hover {
            background: rgba(255,255,255,0.1);
        }
        
        .menu-toggle {
            display: none;
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0.25rem;
        }
        
        .desktop-title { display: inline; }
        .tablet-title, .mobile-title { display: none; }
        
        @media (max-width: 768px) {
            .nav-desktop { display: none; }
            .menu-toggle { display: block; }
            .desktop-title, .mobile-title { display: none; }
            .tablet-title { display: inline; }
        }
        
        @media (max-width: 480px) {
            .desktop-title, .tablet-title { display: none; }
            .mobile-title { display: inline; }
            .logo h2 { font-size: 1rem; }
        }
    `}}),e.jsx("header",{className:"header",children:e.jsxs("div",{className:"header-content",children:[e.jsx("div",{className:"logo",children:e.jsxs("h2",{children:[e.jsx("span",{className:"desktop-title",children:"Gestión Almacén Regulador"}),e.jsx("span",{className:"tablet-title",children:"Gestión Regulador"}),e.jsx("span",{className:"mobile-title",children:"Almacén"})]})}),l&&e.jsxs(e.Fragment,{children:[e.jsxs("nav",{className:"nav-desktop",children:[e.jsx("a",{href:"/home",className:"nav-link",children:"Home"}),e.jsx("a",{href:"/pedidos/subir",className:"nav-link",children:"Subir pedido"}),e.jsx("a",{href:"/pedidos",className:"nav-link",children:"Ver pedidos"}),e.jsx("a",{href:"/usuarios",className:"nav-link",children:"Usuarios"}),e.jsx("button",{onClick:a,className:"nav-link",style:{background:"none",border:"none"},children:"Salir"})]}),e.jsx("button",{className:"menu-toggle",onClick:()=>i(!s),"aria-label":"Toggle menu",children:"☰"}),e.jsxs("nav",{className:`nav-mobile ${s?"open":""}`,children:[e.jsx("a",{href:"/home",className:"nav-link",children:"Home"}),e.jsx("a",{href:"/pedidos/subir",className:"nav-link",children:"Subir pedido"}),e.jsx("a",{href:"/pedidos",className:"nav-link",children:"Ver pedidos"}),e.jsx("a",{href:"/usuarios",className:"nav-link",children:"Usuarios"}),e.jsx("button",{onClick:a,className:"nav-link",style:{background:"none",border:"none"},children:"Salir"})]})]})]})})]})};export{p as default};
