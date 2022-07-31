import React from 'react'
import { useState } from 'react';

const Mouse = (props) => {

      const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

      const handleMouseMove = (e) => {
            setMousePosition({
                  x: e.clientX,
                  y: e.clientY
            });
      }

      return (
            <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}>
                  {props.render(mousePosition)}
            </div>
      );
}

export default Mouse