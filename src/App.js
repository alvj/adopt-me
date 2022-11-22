import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Caramel" animal="Dog" breed="German Shepherd" />
      <Pet name="Koda" animal="Dog" breed="Samoyed" />
      <Pet name="Mowgli" animal="Dog" breed="Mix" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
