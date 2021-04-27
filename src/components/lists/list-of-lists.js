import React, { Component } from "react";

export default class ListOfLists extends Component {
  render() {
    const { lists, onDelete } = this.props;

    return (
      <ol>
        {lists.map((list) => (
          <li key={list.id}>
            <a href="#">{list.name}</a>
            <button className="delete-btn" onClick={() => onDelete(list.id)}>
              <i className="far fa-trash-alt fa-fw"></i>
            </button>
          </li>
        ))}
      </ol>
    );
  }
}
