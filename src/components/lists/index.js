import { connect } from "react-redux";
import React, { Component } from "react";
import { addList, deleteList, getLists } from "../../store/lists/actions";
import AddListForm from "./add-list-form";
import ListOfLists from "./list-of-lists";
import Loader from "../common/loader";

class Lists extends Component {
  componentDidMount() {
    const { getLists } = this.props;

    getLists();
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    const { lists, addList, deleteList, status } = this.props;
    return (
      <>
        <div className="add-form">
          <AddListForm onSubmit={addList} />
        </div>

        <div className="list-of-lists">
          <ListOfLists lists={lists} onDelete={deleteList} />
        </div>
        {status === "loading" && <Loader />}
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
    getLists: () => dispatch(getLists()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
