import { HIDEMODAL, SHOWMODAL } from "../const/modal.const"

export const show = (payload) => ({ type: SHOWMODAL, payload })
export const hide = (payload) => ({ type: HIDEMODAL, payload })