import { useState } from "react";
import WebFont from "webfontloader";

import Scissor from "./Components/LandingPage/Scissor";

WebFont.load({
  google: {
    families: ["Gilroy-Medium:300"],
  },
});
function App() {
  return (
    <>
      <Scissor />
    </>
  );
}

export default App;
