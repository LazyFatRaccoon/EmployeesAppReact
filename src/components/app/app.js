import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../emloyees-list/employees-list";
import EmployeesAddForm from "../emloyees-add-form/emloyees-add-form";
import employeesData from "../../employeesData";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: employeesData,
      term: "",
      filter: "all",
    };
    this.onUpdateSearch = this.onUpdateSearch.bind(this);

    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      //const index = data.findIndex(elem => elem.id === id)
      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);
      // const newArr = [...before, ...after];

      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = (name, salary) => {
    const newId = ++this.maxId;
    this.setState(({ data }) => {
      //const newItem = ;

      const newArr = [
        ...data,
        {
          name: name,
          salary: salary,
          increase: false,
          liked: false,
          id: newId,
        },
      ];
      return {
        data: newArr,
      };
    });
  };

  onToggleProp = (id, prop) => {
    // this.setState(({ data }) => {
    //     const index = data.findIndex(elem => elem.id === id);
    //     const old = data[index];
    //     const newItem = { ...old, increase: !old.increase };
    //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
    //     return {
    //         data: newArr
    //     }
    // })
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };
  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      // return item.name === term;
      return item.name.indexOf(term) > -1;
    });
  };

  onUpdateSearch(term) {
    this.setState({ term });
  }
  filterPost = (items, filter) => {
    switch (filter) {
      case "liked":
        return items.filter((item) => item.liked);

      case "salaryMoreThen1000":
        return items.filter((item) => item.salary > 1000);

      default:
        return items;
    }
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { data, term, filter } = this.state;
    const totalNumberOfEmployees = this.state.data.length;
    const numberOfEmploeeWithBonus = this.state.data.filter(
      (item) => item.increase
    ).length;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter);

    return (
      <div className="app">
        <AppInfo
          numberOfEmploeeWithBonus={numberOfEmploeeWithBonus}
          totalNumberOfEmployees={totalNumberOfEmployees}
        />
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>
        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
