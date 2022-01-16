const click = function(obj, setObj) {
  obj.width === "60px"
    ? setObj({ width: "360px" })
    : setObj({ width: "60px" });
};

export { click };