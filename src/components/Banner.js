import React from 'react';
import './banner.css';
import logo from "../images/logo_text.png"

const Banner = () => {
  return (
    <div class="bo-sec1">
        <div class="bo-sec1-left">
            <div class="bo-sec1-left-inner">
                {/* <div class="bo-sec1-left-p">ARCHITECTURE / CONSTRUCTION / REAL ESTATE</div>
                <div class="bo-sec1-left-h">PREMIUM <b>REAL ESTATE </b> <br />DEVELOPERS</div> */}

                <div class="bo-sec1-left-p">FERTILISERS / PESTICIDES / QUICK SERVICE</div>
                <div class="bo-sec1-left-h">PROFESSIONAL <b>AGRICULTURE </b> <br />SUPPLIER</div>
            </div>
        </div>

        <div class="bo-sec1-right">
            <div class="bo-sec1-right-inner">
                <div class="bo-sec1-right-top">
                    <div class="bo-sec1-right-box1 bo-sec1-right-box"></div>
                    <div class="bo-sec1-right-box2 bo-sec1-right-box"></div>
                    <div class="bo-sec1-right-box3 bo-sec1-right-box">
                        <div class="bo-sec1-right-box-inner">
                            <img className='logo' src={logo}></img>
                        </div>
                    </div>
                </div>

                <div class="bo-sec1-right-medium">
                    <div class="bo-sec1-right-box4 bo-sec1-right-box"></div>
                    <div class="bo-sec1-right-box5 bo-sec1-right-box">
                        <div class="bo-sec1-right-box-inner">
                            <div class="bo-sec1-right-box5-inner"></div>
                        </div>
                    </div>
                    <div class="bo-sec1-right-box6 bo-sec1-right-box"></div>
                </div>

                <div class="bo-sec1-right-bottom">
                    <div class="bo-sec1-right-box7 bo-sec1-right-box"></div>
                    <div class="bo-sec1-right-box8 bo-sec1-right-box"></div>
                    <div class="bo-sec1-right-box9 bo-sec1-right-box"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner