import React from "react";
import Profile from "./Profile";
import user from "../data/user.json";
import Statistics from "./Statistics";
import statisticalData from "../data/statistical-data.json";
import FriendList from "./FriendList";
import friends from "../data/friends.json";
import TransactionHistory from "./TransactionHistory";
import transactions from "../data/transactions.json";

export default function App() {
  return (
    <>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
