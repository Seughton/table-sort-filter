import React, { Component } from 'react';

import Table from '../Table/index';
import dataConfig from '../TableData/dataConfig';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dataConfig,
      columnsType: dataConfig.columns[0].type,
      filtering: dataConfig.columns[0].filtering,
      sorting: dataConfig.columns[0].sorting,
      sortedArr: null,
      searchValue: ''
    }
  }

  sortAge = () => {
      let arrCopy = this.state.data.cells[0].value;
    arrCopy.sort((obj1, obj2)=> obj1.age - obj2.age);
    this.setState({
      sortedArr: arrCopy
    })
  };

  sortName = () => {
    let arrCopy = this.state.data.cells[0].value;
    arrCopy.sort((obj1, obj2)=> obj1.firstName.localeCompare(obj2.firstName));
    this.setState({
      sortedArr: arrCopy
    })
  };

  sortLastName = () => {
    let arrCopy = this.state.data.cells[0].value;
    arrCopy.sort((obj1, obj2)=> obj1.lastName.localeCompare(obj2.lastName));
    this.setState({
      sortedArr: arrCopy
    })
  };

  dataSearch = e => {
    const searchValue = e.target.value.toLowerCase();
    this.setState({ searchValue }, () => this.filterList());
  };

  filterList = () => {
    let data = this.state.data.cells[0].value;
    let searchVal = this.state.searchValue;

    data = data.filter((item) => {
      return (
          item.lastName.toLowerCase().indexOf(searchVal) !== -1 ||
          item.firstName.toLowerCase().indexOf(searchVal) !== -1 ||
          item.age.toString().toLowerCase().indexOf(searchVal) !== -1
      )
    });
    console.log(data)
    this.setState({ sortedArr: data });
  };

  render() {
  console.log(this.state.data.cells[0].value, this.state.sortedArr)
    return (
      <>
        {this.state.data.columns[0].filtering ?
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <div className="searchbar">
              <input
                value={this.state.searchValue}
                type="text"
                className="searchbarInput"
                placeholder="Search..."
                onChange={this.dataSearch}
              />
            </div>
          </div>
          : null}
        <table style={{width: '80%', margin: '0 auto'}}>
          <thead>
          <tr style={this.state.data.columns[0].style}>
            <th onClick={this.state.sorting ? this.sortName : null}>Firstname</th>
            <th onClick={this.state.sorting ? this.sortLastName : null}>Lastname</th>
            <th onClick={this.state.sorting ? this.sortAge : null}>Age</th>
          </tr>
          </thead>

           <Table
           data = {this.state.data}
           rowStyle={ this.state.data.columns[0].style}
           sortedArr={this.state.sortedArr}
           />

        </table>
      </>
    );
  }
}

export default App;
