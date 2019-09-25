import React from 'react'
import data from '../items.json'
// import styled from '@emotion/styled-base';

export default () => {
    return (
        <>
            <div>
                {JSON.stringify(data, null, 2)}
            </div>
            <br />

            <div>
                {data ? data.map((item, key) => (
                    <>
                        <div>
                            <h3>Name: <h5>{item.name}</h5></h3>
                        </div>
                        <div>
                            <h3>Age: <h5>{item.age}</h5></h3>
                            <p></p>
                        </div>
                        <div>
                            <h3>Top Car Choice: <h5>{item.cars[0]}</h5>
                            </h3>


                        </div>
                    </>
                )) : null}
            </div>
        </>
    )
}


