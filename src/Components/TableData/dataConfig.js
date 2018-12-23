import dataMaker from "./index";

export const colStyles = {
  background: 'cadetblue',
  cursor: 'pointer'

};

export const rowStyles = {
  background: "transparent",
  textAlign: 'center',
  borderBottom: '1px solid black'
};

const dataConfig = {
  columns : [{
    type: 'string',       //'string' || 'number'
    filtering: true,
    sorting: true,
    style: {...colStyles}
  }],
  cells : [{
    value: dataMaker(),
    style: {...colStyles, ...rowStyles }
  }]
};

export default dataConfig;