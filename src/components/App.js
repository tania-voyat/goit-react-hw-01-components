import React from "react";
import Profile from "./Profile";
import user from "../user.json";
import Statistics from "./Statistics";
import statisticalData from "../statistical-data.json";
import FriendList from "./FriendList";
import friends from "../friends.json";
import TransactionHistory from "./TransactionHistory";
import transactions from "../transactions.json";

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
