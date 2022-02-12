
console.log("hello")
class Counter extends React.Component {
    state = {
        count: 0,
        taps: 0
    }

    incrementCounter = () => {
        this.setState({
            count: this.state.count + 1,
            taps: this.state.taps + 1
        })
    }
    decrementCounter = () => {
        (this.state.count === 0)
            ? this.setState({ taps: this.state.taps + 1 })
            : this.setState({
                count: this.state.count - 1,
                taps: this.state.taps + 1
            })
    }
    reset=()=>{
        this.setState({
            count:0
        })
    }
    resetAll=()=>{
        this.setState({
            count:0,
            taps:0
        })
    }

    render() {
        return (
            <div className="counter">
                <h1>Counter</h1>
                <h2 className="count">{this.state.count}</h2>
                <h4 className="taps">Total taps:{this.state.taps}</h4>
                <div>
                    <button onClick={this.decrementCounter}>Decrement -</button>
                    <button onClick={this.incrementCounter}>Increment +</button>
                </div>
                <div>
                    <button className="reset-count" onClick={this.reset}>Reset Count</button>
                    <button className="reset-all" onClick={this.resetAll}>Reset All</button>
                </div>
            </div>
        )
    }
}


class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Counter />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
