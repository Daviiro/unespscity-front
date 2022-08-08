import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Button } from '@mui/material'
import { Container, Image } from './styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ImageCarousel = ({images}) => {

    return (
        <Container>
                <Carousel
                    fullHeightHover={false}     // We want the nav buttons wrapper to only be as big as the button element is
                    navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                        style: {
                            backgroundColor: 'cornflowerblue',
                            borderRadius: 0
                        }
                    }}
                    navButtonsWrapperProps={{   // Move the buttons to the bottom. Unsetting top here to override default style.
                        style: {
                            bottom: '10%',
                            top: 'unset'
                        }
                    }}
                    autoPlay={false}
                    NavButton={({onClick, next, prev}) => {
                        // Other logic
                
                    return (
                        <Button onClick={onClick} className="arrowIcon" >
                            {next && <ArrowForwardIosIcon />}
                            {prev && <ArrowBackIosIcon />}
                        </Button>
                    )
                }}
            >
                {
                    images.length > 0 ? 
                        images.map( (image) => 
                        <Image 
                            key={image} 
                            src={image} 
                            alt="Imagens do Carroussel"
                            className="images"
                        /> 
                    ) : (
                        <Image 
                            src="https://www.inovegas.com.br/site/wp-content/uploads/2017/08/sem-foto.jpg"
                            alt="Imagens do Carroussel"
                            className="images"
                        /> 
                    )        
                }
            </Carousel>
        </Container>
    )
}

export default ImageCarousel;