import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AppContext } from '../App';
import Item from './Item';
import axios from 'axios';
import '../App.css';

const Home = (props) => {


    const onAddOverlay = (obj) => {
        try {
            if (props.overlayItems.find(item => Number(item.id) === Number(obj.id))) {
                axios.delete(`http://localhost:3001/overlay/${obj.id}`);
                props.setoverlayItems((over) => over.filter(item => Number(item.id) !== Number(obj.id)))
            }
            else {
                axios.post('http://localhost:3001/overlay', obj);
                props.setoverlayItems([...props.overlayItems, obj]);
            }
        }
        catch {
            alert('Error')
        }
    };

    const onAddLike = (obj) => {
        try {
            if (props.likedItems.find(item => Number(item.id) === Number(obj.id))) {
                axios.delete(`http://localhost:3001/liked/${obj.id}`);
                props.setLikedItems((like) => like.filter(item => Number(item.id) !== Number(obj.id)))
            }
            else {
                axios.post('http://localhost:3001/liked', obj);
                props.setLikedItems([...props.likedItems, obj]);
            }
        }
        catch {
            alert('Error')
        }
    }

    return (
        <div>
            <div className='cont main'>
                <div className='about'>
                    <img className='about-photo' src='../images/vinyl-market.jpg' />
                    <div className='about-text'>
                        <p style={{ fontSize: '18px' }}>Магазин виниловых "HORIZONT VINYL" предлагает широкий ассортимент редких и
                            коллекционных записей на виниле, собранных из различных стран по всему миру. Этот магазин является идеальным
                            местом для любителей музыки, ищущих уникальные и трудно доступных виниловых пластинок, которые могут быть недоступны
                            в обычных музыкальных магазинах. Приходите к нам у нас всегда играют виниловые пластинки и подают какао!
                        </p>
                        <p style={{ fontSize: '20px' }}>Работаем с 10:00 до 22:00 каждый день без выходных.</p>
                        <p style={{ fontSize: '20px' }}>Проживаем в Москве на ул. Музыкальная в доме номер 7</p>
                        {/* метро: Полежаевская, Хорошёвская, Хорошёво */}
                        <div className='met'>
                            <img className='metro' src='../images/3.png' />
                            <p style={{ fontSize: '20px' }}>Строгино</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='cart'>
                {
                    props.item.slice(0, 8).map(obj => {
                        return (
                            <Item
                                key={obj.id}
                                id={obj.id}
                                myid={obj.myid}
                                name={obj.name}
                                description={obj.description}
                                price={obj.price}
                                image={obj.image}

                                onPlus={(cartObj) => onAddOverlay(cartObj)}
                                onLike={(cartObj) => onAddLike(cartObj)}
                            />
                        )
                    })
                }</div>
            <div className='email'>
                <form>
                    <label className="form-label">
                        <p>Имя:</p>
                        <input type="text" className="form-input" style={{ width: '275px' }} />
                    </label>
                    <label className="form-label">
                        <p>Email:</p>
                        <input type='email' className="form-input" style={{ width: '275px', }} />
                    </label>
                    <label className="form-label">
                        <p>Сообщение:</p>
                        <textarea className="form-textarea" style={{ width: '275px', height: '45px', resize: 'none'}}></textarea>
                    </label>
                    <button type="submit" className="form-button">Отправить</button>
                </form>
            </div>

        </div>
    )
}

export default Home;