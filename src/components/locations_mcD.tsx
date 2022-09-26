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
import Contact from "./contact";
import Cta from "./cta";
import Hours from "./hours";
import hours from "./hours";
import List from "./list";
import StaticMap from "./static-map";
import parsePhoneNumber from "libphonenumber-js";
import Banner from "./banner";

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
    heading: "Is there an Early-Bird-Specual?",
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    heading: "Can I use my AARP nenbership card for a discount?",
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    heading: "Do kids eat free at Denny's?",
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
];
const Locations_mcD = ({ document }: any) => {
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
  } = document;
  const [isActive, setIsActive] = useState(false);
  const phoneNumber = parsePhoneNumber(mainPhone);

  return (
    <>
      <div className="headerStyle mt-4">
        <img
          src="/src/assets/images/header.png"
          alt=""
          className="nav rounded-full"
        />

        <ol className="c-bread-crumbs-list mt-10">
          <li>Locations</li>
          <li>NY</li>
          <li>Jackson Heights</li>
          <li>8710 Northern Blvd</li>
        </ol>
        <div className="hero mt-10">
          <div className="hero-row">
            <h1>Dinner at {name}</h1>
          </div>
        </div>
        <div className="hero mt-10">
          <div className="hero-row">
            <div className="Hero-hoursToday">
              Closed - Opens at 7:00 AM Tuesday
            </div>
          </div>
        </div>
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
                <h3>Phone</h3> {phoneNumber && phoneNumber.formatNational()}
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
        <h1>Featured Menu at {name}</h1>
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

      {/* <div className="centered-container">
        <div className="appPromo flex space-between">
          <div
            className="appImage"
            style={{
              minWidth: "590px",
              maxWidth: " 590px",
              zIndex: "1",
            }}
          >
            <img
              src="https://www.dennys.com/sites/default/files/styles/full_width_sm/public/2022-06/220310_Dennys_Curbside_Pickup_0221_v1.jpg?itok=ElM9DR9I"
              style={{
                borderRadius: "60px",
              }}
              alt=""
            />
          </div>
          <div className="appDetails">
            <div className="details">
              <span className="eyebrow">Download the</span>

              <h2>DENNY’S APP</h2>

              <div className="field-item field-item__body">
                <p>
                  Tap into sweet deals and delicious perks with the new Denny’s
                  App! Faster ordering, delivery driver tracking, built-in
                  rewards and the ability to easily save your favorites is all
                  at your fingertips.
                </p>
              </div>

              <div className="mt-10">
                <div className="badges flex gap-6">
                  <a href="https://play.google.com/store/apps/details?id=com.dennys.mobile&amp;hl=en_US&amp;gl=US">
                    <img
                      alt="Google Play"
                      src="	https://www.dennys.com/themes/custom/dennys/images/badge/google-play-store.svg"
                    />
                  </a>
                  <a href="https://apps.apple.com/us/app/dennys/id527548554">
                    <img
                      alt="App Store"
                      src="	https://www.dennys.com/themes/custom/dennys/images/badge/apple-app-store.svg"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div
        style={{ height: "5rem", backgroundColor: "#f36c13" }}
        className="mt-10"
      >
        <div
          style={{
            borderBottomRightRadius: "5.9375rem",
            height: "100%",
            backgroundColor: "white !important",
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
    </>
  );
};

export default Locations_mcD;
