const FriendList = ({ friend, onHandleSelect, deferentId, isPaying }) => {
  const isSelected = deferentId?.id === friend.id;
  return (
    <li>
      <img src={friend.image} alt="" />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p value={isPaying} className="red">
          You Owe {friend?.name} {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend?.name} Owe You {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance === 0 && <p>You And {friend?.name} Are Even</p>}
      <button className="button" onClick={() => onHandleSelect(friend)}>
        {isSelected ? "Close" : "Select"}
      </button>
    </li>
  );
};
export default FriendList;
