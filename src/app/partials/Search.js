import React from 'react'

const Search = (props) => {
    return (
        <div id="search" className="row container">
            <div className="input-field col s12">
                <i className="material-icons prefix">search</i>
                <input onChange={props.filterUsers} id="icon_prefix" type="text" className="validate" />
                <label htmlFor="icon_prefix">Search Users</label>
            </div>
        </div>
    )
}

export default Search