import React from "react";
const dataContext = React.createContext({
  csvHeader: [],
  isLogin: false,
  isLoading: true,
  primaryKey: "",
  imageColName: "",
  skippingKey: [],
  firstInputFileName: "",
  secondInputFileName: "",
  firstInputCsvFiles: [],
  secondInputCsvFiles: [],
  correctedCsv: {},
  zipImageFile: [],
  imageMappedData: [],
  csvFile: [],
  csvDataWithImage: [],
  userData : {},
  loginData : {},
  uploadZipImage: [],

  modifyUserData: () => {},
  modifyLoginData: () => {},
  modifyIsLoading: () => {},
  modifyIslogin: () => {},
  addToCsvHeader: () => {},
  addToPrimaryKey: () => {},
  addToSkippingKey: () => {},
  addFirstInputFileName: () => {},
  addSecondInputFileName: () => {},
  addFirstInputCsvFile: () => {},
  addSecondInputCsvFile: () => {},
  addToCorrectedCsv: () => {},
  addZipImageFile: () => {},
  setImageColName: () => {},
  setImageMappedData: () => {},
  setCsvFile: () => {},
  setCsvDataWithImage: () => {},
  setUploadZipImage : ()=>{}
});

export default dataContext;
