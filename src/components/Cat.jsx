import React from 'react'

const Cat = ({ mouse }) => {
      return (
            <img src={require('../images/cat.png')} style={{ position: 'absolute', width:'200px', left: mouse.x - 20, top: mouse.y - 120 }} />
      );
}

export default Cat