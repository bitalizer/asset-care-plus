import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { Button, Card, Col, Container, Form, Row } from "reactstrap";

import { CloseButton } from "components/buttons";
import { BoxHeader } from "components/headers";
import { InputField } from "components/widgets";

import { useLocalStateAlerts } from "hooks";

import { findFileById, updateFile } from "../../../reducers/filesSlice";
import { FILES_PAGE } from "../files.routes.const";

export const FileDetailsPage = () => {
  const { id } = useParams();
  const fileId = parseInt(id);
  const navigate = useNavigate();

  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();

  const fileUploaded = useSelector(state => state.files.oneFile);

  const [fileData, setFileData] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findFileById(id));
  }, [dispatch, id]);

  useEffect(() => {
    setFileData({
      id: fileUploaded.id,
      name: fileUploaded.name,
      uploaded_by: fileUploaded.uploaded_by,
      uploaded_on: fileUploaded.uploaded_by,
    });
  }, [fileUploaded]);

  const onSaveFile = () => {
    console.log("update file", fileId, fileUploaded);
    setSuccessMessage("File Updated");
    setIsSuccess(true);
    setSaveSent(true);
    const fileInfo = {
      id: fileUploaded.id,
      body: fileData,
    };
    dispatch(updateFile(fileInfo));
  };

  return (
    <>
      {alert}
      <BoxHeader />
      <Container className="mt--6" fluid>
        <Card>
          <Form>
            <Row className="d-flex justify-content-end m-2">
              <CloseButton onClick={() => navigate(`/admin${FILES_PAGE}`)} />
            </Row>
            <h1 className="m-4">File Name</h1>
            <div className="pl-lg-4">
              <Row>
                <Col lg="12">
                  <InputField
                    id="input-file-name"
                    label="Change current file name"
                    value={fileData.name}
                    type="text"
                    onChange={e => setFileData({ ...fileUploaded, name: e.target.value })}
                  />
                </Col>
              </Row>

              <Row className="d-flex flex-row-reverse m-4">
                <Button color="primary" type="button" onClick={onSaveFile}>
                  Update File
                </Button>
                <Button
                  type="button"
                  onClick={() => navigate(`/admin${FILES_PAGE}`)}
                  className="mr-2"
                >
                  Cancel
                </Button>
              </Row>
            </div>
          </Form>
        </Card>
      </Container>
    </>
  );
};
