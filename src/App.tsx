import React, { useState } from 'react';

import Rewarder from './pages/rewarder/Rewarder';
import RewardsTable from './pages/rewarder/table/RewardsTable';

function App() {
  const [rewards, setRewards] = useState(null);
  return (
    <div className='container' data-testid='container'>
      <Rewarder setRewards={setRewards} />
      <RewardsTable rewards={rewards} />
    </div>
  );
}

export default App;
