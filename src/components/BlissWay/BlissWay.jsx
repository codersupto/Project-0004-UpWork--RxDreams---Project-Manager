import React from "react";
import mobileShapeLeftMiddle from "../../assets/images/BlissWay-section/shapes/mobile-left-middle-shape.svg";
import lgShapeLeftMiddle from "../../assets/images/BlissWay-section/shapes/lg-left-middle-shape.svg";
import mobileShapeBottomRight from "../../assets/images/BlissWay-section/shapes/mobile-shape-bottom-right.svg";
import lgShapeBottomRight from "../../assets/images/BlissWay-section/shapes/lg-shape-bottom-right.svg";
import image1 from "../../assets/images/BlissWay-section/image-1.png";
import image2 from "../../assets/images/BlissWay-section/image-2.png";
import image3 from "../../assets/images/BlissWay-section/image-3.png";
import Item from "./Item/Item";
import Pagination from "./Pagination/Pagination";
import Lists from "./Lists/Lists";
import styles from "./BlissWay.module.css";
import useInterSectionObserver from "../../utils/useInterSectionObserver";

const BlissWay = () => {
  const [ref, inView] = useInterSectionObserver();
  const [selectedItem, setSelectedItem] = React.useState({
    id: 1,
    imgSrc: image1,
    list: {
      title: "Future-proof lane enforcement",
      listItems: [
        "no more transponders",
        "no overhead gantries",
        "over 99.95% accuracy",
        "deployment within weeks",
        "interoperable with any ETC system",
        "solar-powered",
        "wireless data transfer",
      ],
    },
  });
  const [items] = React.useState([
    {
      id: 1,
      imgSrc: image1,
      list: {
        title: "Future-proof lane enforcement",
        listItems: [
          "no more transponders",
          "no overhead gantries",
          "over 99.95% accuracy",
          "deployment within weeks",
          "interoperable with any ETC system",
          "solar-powered",
          "wireless data transfer",
        ],
      },
    },
    {
      id: 2,
      imgSrc: image2,
      list: {
        title: "Democratizing speed",
        listItems: [
          "vehicle occupancy verification done right",
          "low friction for users",
          "near-perfect enforcement",
          "high granularity (1, 2, 3, 4+ occupants)",
        ],
      },
    },
    {
      id: 3,
      imgSrc: image3,
      list: {
        title: "Traffic management, reengineered",
        listItems: [
          "reservation-based traffic management",
          "industry-first predictive dynamic pricing",
          "maximizes vehicle throughput",
        ],
      },
    },
  ]);

  const handleSelect = (item) => {
    setSelectedItem(item);
  };
  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.text__wrap}>
        <h1 className={styles.main__heading}>BLISSWAY</h1>
        <h4 className={styles.sub__heading}>
          builds next-generation tolling solutions for cities
        </h4>
        <p className={styles.description}>
          from software-heavy, hardware-lite roadside infrastructure to
          contract-free public-private partnerships
        </p>
      </div>
      <div className={styles.middle__shape__wrap}>
        <img
          className={styles.mobile__shape__left__middle}
          src={inView ? mobileShapeLeftMiddle : ""}
          alt=""
        />
        <img
          className={styles.lg__shape__left__middle}
          src={inView ? lgShapeLeftMiddle : ""}
          alt=""
        />
      </div>
      <div className="lg__control__wrap relative">
        <Item sectionInView={inView} item={selectedItem} />
        <div className="xl:absolute xl:inset-0">
          <div className="xl:container relative h-full">
            <Pagination
              selectedItem={selectedItem}
              items={items}
              onSelect={handleSelect}
            />
            <Lists list={selectedItem.list} />
          </div>
        </div>
      </div>
      <div className={styles.bottom__shape__wrap}>
        <img
          className={styles.mobile__shape__bottom__right}
          src={inView ? mobileShapeBottomRight : ""}
          alt=""
        />
        <img
          className={styles.lg__shape__bottom__right}
          src={inView ? lgShapeBottomRight : ""}
          alt=""
        />
      </div>
    </section>
  );
};

export default BlissWay;
