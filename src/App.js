import React from "react";
import "./App.css";

import SettingsPanel from './components/mainComponents/SettingsPanel';
import DemoScreen from "./components/mainComponents/DemoScreen";

function App() {
  return (
    <div className="App">
      <div className="settingsSide">
        <SettingsPanel title={"items"} />
        <SettingsPanel title={"parent settings"} />
        <SettingsPanel title={"item settings"} />
      </div>
      <div className="demoSide">
        <DemoScreen />
      </div>
    </div>
  );
}

export default App;
