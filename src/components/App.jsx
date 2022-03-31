import { Profile } from './profile/Profile';
import user from './profile/user';

import { Statistics } from './statistics/Statistics';
import data from './statistics/data';

import { FriendList } from './friendList/FriendList';
import friends from './friendList/friends';

import { TransactionHistory } from './transactions/TransactionHistory';
import transactions from './transactions/transactions';

export const App = () => {
  return (
    <div>
      <Profile
        userName={user.username}
        userTag={user.tag}
        location={user.location}
        imgUrl={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
