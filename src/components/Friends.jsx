import FriendList from "./FriendList";
import FormAddFriend from "./FormAddFriend";

const Friends = ({
  onSetDeferentID,
  // initialFriends,
  // isSelected,
  deferentId,
  addFriend,
  onSetAddFriend,
  data,
  onSetData,
  openAdd,
  onSetOpenAdd,
  isPaying,
}) => {
  // const selectPerson = initialFriends.filter((id) => id !== initialFriends.id);

  const handleSelect = (friend) => {
    onSetDeferentID((curId) => (curId?.id === friend.id ? null : friend));
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
            />
          );
        })}
      </ul>
      {openAdd ? (
        <button
          value={openAdd}
          onClick={(e) => onSetOpenAdd(!e.target.value)}
          className="button">
          Add Friend
        </button>
      ) : null}
      <>
        {openAdd ? null : (
          <FormAddFriend
            addFriend={addFriend}
            onSetAddFriend={onSetAddFriend}
            data={data}
            onSetData={onSetData}
          />
        )}

        {openAdd ? null : (
          <button
            onClick={(e) => onSetOpenAdd(!e.target.value)}
            className="button">
            Close
          </button>
        )}
      </>
    </div>
  );
};
export default Friends;
