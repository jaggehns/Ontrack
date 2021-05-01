import React from "react";

function Table() {
  return (
    <div className="table__container">
      <div className="table">
        <table>
          <tr>
            <th>
              <h5>NAME</h5>
            </th>
            <th>
              <h5>AGE</h5>
            </th>
            <th>
              <h5>PHONE NUMBER</h5>
            </th>
          </tr>
          <tr>
            <td className="alignleft">Deveeprasad Archarya</td>
            <td className="aligncenter">12</td>
            <td className="alignright">+6012 233 4422</td>
          </tr>
          <tr>
            <td className="alignleft">Nout Golstein</td>
            <td className="aligncenter">23</td>
            <td className="alignright">+6012 233 4211</td>
          </tr>
          <tr>
            <td className="alignleft">Jaspreet Bhamrai</td>
            <td className="aligncenter">44</td>
            <td className="alignright">+6011 322 8899</td>
          </tr>
          <tr>
            <td className="alignleft">Gatsharan Sangrota</td>
            <td className="aligncenter">13</td>
            <td className="alignright">+603 8899 2667</td>
          </tr>
          <tr>
            <td className="alignleft">Emilee Simchenko</td>
            <td className="aligncenter">16</td>
            <td className="alignright">+6012 779 3667</td>
          </tr>
          <tr>
            <td className="alignleft">Caroline Bloeme</td>
            <td className="aligncenter">21</td>
            <td className="alignright">+6011 367 6637</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Table;
