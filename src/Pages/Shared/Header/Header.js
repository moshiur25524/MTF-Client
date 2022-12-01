import React from 'react';
import headerIcon from '../../../Features/Icons/icons8-makerbot-industries-an-american-desktop-3d-printer-manufacturer-25.png'
import CustomLink from '../../Shared/CustomLink/CustomLink';

const Header = () => {
    // const button = document.querySelector('#menu-button');
    // const menu = document.querySelector('#menu');


    // button.addEventListener('click', () => {
    //     menu.classList.toggle('hidden');
    // });
    return (
        <div>
            <header>
                <nav
                    class="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-white
        "
                >
                    <div>
                        <CustomLink to="/">
                            <img src={headerIcon} alt="" />
                        </CustomLink>
                    </div>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="menu-button"
                        class="h-6 w-6 cursor-pointer md:hidden block"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>

                    <div class="hidden w-full md:flex md:items-center md:w-auto" id="menu">
                        <ul
                            class="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
                        >
                            <li>
                                <CustomLink class="md:p-4 py-2 block hover:text-purple-400" to="/dashboard"
                                >Dashboard</CustomLink>
                            </li>
                            <li>
                                <CustomLink class="md:p-4 py-2 block hover:text-purple-400" to="/blogs"
                                >Blogs</CustomLink>
                            </li>
                            <li>
                                <CustomLink class="md:p-4 py-2 block hover:text-purple-400" to="/login"
                                >Login</CustomLink>
                            </li>
                            <li>
                                <CustomLink class="md:p-4 py-2 block hover:text-purple-400" to="/dashboard"
                                >Features</CustomLink>
                            </li>

                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;