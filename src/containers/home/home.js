import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../../components/layout/layout';
import Item from '../../components/item/item';
import Modal from '../../components/ui/modal/modal';
import AddItem from '../../components/addItem/add';
import Button from '../../components/ui/button/button';
import './home.css';
import * as actions from '../../store/actions/index';

class Home extends Component {

    state = {
        modalStatus: false
    }

    componentDidMount() {
        this.props.onFetchItems();
    }

    toggleModal = () => {
        this.setState({ modalStatus: !this.state.modalStatus });
    }

    closeModal = () => {
        this.setState({ modalStatus: false });
    }

    addItem = (item) => {
        this.setState({ modalStatus: false });
        this.props.onAddItem(item);
    }

    render() {
        return (
            <Layout {...this.props}>
                <div className="home-page">
                    <div className="container">
                        <div className="item-content">
                            {this.props.items.length > 0 ? (
                                <div data-testid="itemContainer">
                                    {this.props.items.map((item, itemIndex) => {
                                        return (<Item key={itemIndex} {...item} changeStatus={(id) => this.props.onChangeItemStatus(id)} />);
                                    })}
                                </div>
                            ) : (
                                    <div className="item-content">
                                        <p>Please add items</p>
                                    </div>
                                )}
                        </div>
                        <>
                            <div className="w-100 txt-center">
                                <Button data-testid="addBtn" btnClass="btn-success" clicked={() => this.toggleModal()}>Add Item</Button>
                            </div>
                            {this.state.modalStatus && (
                                <Modal show={this.state.modalStatus} modalClosed={this.closeModal}>
                                    <AddItem addItem={(item) => this.addItem(item)} modalClosed={this.closeModal} />
                                </Modal>
                            )}
                        </>
                    </div>
                </div>
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.item.items,
        loading: state.item.loading,
        error: state.item.error,
        isAuthenticated: state.auth.token !== null,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchItems: () => dispatch(actions.fetchItems()),
        onAddItem: (item) => dispatch(actions.addItem(item)),
        onChangeItemStatus: (id) => dispatch(actions.changeItemStatus(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);