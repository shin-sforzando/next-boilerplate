import Ribbon from "./Ribbon.module.css"

const EnvIndicator = () => {
  return (
    <>
      {process.env.NODE_ENV !== "production" && (
        <div className={`${Ribbon.ribbon} ${Ribbon.right}`}>
          {process.env.NODE_ENV}
        </div>
      )}
    </>
  )
}

export default EnvIndicator
