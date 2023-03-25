import { FC, useEffect } from "react";
import { ToastDiv, ToastText } from "./PopupToast.style";
import { useDispatch, useSelector } from "react-redux";
import { setTriggerToast, initialState } from "@/functionality/store/Toast";

// In this component, the state is controlled via the store
// the main component will contain PopupToast
// When we need to show PopupToast, we will dispatch PopupToastState as
//  dispatch(setToast({ timeOn: 3000, isSuccess: true, text: "input text"}))
// in here, we will then dispatch setToast as the defaults
const PopupToast: FC = () => {
  const dispatch = useDispatch();

  const { timeOn, text, isSuccess, isOn } = useSelector(
    (state: any) => state.toastReducer
  );

  useEffect(() => {
    const timer = () => {
      dispatch(setTriggerToast(initialState));
    };

    const timeout = setTimeout(timer, timeOn);
    return () => clearTimeout(timeout);
  }, [isOn]);

  return isOn ? (
    <ToastDiv isSuccess={isSuccess}>
      <ToastText isSuccess={isSuccess}>{text}</ToastText>
    </ToastDiv>
  ) : (
    <></>
  );
};

export default PopupToast;
