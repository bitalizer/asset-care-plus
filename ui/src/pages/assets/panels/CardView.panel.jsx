import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Row, Col } from "reactstrap";

import { fetchAsset } from "../../../reducers/assetsSlice";

import { CardViewDetails } from "./CardView.details";

export const CardViewPanel = () => {
  const assets = useSelector(state => state.assets.assets);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsset());
  }, [dispatch]);

  return (
    <>
      <Row>
        {assets.map(asset => (
          <Col sm="3">
            <CardViewDetails
              detailId={asset.id}
              name={asset.name}
              location={asset.location}
              area={asset.area}
              model={asset.model}
              barcode={asset.barcode}
              category={asset.category}
              assetStatus={asset.assetStatus}
              image={asset.image}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};
