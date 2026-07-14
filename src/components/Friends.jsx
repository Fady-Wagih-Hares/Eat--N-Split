import FriendList from "./FriendList";
import FormAddFriend from "./FormAddFriend";
import Button from "./Button";

const Friends = ({
  onSetDeferentID,
  // initialFriends,
  // isSelected,
  onSetBill,
  onSetYourExpense,
  onSetIsPaying,
  deferentId,
  addFriend,
  onSetAddFriend,
  data,
  onSetData,
  openAdd,
  onSetOpenAdd,
  isPaying,
  // isSelected,
}) => {
  // const selectPerson = initialFriends.filter((id) => id !== initialFriends.id);

  const handleSelect = (friend) => {
    onSetDeferentID((curId) => (curId?.id === friend.id ? null : friend));
    onSetOpenAdd(true);
    if (friend.id !== deferentId?.id) {
      onSetBill("");
      onSetYourExpense("");
      onSetIsPaying("You");
    }
  };
  // const handleAddFriend = ()=>{
  //   onSetAddFriend((e)=>{
  //     name:e.name,
  //     image: e.image
  //   })
  // }
  return (
    <div className="sidebar" value={deferentId}>
      <ul>
        {data.map((friend) => {
          return (
            <FriendList
              friend={friend}
              key={friend.id}
              onHandleSelect={handleSelect}
              // isSelected={isSelected}
              deferentId={deferentId}
              isPaying={isPaying}
              openAdd={openAdd}
            />
          );
        })}
      </ul>
      {openAdd ? (
        <Button
          value={openAdd}
          onClick={() => {
            onSetOpenAdd(false);
            onSetDeferentID(null);
          }}>
          Add Friend
        </Button>
      ) : null}
      <>
        {openAdd ? null : (
          <FormAddFriend
            addFriend={addFriend}
            onSetAddFriend={onSetAddFriend}
            data={data}
            onSetData={onSetData}
            deferentId={deferentId}
            onSetDeferentID={onSetDeferentID}
          />
        )}

        {openAdd ? null : (
          <Button
            onClick={() => {
              onSetOpenAdd(true);
              onSetDeferentID(null);
            }}>
            Close
          </Button>
        )}
      </>
    </div>
  );
};
export default Friends;
