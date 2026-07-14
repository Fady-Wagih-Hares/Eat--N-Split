import Button from "./Button";
const FormAddFriend = ({ addFriend, onSetAddFriend, onSetData }) => {
  const handleSubmitAddFriend = (e) => {
    e.preventDefault();
    // console.log(e.target);
    if (!addFriend.name || !addFriend.image) return;
    //  do not mute the original array because react is all about immutability and we are not allowed to mutate props
    onSetData((prev) => [...prev, { ...addFriend, id: Date.now() }]);
    onSetAddFriend({
      name: "",
      image: "",
      balance: 0,
    });
    // onSetDeferentID(null);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(e.target.value);
    // console.log(e.target);
    onSetAddFriend((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <form onSubmit={handleSubmitAddFriend} className="form-add-friend">
      <label> 🧑‍🤝‍🧑Friend Name </label>
      <input
        name="name"
        type="text"
        value={addFriend.name}
        onChange={handleChange}
        placeholder="Friend Name"
      />
      <label>📷image URL</label>

      <input
        name="image"
        value={addFriend.image}
        type="text"
        onChange={handleChange}
        placeholder="Image URL"
      />
      {<Button>Add</Button>}
    </form>
  );
};
export default FormAddFriend;
