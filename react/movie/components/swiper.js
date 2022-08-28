import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";

const CarouselItem = styled.div`
  position: relative;
  & > div {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    color: #fff;
    padding-top: 180px;
    text-align: left;
    width: 100%;
    max-width: 1200px;
    & > p {
      margin: 15px 0;
      font-size: 14px;
      width: 450px;
    }
  }
  & > span > img {
    filter: brightness(50%);
  }
`;

const swiperContainer = css`
  position: relative;
  & > .carousel:last-child {
    position: absolute;
    left: 0;
    bottom: 0;
    & > .thumbs-wrapper > .thumbs {
      display: flex;
      justify-content: center;
      & > .thumb > span {
        height: 100% !important;
      }
    }
  }
`;

function renderThumbs(children) {
  return children.map((item, index) => {
    return (
      <Image
        objectFit="cover"
        src={item.props.children[0].props.src}
        width={70}
        height={24}
        key={item.props.children[0].key}
        alt=""
      />
    );
  });
}

export default function Swiper() {
  return (
    <Box>
      <Carousel
        css={swiperContainer}
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        renderThumbs={renderThumbs}
      >
        <CarouselItem>
          <Image
            width="1920px"
            height="640px"
            alt="banner"
            src="/images/1.jpg"
          />
          <Box>
            <Heading as="h2" size="lg">
              banner 1
            </Heading>
            <Text>banner 1 description</Text>
            <Button colorScheme="red">
              <Link href="#">
                <a>CHECK DETAIL</a>
              </Link>
            </Button>
          </Box>
        </CarouselItem>
        <CarouselItem>
          <Image
            width="1920px"
            height="640px"
            alt="banner"
            src="/images/2.jpg"
          />
          <Box>
            <Heading as="h2" size="lg">
              banner 2
            </Heading>
            <Text>banner 2 description</Text>
            <Button colorScheme="red">
              <Link href="#">
                <a>CHECK DETAIL</a>
              </Link>
            </Button>
          </Box>
        </CarouselItem>
        <CarouselItem>
          <Image
            width="1920px"
            height="640px"
            alt="banner"
            src="/images/3.jpg"
          />
          <Box>
            <Heading as="h2" size="lg">
              banner 3
            </Heading>
            <Text>banner 3 description</Text>
            <Button colorScheme="red">
              <Link href="#">
                <a>CHECK DETAIL</a>
              </Link>
            </Button>
          </Box>
        </CarouselItem>
      </Carousel>
    </Box>
  );
}
