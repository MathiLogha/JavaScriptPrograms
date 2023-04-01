import React, { Component } from 'react';

class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Row 1, Column 1</td>
            <td>Row 1, Column 2</td>
            <td>Row 1, Column 3</td>
          </tr>
          <tr>
            <td>Row 2, Column 1</td>
            <td>Row 2, Column 2</td>
            <td>Row 2, Column 3</td>
          </tr>
          <tr>
            <td>Row 3, Column 1</td>
            <td>Row 3, Column 2</td>
            <td>Row 3, Column 3</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Table;
