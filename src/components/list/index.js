import React, { Component } from 'react';
import AddEntityForm from '../common/add-entity-form';
import ListOfTasks from './list-of-tasks';

export default class List extends Component {
  render() {
    return (
      <>
        <div className="add-from">
          <AddEntityForm />
        </div>

        <div className="todo-list">
          <ListOfTasks tasks={[]} />
        </div>

        <div class="delete-checked-wrapper">
          <button class="delete-checked-btn" disabled="true">
            Delete Checked
          </button>
        </div>
      </>
    );
  }
}
