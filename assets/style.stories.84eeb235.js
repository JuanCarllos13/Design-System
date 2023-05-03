var m=Object.defineProperty;var r=(t,e)=>m(t,"name",{value:e,configurable:!0});import"./index.b4e1e1d5.js";import{c as o,A as i,M as c}from"./Props.ecd4c445.js";import"./jsx-runtime.4e622a79.js";import"./iframe.0f57c449.js";import{H as u}from"./index.e0bda8bd.js";import"./string.067b4bde.js";import"./index.e6a17c06.js";import"./es.map.constructor.dd4ff8a5.js";import"./es.number.to-fixed.e4d9a47e.js";import"./index.14e426c7.js";function l(){return l=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},l.apply(this,arguments)}r(l,"_extends");const d={},g="wrapper";function p({components:t,...e}){return o(g,l({},d,e,{components:t,mdxType:"MDXLayout"}),o(c,{title:"Estiliza\xE7\xE3o",mdxType:"Meta"}),o("h1",null,"Estiliza\xE7\xE3o global"),o("p",null,"Crie um p\xE1gina chamada styles, dentro dela um arquivo chamado global.ts"),o("p",null,"Exemplo de estilo:"),o("pre",null,o("code",{parentName:"pre",className:"language-tsx"},`import { globalCss } from "@juancarllos-ui/react";
export const globalStyles = globalCss({
  "*": {
    boxSizing: "border-box",
    padding: 0,
    margin: 0,
  },

  body: {
    backgroundColor: "$gray900",
    color: "$gray100",
    "-webkit-font-smoothing": "antialiased",
  },
});
`)),o("p",null,"Para o estilo funcionar em todos as p\xE1ginas em seu projeto, caso voc\xEA esteja utilizando Next.js, voc\xEA deve import o arquivo style dentro do arquivo ",o("inlineCode",{parentName:"p"},"_app.page.tsx")),o("p",null,"Exemplo:"),o("pre",null,o("code",{parentName:"pre",className:"language-jsx"},`import { globalStyles } from "../styles/global";
import type { AppProps } from "next/app";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
`)),o("h3",null,"Estilzando um Componente"),o("pre",null,o("code",{parentName:"pre",className:"language-jsx"},`import { styled, Box, Heading, Text } from "@juancarllos-ui/react";

export const FormError = styled(Text, {
  color: "#f75a68",
});

`)),o("p",null,"Como ficou o FormError com troca de cor de texto."),o(u,{css:{color:"red"},size:"$sm",mdxType:"Heading"},"Nome completo"),o("p",null,"Caso queira estilizar no seu pr\xF3pro arquivo tsx ou js, pode estilizar d\xE1 seguinte maneira:"),o("pre",null,o("code",{parentName:"pre",className:"language-jsx"},`<Heading css={{ color: "red" }} size="$sm">
  Nome completo
</Heading>
`)))}r(p,"MDXContent");p.isMDXComponent=!0;const x=r(()=>{throw new Error("Docs-only story")},"__page");x.parameters={docsOnly:!0};const a={title:"Estiliza\xE7\xE3o",includeStories:["__page"]},y={};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:()=>o(i,{mdxStoryNameToKey:y,mdxComponentAnnotations:a},o(p,null))};const P=["__page"];export{P as __namedExportsOrder,x as __page,a as default};
//# sourceMappingURL=style.stories.84eeb235.js.map
