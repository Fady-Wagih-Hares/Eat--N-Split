const FormAddFriend = ({ addFriend, onSetAddFriend, onSetData }) => {
  const handleSubmitAddFriend = (e) => {
    e.preventDefault();
    // console.log(e.target);
    if (!addFriend.name || !addFriend.image) return;

    onSetData((prev) => [...prev, { ...addFriend, id: Date.now() }]);
    onSetAddFriend({
      name: "",
      image: "",
    });
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
      {<button className="button">Add</button>}
    </form>
  );
};
export default FormAddFriend;
