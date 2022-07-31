import React from 'react'
import Mouse from './Mouse';
import Cat from './Cat';

const MouseTracker = () => {
      return (
            <div>
                  <Mouse render={mouse => (
                        <Cat mouse={mouse} />
                  )} />
            </div>
      );
}

export default MouseTracker