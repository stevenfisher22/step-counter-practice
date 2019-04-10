// React Elements
import React from 'react';

// Redux
import { connect } from 'react-redux';

// Imported Action Creators
import { increment, reset } from './index';

class Counter extends React.Component {
    increment = () => {
        this.props.increment()
    }
    reset = () => {
        this.props.reset()
    }

    render() {
        return (
            <div>
                <span>You've walked {this.props.count} steps today!</span>
                <br />
                <button onClick={this.increment}>Add a Step</button>
                <button onClick={this.reset}>Reset Steps</button>
            </div>
        )
    }
};

function mapStateToProps(state) {
    return {
        count: state.count
    }
}
const mapDispatchToProps = {
    increment,
    reset
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)