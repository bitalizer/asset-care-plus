import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { useLocalStateAlerts } from "hooks";

import { createAsset } from "../../../reducers/assetsSlice";
import { AssetsTabs } from "../Assets.tabs";

import { AddAsset } from "./AddAsset.panel";

export const AssetsPanel = () => {
  const [activePanel, setActivePanel] = useState("detail");
  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();

  const dispatch = useDispatch();

  const onSavePartner = asset => {
    setActivePanel("detail");
    setSuccessMessage("Asset Added");
    setIsSuccess(true);
    setSaveSent(true);
    dispatch(createAsset(asset));
  };
  const onCloseAddPartnerForm = () => {
    setActivePanel("detail");
  };

  return (
    <>
      {alert}
      {activePanel === "detail" ? (
        <AssetsTabs onClick={() => setActivePanel("form")} />
      ) : (
        <AddAsset onSave={onSavePartner} onClose={onCloseAddPartnerForm} />
      )}
    </>
  );
};
