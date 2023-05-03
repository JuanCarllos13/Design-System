var i=Object.defineProperty;var r=(o,a)=>i(o,"name",{value:a,configurable:!0});import"./index.b4e1e1d5.js";import{c as e,A as u,M as m}from"./Props.ecd4c445.js";import"./jsx-runtime.4e622a79.js";import"./iframe.0f57c449.js";import"./index.e0bda8bd.js";import"./string.067b4bde.js";import"./index.e6a17c06.js";import"./es.map.constructor.dd4ff8a5.js";import"./es.number.to-fixed.e4d9a47e.js";import"./index.14e426c7.js";function s(){return s=Object.assign?Object.assign.bind():function(o){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(o[l]=n[l])}return o},s.apply(this,arguments)}r(s,"_extends");const c={},d="wrapper";function p({components:o,...a}){return e(d,s({},c,a,{components:o,mdxType:"MDXLayout"}),e(m,{title:"Home",mdxType:"Meta"}),e("h1",null,"Criado por Juan Carlos"),e("p",null,e("a",{parentName:"p",href:"https://github.com/JuanCarllos13/Design-System"},"Open Github Project")),e("h2",null,"Getting Started"),e("br",null),e("h4",null,"Basic Template"),e("p",null,"Voc\xEA pode criar um novo aplicativo React usando ",e("a",{parentName:"p",href:"https://facebook.github.io/create-react-app/"},"create-react-app")," ."),e("pre",null,e("code",{parentName:"pre",className:"language-sh"},`npx create-react-app my-app
`)),e("h3",null,"Adicionar ",e("inlineCode",{parentName:"h3"},"@juancarllos-ui/react")," a um aplicativo existente"),e("p",null,"Primeiro de tudo, voc\xEA precisa adicionar a depend\xEAncia ",e("inlineCode",{parentName:"p"},"@juancarllos-ui/react")," ao seu projeto."),e("pre",null,e("code",{parentName:"pre",className:"language-sh"},`npm install @juancarllos-ui/react
`)),e("p",null,"Para usar ",e("inlineCode",{parentName:"p"},"@juancarllos-ui/react"),`, voc\xEA deve agrupar o componente raiz do seu aplicativo no ThemeProvider.
Voc\xEA provavelmente encontrar\xE1 esse componente em `,e("inlineCode",{parentName:"p"},"src/index.js"),":"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { ThemeProvider } from '@juancarllos-ui/react';
...
const root = createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
`)),e("p",null,"Caso voc\xEA esteja usando um projeto Next.js, voc\xEA seguir o seguinte passo: Dentro do arquivo ",e("inlineCode",{parentName:"p"},"_document.tsx")),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { getCssText } from "@juancarllos-ui/react";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
`)),e("p",null,"Ent\xE3o voc\xEA est\xE1 pronto para usar ",e("inlineCode",{parentName:"p"},"@juancarllos-ui/react")," e pode importar o(s) componente(s) desejado(s) em seu aplicativo:",e("br",null),`
Por exemplo, para usar o componente `,e("inlineCode",{parentName:"p"},"Button"),", voc\xEA precisa import\xE1-lo:"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import { Button } from "@juancarllos-ui/react";
`)),e("p",null,"Em seguida, voc\xEA pode usar o bot\xE3o em seu aplicativo:"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`<Button onClick={() => alert("Hello World!")}>Hello world!</Button>
`)),e("h3",null,"Support"),e("p",null,"Estou buscondo melhorar minha biblioteca, adicionando novos recursos e funcionalidades para garantir que ela esteja sempre atualizada com as \xFAltimas tend\xEAncias e tecnologias. Al\xE9m disso, aprecio muito sugest\xF5es e ideias dos usu\xE1rios, pois isso me ajuda a tornar minha biblioteca ainda melhor."),e("p",null,"Caso tenha alguma ideia ou sugest\xE3o para melhorar a biblioteca, por favor, entre em contato comigo atrav\xE9s das minhas redes sociais:"),e("p",null,"LinkedIn: ",e("a",{parentName:"p",href:"https://www.linkedin.com/in/juancarlos13/"},"https://www.linkedin.com/in/juancarlos13/")),e("p",null,"Instagram: ",e("a",{parentName:"p",href:"https://www.instagram.com/juan.carllos_/"},"https://www.instagram.com/juan.carllos_/")),e("p",null,"GitHub: ",e("a",{parentName:"p",href:"https://github.com/JuanCarllos13"},"https://github.com/JuanCarllos13")),e("p",null,"Agrade\xE7o por utilizar minha biblioteca e espero que ela ajude."))}r(p,"MDXContent");p.isMDXComponent=!0;const g=r(()=>{throw new Error("Docs-only story")},"__page");g.parameters={docsOnly:!0};const t={title:"Home",includeStories:["__page"]},h={};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:()=>e(u,{mdxStoryNameToKey:h,mdxComponentAnnotations:t},e(p,null))};const T=["__page"];export{T as __namedExportsOrder,g as __page,t as default};
//# sourceMappingURL=home.stories.cd3ad1ea.js.map
