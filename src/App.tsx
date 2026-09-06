import { useState } from "react";

import { ArcadeEgg } from "./components/ArcadeEgg";
import { Nav } from "./components/Nav";
import { Preloader } from "./components/Preloader";
import { ScrollProgress } from "./components/ScrollProgress";
import { Footer } from "./components/Footer";
import { Hero } from "./components/sections/Hero";
import { Builds } from "./components/sections/Builds";
import { Approach } from "./components/sections/Approach";
import { Stack } from "./components/sections/Stack";
import { Projects } from "./components/sections/Projects";
import { Experience } from "./components/sections/Experience";
import { Contact } from "./components/sections/Contact";

function App() {
  const [arcadeOpen, setArcadeOpen] = useState(false);

  return (
    <>
      <div className="grain" />
      <Preloader />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Builds />
        <Approach />
        <Stack />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer onArcade={() => setArcadeOpen(true)} />
      <ArcadeEgg open={arcadeOpen} onOpenChange={setArcadeOpen} />
    </>
  );
}

export default App;
