import style from "./style.module.scss";
import { Link } from "react-router-dom";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import React from "react";

const RefBreadCrumb = ({ path }) => {
  const elmentsOfPath = path.split("/");
  elmentsOfPath.shift();
  elmentsOfPath.unshift("/");
  const renderBreadCrumb = (arr) => {
    return arr.map((el) => {
      return el === "/" ? (
        <Breadcrumb.Item key={el}>
          <Link to={el}>
            <HomeOutlined className={style.house} />
          </Link>
        </Breadcrumb.Item>
      ) : (
        <Breadcrumb.Item key={el}>
          <Link to={el}>
            <span className={style.information}>{el}</span>
          </Link>
        </Breadcrumb.Item>
      );
    });
  };
  return (
    <div className={style.container}>
      <Breadcrumb>{renderBreadCrumb(elmentsOfPath)}</Breadcrumb>
    </div>
  );
};
export default RefBreadCrumb;
