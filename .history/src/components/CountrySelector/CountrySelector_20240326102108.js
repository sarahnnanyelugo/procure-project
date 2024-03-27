import * as React from "react";
import ReactCountryFlagsSelect, { Us } from "react-country-flags-select";
import "./style.scss";

export default function CountrySelector() {
  const [selected, setSelected] = React.useState(null);

  return (
    <div className="main-container">
      {/* add font-size to the parent node to change the size of the flag */}
      <div style={{ fontSize: "200px" }}>
        <Us />
      </div>
      <ReactCountryFlagsSelect
        selected={selected}
        onSelect={setSelected}
        fullWidth
        searchable
      />
    </div>
  );
}
