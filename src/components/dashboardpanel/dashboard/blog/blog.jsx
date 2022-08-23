import React, { useState } from 'react'
import { style1, style2, style4 } from '../../../../helper/style'
import { useCallback } from 'react';
import Api from '../../../../api/api';
import { useEffect } from 'react';
import { blogAnimationTemp, blogStyle_ } from '../../../../data/atom';
import { motion } from 'framer-motion';
import { useRecoilState } from 'recoil';
import HeaderCont2 from '../headercont/headercont2';

function Blog() {
    const [display, setDisplay] = useState(false);
    const [blogData, setBlogData] = useState([]);
    const [blogAnimationTemp_, setBlogAnimationTemp] = useRecoilState(blogAnimationTemp);
    const [blogStyle, setBlogStyle] = useRecoilState(blogStyle_);
    const click = () => {
        let overlay = document.getElementById("dashboard-overlay");
        let parent = document.getElementById("dashboard-body-2-3");
        let child = document.getElementById("dashboard-body-blog");
        setDisplay(!display)
        if (!display) {
            overlay.style.display = "block";
            child.style.left = parent.offsetLeft + 50 + "px"
            child.style.width = parent.offsetWidth + "px"
            child.style.bottom = `calc(100vh - ${parent.offsetHeight + parent.offsetTop}px)`
            setBlogStyle(parent.offsetHeight + "px")
            setBlogAnimationTemp(true)
        } else {
            setBlogAnimationTemp(true)
            setTimeout(() => {
                overlay.style.display = "none";
                setBlogAnimationTemp(false)
            }, 300);
        }
    }

    useEffect(() => {
        document.getElementById('dashboard-body-blog').style.position = 'initial';
        setBlogAnimationTemp(false);
    }, [setBlogAnimationTemp])

    const offerAnimate = {
        hidden: {
            transition: {
                duration: 0.3,
            }, height: blogStyle, zIndex: 6,
            position: blogAnimationTemp_ ? 'fixed' : 'initial',
        },
        show: {
            transition: {
                duration: 0.3
            }, position: 'fixed',
            zIndex: 6, height: '93vh'
        }
    }

    const getBlogs = useCallback(async () => {
        let res = await Api.getBlogs();
        if (res.status === 200) { setBlogData(res.data.data) }
        else { setBlogData([]) }
    }, [setBlogData])

    useEffect(() => {
        getBlogs()
    }, [getBlogs])

    return (
        <div className='dashboard-body-2' id='dashboard-body-2-3'>
            <motion.div className='dashboard-mid-child dashboard-cont' id="dashboard-body-blog"
                animate={display ? offerAnimate.show : offerAnimate.hidden}>
                <HeaderCont2
                    arrow={display}
                    links={false}
                    click={click}
                    title={
                        <p className='dashboard-head-title'>Actualites</p>
                    }
                />
                <div className='task-body '>
                    <div className='task-body-child task-body-scroll '
                        style={{ overflowY: display ? 'auto' : 'hidden' }}>
                        {blogData?.map(item => (
                            <BlogCard item={item} />
                        ))}
                    </div>
                    {!display && <div onClick={click} className="voir-plus table-strip table-strip-2 d-flex j-center a-center"
                        style={style4()}><p style={{ fontSize: '14px', cursor: 'pointer' }}>Voir Plus</p>
                    </div>}
                </div>
            </motion.div>
        </div>
    )
}

function BlogCard({ item }) {
    return (
        <div key={item.id} className="table-strip d-flex j-bw a-center"
            style={{ height: '137px', padding: '15px' }}>
            <div className='blog-img'>
                <img src={item.imgUrl} alt="" />
            </div>
            <div className='blog-content'>
                <div>
                    <p style={style1()} className="color-grey">{item.type}</p>
                    <p style={style2()}>{item.title}</p>
                    <p style={style1()} className="color-grey">{item.description}</p>
                </div>
                <p className="color-blue w-45" style={{
                    fontSize: '11px',
                    fontWeight: 400
                }}>Lire plus</p>
            </div>
        </div>
    )
}

export default Blog