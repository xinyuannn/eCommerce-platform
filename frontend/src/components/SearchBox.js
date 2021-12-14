import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchBox = ({ history }) => {
    const [keyword, setKeyword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword.trim()) {
            history.push(`/search/${keyword}`)
        } else {
            history.push('/')
        }
    }

    return (
        <Form onSubmit={submitHandler}>
            <Form.Control type='text' name='q' onChange={(e) => setKeyword(e.target.value)} placeholder='Search Products...' class="col-md-10"></Form.Control>
        </Form>
    )
}

export default SearchBox
