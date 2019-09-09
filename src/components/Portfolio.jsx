import React from 'react';
// import $ from 'jquery';
import '../css/textOverImage.css';
import { CreateImage } from '../helper/CreateImage.jsx';

import InfiniteCarousel from 'react-leaf-carousel';

// import portfolio images
import img0 from '../images/1.jpg';
import img1 from '../images/2.jpg';
import img2 from '../images/3.jpg';
import img3 from '../images/4.jpg';
import img4 from '../images/5.jpg';
import img5 from '../images/6.jpg';
import img6 from '../images/7.jpg';
import img7 from '../images/8.jpg';
import img8 from '../images/9.jpg';
import img9 from '../images/10.jpg';

const $ = window.jQuery;

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            img_info: null,
            curImg: null
        };
    }

    componentDidMount() {
        $.get("/img_info.json", img_info => {
            this.setState({ img_info });
        });
    }
    setImage = (url) => {
        this.setState({ curImg: url })
    }

    /* leaf carousel */
    render() {
        const { curImg } = this.state;
        const { img_info } = this.state;
        if (img_info) {
            return (
                <div style={{ paddingBottom: '100px' }}>
                    <h2
                        class='d-flex justify-content-center'
                        style={{ paddingTop: '70px', paddingBottom: '20px', color: 'rgb(75,75,75)' }}
                    >
                        Art Gallery</h2>
                    <InfiniteCarousel
                        breakpoints={[
                            {
                                breakpoint: 900,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 2,
                                },
                            },
                        ]}
                        animationDuration={500}
                        cycleInterval={3500}
                        dots={true}
                        showSides={true}
                        sidesOpacity={.5}
                        sideSize={.15}
                        slidesToScroll={1}
                        slidesToShow={4}
                        scrollOnDevice={true}
                        autoCycle={true}
                    >
                        <div>
                            {CreateImage(img0, img_info[0], 450)}
                            <button type="button" class="btn btn-primary"
                                data-toggle="modal" data-target="#exampleModalCenter"
                                onClick={() => this.setImage(img0)}>
                                Launch demo modal
                            </button>
                        </div>
                        {CreateImage(img1, img_info[1], 450)}
                        {CreateImage(img2, img_info[2], 450)}
                        {CreateImage(img3, img_info[3], 450)}
                        {CreateImage(img4, img_info[4], 450)}
                        {CreateImage(img5, img_info[5], 450)}
                        {CreateImage(img6, img_info[6], 450)}
                        {CreateImage(img7, img_info[7], 450)}
                        {CreateImage(img8, img_info[8], 450)}
                        {CreateImage(img9, img_info[9], 450)}
                    </InfiniteCarousel>

                    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body container">
                                    <img class="img-responsive" src={curImg} style={{maxHeight:'80vh'}}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else { return (""); }
    }

}
export default Portfolio;