export default function Friend({ friend, onSelectFriend, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li className="friend">
      <img src={friend.images} alt={friend.name} />
      <div className="friend-info">
        <h3>{friend.name}</h3>
        {friend.balance < 0 && (
          <p className="red">
            Kamu Berhutang Rp.{Math.abs(friend.balance)} ke {friend.name}
          </p>
        )}
        {friend.balance > 0 && (
          <p className="green">
            {friend.name} Berhutang Rp.{Math.abs(friend.balance)} ke Kamu
          </p>
        )}
        {friend.balance === 0 && <p>Kamu dan {friend.name} tidak ada hutang</p>}
      </div>
      <button className="button" onClick={() => onSelectFriend(friend)}>
        {isSelected ? "Tutup" : "Pilih"}
      </button>
    </li>
  );
}
