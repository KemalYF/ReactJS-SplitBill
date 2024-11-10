import { useState } from "react";
import Friendlist from "./components/Friendlist";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import "./App.css";

const initialFriends = [
  {
    id: 1,
    name: "Ross Geller",
    images: "https://i.pravatar.cc/48?img=1",
    balance: 30,
  },
  {
    id: 2,
    name: "Monica Geller",
    images: "https://i.pravatar.cc/48?img=2",
    balance: -28,
  },
  {
    id: 3,
    name: "Joey Tribbiani",
    images: "https://i.pravatar.cc/48?img=3",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [ShowAddFriend, setShowAddFriend] = useState(false);
  const [SelectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriend((ShowAddFriend) => !ShowAddFriend);
    setSelectedFriend(null);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
  }

  function handleSelectFriend(friend) {
    setSelectedFriend((selected) =>
      selected?.friend === friend.id ? null : friend
    );

    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends(
      friends.map((friend) => {
        if (friend.id === SelectedFriend?.id) {
          return {
            ...friend,
            balance: friend.balance + value,
          };
        }
        return friend;
      })
    );

    setSelectedFriend(null);
  }

  return (
    <div className="App">
      <div className="sidebar">
        <Friendlist
          friends={friends}
          onSelectFriend={handleSelectFriend}
          selectedFriend={SelectedFriend}
        />
        {ShowAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <button className="button" onClick={handleShowAddFriend}>
          {ShowAddFriend ? "Tutup" : "Tambah Teman"}
        </button>
      </div>
      {SelectedFriend && (
        <FormSplitBill
          selectedFriend={SelectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}
