import { Carousel } from "@trendyol-js/react-carousel";
import * as React from "react";
import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Cta from "./cta";
import Hours from "./hours";
import List from "./list";
import StaticMap from "./static-map";
import parsePhoneNumber from "libphonenumber-js";
import Footer from "./footer";
import HoursBanner from "./hoursBanner";

const faqOptions = [
  {
    heading: "How late is Denny's dinner served?",
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    heading: "Do I need to make a reservation?",
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    heading: "Is there an Early-Bird-Special?",
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    heading: "Can I use my AARP membership card for a discount?",
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    heading: "Do kids eat free at Denny's?",
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
];

const promoOptions = [
  {
    img: "https://dynl.mktgcdn.com/p/bF2py3s5PrPj0Jpu5it_3hsnURE6YTtXoUyxCRNK72c/358x202.jpg",
    name: `Denny's Rewards`,
    text: "Join today and receive the latest news, offers and exclusive promotions. Receive 20% off your next visit when you sign up.",
    cta: "Join Rewards",
  },
  {
    img: "https://dynl.mktgcdn.com/p/sI2h1xrZ3ZgaVgyOf47YsjEcvILrD8vBOWbTvG_UB4Y/600x338.jpg",
    name: `Birthday Treat`,
    text: "Sign up for Denny's Rewards to receive an exclusive birthday offer.",
    cta: "Join Rewards",
  },
  {
    img: "https://dynl.mktgcdn.com/p/tpQpjJaRnau-NXq9ggWczeGAKrd4cEz-qR7oMwibNwY/600x338.jpg",
    name: `Kids Eat Free`,
    text: "Kids Eat Free days and restaurant participation may vary by location. Restrictions may apply.",
    cta: "View Kids Menu",
  },
  {
    img: "https://dynl.mktgcdn.com/p/CWRDUDYkPTeL8TaYm4bd520ujNofI24kBhfegFbmoAg/600x401.jpg",
    name: `DINER DRIP`,
    text: "Like taking our unique style from the kitchen to your closet with the launch of our online merch store with swag you can’t get anywhere else. All inspired by America’s diner.​",
    cta: "Learn more",
  },
];
const Locations_Dinner = ({ document }: any) => {
  const {
    _site,
    name,
    address,
    openTime,
    hours,
    mainPhone,
    geocodedCoordinate,
    services,
    c_locationToMenu,
    timezone,
  } = document;
  const [isActive, setIsActive] = useState(false);
  const phoneNumber = parsePhoneNumber(mainPhone);

  return (
    <>
      <div className="headerStyle mt-4">
        <img
          src="https://i.imgur.com/o2nmX4V.png"
          alt=""
          className="nav rounded-full"
        />

        <ol className="c-bread-crumbs-list mt-10  rounded-full">
          <li>Locations</li>
          <li>{address.region}</li>
          <li>{address.city}</li>
          <li>{name}</li>
        </ol>
        <div className="hero mt-10">
          <div className="hero-row">
            <h1>Dinner at {name}</h1>
          </div>
        </div>
        <HoursBanner document={document} />
        <div className="hero mt-10">
          <div className="flex gap-24	heroCtas">
            <Cta
              buttonText="Get Directions"
              url="#"
              style="primary-cta bannerCta"
            ></Cta>
            <Cta
              buttonText="Order now"
              url="#"
              style="primary-cta bannerCta"
            ></Cta>
          </div>
        </div>
      </div>
      <div className="centered-container">
        <div className="appPromo flex space-between">
          <div className="napDetails">
            <div className="details">
              <div className="nap">
                <h3>
                  {name} <br />
                  {address.city}, {address.region} {address.postalCode}
                </h3>
              </div>
              <div className="mt-4">
                <h3>Phone</h3>
                <div className="phNo">
                  {phoneNumber && phoneNumber.formatNational()}
                </div>
              </div>
              {hours && <Hours title={"Hours"} hours={hours} />}
            </div>
          </div>
          <div
            className="appImage"
            style={{
              minWidth: "700px",
              maxWidth: " 700px",
              zIndex: "1",
              borderRadius: "5%",
            }}
          >
            {geocodedCoordinate && (
              <StaticMap
                latitude={geocodedCoordinate.latitude}
                longitude={geocodedCoordinate.longitude}
              ></StaticMap>
            )}
          </div>
        </div>
      </div>

      <div style={{ height: "5rem", backgroundColor: "#f36c13" }}>
        <div
          style={{
            borderBottomRightRadius: "5.9375rem",
            height: "100%",
            backgroundColor: "white !important",
          }}
        ></div>
      </div>
      <div className="section p-4 bannerContent space-y-12">
        <h1>Featured Dinner Menu at {name}</h1>
        <Carousel
          show={3.5}
          slide={2}
          swiping={true}
          className="mt-10 mb-10"
          useArrowKeys={true}
        >
          {c_locationToMenu.map((item: any, index: number) => {
            return (
              <div key={index}>
                <div>
                  <img src={item.photoGallery[0].image.url} alt="" />
                </div>
                <div className="name mt-4 text-xl">{item.name}</div>
                {item.price && <div className="price">{item.price}</div>}
                <div className="mt-10 mb-10">
                  <Cta
                    buttonText="Order Online"
                    url="#"
                    style="primary-cta bannerCta"
                  ></Cta>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
      <div style={{ height: "5rem", backgroundColor: "#d0442b" }}>
        <div
          style={{
            borderTopRightRadius: "5.9375rem",
            height: "100%",
            backgroundColor: "white !important",
          }}
        ></div>
      </div>
      <div
        className="section p-4 space-y-12 promos"
        style={{ background: "#f5f3eb", marginBottom: "0px !important" }}
      >
        <h1
          style={{
            width: "fit-content",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          PROMOS
        </h1>
        <Carousel
          show={3}
          slide={1}
          swiping={true}
          className="mt-10 mb-10 promoCar"
          useArrowKeys={true}
        >
          {promoOptions.map((item: any, index: number) => {
            return (
              <div
                key={index}
                style={{
                  maxWidth: "350px",
                  alignContent: "center",
                }}
              >
                <div
                  className="Product-imgWrapper"
                  style={{
                    marginBottom: "1rem",
                    textAlign: "center",
                    width: "100%",
                    paddingLeft: "1rem",
                    paddingRight: "1rem",
                  }}
                >
                  <img
                    src={item.img}
                    alt=""
                    style={{
                      width: "600px",
                      boxShadow: " 0 0 1.25rem -0.625rem rgb(0 0 0 / 60%)",
                      borderRadius: "2.5rem",
                    }}
                  />
                </div>
                <div className="Product-info">
                  <div
                    className="name mt-4 text-xl"
                    style={{
                      textTransform: "capitalize",
                      minHeight: "3rem",
                      color: "#47433f",
                    }}
                  >
                    {item.name}
                  </div>
                  <div className="price" style={{ color: "#47433f" }}>
                    {item.text}
                  </div>
                </div>

                <div className="mt-10 mb-10">
                  <Cta
                    buttonText={item.cta}
                    url="#"
                    style="primary-cta bannerCta"
                  ></Cta>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
      <div style={{ height: "5rem", backgroundColor: "#f36c13" }}>
        <div
          style={{
            borderBottomRightRadius: "5.9375rem",
            height: "100%",
            backgroundColor: "#f5f3eb !important",
          }}
        ></div>
      </div>
      <div className="section p-4 bannerContent">
        <h1>General FAQs</h1>
        <Accordion allowZeroExpanded>
          {faqOptions.map((item, index: number) => (
            <AccordionItem
              key={index}
              className="faqAccordion mt-4
            mb-4"
            >
              <AccordionItemHeading>
                <AccordionItemButton>{item.heading}</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>{item.content}</AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div style={{ height: "5rem", backgroundColor: "#d0442b" }}>
        <div
          style={{
            borderTopRightRadius: "5.9375rem",
            height: "100%",
            backgroundColor: "white !important",
          }}
        ></div>
      </div>
      <div className="centered-container  mb-10">
        <div
          className="About-content flex gap-3"
          style={{ lineHeight: "1.6", fontSize: ".9375rem" }}
        >
          <div style={{ width: "75%" }}>
            <h2
              className="About-title mb-10"
              style={{
                color: "#47433f",
                lineHeight: "1.1",
                fontSize: "2.5625rem",
                textTransform: "uppercase",
              }}
            >
              Dinner at DENNY'S
            </h2>
            <div className="About-description">
              <div className="c-description">
                <div style={{ color: "#47433f" }}>
                  Denny's is the place that is always open for you to be who you
                  want, with the people you want, over the food you
                  want…whenever you want. We celebrate the inherent creativity
                  of our food and the uniqueness of all people. So, come as you
                  are. Enjoy pancakes for dinner or burgers for breakfast. You
                  are always welcome at America’s Diner, where we are Open for
                  Anything™. <br />
                  <br />
                  It’s the place where people can relax and be themselves while
                  enjoying classic American comfort food and everyday value.
                  Whether it's appetizers, breakfast, lunch or dinner, we pride
                  ourselves in serving our guests the diner food they love
                  including favorites like Moons Over My Hammy®, Sizzlin’
                  Skillets, hand-dipped Milk Shakes, 100% Beef Burgers and the
                  world-famous Build Your Own Grand Slam®, OR dishes from our 24
                  favorite social stars, like the New! So Pumped-Kin Pancakes™
                  or the New! Mo’ Mozzarella Burger™. Dine in or bring the diner
                  home to feed the fam by ordering online through Dennys.com or
                  our Mobile App.
                  <br /> <br />
                  Denny’s prides itself in offering delicious food at a price
                  you can afford. We’re taking it one step further and making a
                  whole new menu for it! Introducing Denny’s All Day Diner Deals
                  menu with 10 deal-icious meals like the Everday Value Slam®,
                  starting at only $5.99. That’s value you can enjoy. All day.
                  Every day.
                </div>
              </div>
            </div>
            <div className="About-buttonWrapper">
              <a
                className="About-button"
                href="https://www.dennys.com"
                data-ya-track="link"
              >
                dennys.com
              </a>
            </div>
          </div>
          <div>
            <h2
              style={{
                color: "#47433f",
                lineHeight: "1.1",
                fontSize: "2.5625rem",
                textTransform: "uppercase",
                paddingLeft: "1.5em",
              }}
            >
              AT THIS LOCATION
            </h2>
            {services && <List list={services}></List>}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Locations_Dinner;
