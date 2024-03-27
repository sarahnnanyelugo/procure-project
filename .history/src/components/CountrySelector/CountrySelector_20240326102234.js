import * as React from "react";
import ReactCountryFlagsSelect, { Us } from "react-country-flags-select";
import "./styles.scss";

export default function CountrySelector() {
  const [selected, setSelected] = React.useState(null);

  return (
    <div className="main-container">
      <ReactCountryFlagsSelect
        selected={selected}
        onSelect={setSelected}
        fullWidth
        searchable
      />
    </div>
  );
}
