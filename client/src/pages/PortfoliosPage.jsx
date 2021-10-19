import React, { useState } from "react";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import Title from "../components/Title";
import portfolios from "../data/Portfolios";
import Menu from "../components/Menu";
import Button from "../components/Button";

const allButtons = ["All", ...new Set(portfolios.map((item) => item.category))];

function PortfoliosPage() {
  const [menuItems, setMenuItems] = useState(portfolios);
  const [button, setButtons] = useState(allButtons);

  const filter = (button) => {
    if (button === "All") {
      setMenuItems(portfolios);
      return;
    }

    const filteredData = portfolios.filter((item) => item.category === button);
    setMenuItems(filteredData);
  };
  return (
    <MainLayout>
      <Title title={"Portfolios"} span={"portfolios"} />
      <InnerLayout>
        <Button filter={filter} button={button} />
        <Menu menuItems={menuItems} />
      </InnerLayout>
    </MainLayout>
  );
}

export default PortfoliosPage;
