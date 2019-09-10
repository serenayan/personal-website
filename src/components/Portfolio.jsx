import React from 'react';
// import $ from 'jquery';
import '../css/textOverImage.css';
import '../css/img_modal.css';
import '../css/carousel.css';

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
            currImg: null,
        };
        this.CreateImage = this.CreateImage.bind(this);
    }

    CreateImage(imageURL, detail, height) {

        const imgStyle = {
            backgroundImage: 'url(' + imageURL + ')',
            height: height,
        };

        const dataText =
            detail.title + '\n\n' +
            detail.ctgry + '\n' +
            detail.date + '\n' +
            detail.media + '\n' +
            detail.info;

        return (
            <div
                data-toggle="modal" data-target="#exampleModalCenter"
                onClick={() => this.setCurr(imageURL)}>
                <div class="textOverImage"
                    style={imgStyle}
                    data-text={dataText} >
                </div>
            </div>
        );
    }

    componentDidMount() {
        $.get("/img_info.json", img_info => {
            this.setState({ img_info });
        });
    }

    setCurr = (url) => {
        this.setState({ currImg: url, autoCycleState: false });
    }

    /* leaf carousel */
    render() {
        let { currImg, img_info} = this.state;
        if (img_info) {
            return (
                <div style={{ paddingBottom: '100px' }}>
                    <h2
                        class='d-flex justify-content-center'
                        style={{ paddingTop: '70px', paddingBottom: '20px', color: 'rgb(75,75,75)' }}
                    >
                        Art Gallery</h2>
                    <InfiniteCarousel
                        id='carousel'
                        breakpoints={[
                            {
                                breakpoint: 900,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 2,
                                },
                            },
                        ]}
                        autoCycle={false}
                        cycleInterval={3500}

                        animationDuration={500}
                        dots={true}
                        showSides={true}
                        sidesOpacity={.5}
                        sideSize={.15}
                        slidesToScroll={1}
                        slidesToShow={4}
                        scrollOnDevice={true}
                    >
                        {this.CreateImage(img0, img_info[0], 450)}
                        {this.CreateImage(img1, img_info[1], 450)}
                        {this.CreateImage(img2, img_info[2], 450)}
                        {this.CreateImage(img3, img_info[3], 450)}
                        {this.CreateImage(img4, img_info[4], 450)}
                        {this.CreateImage(img5, img_info[5], 450)}
                        {this.CreateImage(img6, img_info[6], 450)}
                        {this.CreateImage(img7, img_info[7], 450)}
                        {this.CreateImage(img8, img_info[8], 450)}
                        {this.CreateImage(img9, img_info[9], 450)}
                    </InfiniteCarousel>


                    <div class="modal fade" id="exampleModalCenter" tabindex="-1"
                        role="dialog" aria-labelledby="exampleModalCenterTitle"
                        aria-hidden="true" data-backdrop="true"
                        ref={ref => this.modalRef = ref}>
                        <div class="modal-dialog" role="document">
                            <img class="img-responsive" src={currImg} />
                        </div>
                    </div>
                </div>
            );
        }
        else { return (""); }
    }

}
export default Portfolio;