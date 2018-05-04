import React, { Component } from 'react';
import users from '../../services/Users';
import Header from '../partials/Header';
import Search from '../partials/Search';
import UsersList from '../users/UsersList';
import Loading from '../partials/Loading';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: false,
      viewButton: "view_module",
      users: [],
      loading: false
    }
    this.changeView = this.changeView.bind(this)
    this.refreshUsers = this.refreshUsers.bind(this)
    this.filterUsers = this.filterUsers.bind(this)
  }

  componentDidMount() {
    if (localStorage.getItem('data')) {
      this.setState({
        users: JSON.parse(localStorage.getItem('data')),
        grid: (localStorage.getItem('grid') === "true"),
        viewButton: (localStorage.getItem('grid')) ? "view_list" : "view_module",
      })
    } else {
      this.refreshUsers()
    }
  }

  changeView() {
    this.setState((prevState, props) => {
      localStorage.setItem('grid', !prevState.grid)
      return {
        grid: !prevState.grid,
        viewButton: (prevState.grid) ? "view_module" : "view_list"
      }
    })
  }

  refreshUsers() {
    this.setState({ loading: true });
    users.getData()
      .then(res => {
        this.setState({
          users: res,
        })
        this.setState({ loading: false });
        localStorage.setItem('data', JSON.stringify(res))
      })
  }

  filterUsers(event) {
    const query = event.target.value;
    this.setState((prevState, props) => {
      return {
        users: JSON.parse(localStorage.getItem('data')).filter((user) => user.fullName.toLowerCase().includes(query.toLowerCase()))
      }
    })
  }

  printUserList() {
    return (
        <React.Fragment>
            <Search filterUsers={this.filterUsers}/>
            <UsersList grid={this.state.grid} users={this.state.users}/>
        </React.Fragment>
    )
  }

  render() {
    return (
      <React.Fragment>
        <Header title="Bit Persons" refreshUsers={this.refreshUsers} changeView={this.changeView} viewButton={this.state.viewButton} buttonDisplay={true} />
        {(this.state.loading) ?
        <Loading /> :
        this.printUserList()}
      </React.Fragment>
    );
  }
}

export default Home;
