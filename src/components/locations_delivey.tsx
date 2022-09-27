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
import StaticMap from "./static-map";
import parsePhoneNumber from "libphonenumber-js";
import Footer from "./footer";
import HoursBanner from "./hoursBanner";
const faqOptions = [
  {
    heading: "Does Denny’s offer delivery?",
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    heading: "Where is The Burger Den located?",
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    heading: "Is The Burger Den available in my area?",
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    heading: "Where is The Meltdown located?",
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    heading: "Is The Meltdown available in my area?",
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
];

const Locations_Delivery = ({ document }: any) => {
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
            <h1>Delivery at {name}</h1>
          </div>
        </div>
        {hours && <HoursBanner document={document} />}
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
      <div style={{ height: "5rem", backgroundColor: "#f16a14" }}>
        <div
          style={{
            borderTopRightRadius: "5.9375rem",
            height: "100%",
            justifyContent: "center",
            textAlign: "center",
            lineHeight: " 2.5",
            color: "white !important",
          }}
        >
          <h1 style={{ color: "white !important" }}>
            Delivery Services at {name}
          </h1>
        </div>
      </div>
      {/* Right image */}
      <div className="centered-container">
        <div className="appPromo flex space-between  mt-10">
          <div
            className="appImage  "
            style={{
              minWidth: "590px",
              maxWidth: " 590px",
              zIndex: "1",
              height: "600px",
            }}
          >
            <img
              className="border"
              src="https://www.nrn.com/sites/nrn.com/files/Denny_s_BurgerDen-Logo-OnWhite.jpg"
              style={{
                borderRadius: "60px",
                height: "100%",
                padding: "3em",
                background: "white",
              }}
              alt=""
            />
          </div>
          <div
            className="appDetails"
            style={{
              background: "#262628",
              padding: " 2em",
              height: "fit-content",
              marginTop: "auto",
              marginBottom: "auto",
            }}
          >
            <div
              className="details"
              style={{ marginLeft: "51px", padding: "0px" }}
            >
              <div
                className="field-item field-item__body"
                style={{ color: "white" }}
              >
                <p>
                  With a focus on high-quality ingredients and big, bold flavor
                  combinations, The Burger Den is cookin’ up the classics you
                  expect—and the crafty concoctions you don’t—and then
                  partnering with your favorite delivery apps, so you never have
                  to leave your couch. And since it’s brought to you by Denny’s,
                  the people who invented America’s diner (and stay up as late
                  as you do), you know you’re gonna find the tastes you want
                  when you want it.
                </p>
                <p className="mt-4">
                  Our piled-high burgers and hand-dipped premium milk shakes are
                  available all day and all night through DoorDash, Uber Eats or
                  Postmates. Get your favorite food your favorite way:
                  Delivered.
                </p>
              </div>

              <div className="mt-10">
                <div
                  className="badges flex gap-6"
                  style={{ justifyContent: "space-between" }}
                >
                  <img
                    alt="Google Play"
                    src="	https://theburgerden.com/wp-content/uploads/2021/01/dd.png"
                  />
                  <img
                    alt="App Store"
                    src="https://theburgerden.com/wp-content/uploads/2021/01/UberEats.png"
                  />
                  <img
                    alt="App Store"
                    src="https://theburgerden.com/wp-content/uploads/2021/01/PM.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* Left image */}
      <div className="section centered-container">
        <div className="appPromo flex space-between">
          <div
            className="napDetails"
            style={{
              background: "#626262",
              padding: " 2em",
              height: "fit-content",
              marginTop: "auto",
              marginBottom: "auto",
              marginLeft: "0px !important",
            }}
          >
            <div className="details">
              <div className="nap" style={{ width: "83%", color: "white" }}>
                <p>
                  From a love of all things cheesy and the idea that mealtime
                  should fit your mood, The Meltdown is the new go-to for
                  handcrafted melts with fresh ingredients and a side of
                  attitude. With flavor combinations you didn’t see coming,
                  we’ve got you covered for breakfast, lunch, dinner or any
                  snack time in between. And did we mention it’s brought to you
                  by Denny’s, the people who invented America’s Diner (excuse
                  the humble brag)? So sit back, order through our exclusive
                  delivery partner, DoorDash and go ahead…have a meltdown….you
                  earned it.
                </p>
                <p className="mt-4">
                  With DoorDash as our exclusive delivery partner, you can get
                  the handcrafted melts you want, when and where you want them.
                  Sound good? We thought so too.
                </p>
              </div>
              <div className="mt-10">
                <div
                  className="badges flex gap-6"
                  style={{ justifyContent: "space-between" }}
                >
                  <img
                    alt="Google Play"
                    src="	https://theburgerden.com/wp-content/uploads/2021/01/dd.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="appImage  "
            style={{
              minWidth: "590px",
              maxWidth: "590px",
              zIndex: "1",
              height: "600px",
            }}
          >
            <img
              src="https://www.nrn.com/sites/nrn.com/files/Denny_s_TheMeltdown-Logo-RGB.jpg"
              alt=""
              className="border"
              style={{
                borderRadius: "60px",
                height: "100%",
                padding: "3em",
                background: "white",
              }}
            />
          </div>
        </div>
      </div>
      {/* <div className="section p-4  bannerContent">
        <h1>Dinner Delivery Services at {name}</h1>
        <div
          className="flex gap-10 mt-10"
          style={{
            height: "555px",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div style={{ height: "300px", width: "300px" }}>
            <img
              src="https://www.nrn.com/sites/nrn.com/files/Denny_s_BurgerDen-Logo-OnWhite.jpg"
              alt=""
              style={{
                width: "auto",
                height: "300px",
                marginLeft: "auto",
                marginRight: "auto",
                borderRadius: "50%",
              }}
            />
            <div className="mt-4">
              With a focus on high-quality ingredients and big, bold flavor
              combinations, The Burger Den is cookin’ up the classics you
              expect—and the crafty concoctions you don’t—and then partnering
              with your favorite delivery apps.
            </div>
            <div className="w-30 mt-10">
              <Cta
                buttonText="Order Online"
                url="#"
                style="primary-cta bannerCta"
              ></Cta>
            </div>
          </div>
          <div style={{ height: "300px", width: "300px" }}>
            <img
              src="https://www.nrn.com/sites/nrn.com/files/Denny_s_TheMeltdown-Logo-RGB.jpg"
              alt=""
              style={{
                width: "auto",
                height: "300px",
                marginLeft: "auto",
                marginRight: "auto",
                borderRadius: "50%",
              }}
            />
            <div className="mt-4">
              From a love of all things cheesy and the idea that mealtime should
              fit your mood, The Meltdown is the new go-to for handcrafted melts
              with fresh ingredients and a side of attitude.
            </div>
            <div className="w-30 mt-10">
              <Cta
                buttonText="Order Online"
                url="#"
                style="primary-cta bannerCta"
              ></Cta>
            </div>
          </div>
        </div>
      </div> */}
      <div style={{ height: "5rem", backgroundColor: "#f36c13" }}>
        <div
          style={{
            borderBottomRightRadius: "5.9375rem",
            height: "100%",
            backgroundColor: "white !important",
          }}
        ></div>
      </div>
      <div className="section p-4 bannerContent space-y-12 mt-10">
        <h1>Preferred Delivery Items</h1>
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
      <div className="centered-container">
        <div className="appPromo flex space-between  mt-10">
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
      <Footer />
    </>
  );
};

export default Locations_Delivery;
