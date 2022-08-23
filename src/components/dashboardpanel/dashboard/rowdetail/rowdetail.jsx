import React from 'react'
import { style1, style2 } from '../../../../helper/style'

function RowDetail({ title, detail }) {
    return (
        <div>
            <p style={style1()} className="color-grey">{title}</p>
            <p style={style2()}>{detail}</p>
        </div>
    )
}
export default RowDetail