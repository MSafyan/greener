import React from 'react'
import locationIcon from '../../../../assets/images/location.png'
import departIcon from '../../../../assets/images/depart.png'
import line from '../../../../assets/images/line2.png'
import { style2, style6 } from '../../../../helper/style'

function Location2({ item }) {
    return (
        <div className='d-flex a-center j-bw' style={{ marginBottom: '8px' }}>
            <p style={style2()}>{item[0]?.Site_Name}</p>
            <img src={line} alt="" />
            <img src={departIcon} alt="" style={style6()} />
            <p style={style2()}>{item[1]?.Site_Name}</p>
            <img src={line} alt="" />
            <img src={locationIcon} alt="" style={style6()} />
            <p style={style2()}>{item[2]?.Site_Name}</p>
            <img src={line} alt="" />
            <p style={style2()}>{item[3]?.Site_Name}</p>
        </div>
    )
}

export default Location2