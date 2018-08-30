import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import countyCodeData from './country_code.json';
import ReactAntPreSelectInput from 'react-ant-pre-select-input';

const DEFAULT_VALUE = ['86', '']

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.array,
    onChange: PropTypes.func
  };

  static defaultProps = {
    value: DEFAULT_VALUE,
    onChange: noop
  };
  /*===properties end===*/

  get items() {
    return countyCodeData.map(item => {
      return {
        value: item.code,
        label: `${item.country}(${item.code})`
      }
    })
  }

  constructor(inProps) {
    super(inProps);
    this.state = {
    };
  }

  render() {
    const { className, value, onChange, ...props } = this.props;
    return (
      <ReactAntPreSelectInput placeholder='请输入您的手机号码' items={this.items} value={value} onChange={onChange} {...props} />
    );
  }
}
