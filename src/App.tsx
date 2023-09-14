import Hero from "./components/Hero/Hero";
import CalculatorSection from "./components/CalculatorSection/CalculatorSection";
// import WhatIsSection from "./components/WhatIsSection/WhatIsSection";

function App() {
  return (
    <div className="mb-96">
      <Hero></Hero>
      {/* <WhatIsSection></WhatIsSection> */}
      <CalculatorSection></CalculatorSection>
    </div>
  );
}

export default App;
