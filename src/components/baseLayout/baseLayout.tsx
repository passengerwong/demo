import React from 'react';
export default class BaseLayout extends React.Component {
    render() {
        return (<div>
            {this.props.children}
        </div>)
    }
}
