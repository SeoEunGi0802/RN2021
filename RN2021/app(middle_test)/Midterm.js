/* 답 */
import React, { Component } from 'react'
import DataTest from './DataTest'

class Midterm extends Component {
    constructor() {
        super()
        this.state = {
            id: 201930113,
            name: "서은기"
        }
    }
    render() {
        const { id, name } = this.state
        return (
            <DataTest
                id={id}
                name={name}
                foo={[1, 2, 3, 4, 5]}
            />
        )
    }
}
export default Midterm