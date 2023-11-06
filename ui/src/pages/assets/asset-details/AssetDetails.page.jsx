import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";

import { Button, Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";

import { BoxHeader } from "components/headers";

import { useLocalStateAlerts } from "hooks";

import { findAssetById, updateAsset } from "../../../reducers/assetsSlice";
import { ASSETS_PAGE } from "../assets.routes.const";
import { AssetDetailsPanel } from "../panels/AssetDetails.panel";

export const AssetDetailsPage = () => {
  const { id } = useParams();
  const assetId = parseInt(id);
  const navigate = useNavigate();

  const assetItem = useSelector(state => state.assets.oneAsset);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findAssetById(id));
  }, [dispatch, id]);

  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();

  const onSaveAsset = form => {
    console.log("update asset", assetId, assetItem);
    const asset = {
      id: assetId,
      body: form,
    };
    setSuccessMessage("Asset Updated");
    setIsSuccess(true);
    setSaveSent(true);
    dispatch(updateAsset(asset));
  };

  const onBackToSearchClick = () => {
    navigate(`/admin${ASSETS_PAGE}`);
  };

  return (
    <>
      {alert}
      <BoxHeader />
      <Container className="mt--6" fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card>
              <CardHeader>
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Asset Details</h3>
                  </Col>
                </Row>
                <Row className="align-items-center py-4">
                  <Col lg="12" xs="7" className="text-right">
                    <Button
                      className="btn btn-primary"
                      color="primary"
                      onClick={onBackToSearchClick}
                    >
                      Back to Search
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <AssetDetailsPanel
                  asset={assetItem}
                  onSave={onSaveAsset}
                  onBackToSearchClick={onBackToSearchClick}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
