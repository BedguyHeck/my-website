import { forwardRef } from "react"

const PageTransition = forwardRef((props, ref) => {

  return (
    <div
      ref={ref}
      className="page-transition"
    ></div>
  )

})

export default PageTransition