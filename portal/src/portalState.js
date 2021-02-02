import { initGlobalState } from "qiankun";

const state= {
    user: null,
    theme: '#fff'
};

const action = initGlobalState(state);

action.onGlobalStateChange((val, oldval) => {
    console.log(val);
});

export default action;
export function getState() {
    return state;
}
