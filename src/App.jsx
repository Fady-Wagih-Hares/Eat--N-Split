import Friends from "./components/Friends";
import FormSplitBill from "./components/FormSplitBill";
import { useState } from "react";

const App = () => {
  const initialFriends = [
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ];
  const [deferentId, setDeferentID] = useState(null);

  const [data, setData] = useState(initialFriends);
  // console.log(data);
  const [addFriend, setAddFriend] = useState({
    name: "",
    image: "",
    balance: 0,
  });
  const [openAdd, setOpenAdd] = useState(true);
  const [bill, setBill] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  // const [isExpense, setIsExpense] = useState("");
  const [isPaying, setIsPaying] = useState("You");

  // const isSelected = initialFriends?.id === deferentId;
  const selectFriend = data.find((friend) => friend?.id === +deferentId?.id);
  // console.log("Friend ID Type:", typeof data[0].id);
  // console.log("Selected ID Type:", typeof deferentId);
  // console.log("Did we find a friend?", selectFriend);

  // update the balance in Object
  const handleSplitBill = (value) => {
    setData((curData) =>
      curData.map((cur) =>
        cur?.id === +deferentId.id ? { ...cur, balance: value } : cur,
      ),
    );
  };
  return (
    <div className="app">
      <Friends
        deferentId={deferentId}
        onSetDeferentID={setDeferentID}
        // initialFriends={initialFriends}
        // isSelected={isSelected}
        addFriend={addFriend}
        onSetAddFriend={setAddFriend}
        data={data}
        onSetData={setData}
        openAdd={openAdd}
        onSetOpenAdd={setOpenAdd}
        isPaying={isPaying}
      />
      <FormSplitBill
        isSelected={deferentId !== null}
        onSetDeferentID={setDeferentID}
        data={selectFriend}
        bill={bill}
        onSetBill={setBill}
        yourExpense={yourExpense}
        onSetYourExpense={setYourExpense}
        // isExpense={isExpense}
        // onSetIsExpense={setIsExpense}
        isPaying={isPaying}
        onSetIsPaying={setIsPaying}
        onHandleSplitBill={handleSplitBill}
      />
    </div>
  );
};
export default App;
