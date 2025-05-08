import "./App.css";
import Card from "./components/Card";
import { data } from "./data";

function App() {
  return (
    <div className="main_container">
      <Card>
        <img src={data.image} alt="qr image" />
        <h2>{data.title}</h2>
        <p>{data.text}</p>
      </Card>
    </div>
  );
}

export default App;
