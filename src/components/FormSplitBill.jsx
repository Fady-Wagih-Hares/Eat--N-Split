import Button from "./Button";

const FormSplitBill = ({
  isSelected,
  onSetDeferentID,
  selectFriend,
  bill,
  onSetBill,
  yourExpense,
  onSetYourExpense,
  isPaying,
  onSetIsPaying,
  onHandleSplitBill,
  openAdd,
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
    //  rest fields
    onSetDeferentID(null);
    // onSetBill("");
    // onSetYourExpense("");
    // onSetIsPaying("You");
  };
  return (
    <>
      {isSelected && openAdd && (
        <form
          className="form-split-bill"
          onSubmit={handleSubmitFormSplitBill}
          value={selectFriend}>
          <h2>Split a Bill With {selectFriend?.name} </h2>
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

          <label> 🧑‍🤝‍🧑{selectFriend?.name} 's Expense</label>
          <input type="text" value={isExpense} disabled />

          <label>🤑 Who is Paying The Bill</label>
          <select
            value={isPaying}
            onChange={(e) => onSetIsPaying(e.target.value)}>
            <option value="You">You</option>

            <option value="friend">{selectFriend?.name}</option>
          </select>
          <Button>Split Bill</Button>
        </form>
      )}
    </>
  );
};
export default FormSplitBill;
