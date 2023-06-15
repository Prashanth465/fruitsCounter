// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  render() {
    return (
      <div className="bg">
        <div className="card">
          <h1>
            Bob ate <span>0</span> mangoes <span>0</span> bananas
          </h1>
          <div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button type="button">Eat Mango</button>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="banana"
              />
              <button type="button">Eat Banana</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
