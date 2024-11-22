import React from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';
import donate1 from '../assets/images/donate1.png';
import donate2 from '../assets/images/donate2.png';
import donate3 from '../assets/images/donate3.png';
import { Link } from 'react-router-dom';

const Donateslider = () => {

    const donationItems = [
        {
            title: 'Girl Marriage Support',
            description: 'This initiative provides financial assistance for the marriage of young girls, ensuring they receive proper support for their future. Your donation will help cover the cost of marriage ceremonies, dowries, and other essential expenses to ensure a safe and dignified transition for girls into adulthood.',
            support: 'Support: ₹ 1,100',
            imageUrl: donate1,
            link: '/MarriageDetails'
        },

        {
            title: 'Girl Born Benefit',
            description: 'This program is designed to promote the welfare and education of newborn girls. Donations help cover the costs of healthcare, education, and social support systems, ensuring that every girl receives the care and resources needed to grow up healthy and empowered.',
            support: 'Support: ₹ 1,100',
            imageUrl: donate2,
            link: '/GirlBorn'
        },

        {
            title: 'Accidental Death Benefit',
            description: 'In the event of an accidental death, this program provides immediate financial support to the family of the deceased. Donations help cover funeral expenses, medical bills, and immediate family needs, offering a safety net for families during a difficult time.',
            support: 'Support: ₹ 1,100',
            imageUrl: donate3,
            link: '/Accidental'
        },

        {
            title: 'Accidental Death Benefit',
            description: 'This initiative helps families affected by the sudden loss of a loved one due to an accident. The financial support ensures that the family members are not burdened by unforeseen expenses and helps them cope with the emotional and financial challenges of the tragedy.',
            support: 'Support: ₹ 1,100',
            imageUrl: donate3,
            link: '/Accidental'
        },

        {
            title: 'Girl Born Benefit',
            description: 'Your donation will help support the families of those who have tragically lost their lives in an accident. This program covers the financial costs of medical treatment, transportation, and the immediate needs of the family to cope with such a loss.',
            support: 'Support: ₹ 1,100',
            imageUrl: donate2,
            link: '/GirlBorn'
        },

        {
            title: 'Girl Marriage Support',
            description: 'By contributing to this fund, you are providing financial aid to the families of accident victims. This assistance helps ease the financial burdens of funeral arrangements, medical bills, and family sustenance during a time of crisis.',
            support: 'Support: ₹ 1,100',
            imageUrl: donate1,
            link: '/Makedonation'
        },
    ];


    const isMobile = window.innerWidth < 768;
    const chunkSize = isMobile ? 1 : 3;
    const groupedItems = [];

    for (let i = 0; i < donationItems.length; i += chunkSize) {
        groupedItems.push(donationItems.slice(i, i + chunkSize));
    }

    return (
        <div className="container-fluid mb-5 text-center">
            <div className="d-flex justify-content-center">
                <p className="line-left">A help to those who need it</p>
            </div>
            <h4 className="fs-2 fw-bold mb-4 text-center">
                Each donation is an essential<br />
                help for everyone's life
            </h4>

            <Carousel
                nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}
                prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}
                interval={null}
                controls={true}
                indicators={false}>
                {groupedItems.map((group, index) => (
                    <Carousel.Item key={index}>
                        <div className={`d-flex justify-content-center ${isMobile ? 'flex-column align-items-center' : ''}`}>
                            {group.map((item, idx) => (
                                <Card style={{ width: '20rem', margin: '10px' }} key={idx}>
                                    <Card.Img variant="top" src={item.imageUrl} alt={item.title} height={'250px'} style={{ backgroundSize: "cover", objectFit: "containr" }} />
                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>{item.description}</Card.Text>
                                        <Card.Text className="text-muted">{item.support}</Card.Text>
                                        <Link to={item.link}>
                                            <Button variant="success" style={{ cursor: 'pointer' }}>
                                                View Details
                                            </Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            ))}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default Donateslider;
