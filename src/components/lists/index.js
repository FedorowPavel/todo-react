/* eslint-disable */

import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addList, deleteList, getLists } from '../../store/lists/actions';
import AddEntityForm from '../common/add-entity-form';
import ListOfLists from './list-of-lists';
import Loader from '../common/loader';
import { ActionStatus } from '../../constants/action-status';
import EntityType from '../../constants/entity-type';
import { deleteListTask } from '../../store/tasks/actions';
import { withAuth0 } from '@auth0/auth0-react';
import { useParams } from 'react-router';

class Lists extends Component {
  componentDidMount() {
    const {
      getLists,
      auth0: { user },
    } = this.props;

    getLists(user.sub);
  }

  handleAddlist = (newList) => {
    const {
      auth0: { user },
      addList,
    } = this.props;

    addList({ ...newList, userId: user.sub });
  };

  shouldComponentUpdate() {
    return true;
  }

  render() {
    const { lists, addList, deleteList, status } = this.props;

    return (
      <>
        <div className="add-form">
          <AddEntityForm onSubmit={this.handleAddlist} type={EntityType.LIST} />
        </div>

        <div className="list-of-lists">
          <ListOfLists lists={lists} onDelete={deleteList} />
        </div>
        {status === 'loading' && <Loader />}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    lists: state.lists.lists,
    status: state.lists.status,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addList: (list) => dispatch(addList(list)),
    deleteList: (id) => dispatch(deleteList(id)),
    getLists: (userId) => dispatch(getLists(userId)),
  };
}

export default withAuth0(connect(mapStateToProps, mapDispatchToProps)(Lists));

Lists.propTypes = {
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  addList: PropTypes.func.isRequired,
  deleteList: PropTypes.func.isRequired,
  getLists: PropTypes.func.isRequired,
  status: PropTypes.oneOf([
    ActionStatus.IDLE,
    ActionStatus.LOADING,
    ActionStatus.SUCCEEDED,
    ActionStatus.FAILED,
  ]).isRequired,
};
