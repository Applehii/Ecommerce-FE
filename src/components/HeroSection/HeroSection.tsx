'use client'
import React from 'react'
import Slider from 'react-slick'
import { Container, Row, Col, Button } from 'react-bootstrap'
import styles from './HeroSection.module.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface SlideItem {
    id: number
    subheading: string
    title: string
    description: string
    bgImage: string
}

const HeroSection = () => {
    const slides: SlideItem[] = [
        {
            id: 1,
            subheading: '#New Arrival',
            title: 'Shoes Collection 2019',
            description: 'A small river named Duden flows by their place...',
            bgImage: '/assets/women.png'
        },
        {
            id: 2,
            subheading: '#New Arrival',
            title: 'New Shoes Winter Collection',
            description: 'A small river named Duden flows by their place...',
            bgImage: '/assets/shoe.png'
        }
    ]

    const settings = {
        dots: true,
        infinite: slides.length > 1, // Chạy vô hạn nếu có nhiều slide
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        fade: true,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        waitForAnimate: false,
        adaptiveHeight: true // Tự động điều chỉnh chiều cao
    };

    return (
        <section id="home-section" className={styles.hero}>
            <Slider {...settings} className={styles.sliderWrapper}>
                {slides.map((slide) => (

                    <div key={slide.id} className={styles.slideItem}>
                        <div
                            className={styles.slideBackground}
                            style={{backgroundImage: `url(${slide.bgImage})`}}
                        />

                        <div className={styles.contentWrapper}>
                            <Row>
                                <Col md={12}>
                                    <div className={styles.content}>
                                        <span className={styles.subheading}>{slide.subheading}</span>
                                        <h1 className="mb-4 mt-3">{slide.title}</h1>
                                        <p className="mb-4">{slide.description}</p>
                                        <Button variant="primary" className={styles.btnCustom}>
                                            Discover Now
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    )
}

export default HeroSection