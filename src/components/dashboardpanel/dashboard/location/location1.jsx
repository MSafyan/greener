import React from 'react'
import locationIcon from '../../../../assets/images/location.png'
import departIcon from '../../../../assets/images/depart.png'
import line from '../../../../assets/images/line.png'
import { style2, style5, style6 } from '../../../../helper/style'

function Location1({ item }) {
    return (
        <div className='d-flex a-center j-bw' style={{ marginBottom: '8px' }}>
            <img src={departIcon} alt="" style={style6()} />
            <p style={style2()}>{item[0]?.Site_Name}</p>
            <img src={line} alt="" style={style5()} />
            <img src={locationIcon} alt="" style={style6()} />
            <p style={style2()}>{item[1]?.Site_Name}</p>
        </div>
    )
}

export default Location1