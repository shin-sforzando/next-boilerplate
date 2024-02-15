import CornerRibbon from "./CornerRibbon.module.css"

const EnvIndicator = () => {
  return (
    <>
      {process.env.NODE_ENV !== "production" && (
        <div
          className={`${CornerRibbon.ribbon} ${CornerRibbon["top-right"]}`}
          data-testid="EnvIndicator"
        >
          {process.env.NODE_ENV}
        </div>
      )}
    </>
  )
}

export default EnvIndicator
