import React, {useRef} from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import prev_icon from '../../assets/prev-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
import user_5 from '../../assets/user-5.png'
import user_6 from '../../assets/user-6.png'
import user_7 from '../../assets/user-7.png'
import user_8 from '../../assets/user-8.png'
import user_9 from '../../assets/user-9.png'
import user_10 from '../../assets/user-10.png'

const Testimonials = () => {
    const slider = useRef();
    let tx = 0;
    const slideForward = () =>{
        if (tx > -80) {
            tx -= 10;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
     const slideBackward = () =>{
        if (tx < 0) {
            tx += 10;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
  return (
    <div className='testimonials'>
        <img src={next_icon} className='next-btn' onClick={slideForward}></img>
        <img src={prev_icon} className='prev-btn' onClick={slideBackward}></img>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1}></img>
                            <div>
                                <h3>Rose Jackson</h3>
                                <span>My University, Ghana</span>
                            </div>
                        </div>
                        <p>Choosing to persue my degree at (My University) was one of the best decisions I've ever nade. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2}></img>
                            <div>
                                <h3>Beatrice Morris</h3>
                                <span>My University, Ghana</span>
                            </div>
                        </div>
                        <p>Choosing to persue my degree at (My University) was one of the best decisions I've ever nade. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3}></img>
                            <div>
                                <h3>Lily Ann</h3>
                                <span>My University, Ghana</span>
                            </div>
                        </div>
                        <p>Choosing to persue my degree at (My University) was one of the best decisions I've ever nade. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4}></img>
                            <div>
                                <h3>Jack Frost</h3>
                                <span>My University, Ghana</span>
                            </div>
                        </div>
                        <p>Choosing to persue my degree at (My University) was one of the best decisions I've ever nade. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_5}></img>
                            <div>
                                <h3>Mary Kyles</h3>
                                <span>My University, Ghana</span>
                            </div>
                        </div>
                        <p>Choosing to persue my degree at (My University) was one of the best decisions I've ever nade. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_6}></img>
                            <div>
                                <h3>Jack Scott</h3>
                                <span>My University, Ghana</span>
                            </div>
                        </div>
                        <p>Choosing to persue my degree at (My University) was one of the best decisions I've ever nade. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_7}></img>
                            <div>
                                <h3>Ali</h3>
                                <span>My University, Ghana</span>
                            </div>
                        </div>
                        <p>Choosing to persue my degree at (My University) was one of the best decisions I've ever nade. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_8}></img>
                            <div>
                                <h3>Jennifer Ashley</h3>
                                <span>My University, Ghana</span>
                            </div>
                        </div>
                        <p>Choosing to persue my degree at (My University) was one of the best decisions I've ever nade. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_9}></img>
                            <div>
                                <h3>Victoria Fesser</h3>
                                <span>My University, Ghana</span>
                            </div>
                        </div>
                        <p>Choosing to persue my degree at (My University) was one of the best decisions I've ever nade. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_10}></img>
                            <div>
                                <h3>Micheal G</h3>
                                <span>My University, Ghana</span>
                            </div>
                        </div>
                        <p>Choosing to persue my degree at (My University) was one of the best decisions I've ever nade. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials
