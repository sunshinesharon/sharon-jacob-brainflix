import React from 'react';
import './Header.scss';
import logo from '../../assets/images/logo/BrainFlix-logo.svg'
import searchPrefixIcon from '../../assets/images/icons/search.svg';
import uploadIcon from '../../assets/images/icons/upload.svg';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const onClickLogo = () => {
        navigate('/home');
    }
    const navigateToUploadPage = () => {
        navigate('/upload-video')
    }

    return (
        <header>
            <div className='header'>
                <div className='header__logo'>
                    <img src={logo} alt='brain_flix_logo' onClick={() => onClickLogo()} />
                </div>
                <div className='desktop-header__menu'>
                    <div className='desktop-header__menu__search'>
                        <img src={searchPrefixIcon} alt='search-prefix-icon' />
                        <input type='text' placeholder='Search' />
                    </div>
                    <div className='desktop-header__menu__upload'>
                        <button onClick={() => navigateToUploadPage()}>
                            <img src={uploadIcon} alt='upload-btn-icon' />
                            <span>Upload</span>
                        </button>
                    </div>
                    <div className='desktop-header__menu__profile'>
                    </div>
                </div>
                <div className='mobile-header__menu'>
                    <div className='mobile-header__menu__container'>
                        <div className='mobile-header__menu__search'>
                            <img src={searchPrefixIcon} alt='search-prefix-icon' />
                            <input type='text' placeholder='Search' />
                        </div>
                        <div className='mobile-header__menu__profile'>
                        </div>
                    </div>
                    <div className='mobile-header__menu__upload'>
                        <button onClick={() => navigateToUploadPage()}>
                            <img src={uploadIcon} alt='upload-btn-icon' />
                            <span>Upload</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header