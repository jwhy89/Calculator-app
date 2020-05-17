import React from 'react'
import { Button } from 'semantic-ui-react'

export const Calculator = () => {
    return (
        <div>
            <div className='Display-output'></div>
        <div>
          <Button className="Input-button" content="+" />
          <Button className="Input-button" content="9" />
          <Button className="Input-button" content="8" />
          <Button className="Input-button" content="7" />
        </div>
        <div>
          <Button className="Input-button" content="-" />
          <Button className="Input-button" content="6" />
          <Button className="Input-button" content="5" />
          <Button className="Input-button" content="4" />
        </div>
        <div>
          <Button className="Input-button" content="x" />
          <Button className="Input-button" content="3" />
          <Button className="Input-button" content="2" />
          <Button className="Input-button" content="1" />
        </div>
        <div>
          <Button className="Input-button" content="÷" />
          <Button className="Input-button" content="Clear" />
          <Button className="Input-button" content="." />
          <Button className="Input-button" content="0" />
        </div>
        <div>
          <Button className="Equal-button" content="=" />
        </div>
        </div>
    )
}

export default Calculator;
