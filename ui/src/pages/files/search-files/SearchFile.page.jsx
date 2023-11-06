import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { ReactTable } from "components/widgets";

import { useLocalStateAlerts } from "hooks";

import { deleteFiles, fetchFiles, removeFile } from "../../../reducers/filesSlice";
import { FILE_DETAILS } from "../files.routes.const";

import { filesTableColumns } from "./Files.table";

export const FilesSearchPage = () => {
  const { alert, setSaveSent, setSuccessMessage, setIsSuccess } = useLocalStateAlerts();
  const navigate = useNavigate();

  const files = useSelector(state => state.files.files);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFiles());
  }, [dispatch]);

  const onViewFileDetails = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    navigate(`/admin${FILE_DETAILS}/${id}`);
  };

  const onDeleteFile = e => {
    e.preventDefault();
    const { id } = e.currentTarget;
    console.log("file deleted", id);
    setSuccessMessage("File deleted");
    setIsSuccess(true);
    setSaveSent(true);
    dispatch(deleteFiles(id));
    dispatch(removeFile(parseInt(id)));
  };

  return (
    <>
      {alert}

      <ReactTable
        data={files}
        columns={filesTableColumns({
          onDetailsButtonClick: onViewFileDetails,
          onRemoveButtonClick: onDeleteFile,
        })}
      />
    </>
  );
};
