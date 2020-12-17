import React, { Component } from 'react'
import { connect } from 'react-redux'
class Modal extends Component {
    handleMenu = () => {
        const { burger, menu } = this.props

        return Object.entries(burger).map(([itemName, itemValue], index) => {
            return (
                <tr key={index}>
                    <td>{itemName}</td>
                    <td>{itemValue}</td>
                    <td>{burger[itemName] * menu[itemName]}</td>
                </tr>
            )
        })
    }
    render() {
        const { total } = this.props
        return (
            <div>
                <div>
                    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Hóa đơn</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">

                                    <table className="w-100 ">
                                        <thead>
                                            <tr>
                                                <th>Thức ăn</th>
                                                <th>Số lượng</th>
                                                <th>Thành tiền</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.handleMenu()}
                                        </tbody>
                                        <tfoot style={{ borderTop: "1px solid black" }}>
                                            <tr>
                                                <td colSpan={2} style={{ fontWeight: "bold" }}>Tổng tiền</td>
                                                <td>{total}</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
export default connect(mapStateToProps)(Modal)