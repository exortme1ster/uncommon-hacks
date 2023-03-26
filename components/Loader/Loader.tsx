import { Triangle } from "react-loader-spinner";

export function Loader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Triangle
        height="160"
        width="160"
        color=" #40bf86"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        //@ts-ignore
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
}
