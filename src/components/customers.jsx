import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';
class Customers extends Component {
    constructor(props){
        super(props);
        this.state = {customers : []}
    }
componentDidMount(){
    this.fetchCustomer();
}
fetchCustomer = () => {
    fetch('https://customerrest.herokuapp.com/api/customers')
    .then((response) => response.json()) 
    .then((responseData) => { 
      this.setState({ 
        customers: responseData.content,
      }); 
    })
    .catch(err => console.error(err)); 

}
onDelClick = (link) => {
    fetch(link, {method: 'DELETE'})
    .then(res => this.fetchCustomer())
    .catch(err => console.error(err)) 
  }
    render() {
        const columns = [{
            Header: 'Firstname',
            accessor: 'firstname'
          }, {
            Header: 'Lastname',
            accessor: 'lastname'
          }, {
            Header: 'Address',
            accessor: 'streetaddress'
          }, {
            Header: 'City',
            accessor: 'city'
          }, {
            Header: 'Email',
            accessor: 'email'
          },
          {
            Header: 'Phone',
            accessor: 'phone'
        },
        {
            id: 'delbutton',
            sortable: false,
            filterable: false,
            width: 100,
            accessor: 'links[0].href',
            Cell: ({value}) => (<button onClick={()=>{this.onDelClick(value)}}>Delete</button>)
          }
        ]
        return (
            <div>
                <ReactTable 
                data = {this.state.customers} 
                columns = {columns} 
                filterable = {true}
                defaultPageSize = {5}/>
            </div>
        );
    }
}

export default Customers;