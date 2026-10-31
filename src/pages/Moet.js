import React from "react";
import "./Moet.css";
import MoetHero from "../components/Moet/MoetHero";
import MoetAbout from "../components/Moet/MoetAbout";
import Working from "../components/Moet/Working";
import MoetIvf from "../components/Moet/MoetIvf";
import Semen from "../components/Moet/Semen";
import MoetCta from "../components/Moet/MoetCta";
import MoetFaq from "../components/Moet/MoetFaq.js";


export default function LeadsGeneticsPage() {
  return (
    <main className="leads-genetics-page">
      {/* HERO */}
     <MoetHero/>
     <MoetAbout/>
     <Working/>
     <MoetIvf/>
     <Semen/>
     <MoetCta/>
     <MoetFaq/>
      {/* INTRO STRIP */}
    </main>
  );
}
