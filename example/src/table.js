/**!
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
 
class Table extends React.Component {
  render() {
    var rows = this.props.data.map(function (row,rowID) {
      var cells = row.map(function(cell,cellID) {
        return <td key={cellID}>{cell}</td>;
      });

      return <tr key={rowID}>{cells}</tr>;
    });

    return (
      <table>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}
