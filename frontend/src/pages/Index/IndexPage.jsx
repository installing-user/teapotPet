import {Component} from "react";
import './style/Header.scss';
import './style/Main.scss';
import menu from './style/img/menu.svg';
import menu_search from './style/img/menu_search.svg';
import search from './style/img/search.svg';
import user from './style/img/user.svg';
import basket from './style/img/basket.svg';
import {MdChevronRight, MdChevronLeft, MdExpandMore} from 'react-icons/md'

class IndexPage extends Component {
    render = () => {
        return (
            <div className='wrapper'>
                <header className='header'>
                    <div className='menu'>
                        <img src={menu} alt={''} className='menu__img'/>
                    </div>
                    <div className='logo'>Design Pet</div>
                    <div className='search__container'>
                        <div className='search__item'>
                            <img src={search} alt={''} className='search__menu-logo'/>
                            <input className='search__input' placeholder='Ищите технику и многое другое...'/>
                        </div>
                        <img src={menu_search} alt={''} className='menu-logo'/>
                    </div>
                    <div className='auth'>
                        <div className="auth__inner">
                            <img src={user} alt={''} className='user__image'/>
                        </div>
                        <a className='sign sign-in' href="hhtp://Google.com">Войти</a>
                    </div>
                    <div className='basket'>
                        <div className='basket__inner'>
                            <img src={basket} alt={''} className='basket__image'/>
                        </div>
                        <a className='basket__text' href="hhtp://Google.com">Корзина</a>
                    </div>
                </header>
                <main className='main'>
                    <div className='dropdown__container'>
                        <div className='container__content container__content_electronics'>
                            <button className="container__title">Электроника</button>
                            <div className="container__icon">
                                <MdExpandMore></MdExpandMore>
                            </div>
                            <div className="container__items">
                                <div className="container__item">1</div>
                                <div className="container__item">2</div>
                            </div>
                        </div>
                        <div className='container__content container__content_furniture'>
                            <button className="container__title">Мебель</button>
                            <div className="container__icon">
                                <MdExpandMore></MdExpandMore>
                            </div>
                            <div className="container__items">
                                <div className="container__item">1</div>
                                <div className="container__item">2</div>
                            </div>
                        </div>
                        <div className='container__content container__content_clothes'>
                            <button className="container__title">Одежда</button>
                            <div className="container__icon">
                                <MdExpandMore></MdExpandMore>
                            </div>
                            <div className="container__items">
                                <div className="container__item">1</div>
                                <div className="container__item">2</div>
                            </div>
                        </div>
                        <div className='container__content container__content_products'>
                            <button className="container__title">Продукты</button>
                            <div className="container__icon">
                                <MdExpandMore></MdExpandMore>
                            </div>
                            <div className="container__items">
                                <div className="container__item">1</div>
                                <div className="container__item">2</div>
                            </div>
                        </div>
                    </div>
                    <div className="product__container">
                        <div className='product'>
                            <div className='swap__left'>
                                <MdChevronLeft className='button__product'></MdChevronLeft>
                            </div>
                            <div className='swap__right'>
                                <MdChevronRight className='button__product'></MdChevronRight>
                            </div>
                        </div>
                    </div>
                    <div className='best__container'>
                        <div className='best__title'>Лучшие предложение на телефоны</div>
                        <div className="view__all">Посмотреть все</div>
                        <div className="best__items">
                            <div className="best__item">1</div>
                            <div className="best__item">2</div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default IndexPage;