const FormSplitBill = ({
  isSelected,
  onSetDeferentID,
  data,
  bill,
  onSetBill,
  yourExpense,
  onSetYourExpense,
  isPaying,
  onSetIsPaying,
  onHandleSplitBill,
}) => {
  // const handleIsExpense = () => {
  const isExpense = bill ? Number(bill) - Number(yourExpense) : "";
  // if (bill > 0 && yourExpense > 0)
  //   onSetIsExpense(Number(bill) - Number(yourExpense));
  // };
  const handleSubmitFormSplitBill = (e) => {
    e.preventDefault();
    if (!bill || !yourExpense) return;
    const payingByYou = isPaying === "You";
    const finalValue = payingByYou ? isExpense : -yourExpense;
    onHandleSplitBill(finalValue);
    onSetDeferentID(null);
    onSetBill("");
    onSetYourExpense("");
    onSetIsPaying("You");
  };
  return (
    <>
      {isSelected && (
        <form className="form-split-bill" onSubmit={handleSubmitFormSplitBill}>
          <h2>Split a Bill With {data?.name} </h2>
          <label>💰Bill Value</label>
          <input
            value={bill}
            onChange={(e) => onSetBill(e.target.value)}
            type="text"
          />

          <label>🧍‍♂️Your Expense</label>
          <input
            type="number"
            value={yourExpense}
            onChange={(e) => onSetYourExpense(e.target.value)}
          />

          <label> 🧑‍🤝‍🧑{data?.name} 's Expense</label>
          <input type="text" value={isExpense} disabled />

          <label>🤑 Who is Paying The Bill</label>
          <select
            value={isPaying}
            onChange={(e) => onSetIsPaying(e.target.value)}>
            <option value="You">You</option>

            <option value={data?.name}>{data?.name}</option>
          </select>
          <button className="button">Split Bill</button>
        </form>
      )}
    </>
  );
};
export default FormSplitBill;
