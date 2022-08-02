import { scheduleTask } from "../reconciliation"

export class Component {
  constructor(props) {
    this.props = props
  }
  setState(partialState) {
    scheduleTask(this, partialState)
  }
}
