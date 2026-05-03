import React from "react";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";

const App = () => {
  const users = [
    {
      img: "https://imgs.search.brave.com/RG5A8BWhwl4JH_gwKuSGdt3Sksw_Z271xZPflRPjXpo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDExNzc2/NDA0LmpwZw",
      intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi alias nostrum laudantium, aperiam facilis nam maiores quis pariatur ipsam dicta.",
      tag: "Satisfied",
      color: "green"
    },
    {
      img: "https://imgs.search.brave.com/mW0_PtSvW5Beu8Bs_BnCOgL12JC0c-Dv2wIEDMbp_OM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzdiLzM3/L2Q4LzdiMzdkOGU4/NjVmNzYwOTM1ZWM2/YjAzMzlmOTdlZjU1/LmpwZw",
      intro: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio vitae consectetur sed repellat nam fuga voluptates reprehenderit ut. Amet, voluptatem.",
      tag: "UnderServed",
      color: "red"
    },
    {
      img: "https://imgs.search.brave.com/ltgS7FHkKp62E41Q1mE9cw2k2w_22LMIbAmFIdgsyUg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2FmL2Vi/L2Y1L2FmZWJmNTFj/ODA0YjY0OGE1ZjZh/ZTE0Y2QzZGJiZjA2/LmpwZw",
      intro: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, aspernatur. Consequuntur, voluptatem nisi omnis dolorem assumenda sit exercitationem iusto aliquid?",
      tag: "UnderCover",
      color: "pink"
    },
    {
      img: "https://imgs.search.brave.com/uk6hAHhtJ975uI5bEzYiwTRaqx2eBkc_wC9KF-kcP3s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjIx/Mzk2MDU4OC9waG90/by9tYWRyaWQtc3Bh/aW4tc3BhbmlzaC1h/Y3RyZXNzLW5pY29s/bGUtd2FsbGFjZS1h/dHRlbmRzLXRoZS1u/ZXctY2FtcGFpZ24t/Zm9yLXdvbWVucy1z/ZWNyZXQtYXQuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPUFk/SmRYV2hrZG16aU4t/MmZJcGNqOXpkemMw/Z3FEcXhlMEdFc3lW/RnVQM0U9",
      intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In reprehenderit facere iste expedita repudiandae dolorem vero, laborum minima! Ipsum, error?",
      tag: "FullyProof",
      color: "violet"
    },
    {
      img: "https://imgs.search.brave.com/TFqx30M285DP_HsW88UnzxAPozjQVGMlM0m1BRVI5Iw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2I3L2E5/L2VjL2I3YTllYzg3/MmM4OTc1NDI1YTYx/MzQ1NGI2NDU0NWY1/LmpwZw",
      intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti debitis illum aspernatur ab a expedita aliquid exercitationem quidem dolorum voluptate?",
      tag: "Brute",
      color: "orange"
    },
  ];

  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
    </div>
  );
};

export default App;
