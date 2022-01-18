const click = function(obj, setObj) {
  obj.width === "60px"
    ? setObj({ width: "360px" })
    : setObj({ width: "60px" });
};

const logForm = function(state, setState) {
  state === 'none' ? setState('flex') : setState('none')
}

export { click, logForm };