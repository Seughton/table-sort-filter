import React, { Component } from 'react';
import {rowStyles} from '../TableData/dataConfig';

class Table extends Component {

    render() {
      console.log(this.props.sortedArr)
        return (
            <>
              <tbody>
              {!this.props.sortedArr ? this.props.data.cells[0].value.map( (item, i) => {
                return(
                  <tr key={i} >

                    <td style={rowStyles}> {item.firstName}</td>
                    <td style={rowStyles}>{item.lastName}</td>
                    {/*{this.props.data.columns[0].type !== 'string' ?*/}
                      {/*<td style={rowStyles}>{item.age}</td>:*/}
                    {/*''}*/}
                    <td style={rowStyles}>{item.age}</td>

                  </tr>
                )
              } ): this.props.sortedArr.map((item, i) => {
                return(
                  <tr key={i} >
                    <td style={rowStyles}> {item.firstName}</td>
                    <td style={rowStyles}>{item.lastName}</td>
                    {/*{this.props.data.columns[0].type !== 'string' ?*/}
                      {/*<td style={rowStyles}>{item.age}</td>:*/}
                      {/*''}*/}
                    <td style={rowStyles}>{item.age}</td>
                  </tr>
                )
              })}
              </tbody>
            </>
        );
    }
}

export default Table;
