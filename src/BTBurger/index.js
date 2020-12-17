import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from './Modal'
import "./Burger.css"
class Burger extends Component {
    breadMid = () => {
        const { burger } = this.props
        return Object.entries(burger).map(([itemName, itemValue], index) => {
            const content = []
            for (let i = 0; i < itemValue; i++) {
                content.push(<div key={i} className={itemName}></div>)
            }
            return content
        })
    }
    handleMenu = () => {
        const { menu, burger } = this.props
        return Object.entries(menu).map(([itemName, price], index) => {
            return (
                <tr key={index}>
                    <td>{itemName}</td>
                    <td style={{ display: "flex", justifyContent: "space-evenly" }}>
                        <button className=" btn btn-success" onClick={() => { this.props.changeNumber(itemName, 1) }}>+</button>
                        <button className=" btn btn-danger" onClick={() => { this.props.changeNumber(itemName, -1) }}>-</button>
                    </td>
                    <td>{burger[itemName]}</td>
                    <td>{price * burger[itemName]}</td>
                </tr>
            )
        })
    }
    render() {
        const { total } = this.props
        return (
            <div className="container">
                <h1 className="text-center ">BÀI TẬP BURGER CYBERSOFT</h1>
                <p className="text-center mb-5">*Không bán bánh không có nhân nha :D</p>
                <div className="row">
                    <div className="col-7">
                        <div className="breadTop"></div>
                        {this.breadMid()}
                        <div className="breadBottom"></div>
                    </div>
                    <div className="col-5">
                        <h3>Chọn thức ăn</h3>
                        <table className="text-center w-100 mt-4">
                            <thead>
                                <tr>
                                    <th>Thức ăn</th>
                                    <th></th>
                                    <th>Số lượng</th>
                                    <th>Giá</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.handleMenu()}
                            </tbody>
                            <tfoot>
                                <tr style={{ fontWeight: "bold" }}>
                                    <td colSpan="2"></td>
                                    <td>Tổng tiền</td>
                                    <td>{total}</td>
                                </tr>
                                <tr>
                                    <td colSpan="3"></td>
                                    <td>
                                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                            Thanh toán
                                        </button>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
                <Modal />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        burger: state.burgerReducer.burger,
        menu: state.burgerReducer.menu,
        total: state.burgerReducer.total
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeNumber: (itemName, number) => {
            const action = {
                type: "CHANGE_NUMBER",
                value: itemName,
                amount: number,
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Burger)