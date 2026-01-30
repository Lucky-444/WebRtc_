import React from 'react'
import CreateRoom from '../Components/CreateRoom'

const Home : React.FC = () => {
  return (
    <div className="flex  items-center justify-center mt-80">
      <CreateRoom />
    </div>
  );
}

export default Home