import React from 'react'

export default class DatalistOption extends React.Component {
    render() {
        var classes = 'react-datalist-option' + (this.props.className ? ' ' + this.props.className : '')
        if (this.props.selected) classes += ' react-datalist-option-selected' + (this.props.selectedClassName ? ' ' + this.props.selectedClassName : '')
        if (this.props.useNative) return (
            <option className={classes} value={this.props.option} />
        )
        return (
            <div className={classes} onClick={this.handleClick.bind(this)}>{this.props.option}</div>
        )
    }
    handleClick(e) {
        this.props.select(this.props.index)
    }
}
