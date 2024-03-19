import { useState } from "react";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState(" ");
  const [persentatge1, setPersentatge1] = useState(0);
  const [persentatge2, setPersentatge2] = useState(0);

  const tip = bill * ((persentatge1 + persentatge2) / 2 / 100);

  function handleReset() {
    setBill("");
    setPersentatge1(0);
    setPersentatge2(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPersentage persentatge={persentatge1} onSelect={setPersentatge1}>
        How did you like service?
      </SelectPersentage>
      <SelectPersentage persentatge={persentatge2} onSelect={setPersentatge2}>
        How did your Friend like service?
      </SelectPersentage>
      {bill > 0 && (
        <>
          <OutPut bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How Mach Was the Bill? </label>
      <input
        type="text"
        placeholder="Bill Value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      ></input>
    </div>
  );
}

function SelectPersentage({ children, persentatge, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={persentatge}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Abssolutely amazing (20%)</option>
      </select>
    </div>
  );
}

function OutPut({ bill, tip }) {
  return <h3>{`You pay ${bill + tip} (${bill} + ${tip} tip)`}</h3>;
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
